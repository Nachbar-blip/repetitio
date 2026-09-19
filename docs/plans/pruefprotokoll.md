# Prüfprotokoll – eA-Karten Analysis (ana-101 … ana-116)

Fachprüfung der Zahlenbeispiele mit Wolfram Language (Kernel-Auswertung), Stand 2026-09-12.
Status: ✔ = Kartenwert stimmt mit Wolfram überein, „korrigiert" = Karte nach Prüfung geändert.

| ID | Beispiel | Wolfram-Ergebnis | Status |
|---|---|---|---|
| ana-101 | lim (x²−1)/(x−1), x→1 | 2 | ✔ |
| ana-101 | lim (3x²+1)/(x²−4), x→∞ | 3 | ✔ |
| ana-102 | (x²−4)/(x²−2x): Lücke bei x=2 | Grenzwert 2 | ✔ |
| ana-102 | (x²−4)/(x²−2x): Pol bei x=0 | links −∞, rechts +∞ | ✔ |
| ana-103 | Nahtstelle x=1: x²+1 bzw. 3x−1 | beide Grenzwerte 2, f(1)=2 | ✔ |
| ana-103 | 4 = 2a+1 | a = 3/2 | ✔ |
| ana-104 | d/dx sin(x²), e^(−x²), (2x+1)⁵ | 2x·cos(x²); −2x·e^(−x²); 10(2x+1)⁴ | ✔ |
| ana-105 | d/dx x²/(x+1); e^x/x | (x²+2x)/(x+1)²; e^x(x−1)/x² | ✔ |
| ana-106 | f(x)=x³+x, (f⁻¹)'(2) | f'(1)=4 → 1/4 | ✔ |
| ana-107 | Newton x³−2x−5, x₀=2 | x₁=2,1; f(2,1)=0,061; f'(2,1)=11,23; x₂≈2,09457; Nullstelle 2,09455 | ✔ |
| ana-108 | Normale an f(x)=x² in (1\|1) | n(x) = −x/2 + 3/2 | ✔ |
| ana-109 | f_a(x)=x·e^(−ax), a>0 | f'=e^(−ax)(1−ax); x=1/a; y=1/(ae); f''(1/a)=−a/e<0 (Hochpunkt); lim x→∞ = 0, x→−∞ = −∞ | ✔ |
| ana-110 | f_a(x)=x²−2ax+a, Ortskurve | x=a, y=−a²+a → y=−x²+x; g(2)=−2 | ✔ |
| ana-111 | f_a(x)=ax²+(1−a)x, f_a=f_b | x=0 (y=0), x=1 (y=1) | ✔ |
| ana-112 | ∫(2x+3)⁴dx; ∫cos(2x−1)dx; ∫₀¹e^(3x)dx | (2x+3)⁵/10; ½sin(2x−1) (Wolfram: −½cos2x·sin1+½cos1·sin2x, identisch); (e³−1)/3 ≈ 6,3618 | ✔ |
| ana-113 | ∫1/(2x+3)dx; ∫₀¹; ∫4/(1−3x)dx | ½ln(2x+3); ½ln(5/3) ≈ 0,2554; −4/3·ln(1−3x) | ✔ |
| ana-114 | I₁(x)=∫₁ˣ2t dt | x²−1; I₁'=2x; I₁(3)=8 | ✔ |
| ana-115 | ∫₁^∞1/x²; ∫₀^∞e^(−2x); ∫₁^∞1/x | 1; 1/2; divergent | ✔ |
| ana-116 | Z(x)=x(40−2x), 0<x<20 | Z'=0 bei x=10, Z''=−4, Maximum 200 | ✔ |

**Ergebnis:** 24 Teilbeispiele geprüft, 24 ✔, 0 korrigiert.


# Prüfprotokoll – eA-Karten Geometrie (geo-101 … geo-115)

Fachprüfung der Zahlenbeispiele mit Wolfram Language (Kernel-Auswertung), Stand 2026-09-12.
Status: ✔ = Kartenwert stimmt mit Wolfram überein, „korrigiert" = Karte nach Prüfung geändert.

