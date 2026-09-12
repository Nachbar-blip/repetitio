# Repetitio — Design

*repetitio est mater studiorum* · Methodentrainer Mathematik mit Spaced Repetition
Stand: 2026-09-12 · Status: vom Autor freigegeben

## Ziel

Die drei GK-Karteikarten-Trainer aus `Trainer-Lokal/Abi` (Analysis 32, Geometrie 23,
Stochastik 25 Karten) werden zu **einem** öffentlichen Projekt mit einer Engine und
austauschbaren Karten-Decks. Erste Ausbaustufe: Abitur Sachsen-Anhalt, beide Niveaus
(gA = grundlegend, eA = erhöht) in einer Datenbasis. Spätere Stufen: Klasse 10 → 5,
ganz später ggf. Integration in DiffEngine — erst, wenn Repetitio allein stabil läuft.

## Entscheidungen (aus dem Brainstorming)

| Frage | Entscheidung |
|---|---|
| LK-Umfang | GK + EAN in einem Deck; Karten tragen `niveau`, Schüler wählen per Schalter |
| Architektur | Eine Engine + Karten-Dateien (kein Build, file:// und GitHub Pages) |
| Kartentyp | Methodenkarten wie bisher („Wie mache ich X?" → Formel, Merksatz, Beispiel) |
| Name | Repetitio, Repo `github.com/Nachbar-blip/repetitio` |
| Ort | `schule/Trainer-Public/Repetitio/`, eigenständiges Repo wie Mathepfade/FunctionGym |
| Fachprüfung | Formeln und Beispiele zusätzlich mit Wolfram verifizieren |

## 1. Struktur

```
Trainer-Public/Repetitio/
  index.html            Startseite: Fach-Kacheln, Niveau-Schalter gA/eA
  trainer.html          Engine-Seite (aus analysis-trainer.html extrahiert)
  repetitio.css         Stil (Farbverlauf, Karte, Flip) — einmal statt dreimal
  repetitio-engine.js   SRS (SM-2), Filter, Fortschritt, KaTeX-Rendering
  data/
    analysis.js         window.REPETITIO_DECKS.analysis = { title, categories, cards }
    geometrie.js
    stochastik.js
  vendor/katex/         kopiert aus Trainer-Lokal/Abi/vendor (offline)
  tests/                Render-Check
  docs/plans/           dieses Dokument + Implementierungsplan
  README.md
```

Aufruf: `trainer.html?deck=analysis&niveau=ea`. Neue Jahrgänge = neue `data/*.js`
+ Kachel auf der Startseite; Engine bleibt unberührt.

## 2. Kartenmodell

```js
{
  id: "ana-014",            // deck-präfix, stabil (Fortschritt hängt daran)
  category: "ableitung",    // Schlüssel aus deck.categories
  niveau: "ga" | "ea",      // ga = beide Niveaus, ea = nur LK
  question: "Wie leite ich \( e^{kx} \) ab?",
  answer: `<h4>…</h4><div class="formula-box">$$…$$</div><details class="example">…</details>`
}
```

Deck-Kopf: `{ title, subtitle, categories: { ableitung: "Ableitung", … }, cards: [...] }`.
Kategorie-Tabs werden aus `categories` generiert, nicht hart kodiert.

Bestehende GK-Karten werden inhaltlich 1:1 übernommen (`niveau: "ga"`), IDs neu vergeben.

**eA-Zuwachs** (aus Stoffverteilungsplan 11/12, Stand April 2023):

- Analysis (~15): Grenzwertsätze/rechnerische Grenzwerte, Stetigkeit, Kettenregel
  (vertieft), Newton-Verfahren, Funktionsscharen, Ortskurven, Normalengleichung,
  Ableitung/Stammfunktion Logarithmus, lineare Substitution, Umkehrfunktion (einfach),
  Extremwertaufgaben mit Nebenbedingung, Integralfunktion, Rekonstruktion von Beständen.
- Geometrie (~14): Lage Ebene/Ebene, Schnittgerade, Schnittwinkel Ebene/Ebene,
  Hessesche Normalform, Abstand Punkt/Gerade, Abstand Gerade/Gerade (windschief),
  Kreisgleichung (Vektor-/Koordinatenform), Lage Punkt/Kreis, Gerade/Kreis,
  Kreis/Kreis, Kreistangenten (im Punkt, von außen), Komplanarität/Kollinearität.
- Stochastik (~12): Mengenschreibweise, Normalverteilung (Dichte, X~N(μ,σ²),
  Standardisieren, Wahrscheinlichkeiten), diskret vs. stetig, Grundgesamtheit/Stichprobe,
  Prognoseintervall, Konfidenzintervall, Laplace-Bedingung, Punkt-/Intervallschätzung,
  Schluss von Stichprobe auf Grundgesamtheit.

Niveau-Schalter: gA zeigt nur `ga`-Karten, eA zeigt alle; eA-Karten tragen ein „eA"-Badge.

Fortschritt: `localStorage["repetitio:<deck>"]`, Struktur wie bisher (SM-2: interval,
easeFactor, repetitions, nextReview). Keine Migration alter GK-Keys (anderer Ursprung —
wäre Scheinfunktion).

## 3. Engine

Übernommen unverändert: Karten-Flip, SM-2-Bewertung (Nochmal / Schwer / Gut / Leicht),
„Fällig heute", Shuffle, Fortschrittsbalken, KaTeX-Auto-Render.

Neu: Deck per URL laden (`<script src="data/<deck>.js">` dynamisch), Niveau-Filter
(URL-Parameter + Schalter, Wahl in `localStorage["repetitio:niveau"]`), Kategorie-Tabs
aus Deck-Daten, eA-Badge.

Fehlerfälle: unbekanntes/fehlendes Deck → Meldung mit Link zur Startseite. Kaputter
localStorage-Eintrag → verwerfen, neu anlegen. Unbekannte `category` in einer Karte →
Konsolenwarnung, Karte landet unter „Sonstiges".

## 4. Qualitätssicherung

1. **Render-Check** (`tests/render_check.py`, Playwright headless): lädt jedes Deck,
   rendert alle Karten vorne/hinten, meldet KaTeX-Parse-Fehler, fehlende Felder,
   doppelte IDs, unbekannte Kategorien. Muss grün sein vor jedem Commit.
2. **Fachprüfung mit Wolfram**: jede Formel und jedes Zahlenbeispiel der neuen eA-Karten
   (und stichprobenartig der GK-Karten) wird per WolframAlpha/Wolfram Language
   nachgerechnet (Ableitungen, Integrale, Abstände, Schnittgeraden, Normalverteilungs-
   werte, Intervallgrenzen). Abweichungen werden an der Karte korrigiert, Prüfstatus
   im Implementierungsplan festgehalten.
3. **Sichtprüfung** (bindend): Screenshots von Startseite, Karte vorne/hinten, eA-Badge,
   Kategorie-Tabs, Handybreite 400 px — als Bild gelesen, nicht als Quelltext.
4. **Öffentlichkeit**: keine Quellen-Metadaten, keine wörtlichen Verlagspassagen
   (Index nur als Vorlage). Footer mit KI-Erstellungshinweis wie in Mathepfade.
5. Veröffentlichung: `git init`, Commit, GitHub-Repo `repetitio`, Pages aus `main` —
   Push erst nach Okay des Autors.

## Nicht in dieser Stufe (YAGNI)

Aufgabenkarten mit Selbstcheck, Fehlertyp-Reflexion, Export/Import des Fortschritts,
Klasse 5–10-Decks, DiffEngine-Integration.
