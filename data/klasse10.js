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
    },
    // ── Exponential- & Logarithmusfunktionen ────────────────────────────────
    {
        id: "k10-019", niveau: "ga",
        category: "explog",
        question: "Was bedeutet der Logarithmus?",
        answer: `
            <h4>Definition</h4>
            <div class="formula-box">
                $$\\log_a c = x \\quad \\Longleftrightarrow \\quad a^x = c$$
            </div>
            <p>Der Logarithmus fragt: „Mit welchem Exponenten muss ich \\( a \\) potenzieren, um \\( c \\) zu erhalten?" Es gilt \\( a > 0 \\), \\( a \\neq 1 \\), \\( c > 0 \\).</p>
            <p>Schreibweisen: \\( \\lg \\) für Basis 10, \\( \\ln \\) für Basis \\( e \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\log_2 8 = 3, \\quad \\text{denn } 2^3 = 8$$
                    $$\\lg 1000 = 3, \\qquad \\log_5 1 = 0$$
                </div>
            </details>
        `
    },
    {
        id: "k10-020", niveau: "ga",
        category: "explog",
        question: "Wie fasse ich Logarithmen von Produkt und Quotient zusammen?",
        answer: `
            <h4>Logarithmusgesetze I</h4>
            <div class="formula-box">
                $$\\log_a (u \\cdot v) = \\log_a u + \\log_a v$$
                $$\\log_a \\frac{u}{v} = \\log_a u - \\log_a v$$
            </div>
            <p>Aus Mal wird Plus, aus Geteilt wird Minus — die Umkehrung der Potenzgesetze.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\log_2 8 + \\log_2 4 = \\log_2 32 = 5$$
                    $$\\lg 500 - \\lg 5 = \\lg 100 = 2$$
                </div>
            </details>
        `
    },
    {
        id: "k10-021", niveau: "ga",
        category: "explog",
        question: "Wie ziehe ich einen Exponenten aus dem Logarithmus heraus?",
        answer: `
            <h4>Logarithmusgesetze II</h4>
            <div class="formula-box">
                $$\\log_a \\left(u^r\\right) = r \\cdot \\log_a u$$
            </div>
            <p>Dieses Gesetz ist der Schlüssel zum Lösen von Exponentialgleichungen: die Unbekannte im Exponenten wird zum Faktor.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\lg \\left(10^{2x}\\right) = 2x$$
                    $$\\log_3 81 = \\log_3 \\left(3^4\\right) = 4$$
                </div>
            </details>
        `
    },
    {
        id: "k10-022", niveau: "ga",
        category: "explog",
        question: "Wie berechne ich einen Logarithmus zu einer Basis, die der Taschenrechner nicht kennt?",
        answer: `
            <h4>Basiswechsel</h4>
            <div class="formula-box">
                $$\\log_a c = \\frac{\\lg c}{\\lg a} = \\frac{\\ln c}{\\ln a}$$
            </div>
            <p>Beliebige Basis, gerechnet wird mit \\( \\lg \\) oder \\( \\ln \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\log_2 20 = \\frac{\\lg 20}{\\lg 2} \\approx \\frac{1{,}3010}{0{,}3010} \\approx 4{,}32$$
                    Probe: \\( 2^{4{,}32} \\approx 20 \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-023", niveau: "ga",
        category: "explog",
        question: "Wie löse ich eine Exponentialgleichung \\( a^x = c \\)?",
        answer: `
            <h4>Exponentialgleichung</h4>
            <ol>
                <li>Potenz isolieren</li>
                <li>Auf beiden Seiten logarithmieren</li>
                <li>Exponenten als Faktor nach vorn ziehen und nach \\( x \\) auflösen</li>
            </ol>
            <div class="formula-box">
                $$a^x = c \\;\\Rightarrow\\; x = \\frac{\\lg c}{\\lg a}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$3 \\cdot 2^x = 96 \\;\\Rightarrow\\; 2^x = 32$$
                    $$x \\cdot \\lg 2 = \\lg 32 \\;\\Rightarrow\\; x = 5$$
                </div>
            </details>
        `
    },
    {
        id: "k10-024", niveau: "ga",
        category: "explog",
        question: "Wie löse ich eine Exponentialgleichung durch Substitution?",
        answer: `
            <h4>Substitution</h4>
            <p>Kommt dieselbe Potenz zweimal vor, einmal quadriert, setzt man \\( u = a^x \\) und löst eine quadratische Gleichung. Danach rücksubstituieren.</p>
            <div class="formula-box">
                $$a^{2x} = \\left(a^x\\right)^2 = u^2$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2^{2x} - 6 \\cdot 2^x + 8 = 0, \\quad u = 2^x$$
                    $$u^2 - 6u + 8 = 0 \\;\\Rightarrow\\; u_1 = 4,\\; u_2 = 2$$
                    $$2^x = 4 \\Rightarrow x = 2; \\quad 2^x = 2 \\Rightarrow x = 1$$
                </div>
            </details>
        `
    },
    {
        id: "k10-025", niveau: "ga",
        category: "explog",
        question: "Wie löse ich eine Logarithmusgleichung?",
        answer: `
            <h4>Logarithmusgleichung</h4>
            <ol>
                <li>Definitionsbereich bestimmen (Argumente müssen positiv sein)</li>
                <li>Mit den Logarithmusgesetzen zu einem einzigen Logarithmus zusammenfassen</li>
                <li>Die Definition anwenden: \\( \\log_a u = k \\Rightarrow u = a^k \\)</li>
                <li>Lösungen mit dem Definitionsbereich abgleichen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\lg x + \\lg(x-3) = 1, \\quad D: x > 3$$
                    $$\\lg\\left(x(x-3)\\right) = 1 \\;\\Rightarrow\\; x^2 - 3x = 10$$
                    $$x_1 = 5,\\; x_2 = -2 \\;\\Rightarrow\\; \\mathbb{L} = \\{5\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-026", niveau: "ga",
        category: "explog",
        question: "Welche Eigenschaften hat die Exponentialfunktion \\( f(x) = c \\cdot a^x \\)?",
        answer: `
            <h4>Exponentialfunktion</h4>
            <div class="formula-box">
                $$f(x) = c \\cdot a^x, \\quad a > 0,\\; a \\neq 1$$
            </div>
            <ul>
                <li>\\( f(0) = c \\) — der \\( y \\)-Achsenabschnitt ist \\( c \\)</li>
                <li>Für \\( c > 0 \\) verläuft der Graph ganz oberhalb der \\( x \\)-Achse</li>
                <li>Keine Nullstelle, waagerechte Asymptote \\( y = 0 \\)</li>
                <li>\\( a > 1 \\): Wachstum; \\( 0 < a < 1 \\): Zerfall</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = 3 \\cdot 2^x \\):
                    $$f(0) = 3, \\quad f(1) = 6, \\quad f(-2) = 0{,}75$$
                    Pro Schritt nach rechts verdoppelt sich der Wert.
                </div>
            </details>
        `
    },
    {
        id: "k10-027", niveau: "ga",
        category: "explog",
        question: "Wie bestimme ich die Gleichung \\( f(x) = c \\cdot a^x \\) aus zwei Punkten?",
        answer: `
            <h4>Exponentialfunktion aufstellen</h4>
            <ol>
                <li>Beide Punkte einsetzen — zwei Gleichungen</li>
                <li>Gleichungen dividieren, dadurch fällt \\( c \\) weg und \\( a \\) bleibt</li>
                <li>\\( a \\) in eine Gleichung einsetzen und \\( c \\) berechnen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( P(1|12) \\), \\( Q(3|48) \\):
                    $$\\frac{c \\cdot a^3}{c \\cdot a^1} = \\frac{48}{12} \\;\\Rightarrow\\; a^2 = 4 \\;\\Rightarrow\\; a = 2$$
                    $$c \\cdot 2 = 12 \\;\\Rightarrow\\; c = 6$$
                    $$f(x) = 6 \\cdot 2^x$$
                </div>
            </details>
        `
    },
    {
        id: "k10-028", niveau: "ga",
        category: "explog",
        question: "Welche Eigenschaften hat die Logarithmusfunktion?",
        answer: `
            <h4>Logarithmusfunktion</h4>
            <div class="formula-box">
                $$f(x) = \\log_a x, \\quad D = \\{x \\in \\mathbb{R} \\mid x > 0\\}$$
            </div>
            <ul>
                <li>Umkehrfunktion von \\( a^x \\), Spiegelung an \\( y = x \\)</li>
                <li>Senkrechte Asymptote \\( x = 0 \\)</li>
                <li>Einzige Nullstelle bei \\( x = 1 \\)</li>
                <li>\\( a > 1 \\): steigt, wird immer flacher</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = \\log_2 x \\):
                    $$f(1) = 0, \\quad f(2) = 1, \\quad f(8) = 3, \\quad f(0{,}5) = -1$$
                </div>
            </details>
        `
    },
    {
        id: "k10-029", niveau: "ga",
        category: "explog",
        question: "Wie stelle ich einen Wachstums- oder Zerfallsprozess als Funktion dar?",
        answer: `
            <h4>Wachstumsfaktor</h4>
            <div class="formula-box">
                $$B(t) = B_0 \\cdot q^{\\,t}, \\qquad q = 1 + \\frac{p}{100}$$
            </div>
            <p>\\( B_0 \\) ist der Anfangsbestand, \\( q > 1 \\) bedeutet Zunahme, \\( q < 1 \\) Abnahme. Bei \\( p\\,\\% \\) Abnahme ist \\( q = 1 - \\frac{p}{100} \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    100 g Substanz, stündlich 5 % Abnahme:
                    $$B(t) = 100 \\cdot 0{,}95^{\\,t}$$
                    $$B(10) = 100 \\cdot 0{,}95^{10} \\approx 59{,}9 \\text{ g}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-030", niveau: "ga",
        category: "explog",
        question: "Wie berechne ich Verdopplungs- und Halbwertszeit?",
        answer: `
            <h4>Verdopplungs- und Halbwertszeit</h4>
            <div class="formula-box">
                $$q^{\\,t} = 2 \\;\\Rightarrow\\; t_V = \\frac{\\lg 2}{\\lg q}$$
                $$q^{\\,t} = 0{,}5 \\;\\Rightarrow\\; t_H = \\frac{\\lg 0{,}5}{\\lg q}$$
            </div>
            <p>Der Anfangsbestand \\( B_0 \\) kürzt sich heraus, die Zeit hängt nur von \\( q \\) ab.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( q = 0{,}95 \\):
                    $$t_H = \\frac{\\lg 0{,}5}{\\lg 0{,}95} \\approx 13{,}5 \\text{ Stunden}$$
                    \\( q = 1{,}08 \\): \\( t_V = \\frac{\\lg 2}{\\lg 1{,}08} \\approx 9{,}0 \\) Jahre.
                </div>
            </details>
        `
    },
    {
        id: "k10-031", niveau: "ga",
        category: "explog",
        question: "Wie berechne ich, wann ein Bestand einen bestimmten Wert erreicht?",
        answer: `
            <h4>Zeitpunkt bestimmen</h4>
            <ol>
                <li>Ansatz \\( B_0 \\cdot q^{\\,t} = B \\)</li>
                <li>Durch \\( B_0 \\) teilen</li>
                <li>Logarithmieren und nach \\( t \\) auflösen</li>
            </ol>
            <div class="formula-box">
                $$t = \\frac{\\lg\\left(\\frac{B}{B_0}\\right)}{\\lg q}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    100 g, 5 % Abnahme pro Stunde, gesucht: wann 20 g?
                    $$t = \\frac{\\lg 0{,}2}{\\lg 0{,}95} \\approx 31{,}4$$
                    also nach rund 31 Stunden.
                </div>
            </details>
        `
    },
    {
        id: "k10-032", niveau: "ga",
        category: "explog",
        question: "Woran unterscheide ich lineares von exponentiellem Wachstum?",
        answer: `
            <h4>Linear oder exponentiell?</h4>
            <div class="formula-box">
                $$\\text{linear}: B(t) = B_0 + m \\cdot t \\quad (\\text{gleiche Differenz})$$
                $$\\text{exponentiell}: B(t) = B_0 \\cdot q^{\\,t} \\quad (\\text{gleicher Quotient})$$
            </div>
            <p>Test an einer Wertetabelle mit gleichen Zeitschritten: konstante Differenz heißt linear, konstanter Quotient heißt exponentiell.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    A: 100, 120, 140, 160 — Differenz stets 20, also linear.<br>
                    B: 100, 120, 144, 172,8 — Quotient stets 1,2, also exponentiell:
                    $$B(t) = 100 \\cdot 1{,}2^{\\,t}$$
                </div>
            </details>
        `
    },
    // ── Trigonometrische Funktionen ─────────────────────────────────────────
    {
        id: "k10-033", niveau: "ga",
        category: "trigo",
        question: "Wie sind Sinus und Kosinus am Einheitskreis definiert?",
        answer: `
            <h4>Einheitskreis</h4>
            <div class="formula-box">
                $$P(\\cos \\alpha \\mid \\sin \\alpha)$$
            </div>
            <p>Der Punkt \\( P \\) liegt auf dem Kreis mit Radius 1, der Winkel \\( \\alpha \\) wird von der positiven \\( x \\)-Achse aus gegen den Uhrzeigersinn gemessen. Der Kosinus ist die \\( x \\)-Koordinate, der Sinus die \\( y \\)-Koordinate.</p>
            <p>So sind Sinus und Kosinus für <em>alle</em> Winkel erklärt, nicht nur für spitze Winkel im rechtwinkligen Dreieck.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\alpha = 90^\\circ: \\; P(0 \\mid 1) \\Rightarrow \\cos 90^\\circ = 0,\\; \\sin 90^\\circ = 1$$
                    $$\\alpha = 180^\\circ: \\; P(-1 \\mid 0)$$
                </div>
            </details>
        `
    },
    {
        id: "k10-034", niveau: "ga",
        category: "trigo",
        question: "Wie rechne ich zwischen Gradmaß und Bogenmaß um?",
        answer: `
            <h4>Bogenmaß</h4>
            <div class="formula-box">
                $$\\frac{x}{\\pi} = \\frac{\\alpha}{180^\\circ}$$
                $$x = \\frac{\\alpha \\cdot \\pi}{180^\\circ}, \\qquad \\alpha = \\frac{x \\cdot 180^\\circ}{\\pi}$$
            </div>
            <p>Das Bogenmaß ist die Länge des Kreisbogens am Einheitskreis; der volle Kreis misst \\( 2\\pi \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$90^\\circ = \\frac{\\pi}{2}, \\quad 60^\\circ = \\frac{\\pi}{3}, \\quad 45^\\circ = \\frac{\\pi}{4}$$
                    $$180^\\circ = \\pi, \\qquad \\frac{3\\pi}{2} = 270^\\circ$$
                </div>
            </details>
        `
    },
    {
        id: "k10-035", niveau: "ga",
        category: "trigo",
        question: "Welche Sinus- und Kosinuswerte muss ich auswendig können?",
        answer: `
            <h4>Charakteristische Werte</h4>
            <div class="formula-box">
                $$\\sin 0^\\circ = 0, \\; \\sin 30^\\circ = \\tfrac{1}{2}, \\; \\sin 45^\\circ = \\tfrac{\\sqrt{2}}{2}$$
                $$\\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2}, \\; \\sin 90^\\circ = 1$$
            </div>
            <p>Für den Kosinus dieselbe Reihe rückwärts: \\( \\cos 0^\\circ = 1 \\), \\( \\cos 30^\\circ = \\frac{\\sqrt{3}}{2} \\), …, \\( \\cos 90^\\circ = 0 \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2} \\approx 0{,}7071$$
                    $$\\tan 45^\\circ = \\frac{\\sin 45^\\circ}{\\cos 45^\\circ} = 1$$
                </div>
            </details>
        `
    },
    {
        id: "k10-036", niveau: "ga",
        category: "trigo",
        question: "Welches Vorzeichen haben Sinus und Kosinus in den vier Quadranten?",
        answer: `
            <h4>Quadranten</h4>
            <div class="formula-box">
                $$\\text{I}: +\\,/\\,+ \\qquad \\text{II}: +\\,/\\,- \\qquad \\text{III}: -\\,/\\,- \\qquad \\text{IV}: -\\,/\\,+$$
            </div>
            <p>Erst der Sinus (\\( y \\)-Koordinate), dann der Kosinus (\\( x \\)-Koordinate). Beziehungen:</p>
            <div class="formula-box">
                $$\\sin(180^\\circ - \\alpha) = \\sin \\alpha, \\qquad \\cos(360^\\circ - \\alpha) = \\cos \\alpha$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sin 150^\\circ = \\sin 30^\\circ = 0{,}5$$
                    $$\\cos 150^\\circ = -\\cos 30^\\circ \\approx -0{,}8660$$
                    $$\\sin 310^\\circ \\approx -0{,}7660 \\quad (\\text{IV. Quadrant})$$
                </div>
            </details>
        `
    },
    {
        id: "k10-037", niveau: "ga",
        category: "trigo",
        question: "Welche Beziehungen verbinden Sinus, Kosinus und Tangens?",
        answer: `
            <h4>Grundbeziehungen</h4>
            <div class="formula-box">
                $$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$$
                $$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}, \\quad \\cos \\alpha \\neq 0$$
            </div>
            <p>Die erste Beziehung ist der Satz des Pythagoras am Einheitskreis.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gegeben \\( \\sin \\alpha = 0{,}6 \\) im I. Quadranten:
                    $$\\cos \\alpha = \\sqrt{1 - 0{,}36} = 0{,}8$$
                    $$\\tan \\alpha = \\frac{0{,}6}{0{,}8} = 0{,}75$$
                </div>
            </details>
        `
    },
    {
        id: "k10-038", niveau: "ga",
        category: "trigo",
        question: "Welche Eigenschaften hat die Sinusfunktion?",
        answer: `
            <h4>Sinusfunktion \\( f(x) = \\sin x \\)</h4>
            <ul>
                <li>Periode \\( 2\\pi \\) bzw. \\( 360^\\circ \\)</li>
                <li>Wertebereich \\( -1 \\le y \\le 1 \\), Amplitude 1</li>
                <li>Nullstellen bei \\( x = k \\cdot \\pi \\)</li>
                <li>Maximum bei \\( \\frac{\\pi}{2} \\), Minimum bei \\( \\frac{3\\pi}{2} \\)</li>
                <li>Punktsymmetrisch zum Ursprung: \\( \\sin(-x) = -\\sin x \\)</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sin 0 = 0, \\; \\sin \\tfrac{\\pi}{2} = 1, \\; \\sin \\pi = 0$$
                    $$\\sin \\tfrac{3\\pi}{2} = -1, \\; \\sin 2\\pi = 0$$
                </div>
            </details>
        `
    },
    {
        id: "k10-039", niveau: "ga",
        category: "trigo",
        question: "Wie hängen Sinus- und Kosinusfunktion zusammen?",
        answer: `
            <h4>Kosinusfunktion</h4>
            <div class="formula-box">
                $$\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)$$
            </div>
            <p>Der Kosinusgraph ist der um \\( \\frac{\\pi}{2} \\) nach links verschobene Sinusgraph. Gleiche Periode \\( 2\\pi \\), gleiche Amplitude, aber achsensymmetrisch zur \\( y \\)-Achse: \\( \\cos(-x) = \\cos x \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\cos 0 = 1, \\; \\cos \\tfrac{\\pi}{2} = 0, \\; \\cos \\pi = -1$$
                    Nullstellen des Kosinus: \\( x = \\frac{\\pi}{2} + k \\cdot \\pi \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-040", niveau: "ga",
        category: "trigo",
        question: "Welche Eigenschaften hat die Tangensfunktion?",
        answer: `
            <h4>Tangensfunktion \\( f(x) = \\tan x \\)</h4>
            <ul>
                <li>Periode \\( \\pi \\) (nicht \\( 2\\pi \\))</li>
                <li>Definitionslücken bei \\( x = \\frac{\\pi}{2} + k \\cdot \\pi \\)</li>
                <li>Dort senkrechte Asymptoten</li>
                <li>Wertebereich: alle reellen Zahlen</li>
                <li>Nullstellen bei \\( x = k \\cdot \\pi \\), punktsymmetrisch zum Ursprung</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\tan 0 = 0, \\quad \\tan \\tfrac{\\pi}{4} = 1$$
                    Für \\( x \\to \\frac{\\pi}{2} \\) von links wächst \\( \\tan x \\) über alle Grenzen.
                </div>
            </details>
        `
    },
    {
        id: "k10-041", niveau: "ga",
        category: "trigo",
        question: "Wie wirken Amplitude und Periode in \\( y = a \\cdot \\sin(b \\cdot x) \\)?",
        answer: `
            <h4>Parameter \\( a \\) und \\( b \\)</h4>
            <div class="formula-box">
                $$\\text{Amplitude} = |a|, \\qquad \\text{Periode} = \\frac{2\\pi}{|b|}$$
            </div>
            <ul>
                <li>\\( |a| > 1 \\) streckt in \\( y \\)-Richtung, \\( a < 0 \\) spiegelt an der \\( x \\)-Achse</li>
                <li>\\( |b| > 1 \\) staucht in \\( x \\)-Richtung, die Schwingung wird schneller</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = 3 \\sin(2x) \\):
                    $$\\text{Amplitude } 3, \\quad \\text{Periode } \\frac{2\\pi}{2} = \\pi$$
                    Wertebereich \\( -3 \\le y \\le 3 \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-042", niveau: "ga",
        category: "trigo",
        question: "Wie wirken Verschiebungen in \\( y = a \\cdot \\sin(b(x+d)) + e \\)?",
        answer: `
            <h4>Alle vier Parameter</h4>
            <ul>
                <li>\\( a \\): Amplitude</li>
                <li>\\( b \\): Periode \\( \\frac{2\\pi}{|b|} \\)</li>
                <li>\\( d \\): Verschiebung um \\( d \\) nach links (Phasenverschiebung)</li>
                <li>\\( e \\): Verschiebung um \\( e \\) nach oben, die Mittellinie ist \\( y = e \\)</li>
            </ul>
            <p>Wichtig: \\( b \\) muss ausgeklammert sein, sonst liest man \\( d \\) falsch ab.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = 2\\sin\\left(3\\left(x - \\tfrac{\\pi}{6}\\right)\\right) + 1 \\):
                    $$\\text{Amplitude } 2, \\; \\text{Periode } \\tfrac{2\\pi}{3}$$
                    um \\( \\frac{\\pi}{6} \\) nach rechts, Mittellinie \\( y = 1 \\), Wertebereich \\( -1 \\le y \\le 3 \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-043", niveau: "ga",
        category: "trigo",
        question: "Wie stelle ich aus einem Graphen die Sinusgleichung auf?",
        answer: `
            <h4>Ablesen und aufstellen</h4>
            <ol>
                <li>Mittellinie ablesen: \\( e = \\frac{y_{\\max} + y_{\\min}}{2} \\)</li>
                <li>Amplitude: \\( a = \\frac{y_{\\max} - y_{\\min}}{2} \\)</li>
                <li>Periode \\( p \\) ablesen, daraus \\( b = \\frac{2\\pi}{p} \\)</li>
                <li>Verschiebung \\( d \\) am ersten aufsteigenden Nulldurchgang der Mittellinie ablesen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y_{\\max} = 7 \\), \\( y_{\\min} = 1 \\), Periode \\( 4 \\):
                    $$e = 4, \\quad a = 3, \\quad b = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$$
                    $$y = 3\\sin\\left(\\tfrac{\\pi}{2}x\\right) + 4$$
                </div>
            </details>
        `
    },
    {
        id: "k10-044", niveau: "ga",
        category: "trigo",
        question: "Wie finde ich alle Lösungen von \\( \\sin x = c \\)?",
        answer: `
            <h4>Trigonometrische Gleichung</h4>
            <div class="formula-box">
                $$x_1 = \\arcsin c, \\qquad x_2 = \\pi - x_1$$
                $$\\text{alle Lösungen}: x_{1,2} + k \\cdot 2\\pi$$
            </div>
            <p>Der Taschenrechner gibt nur eine Lösung; die zweite liegt symmetrisch dazu. Beim Kosinus lautet die zweite Lösung \\( -x_1 \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( \\sin \\alpha = 0{,}5 \\) im Bereich \\( 0^\\circ \\le \\alpha < 360^\\circ \\):
                    $$\\alpha_1 = 30^\\circ, \\quad \\alpha_2 = 180^\\circ - 30^\\circ = 150^\\circ$$
                    Im Bereich \\( -360^\\circ \\le \\alpha \\le 360^\\circ \\) zusätzlich \\( -210^\\circ \\) und \\( -330^\\circ \\).
                </div>
            </details>
        `
    },
    // ── Lineare Gleichungssysteme ───────────────────────────────────────────
    {
        id: "k10-045", niveau: "ga",
        category: "lgs",
        question: "Was ist ein lineares Gleichungssystem und was ist seine Lösung?",
        answer: `
            <h4>Begriff</h4>
            <div class="formula-box">
                $$\\begin{aligned} a_1 x + b_1 y &= c_1 \\\\ a_2 x + b_2 y &= c_2 \\end{aligned}$$
            </div>
            <p>Gesucht sind Werte, die <strong>beide</strong> Gleichungen zugleich erfüllen. Die Lösung ist ein geordnetes Zahlenpaar \\( (x \\mid y) \\), bei drei Variablen ein Zahlentripel.</p>
            <p>Geometrisch: der Schnittpunkt zweier Geraden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{aligned} x + y &= 5 \\\\ x - y &= 1 \\end{aligned}$$
                    Probe mit \\( (3 \\mid 2) \\): \\( 3+2 = 5 \\) ✓ und \\( 3-2 = 1 \\) ✓
                    $$\\mathbb{L} = \\{(3 \\mid 2)\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-046", niveau: "ga",
        category: "lgs",
        question: "Wie löse ich ein Gleichungssystem grafisch?",
        answer: `
            <h4>Grafisches Lösen</h4>
            <ol>
                <li>Beide Gleichungen nach \\( y \\) umstellen</li>
                <li>Beide Geraden in ein Koordinatensystem zeichnen</li>
                <li>Schnittpunkt ablesen</li>
                <li>Probe durch Einsetzen — abgelesene Werte sind nur so genau wie die Zeichnung</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2x + y = 8 \\;\\Rightarrow\\; y = -2x + 8$$
                    $$x - y = 1 \\;\\Rightarrow\\; y = x - 1$$
                    Schnittpunkt \\( (3 \\mid 2) \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-047", niveau: "ga",
        category: "lgs",
        question: "Wie funktionieren Einsetzungs- und Gleichsetzungsverfahren?",
        answer: `
            <h4>Einsetzen und Gleichsetzen</h4>
            <p><strong>Einsetzungsverfahren:</strong> eine Gleichung nach einer Variablen umstellen und diesen Term in die andere Gleichung einsetzen.</p>
            <p><strong>Gleichsetzungsverfahren:</strong> beide Gleichungen nach derselben Variablen umstellen und die Terme gleichsetzen.</p>
            <p>Gut geeignet, wenn eine Variable schon allein steht oder den Koeffizienten 1 hat.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{aligned} y &= 2x - 1 \\\\ 3x + y &= 9 \\end{aligned}$$
                    $$3x + (2x-1) = 9 \\;\\Rightarrow\\; 5x = 10 \\;\\Rightarrow\\; x = 2$$
                    $$y = 2 \\cdot 2 - 1 = 3 \\;\\Rightarrow\\; \\mathbb{L} = \\{(2 \\mid 3)\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-048", niveau: "ga",
        category: "lgs",
        question: "Wie funktioniert das Additionsverfahren?",
        answer: `
            <h4>Additionsverfahren</h4>
            <ol>
                <li>Eine oder beide Gleichungen so multiplizieren, dass die Koeffizienten einer Variablen entgegengesetzt gleich sind</li>
                <li>Gleichungen addieren — diese Variable fällt weg</li>
                <li>Die verbleibende Gleichung lösen und rückwärts einsetzen</li>
            </ol>
            <p>Erste Wahl, wenn keine Variable bequem isoliert ist.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{aligned} 3x + 2y &= 16 \\quad | \\cdot 3 \\\\ 2x - 3y &= 2 \\quad | \\cdot 2 \\end{aligned}$$
                    $$9x + 6y = 48, \\quad 4x - 6y = 4$$
                    $$13x = 52 \\;\\Rightarrow\\; x = 4, \\quad y = 2$$
                </div>
            </details>
        `
    },
    {
        id: "k10-049", niveau: "ga",
        category: "lgs",
        question: "Welches Lösungsverfahren wähle ich wann?",
        answer: `
            <h4>Verfahren auswählen</h4>
            <ul>
                <li><strong>Einsetzen</strong>: eine Variable steht bereits allein oder hat den Koeffizienten 1</li>
                <li><strong>Gleichsetzen</strong>: beide Gleichungen sind schon nach \\( y \\) aufgelöst</li>
                <li><strong>Addition</strong>: alle Variablen stehen mit Koeffizienten da, besonders bei drei Variablen</li>
                <li><strong>Grafisch</strong>: nur zum Veranschaulichen oder zur Kontrolle</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = 3x+1 \\) und \\( y = -x+9 \\): gleichsetzen.
                    $$3x+1 = -x+9 \\;\\Rightarrow\\; x = 2,\\; y = 7$$
                </div>
            </details>
        `
    },
    {
        id: "k10-050", niveau: "ga",
        category: "lgs",
        question: "Woran erkenne ich, wie viele Lösungen ein Gleichungssystem hat?",
        answer: `
            <h4>Lösbarkeitsfälle</h4>
            <ul>
                <li><strong>Genau eine Lösung</strong>: man erhält \\( x = \\) Zahl — die Geraden schneiden sich</li>
                <li><strong>Keine Lösung</strong>: eine falsche Aussage wie \\( 0 = 5 \\) — die Geraden sind parallel</li>
                <li><strong>Unendlich viele Lösungen</strong>: eine wahre Aussage wie \\( 0 = 0 \\) — die Geraden sind identisch</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{aligned} 2x + y &= 4 \\\\ 4x + 2y &= 7 \\end{aligned}$$
                    Erste Gleichung mal \\( -2 \\) und addieren:
                    $$0 = -1 \\;\\Rightarrow\\; \\mathbb{L} = \\{\\}$$
                    Mit \\( 4x+2y = 8 \\) stattdessen: \\( 0 = 0 \\), unendlich viele Lösungen.
                </div>
            </details>
        `
    },
    {
        id: "k10-051", niveau: "ga",
        category: "lgs",
        question: "Wie löse ich ein Gleichungssystem mit drei Variablen?",
        answer: `
            <h4>Stufenform</h4>
            <ol>
                <li>Mit der ersten Gleichung \\( x \\) aus der zweiten und dritten Gleichung entfernen</li>
                <li>Mit der neuen zweiten Gleichung \\( y \\) aus der dritten entfernen</li>
                <li>Unten steht nur noch eine Variable — lösen</li>
                <li>Rückwärts einsetzen und Probe machen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{aligned} x + y + z &= 6 \\\\ 2x - y + z &= 3 \\\\ x + 2y - z &= 2 \\end{aligned}$$
                    (II) \\( - \\) 2·(I): \\( -3y - z = -9 \\)<br>
                    (III) \\( - \\) (I): \\( y - 2z = -4 \\)<br>
                    Daraus \\( z = 3 \\), \\( y = 2 \\), \\( x = 1 \\).
                    $$\\mathbb{L} = \\{(1 \\mid 2 \\mid 3)\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-052", niveau: "ga",
        category: "lgs",
        question: "Wie übersetze ich eine Sachaufgabe in ein Gleichungssystem?",
        answer: `
            <h4>Modellieren</h4>
            <ol>
                <li>Variablen festlegen und in Worten benennen</li>
                <li>Für jede Bedingung im Text eine Gleichung aufstellen</li>
                <li>System lösen</li>
                <li>Ergebnis im Sachzusammenhang prüfen und einen Antwortsatz schreiben</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    3 Hefte und 2 Stifte kosten 11 €, 1 Heft und 4 Stifte kosten 12 €.
                    $$\\begin{aligned} 3h + 2s &= 11 \\\\ h + 4s &= 12 \\end{aligned}$$
                    $$h = 2, \\quad s = 2{,}50$$
                    Ein Heft kostet 2 €, ein Stift 2,50 €.
                </div>
            </details>
        `
    },
    // ── Vektoren ────────────────────────────────────────────────────────────
    {
        id: "k10-053", niveau: "ga",
        category: "vektoren",
        question: "Wie lese ich Punktkoordinaten im räumlichen Koordinatensystem ab?",
        answer: `
            <h4>Raumkoordinaten</h4>
            <div class="formula-box">
                $$P(x_1 \\mid x_2 \\mid x_3)$$
            </div>
            <p>Die drei Achsen stehen paarweise senkrecht aufeinander. Man geht \\( x_1 \\) nach vorn, \\( x_2 \\) nach rechts und \\( x_3 \\) nach oben.</p>
            <p>Liegt ein Punkt in der \\( x_1x_2 \\)-Ebene, ist \\( x_3 = 0 \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Quader mit \\( A(0\\mid0\\mid0) \\), Kantenlängen 4, 3, 2:
                    $$B(4\\mid0\\mid0), \\; C(4\\mid3\\mid0), \\; G(4\\mid3\\mid2)$$
                </div>
            </details>
        `
    },
    {
        id: "k10-054", niveau: "ga",
        category: "vektoren",
        question: "Was ist ein Vektor und was ist ein Ortsvektor?",
        answer: `
            <h4>Vektorbegriff</h4>
            <p>Ein Vektor beschreibt eine Verschiebung: er hat Richtung und Länge, aber keinen festen Platz. Alle gleich langen, gleich gerichteten Pfeile stellen denselben Vektor dar (Pfeilklasse).</p>
            <div class="formula-box">
                $$\\vec{OP} = \\vec{p} = \\begin{pmatrix} p_1 \\\\ p_2 \\\\ p_3 \\end{pmatrix}$$
            </div>
            <p>Der <strong>Ortsvektor</strong> führt vom Ursprung zum Punkt; seine Koordinaten sind die Punktkoordinaten. Der <strong>Gegenvektor</strong> \\( -\\vec{a} \\) ist gleich lang und entgegengesetzt gerichtet.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( P(1\\mid4\\mid3) \\):
                    $$\\vec{p} = \\begin{pmatrix} 1 \\\\ 4 \\\\ 3 \\end{pmatrix}, \\qquad -\\vec{p} = \\begin{pmatrix} -1 \\\\ -4 \\\\ -3 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-055", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich den Verbindungsvektor zweier Punkte?",
        answer: `
            <h4>Verbindungsvektor</h4>
            <div class="formula-box">
                $$\\vec{AB} = \\vec{b} - \\vec{a}$$
            </div>
            <p><strong>Merksatz:</strong> „Spitze minus Fuß". Jede Koordinate einzeln: Endpunkt minus Startpunkt.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( A(2\\mid-5\\mid-4) \\), \\( B(5\\mid3\\mid-6) \\):
                    $$\\vec{AB} = \\begin{pmatrix} 3 \\\\ 8 \\\\ -2 \\end{pmatrix}, \\quad \\vec{BA} = \\begin{pmatrix} -3 \\\\ -8 \\\\ 2 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-056", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich den Betrag eines Vektors?",
        answer: `
            <h4>Betrag (Länge)</h4>
            <div class="formula-box">
                $$\\left|\\vec{a}\\right| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$$
            </div>
            <p>Der Betrag von \\( \\vec{AB} \\) ist zugleich der Abstand der Punkte \\( A \\) und \\( B \\). Der <strong>Einheitsvektor</strong> hat die Länge 1:</p>
            <div class="formula-box">
                $$\\vec{a}_0 = \\frac{1}{\\left|\\vec{a}\\right|} \\cdot \\vec{a}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 6 \\end{pmatrix}, \\quad \\left|\\vec{a}\\right| = \\sqrt{4+9+36} = 7$$
                    $$\\vec{a}_0 = \\frac{1}{7}\\begin{pmatrix} 2 \\\\ 3 \\\\ 6 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-057", niveau: "ga",
        category: "vektoren",
        question: "Wie addiere ich Vektoren und wie multipliziere ich mit einer Zahl?",
        answer: `
            <h4>Rechenoperationen</h4>
            <div class="formula-box">
                $$\\vec{a} + \\vec{b} = \\begin{pmatrix} a_1+b_1 \\\\ a_2+b_2 \\\\ a_3+b_3 \\end{pmatrix}, \\qquad
                r \\cdot \\vec{a} = \\begin{pmatrix} r a_1 \\\\ r a_2 \\\\ r a_3 \\end{pmatrix}$$
            </div>
            <p>Addition heißt: Pfeile aneinanderhängen. Die Multiplikation mit \\( r \\) streckt den Vektor um den Faktor \\( |r| \\); bei \\( r < 0 \\) kehrt sich die Richtung um.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{pmatrix} 1 \\\\ -2 \\\\ 6 \\end{pmatrix} + \\begin{pmatrix} -1 \\\\ 8 \\\\ 9 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 6 \\\\ 15 \\end{pmatrix}$$
                    $$3 \\cdot \\begin{pmatrix} 2 \\\\ 0 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 0 \\\\ -3 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-058", niveau: "ga",
        category: "vektoren",
        question: "Wie finde ich den Endpunkt nach einer Verschiebung?",
        answer: `
            <h4>Punkt verschieben</h4>
            <div class="formula-box">
                $$\\vec{q} = \\vec{p} + \\vec{PQ}$$
            </div>
            <p>Ortsvektor des Startpunkts plus Verschiebungsvektor ergibt den Ortsvektor des Zielpunkts. Umgekehrt: \\( \\vec{p} = \\vec{q} - \\vec{PQ} \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( P(-5\\mid2\\mid0) \\), \\( \\vec{PQ} = \\begin{pmatrix} 3 \\\\ -3 \\\\ 7 \\end{pmatrix} \\):
                    $$\\vec{q} = \\begin{pmatrix} -2 \\\\ -1 \\\\ 7 \\end{pmatrix} \\;\\Rightarrow\\; Q(-2\\mid-1\\mid7)$$
                </div>
            </details>
        `
    },
    {
        id: "k10-059", niveau: "ga",
        category: "vektoren",
        question: "Wie prüfe ich zwei Vektoren auf Kollinearität?",
        answer: `
            <h4>Kollinearität</h4>
            <div class="formula-box">
                $$\\vec{b} = r \\cdot \\vec{a} \\;\\Rightarrow\\; \\vec{a} \\text{ und } \\vec{b} \\text{ sind kollinear}$$
            </div>
            <p>Man prüft koordinatenweise, ob überall derselbe Faktor \\( r \\) herauskommt. Kollineare Vektoren sind linear abhängig und zeigen in dieselbe oder die entgegengesetzte Richtung.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{a} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 4 \\end{pmatrix}, \\; \\vec{b} = \\begin{pmatrix} -4 \\\\ 2 \\\\ -8 \\end{pmatrix}$$
                    Überall \\( r = -2 \\), also kollinear.<br>
                    Bei \\( \\vec{c} = \\begin{pmatrix} 4 \\\\ -2 \\\\ 9 \\end{pmatrix} \\) wäre \\( r = 2;\\,2;\\,2{,}25 \\) — nicht kollinear.
                </div>
            </details>
        `
    },
    {
        id: "k10-060", niveau: "ga",
        category: "vektoren",
        question: "Was bedeutet lineare Abhängigkeit bei drei Vektoren?",
        answer: `
            <h4>Komplanarität</h4>
            <p>Drei Vektoren heißen <strong>komplanar</strong>, wenn sie in einer gemeinsamen Ebene liegen. Das ist genau dann der Fall, wenn sich einer als Linearkombination der beiden anderen schreiben lässt:</p>
            <div class="formula-box">
                $$\\vec{c} = r \\cdot \\vec{a} + s \\cdot \\vec{b}$$
            </div>
            <p>Man setzt an, vergleicht koordinatenweise und löst das Gleichungssystem. Gibt es eine Lösung, sind die Vektoren linear abhängig, sonst linear unabhängig.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{a} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\; \\vec{b} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\; \\vec{c} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$$
                    \\( \\vec{c} = \\vec{a} + \\vec{b} \\), also komplanar.
                </div>
            </details>
        `
    },
    {
        id: "k10-061", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich das Skalarprodukt und was bedeutet es?",
        answer: `
            <h4>Skalarprodukt</h4>
            <div class="formula-box">
                $$\\vec{a} \\circ \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$
                $$\\vec{a} \\circ \\vec{b} = \\left|\\vec{a}\\right| \\cdot \\left|\\vec{b}\\right| \\cdot \\cos \\varphi$$
            </div>
            <p>Das Ergebnis ist eine <strong>Zahl</strong>, kein Vektor. Das Vorzeichen verrät den Winkel: positiv heißt spitzer Winkel, negativ stumpfer Winkel, null rechter Winkel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} \\circ \\begin{pmatrix} 4 \\\\ -1 \\\\ 2 \\end{pmatrix} = 4 - 2 + 6 = 8$$
                    Positiv, also schließen die Vektoren einen spitzen Winkel ein.
                </div>
            </details>
        `
    },
    {
        id: "k10-062", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich den Winkel zwischen zwei Vektoren?",
        answer: `
            <h4>Winkel</h4>
            <div class="formula-box">
                $$\\cos \\varphi = \\frac{\\vec{a} \\circ \\vec{b}}{\\left|\\vec{a}\\right| \\cdot \\left|\\vec{b}\\right|}$$
            </div>
            <p>Erst das Skalarprodukt, dann beide Beträge, dann \\( \\varphi = \\arccos(\\dots) \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{a} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\; \\vec{b} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$$
                    $$\\cos \\varphi = \\frac{1}{\\sqrt{2} \\cdot 1} \\;\\Rightarrow\\; \\varphi = 45^\\circ$$
                </div>
            </details>
        `
    },
    {
        id: "k10-063", niveau: "ga",
        category: "vektoren",
        question: "Wie prüfe ich, ob zwei Vektoren senkrecht zueinander stehen?",
        answer: `
            <h4>Orthogonalität</h4>
            <div class="formula-box">
                $$\\vec{a} \\perp \\vec{b} \\quad \\Longleftrightarrow \\quad \\vec{a} \\circ \\vec{b} = 0$$
            </div>
            <p>Grund: \\( \\cos 90^\\circ = 0 \\). Der Nullvektor wird dabei ausgeschlossen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{pmatrix} 2 \\\\ -3 \\\\ 1 \\end{pmatrix} \\circ \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix} = 2 - 3 + 1 = 0$$
                    Die Vektoren stehen senkrecht aufeinander.
                </div>
            </details>
        `
    },
    {
        id: "k10-064", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich einen Normalenvektor mit dem Vektorprodukt?",
        answer: `
            <h4>Vektorprodukt</h4>
            <div class="formula-box">
                $$\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_2 b_3 - a_3 b_2 \\\\ a_3 b_1 - a_1 b_3 \\\\ a_1 b_2 - a_2 b_1 \\end{pmatrix}$$
            </div>
            <p>Das Ergebnis ist ein <strong>Vektor</strong>, der auf \\( \\vec{a} \\) und \\( \\vec{b} \\) senkrecht steht — ein Normalenvektor. Kontrolle: beide Skalarprodukte müssen null ergeben.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} \\times \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}$$
                    Probe: \\( 1 - 1 + 0 = 0 \\) und \\( 0 - 1 + 1 = 0 \\) ✓
                </div>
            </details>
        `
    },
    {
        id: "k10-065", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich den Mittelpunkt einer Strecke mit Vektoren?",
        answer: `
            <h4>Mittelpunkt</h4>
            <div class="formula-box">
                $$\\vec{m} = \\frac{1}{2}\\left(\\vec{a} + \\vec{b}\\right)$$
            </div>
            <p>Das ist der Ortsvektor des Mittelpunkts der Strecke \\( AB \\) — koordinatenweise der Durchschnitt.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( A(1\\mid3\\mid5) \\), \\( B(7\\mid-1\\mid1) \\):
                    $$\\vec{m} = \\frac{1}{2}\\begin{pmatrix} 8 \\\\ 2 \\\\ 6 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 1 \\\\ 3 \\end{pmatrix}$$
                    also \\( M(4\\mid1\\mid3) \\).
                </div>
            </details>
        `
    },
    {
        id: "k10-066", niveau: "ga",
        category: "vektoren",
        question: "Wie weise ich nach, dass vier Punkte ein Parallelogramm bilden?",
        answer: `
            <h4>Parallelogramm</h4>
            <div class="formula-box">
                $$\\vec{AB} = \\vec{DC}$$
            </div>
            <p>Zwei gegenüberliegende Seiten müssen durch denselben Vektor beschrieben werden — dann sind sie parallel und gleich lang. Für ein Rechteck zusätzlich \\( \\vec{AB} \\circ \\vec{AD} = 0 \\), für eine Raute zusätzlich \\( |\\vec{AB}| = |\\vec{AD}| \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( A(0\\mid0\\mid0) \\), \\( B(4\\mid0\\mid0) \\), \\( C(5\\mid3\\mid0) \\), \\( D(1\\mid3\\mid0) \\):
                    $$\\vec{AB} = \\begin{pmatrix} 4 \\\\ 0 \\\\ 0 \\end{pmatrix} = \\vec{DC}$$
                    also ein Parallelogramm.
                </div>
            </details>
        `
    },
    // ── Zufallsgrößen ───────────────────────────────────────────────────────
    {
        id: "k10-067", niveau: "ga",
        category: "zufall",
        question: "Was sind Ergebnis, Ereignis und Ergebnismenge?",
        answer: `
            <h4>Grundbegriffe</h4>
            <ul>
                <li><strong>Ergebnis</strong>: ein einzelner möglicher Ausgang</li>
                <li><strong>Ergebnismenge \\( S \\)</strong>: alle möglichen Ergebnisse</li>
                <li><strong>Ereignis</strong>: eine Teilmenge von \\( S \\)</li>
            </ul>
            <div class="formula-box">
                $$P(E) = \\frac{\\text{Anzahl günstiger Ergebnisse}}{\\text{Anzahl möglicher Ergebnisse}}$$
            </div>
            <p>Die Formel von Laplace gilt nur, wenn alle Ergebnisse gleich wahrscheinlich sind.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel, \\( E \\): „gerade Augenzahl" \\( = \\{2; 4; 6\\} \\)
                    $$P(E) = \\frac{3}{6} = \\frac{1}{2}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-068", niveau: "ga",
        category: "zufall",
        question: "Wie rechne ich mit einem Baumdiagramm?",
        answer: `
            <h4>Pfadregeln</h4>
            <div class="formula-box">
                $$\\text{Produktregel: } P(\\text{Pfad}) = p_1 \\cdot p_2 \\cdot \\dots$$
                $$\\text{Summenregel: } P(E) = \\sum P(\\text{günstige Pfade})$$
            </div>
            <p>Entlang eines Pfades wird multipliziert, mehrere Pfade desselben Ereignisses werden addiert. Die Wahrscheinlichkeiten an jeder Verzweigung ergeben zusammen 1.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zweimal eine Münze werfen, \\( E \\): „genau einmal Kopf"
                    $$P(E) = \\tfrac{1}{2} \\cdot \\tfrac{1}{2} + \\tfrac{1}{2} \\cdot \\tfrac{1}{2} = \\tfrac{1}{2}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-069", niveau: "ga",
        category: "zufall",
        question: "Was ist eine Zufallsgröße?",
        answer: `
            <h4>Zufallsgröße</h4>
            <p>Eine Zufallsgröße \\( X \\) ordnet jedem Ergebnis eines Zufallsexperiments eine <strong>Zahl</strong> zu. Sie übersetzt Ergebnisse in Zahlen, mit denen man rechnen kann.</p>
            <p>Bei endlich vielen möglichen Werten heißt \\( X \\) diskret.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zweimal würfeln, \\( X \\) = Augensumme:
                    $$X \\in \\{2; 3; \\dots; 12\\}$$
                    Glücksrad mit Gewinn, \\( X \\) = Auszahlung in Euro.
                </div>
            </details>
        `
    },
    {
        id: "k10-070", niveau: "ga",
        category: "zufall",
        question: "Was bedeuten die Schreibweisen \\( P(X = k) \\) und \\( P(X \\le k) \\)?",
        answer: `
            <h4>Schreibweisen</h4>
            <ul>
                <li>\\( P(X = k) \\): genau der Wert \\( k \\)</li>
                <li>\\( P(X \\le k) \\): höchstens \\( k \\), also \\( k \\) und alles darunter</li>
                <li>\\( P(X \\ge k) \\): mindestens \\( k \\)</li>
                <li>\\( P(k_1 \\le X \\le k_2) \\): alle Werte dazwischen, Grenzen eingeschlossen</li>
            </ul>
            <div class="formula-box">
                $$P(X > k) = 1 - P(X \\le k)$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel, \\( X \\) = Augenzahl:
                    $$P(X \\le 2) = \\tfrac{2}{6} = \\tfrac{1}{3}$$
                    $$P(X > 2) = 1 - \\tfrac{1}{3} = \\tfrac{2}{3}$$
                </div>
            </details>
        `
    },
    {
        id: "k10-071", niveau: "ga",
        category: "zufall",
        question: "Wie stelle ich eine Wahrscheinlichkeitsverteilung auf?",
        answer: `
            <h4>Verteilung als Tabelle</h4>
            <ol>
                <li>Alle möglichen Werte von \\( X \\) auflisten</li>
                <li>Zu jedem Wert die Wahrscheinlichkeit \\( P(X = x_i) \\) bestimmen</li>
                <li>Kontrolle: die Summe aller Wahrscheinlichkeiten ist 1</li>
            </ol>
            <div class="formula-box">
                $$\\sum_{i} P(X = x_i) = 1$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zwei Münzwürfe, \\( X \\) = Anzahl Kopf:
                    $$P(X=0) = \\tfrac{1}{4}, \\; P(X=1) = \\tfrac{1}{2}, \\; P(X=2) = \\tfrac{1}{4}$$
                    Summe: \\( \\tfrac{1}{4} + \\tfrac{1}{2} + \\tfrac{1}{4} = 1 \\) ✓
                </div>
            </details>
        `
    },
    {
        id: "k10-072", niveau: "ga",
        category: "zufall",
        question: "Wie lese ich ein Stabdiagramm einer Verteilung?",
        answer: `
            <h4>Grafische Darstellung</h4>
            <p>Auf der waagerechten Achse stehen die Werte \\( x_i \\) der Zufallsgröße, die Höhe jedes Stabes ist die Wahrscheinlichkeit \\( P(X = x_i) \\).</p>
            <ul>
                <li>Alle Stabhöhen zusammen ergeben 1</li>
                <li>\\( P(X \\le k) \\) ist die Summe aller Stäbe bis \\( k \\)</li>
                <li>Symmetrisches Bild heißt: Erwartungswert liegt in der Mitte</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Stäbe bei 0; 1; 2 mit den Höhen 0,25; 0,5; 0,25:
                    $$P(X \\le 1) = 0{,}25 + 0{,}5 = 0{,}75$$
                </div>
            </details>
        `
    },
    {
        id: "k10-073", niveau: "ga",
        category: "zufall",
        question: "Wie berechne ich den Erwartungswert?",
        answer: `
            <h4>Erwartungswert</h4>
            <div class="formula-box">
                $$E(X) = \\mu = \\sum_{i} x_i \\cdot P(X = x_i)$$
            </div>
            <p>Jeder Wert wird mit seiner Wahrscheinlichkeit gewichtet. \\( E(X) \\) ist der Durchschnitt, den man auf lange Sicht erwartet — er muss kein möglicher Wert sein.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel, \\( X \\) = Augenzahl:
                    $$E(X) = (1+2+3+4+5+6) \\cdot \\tfrac{1}{6} = 3{,}5$$
                </div>
            </details>
        `
    },
    {
        id: "k10-074", niveau: "ga",
        category: "zufall",
        question: "Wie berechne ich Varianz und Standardabweichung?",
        answer: `
            <h4>Streuung</h4>
            <div class="formula-box">
                $$V(X) = \\sum_{i} \\left(x_i - \\mu\\right)^2 \\cdot P(X = x_i)$$
                $$\\sigma = \\sqrt{V(X)}$$
            </div>
            <p>Die Standardabweichung \\( \\sigma \\) misst, wie weit die Werte im Mittel vom Erwartungswert abweichen. Kleines \\( \\sigma \\) heißt: die Werte liegen dicht beieinander.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zwei Münzwürfe, \\( X \\) = Anzahl Kopf, \\( \\mu = 1 \\):
                    $$V(X) = 1 \\cdot \\tfrac{1}{4} + 0 \\cdot \\tfrac{1}{2} + 1 \\cdot \\tfrac{1}{4} = 0{,}5$$
                    $$\\sigma = \\sqrt{0{,}5} \\approx 0{,}71$$
                </div>
            </details>
        `
    },
    {
        id: "k10-075", niveau: "ga",
        category: "zufall",
        question: "Wie beurteile ich, ob ein Spiel fair ist?",
        answer: `
            <h4>Faires Spiel</h4>
            <div class="formula-box">
                $$\\text{fair} \\quad \\Longleftrightarrow \\quad E(X) = 0$$
            </div>
            <p>\\( X \\) ist der Gewinn: Auszahlung minus Einsatz. Ist \\( E(X) < 0 \\), verliert man auf Dauer; ist \\( E(X) > 0 \\), ist das Spiel für den Spieler günstig.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Einsatz 1 €, bei einer Sechs gibt es 5 € ausgezahlt:
                    $$E(X) = 4 \\cdot \\tfrac{1}{6} + (-1) \\cdot \\tfrac{5}{6} = -\\tfrac{1}{6}$$
                    Rund 17 Cent Verlust je Spiel — nicht fair. Fair wäre eine Auszahlung von 6 €.
                </div>
            </details>
        `
    },
    {
        id: "k10-076", niveau: "ga",
        category: "zufall",
        question: "Wie nutze ich den Erwartungswert in einer Sachaufgabe?",
        answer: `
            <h4>Vorgehen</h4>
            <ol>
                <li>Zufallsgröße \\( X \\) in Worten festlegen (was wird gezählt oder gemessen?)</li>
                <li>Verteilung als Tabelle aufstellen</li>
                <li>\\( E(X) \\) berechnen</li>
                <li>Ergebnis im Sachzusammenhang deuten und einen Antwortsatz schreiben</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Eine Versicherung zahlt mit \\( P = 0{,}02 \\) einen Schaden von 5000 €:
                    $$E(X) = 0{,}02 \\cdot 5000 = 100 \\text{ €}$$
                    Die erwartete Auszahlung je Vertrag beträgt 100 €; der Beitrag muss darüber liegen.
                </div>
            </details>
        `
    }
    ]
};