| ID | Beispiel | Wolfram-Ergebnis | Status |
|---|---|---|---|
| geo-101 | (2\|−1\|4), (−4\|2\|−8) kollinear? | b = −2a, Det = 0 | ✔ |
| geo-101 | (1\|0\|1), (0\|1\|1), (1\|1\|2) komplanar? | Det = 0, c = a + b | ✔ |
| geo-102 | n₁=(2\|−1\|2), n₂=(−4\|2\|−4); P(2\|0\|0) in E₂ | n₁×n₂ = 0 (parallel); −8 ≠ 6 → echt parallel | ✔ |
| geo-103 | E₁: x₁+x₂+x₃=3, E₂: x₁−x₂+2x₃=2 | n₁×n₂ = (3\|−1\|−2); Stützpunkt (4\|0\|−1); Probe (7\|−1\|−3) in beiden Ebenen | ✔ |
| geo-104 | Winkel n₁=(1\|1\|0), n₂=(1\|0\|0) | 45° | ✔ |
| geo-105 | Winkel u=(1\|0\|−1), v=(1\|−1\|0) | 60° | ✔ |
| geo-106 | d(P,E), P(3\|1\|4), E: 2x₁−x₂+2x₃=6 | 7/3 | ✔ |
| geo-106 | d(P,g), P(4\|5), g: 3x+4y=12 | 4 | ✔ |
| geo-106 | (1\|1\|0)×(0\|1\|1) | (1\|−1\|1) | ✔ |
| geo-107 | Lotfußpunkt von P(4\|1\|1) auf g | t = 1, F(3\|1\|0), d = √2 | ✔ |
| geo-108 | Abstand g, h windschief | n = (−1\|−1\|1), d = 5/√3 ≈ 2,887; kein Schnittpunkt | ✔ |
| geo-109 | d(E₁,E₂) mit P(0\|3\|0); u·n; d(g,E₁) | 3; 0; 1 | ✔ |
| geo-110 | (x−3)²+(y+2)²−25 ausmultipliziert | x²+y²−6x+4y−12 | ✔ |
| geo-111 | P(6\|2), Q(0\|0); g: y=x+2 mit k | 25 (auf k), 13 (innen); S(0\|2), S(−1\|1); d(M,g) ≈ 4,95 | ✔ |
| geo-112 | \|M₁M₂\| für M₂(6\|8) | 10 | ✔ |
| geo-113 | Tangente in B(6\|2): 3x+4y=26; d(M,t) | 26; 5 = r | ✔ |
| geo-114 | (1−7m)² = 25(m²+1) | m = 4/3, m = −3/4; Berührpunkte (4\|−3), (3\|4) (je Doppellösung) | ✔ |
| geo-115 | LGS mit a² z = …, Reduce/Solve | a=2: y=3−2x, z=x (∞ viele); a=−2: keine Lösung; sonst x=z=1/(a+2), y=(3a+4)/(a+2) | ✔ |

**Ergebnis:** 19 Teilbeispiele geprüft, 19 ✔, 0 korrigiert.


## eA-Karten Stochastik (sto-101 … sto-112)

| ID | Beispiel | Wolfram-Ergebnis | Status |
|---|---|---|---|
| sto-101 | Würfel A={2;4;6}, B={1;2;3}: P(A∪B) = 1/2+1/2−1/6 | 5/6 ≈ 0,8333 | ✔ |
| sto-102 | N(500,20²): P(480≤X≤520), P(460≤X≤540), P(440≤X≤560) | 0,6827; 0,9545; 0,9973 | ✔ |
| sto-103 | N(500,20²): P(X≤530); P(X>530); P(X≤470); P(470≤X≤530) | 0,9332; 0,0668; 0,0668; 0,8664 (Φ(1,5)=0,93319) | ✔ |
| sto-104 | B(1000;0,5): P(X=500); Näherung N(500; 250), σ=√250: P(499,5≤Y≤500,5); φ(500) | 0,02523; σ=15,811; 0,02523; 0,02523 | korrigiert (Review: Stetigkeitskorrektur statt N(500,20²)) |
| sto-105 | φ(500), φ(520) für N(500,20²); φ(0) standardisiert | 0,019947; 0,012099; 0,39894 | ✔ |
| sto-106 | Φ⁻¹(0,9); μ = 530−20z; σ = 30/z | 1,28155; 504,37; 23,41 | ✔ |
| sto-107 | h = 12/50; Hochrechnung 500·h | 0,24; 120 | ✔ |
| sto-108 | B(200;0,3): μ, σ, 60±1,96σ; exakt P(48≤X≤72); Anteil 0,3±1,96√(0,21/200) | 60; 6,4807; [47,30; 72,70]; 0,9466; [0,2365; 0,3635] | ✔ |
| sto-109 | h=0,3, n=400: √(h(1−h)/n), 1,96·…, Intervall | 0,022913; 0,044909; [0,2551; 0,3449] | ✔ |
| sto-110 | σ für B(50;0,1), B(200;0,1); 20±√18; exakt P(16≤X≤24), P(12≤X≤28) | 2,121; 4,243; [15,76; 24,24]; 0,7120; 0,9561 | ✔ |
| sto-111 | h=0,4, n=500: Intervall; Hochrechnung ×20000 | [0,3571; 0,4429]; 7141 … 8859 | ✔ |
| sto-112 | (1,96/0,02)²·0,25; ·0,21; Probe 1,96·√(0,25/2401) | 2401; 2016,84 → 2017; 0,02 | ✔ |

