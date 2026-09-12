# Repetitio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Die drei GK-Karteikarten-Trainer aus `schule/Trainer-Lokal/Abi` zu einem öffentlichen Projekt „Repetitio" mit einer Engine, drei Decks (Analysis/Geometrie/Stochastik) und beiden Abitur-Niveaus (gA/eA) umbauen.

**Architecture:** Statische Seiten ohne Build. `trainer.html` lädt per URL-Parameter ein Deck (`data/<deck>.js` setzt `window.REPETITIO_DECKS[deck]`), filtert nach Niveau, generiert Kategorie-Tabs und betreibt die bestehende SM-2-Logik. `index.html` ist die Startseite mit Fach-Kacheln und Niveau-Schalter. Deck-Farben über CSS-Variablen (`body[data-deck]`).

**Tech Stack:** HTML/CSS/Vanilla JS, KaTeX (vendor, offline), Python 3 + Playwright für Render-Check und Sichtprüfung, Wolfram (MCP) für Fachprüfung, Git/GitHub Pages.

**Design:** `docs/plans/2026-09-12-repetitio-design.md`

**Projektpfad:** `C:\DevProjects\schule\Trainer-Public\Repetitio` (unten `$R`). Alle Befehle in Git Bash aus `$R`.
**Quellen:** `C:\DevProjects\schule\Trainer-Lokal\Abi\{analysis,geometrie,stochastik}-trainer.html` (unten `$SRC`). Diese Dateien werden **nicht** verändert.

**Öffentlichkeitsregel (bindend):** Keine Verlags-/Buch-/Seiten-Angaben, keine wörtlichen Verlagspassagen, keine Index-Daten in diesem Repo. Der Materialindex dient nur als Vorlage für Aufgabenformen.

---

### Task 1: Projekt anlegen, Git initialisieren, Design-Doc committen

**Files:**
- Create: `$R/.gitignore`, `$R/README.md`
- Copy: `$SRC/vendor/katex/` → `$R/vendor/katex/`

**Step 1: Git**

```bash
cd /c/DevProjects/schule/Trainer-Public/Repetitio
git init -b main
```

**Step 2: .gitignore**

```
__pycache__/
.pytest_cache/
tests/reports/
*.pyc
```

**Step 3: README.md (Stub)**

```markdown
# Repetitio

*repetitio est mater studiorum* — Methodentrainer Mathematik mit Spaced Repetition.

Karteikarten „Wie mache ich X?" für das Abitur Sachsen-Anhalt, grundlegendes (gA) und
erhöhtes (eA) Anforderungsniveau. Öffnen: `index.html` (funktioniert auch per Doppelklick).

Decks: Analysis · Analytische Geometrie · Stochastik

Erstellt mit KI-Unterstützung (Anthropic Claude); fachlich geprüft.
```

**Step 4: KaTeX kopieren**

```bash
mkdir -p vendor && cp -r /c/DevProjects/schule/Trainer-Lokal/Abi/vendor/katex vendor/katex
ls vendor/katex/katex.min.js vendor/katex/contrib/auto-render.min.js   # beide müssen existieren
```

**Step 5: Commit**

```bash
git add .gitignore README.md docs/ vendor/
git commit -m "chore: Repetitio-Projekt anlegen (Design-Doc, KaTeX vendor)"
```

---

### Task 2: repetitio.css — gemeinsames Stylesheet mit Deck-Farbvariablen

**Files:**
- Create: `$R/repetitio.css`

**Step 1: CSS aus analysis-trainer.html extrahieren**

```bash
python - <<'EOF'
s=open("/c/DevProjects/schule/Trainer-Lokal/Abi/analysis-trainer.html",encoding="utf-8").read()
css=s[s.find("<style>")+7:s.find("</style>")]
css="\n".join(l[8:] if l.startswith("        ") else l for l in css.splitlines())
open("repetitio.css","w",encoding="utf-8").write(css.strip()+"\n")
EOF
```

**Step 2: Akzentfarben durch Variablen ersetzen** (alle Vorkommen, per Edit `replace_all`):

- `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` → `linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)`
- `linear-gradient(135deg, #667eea, #764ba2)` → `linear-gradient(135deg, var(--accent), var(--accent2))`
- `#667eea` → `var(--accent)`
- `rgba(102, 126, 234, 0.05)` → `var(--accent-soft)`
- `rgba(102, 126, 234, 0.4)` → `var(--accent-shadow)`
- `linear-gradient(145deg, #f0fdf4, #dcfce7)` → `linear-gradient(145deg, var(--back1), var(--back2))`
- `color: #166534` (in `.card-answer h4`) → `color: var(--back-heading)`

Am Anfang der Datei einfügen:

