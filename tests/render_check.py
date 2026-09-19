"""Rendert jede Karte jedes Decks headless und meldet: KaTeX-Fehler, leere Fragen,
fehlende Felder, doppelte IDs, unbekannte Kategorien, ungültiges niveau, JS-Fehler.
Aufruf: python tests/render_check.py [deck ...]   -> Exit 1 bei Mängeln."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright
from playwright.sync_api import TimeoutError as PWTimeout

ROOT = Path(__file__).resolve().parent.parent
DECKS = sys.argv[1:] or ["analysis", "geometrie", "stochastik", "klasse10", "klasse9", "klasse8", "klasse7"]
# Kürzer als das ist keine Frage, sondern ein leerer/abgeschnittener String (z. B. nur ein "?").
MIN_QUESTION_CHARS = 3


def check_deck(page, deck):
    errors = []
    handler = lambda e: errors.append(f"{deck}: JS-Fehler: {e}")
    page.on("pageerror", handler)
    page.goto(f"file:///{ROOT.as_posix()}/trainer.html?deck={deck}&niveau=ea")
    try:
        page.wait_for_function("window.REPETITIO && window.REPETITIO.state !== 'loading'", timeout=10000)
    except PWTimeout:
        return [f"{deck}: Deck laedt nicht (Syntaxfehler in data/{deck}.js? `node --check` hilft)"]
    if page.evaluate("window.REPETITIO.state") != "ready":
        return [f"{deck}: Deck konnte nicht geladen werden"]
    meta = page.evaluate("""() => {
        const d = window.REPETITIO.deck;
        return { n: d.cards.length, cats: Object.keys(d.categories),
                 cards: d.cards.map(c => ({id: c.id, category: c.category, niveau: c.niveau,
                                           hasQ: !!c.question, hasA: !!c.answer})) };
    }""")
    seen = set()
    for c in meta["cards"]:
        if c["id"] in seen:
            errors.append(f"{deck}: doppelte ID {c['id']}")
        seen.add(c["id"])
        if not c["hasQ"] or not c["hasA"]:
            errors.append(f"{deck}/{c['id']}: question/answer fehlt")
        if c["category"] not in meta["cats"]:
            errors.append(f"{deck}/{c['id']}: unbekannte Kategorie {c['category']}")
        if c["niveau"] not in ("ga", "ea"):
            errors.append(f"{deck}/{c['id']}: niveau={c['niveau']}")
    # Bei niveau=ea und Tab "Alle" ist filteredCards === deck.cards -> Index i = Karte i
    for i in range(meta["n"]):
        cid = meta["cards"][i]["id"]
        page.evaluate(f"window.REPETITIO.showCard({i})")
        qtext = page.evaluate("document.getElementById('cardQuestion').innerText.trim()")
        if len(qtext) <= MIN_QUESTION_CHARS:
            errors.append(f"{deck}/{cid}: Frage leer/abgeschnitten: {qtext!r}")
        bad = page.evaluate("""() => [...document.querySelectorAll('#flashcard .katex-error')]
                                        .map(e => e.getAttribute('title') || e.textContent)""")
        # Unbekannte Makros (z. B. farc statt frac) erzeugen keinen .katex-error, nur rot gefärbten Text
        bad += page.evaluate("""() => [...document.querySelectorAll('#flashcard .katex-mathml mstyle[mathcolor="#cc0000"]')]
                                        .map(e => 'unbekanntes Makro: ' + e.textContent)""")
        for b in bad:
            errors.append(f"{deck}/{cid}: KaTeX: {b[:120]}")
        # auto-render lässt Formeln mit unbalancierten Klammern als Rohtext stehen (kein .katex-error):
        # gerenderte .katex-Knoten entfernen, dann nach übrig gebliebenen Delimitern suchen
        rest = page.evaluate("""() => {
            const clone = document.getElementById('flashcard').cloneNode(true);
            clone.querySelectorAll('.katex, .katex-display').forEach(e => e.remove());
            const bs = String.fromCharCode(92);
            const re = new RegExp(bs + bs + '[()]|[$][$]', 'g');
            return clone.textContent.match(re) || [];
        }""")
        if rest:
            errors.append(f"{deck}/{cid}: unverarbeitete Formel-Delimiter im Text: {' '.join(rest)}")
        # Formel-Overflow: Karte aufdecken, alle <details> öffnen, dann Breite jeder Formelbox prüfen (Viewport 1000 px)
        over = page.evaluate("""() => {
            const card = document.getElementById('flashcard');
            if (!card.classList.contains('flipped')) window.flipCard();
            card.querySelectorAll('details').forEach(d => d.open = true);
            return [...card.querySelectorAll('.formula-box, .katex-display')]
                .map(el => el.scrollWidth - el.clientWidth).filter(d => d > 2);
        }""")
        for d in over:
            errors.append(f"{deck}/{cid}: Formel läuft über: {d} px")
    page.remove_listener("pageerror", handler)
    print(f"{deck}: {meta['n']} Karten geprüft, {len([e for e in errors if e.startswith(deck)])} Mängel")
    return errors


PHONE_WIDTH = 400


def check_phone(page, deck):
    """Handybreite: jede Karte geflippt mit offenen Details – die Seite darf nicht breiter als der
    Viewport werden, und keine Formelbox darf horizontal überlaufen (abgeschnittene Formel)."""
    errors = []
    page.goto(f"file:///{ROOT.as_posix()}/trainer.html?deck={deck}&niveau=ea")
    try:
        # Syntaxfehler in der Deckdatei -> das Deck wird nie "ready". Als Mangel melden,
        # nicht in den Playwright-Timeout laufen.
        page.wait_for_function("window.REPETITIO && window.REPETITIO.state === 'ready'", timeout=10000)
    except PWTimeout:
        return [f"{deck}: Deck laedt nicht (Syntaxfehler in data/{deck}.js? `node --check` hilft)"]
    n = page.evaluate("window.REPETITIO.deck.cards.length")
    for i in range(n):
        res = page.evaluate(f"""() => {{
            window.REPETITIO.showCard({i});
            const card = document.getElementById('flashcard');
            if (!card.classList.contains('flipped')) window.flipCard();
            card.querySelectorAll('details').forEach(d => d.open = true);
            return {{ id: window.REPETITIO.filteredCards[{i}].id,
                     sw: document.documentElement.scrollWidth,
                     over: [...card.querySelectorAll('.formula-box, .katex-display')]
                        .map(el => el.scrollWidth - el.clientWidth).filter(d => d > 2) }};
        }}""")
        if res["sw"] > PHONE_WIDTH:
            errors.append(f"{deck}/{res['id']}: Seite bei {PHONE_WIDTH} px zu breit: scrollWidth {res['sw']}")
        for d in res["over"]:
            errors.append(f"{deck}/{res['id']}: Formel läuft bei {PHONE_WIDTH} px über: {d} px")
    print(f"{deck} @{PHONE_WIDTH}px: {n} Karten geprüft, {len(errors)} Mängel")
    return errors


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    errors = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1000, "height": 900})
        for d in DECKS:
            errors += check_deck(page, d)
        page = b.new_page(viewport={"width": PHONE_WIDTH, "height": 900})
        for d in DECKS:
            errors += check_phone(page, d)
        b.close()
    for e in errors:
        print("  !", e)
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
