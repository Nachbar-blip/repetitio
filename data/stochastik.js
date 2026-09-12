// Repetitio-Deck: Stochastik — gA-Karten aus dem GK-Trainer; eA-Karten werden ergänzt
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["stochastik"] = {
    title: "Stochastik",
    subtitle: "Wahrscheinlichkeit, Binomialverteilung, Kenngrößen",
    categories: {
        grundlagen: "Grundlagen",
        binomial: "Binomial",
        kenngroessen: "Kenngrößen",
        bedingt: "Bedingt"
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
    }
]
};
