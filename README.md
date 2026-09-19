# Repetitio

*repetitio est mater studiorum*

Repetitio ist ein statischer Karteikarten-Trainer für Mathematik in Sachsen-Anhalt — drei Decks
für das Abitur (auf der Startseite mit „Abi" gekennzeichnet) und vier Decks für die
Klassenstufen 7 bis 10.
Die Karten sind Methodenkarten („Wie mache ich X?"): Vorderseite Frage, Rückseite Regel,
Formel und ein durchgerechnetes Beispiel. Abgedeckt sind das grundlegende (gA) und das erhöhte
Anforderungsniveau (eA). Die Wiederholung steuert ein Spaced-Repetition-Verfahren (SM-2):
Karten, die schwerfallen, kommen früher wieder, sichere Karten seltener.

## Nutzung

- **Öffnen:** `index.html` im Browser öffnen — ein Doppelklick auf die Datei genügt, ein
  Webserver ist nicht nötig. Alternativ über GitHub Pages:
  `https://nachbar-blip.github.io/repetitio/` (Platzhalter, bis die Seite eingerichtet ist).
- **Niveau wählen:** Auf der Startseite gA oder eA. Im gA-Modus werden die eA-Karten
  ausgeblendet. Die Wahl wird gespeichert (`localStorage["repetitio:niveau"]`).
- **Deck wählen:** Analysis, Analytische Geometrie oder Stochastik. Der Trainer wird als
  `trainer.html?deck=<id>&niveau=<ga|ea>` aufgerufen. Innerhalb eines Decks lässt sich
  nach Kategorie filtern.
- **Karte aufdecken:** Klick auf die Karte oder Leertaste/Enter.
- **Bewerten:** Nochmal · Schwer · Gut · Leicht. Die Bewertung geht in den SM-2-Algorithmus
  ein: „Nochmal" setzt die Karte auf Intervall 1 Tag zurück, „Schwer/Gut/Leicht" zählen als
  bestanden (1 Tag → 3 Tage → Intervall × Leichtigkeitsfaktor) und passen den
  Leichtigkeitsfaktor an. Nach drei erfolgreichen Wiederholungen gilt eine Karte als gemeistert.
- **Tastatur:** `←`/`→` blättern, `Leertaste`/`Enter` aufdecken, `1` = Nochmal, `2` = Gut.
- **Fortschritt:** bleibt im Browser, pro Deck unter `localStorage["repetitio:<deck>"]`.
  Es gibt keinen Server und kein Konto; ein anderer Browser oder ein anderes Gerät startet
  bei null. „Fortschritt zurücksetzen" im Trainer löscht den Stand des aktuellen Decks.

## Inhalt

| Deck | gA-Karten | eA-Karten | Kategorien |
|---|---|---|---|
| Analysis (`analysis`) | 32 | 16 | Ableitung, Grenzwerte, Kurvendiskussion, Scharen, Integral, Sonstiges |
| Analytische Geometrie (`geometrie`) | 23 | 15 | Vektoren, Geraden, Ebenen, Abstände, Kreis, LGS |
| Stochastik (`stochastik`) | 25 | 12 | Grundlagen, Bedingte Wahrscheinlichkeit, Binomialverteilung, Kenngrößen, Normalverteilung, Statistik |
| Klasse 10 (`klasse10`) | 76 (kein Niveau) | – | Potenz- & Wurzelfunktionen, Exponential- & Logarithmusfunktionen, Trigonometrische Funktionen, Lineare Gleichungssysteme, Vektoren, Zufallsgrößen |
| Klasse 9 (`klasse9`) | 52 (kein Niveau) | – | Trigonometrie, Potenzen/Wurzeln/Logarithmen, Quadratische Gleichungen & Funktionen, Häufigkeitsverteilungen |
| Klasse 8 (`klasse8`) | 57 (kein Niveau) | – | Terme & Variablen, Ähnlichkeit, Satzgruppe des Pythagoras, Lineare Funktionen, Körperberechnung, Mehrstufige Zufallsversuche |
| Klasse 7 (`klasse7`) | 47 (kein Niveau) | – | Prozent- & Zinsrechnung, Gleichungen & Ungleichungen, Kreis, Körperdarstellung, Häufigkeiten & Wahrscheinlichkeit |

Insgesamt 355 Karten: 123 Abiturkarten (80 gA, 43 eA) und 232 Karten für die Klassenstufen 7 bis 10. eA-Karten tragen im Trainer ein Badge „eA"; im gA-Modus
sind sie nicht sichtbar, im eA-Modus werden gA- und eA-Karten gemeinsam gelernt.

Die eA-Karten decken zusätzlich ab: Grenzwertsätze und rechnerische Grenzwerte, Stetigkeit,
Newton-Verfahren, Funktionsscharen und Ortskurven, Normalengleichung, Ableitung und
Integration des Logarithmus, lineare Substitution, Integralfunktion und Rekonstruktion
von Beständen; Lage Ebene–Ebene mit Schnittgerade und Schnittwinkel, Hessesche Normalform,
Abstände Punkt–Gerade und Gerade–Gerade (windschief), Kreisgleichung und Lagebeziehungen am
Kreis; Normalverteilung, Sigma-Regeln, Konfidenz- und Prognoseintervalle.

## Aufbau

```
Repetitio/
├── index.html              Startseite: Niveau- und Deckwahl
├── trainer.html            Trainer-Seite (lädt data/<deck>.js dynamisch)
├── repetitio-engine.js     Deck laden, Filter, SM-2, Tastatur, localStorage
├── repetitio.css           Gestaltung (Desktop und Phone)
├── data/
│   ├── analysis.js
│   ├── geometrie.js
│   ├── stochastik.js
│   ├── klasse10.js
│   ├── klasse9.js
│   ├── klasse8.js
│   └── klasse7.js          je ein Deck als window.REPETITIO_DECKS["<id>"]
├── vendor/katex/           KaTeX inkl. auto-render, offline
├── tests/
│   ├── render_check.py     Render-Gate (Playwright)
│   ├── test_engine.py      Engine-Tests (pytest + Playwright)
│   ├── screenshots.py      Screenshots für die Sichtprüfung
│   └── reports/            erzeugte Screenshots
└── docs/plans/             Prüfprotokoll (Wolfram-Nachrechnung der eA-Beispiele)
```

### Deck-Format

Ein Deck ist eine JavaScript-Datei, die sich unter ihrer ID in `window.REPETITIO_DECKS`
einträgt:

```js
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["analysis"] = {
    title: "Analysis",
    subtitle: "Ableiten, Kurvendiskussion, Integrieren",
    categories: { ableitung: "Ableitung", integral: "Integral", /* … */ },
    cards: [
        {
            id: "ana-001",            // deckweit eindeutig und stabil – der Fortschritt hängt daran
            niveau: "ga",             // "ga" = beide Niveaus, "ea" = nur erhöhtes Niveau
            category: "ableitung",    // Schlüssel aus categories
            question: "Wie leite ich eine Potenzfunktion ab?",
            answer: `
                <h4>Potenzregel</h4>
                <div class="formula-box">$$f'(x) = n \cdot x^{n-1}$$</div>
                <details class="example">
                    <summary>Beispiel anzeigen</summary>
                    <div class="example-content">\( f(x) = x^3 \Rightarrow f'(x) = 3x^2 \)</div>
                </details>`
        }
    ]
};
```

Hinweise:

- Formeln stehen in KaTeX-Delimitern: `$$…$$` für abgesetzte, `\(…\)` für Formeln im Text.
- `answer` ist ein JavaScript-Template-String. Jeder LaTeX-Backslash muss verdoppelt werden:
  `\frac`, `\cdot`, `\(`. Ein einfaches `\f` wäre ein Steuerzeichen.
- Die Kategorie-Tabs werden aus `categories` erzeugt; jede Karte muss einen dort
  vorhandenen Schlüssel verwenden.
- IDs nicht nachträglich ändern oder doppelt vergeben, sonst geht gespeicherter Fortschritt
  verloren bzw. wird vermischt (`render_check.py` prüft auf Dubletten).

### Neues Deck anlegen

1. `data/<id>.js` nach obigem Muster anlegen; `<id>` besteht nur aus `a–z`, `0–9`, `-`, `_`.
2. In `index.html` eine Kachel ergänzen:
   `<a class="deck-card" data-deck="<id>" href="trainer.html?deck=<id>">…</a>`.
   Die Startseite hängt das gewählte Niveau selbst an.
3. Die Deck-ID in die Standardliste `DECKS` in `tests/render_check.py` aufnehmen (oder das
   Skript mit `python tests/render_check.py <id>` aufrufen) und die Gates ausführen (siehe unten).

## Qualitätssicherung

Voraussetzungen: Python 3, `pip install playwright pytest`, `playwright install chromium`.

- `python tests/render_check.py` — rendert jede Karte im Chromium-Browser und meldet
  KaTeX-Fehler, unbekannte Makros, übrig gebliebene Delimiter, doppelte IDs, unbekannte
  Kategorien sowie Formeln, die bei 1000 px oder 400 px Breite über die Karte hinauslaufen.
  Ziel: 0 Mängel pro Deck.
- `python -m pytest tests -q` — acht Playwright-Tests: gA blendet eA-Karten aus, eA zeigt
  alle Karten und bleibt gespeichert, Bewertung schreibt Fortschritt in `localStorage`,
  unbekanntes Deck zeigt die Fehlerseite, leere Kategorie, Niveau-Links der Startseite,
  aufgedeckte Karte ohne Überlappung, Tastatur nach Button-Klick.
- `python tests/screenshots.py` — erzeugt Screenshots unter `tests/reports/` (Startseite und
  Karten, Desktop und Phone) für die Sichtprüfung. Screenshots werden angesehen, nicht nur
  erzeugt.
- Fachliche Prüfung: alle eA-Beispiele wurden mit Wolfram nachgerechnet; das Protokoll steht
  in `docs/plans/pruefprotokoll.md`.

## Hinweise

- Die gA-Karten wurden einmalig aus den ursprünglichen GK-Trainern übernommen.
- Die Decks „Klasse 7" bis „Klasse 10" folgen den schulinternen Stoffverteilungsplänen
  Mathematik (Gymnasium Sachsen-Anhalt, Stand 01.08.2022) mit ihren Kompetenzschwerpunkten.
  Sie kennen kein gA/eA: alle Karten tragen `niveau: "ga"` und sind in beiden Modi sichtbar.
  Bei Decks ohne eA-Karten blendet der Trainer den Niveau-Schalter aus; auf der Startseite
  weist ein Satz unter dem Schalter darauf hin, dass das Niveau nur die Abitur-Decks betrifft.
- Die Karteninhalte sind eigene Formulierungen. Sie wurden mit KI-Unterstützung
  (Anthropic Claude) erstellt und fachlich geprüft.
- KaTeX (MIT-Lizenz) liegt unter `vendor/katex/`, es werden keine externen Ressourcen geladen.
- Kein Tracking, keine Cookies, keine Requests an fremde Server. Alle Daten bleiben im
  `localStorage` des Browsers.