```css
:root, body[data-deck="analysis"] {
    --accent: #667eea; --accent2: #764ba2;
    --accent-soft: rgba(102,126,234,0.05); --accent-shadow: rgba(102,126,234,0.4);
    --back1: #f0fdf4; --back2: #dcfce7; --back-heading: #166534;
}
body[data-deck="geometrie"] {
    --accent: #11998e; --accent2: #38ef7d;
    --accent-soft: rgba(17,153,142,0.05); --accent-shadow: rgba(17,153,142,0.4);
}
body[data-deck="stochastik"] {
    --accent: #f093fb; --accent2: #f5576c;
    --accent-soft: rgba(245,87,108,0.05); --accent-shadow: rgba(240,147,251,0.4);
    --back1: #fdf2f8; --back2: #fce7f3; --back-heading: #be185d;
}
```

Am Ende anhängen:

```css
/* Niveau */
.niveau-switch { display:flex; justify-content:center; gap:6px; margin-bottom:14px; }
.niveau-switch button { padding:6px 14px; border-radius:16px; border:2px solid rgba(255,255,255,0.7); background:transparent; color:white; cursor:pointer; font-weight:600; }
.niveau-switch button.active { background:white; color:var(--accent); }
.badge-ea { display:inline-block; margin-left:8px; padding:2px 8px; border-radius:10px; background:var(--accent); color:white; font-size:0.7rem; font-weight:700; vertical-align:middle; }
/* Startseite */
.deck-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; }
.deck-card { display:block; background:white; border-radius:16px; padding:24px; text-decoration:none; color:#1f2937; box-shadow:0 10px 30px rgba(0,0,0,0.15); border-top:8px solid var(--accent); transition:transform .2s; }
.deck-card:hover { transform:translateY(-4px); }
.deck-card h2 { margin-bottom:6px; }
.deck-card p { color:#6b7280; font-size:0.95rem; }
.error-box { background:white; border-radius:16px; padding:30px; text-align:center; }
footer { text-align:center; color:rgba(255,255,255,0.8); font-size:0.8rem; margin-top:30px; }
footer a { color:white; }
```

**Step 3: Prüfen** — `grep -n "#667eea" repetitio.css` zeigt genau eine Zeile (den `:root`-Block).

**Step 4: Commit**

```bash
git add repetitio.css && git commit -m "feat: gemeinsames Stylesheet mit Deck-Farbvariablen"
```

---

### Task 3: GK-Karten in Deck-Dateien konvertieren

**Files:**
- Create: `$R/tools/convert_gk.py`, `$R/data/analysis.js`, `$R/data/geometrie.js`, `$R/data/stochastik.js`

**Step 1: Konverter** (`tools/convert_gk.py`)

```python
"""Einmaliger Konverter: cards-Array der drei GK-Trainer -> data/<deck>.js
Aufruf: python tools/convert_gk.py   (aus dem Projektordner)"""
import re
from pathlib import Path

SRC = Path(r"C:\DevProjects\schule\Trainer-Lokal\Abi")
OUT = Path(__file__).resolve().parent.parent / "data"

DECKS = {
    "analysis":   ("ana", "Analysis", "Ableiten, Kurvendiskussion, Integrieren",
                   {"ableitung": "Ableitung", "kurvendiskussion": "Kurvendisk.", "integral": "Integral", "sonstiges": "Sonstiges"}),
    "geometrie":  ("geo", "Analytische Geometrie", "Vektoren, Geraden, Ebenen, LGS",
                   {"vektoren": "Vektoren", "geraden": "Geraden", "ebenen": "Ebenen", "lgs": "LGS"}),
    "stochastik": ("sto", "Stochastik", "Wahrscheinlichkeit, Binomialverteilung, Kenngrößen",
                   {"grundlagen": "Grundlagen", "binomial": "Binomial", "kenngroessen": "Kenngrößen", "bedingt": "Bedingt"}),
}

def extract_cards(html: str) -> str:
    start = html.index("const cards = [") + len("const cards = ")
    end = html.index("];", start) + 1
    return html[start:end]

def main():
    OUT.mkdir(exist_ok=True)
    for deck, (prefix, title, subtitle, cats) in DECKS.items():
        html = (SRC / f"{deck}-trainer.html").read_text(encoding="utf-8")
        cards = extract_cards(html)
        cards = re.sub(r'id:\s*(\d+),',
                       lambda m: f'id: "{prefix}-{int(m.group(1)):03d}", niveau: "ga",', cards)
        cards = "\n".join(l[8:] if l.startswith("        ") else l for l in cards.splitlines())
        cat_js = ",\n".join(f'        {k}: "{v}"' for k, v in cats.items())
        js = (f"// Repetitio-Deck: {title} (gA-Karten aus dem GK-Trainer, eA-Karten ergänzt)\n"
              f"window.REPETITIO_DECKS = window.REPETITIO_DECKS || {{}};\n"
              f'window.REPETITIO_DECKS["{deck}"] = {{\n'
              f'    title: "{title}",\n    subtitle: "{subtitle}",\n'
              f"    categories: {{\n{cat_js}\n    }},\n"
              f"    cards: {cards}\n}};\n")
        (OUT / f"{deck}.js").write_text(js, encoding="utf-8")
        print(deck, "->", cards.count("niveau:"), "Karten")

if __name__ == "__main__":
    main()
```

