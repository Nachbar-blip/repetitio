# Design: Deck „Klasse 10" für Repetitio

Stand 2026-09-19, mit dem Autor abgestimmt.

## Ziel

Repetitio um ein viertes Deck erweitern, das den schulinternen Stoffverteilungsplan
Mathematik Klasse 10 (Gymnasium Sachsen-Anhalt, Stand 01.08.2022) abdeckt.
Karten bleiben Methodenkarten: Vorderseite „Wie mache ich X?", Rückseite Regel,
Formel und ein durchgerechnetes Beispiel.

## Einbettung

- Neue Datei `data/klasse10.js` mit `window.REPETITIO_DECKS["klasse10"]`.
- Vierte Kachel in `index.html`, eigene Akzentfarbe `--accent-ink:#7b5ea7`,
  damit sie sich von den drei Abitur-Decks absetzt.
- `"klasse10"` in die Standardliste `DECKS` in `tests/render_check.py`.
- Keine Änderung an `repetitio-engine.js`, `trainer.html` oder `repetitio.css`.

## Niveau

Alle Karten tragen `niveau: "ga"`. Klasse 10 kennt kein gA/eA; `"ga"` bedeutet in
der Engine „in beiden Modi sichtbar", das Deck ist damit unabhängig vom
Niveau-Schalter der Startseite vollständig.

## Kategorien und Kartenzahl

Gewichtet nach den Unterrichtsstunden des Stoffverteilungsplans
(62 / 14 / 24 / 18 UE für die vier Kompetenzschwerpunkte).
IDs `k10-001` fortlaufend, stabil, deckweit eindeutig.

| Kategorie | Schlüssel | Karten | Inhalt |
|---|---|---|---|
| Potenz- & Wurzelfunktionen | `potenz` | ~18 | Potenzgesetze, Potenzfunktionen mit natürlichen, ganzzahligen und rationalen Exponenten, Symmetrie, Asymptoten, Wurzelfunktion und Umkehrfunktion, Potenz- und Wurzelgleichungen |
| Exponential- & Logarithmusfunktionen | `explog` | ~14 | Logarithmusgesetze, Exponentialgleichungen, Exponentialfunktion mit waagerechter Asymptote, Logarithmusfunktion als Umkehrfunktion, Wachstum und Zerfall, linear gegen exponentiell |
| Trigonometrische Funktionen | `trigo` | ~12 | Einheitskreis, Grad- und Bogenmaß, Quadrantenbeziehungen, Sinus-, Kosinus- und Tangensfunktion, Parameter in a·f(b(x+d))+e, Periode und Amplitude |
| Lineare Gleichungssysteme | `lgs` | ~8 | Einsetzungs- und Additionsverfahren, grafische Lösung, Lösbarkeitsfälle, 3×3 mit Gauß-Schema, Modellierungsansatz |
| Vektoren | `vektoren` | ~12 | Raumkoordinatensystem, Ortsvektor, Betrag und Einheitsvektor, Addition und skalare Multiplikation, Linearkombination, Kollinearität und Komplanarität, Skalarprodukt, Winkel, Orthogonalität, Vektorprodukt |
| Zufallsgrößen | `zufall` | ~10 | Zufallsgröße und Schreibweisen P(X=k), P(X≤k), P(k₁≤X≤k₂), Wahrscheinlichkeitsverteilung als Tabelle und Diagramm, Erwartungswert, Varianz und Standardabweichung, Baumdiagramm und Pfadregeln |

Zusammen rund 74 Karten.

## Inhaltsquelle und Rechte

Zahlenmuster und Aufgabentypen stammen als Vorlage aus dem lokalen Materialindex
(`klasse == 10`), adaptiert und umformuliert. Repetitio liegt öffentlich auf
GitHub Pages: keine Quellenmetadaten, keine wörtlich übernommenen Verlagspassagen,
keine eingebetteten Indexdaten.

## Qualitätssicherung

Nach jeder Kategorie, nicht erst am Ende:

1. `python tests/render_check.py klasse10` — 0 Mängel (KaTeX-Fehler, übrige
   Delimiter, doppelte IDs, unbekannte Kategorien, Überlauf bei 1000 px und 400 px).
2. `python -m pytest tests -q` — bestehende Engine-Tests bleiben grün.
3. Wolfram-Nachrechnung aller Rechenbeispiele, Protokoll in `docs/plans/pruefprotokoll.md`.
4. Screenshots Desktop und Phone mit `tests/screenshots.py`, angesehen als Bild.
5. README aktualisieren: Deck-Tabelle, Kartenzahlen, Aufbau.
