"""Rendert jede Karte jedes Decks headless und meldet: KaTeX-Fehler, leere Fragen,
fehlende Felder, doppelte IDs, unbekannte Kategorien, ungültiges niveau, JS-Fehler.
Aufruf: python tests/render_check.py [deck ...]   -> Exit 1 bei Mängeln."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
DECKS = sys.argv[1:] or ["analysis", "geometrie", "stochastik"]


def check_deck(page, deck):
    errors = []
    page.goto(f"file:///{ROOT.as_posix()}/trainer.html?deck={deck}&niveau=ea")
    page.wait_for_function("window.REPETITIO && window.REPETITIO.state !== 'loading'")
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
        if len(qtext) <= 3:
            errors.append(f"{deck}/{cid}: Frage leer/abgeschnitten: {qtext!r}")
        bad = page.evaluate("""() => [...document.querySelectorAll('#flashcard .katex-error')]
                                        .map(e => e.getAttribute('title') || e.textContent)""")
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
    print(f"{deck}: {meta['n']} Karten geprüft, {len([e for e in errors if e.startswith(deck)])} Mängel")
    return errors


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    errors = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page()
        page.on("pageerror", lambda e: errors.append(f"JS-Fehler: {e}"))
        for d in DECKS:
            errors += check_deck(page, d)
        b.close()
    for e in errors:
        print("  !", e)
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