**Step 2: Ausführen**

```bash
python tools/convert_gk.py
```
Erwartet: `analysis -> 32 Karten`, `geometrie -> 23 Karten`, `stochastik -> 25 Karten`.

**Step 3: Syntax prüfen**

```bash
for d in analysis geometrie stochastik; do node -e "window={};require('./data/$d.js');console.log('$d', window.REPETITIO_DECKS['$d'].cards.length)"; done
```
Erwartet: 32 / 23 / 25. Falls `node` fehlt: Task 5 prüft dasselbe über Playwright.

**Step 4: Commit**

```bash
git add tools/convert_gk.py data/ && git commit -m "feat: GK-Karten als Decks (analysis, geometrie, stochastik)"
```

---

### Task 4: Engine (trainer.html + repetitio-engine.js)

**Files:**
- Create: `$R/trainer.html`, `$R/repetitio-engine.js`

**Step 1: trainer.html**

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repetitio</title>
    <link rel="stylesheet" href="vendor/katex/katex.min.css">
    <link rel="stylesheet" href="repetitio.css">
    <script src="vendor/katex/katex.min.js"></script>
    <script src="vendor/katex/contrib/auto-render.min.js"></script>
</head>
<body>
    <div class="container">
        <header>
            <h1 id="deckTitle">Repetitio</h1>
            <p id="deckSubtitle"></p>
        </header>

        <div class="niveau-switch" id="niveauSwitch">
            <button data-niveau="ga">gA · Grundkurs</button>
            <button data-niveau="ea">eA · Leistungskurs</button>
        </div>

        <div class="category-tabs" id="categoryTabs"></div>

        <div style="text-align: center;">
            <button class="shuffle-btn" onclick="shuffleCards()">🔀 Mischen</button>
            <button class="reset-btn" onclick="resetProgress()">Fortschritt zurücksetzen</button>
        </div>

        <div class="progress-bar"><div class="progress-fill" id="progressFill">0%</div></div>

        <div class="card-container">
            <div class="card" id="flashcard">
                <div class="card-front">
                    <div class="card-category" id="cardCategory"></div>
                    <div class="card-question" id="cardQuestion"></div>
                </div>
                <div class="card-back">
                    <div class="card-category" id="cardCategoryBack"></div>
                    <div class="card-answer" id="cardAnswer"></div>
                </div>
            </div>
        </div>

        <div class="controls">
            <button class="btn btn-nav" id="prevBtn" onclick="prevCard()">← Zurück</button>
            <button class="btn btn-flip" id="flipBtn" onclick="flipCard()">Aufdecken</button>
            <button class="btn btn-nav" id="nextBtn" onclick="nextCard()">Weiter →</button>
        </div>

        <div class="rating-buttons" id="ratingButtons">
            <button class="btn btn-again" onclick="rateCard(1)">Nochmal</button>
            <button class="btn btn-hard" onclick="rateCard(3)">Schwer</button>
            <button class="btn btn-good" onclick="rateCard(4)">Gut</button>
            <button class="btn btn-easy" onclick="rateCard(5)">Leicht</button>
        </div>
        <div class="next-review" id="nextReview"></div>
        <div class="card-counter" id="cardCounter"></div>

        <div class="stats">
            <div class="stat"><div class="stat-value" id="knownCount">0</div><div class="stat-label">Gewusst</div></div>
            <div class="stat"><div class="stat-value" id="unknownCount">0</div><div class="stat-label">Üben</div></div>
            <div class="stat"><div class="stat-value" id="remainingCount">0</div><div class="stat-label">Offen</div></div>
        </div>

        <nav class="nav-links"><a href="index.html">← Alle Decks</a></nav>
        <footer>Repetitio · <a href="index.html">Startseite</a> · erstellt mit KI-Unterstützung (Anthropic Claude)</footer>
    </div>
    <script src="repetitio-engine.js"></script>
</body>
</html>
```

**Step 2: repetitio-engine.js**

Übernimmt aus `$SRC/analysis-trainer.html` die Funktionen `createNewCardProgress`, `updateCardProgress`, `formatInterval`, `saveProgress`, `renderMath`, `displayCard`, `flipCard`, `nextCard`, `prevCard`, `rateCard`, `markCard`, `filterByCategory`, `shuffleCards`, `resetProgress`, `updateCounter`, `updateStats`, `updateProgressBar` und die Tastatursteuerung **unverändert**, mit folgendem neuen Kopf:

```js
// ---- Deck laden ----
const params = new URLSearchParams(location.search);
const DECK_ID = params.get("deck") || "";
const NIVEAU_KEY = "repetitio:niveau";
let niveau = params.get("niveau") || localStorage.getItem(NIVEAU_KEY) || "ga";
if (niveau !== "ea") niveau = "ga";