**Ergebnis:** 31 Teilbeispiele geprüft, 31 ✔ nach Korrektur; 1 Karte (sto-104) nach Review korrigiert.


## Veröffentlichung

- 2026-09-12: Repo `github.com/Nachbar-blip/repetitio`, Live-URL https://nachbar-blip.github.io/repetitio/
- Kartenbestand: Analysis 48 (32 gA + 16 eA), Geometrie 38 (23 + 15), Stochastik 37 (25 + 12) = 123
- Live-Sichtprüfung: Startseite → eA → Geometrie/Kreis → Karte aufgedeckt, KaTeX gerendert, keine Konsolen-/Request-Fehler

## Klasse-10-Karten (k10-001 … k10-076)

Fachprüfung der Zahlenbeispiele mit Wolfram Language (Kernel-Auswertung), Stand 2026-09-19.
Status: ✔ = Kartenwert stimmt mit Wolfram überein.

| ID | Beispiel | Wolfram-Ergebnis | Status |
|---|---|---|---|
| k10-001 | 2³·2⁵; x⁷/x³ | 256; x⁴ | ✔ |
| k10-002 | (3²)⁴ | 6561 | ✔ |
| k10-003 | 6³/2³ | 27 | ✔ |
| k10-004 | (2/3)⁻² | 9/4 | ✔ |
| k10-006 | √x·∛x | x^(5/6) | ✔ |
| k10-011 | 1/x² bei x=0,5 und x=10 | 4; 0,01 | ✔ |
| k10-015 | x⁴=16 | x = ±2 | ✔ |
| k10-016 | √(2x+7)=x+2; x²+2x−3=0 | x=1 (Scheinlösung x=−3) | ✔ |
| k10-017 | 2(x−1)³+5 bei x=1; 2 | 5; 7 | ✔ |
| k10-018 | 3/2 − 2 − 1/4 | −3/4 | ✔ |
| k10-019 | log₂8; lg1000 | 3; 3 | ✔ |
| k10-020 | log₂8+log₂4; lg500−lg5 | 5; 2 | ✔ |
| k10-022 | log₂20 | 4,3219 | ✔ |
| k10-023 | 3·2ˣ=96 | x = 5 | ✔ |
| k10-024 | 2^(2x)−6·2ˣ+8=0 | x = 1; x = 2 | ✔ |
| k10-025 | lg x + lg(x−3) = 1 | x = 5 | ✔ |
| k10-026 | 3·2ˣ bei x=0; 1; −2 | 3; 6; 0,75 | ✔ |
| k10-027 | P(1\|12), Q(3\|48) | a = 2, c = 6 | ✔ |
| k10-029 | 100·0,95¹⁰ | 59,87 | ✔ |
| k10-030 | lg0,5/lg0,95; lg2/lg1,08 | 13,51; 9,01 | ✔ |
| k10-031 | lg0,2/lg0,95 | 31,38 | ✔ |
| k10-032 | 100·1,2^t für t=0…3 | 100; 120; 144; 172,8 | ✔ |
| k10-035 | sin45°; tan45° | 0,7071; 1 | ✔ |
| k10-036 | sin150°; cos150°; sin310° | 0,5; −0,8660; −0,7660 | ✔ |
| k10-037 | sinα=0,6 → cosα, tanα | 0,8; 0,75 | ✔ |
| k10-041 | y=3sin(2x): Periode, Wertebereich | π; [−3; 3] | ✔ |
| k10-042 | y=2sin(3(x−π/6))+1 | Periode 2π/3; [−1; 3] | ✔ |
| k10-043 | y_max=7, y_min=1, p=4 | e=4; a=3; b=π/2; [1; 7] | ✔ |
| k10-044 | sinα=0,5 in [−360°; 360°] | 30°; 150°; −210°; −330° | ✔ |
| k10-045 | x+y=5, x−y=1 | (3\|2) | ✔ |
| k10-046 | 2x+y=8, x−y=1 | (3\|2) | ✔ |
| k10-047 | y=2x−1, 3x+y=9 | (2\|3) | ✔ |
| k10-048 | 3x+2y=16, 2x−3y=2 | x=4, y=2 | ✔ |
| k10-049 | 3x+1 = −x+9 | x=2, y=7 | ✔ |
| k10-051 | 3×3-System | (1\|2\|3) | ✔ |
| k10-052 | 3h+2s=11, h+4s=12 | h=2, s=2,50 | ✔ |
| k10-055 | AB und BA für A(2\|−5\|−4), B(5\|3\|−6) | (3\|8\|−2); (−3\|−8\|2) | ✔ |
| k10-056 | \|(2\|3\|6)\| | 7 | ✔ |
| k10-057 | Summe; 3·(2\|0\|−1) | (0\|6\|15); (6\|0\|−3) | ✔ |
| k10-058 | P(−5\|2\|0) + (3\|−3\|7) | Q(−2\|−1\|7) | ✔ |
| k10-059 | (−4\|2\|−8) : (2\|−1\|4) | r = −2 (kollinear) | ✔ |
| k10-060 | (1\|0\|1)+(0\|1\|1) | (1\|1\|2) = c (komplanar) | ✔ |
| k10-061 | (1\|2\|3)∘(4\|−1\|2) | 8 | ✔ |
| k10-062 | Winkel (1\|1\|0), (1\|0\|0) | 45° | ✔ |
| k10-063 | (2\|−3\|1)∘(1\|1\|1) | 0 (orthogonal) | ✔ |
| k10-064 | (1\|1\|0)×(0\|1\|1) | (1\|−1\|1), beide Skalarprodukte 0 | ✔ |
| k10-065 | Mittelpunkt A(1\|3\|5), B(7\|−1\|1) | M(4\|1\|3) | ✔ |
| k10-066 | AB und DC im Parallelogramm | beide (4\|0\|0) | ✔ |
| k10-073 | E(X) Würfel | 3,5 | ✔ |
| k10-074 | V(X), σ bei zwei Münzwürfen | 0,5; 0,7071 | ✔ |
| k10-075 | E(X) = 4·1/6 − 1·5/6; faire Auszahlung | −1/6 ≈ −0,167; 6 € | ✔ |
| k10-076 | 0,02 · 5000 | 100 | ✔ |

