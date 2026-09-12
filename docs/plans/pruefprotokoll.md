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
