// Repetitio-Deck: Stochastik — gA-Karten aus dem GK-Trainer + eA-Karten (Normalverteilung, Statistik)
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["stochastik"] = {
    title: "Stochastik",
    subtitle: "Wahrscheinlichkeit, Binomialverteilung, Kenngrößen",
    categories: {
        grundlagen: "Grundlagen",
        bedingt: "Bedingt",
        binomial: "Binomial",
        kenngroessen: "Kenngrößen",
        normal: "Normalvert.",
        statistik: "Statistik"
    },
    cards: [
    // Grundlagen
    {
        id: "sto-001", niveau: "ga",
        category: "grundlagen",
        question: "Wie berechne ich Pfadwahrscheinlichkeiten im Baumdiagramm?",
        answer: `
            <h4>Pfadregeln</h4>
            <p><strong>1. Pfadregel (Multiplikation):</strong><br>
            Die Wahrscheinlichkeit eines Pfades = Produkt aller Zweige entlang des Pfades.</p>
            <p><strong>2. Pfadregel (Addition):</strong><br>
            Die Wahrscheinlichkeit eines Ereignisses = Summe aller Pfadwahrscheinlichkeiten, die zu diesem Ereignis führen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Urne: 3 rote, 2 blaue Kugeln<br>
                    2× ziehen mit Zurücklegen<br><br>
                    P(rot, rot) = $$\\frac{3}{5} \\cdot \\frac{3}{5} = \\frac{9}{25}$$<br><br>
                    P(genau 1 rot) = P(rot,blau) + P(blau,rot)<br>
                    = $$\\frac{3}{5} \\cdot \\frac{2}{5} + \\frac{2}{5} \\cdot \\frac{3}{5} = \\frac{12}{25}$$
                </div>
            </details>
        `
    },
    {
        id: "sto-002", niveau: "ga",
        category: "grundlagen",
        question: "Wie lese ich Wahrscheinlichkeiten aus einer Vierfeldertafel ab?",
        answer: `
            <h4>Vierfeldertafel</h4>
            <table style="border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;">
                <tr><td style="border: 1px solid #ccc; padding: 5px;"></td><td style="border: 1px solid #ccc; padding: 5px;">B</td><td style="border: 1px solid #ccc; padding: 5px;">B̄</td><td style="border: 1px solid #ccc; padding: 5px;">Σ</td></tr>
                <tr><td style="border: 1px solid #ccc; padding: 5px;">A</td><td style="border: 1px solid #ccc; padding: 5px;">P(A∩B)</td><td style="border: 1px solid #ccc; padding: 5px;">P(A∩B̄)</td><td style="border: 1px solid #ccc; padding: 5px;"><strong>P(A)</strong></td></tr>
                <tr><td style="border: 1px solid #ccc; padding: 5px;">Ā</td><td style="border: 1px solid #ccc; padding: 5px;">P(Ā∩B)</td><td style="border: 1px solid #ccc; padding: 5px;">P(Ā∩B̄)</td><td style="border: 1px solid #ccc; padding: 5px;">P(Ā)</td></tr>
                <tr><td style="border: 1px solid #ccc; padding: 5px;">Σ</td><td style="border: 1px solid #ccc; padding: 5px;"><strong>P(B)</strong></td><td style="border: 1px solid #ccc; padding: 5px;">P(B̄)</td><td style="border: 1px solid #ccc; padding: 5px;">1</td></tr>
            </table>
            <p>Randsummen = Einzelwahrscheinlichkeiten<br>
            Innere Felder = Schnittwahrscheinlichkeiten</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    P(A) = 0,6 (rechte Spalte)<br>
                    P(B) = 0,4 (untere Zeile)<br>
                    P(A∩B) = 0,2 (inneres Feld)<br><br>
                    P(A oder B) = P(A) + P(B) - P(A∩B)<br>
                    = 0,6 + 0,4 - 0,2 = 0,8
                </div>
            </details>
        `
    },
    {
        id: "sto-003", niveau: "ga",
        category: "grundlagen",
        question: "Wie viele Möglichkeiten gibt es, k aus n auszuwählen?",
        answer: `
            <h4>Kombinatorik</h4>
            <p><strong>Mit Reihenfolge (Variation):</strong></p>
            <div class="formula-box">$$\\frac{n!}{(n-k)!}$$</div>
            <p><strong>Ohne Reihenfolge (Kombination):</strong></p>
            <div class="formula-box">$$\\binom{n}{k} = \\frac{n!}{k! \\cdot (n-k)!}$$</div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    6 Personen, 3 Plätze vergeben:<br><br>
                    <strong>Mit Reihenfolge</strong> (1., 2., 3. Platz):<br>
                    $$\\frac{6!}{3!} = 6 \\cdot 5 \\cdot 4 = 120$$<br><br>
                    <strong>Ohne Reihenfolge</strong> (Gruppe bilden):<br>
                    $$\\binom{6}{3} = \\frac{6!}{3! \\cdot 3!} = 20$$
                </div>
            </details>
        `
    },
    {
        id: "sto-004", niveau: "ga",
        category: "grundlagen",
        question: "Wie berechne ich den Binomialkoeffizienten \\( \\binom{n}{k} \\)?",
        answer: `
            <h4>Binomialkoeffizient</h4>
            <div class="formula-box">$$\\binom{n}{k} = \\frac{n!}{k! \\cdot (n-k)!}$$</div>
            <p>"n über k" = Anzahl der Möglichkeiten, k Elemente aus n auszuwählen (ohne Reihenfolge).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!}$$<br><br>
                    $$= \\frac{5 \\cdot 4 \\cdot 3!}{2 \\cdot 1 \\cdot 3!}$$<br><br>
                    $$= \\frac{20}{2} = 10$$
                </div>
            </details>
        `
    },
    // Binomialverteilung
    {
        id: "sto-005", niveau: "ga",
        category: "binomial",
        question: "Wann liegt eine Binomialverteilung vor?",
        answer: `
            <h4>Voraussetzungen Binomialverteilung</h4>
            <ol>
                <li><strong>n</strong> Versuche (feste Anzahl)</li>
                <li><strong>2 Ausgänge</strong>: Treffer/Niete</li>
                <li><strong>Konstante Wahrscheinlichkeit p</strong> für Treffer</li>
                <li><strong>Unabhängigkeit</strong> der Versuche</li>
            </ol>
            <p>Notation: $$X \\sim B(n; p)$$</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfeln, ob "6" kommt (10× würfeln):<br><br>
                    ✓ n = 10 Versuche<br>
                    ✓ 2 Ausgänge: 6 oder nicht 6<br>
                    ✓ p = 1/6 konstant<br>
                    ✓ Würfe unabhängig<br><br>
                    → $$X \\sim B(10; \\frac{1}{6})$$
                </div>
            </details>
        `
    },
    {
        id: "sto-006", niveau: "ga",
        category: "binomial",
        question: "Wie berechne ich \\( P(X = k) \\) bei Binomialverteilung?",
        answer: `
            <h4>Bernoulli-Formel</h4>
            <div class="formula-box">$$P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$$</div>
            <ul>
                <li>$$\\binom{n}{k}$$: Anzahl der Anordnungen</li>
                <li>$$p^k$$: k Treffer</li>
                <li>$$(1-p)^{n-k}$$: (n-k) Nieten</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$X \\sim B(5; 0{,}3)$$<br>
                    P(X = 2) = ?<br><br>
                    $$P(X=2) = \\binom{5}{2} \\cdot 0{,}3^2 \\cdot 0{,}7^3$$<br><br>
                    $$= 10 \\cdot 0{,}09 \\cdot 0{,}343$$<br><br>
                    $$= 0{,}3087 \\approx 30{,}9\\%$$
                </div>
            </details>
        `
    },
    {
        id: "sto-007", niveau: "ga",
        category: "binomial",
        question: "Wie berechne ich \\( P(X \\leq k) \\)?",
        answer: `
            <h4>Kumulierte Wahrscheinlichkeit</h4>
            <div class="formula-box">$$P(X \\leq k) = \\sum_{i=0}^{k} P(X = i)$$</div>
            <p>= Summe aller Einzelwahrscheinlichkeiten von 0 bis k</p>
            <p><strong>Tipp:</strong> Tabelle oder Taschenrechner nutzen!</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$X \\sim B(4; 0{,}5)$$<br>
                    P(X ≤ 2) = ?<br><br>
                    = P(X=0) + P(X=1) + P(X=2)<br><br>
                    $$= \\frac{1}{16} + \\frac{4}{16} + \\frac{6}{16}$$<br><br>
                    $$= \\frac{11}{16} = 0{,}6875$$
                </div>
            </details>
        `
    },
    {
        id: "sto-008", niveau: "ga",
        category: "binomial",
        question: "Wie rechne ich \"mindestens\" und \"höchstens\" um?",
        answer: `
            <h4>Umrechnungsformeln</h4>
            <div class="formula-box">
                $$P(X \\geq k) = 1 - P(X \\leq k-1)$$<br><br>
                $$P(X > k) = 1 - P(X \\leq k)$$<br><br>
                $$P(X < k) = P(X \\leq k-1)$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$X \\sim B(10; 0{,}4)$$<br><br>
                    <strong>P(mindestens 3)</strong> = P(X ≥ 3)<br>
                    = 1 - P(X ≤ 2)<br><br>
                    <strong>P(mehr als 5)</strong> = P(X > 5)<br>
                    = 1 - P(X ≤ 5)<br><br>
                    <strong>P(weniger als 4)</strong> = P(X < 4)<br>
                    = P(X ≤ 3)
                </div>
            </details>
        `
    },
    {
        id: "sto-009", niveau: "ga",
        category: "binomial",
        question: "Was ist die Sigma-Umgebung?",
        answer: `
            <h4>Sigma-Regeln (Normalapproximation)</h4>
            <p>Für große n liegt X mit hoher Wahrscheinlichkeit im Intervall um μ:</p>
            <div class="formula-box">
                $$[\\mu - k\\sigma;\\, \\mu + k\\sigma]$$
            </div>
            <ul>
                <li>k = 1: ≈ 68% aller Werte</li>
                <li>k = 2: ≈ 95% aller Werte</li>
                <li>k = 3: ≈ 99,7% aller Werte</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$X \\sim B(100; 0{,}5)$$<br>
                    $$\\mu = 50, \\quad \\sigma = 5$$<br><br>
                    2σ-Umgebung: [40; 60]<br><br>
                    → Mit 95% Wahrscheinlichkeit liegt<br>
                    die Anzahl der Treffer zwischen 40 und 60.
                </div>
            </details>
        `
    },
    // Kenngrößen
    {
        id: "sto-010", niveau: "ga",
        category: "kenngroessen",
        question: "Wie berechne ich den Erwartungswert \\( E(X) \\)?",
        answer: `
            <h4>Erwartungswert</h4>
            <p><strong>Allgemein:</strong></p>
            <div class="formula-box">$$E(X) = \\sum_{i} x_i \\cdot P(X = x_i)$$</div>
            <p><strong>Bei Binomialverteilung:</strong></p>
            <div class="formula-box">$$E(X) = \\mu = n \\cdot p$$</div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Würfeln:</strong><br>
                    E(X) = $$\\frac{1}{6}(1+2+3+4+5+6) = 3{,}5$$<br><br>
                    <strong>Binomial B(100; 0,4):</strong><br>
                    E(X) = 100 · 0,4 = 40<br><br>
                    → Im Mittel 40 Treffer erwartet.
                </div>
            </details>
        `
    },
    {
        id: "sto-011", niveau: "ga",
        category: "kenngroessen",
        question: "Wie berechne ich die Varianz \\( Var(X) \\)?",
        answer: `
            <h4>Varianz</h4>
            <p><strong>Allgemein:</strong></p>
            <div class="formula-box">$$Var(X) = \\sum_{i} (x_i - \\mu)^2 \\cdot P(X = x_i)$$</div>
            <p><strong>Bei Binomialverteilung:</strong></p>
            <div class="formula-box">$$Var(X) = n \\cdot p \\cdot (1-p)$$</div>
            <p>Die Varianz misst die Streuung um den Erwartungswert.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$X \\sim B(100; 0{,}4)$$<br><br>
                    $$Var(X) = 100 \\cdot 0{,}4 \\cdot 0{,}6$$<br>
                    $$= 24$$
                </div>
            </details>
        `
    },
    {
        id: "sto-012", niveau: "ga",
        category: "kenngroessen",
        question: "Wie berechne ich die Standardabweichung \\( \\sigma \\)?",
        answer: `
            <h4>Standardabweichung</h4>
            <div class="formula-box">$$\\sigma = \\sqrt{Var(X)}$$</div>
            <p><strong>Bei Binomialverteilung:</strong></p>
            <div class="formula-box">$$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$$</div>
            <p>Die Standardabweichung hat dieselbe Einheit wie X.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$X \\sim B(100; 0{,}4)$$<br><br>
                    $$Var(X) = 24$$<br>
                    $$\\sigma = \\sqrt{24} \\approx 4{,}90$$<br><br>
                    → Die typische Abweichung vom<br>
                    Erwartungswert (40) beträgt etwa 5.
                </div>
            </details>
        `
    },
    {
        id: "sto-013", niveau: "ga",
        category: "kenngroessen",
        question: "Was sagen Erwartungswert und Standardabweichung aus?",
        answer: `
            <h4>Interpretation</h4>
            <p><strong>Erwartungswert μ:</strong><br>
            Der "durchschnittliche" Wert, der bei vielen Wiederholungen erreicht wird.</p>
            <p><strong>Standardabweichung σ:</strong><br>
            Wie stark die Werte typischerweise um μ streuen.</p>
            <ul>
                <li>Kleines σ → Werte nah bei μ</li>
                <li>Großes σ → Werte weit gestreut</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    100 Münzwürfe:<br>
                    μ = 50, σ ≈ 5<br><br>
                    → Im Mittel 50× Kopf<br>
                    → Typisch sind 45-55× Kopf<br>
                    → Selten weniger als 40 oder mehr als 60
                </div>
            </details>
        `
    },
    // Bedingte Wahrscheinlichkeit
    {
        id: "sto-014", niveau: "ga",
        category: "bedingt",
        question: "Wie berechne ich bedingte Wahrscheinlichkeiten \\( P(A|B) \\)?",
        answer: `
            <h4>Bedingte Wahrscheinlichkeit</h4>
            <div class="formula-box">$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$</div>
            <p>"Wahrscheinlichkeit für A, wenn B bereits eingetreten ist"</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    60% der Schüler mögen Sport (S)<br>
                    40% mögen Musik (M)<br>
                    25% mögen beides<br><br>
                    P(Musik | Sport) = ?<br><br>
                    $$P(M|S) = \\frac{P(M \\cap S)}{P(S)} = \\frac{0{,}25}{0{,}60}$$<br><br>
                    $$\\approx 0{,}417 = 41{,}7\\%$$
                </div>
            </details>
        `
    },
    {
        id: "sto-015", niveau: "ga",
        category: "bedingt",
        question: "Wann sind Ereignisse stochastisch unabhängig?",
        answer: `
            <h4>Stochastische Unabhängigkeit</h4>
            <div class="formula-box">$$P(A \\cap B) = P(A) \\cdot P(B)$$</div>
            <p>Äquivalent: $$P(A|B) = P(A)$$</p>
            <p>Das Eintreten von B hat keinen Einfluss auf die Wahrscheinlichkeit von A.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    P(A) = 0,3, P(B) = 0,5<br>
                    P(A∩B) = 0,15<br><br>
                    Prüfung: P(A) · P(B) = 0,3 · 0,5 = 0,15 ✓<br><br>
                    → A und B sind unabhängig.<br><br>
                    Wäre P(A∩B) = 0,2:<br>
                    0,3 · 0,5 = 0,15 ≠ 0,2 ✗<br>
                    → A und B wären abhängig.
                </div>
            </details>
        `
    },
    {
        id: "sto-016", niveau: "ga",
        category: "bedingt",
        question: "Wie wende ich den Satz von Bayes an?",
        answer: `
            <h4>Satz von Bayes</h4>
            <div class="formula-box">$$P(B|A) = \\frac{P(A|B) \\cdot P(B)}{P(A)}$$</div>
            <p>Umkehrung der bedingten Wahrscheinlichkeit.</p>
            <p><strong>Oft mit totaler Wahrscheinlichkeit:</strong><br>
            $$P(A) = P(A|B) \\cdot P(B) + P(A|\\bar{B}) \\cdot P(\\bar{B})$$</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Test: 99% der Kranken positiv<br>
                    1% der Gesunden falsch positiv<br>
                    2% der Bevölkerung krank<br><br>
                    P(krank | positiv) = ?<br><br>
                    P(+) = 0,99·0,02 + 0,01·0,98 = 0,0296<br><br>
                    $$P(K|+) = \\frac{0{,}99 \\cdot 0{,}02}{0{,}0296} \\approx 66{,}9\\%$$
                </div>
            </details>
        `
    },
    {
        id: "sto-017", niveau: "ga",
        category: "bedingt",
        question: "Wie berechne ich die totale Wahrscheinlichkeit?",
        answer: `
            <h4>Totale Wahrscheinlichkeit</h4>
            <div class="formula-box">$$P(A) = \\sum_{i} P(A|B_i) \\cdot P(B_i)$$</div>
            <p>Wenn die $$B_i$$ eine vollständige Zerlegung bilden, addiere die Pfade zu A.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Maschine 1: 60% der Produktion, 2% Ausschuss<br>
                    Maschine 2: 40% der Produktion, 5% Ausschuss<br><br>
                    P(Ausschuss) = ?<br><br>
                    P(A) = P(A|M1)·P(M1) + P(A|M2)·P(M2)<br>
                    = 0,02·0,6 + 0,05·0,4<br>
                    = 0,012 + 0,02<br>
                    = 0,032 = 3,2%
                </div>
            </details>
        `
    },
    {
        id: "sto-018", niveau: "ga",
        category: "bedingt",
        question: "Wie erkenne ich, ob Ereignisse unabhängig sind?",
        answer: `
            <h4>Unabhängigkeit prüfen</h4>
            <p><strong>Methode 1:</strong> Prüfe ob $$P(A \\cap B) = P(A) \\cdot P(B)$$</p>
            <p><strong>Methode 2:</strong> Prüfe ob $$P(A|B) = P(A)$$</p>
            <p><strong>Im Kontext:</strong> Beeinflusst das Eintreten von B die Wahrscheinlichkeit von A?</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Unabhängig:</strong><br>
                    - Würfeln + Münzwurf<br>
                    - Ziehen MIT Zurücklegen<br><br>
                    <strong>Abhängig:</strong><br>
                    - Ziehen OHNE Zurücklegen<br>
                    - Zusammenhängende Ereignisse<br>
                    (z.B. Regen → Straße nass)
                </div>
            </details>
        `
    },
    {
        id: "sto-019", niveau: "ga",
        category: "grundlagen",
        question: "Wie unterscheide ich Ziehen mit/ohne Zurücklegen?",
        answer: `
            <h4>Mit vs. Ohne Zurücklegen</h4>
            <p><strong>Mit Zurücklegen:</strong></p>
            <ul>
                <li>Wahrscheinlichkeiten bleiben konstant</li>
                <li>Züge sind unabhängig</li>
                <li>Binomialverteilung möglich</li>
            </ul>
            <p><strong>Ohne Zurücklegen:</strong></p>
            <ul>
                <li>Wahrscheinlichkeiten ändern sich</li>
                <li>Züge sind abhängig</li>
                <li>Hypergeometrische Verteilung</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Urne: 3 rote, 2 blaue Kugeln<br>
                    2× ziehen<br><br>
                    <strong>Mit Zurücklegen:</strong><br>
                    P(1. rot) = 3/5<br>
                    P(2. rot) = 3/5<br><br>
                    <strong>Ohne Zurücklegen:</strong><br>
                    P(1. rot) = 3/5<br>
                    P(2. rot | 1. rot) = 2/4 = 1/2
                </div>
            </details>
        `
    },
    {
        id: "sto-020", niveau: "ga",
        category: "binomial",
        question: "Wie bestimme ich n oder p aus gegebenen Bedingungen?",
        answer: `
            <h4>Parameter bestimmen</h4>
            <p><strong>n gesucht:</strong> Oft mit $$P(X \\geq 1) \\geq 0{,}95$$</p>
            <p>→ Umformen: $$1 - P(X=0) \\geq 0{,}95$$<br>
            → $$P(X=0) = (1-p)^n \\leq 0{,}05$$</p>
            <p><strong>p gesucht:</strong> Gleichung aufstellen und lösen</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    p = 0,1. Wie oft mindestens werfen,<br>
                    damit P(mind. 1 Treffer) ≥ 95%?<br><br>
                    $$P(X \\geq 1) = 1 - 0{,}9^n \\geq 0{,}95$$<br>
                    $$0{,}9^n \\leq 0{,}05$$<br>
                    $$n \\cdot \\ln(0{,}9) \\leq \\ln(0{,}05)$$<br>
                    $$n \\geq \\frac{\\ln(0{,}05)}{\\ln(0{,}9)} \\approx 28{,}4$$<br><br>
                    → Mindestens 29 Versuche
                </div>
            </details>
        `
    },
    // Neue Karten basierend auf IQB 2025
    {
        id: "sto-021", niveau: "ga",
        category: "grundlagen",
        question: "Wie interpretiere ich ein Baumdiagramm?",
        answer: `
            <h4>Baumdiagramm verstehen</h4>
            <ul>
                <li><strong>Stufen:</strong> Jede Verzweigung = ein Zufallsexperiment</li>
                <li><strong>Zweige:</strong> Mögliche Ausgänge mit Wahrscheinlichkeiten</li>
                <li><strong>Pfade:</strong> Kombination von Ausgängen (Blatt zu Blatt)</li>
            </ul>
            <p><strong>Ablesen:</strong></p>
            <ul>
                <li>Summe aller Zweige einer Stufe = 1</li>
                <li>Pfadwahrscheinlichkeit = Produkt der Zweige</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Baumdiagramm mit 2 Stufen:<br>
                    1. Stufe: A (0,6) oder Ā (0,4)<br>
                    2. Stufe: B|A (0,3), B|Ā (0,5)<br><br>
                    Pfad "A und B":<br>
                    P(A∩B) = 0,6 · 0,3 = 0,18<br><br>
                    Pfad "Ā und B":<br>
                    P(Ā∩B) = 0,4 · 0,5 = 0,20
                </div>
            </details>
        `
    },
    {
        id: "sto-022", niveau: "ga",
        category: "grundlagen",
        question: "Was ist das Gegenereignis und wie berechne ich es?",
        answer: `
            <h4>Gegenereignis</h4>
            <div class="formula-box">$$P(\\bar{A}) = 1 - P(A)$$</div>
            <p>Das Gegenereignis $$\\bar{A}$$ ("nicht A") enthält alle Ergebnisse, die nicht in A liegen.</p>
            <p><strong>Typische Umformungen:</strong></p>
            <ul>
                <li>$$P(X \\geq 1) = 1 - P(X = 0)$$</li>
                <li>$$P(X > k) = 1 - P(X \\leq k)$$</li>
                <li>$$P(X < k) = 1 - P(X \\geq k)$$</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    P(mindestens einmal Treffer) = ?<br><br>
                    Gegenereignis: "kein Treffer"<br>
                    P(X = 0) = 0,2<br><br>
                    $$P(X \\geq 1) = 1 - P(X = 0)$$<br>
                    $$= 1 - 0{,}2 = 0{,}8$$
                </div>
            </details>
        `
    },
    {
        id: "sto-023", niveau: "ga",
        category: "binomial",
        question: "Wie löse ich \"Mindestens\"-Aufgaben?",
        answer: `
            <h4>Mindestens-Aufgaben</h4>
            <p><strong>Strategie:</strong> Gegenereignis nutzen!</p>
            <div class="formula-box">
                $$P(X \\geq k) = 1 - P(X \\leq k-1)$$<br><br>
                $$P(X \\geq 1) = 1 - P(X = 0)$$
            </div>
            <p><strong>Typische Formulierungen:</strong></p>
            <ul>
                <li>"mindestens einer" = $$X \\geq 1$$</li>
                <li>"mindestens 3" = $$X \\geq 3$$</li>
                <li>"nicht alle" = $$X < n$$</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$X \\sim B(5; 0{,}3)$$<br>
                    P(mindestens 2 Treffer) = ?<br><br>
                    $$P(X \\geq 2) = 1 - P(X \\leq 1)$$<br>
                    $$= 1 - [P(X=0) + P(X=1)]$$<br><br>
                    $$P(X=0) = 0{,}7^5 \\approx 0{,}168$$<br>
                    $$P(X=1) = 5 \\cdot 0{,}3 \\cdot 0{,}7^4 \\approx 0{,}360$$<br><br>
                    $$P(X \\geq 2) = 1 - 0{,}528 \\approx 0{,}472$$
                </div>
            </details>
        `
    },
    {
        id: "sto-024", niveau: "ga",
        category: "kenngroessen",
        question: "Wie berechne ich den Erwartungswert eines Spiels?",
        answer: `
            <h4>Erwartungswert im Glücksspiel</h4>
            <p>Der Erwartungswert gibt den durchschnittlichen Gewinn/Verlust pro Spiel an.</p>
            <div class="formula-box">$$E(X) = \\sum_{i} (\\text{Gewinn}_i \\cdot P_i)$$</div>
            <ul>
                <li>$$E(X) > 0$$: Spiel ist günstig für Spieler</li>
                <li>$$E(X) < 0$$: Spiel ist ungünstig für Spieler</li>
                <li>$$E(X) = 0$$: Spiel ist fair</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfelspiel: Einsatz 2€<br>
                    6 → Gewinn 10€<br>
                    sonst → nichts<br><br>
                    E(Gewinn) = $$\\frac{1}{6} \\cdot 10 + \\frac{5}{6} \\cdot 0$$<br>
                    $$= \\frac{10}{6} \\approx 1{,}67€$$<br><br>
                    E(Nettogewinn) = 1,67€ - 2€ = -0,33€<br><br>
                    → Unfair, Spieler verliert im Schnitt 33ct
                </div>
            </details>
        `
    },
    {
        id: "sto-025", niveau: "ga",
        category: "bedingt",
        question: "Wie erstelle ich eine Vierfeldertafel aus Wahrscheinlichkeiten?",
        answer: `
            <h4>Vierfeldertafel erstellen</h4>
            <ol>
                <li>Bekannte Werte eintragen</li>
                <li>Randsummen ergänzen (Zeilen/Spalten = 1)</li>
                <li>Fehlende Werte durch Subtraktion</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gegeben: P(A) = 0,4, P(B) = 0,5, P(A∩B) = 0,2<br><br>
                    <table style="border-collapse: collapse; font-size: 0.85rem;">
                        <tr><td style="border: 1px solid #ccc; padding: 4px;"></td><td style="border: 1px solid #ccc; padding: 4px;">B</td><td style="border: 1px solid #ccc; padding: 4px;">B̄</td><td style="border: 1px solid #ccc; padding: 4px;">Σ</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 4px;">A</td><td style="border: 1px solid #ccc; padding: 4px;">0,2</td><td style="border: 1px solid #ccc; padding: 4px;">0,2</td><td style="border: 1px solid #ccc; padding: 4px;">0,4</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 4px;">Ā</td><td style="border: 1px solid #ccc; padding: 4px;">0,3</td><td style="border: 1px solid #ccc; padding: 4px;">0,3</td><td style="border: 1px solid #ccc; padding: 4px;">0,6</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 4px;">Σ</td><td style="border: 1px solid #ccc; padding: 4px;">0,5</td><td style="border: 1px solid #ccc; padding: 4px;">0,5</td><td style="border: 1px solid #ccc; padding: 4px;">1</td></tr>
                    </table><br>
                    P(A∩B̄) = 0,4 - 0,2 = 0,2<br>
                    P(Ā∩B) = 0,5 - 0,2 = 0,3
                </div>
            </details>
        `
    },
    // ===== eA-Karten =====
    // Grundlagen (eA)
    {
        id: "sto-101", niveau: "ea",
        category: "grundlagen",
        question: "Wie schreibe ich Ereignisse in Mengenschreibweise (∪, ∩, ∖)?",
        answer: `
            <h4>Ereignisse als Teilmengen von Ω</h4>
            <div class="formula-box">
                $$A \\cup B = \\{x \\,|\\, x \\in A \\;\\lor\\; x \\in B\\} \\qquad A \\cap B = \\{x \\,|\\, x \\in A \\;\\land\\; x \\in B\\}$$<br><br>
                $$A \\setminus B = \\{x \\,|\\, x \\in A \\;\\land\\; x \\notin B\\} \\qquad \\bar{A} = \\Omega \\setminus A$$
            </div>
            <table>
                <tr><th>Menge</th><th>Sprechweise</th><th>Wahrscheinlichkeit</th></tr>
                <tr><td>\\( A \\cup B \\)</td><td>A <em>oder</em> B (mindestens eines)</td><td>\\( P(A) + P(B) - P(A \\cap B) \\)</td></tr>
                <tr><td>\\( A \\cap B \\)</td><td>A <em>und</em> B (beide)</td><td>\\( P(A) \\cdot P(B \\,|\\, A) \\)</td></tr>
                <tr><td>\\( A \\setminus B \\)</td><td>A, aber <em>nicht</em> B</td><td>\\( P(A) - P(A \\cap B) \\)</td></tr>
                <tr><td>\\( \\bar{A} \\)</td><td><em>nicht</em> A (Gegenereignis)</td><td>\\( 1 - P(A) \\)</td></tr>
            </table>
            <p><strong>Merksatz:</strong> Ein Ereignis ist eine Teilmenge der Ergebnismenge Ω; „oder" wird zur Vereinigung, „und" zum Schnitt. Die Formel für \\( A \\cup B \\) braucht das Minus, weil die Ergebnisse im Schnitt sonst doppelt gezählt würden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel: \\( \\Omega = \\{1; 2; 3; 4; 5; 6\\} \\), A: „gerade Zahl", B: „höchstens 3"<br>
                    $$A = \\{2; 4; 6\\}, \\quad B = \\{x \\,|\\, x \\leq 3\\} = \\{1; 2; 3\\}$$<br>
                    $$A \\cup B = \\{1; 2; 3; 4; 6\\} \\Rightarrow P(A \\cup B) = \\frac{5}{6}$$<br>
                    $$A \\cap B = \\{2\\} \\Rightarrow P(A \\cap B) = \\frac{1}{6}$$<br>
                    $$A \\setminus B = \\{4; 6\\} \\Rightarrow P(A \\setminus B) = \\frac{2}{6} = \\frac{1}{3}$$<br>
                    Probe mit der Additionsformel:
                    $$P(A \\cup B) = \\frac{1}{2} + \\frac{1}{2} - \\frac{1}{6} = \\frac{5}{6} \\quad \\checkmark$$
                </div>
            </details>
        `
    },
    // Normalverteilung (eA)
    {
        id: "sto-102", niveau: "ea",
        category: "normal",
        question: "Was bedeutet \\( X \\sim N(\\mu, \\sigma^2) \\) und wann ist eine Zufallsgröße normalverteilt?",
        answer: `
            <h4>Normalverteilung</h4>
            <div class="formula-box">
                $$\\begin{gathered} X \\sim N(\\mu, \\sigma^2): \\\\[4pt] \\text{Erwartungswert } \\mu, \\\\[2pt] \\text{Standardabweichung } \\sigma \\end{gathered}$$<br><br>
                $$P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 0{,}683$$<br>
                $$P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954$$<br>
                $$P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 0{,}997$$
            </div>
            <p><strong>Wann normalverteilt?</strong></p>
            <ul>
                <li><strong>Stetige Messgrößen</strong>, die aus vielen kleinen, unabhängigen Einflüssen entstehen: Füllmengen, Körpergrößen, Messfehler, Fertigungsmaße.</li>
                <li><strong>Näherung für Binomialverteilungen</strong> mit großem n: \\( B(n; p) \\approx N(np,\\, np(1-p)) \\), sofern die Laplace-Bedingung \\( \\sigma > 3 \\) erfüllt ist.</li>
            </ul>
            <p><strong>Merksatz:</strong> Achtung bei der Schreibweise: In \\( N(\\mu, \\sigma^2) \\) steht die <em>Varianz</em>, nicht die Standardabweichung. \\( N(500, 400) \\) bedeutet also \\( \\sigma = 20 \\). Die Glockenkurve ist symmetrisch zu μ, und σ legt fest, wie breit sie ist.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Füllmenge einer Abfüllanlage: \\( X \\sim N(500, 20^2) \\), also \\( \\mu = 500 \\) ml, \\( \\sigma = 20 \\) ml.<br><br>
                    Wahrscheinlichkeit, dass eine Flasche zwischen 480 ml und 520 ml enthält:
                    $$P(480 \\leq X \\leq 520) = P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 0{,}683$$<br>
                    Zwischen 460 ml und 540 ml (\\( \\mu \\pm 2\\sigma \\)): ≈ 0,954<br>
                    Zwischen 440 ml und 560 ml (\\( \\mu \\pm 3\\sigma \\)): ≈ 0,997<br><br>
                    → Nur etwa 0,3 % aller Flaschen weichen um mehr als 60 ml vom Sollwert ab.
                </div>
            </details>
        `
    },
    {
        id: "sto-103", niveau: "ea",
        category: "normal",
        question: "Wie berechne ich Wahrscheinlichkeiten bei Normalverteilung (Standardisieren, Φ)?",
        answer: `
            <h4>Standardisieren und Φ-Tabelle</h4>
            <div class="formula-box">
                $$P(X \\leq a) = \\Phi\\!\\left(\\frac{a - \\mu}{\\sigma}\\right) = \\Phi(z)$$<br><br>
                $$P(a \\leq X \\leq b) = \\Phi\\!\\left(\\frac{b - \\mu}{\\sigma}\\right) - \\Phi\\!\\left(\\frac{a - \\mu}{\\sigma}\\right), \\qquad \\Phi(-z) = 1 - \\Phi(z)$$
            </div>
            <p><strong>Vorgehen:</strong></p>
            <ol>
                <li>Grenze standardisieren: \\( z = \\dfrac{a - \\mu}{\\sigma} \\) (Abstand von μ in Einheiten von σ).</li>
                <li>\\( \\Phi(z) \\) aus der Tabelle der Standardnormalverteilung ablesen (oder CAS/GTR).</li>
                <li>Bei „größer als": Gegenwahrscheinlichkeit \\( 1 - \\Phi(z) \\); bei negativem z die Symmetrie nutzen.</li>
            </ol>
            <p><strong>Merksatz:</strong> Die Tabelle enthält nur \\( N(0, 1) \\). Durch Standardisieren wird jede Normalverteilung darauf zurückgeführt. Weil die Dichte symmetrisch ist, liegt links von \\( -z \\) genauso viel Fläche wie rechts von \\( z \\) – daher \\( \\Phi(-z) = 1 - \\Phi(z) \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( X \\sim N(500, 20^2) \\), Tabellenwert: \\( \\Phi(1{,}5) = 0{,}9332 \\)<br><br>
                    <strong>a) \\( P(X \\leq 530) \\):</strong>
                    $$z = \\frac{530 - 500}{20} = 1{,}5 \\Rightarrow P(X \\leq 530) = \\Phi(1{,}5) = 0{,}9332$$<br>
                    <strong>b) \\( P(X > 530) \\):</strong>
                    $$1 - \\Phi(1{,}5) = 1 - 0{,}9332 = 0{,}0668$$<br>
                    <strong>c) \\( P(X \\leq 470) \\)</strong> (negatives z, Symmetrie):
                    $$z = \\frac{470 - 500}{20} = -1{,}5 \\Rightarrow \\Phi(-1{,}5) = 1 - \\Phi(1{,}5) = 0{,}0668$$<br>
                    <strong>d) \\( P(470 \\leq X \\leq 530) \\):</strong>
                    $$\\Phi(1{,}5) - \\Phi(-1{,}5) = 0{,}9332 - 0{,}0668 = 0{,}8664$$
                </div>
            </details>
        `
    },
    {
        id: "sto-104", niveau: "ea",
        category: "normal",
        question: "Wie unterscheiden sich diskrete und stetige Zufallsgrößen?",
        answer: `
            <h4>Diskret vs. stetig</h4>
            <table>
                <tr><th></th><th>diskret</th><th>stetig</th></tr>
                <tr><td>Werte</td><td>abzählbar (0, 1, 2, …)</td><td>jede reelle Zahl eines Intervalls</td></tr>
                <tr><td>Beispiel</td><td>Trefferzahl \\( X \\sim B(n; p) \\)</td><td>Füllmenge \\( X \\sim N(\\mu, \\sigma^2) \\)</td></tr>
                <tr><td>Beschreibung</td><td>Wahrscheinlichkeitsverteilung \\( P(X = k) \\)</td><td>Dichtefunktion \\( \\varphi(x) \\)</td></tr>
                <tr><td>Einzelwert</td><td>\\( P(X = k) > 0 \\) möglich</td><td>\\( P(X = a) = 0 \\) immer</td></tr>
                <tr><td>Intervall</td><td>Summe: \\( \\sum P(X = k) \\)</td><td>Fläche: \\( \\int_a^b \\varphi(x)\\,dx \\)</td></tr>
                <tr><td>Grenzen</td><td>\\( \\leq \\) und \\( < \\) verschieden!</td><td>\\( \\leq \\) und \\( < \\) gleichwertig</td></tr>
            </table>
            <div class="formula-box">
                $$\\text{diskret: } P(a \\leq X \\leq b) = \\sum_{k=a}^{b} P(X = k)$$<br>
                $$\\text{stetig: } P(a \\leq X \\leq b) = \\int_a^b \\varphi(x)\\,dx$$
            </div>
            <p><strong>Merksatz:</strong> Bei stetigen Zufallsgrößen sind Wahrscheinlichkeiten Flächen unter der Dichte. Ein einzelner Punkt hat keine Fläche, deshalb ist \\( P(X = a) = 0 \\) – die Dichte \\( \\varphi(a) \\) selbst ist <em>keine</em> Wahrscheinlichkeit, sondern nur „Wahrscheinlichkeit pro Längeneinheit".</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Diskret:</strong> 1000 Münzwürfe, \\( X \\sim B(1000; 0{,}5) \\):
                    $$P(X = 500) = \\binom{1000}{500} \\cdot 0{,}5^{1000} \\approx 0{,}0252$$
                    → „genau 500 Treffer" hat eine positive (kleine) Wahrscheinlichkeit.<br><br>
                    <strong>Stetig:</strong> Passende Normalverteilung \\( Y \\sim N(500, 250) \\) mit \\( \\mu = np = 500 \\), \\( \\sigma^2 = np(1-p) = 250 \\), also \\( \\sigma \\approx 15{,}81 \\):
                    $$P(Y = 500) = 0, \\quad \\text{aber} \\quad P(499{,}5 \\leq Y \\leq 500{,}5) \\approx 0{,}0252$$
                    → Nur ein Intervall um 500 hat eine Wahrscheinlichkeit; sie entspricht etwa \\( \\varphi(500) \\cdot 1 \\) (Dichte mal Intervallbreite) und stimmt mit dem Binomialwert überein. Das ist die <strong>Stetigkeitskorrektur</strong>: \\( P(X = k) \\approx P(k - 0{,}5 \\leq Y \\leq k + 0{,}5) \\)
                </div>
            </details>
        `
    },
    {
        id: "sto-105", niveau: "ea",
        category: "normal",
        question: "Was ist die Gaußsche Dichtefunktion und wie sieht sie aus?",
        answer: `
            <h4>Gaußsche Glockenkurve</h4>
            <div class="formula-box">
                $$\\varphi_{\\mu;\\sigma}(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\cdot e^{-\\frac{1}{2}\\left(\\frac{x - \\mu}{\\sigma}\\right)^2}$$<br><br>
                $$\\text{standardisiert } (\\mu = 0,\\ \\sigma = 1): \\quad \\varphi(x) = \\frac{1}{\\sqrt{2\\pi}} \\cdot e^{-\\frac{x^2}{2}}$$
            </div>
            <p><strong>Eigenschaften:</strong></p>
            <ul>
                <li><strong>Symmetrie</strong> zur Geraden \\( x = \\mu \\); dort liegt das Maximum \\( \\varphi(\\mu) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}} \\).</li>
                <li><strong>Wendepunkte</strong> bei \\( x = \\mu \\pm \\sigma \\) – σ ist also an der Kurve ablesbar.</li>
                <li>\\( \\varphi(x) > 0 \\) für alle x, x-Achse ist Asymptote für \\( x \\to \\pm\\infty \\).</li>
                <li><strong>Gesamtfläche 1:</strong> \\( \\int_{-\\infty}^{\\infty} \\varphi(x)\\,dx = 1 \\); \\( \\Phi(z) = \\int_{-\\infty}^{z} \\varphi(x)\\,dx \\) ist die Fläche links von z.</li>
                <li>Größeres σ → flachere, breitere Glocke (Fläche bleibt 1); anderes μ → Verschiebung entlang der x-Achse.</li>
            </ul>
            <p><strong>Merksatz:</strong> Der Vorfaktor \\( \\frac{1}{\\sigma\\sqrt{2\\pi}} \\) sorgt genau dafür, dass die Gesamtfläche 1 wird. Die Wendepunkte bei μ ± σ folgen aus \\( \\varphi''(x) = 0 \\), und die Fläche zwischen ihnen ist die bekannte 68-%-Regel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( X \\sim N(500, 20^2) \\):<br><br>
                    Maximum bei \\( x = 500 \\):
                    $$\\varphi(500) = \\frac{1}{20\\sqrt{2\\pi}} \\approx 0{,}0199$$<br>
                    Wendepunkte bei \\( 500 \\pm 20 \\), also bei 480 und 520; dort gilt
                    $$\\varphi(520) = \\frac{1}{20\\sqrt{2\\pi}} \\cdot e^{-\\frac{1}{2}} \\approx 0{,}0199 \\cdot 0{,}6065 \\approx 0{,}0121$$<br>
                    Zum Vergleich standardisiert: \\( \\varphi(0) = \\frac{1}{\\sqrt{2\\pi}} \\approx 0{,}3989 \\) – die Kurve für σ = 20 ist 20-mal flacher, dafür 20-mal breiter.
                </div>
            </details>
        `
    },
    {
        id: "sto-106", niveau: "ea",
        category: "normal",
        question: "Wie bestimme ich μ oder σ aus einer gegebenen Wahrscheinlichkeit?",
        answer: `
            <h4>Rückwärts durch die Φ-Tabelle</h4>
            <div class="formula-box">
                $$P(X \\leq a) = p \\;\\Rightarrow\\; \\Phi(z) = p \\;\\Rightarrow\\; z = \\Phi^{-1}(p) \\;\\Rightarrow\\; \\frac{a - \\mu}{\\sigma} = z$$
            </div>
            <p><strong>Vorgehen:</strong></p>
            <ol>
                <li>Bedingung als \\( P(X \\leq a) = p \\) schreiben (bei „größer" oder „zwischen" zuerst in „kleiner-gleich" umformen).</li>
                <li>z zu p in der Tabelle <em>rückwärts</em> suchen: welche Zeile liefert Φ(z) = p? (oder \\( \\Phi^{-1} \\) mit CAS/GTR)</li>
                <li>Gleichung \\( \\dfrac{a - \\mu}{\\sigma} = z \\) nach der gesuchten Größe auflösen.</li>
            </ol>
            <table>
                <tr><th>p</th><th>0,90</th><th>0,95</th><th>0,975</th><th>0,99</th></tr>
                <tr><td>z</td><td>1,2816</td><td>1,6449</td><td>1,9600</td><td>2,3263</td></tr>
            </table>
            <p><strong>Merksatz:</strong> Genau eine Unbekannte, genau eine Gleichung. Für p &lt; 0,5 ist z negativ – dann \\( z = -\\Phi^{-1}(1 - p) \\) über die Symmetrie. Sind μ und σ beide unbekannt, braucht man zwei Bedingungen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Vorgabe: 90 % aller Flaschen enthalten höchstens 530 ml, also \\( P(X \\leq 530) = 0{,}9 \\). Tabelle rückwärts: \\( \\Phi(z) = 0{,}9 \\Rightarrow z \\approx 1{,}2816 \\).<br><br>
                    <strong>a) σ = 20 bekannt, μ gesucht:</strong>
                    $$\\frac{530 - \\mu}{20} = 1{,}2816 \\Rightarrow \\mu = 530 - 20 \\cdot 1{,}2816 \\approx 504{,}37$$<br>
                    <strong>b) μ = 500 bekannt, σ gesucht:</strong>
                    $$\\frac{530 - 500}{\\sigma} = 1{,}2816 \\Rightarrow \\sigma = \\frac{30}{1{,}2816} \\approx 23{,}41$$<br>
                    Probe zu b): \\( z = 30 / 23{,}41 \\approx 1{,}28 \\), \\( \\Phi(1{,}28) \\approx 0{,}90 \\) ✓
                </div>
            </details>
        `
    },
    // Statistik (eA)
    {
        id: "sto-107", niveau: "ea",
        category: "statistik",
        question: "Was sind Grundgesamtheit, Stichprobe, repräsentative Stichprobe?",
        answer: `
            <h4>Begriffe der beurteilenden Statistik</h4>
            <table>
                <tr><th>Begriff</th><th>Bedeutung</th><th>Kenngröße</th></tr>
                <tr><td>Grundgesamtheit</td><td>alle Objekte, über die eine Aussage gemacht werden soll (Umfang N)</td><td>wahrer Anteil p (unbekannt)</td></tr>
                <tr><td>Stichprobe</td><td>zufällig ausgewählte Teilmenge vom Umfang n</td><td>relative Häufigkeit \\( h = \\frac{k}{n} \\)</td></tr>
                <tr><td>repräsentativ</td><td>Stichprobe spiegelt die Grundgesamtheit in den relevanten Merkmalen wider</td><td>h ist ein guter Schätzwert für p</td></tr>
            </table>
            <div class="formula-box">
                $$h = \\frac{k}{n} \\approx p \\qquad \\text{(Schätzung: } p \\approx h \\text{, Hochrechnung: } N \\cdot h\\text{)}$$
            </div>
            <p><strong>Repräsentativ</strong> wird eine Stichprobe durch <em>zufällige</em> Auswahl (jedes Element gleiche Chance) und ausreichenden Umfang. Nicht repräsentativ: Befragung nur in einer Klasse, nur Freiwillige, nur Internetnutzer – hier ist die Auswahl systematisch verzerrt.</p>
            <p><strong>Merksatz:</strong> Die Stichprobe ersetzt die Vollerhebung, weil diese zu teuer, zu langsam oder unmöglich ist (zerstörende Prüfung). Der Preis dafür ist Unsicherheit: h schwankt von Stichprobe zu Stichprobe um p – wie stark, sagen Prognose- und Konfidenzintervall.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Schule mit N = 500 Schülerinnen und Schülern. Aus der Schülerliste werden n = 50 per Zufallszahlen ausgewählt und befragt; k = 12 fahren mit dem Rad.<br><br>
                    $$h = \\frac{12}{50} = 0{,}24 \\Rightarrow p \\approx 0{,}24$$<br>
                    Hochrechnung: \\( 500 \\cdot 0{,}24 = 120 \\) Radfahrende an der Schule (Schätzwert).<br><br>
                    Hätte man nur die 25 Mitglieder der Fahrrad-AG befragt, wäre h nahe 1 – die Stichprobe wäre nicht repräsentativ, obwohl sie fast genauso groß ist.
                </div>
            </details>
        `
    },
    {
        id: "sto-108", niveau: "ea",
        category: "statistik",
        question: "Wie berechne ich ein Prognoseintervall für Trefferzahlen?",
        answer: `
            <h4>Prognoseintervall (p bekannt → Stichprobe vorhersagen)</h4>
            <div class="formula-box">
                $$\\text{Trefferzahl: } \\quad \\mu - c \\cdot \\sigma \\leq X \\leq \\mu + c \\cdot \\sigma, \\qquad \\mu = np, \\; \\sigma = \\sqrt{np(1-p)}$$<br><br>
                $$\\text{Anteil: } \\quad p - c \\cdot \\sqrt{\\frac{p(1-p)}{n}} \\leq \\frac{X}{n} \\leq p + c \\cdot \\sqrt{\\frac{p(1-p)}{n}}$$
            </div>
            <table>
                <tr><th>Sicherheit</th><th>90 %</th><th>95 %</th><th>99 %</th></tr>
                <tr><td>c</td><td>1,64</td><td>1,96</td><td>2,58</td></tr>
            </table>
            <p>(gerundete c-Werte; genauer 1,6449 / 1,9600 / 2,5758)</p>
            <p><strong>Merksatz:</strong> Die Binomialverteilung \\( B(n; p) \\) wird für \\( \\sigma > 3 \\) durch \\( N(np, \\sigma^2) \\) genähert; das 95-%-Intervall reicht dann 1,96σ nach beiden Seiten. Das Anteilsintervall ist dasselbe Intervall, nur durch n geteilt. Bei Trefferzahlen auf ganze Zahlen <em>nach innen</em> runden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Ein Bauteil ist mit p = 0,3 fehlerhaft; n = 200 Bauteile werden geprüft. 95-%-Prognoseintervall?<br><br>
                    <strong>Trefferzahl:</strong>
                    $$\\mu = 200 \\cdot 0{,}3 = 60, \\qquad \\sigma = \\sqrt{200 \\cdot 0{,}3 \\cdot 0{,}7} = \\sqrt{42} \\approx 6{,}48 > 3 \\; \\checkmark$$
                    $$60 \\pm 1{,}96 \\cdot 6{,}48 = 60 \\pm 12{,}70 \\Rightarrow [47{,}3;\\, 72{,}7] \\Rightarrow 48 \\leq X \\leq 72$$<br>
                    <strong>Anteil:</strong>
                    $$0{,}3 \\pm 1{,}96 \\cdot \\sqrt{\\frac{0{,}3 \\cdot 0{,}7}{200}} = 0{,}3 \\pm 1{,}96 \\cdot 0{,}0324 = 0{,}3 \\pm 0{,}0635$$
                    $$\\Rightarrow 0{,}2365 \\leq \\frac{X}{n} \\leq 0{,}3635$$<br>
                    Kontrolle mit der exakten Binomialverteilung: \\( P(48 \\leq X \\leq 72) \\approx 0{,}947 \\) – passt zu 95 %.
                </div>
            </details>
        `
    },
    {
        id: "sto-109", niveau: "ea",
        category: "statistik",
        question: "Wie berechne ich ein Konfidenzintervall für p?",
        answer: `
            <h4>Konfidenzintervall (Stichprobe bekannt → p schätzen)</h4>
            <div class="formula-box">
                $$h - c \\cdot \\sqrt{\\frac{h(1-h)}{n}} \\;\\leq\\; p \\;\\leq\\; h + c \\cdot \\sqrt{\\frac{h(1-h)}{n}}$$<br>
                $$h = \\frac{k}{n}, \\qquad c = 1{,}96 \\text{ für } 95\\,\\%$$
            </div>
            <p><strong>Vorgehen:</strong></p>
            <ol>
                <li>Relative Häufigkeit \\( h = k/n \\) aus der Stichprobe berechnen.</li>
                <li>Standardfehler \\( \\sqrt{h(1-h)/n} \\) bestimmen, mit c multiplizieren.</li>
                <li>Intervall \\( [h - c \\cdot \\ldots;\\, h + c \\cdot \\ldots] \\) angeben und interpretieren.</li>
            </ol>
            <p><strong>Merksatz:</strong> Das Konfidenzintervall ist die Umkehrung des Prognoseintervalls: Statt des unbekannten p wird h in die Wurzel eingesetzt. Interpretation: Das Verfahren liefert in etwa 95 % aller Stichproben ein Intervall, das das wahre p enthält – nicht „p liegt mit 95 % Wahrscheinlichkeit im Intervall" (p ist fest, das Intervall ist zufällig).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Umfrage: Von n = 400 Befragten geben k = 120 an, das Produkt zu kennen. 95-%-Konfidenzintervall für den Bekanntheitsgrad p?<br><br>
                    $$h = \\frac{120}{400} = 0{,}3$$
                    $$\\sqrt{\\frac{0{,}3 \\cdot 0{,}7}{400}} = \\sqrt{0{,}000525} \\approx 0{,}0229, \\qquad 1{,}96 \\cdot 0{,}0229 \\approx 0{,}0449$$
                    $$0{,}3 - 0{,}0449 \\leq p \\leq 0{,}3 + 0{,}0449 \\Rightarrow 0{,}255 \\leq p \\leq 0{,}345$$<br>
                    → Der Bekanntheitsgrad liegt (bei 95 % Konfidenz) zwischen 25,5 % und 34,5 %.
                </div>
            </details>
        `
    },
    {
        id: "sto-110", niveau: "ea",
        category: "statistik",
        question: "Was ist die Laplace-Bedingung und wann darf ich die σ-Regeln nutzen?",
        answer: `
            <h4>Laplace-Bedingung und σ-Regeln</h4>
            <div class="formula-box">
                $$\\text{Laplace-Bedingung (Faustregel): } \\quad \\sigma = \\sqrt{np(1-p)} > 3$$
            </div>
            <p>Ist sie erfüllt, darf \\( B(n; p) \\) durch die Normalverteilung \\( N(\\mu, \\sigma^2) \\) genähert werden, und die <strong>σ-Regeln</strong> gelten:</p>
            <table>
                <tr><th>Intervall</th><th>Wahrscheinlichkeit</th></tr>
                <tr><td>\\( [\\mu - \\sigma;\\, \\mu + \\sigma] \\)</td><td>≈ 68,3 %</td></tr>
                <tr><td>\\( [\\mu - 1{,}64\\sigma;\\, \\mu + 1{,}64\\sigma] \\)</td><td>≈ 90 %</td></tr>
                <tr><td>\\( [\\mu - 1{,}96\\sigma;\\, \\mu + 1{,}96\\sigma] \\)</td><td>≈ 95 %</td></tr>
                <tr><td>\\( [\\mu - 2\\sigma;\\, \\mu + 2\\sigma] \\)</td><td>≈ 95,4 %</td></tr>
                <tr><td>\\( [\\mu - 3\\sigma;\\, \\mu + 3\\sigma] \\)</td><td>≈ 99,7 %</td></tr>
            </table>
            <p><strong>Merksatz:</strong> Die Binomialverteilung ist diskret und für kleine n oder p nahe 0 bzw. 1 schief; erst bei großem σ wird sie glockenförmig und symmetrisch genug, dass die Normalverteilung passt. Ist σ ≤ 3, muss mit der Binomialverteilung selbst (Tabelle/GTR) gerechnet werden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Ausschussquote p = 0,1.<br><br>
                    <strong>n = 50:</strong> \\( \\sigma = \\sqrt{50 \\cdot 0{,}1 \\cdot 0{,}9} = \\sqrt{4{,}5} \\approx 2{,}12 \\leq 3 \\) → σ-Regeln <em>nicht</em> anwendbar, binomial rechnen.<br><br>
                    <strong>n = 200:</strong> \\( \\mu = 20, \\; \\sigma = \\sqrt{18} \\approx 4{,}24 > 3 \\) ✓<br>
                    1σ-Intervall: \\( 20 \\pm 4{,}24 \\Rightarrow [15{,}76;\\, 24{,}24] \\), also \\( 16 \\leq X \\leq 24 \\)<br>
                    2σ-Intervall: \\( 20 \\pm 8{,}49 \\Rightarrow [11{,}51;\\, 28{,}49] \\), also \\( 12 \\leq X \\leq 28 \\)<br><br>
                    Exakt binomial: \\( P(16 \\leq X \\leq 24) \\approx 0{,}712 \\) (Regel: 0,683), \\( P(12 \\leq X \\leq 28) \\approx 0{,}956 \\) (Regel: 0,954) – die Näherung ist brauchbar; die Abweichung beim 1σ-Intervall zeigt, dass die Faustregel nur eine Näherung liefert.
                </div>
            </details>
        `
    },
    {
        id: "sto-111", niveau: "ea",
        category: "statistik",
        question: "Wie schließe ich von der Stichprobe auf die Grundgesamtheit?",
        answer: `
            <h4>Schluss von h auf p</h4>
            <div class="formula-box">
                $$\\text{Punktschätzung: } p \\approx h$$<br>
                $$\\text{Konfidenzintervall für } p: \\; \\left[h - c\\sqrt{\\tfrac{h(1-h)}{n}};\\; h + c\\sqrt{\\tfrac{h(1-h)}{n}}\\right]$$
            </div>
            <p><strong>Die beiden Richtungen:</strong></p>
            <table>
                <tr><th>Richtung</th><th>bekannt</th><th>gesucht</th><th>Werkzeug</th></tr>
                <tr><td>Grundgesamtheit → Stichprobe</td><td>p</td><td>X bzw. h</td><td>Prognoseintervall</td></tr>
                <tr><td>Stichprobe → Grundgesamtheit</td><td>h</td><td>p</td><td>Konfidenzintervall</td></tr>
            </table>
            <p><strong>Vorgehen beim Schluss auf die Grundgesamtheit:</strong> Konfidenzintervall für p berechnen, bei Bedarf mit N hochrechnen (Anzahl-Intervall) und prüfen, ob ein behaupteter Wert \\( p_0 \\) im Intervall liegt: Liegt er drin, ist die Behauptung mit der Stichprobe verträglich; liegt er außerhalb, spricht die Stichprobe (auf dem 95-%-Niveau) dagegen.</p>
            <p><strong>Merksatz:</strong> Ein Schluss aus einer Stichprobe ist nie sicher, nur mit angebbarer Konfidenz. Je größer n, desto schmaler das Intervall – aber nur mit dem Faktor \\( \\frac{1}{\\sqrt{n}} \\): viermal so viele Befragte halbieren die Breite.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Stadt mit N = 20 000 Haushalten. Zufallsstichprobe n = 500, davon k = 200 mit Solaranlage: \\( h = 0{,}4 \\).<br><br>
                    $$\\sqrt{\\frac{0{,}4 \\cdot 0{,}6}{500}} \\approx 0{,}0219, \\qquad 1{,}96 \\cdot 0{,}0219 \\approx 0{,}0429$$
                    $$0{,}357 \\leq p \\leq 0{,}443$$<br>
                    Hochrechnung: \\( 20\\,000 \\cdot 0{,}357 \\approx 7140 \\) bis \\( 20\\,000 \\cdot 0{,}443 \\approx 8860 \\) Haushalte mit Solaranlage (95 % Konfidenz).<br><br>
                    Behauptung der Stadtverwaltung „35 % haben eine Solaranlage": \\( p_0 = 0{,}35 \\) liegt <em>nicht</em> im Intervall → die Stichprobe spricht gegen die Behauptung. Bei \\( p_0 = 0{,}42 \\) dagegen: verträglich.
                </div>
            </details>
        `
    },
    {
        id: "sto-112", niveau: "ea",
        category: "statistik",
        question: "Wie groß muss n sein, damit das Konfidenzintervall eine bestimmte Breite hat?",
        answer: `
            <h4>Stichprobenumfang aus der Intervallbreite</h4>
            <div class="formula-box">
                $$\\text{halbe Breite } d = c \\cdot \\sqrt{\\frac{h(1-h)}{n}} \\;\\Rightarrow\\; n = \\left(\\frac{c}{d}\\right)^2 \\cdot h(1-h)$$<br><br>
                $$\\text{ungünstigster Fall } h = 0{,}5: \\quad n = \\left(\\frac{c}{d}\\right)^2 \\cdot \\frac{1}{4}$$
            </div>
            <p><strong>Vorgehen:</strong></p>
            <ol>
                <li>Gesamtbreite halbieren: d = halbe Breite (Abstand von h zum Rand).</li>
                <li>Gleichung nach n auflösen (quadrieren!).</li>
                <li>Ist h unbekannt: h = 0,5 einsetzen, denn dort ist \\( h(1-h) \\) maximal. Ergebnis <em>aufrunden</em>.</li>
            </ol>
            <p><strong>Merksatz:</strong> \\( h(1-h) \\) ist eine nach unten geöffnete Parabel mit Scheitel bei h = 0,5 (Wert 0,25). Wer mit 0,5 plant, ist auf der sicheren Seite: Für jeden anderen Wert wird das Intervall höchstens schmaler. Weil n unter der Wurzel steht, kostet doppelte Genauigkeit den vierfachen Umfang.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Ein 95-%-Konfidenzintervall soll höchstens 4 Prozentpunkte breit sein, also \\( d = 0{,}02 \\); h ist vorab unbekannt.<br><br>
                    $$1{,}96 \\cdot \\sqrt{\\frac{0{,}25}{n}} \\leq 0{,}02 \\;\\Rightarrow\\; \\sqrt{n} \\geq \\frac{1{,}96 \\cdot 0{,}5}{0{,}02} = 49 \\;\\Rightarrow\\; n \\geq 49^2 = 2401$$<br>
                    Probe: \\( 1{,}96 \\cdot \\sqrt{0{,}25 / 2401} = 0{,}02 \\) ✓<br><br>
                    Ist aus einer Vorstudie h ≈ 0,3 bekannt, reicht
                    $$n \\geq \\left(\\frac{1{,}96}{0{,}02}\\right)^2 \\cdot 0{,}3 \\cdot 0{,}7 = 9604 \\cdot 0{,}21 \\approx 2016{,}8 \\;\\Rightarrow\\; n = 2017$$
                </div>
            </details>
        `
    }
]
};