**Ergebnis:** 53 Teilbeispiele geprüft, 53 ✔, 0 korrigiert.

- 2026-09-19: Deck „Klasse 10" veröffentlicht (76 Karten, sechs Kategorien).
  Kartenbestand gesamt 199. Live-Sichtprüfung auf https://nachbar-blip.github.io/repetitio/:
  vier Kacheln auf der Startseite, Deck lädt mit 76 Karten, Niveau-Schalter im Klasse-10-Deck
  korrekt ausgeblendet, KaTeX gerendert, keine Konsolen- oder Request-Fehler.

## Klassenstufen-Decks 9, 8 und 7

Fachprüfung der Zahlenbeispiele mit Wolfram Language, Stand 2026-09-19.

**Klasse 9 (k9-001 … k9-052):** 23 Teilbeispiele geprüft — Seitenverhältnisse und Winkel im
rechtwinkligen Dreieck (5,74; 35,7°; 36,9°), Sinussatz (11,04), Kosinussatz (√39 ≈ 6,24),
Flächeninhaltssatz (17,36), Anstiegswinkel (63,4°; 4,6°), Turmhöhe (31,2 m), Pyramidenwinkel
(53,1°), 8^(2/3) = 4, teilweises Wurzelziehen, p-q-Formel (1; 3), Mitternachtsformel (0,5; 3),
Substitution (±2; ±3), quadratische Ergänzung, Scheitel (2 | −3), Nullstellen (4; −2),
Parabel durch S und P (a = 1), Schnittpunkte (2 | 3) und (−1 | 0), Mittelwert/Median (6; 3),
Spannweite und Standardabweichung (4; √2). Alle ✔.