let deck = null;        // { title, subtitle, categories, cards }
let cards = [];         // nach Niveau gefilterte Karten
let currentIndex = 0;
let filteredCards = [];
let progress = {};
let activeCategory = "all";
const STORAGE_KEY = "repetitio:" + DECK_ID;

function showError(msg) {
    document.querySelector(".container").innerHTML =
        `<div class="error-box"><h2>Deck nicht gefunden</h2><p>${msg}</p>
         <p><a href="index.html">Zur Startseite</a></p></div>`;
}

function loadDeck() {
    if (!/^[a-z0-9_-]+$/.test(DECK_ID)) { showError("Kein gültiges Deck angegeben."); return; }
    const s = document.createElement("script");
    s.src = "data/" + DECK_ID + ".js";
    s.onload = () => {
        deck = (window.REPETITIO_DECKS || {})[DECK_ID];
        if (!deck) { showError(`Die Datei data/${DECK_ID}.js enthält kein Deck „${DECK_ID}".`); return; }
        initTrainer();
    };
    s.onerror = () => showError(`Das Deck „${DECK_ID}" gibt es nicht.`);
    document.head.appendChild(s);
}

function loadProgress() {
    try { progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { progress = {}; }
}

function applyNiveau() {
    cards = deck.cards.filter(c => niveau === "ea" || c.niveau !== "ea");
    document.querySelectorAll("#niveauSwitch button").forEach(b =>
        b.classList.toggle("active", b.dataset.niveau === niveau));
    filterByCategory(activeCategory);
}

function setNiveau(n) {
    niveau = n; localStorage.setItem(NIVEAU_KEY, n);
    const u = new URL(location); u.searchParams.set("niveau", n); history.replaceState(null, "", u);
    applyNiveau();
}

function categoryOf(card) { return card.category in deck.categories ? card.category : "sonstiges"; }

function buildTabs() {
    const tabs = document.getElementById("categoryTabs");
    const cats = { all: "Alle", ...deck.categories };
    for (const c of deck.cards) if (!(c.category in deck.categories)) {
        console.warn("Unbekannte Kategorie", c.category, "bei Karte", c.id);
        cats.sonstiges = cats.sonstiges || "Sonstiges";
    }
    tabs.innerHTML = Object.entries(cats).map(([k, v]) =>
        `<button class="category-tab${k === "all" ? " active" : ""}" data-category="${k}">${v}</button>`).join("");
    tabs.querySelectorAll(".category-tab").forEach(tab =>
        tab.addEventListener("click", () => filterByCategory(tab.dataset.category)));
}

function initTrainer() {
    document.body.dataset.deck = DECK_ID;
    document.title = "Repetitio · " + deck.title;
    document.getElementById("deckTitle").textContent = deck.title;
    document.getElementById("deckSubtitle").textContent = deck.subtitle;
    document.querySelectorAll("#niveauSwitch button").forEach(b =>
        b.addEventListener("click", () => setNiveau(b.dataset.niveau)));
    buildTabs();
    loadProgress();
    applyNiveau();
}

// Prüf-API (Render-Check, Tests)
window.REPETITIO = {
    get deck() { return deck; }, get cards() { return cards; },
    get filteredCards() { return filteredCards; }, get niveau() { return niveau; },
    showCard(i) { currentIndex = i; displayCard(); }, setNiveau,
};

loadDeck();
```

Anpassungen in den übernommenen Funktionen:
- `displayCard()`: Kategorie-Label `deck.categories[categoryOf(card)] || "Sonstiges"` statt `card.category.toUpperCase()`; Frage mit Badge:
  `document.getElementById('cardQuestion').innerHTML = card.question + (card.niveau === 'ea' ? ' <span class="badge-ea">eA</span>' : '');`
- `filterByCategory(category)`: erste Zeile `activeCategory = category;`, Filter `cards.filter(c => categoryOf(c) === category)`.
- `renderMath()`: `document.getElementById('flashcard')` statt `document.body`.
- Der alte Migrationsblock (`analysis-trainer-progress`) und der Aufruf-Block `loadProgress(); displayCard(); updateProgressBar();` am Ende entfallen.
- Kein `const cards`/`let filteredCards = [...cards]` mehr am Anfang (jetzt oben deklariert).

**Step 3: Manuell prüfen**

Browser: `file:///C:/DevProjects/schule/Trainer-Public/Repetitio/trainer.html?deck=analysis` — Titel „Analysis", 5 Tabs, Karte 1, Formeln gerendert, Flip. `?deck=quatsch` → Fehlerbox mit Link.

**Step 4: Commit**

```bash
git add trainer.html repetitio-engine.js && git commit -m "feat: Engine mit Deck-Laden, Niveau-Filter, generierten Tabs"
```

---

### Task 5: Render-Check (Playwright) — Gate für alle Karten

**Files:**
- Create: `$R/tests/render_check.py`, `$R/tests/test_engine.py`

**Step 1: render_check.py**

```python
"""Rendert jede Karte jedes Decks headless und meldet: KaTeX-Fehler, fehlende Felder,
doppelte IDs, unbekannte Kategorien, ungültiges niveau, JS-Fehler.
Aufruf: python tests/render_check.py [deck ...]   -> Exit 1 bei Mängeln."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
DECKS = sys.argv[1:] or ["analysis", "geometrie", "stochastik"]

def check_deck(page, deck):
    errors = []
    page.goto(f"file:///{ROOT.as_posix()}/trainer.html?deck={deck}&niveau=ea")
    page.wait_for_function("window.REPETITIO && window.REPETITIO.deck")
    meta = page.evaluate("""() => {
        const d = window.REPETITIO.deck;
        return { n: d.cards.length, cats: Object.keys(d.categories),
                 cards: d.cards.map(c => ({id: c.id, category: c.category, niveau: c.niveau,
                                           hasQ: !!c.question, hasA: !!c.answer})) };
    }""")
    seen = set()
    for c in meta["cards"]:
        if c["id"] in seen: errors.append(f"{deck}: doppelte ID {c['id']}")
        seen.add(c["id"])
        if not c["hasQ"] or not c["hasA"]: errors.append(f"{deck}/{c['id']}: question/answer fehlt")
        if c["category"] not in meta["cats"]: errors.append(f"{deck}/{c['id']}: unbekannte Kategorie {c['category']}")
        if c["niveau"] not in ("ga", "ea"): errors.append(f"{deck}/{c['id']}: niveau={c['niveau']}")
    for i in range(meta["n"]):
        page.evaluate(f"window.REPETITIO.showCard({i})")
        bad = page.evaluate("""() => [...document.querySelectorAll('#flashcard .katex-error')]
                                        .map(e => e.getAttribute('title') || e.textContent)""")
        cid = meta["cards"][i]["id"]
        for b in bad: errors.append(f"{deck}/{cid}: KaTeX: {b[:120]}")
    print(f"{deck}: {meta['n']} Karten geprüft, {len([e for e in errors if e.startswith(deck)])} Mängel")
    return errors

def main():
    errors = []
    with sync_playwright() as p:
        b = p.chromium.launch(); page = b.new_page()
        page.on("pageerror", lambda e: errors.append(f"JS-Fehler: {e}"))
        for d in DECKS: errors += check_deck(page, d)
        b.close()
    for e in errors: print("  !", e)
    sys.exit(1 if errors else 0)

if __name__ == "__main__":
    main()
```

Hinweise: `renderMath()` behält `throwOnError: false`, damit KaTeX `.katex-error`-Elemente erzeugt, die der Check findet. Mit `niveau=ea` und Tab „Alle" gilt `filteredCards === cards` (alle Karten), daher zeigt `showCard(i)` jede Karte.

**Step 2: Ausführen**

```bash
python tests/render_check.py
```
Erwartet: `analysis: 32 Karten geprüft, 0 Mängel` usw., Exit 0. Gefundene Mängel in den GK-Karten (die Fragen-Extraktion zeigte bei stochastik zwei Fragen mit Zeilenumbruch: „Wie rechne ich \" und „Wie löse ich \") **in `data/*.js` beheben**: Frage auf eine Zeile ziehen.

**Step 3: test_engine.py**

```python
"""Engine-Verhalten: Niveau-Filter, Speicherung, Fehlerseite.
Aufruf: python -m pytest tests/test_engine.py -q"""
from pathlib import Path
import pytest
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
URL = f"file:///{ROOT.as_posix()}/trainer.html"

@pytest.fixture(scope="module")
def page():
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page(); yield pg; b.close()

def counts(page):
    return page.evaluate("[window.REPETITIO.cards.length, window.REPETITIO.deck.cards.length]")

def test_ga_hides_ea_cards(page):
    page.goto(URL + "?deck=analysis&niveau=ga"); page.wait_for_function("window.REPETITIO.deck")
    shown, total = counts(page)
    ea = page.evaluate("window.REPETITIO.deck.cards.filter(c => c.niveau === 'ea').length")
    assert shown == total - ea

def test_ea_shows_all_and_persists(page):
    page.goto(URL + "?deck=analysis&niveau=ga"); page.wait_for_function("window.REPETITIO.deck")
    page.click("#niveauSwitch button[data-niveau=ea]")
    shown, total = counts(page); assert shown == total
    assert page.evaluate("localStorage.getItem('repetitio:niveau')") == "ea"

def test_rating_saves_progress(page):
    page.goto(URL + "?deck=geometrie"); page.wait_for_function("window.REPETITIO.deck")
    page.click("#flipBtn"); page.click(".btn-good")
    saved = page.evaluate("JSON.parse(localStorage.getItem('repetitio:geometrie'))")
    assert list(saved.values())[0]["repetitions"] == 1

def test_unknown_deck_shows_error(page):
    page.goto(URL + "?deck=gibtsnicht")
    page.wait_for_selector(".error-box")
    assert "Startseite" in page.inner_text(".error-box")
```

**Step 4: Ausführen**

```bash
python -m pytest tests/test_engine.py -q
```
Erwartet: `4 passed`.

**Step 5: Commit**

```bash
git add tests/ data/ && git commit -m "test: Render-Check und Engine-Tests (Playwright)"
```

---

### Task 6: Startseite index.html

**Files:**
- Create: `$R/index.html`

**Step 1: Datei**

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repetitio · Methodentrainer Mathematik</title>
    <link rel="stylesheet" href="repetitio.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Repetitio</h1>
            <p><em>repetitio est mater studiorum</em> · Methodentrainer Mathematik Abitur</p>
        </header>
        <div class="niveau-switch" id="niveauSwitch">
            <button data-niveau="ga">gA · Grundkurs</button>
            <button data-niveau="ea">eA · Leistungskurs</button>
        </div>
        <div class="deck-grid">
            <a class="deck-card" data-deck="analysis" href="trainer.html?deck=analysis"><h2>Analysis</h2><p>Ableiten, Kurvendiskussion, Integrieren</p></a>
            <a class="deck-card" data-deck="geometrie" href="trainer.html?deck=geometrie" style="--accent:#11998e"><h2>Analytische Geometrie</h2><p>Vektoren, Geraden, Ebenen, Abstände</p></a>
            <a class="deck-card" data-deck="stochastik" href="trainer.html?deck=stochastik" style="--accent:#f5576c"><h2>Stochastik</h2><p>Wahrscheinlichkeit, Verteilungen, Statistik</p></a>
        </div>
        <footer>Karteikarten mit Spaced Repetition (SM-2). Fortschritt bleibt im Browser. · erstellt mit KI-Unterstützung (Anthropic Claude)</footer>
    </div>
    <script>
        let niveau = localStorage.getItem("repetitio:niveau") || "ga";
        function apply() {
            document.querySelectorAll("#niveauSwitch button").forEach(b => b.classList.toggle("active", b.dataset.niveau === niveau));
            document.querySelectorAll(".deck-card").forEach(a => a.href = `trainer.html?deck=${a.dataset.deck}&niveau=${niveau}`);
        }
        document.querySelectorAll("#niveauSwitch button").forEach(b => b.addEventListener("click", () => {
            niveau = b.dataset.niveau; localStorage.setItem("repetitio:niveau", niveau); apply();
        }));
        apply();
    </script>
</body>
</html>
```

**Step 2: Prüfen** — `index.html` öffnen, eA wählen, Kachel klicken → `trainer.html?deck=…&niveau=ea`, Schalter dort auf eA.

**Step 3: Commit**

```bash
git add index.html && git commit -m "feat: Startseite mit Deck-Kacheln und Niveau-Schalter"
```

---

### Task 7: eA-Karten Analysis (16)

**Files:**
- Modify: `$R/data/analysis.js`
- Create: `$R/docs/plans/pruefprotokoll.md`

**Step 1: Kategorien ergänzen** — `grenzwerte: "Grenzwerte"`, `scharen: "Scharen"`.

**Step 2: Karten anhängen** (IDs `ana-101` ff., `niveau: "ea"`, Stil wie GK-Karten: `<h4>`, `.formula-box`, `<details class="example">`; jede Karte mit Formel, Merksatz und **einem durchgerechneten Zahlenbeispiel**):

| ID | Kategorie | Frage |
|---|---|---|
| ana-101 | grenzwerte | Wie berechne ich Grenzwerte mit den Grenzwertsätzen? |
| ana-102 | grenzwerte | Wie untersuche ich das Verhalten an einer Stelle (Polstelle / Lücke)? |
| ana-103 | grenzwerte | Wie prüfe ich Stetigkeit an einer Stelle? |
| ana-104 | ableitung | Wie leite ich verkettete Funktionen wie \( \sin(x^2) \) oder \( e^{-x^2} \) ab? |
| ana-105 | ableitung | Wie wende ich die Quotientenregel an? |
| ana-106 | ableitung | Wie leite ich die Umkehrfunktion ab (einfache Fälle)? |
| ana-107 | kurvendiskussion | Wie funktioniert das Newton-Verfahren? |
| ana-108 | kurvendiskussion | Wie stelle ich eine Normalengleichung auf? |
| ana-109 | scharen | Wie untersuche ich eine Funktionenschar \( f_a(x) \)? |
| ana-110 | scharen | Wie bestimme ich die Ortskurve der Extrempunkte? |
| ana-111 | scharen | Wie finde ich gemeinsame Punkte aller Scharkurven? |
| ana-112 | integral | Wie integriere ich mit linearer Substitution? |
| ana-113 | integral | Wie integriere ich \( \frac{1}{ax+b} \)? |
| ana-114 | integral | Was ist eine Integralfunktion \( I_a(x) \) und wie leite ich sie ab? |
| ana-115 | integral | Wie berechne ich ein uneigentliches Integral? |
| ana-116 | sonstiges | Wie löse ich eine Extremwertaufgabe mit Nebenbedingung? |

**Step 3: Fachprüfung mit Wolfram** — jedes Beispiel per WolframAlpha-Tool nachrechnen (z. B. `derivative of sin(x^2)`, `integrate 1/(2x+3) dx`, `Newton's method x^3-2x-5 starting at 2`, `limit (x^2-1)/(x-1) as x->1`). Ergebnis je Karte in `docs/plans/pruefprotokoll.md` als Tabelle `ID | Beispiel | Wolfram-Ergebnis | Status` festhalten. Abweichungen an der Karte korrigieren.

**Step 4: Render-Check**

```bash
python tests/render_check.py analysis
```
Erwartet: `analysis: 48 Karten geprüft, 0 Mängel`.

**Step 5: Commit**

```bash
git add data/analysis.js docs/plans/pruefprotokoll.md && git commit -m "feat(analysis): 16 eA-Karten, Wolfram-geprüft"
```

---

### Task 8: eA-Karten Geometrie (15)

**Files:**
- Modify: `$R/data/geometrie.js`, `$R/docs/plans/pruefprotokoll.md`

**Step 1: Kategorien** — `abstand: "Abstände"`, `kreis: "Kreis"`.

**Step 2: Karten** (`geo-101` ff., `niveau: "ea"`):

| ID | Kategorie | Frage |
|---|---|---|
| geo-101 | vektoren | Wie prüfe ich Kollinearität und Komplanarität? |
| geo-102 | ebenen | Wie untersuche ich die Lage zweier Ebenen? |
| geo-103 | ebenen | Wie berechne ich die Schnittgerade zweier Ebenen? |
| geo-104 | ebenen | Wie berechne ich den Schnittwinkel zweier Ebenen? |
| geo-105 | geraden | Wie berechne ich den Schnittwinkel zweier Geraden? |
| geo-106 | abstand | Was ist die Hessesche Normalform und wie nutze ich sie? |
| geo-107 | abstand | Wie berechne ich den Abstand Punkt–Gerade (Lotfußpunkt)? |
| geo-108 | abstand | Wie berechne ich den Abstand windschiefer Geraden? |
| geo-109 | abstand | Wie berechne ich den Abstand paralleler Ebenen bzw. Gerade–Ebene? |
| geo-110 | kreis | Wie stelle ich die Kreisgleichung auf und lese Mittelpunkt/Radius ab? |
| geo-111 | kreis | Wie untersuche ich die Lage Punkt–Kreis und Gerade–Kreis? |
| geo-112 | kreis | Wie untersuche ich die Lage zweier Kreise? |
| geo-113 | kreis | Wie stelle ich die Tangente in einem Kreispunkt auf? |
| geo-114 | kreis | Wie bestimme ich Tangenten von einem äußeren Punkt an den Kreis? |
| geo-115 | lgs | Wie behandle ich ein LGS mit Parameter (Fallunterscheidung)? |

**Step 3: Wolfram-Prüfung** — z. B. `distance from point (1,2,3) to plane 2x-y+2z=4`, `intersection of planes x+y+z=1 and x-y=0`, `distance between lines …`, `intersection of circle (x-1)^2+(y-2)^2=25 and line y=x`; Protokoll ergänzen.

**Step 4:** `python tests/render_check.py geometrie` → `geometrie: 38 Karten geprüft, 0 Mängel`.

**Step 5: Commit** — `git add data/geometrie.js docs/plans/pruefprotokoll.md && git commit -m "feat(geometrie): 15 eA-Karten, Wolfram-geprüft"`

---

### Task 9: eA-Karten Stochastik (12)

**Files:**
- Modify: `$R/data/stochastik.js`, `$R/docs/plans/pruefprotokoll.md`

**Step 1: Kategorien** — `normal: "Normalvert."`, `statistik: "Statistik"`.

**Step 2: Karten** (`sto-101` ff., `niveau: "ea"`):

| ID | Kategorie | Frage |
|---|---|---|
| sto-101 | grundlagen | Wie schreibe ich Ereignisse in Mengenschreibweise (∪, ∩, ∖)? |
| sto-102 | normal | Was bedeutet \( X \sim N(\mu, \sigma^2) \) und wann ist eine Zufallsgröße normalverteilt? |
| sto-103 | normal | Wie berechne ich Wahrscheinlichkeiten bei Normalverteilung (Standardisieren, Φ)? |
| sto-104 | normal | Wie unterscheiden sich diskrete und stetige Zufallsgrößen? |
| sto-105 | normal | Was ist die Gaußsche Dichtefunktion und wie sieht sie aus? |
| sto-106 | normal | Wie bestimme ich μ oder σ aus einer gegebenen Wahrscheinlichkeit? |
| sto-107 | statistik | Was sind Grundgesamtheit, Stichprobe, repräsentative Stichprobe? |
| sto-108 | statistik | Wie berechne ich ein Prognoseintervall für Trefferzahlen? |
| sto-109 | statistik | Wie berechne ich ein Konfidenzintervall für p? |
| sto-110 | statistik | Was ist die Laplace-Bedingung und wann darf ich die σ-Regeln nutzen? |
| sto-111 | statistik | Wie schließe ich von der Stichprobe auf die Grundgesamtheit? |
| sto-112 | statistik | Wie groß muss n sein, damit das Konfidenzintervall eine bestimmte Breite hat? |

**Step 3: Wolfram-Prüfung** — z. B. `P(X<=60) for X~Binomial(100,0.5)`, `normal distribution mean 500 sd 20, P(480<X<530)`, `0.4 ± 1.96*sqrt(0.4*0.6/200)`; Protokoll ergänzen.

**Step 4:** `python tests/render_check.py stochastik` → `stochastik: 37 Karten geprüft, 0 Mängel`.

**Step 5: Commit** — `git add data/stochastik.js docs/plans/pruefprotokoll.md && git commit -m "feat(stochastik): 12 eA-Karten, Wolfram-geprüft"`

---

### Task 10: Sichtprüfung (bindend) und Feinschliff

**Files:**
- Create: `$R/tests/screenshots.py` (Ausgabe `tests/reports/`, gitignored)

**Step 1: Screenshot-Skript**

```python
"""Screenshots für die Sichtprüfung: Startseite, eA-Karte vorne/hinten, Desktop und Handybreite."""
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT = Path(__file__).resolve().parent.parent; OUT = ROOT / "tests" / "reports"; OUT.mkdir(exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch()
    for name, w in [("desktop", 1200), ("phone", 400)]:
        pg = b.new_page(viewport={"width": w, "height": 900})
        pg.goto(f"file:///{ROOT.as_posix()}/index.html"); pg.screenshot(path=OUT / f"index-{name}.png", full_page=True)
        pg.goto(f"file:///{ROOT.as_posix()}/trainer.html?deck=analysis&niveau=ea"); pg.wait_for_function("window.REPETITIO.deck")
        ea = pg.evaluate("window.REPETITIO.cards.findIndex(c => c.niveau === 'ea')")
        pg.evaluate(f"window.REPETITIO.showCard({ea})"); pg.wait_for_timeout(300)
        pg.screenshot(path=OUT / f"card-front-{name}.png", full_page=True)
        pg.click("#flipBtn"); pg.wait_for_timeout(800)
        pg.screenshot(path=OUT / f"card-back-{name}.png", full_page=True)
    b.close()
print("ok ->", OUT)
```

**Step 2: Ausführen** (`python tests/screenshots.py`) **und jedes PNG mit dem Read-Tool ansehen** (6 Bilder). Prüfliste: Titel/Untertitel, Niveau-Schalter aktiv, Tabs vollständig und umbrechend, eA-Badge sichtbar, Formeln nicht abgeschnitten, Rückseite scrollbar, bei 400 px kein horizontales Scrollen, Footer lesbar.

**Step 3: Mängel an der Ursache beheben** (CSS/Engine, nicht Einzelkarte), Screenshots wiederholen, bis sauber. Danach alle Tests: `python tests/render_check.py && python -m pytest tests -q`.

**Step 4: Commit** — `git add tests/screenshots.py repetitio.css repetitio-engine.js && git commit -m "chore: Sichtprüfung, Layout-Feinschliff"`

---

### Task 11: README fertig, Veröffentlichung (nach Okay des Autors)

**Files:**
- Modify: `$R/README.md`

**Step 1: README ergänzen** — Abschnitte: Nutzung (Startseite, Niveau, Tasten ←/→ blättern, Leertaste aufdecken, 1/2 bewerten), Aufbau (Engine/Decks/Kartenmodell nach Design-Doc §2, damit neue Decks angelegt werden können), Tests (`python tests/render_check.py`, `python -m pytest tests -q`), Hinweis: Inhalte eigene Formulierungen, KaTeX MIT-Lizenz.

**Step 2: Commit** — `git add README.md && git commit -m "docs: README"`

**Step 3: Autor fragen**, dann:

```bash
gh repo create Nachbar-blip/repetitio --public --source=. --remote=origin --push
gh api -X POST repos/Nachbar-blip/repetitio/pages -f build_type=legacy -f "source[branch]=main" -f "source[path]=/"
```
Erwartete URL: `https://nachbar-blip.github.io/repetitio/` — nach 1–2 Minuten aufrufen, Startseite und ein Deck mit eA prüfen (Screenshot als Bild lesen).

**Step 4: Abschluss** — in `docs/plans/pruefprotokoll.md` Veröffentlichungsdatum, Kartenzahl (erwartet 48 + 38 + 37 = 123) und Live-URL eintragen; committen und pushen.
