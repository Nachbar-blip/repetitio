// Repetitio-Deck: Klasse 10 — Stoffverteilungsplan Mathematik Klasse 10, Gymnasium Sachsen-Anhalt
// Alle Karten niveau "ga": Klasse 10 kennt kein gA/eA, die Karten sind in beiden Modi sichtbar.
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["klasse10"] = {
    title: "Klasse 10",
    subtitle: "Potenzen, Exponentialfunktionen, Trigonometrie, LGS, Vektoren, Zufallsgrößen",
    categories: {
        potenz: "Potenz- & Wurzelfunktionen",
        explog: "Exponential- & Logarithmusfunktionen",
        trigo: "Trigonometrische Funktionen",
        lgs: "Lineare Gleichungssysteme",
        vektoren: "Vektoren",
        zufall: "Zufallsgrößen"
    },
    cards: [
    // ── Potenz- & Wurzelfunktionen ──────────────────────────────────────────
    {
        id: "k10-001", niveau: "ga",
        category: "potenz",
        question: "Wie multipliziere und dividiere ich Potenzen mit gleicher Basis?",
        answer: `
            <h4>Potenzgesetze (gleiche Basis)</h4>
            <div class="formula-box">
                $$a^m \\cdot a^n = a^{m+n}$$
                $$\\frac{a^m}{a^n} = a^{m-n}$$
            </div>
            <p>Die Basis bleibt stehen, die Exponenten werden addiert bzw. subtrahiert.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2^3 \\cdot 2^5 = 2^{8} = 256$$
                    $$\\frac{x^7}{x^3} = x^{4}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-002", niveau: "ga",
        category: "potenz",
        question: "Wie potenziere ich eine Potenz?",
        answer: `
            <h4>Potenz einer Potenz</h4>
            <div class="formula-box">
                $$\\left(a^m\\right)^n = a^{m \\cdot n}$$
            </div>
            <p>Die Exponenten werden multipliziert. Klammer beachten: \\( \\left(a^m\\right)^n \\) ist nicht dasselbe wie \\( a^{m^n} \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\left(3^2\\right)^4 = 3^{8} = 6561$$
                    $$\\left(x^5\\right)^3 = x^{15}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-003", niveau: "ga",
        category: "potenz",
        question: "Wie rechne ich mit Potenzen bei gleichem Exponenten?",
        answer: `
            <h4>Produkt- und Quotientenpotenz</h4>
            <div class="formula-box">
                $$a^n \\cdot b^n = (a \\cdot b)^n$$
                $$\\frac{a^n}{b^n} = \\left(\\frac{a}{b}\\right)^n$$
            </div>
            <p>Bei gleichem Exponenten darf man die Basen zusammenfassen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2^4 \\cdot 5^4 = 10^4 = 10000$$
                    $$\\frac{6^3}{2^3} = 3^3 = 27$$
                </div>
            </details>
        `
    },
    {
        id: "k10-004", niveau: "ga",
        category: "potenz",
        question: "Was bedeutet ein negativer Exponent?",
        answer: `
            <h4>Negative Exponenten</h4>
            <div class="formula-box">
                $$a^{-n} = \\frac{1}{a^n} \\quad (a \\neq 0)$$
            </div>
            <p>Ein negativer Exponent bedeutet Kehrwert, <strong>nicht</strong> negatives Vorzeichen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$$
                    $$\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-005", niveau: "ga",
        category: "potenz",
        question: "Was ergibt eine Potenz mit dem Exponenten 0 oder 1?",
        answer: `
            <h4>Sonderfälle</h4>
            <div class="formula-box">
                $$a^0 = 1 \\quad (a \\neq 0), \\qquad a^1 = a$$
            </div>
            <p>Begründung für \\( a^0 \\): \\( \\dfrac{a^n}{a^n} = a^{n-n} = a^0 \\), und der Quotient ist 1.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$7^0 = 1, \\qquad (-5)^0 = 1$$
                    $$3x^0 = 3 \\cdot 1 = 3 \\quad \\text{(nur } x \\text{ hat den Exponenten 0)}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-006", niveau: "ga",
        category: "potenz",
        question: "Wie schreibe ich eine Wurzel als Potenz?",
        answer: `
            <h4>Rationale Exponenten</h4>
            <div class="formula-box">
                $$\\sqrt[n]{a} = a^{\\frac{1}{n}}, \\qquad \\sqrt[n]{a^m} = a^{\\frac{m}{n}}$$
            </div>
            <p>Gültig für \\( a \\ge 0 \\). So lassen sich Wurzeln mit den Potenzgesetzen zusammenfassen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$$
                    $$\\sqrt{x} \\cdot \\sqrt[3]{x} = x^{\\frac{1}{2}} \\cdot x^{\\frac{1}{3}} = x^{\\frac{5}{6}}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-007", niveau: "ga",
        category: "potenz",
        question: "Wie verläuft der Graph von \\( f(x) = x^n \\) bei geradem \\( n \\)?",
        answer: `
            <h4>Potenzfunktion, \\( n \\) gerade</h4>
            <div class="formula-box">
                $$f(x) = x^n, \\quad n = 2, 4, 6, \\dots$$
            </div>
            <ul>
                <li>Parabelartig, nach oben geöffnet</li>
                <li>Achsensymmetrisch zur \\( y \\)-Achse: \\( f(-x) = f(x) \\)</li>
                <li>Wertebereich \\( y \\ge 0 \\), Scheitel im Ursprung</li>
                <li>Je größer \\( n \\), desto flacher zwischen \\( -1 \\) und \\( 1 \\), desto steiler außerhalb</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = x^4 \\): $$f(-2) = 16 = f(2)$$
                    Alle Graphen gehen durch \\( (0|0) \\), \\( (1|1) \\) und \\( (-1|1) \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-008", niveau: "ga",
        category: "potenz",
        question: "Wie verläuft der Graph von \\( f(x) = x^n \\) bei ungeradem \\( n \\)?",
        answer: `
            <h4>Potenzfunktion, \\( n \\) ungerade</h4>
            <div class="formula-box">
                $$f(x) = x^n, \\quad n = 3, 5, 7, \\dots$$
            </div>
            <ul>
                <li>Steigt überall, von links unten nach rechts oben</li>
                <li>Punktsymmetrisch zum Ursprung: \\( f(-x) = -f(x) \\)</li>
                <li>Wertebereich alle reellen Zahlen, Sattelpunkt im Ursprung</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = x^3 \\): $$f(-2) = -8, \\quad f(2) = 8$$
                    Alle Graphen gehen durch \\( (0|0) \\), \\( (1|1) \\) und \\( (-1|-1) \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-009", niveau: "ga",
        category: "potenz",
        question: "Wie erkenne ich an der Gleichung, ob eine Funktion gerade oder ungerade ist?",
        answer: `
            <h4>Symmetrie prüfen</h4>
            <div class="formula-box">
                $$f(-x) = f(x) \\;\\Rightarrow\\; \\text{achsensymmetrisch zur } y\\text{-Achse}$$
                $$f(-x) = -f(x) \\;\\Rightarrow\\; \\text{punktsymmetrisch zum Ursprung}$$
            </div>
            <p>Bei ganzrationalen Funktionen: nur gerade Exponenten heißt achsensymmetrisch, nur ungerade heißt punktsymmetrisch. Gemischt: keine dieser Symmetrien.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = x^4 - 3x^2 \\):
                    $$f(-x) = x^4 - 3x^2 = f(x)$$
                    also achsensymmetrisch zur \\( y \\)-Achse.
                </div>
            </details>
        `
    },
    {
        id: "k10-010", niveau: "ga",
        category: "potenz",
        question: "Was bewirkt der Faktor \\( a \\) in \\( f(x) = a \\cdot x^n \\)?",
        answer: `
            <h4>Streckung und Spiegelung</h4>
            <div class="formula-box">
                $$f(x) = a \\cdot x^n$$
            </div>
            <ul>
                <li>\\( |a| > 1 \\): Streckung in \\( y \\)-Richtung, Graph wird steiler</li>
                <li>\\( 0 < |a| < 1 \\): Stauchung, Graph wird flacher</li>
                <li>\\( a < 0 \\): zusätzlich Spiegelung an der \\( x \\)-Achse</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = -2x^3 \\) an der Stelle \\( x = 2 \\):
                    $$f(2) = -2 \\cdot 8 = -16$$
                    doppelt so steil wie \\( x^3 \\) und nach unten gespiegelt.
                </div>
            </details>
        `
    },
    {
        id: "k10-011", niveau: "ga",
        category: "potenz",
        question: "Wie verläuft der Graph von \\( f(x) = x^{-n} \\)?",
        answer: `
            <h4>Potenzfunktion mit negativem Exponenten</h4>
            <div class="formula-box">
                $$f(x) = x^{-n} = \\frac{1}{x^n}, \\quad x \\neq 0$$
            </div>
            <ul>
                <li>Hyperbelartig, Definitionslücke bei \\( x = 0 \\)</li>
                <li>Senkrechte Asymptote \\( x = 0 \\), waagerechte Asymptote \\( y = 0 \\)</li>
                <li>\\( n \\) ungerade: punktsymmetrisch, zwei Äste in den Quadranten I und III</li>
                <li>\\( n \\) gerade: achsensymmetrisch, beide Äste oberhalb der \\( x \\)-Achse</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = \\dfrac{1}{x^2} \\):
                    $$f(0{,}5) = 4, \\quad f(-0{,}5) = 4, \\quad f(10) = 0{,}01$$
                    Für \\( x \\to \\pm\\infty \\) nähert sich der Graph der \\( x \\)-Achse.
                </div>
            </details>
        `
    },
    {
        id: "k10-012", niveau: "ga",
        category: "potenz",
        question: "Wie lese ich die Asymptoten einer verschobenen Hyperbel ab?",
        answer: `
            <h4>Asymptoten bei \\( f(x) = \\frac{1}{(x-d)^n} + e \\)</h4>
            <div class="formula-box">
                $$x = d \\quad \\text{(senkrecht)}, \\qquad y = e \\quad \\text{(waagerecht)}$$
            </div>
            <p>Die Verschiebung nach rechts bzw. nach oben verschiebt die Asymptoten mit.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = \\dfrac{1}{x^2} + 4 \\):
                    $$x = 0 \\quad \\text{und} \\quad y = 4$$
                    \\( f(x) = \\dfrac{1}{x-3} - 1 \\): Asymptoten \\( x = 3 \\) und \\( y = -1 \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-013", niveau: "ga",
        category: "potenz",
        question: "Welchen Definitionsbereich und Verlauf hat die Wurzelfunktion?",
        answer: `
            <h4>Wurzelfunktion</h4>
            <div class="formula-box">
                $$f(x) = \\sqrt{x} = x^{\\frac{1}{2}}, \\quad D = \\{x \\in \\mathbb{R} \\mid x \\ge 0\\}$$
            </div>
            <ul>
                <li>Beginnt im Ursprung, steigt monoton, wird immer flacher</li>
                <li>Wertebereich \\( y \\ge 0 \\)</li>
                <li>\\( \\sqrt[3]{x} \\) ist dagegen für alle reellen \\( x \\) definiert</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(4) = 2, \\quad f(9) = 3, \\quad f(0{,}25) = 0{,}5$$
                    Für \\( f(x) = \\sqrt{x-3} \\) gilt \\( D: x \\ge 3 \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-014", niveau: "ga",
        category: "potenz",
        question: "Wie bestimme ich die Umkehrfunktion?",
        answer: `
            <h4>Umkehrfunktion bilden</h4>
            <ol>
                <li>\\( y = f(x) \\) schreiben</li>
                <li>Nach \\( x \\) umstellen</li>
                <li>\\( x \\) und \\( y \\) vertauschen</li>
                <li>Definitionsbereich angeben</li>
            </ol>
            <p>Der Graph der Umkehrfunktion entsteht durch Spiegelung an der Geraden \\( y = x \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = x^2 \\) mit \\( x \\ge 0 \\):
                    $$y = x^2 \\;\\Rightarrow\\; x = \\sqrt{y}$$
                    $$f^{-1}(x) = \\sqrt{x}, \\quad x \\ge 0$$
                </div>
            </details>
        `
    },
    {
        id: "k10-015", niveau: "ga",
        category: "potenz",
        question: "Wie löse ich eine Potenzgleichung \\( x^n = c \\)?",
        answer: `
            <h4>Potenzgleichung</h4>
            <div class="formula-box">
                $$n \\text{ ungerade}: \\quad x = \\sqrt[n]{c} \\quad \\text{(eine Lösung)}$$
                $$n \\text{ gerade}, c > 0: \\quad x = \\pm\\sqrt[n]{c} \\quad \\text{(zwei Lösungen)}$$
            </div>
            <p>Bei geradem \\( n \\) und \\( c < 0 \\) gibt es keine Lösung.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^4 = 16 \\;\\Rightarrow\\; x = 2 \\;\\text{oder}\\; x = -2$$
                    $$x^3 = -27 \\;\\Rightarrow\\; x = -3$$
                    $$x^2 = -9 \\;\\Rightarrow\\; \\mathbb{L} = \\{\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-016", niveau: "ga",
        category: "potenz",
        question: "Wie löse ich eine Wurzelgleichung?",
        answer: `
            <h4>Wurzelgleichung</h4>
            <ol>
                <li>Wurzel isolieren</li>
                <li>Beide Seiten quadrieren (binomische Formel beachten)</li>
                <li>Gleichung lösen</li>
                <li><strong>Probe</strong> — Quadrieren ist keine Äquivalenzumformung, es können Scheinlösungen entstehen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sqrt{2x+7} = x+2$$
                    $$2x+7 = x^2+4x+4$$
                    $$x^2+2x-3 = 0 \\;\\Rightarrow\\; x_1 = 1,\\; x_2 = -3$$
                    Probe: \\( x=1 \\) passt (\\( 3 = 3 \\)), \\( x=-3 \\) nicht (\\( 1 \\neq -1 \\)).
                    $$\\mathbb{L} = \\{1\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-017", niveau: "ga",
        category: "potenz",
        question: "Wie wirken die Parameter in \\( f(x) = a \\cdot (x+d)^n + e \\)?",
        answer: `
            <h4>Transformationen</h4>
            <ul>
                <li>\\( d > 0 \\): Verschiebung um \\( d \\) nach <strong>links</strong></li>
                <li>\\( d < 0 \\): Verschiebung nach rechts</li>
                <li>\\( e \\): Verschiebung um \\( e \\) nach oben</li>
                <li>\\( a \\): Streckung, bei \\( a<0 \\) zusätzlich Spiegelung an der \\( x \\)-Achse</li>
            </ul>
            <p>Reihenfolge beim Zeichnen: strecken, dann verschieben.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = 2(x-1)^3 + 5 \\): Graph von \\( x^3 \\), um 1 nach rechts, um 5 nach oben, doppelt so steil.
                    $$f(1) = 5, \\quad f(2) = 7$$
                </div>
            </details>
        `
    },
    {
        id: "k10-018", niveau: "ga",
        category: "potenz",
        question: "Wie vereinfache ich einen Term mit Potenzen und Wurzeln?",
        answer: `
            <h4>Vorgehen</h4>
            <ol>
                <li>Alle Wurzeln als Potenzen mit rationalem Exponenten schreiben</li>
                <li>Potenzgesetze anwenden (Exponenten addieren, subtrahieren, multiplizieren)</li>
                <li>Negative Exponenten am Ende wieder als Bruch schreiben</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{\\sqrt{x^3} \\cdot x^{-2}}{\\sqrt[4]{x}}
                    = \\frac{x^{\\frac{3}{2}} \\cdot x^{-2}}{x^{\\frac{1}{4}}}$$
                    $$= x^{\\frac{3}{2} - 2 - \\frac{1}{4}} = x^{-\\frac{3}{4}} = \\frac{1}{\\sqrt[4]{x^3}}$$
                </div>
            </details>
        `
    }
    ]
};
