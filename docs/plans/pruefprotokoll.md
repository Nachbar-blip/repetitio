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