Anmerkung zu k9-052: Die Quartile sind nach der in der Schule üblichen Methode bestimmt
(Median der unteren bzw. oberen Hälfte ohne den Gesamtmedian): Q₁ = 3, Q₃ = 9. Wolfram nutzt
eine andere Quantildefinition und liefert 3,25 und 8,5 — kein Fehler der Karte, sondern eine
andere Konvention.

**Klasse 8 (k8-001 … k8-057):** 31 Teilbeispiele geprüft — Termwert (16), binomische Formeln,
Maßstab (1 km), zentrische Streckung (12; 45), Verhältnisgleichung (10), Strahlensatz (15),
Baumhöhe (13,5 m), Streckungsfaktor bei Fläche und Volumen (216; 216), Pythagoras (10; 12),
Umkehrung (5;12;13 rechtwinklig, 4;6;8 stumpfwinklig), Zahlentripel (12;16;20), Höhensatz (6),
Kathetensatz (7,21), Raumdiagonale (13), Leiter (4,8 m), Anstieg (2), Geradengleichung (3; 2),
Schnittpunkt (2 | 5), Tarifvergleich (50), Zylinder (942,5 cm³; 534,1 cm²), Pyramide
(48 cm³; 96 cm²), Kegel (37,7 cm³; 75,4 cm²), Kugel (904,8 cm³; 452,4 cm²), Radius aus Volumen
(3,99 cm), zusammengesetzter Körper (339,3 cm³), Pfadregeln (1/36; 0,36; 0,3), Gegenereignis
(91/216 ≈ 42,1 %), ungeordnete Auswahl (0,6). Alle ✔.

**Klasse 7 (k7-001 … k7-047):** 26 Teilbeispiele geprüft — Prozentwert (30 €; 81 €),
Grundwert (400 €), Prozentsatz (15 %), Rabatt und Aufschlag (64 €; 80 €), Rückrechnung
nach Rabatt (80 €), Brutto und Netto (238 €; 200 €), Kreisdiagramm (90°; 144°; 126°),
Jahreszinsen (80 €), Monatszinsen (50 €), Zinseszins (1124,86 € gegen 1120 €),
Gleichung mit Klammern (7), Verhältnisgleichung (15), Ungleichung (x > −3), Sachaufgabe (12),
Betragsgleichung (8; −2), Kreisring (50,3 cm²), Tangentenlänge (4 cm), Umfang und Fläche
(44,0 cm; 153,9 cm²), Kreisausschnitt (6,28 cm; 18,85 cm²), Radius aus Umfang und Fläche
(je 5 cm), Restfläche (21,5 cm²), Mantelbreite (18,85 cm), relative Häufigkeit (0,2),
Laplace (1/3 ≈ 33,3 %), Gegenereignis (5/6). Alle ✔.

**Ergebnis:** 80 Teilbeispiele geprüft, 80 ✔, 0 korrigiert.

### Veröffentlichung 2026-09-19 (zweite Erweiterung)

- Abitur-Kacheln tragen jetzt das Kennzeichen „Abi", damit Abitur- und Klassenstufen-Decks
  auf einen Blick unterscheidbar sind.
- Neue Decks: Klasse 9 (52 Karten), Klasse 8 (57), Klasse 7 (47).
- Kartenbestand gesamt: 355 Karten in sieben Decks.
- Der Niveau-Schalter der Startseite gilt nur für die Abitur-Decks; ein Hinweis unter dem
  Schalter sagt das, und in den Klassenstufen-Decks blendet der Trainer ihn ganz aus.
- `render_check.py` meldet ein nicht ladendes Deck jetzt als Mangel („Syntaxfehler … node --check"),
  statt in einen Playwright-Timeout zu laufen. Auslöser: ein ASCII-Anführungszeichen hatte in
  klasse8.js einen `question`-String vorzeitig geschlossen.

### Nachbesserungen aus der Sichtprüfung (2026-09-19)

- **Euro-, Promille- und Anführungszeichen in Formeln.** KaTeX hat für diese Zeichen keine
  Schriftmetrik und setzt sie in einer Ersatzschrift; sichtbar war das erst in der
  Konsolenausgabe der Live-Prüfung. Die Zeichen stehen jetzt im Text statt in der Formel.
  `render_check.py` meldet solche KaTeX-Warnungen („No character metrics", „Unrecognized
  Unicode character") jetzt als Mangel — beim ersten Lauf fand das Gate damit sofort zwei
  weitere Stellen (klasse8, klasse7).
- **Rohtext statt Formel in k7-001.** Beim Korrigieren waren die Backslashes einfach statt
  doppelt geraten; im JavaScript-Template-String verschwinden sie dann samt Delimiter, sodass
  kein Gate anschlägt. Gefunden allein im Screenshot, behoben.
- **Absatzabstand nach Listen.** Ein Absatz klebte am letzten Listenpunkt; eine CSS-Zeile
  (`margin-bottom` bei `.card-answer ol, ul`) behebt das für alle sieben Decks.
- **Farben der Kacheln.** Klasse 8 lag farblich zu nah an der Geometrie, Klasse 7 zu nah an
  Klasse 9; beide bekamen eigene Akzentfarben.

## Deck „Rechengrundlagen" (g-001 … g-024)

Fachprüfung mit Wolfram Language, Stand 2026-09-19. 30 Teilbeispiele geprüft — Bruchaddition
(11/12; (x+1)/x²), Multiplikation und Division (2/3; 5/4), Doppelbruch (3/2; x^(-3)), Kürzen
(x+3), gliedweises Teilen (3x+2; x − 1/x), Bruchgleichung (12), Umwandlungen (0,75; 0,625),
Vorzeichenregeln (−24; 4), Klammer-Minus (5), Potenz und Vorzeichen (16; −16; 24), Subtraktion
negativer Zahlen (4; 8), Vorrangregeln (19; 4), Taschenrechnereingabe (1 gegen 13), Dreisatz
(36), antiproportional (8), Anteile (0,16; 3200), Einheitenfaktoren (10 000; 1 000 000),
Geschwindigkeit und Zeit (20 m/s; 0,75 h), Einheiten im Sachkontext (45 l), Rundungsfehler
(4,84 gegen 5), Überschlag (81,18), Primfaktoren mit ggT und kgV (6; 36; 5/36), geratene
Nullstelle (f(−1) = 0). Alle ✔.

### Umbau der Niveau-Wahl (2026-09-19)

Der globale gA/eA-Schalter über allen Kacheln passte nicht mehr zu acht Decks, von denen nur
drei Niveaustufen kennen. Die Wahl sitzt jetzt **in** den drei Abitur-Kacheln; der globale
Schalter und sein Erklärsatz sind entfallen. Die zuletzt gewählte Stufe bleibt gespeichert und
bestimmt, wohin der Hauptbereich der Abitur-Kacheln führt. `test_index_niveau_links` prüft das
jetzt entsprechend: drei Kacheln mit Niveau-Wahl, keine bei den Klassenstufen-Decks, und die
gespeicherte Wahl wirkt beim nächsten Besuch.

### Sichtprüfung Rechengrundlagen bei 400 px (2026-09-19)

Alle 24 Karten einzeln bei Handybreite gerendert und als Bild angesehen. Das Render-Gate meldete
0 Mängel — die folgenden sieben Punkte sind reine Satzfehler, die nur im Bild auffallen:

- g-004: Merksatz stand als `\text{…}` in der Formelbox und damit in Mathe-Schrift; jetzt kursiv
  im Fließtext, wie im Deck Klasse 8.
- g-011: Zwei Formeln nebeneinander füllten die Box bis an den Rand; jetzt zwei Zeilen.
- g-014: Die Taschenrechner-Eingabe war als Formel gesetzt (`e^{\wedge}(…)`) und dadurch
  missverständlich; jetzt `<code>`-Klartext, Beispiel auf drei Zeilen.
- g-015: Preis ohne Währung („kosten 21,00"); Einheit im Text ergänzt, Antwortsatz angefügt.
- g-017: Formelbox brach zwischen `p %` und dem Bruch um; jetzt zwei getrennte Formelzeilen.
- g-018: Die Umrechnungsfaktoren brachen mitten in „Flächen : 100" um; jetzt drei Zeilen.
- g-023: Die Schlussrechnung stand inline und war dadurch winzig; jetzt abgesetzt.

Danach erneut gerendert und geprüft: 8 Decks, 379 Karten, 0 Mängel, 8 Tests grün.
