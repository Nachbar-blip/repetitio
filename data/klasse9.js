// Repetitio-Deck: Klasse 9 — Stoffverteilungsplan Mathematik Klasse 9, Gymnasium Sachsen-Anhalt
// Alle Karten niveau "ga": Klassenstufen-Decks kennen kein gA/eA.
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["klasse9"] = {
    title: "Klasse 9",
    subtitle: "Trigonometrie, Potenzen und Logarithmen, quadratische Funktionen, Häufigkeiten",
    categories: {
        trigo: "Trigonometrie",
        potenz: "Potenzen, Wurzeln & Logarithmen",
        quadrat: "Quadratische Gleichungen & Funktionen",
        daten: "Häufigkeitsverteilungen"
    },
    cards: [
    // ── Trigonometrie ───────────────────────────────────────────────────────
    {
        id: "k9-001", niveau: "ga",
        category: "trigo",
        question: "Wie heißen die Seiten am rechtwinkligen Dreieck?",
        answer: `
            <h4>Seitenbezeichnungen</h4>
            <ul>
                <li><strong>Hypotenuse</strong>: die längste Seite, liegt dem rechten Winkel gegenüber</li>
                <li><strong>Gegenkathete</strong> von \\( \\alpha \\): liegt dem Winkel \\( \\alpha \\) gegenüber</li>
                <li><strong>Ankathete</strong> von \\( \\alpha \\): liegt am Winkel \\( \\alpha \\) an</li>
            </ul>
            <p>Achtung: An- und Gegenkathete hängen davon ab, von welchem Winkel man spricht — sie tauschen die Rollen, wenn man zum anderen spitzen Winkel wechselt.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Dreieck mit rechtem Winkel bei \\( C \\): \\( c \\) ist die Hypotenuse.<br>
                    Für \\( \\alpha \\): Gegenkathete \\( a \\), Ankathete \\( b \\).<br>
                    Für \\( \\beta \\): Gegenkathete \\( b \\), Ankathete \\( a \\).
                </div>
            </details>
        `
    },
    {
        id: "k9-002", niveau: "ga",
        category: "trigo",
        question: "Wie sind Sinus, Kosinus und Tangens im rechtwinkligen Dreieck erklärt?",
        answer: `
            <h4>Seitenverhältnisse</h4>
            <div class="formula-box">
                $$\\sin \\alpha = \\frac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$$
                $$\\cos \\alpha = \\frac{\\text{Ankathete}}{\\text{Hypotenuse}}$$
                $$\\tan \\alpha = \\frac{\\text{Gegenkathete}}{\\text{Ankathete}}$$
            </div>
            <p>Die Werte hängen nur vom Winkel ab, nicht von der Größe des Dreiecks.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( a = 3 \\), \\( b = 4 \\), \\( c = 5 \\):
                    $$\\sin \\alpha = \\frac{3}{5} = 0{,}6, \\quad \\cos \\alpha = 0{,}8$$
                    $$\\tan \\alpha = \\frac{3}{4} = 0{,}75 \\;\\Rightarrow\\; \\alpha \\approx 36{,}9^\\circ$$
                </div>
            </details>
        `
    },
    {
        id: "k9-003", niveau: "ga",
        category: "trigo",
        question: "Wie berechne ich eine fehlende Seite im rechtwinkligen Dreieck?",
        answer: `
            <h4>Seite berechnen</h4>
            <ol>
                <li>Skizze anfertigen, gegebene Stücke eintragen</li>
                <li>Prüfen: welche zwei Seiten sind beteiligt (An-, Gegenkathete, Hypotenuse)?</li>
                <li>Passendes Verhältnis wählen und nach der gesuchten Seite umstellen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gegeben \\( c = 10 \\) (Hypotenuse), \\( \\alpha = 35^\\circ \\), gesucht \\( a \\):
                    $$\\sin 35^\\circ = \\frac{a}{10}$$
                    $$a = 10 \\cdot \\sin 35^\\circ \\approx 5{,}74$$
                </div>
            </details>
        `
    },
    {
        id: "k9-004", niveau: "ga",
        category: "trigo",
        question: "Wie berechne ich einen Winkel aus zwei Seiten?",
        answer: `
            <h4>Winkel berechnen</h4>
            <div class="formula-box">
                $$\\alpha = \\sin^{-1}\\left(\\frac{\\text{Gegenkathete}}{\\text{Hypotenuse}}\\right)$$
            </div>
            <p>Auf dem Taschenrechner heißen die Umkehrfunktionen \\( \\sin^{-1} \\), \\( \\cos^{-1} \\), \\( \\tan^{-1} \\) (oft über die Zweitbelegung). Der Rechner muss im Gradmaß stehen (DEG).</p>
            <p>Winkel auf eine Dezimale runden, Seitenverhältnisse auf vier.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gegenkathete 7, Hypotenuse 12:
                    $$\\sin \\alpha = \\frac{7}{12} \\approx 0{,}5833$$
                    $$\\alpha = \\sin^{-1}(0{,}5833) \\approx 35{,}7^\\circ$$
                </div>
            </details>
        `
    },
    {
        id: "k9-005", niveau: "ga",
        category: "trigo",
        question: "Welches Verhältnis wähle ich für welche Aufgabe?",
        answer: `
            <h4>Auswahlregel</h4>
            <ul>
                <li>Hypotenuse beteiligt und Gegenkathete gesucht oder gegeben → <strong>Sinus</strong></li>
                <li>Hypotenuse beteiligt und Ankathete gesucht oder gegeben → <strong>Kosinus</strong></li>
                <li>Nur die beiden Katheten beteiligt → <strong>Tangens</strong></li>
                <li>Alle drei Seiten, kein Winkel → <strong>Satz des Pythagoras</strong></li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gegeben Ankathete 8 und Gegenkathete 6, gesucht \\( \\alpha \\):<br>
                    keine Hypotenuse beteiligt → Tangens.
                    $$\\tan \\alpha = \\frac{6}{8} \\;\\Rightarrow\\; \\alpha \\approx 36{,}9^\\circ$$
                </div>
            </details>
        `
    },
    {
        id: "k9-006", niveau: "ga",
        category: "trigo",
        question: "Welche Beziehungen gelten zwischen Sinus, Kosinus und Tangens?",
        answer: `
            <h4>Grundbeziehungen</h4>
            <div class="formula-box">
                $$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$$
                $$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$$
            </div>
            <p>Die erste Beziehung folgt aus dem Satz des Pythagoras. Mit ihr findet man aus einem Wert den anderen, ohne den Winkel zu kennen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( \\sin \\alpha = 0{,}6 \\), \\( \\alpha \\) spitz:
                    $$\\cos \\alpha = \\sqrt{1 - 0{,}36} = 0{,}8$$
                    $$\\tan \\alpha = \\frac{0{,}6}{0{,}8} = 0{,}75$$
                </div>
            </details>
        `
    },
    {
        id: "k9-007", niveau: "ga",
        category: "trigo",
        question: "Was gilt für Winkel und ihren Nebenwinkel?",
        answer: `
            <h4>Beziehungen am stumpfen Winkel</h4>
            <div class="formula-box">
                $$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$$
                $$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$$
            </div>
            <p>Wichtig beim Sinussatz: zu einem Sinuswert gehören zwei mögliche Winkel — ein spitzer und ein stumpfer. Welcher passt, entscheidet die Figur.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sin 150^\\circ = \\sin 30^\\circ = 0{,}5$$
                    $$\\cos 150^\\circ = -\\cos 30^\\circ \\approx -0{,}8660$$
                </div>
            </details>
        `
    },
    {
        id: "k9-008", niveau: "ga",
        category: "trigo",
        question: "Wie lautet der Sinussatz?",
        answer: `
            <h4>Sinussatz</h4>
            <div class="formula-box">
                $$\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{c}{\\sin \\gamma}$$
            </div>
            <p>Gilt in <strong>jedem</strong> Dreieck. Anwendbar, wenn eine Seite mit ihrem Gegenwinkel bekannt ist und dazu noch eine weitere Seite oder ein weiterer Winkel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( a = 8{,}2 \\), \\( \\alpha = 38^\\circ \\), \\( \\beta = 56^\\circ \\):
                    $$b = \\frac{8{,}2 \\cdot \\sin 56^\\circ}{\\sin 38^\\circ} \\approx 11{,}04$$
                </div>
            </details>
        `
    },
    {
        id: "k9-009", niveau: "ga",
        category: "trigo",
        question: "Wie lautet der Kosinussatz?",
        answer: `
            <h4>Kosinussatz</h4>
            <div class="formula-box">
                $$a^2 = b^2 + c^2 - 2bc \\cdot \\cos \\alpha$$
            </div>
            <p>Der Satz des Pythagoras mit Korrekturglied: für \\( \\alpha = 90^\\circ \\) ist \\( \\cos \\alpha = 0 \\) und der Satz geht in \\( a^2 = b^2 + c^2 \\) über.</p>
            <p>Anwendbar bei zwei Seiten mit eingeschlossenem Winkel oder bei drei gegebenen Seiten.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( b = 5 \\), \\( c = 7 \\), \\( \\alpha = 60^\\circ \\):
                    $$a^2 = 25 + 49 - 2 \\cdot 35 \\cdot 0{,}5 = 39$$
                    $$a = \\sqrt{39} \\approx 6{,}24$$
                </div>
            </details>
        `
    },
    {
        id: "k9-010", niveau: "ga",
        category: "trigo",
        question: "Wie berechne ich den Flächeninhalt eines beliebigen Dreiecks?",
        answer: `
            <h4>Flächeninhaltssatz</h4>
            <div class="formula-box">
                $$A = \\frac{1}{2} \\cdot b \\cdot c \\cdot \\sin \\alpha$$
            </div>
            <p>Zwei Seiten und der von ihnen eingeschlossene Winkel genügen — eine Höhe wird nicht gebraucht.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( b = 6 \\), \\( c = 9 \\), \\( \\alpha = 40^\\circ \\):
                    $$A = \\frac{1}{2} \\cdot 54 \\cdot \\sin 40^\\circ \\approx 17{,}36$$
                </div>
            </details>
        `
    },
    {
        id: "k9-011", niveau: "ga",
        category: "trigo",
        question: "Sinussatz oder Kosinussatz — welcher passt?",
        answer: `
            <h4>Auswahl im allgemeinen Dreieck</h4>
            <ul>
                <li><strong>Sinussatz</strong>: Seite und Gegenwinkel sind bekannt (Fälle SWW, WSW, SSW)</li>
                <li><strong>Kosinussatz</strong>: zwei Seiten mit eingeschlossenem Winkel (SWS) oder drei Seiten (SSS)</li>
            </ul>
            <p>Kontrolle in jedem Fall: die Winkelsumme muss \\( 180^\\circ \\) ergeben, und die längste Seite liegt dem größten Winkel gegenüber.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gegeben \\( a = 7 \\), \\( b = 9 \\), \\( \\gamma = 50^\\circ \\) (SWS) → Kosinussatz für \\( c \\).<br>
                    Gegeben \\( a = 7 \\), \\( \\alpha = 40^\\circ \\), \\( \\beta = 65^\\circ \\) (WSW) → Sinussatz für \\( b \\).
                </div>
            </details>
        `
    },
    {
        id: "k9-012", niveau: "ga",
        category: "trigo",
        question: "Wie hängen Anstieg und Anstiegswinkel einer Geraden zusammen?",
        answer: `
            <h4>Anstiegswinkel</h4>
            <div class="formula-box">
                $$m = \\tan \\alpha, \\qquad \\alpha = \\tan^{-1} m$$
            </div>
            <p>Der Anstieg ist das Steigungsdreieck \\( \\frac{\\text{Höhe}}{\\text{Länge}} \\) — genau der Tangens des Winkels zur \\( x \\)-Achse. Negativer Anstieg heißt: der Winkel ist stumpf.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = 2x + 1 \\):
                    $$\\alpha = \\tan^{-1} 2 \\approx 63{,}4^\\circ$$
                    Steigung 8 % entspricht \\( \\tan^{-1} 0{,}08 \\approx 4{,}6^\\circ \\).
                </div>
            </details>
        `
    },
    {
        id: "k9-013", niveau: "ga",
        category: "trigo",
        question: "Wie löse ich eine trigonometrische Sachaufgabe?",
        answer: `
            <h4>Vorgehen</h4>
            <ol>
                <li>Skizze zeichnen und die Angaben eintragen</li>
                <li>Rechtwinkliges Teildreieck suchen — notfalls eine Höhe einzeichnen</li>
                <li>Passendes Verhältnis oder den passenden Satz wählen</li>
                <li>Rechnen, sinnvoll runden, Antwortsatz mit Einheit</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Ein Turm erscheint aus 50 m Entfernung unter dem Höhenwinkel \\( 32^\\circ \\):
                    $$h = 50 \\cdot \\tan 32^\\circ \\approx 31{,}2 \\text{ m}$$
                    Der Turm ist rund 31 m hoch.
                </div>
            </details>
        `
    },
    {
        id: "k9-014", niveau: "ga",
        category: "trigo",
        question: "Wie rechne ich Winkel an Körpern aus?",
        answer: `
            <h4>Trigonometrie am Körper</h4>
            <ol>
                <li>Das gesuchte Stück in ein <strong>ebenes</strong> Dreieck legen (Schnittfläche)</li>
                <li>Fehlende Hilfsgrößen zuerst berechnen, oft die halbe Grundkante oder die Raumdiagonale</li>
                <li>Erst dann das Verhältnis ansetzen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Quadratische Pyramide, Grundkante \\( a = 6 \\), Höhe \\( h = 4 \\).
                    Seitenflächenwinkel über die Seitenhöhe:
                    $$\\tan \\varphi = \\frac{4}{3} \\;\\Rightarrow\\; \\varphi \\approx 53{,}1^\\circ$$
                </div>
            </details>
        `
    },
    // ── Potenzen, Wurzeln & Logarithmen ─────────────────────────────────────
    {
        id: "k9-015", niveau: "ga",
        category: "potenz",
        question: "Wie heißen die Teile einer Potenz?",
        answer: `
            <h4>Begriffe</h4>
            <div class="formula-box">
                $$a^n = \\underbrace{a \\cdot a \\cdot \\dots \\cdot a}_{n \\text{ Faktoren}}$$
            </div>
            <p>\\( a \\) ist die <strong>Basis</strong>, \\( n \\) der <strong>Exponent</strong>, das Ergebnis heißt <strong>Potenz</strong>.</p>
            <p>Vorzeichen beachten: \\( (-2)^4 = 16 \\), aber \\( -2^4 = -16 \\) — ohne Klammer gilt die Potenz nur für die 2.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$3^4 = 81, \\quad (-3)^3 = -27, \\quad -3^2 = -9$$
                </div>
            </details>
        `
    },
    {
        id: "k9-016", niveau: "ga",
        category: "potenz",
        question: "Wie rechne ich mit Potenzen gleicher Basis?",
        answer: `
            <h4>Potenzgesetze I</h4>
            <div class="formula-box">
                $$a^m \\cdot a^n = a^{m+n}, \\qquad \\frac{a^m}{a^n} = a^{m-n}$$
                $$\\left(a^m\\right)^n = a^{m \\cdot n}$$
            </div>
            <p>Nur bei <strong>gleicher Basis</strong> anwendbar. \\( 2^3 \\cdot 3^2 \\) lässt sich so nicht zusammenfassen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^5 \\cdot x^3 = x^8, \\qquad \\frac{a^7}{a^4} = a^3$$
                    $$\\left(2^3\\right)^2 = 2^6 = 64$$
                </div>
            </details>
        `
    },
    {
        id: "k9-017", niveau: "ga",
        category: "potenz",
        question: "Wie rechne ich mit Potenzen gleichen Exponenten?",
        answer: `
            <h4>Potenzgesetze II</h4>
            <div class="formula-box">
                $$a^n \\cdot b^n = (a \\cdot b)^n, \\qquad \\frac{a^n}{b^n} = \\left(\\frac{a}{b}\\right)^n$$
            </div>
            <p>Bei gleichem Exponenten darf man die Basen zusammenfassen — nützlich, um im Kopf zu rechnen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$4^3 \\cdot 25^3 = 100^3 = 1\\,000\\,000$$
                    $$\\frac{12^2}{4^2} = 3^2 = 9$$
                </div>
            </details>
        `
    },
    {
        id: "k9-018", niveau: "ga",
        category: "potenz",
        question: "Was bedeuten Exponent 0 und negative Exponenten?",
        answer: `
            <h4>Ganzzahlige Exponenten</h4>
            <div class="formula-box">
                $$a^0 = 1 \\; (a \\neq 0), \\qquad a^{-n} = \\frac{1}{a^n}$$
            </div>
            <p>Ein negativer Exponent bedeutet Kehrwert — das Vorzeichen des Ergebnisses ändert sich dadurch nicht.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$5^0 = 1, \\qquad 2^{-4} = \\frac{1}{16} = 0{,}0625$$
                    $$\\frac{x^2}{x^5} = x^{-3} = \\frac{1}{x^3}$$
                </div>
            </details>
        `
    },
    {
        id: "k9-019", niveau: "ga",
        category: "potenz",
        question: "Wie schreibe ich große und kleine Zahlen mit Zehnerpotenzen?",
        answer: `
            <h4>Wissenschaftliche Schreibweise</h4>
            <div class="formula-box">
                $$z = a \\cdot 10^n, \\quad 1 \\le a < 10$$
            </div>
            <p>Komma nach links schieben heißt Exponent erhöhen, nach rechts schieben heißt Exponent verringern.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$149\\,600\\,000 = 1{,}496 \\cdot 10^{8}$$
                    $$0{,}000\\,034 = 3{,}4 \\cdot 10^{-5}$$
                </div>
            </details>
        `
    },
    {
        id: "k9-020", niveau: "ga",
        category: "potenz",
        question: "Was bedeuten die Vorsätze k, M, m und µ?",
        answer: `
            <h4>Einheitenvorsätze</h4>
            <div class="formula-box">
                $$\\text{k} = 10^{3}, \\quad \\text{M} = 10^{6}, \\quad \\text{G} = 10^{9}$$
                $$\\text{m} = 10^{-3}, \\quad \\mu = 10^{-6}, \\quad \\text{n} = 10^{-9}$$
            </div>
            <p>Beim Umrechnen hilft es, zuerst in die Grundeinheit zu gehen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2{,}5 \\text{ GB} = 2{,}5 \\cdot 10^9 \\text{ B}$$
                    $$40 \\; \\mu\\text{m} = 4 \\cdot 10^{-5} \\text{ m} = 0{,}04 \\text{ mm}$$
                </div>
            </details>
        `
    },
    {
        id: "k9-021", niveau: "ga",
        category: "potenz",
        question: "Was bedeutet die n-te Wurzel?",
        answer: `
            <h4>Wurzel</h4>
            <div class="formula-box">
                $$\\sqrt[n]{a} = b \\quad \\Longleftrightarrow \\quad b^n = a, \\; b \\ge 0$$
            </div>
            <p>\\( a \\) heißt Radikand, \\( n \\) Wurzelexponent. Für gerade \\( n \\) muss \\( a \\ge 0 \\) sein.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sqrt{144} = 12, \\qquad \\sqrt[3]{125} = 5$$
                    $$\\sqrt[4]{81} = 3, \\qquad \\sqrt{-9} \\text{ ist nicht definiert}$$
                </div>
            </details>
        `
    },
    {
        id: "k9-022", niveau: "ga",
        category: "potenz",
        question: "Wie schreibe ich Wurzeln als Potenzen?",
        answer: `
            <h4>Rationale Exponenten</h4>
            <div class="formula-box">
                $$\\sqrt[n]{a} = a^{\\frac{1}{n}}, \\qquad \\sqrt[n]{a^m} = a^{\\frac{m}{n}}$$
            </div>
            <p>Damit gelten für Wurzeln dieselben Gesetze wie für Potenzen — die Wurzelgesetze sind ein Sonderfall der Potenzgesetze.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$$
                    $$8^{\\frac{2}{3}} = \\left(\\sqrt[3]{8}\\right)^2 = 4$$
                </div>
            </details>
        `
    },
    {
        id: "k9-023", niveau: "ga",
        category: "potenz",
        question: "Welche Wurzelgesetze gibt es?",
        answer: `
            <h4>Wurzelgesetze</h4>
            <div class="formula-box">
                $$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{a \\cdot b}, \\qquad \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$$
            </div>
            <p>Für Summen gilt <strong>nichts</strong> dergleichen: \\( \\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b} \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sqrt{8} \\cdot \\sqrt{2} = \\sqrt{16} = 4$$
                    $$\\sqrt{9+16} = 5, \\text{ aber } \\sqrt{9} + \\sqrt{16} = 7$$
                </div>
            </details>
        `
    },
    {
        id: "k9-024", niveau: "ga",
        category: "potenz",
        question: "Wie ziehe ich teilweise die Wurzel?",
        answer: `
            <h4>Teilweises Wurzelziehen</h4>
            <ol>
                <li>Den Radikanden in ein Produkt zerlegen, in dem eine Quadratzahl steckt</li>
                <li>Die Wurzel auf beide Faktoren verteilen</li>
                <li>Die Quadratzahl herausziehen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$$
                    $$\\sqrt{50} + \\sqrt{18} = 5\\sqrt{2} + 3\\sqrt{2} = 8\\sqrt{2}$$
                </div>
            </details>
        `
    },
    {
        id: "k9-025", niveau: "ga",
        category: "potenz",
        question: "Was sind irrationale und was sind reelle Zahlen?",
        answer: `
            <h4>Zahlenbereiche</h4>
            <p>Eine <strong>irrationale</strong> Zahl lässt sich nicht als Bruch zweier ganzer Zahlen schreiben; ihre Dezimaldarstellung bricht nie ab und ist nicht periodisch.</p>
            <div class="formula-box">
                $$\\mathbb{R} = \\mathbb{Q} \\cup \\{\\text{irrationale Zahlen}\\}$$
            </div>
            <p>Die rationalen und die irrationalen Zahlen zusammen bilden die reellen Zahlen und füllen die Zahlengerade lückenlos.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    irrational: \\( \\sqrt{2} \\approx 1{,}4142\\dots \\), \\( \\pi \\), \\( \\sqrt{3} \\)<br>
                    rational: \\( 0{,}75 = \\frac{3}{4} \\), \\( 0{,}\\overline{3} = \\frac{1}{3} \\), \\( \\sqrt{16} = 4 \\)
                </div>
            </details>
        `
    },
    {
        id: "k9-026", niveau: "ga",
        category: "potenz",
        question: "Was ist ein Logarithmus?",
        answer: `
            <h4>Definition</h4>
            <div class="formula-box">
                $$\\log_b a = x \\quad \\Longleftrightarrow \\quad b^x = a$$
            </div>
            <p>Der Logarithmus ist der gesuchte <strong>Exponent</strong>. Dabei \\( a > 0 \\), \\( b > 0 \\), \\( b \\neq 1 \\).</p>
            <p>Kurzschreibweisen: \\( \\lg a = \\log_{10} a \\) und \\( \\ln a = \\log_e a \\) mit der Eulerschen Zahl \\( e \\approx 2{,}718 \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\log_2 32 = 5, \\text{ denn } 2^5 = 32$$
                    $$\\lg 10\\,000 = 4, \\qquad \\log_3 1 = 0$$
                </div>
            </details>
        `
    },
    {
        id: "k9-027", niveau: "ga",
        category: "potenz",
        question: "Welche Logarithmengesetze gibt es?",
        answer: `
            <h4>Logarithmengesetze</h4>
            <div class="formula-box">
                $$\\log_b (u \\cdot v) = \\log_b u + \\log_b v$$
                $$\\log_b \\frac{u}{v} = \\log_b u - \\log_b v$$
                $$\\log_b \\left(u^r\\right) = r \\cdot \\log_b u$$
            </div>
            <p>Sie entsprechen den Potenzgesetzen: aus Mal wird Plus, aus Hoch wird Mal.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\lg 4 + \\lg 25 = \\lg 100 = 2$$
                    $$\\log_2 \\left(8^3\\right) = 3 \\cdot \\log_2 8 = 9$$
                </div>
            </details>
        `
    },
    // ── Quadratische Gleichungen & Funktionen ───────────────────────────────
    {
        id: "k9-028", niveau: "ga",
        category: "quadrat",
        question: "Woran erkenne ich eine quadratische Gleichung?",
        answer: `
            <h4>Normalform</h4>
            <div class="formula-box">
                $$ax^2 + bx + c = 0 \\; (a \\neq 0) \\quad \\text{bzw.} \\quad x^2 + px + q = 0$$
            </div>
            <p>Die höchste Potenz der Unbekannten ist 2. Vor dem Lösen alles auf eine Seite bringen und ordnen; für die p-q-Formel muss vor \\( x^2 \\) eine 1 stehen — sonst durch \\( a \\) teilen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2x^2 - 8x = -6 \\;\\Rightarrow\\; 2x^2 - 8x + 6 = 0$$
                    $$\\Rightarrow\\; x^2 - 4x + 3 = 0$$
                </div>
            </details>
        `
    },
    {
        id: "k9-029", niveau: "ga",
        category: "quadrat",
        question: "Wie löse ich eine rein quadratische Gleichung?",
        answer: `
            <h4>Form \\( x^2 = c \\)</h4>
            <div class="formula-box">
                $$c > 0: \\; x = \\pm\\sqrt{c} \\qquad c = 0: \\; x = 0 \\qquad c < 0: \\; \\mathbb{L} = \\{\\}$$
            </div>
            <p>Das \\( \\pm \\) nicht vergessen — es gibt zwei Lösungen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$3x^2 - 27 = 0 \\;\\Rightarrow\\; x^2 = 9 \\;\\Rightarrow\\; x = \\pm 3$$
                    $$x^2 + 4 = 0 \\;\\Rightarrow\\; \\mathbb{L} = \\{\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k9-030", niveau: "ga",
        category: "quadrat",
        question: "Wie löse ich eine Gleichung ohne absolutes Glied?",
        answer: `
            <h4>Form \\( ax^2 + bx = 0 \\)</h4>
            <p>Nicht die Lösungsformel nehmen, sondern \\( x \\) ausklammern und den Satz vom Nullprodukt benutzen: Ein Produkt ist genau dann null, wenn ein Faktor null ist.</p>
            <div class="formula-box">
                $$x \\cdot (ax + b) = 0 \\;\\Rightarrow\\; x_1 = 0 \\;\\text{oder}\\; x_2 = -\\frac{b}{a}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^2 - 5x = 0 \\;\\Rightarrow\\; x(x-5) = 0$$
                    $$x_1 = 0, \\quad x_2 = 5$$
                </div>
            </details>
        `
    },
    {
        id: "k9-031", niveau: "ga",
        category: "quadrat",
        question: "Wie lautet die p-q-Formel?",
        answer: `
            <h4>Lösungsformel</h4>
            <div class="formula-box">
                $$x^2 + px + q = 0$$
                $$x_{1,2} = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}$$
            </div>
            <p>Vorzeichen von \\( p \\) und \\( q \\) genau übernehmen. Probe durch Einsetzen oder über den Satz von Vieta.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^2 - 4x + 3 = 0, \\quad p = -4, \\; q = 3$$
                    $$x_{1,2} = 2 \\pm \\sqrt{4-3} = 2 \\pm 1$$
                    $$x_1 = 3, \\quad x_2 = 1$$
                </div>
            </details>
        `
    },
    {
        id: "k9-032", niveau: "ga",
        category: "quadrat",
        question: "Was sagt die Diskriminante über die Lösungen?",
        answer: `
            <h4>Diskriminante</h4>
            <div class="formula-box">
                $$D = \\left(\\frac{p}{2}\\right)^2 - q$$
            </div>
            <ul>
                <li>\\( D > 0 \\): zwei Lösungen</li>
                <li>\\( D = 0 \\): eine Lösung (Doppellösung)</li>
                <li>\\( D < 0 \\): keine Lösung in \\( \\mathbb{R} \\)</li>
            </ul>
            <p>Am Graphen: zwei, ein oder kein Schnittpunkt der Parabel mit der \\( x \\)-Achse.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^2 - 6x + 9 = 0: \\; D = 9 - 9 = 0 \\;\\Rightarrow\\; x = 3$$
                    $$x^2 + 2x + 5 = 0: \\; D = 1 - 5 = -4 \\;\\Rightarrow\\; \\mathbb{L} = \\{\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k9-033", niveau: "ga",
        category: "quadrat",
        question: "Wie nutze ich die Lösungsformel bei \\( ax^2+bx+c=0 \\)?",
        answer: `
            <h4>Zwei Wege</h4>
            <p>Entweder durch \\( a \\) teilen und die p-q-Formel nehmen oder direkt die Mitternachtsformel:</p>
            <div class="formula-box">
                $$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2x^2 - 7x + 3 = 0$$
                    $$x_{1,2} = \\frac{7 \\pm \\sqrt{49 - 24}}{4} = \\frac{7 \\pm 5}{4}$$
                    $$x_1 = 3, \\quad x_2 = 0{,}5$$
                </div>
            </details>
        `
    },
    {
        id: "k9-034", niveau: "ga",
        category: "quadrat",
        question: "Was besagt der Satz von Vieta und die Linearfaktorzerlegung?",
        answer: `
            <h4>Vieta und Linearfaktoren</h4>
            <div class="formula-box">
                $$x_1 + x_2 = -p, \\qquad x_1 \\cdot x_2 = q$$
                $$x^2 + px + q = (x - x_1)(x - x_2)$$
            </div>
            <p>Mit Vieta findet man einfache Lösungen im Kopf und prüft Ergebnisse. Die Linearfaktorform macht die Nullstellen unmittelbar sichtbar.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^2 - 4x + 3: \\; x_1 + x_2 = 4, \\; x_1 \\cdot x_2 = 3$$
                    $$\\Rightarrow\\; x_1 = 3, \\; x_2 = 1 \\;\\Rightarrow\\; (x-3)(x-1)$$
                </div>
            </details>
        `
    },
    {
        id: "k9-035", niveau: "ga",
        category: "quadrat",
        question: "Wie löse ich eine biquadratische Gleichung?",
        answer: `
            <h4>Substitution</h4>
            <ol>
                <li>\\( u = x^2 \\) setzen, dann steht eine quadratische Gleichung in \\( u \\) da</li>
                <li>Nach \\( u \\) lösen</li>
                <li>Rücksubstitution \\( x = \\pm\\sqrt{u} \\) — negative \\( u \\) liefern keine Lösung</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^4 - 13x^2 + 36 = 0, \\quad u = x^2$$
                    $$u^2 - 13u + 36 = 0 \\;\\Rightarrow\\; u_1 = 9, \\; u_2 = 4$$
                    $$x = \\pm 3 \\;\\text{und}\\; x = \\pm 2$$
                </div>
            </details>
        `
    },
    {
        id: "k9-036", niveau: "ga",
        category: "quadrat",
        question: "Wie löse ich Gleichungen höheren Grades durch Ausklammern?",
        answer: `
            <h4>Ausklammern</h4>
            <p>Fehlt das absolute Glied, klammert man die kleinste Potenz von \\( x \\) aus und wendet den Satz vom Nullprodukt an.</p>
            <div class="formula-box">
                $$x^n \\cdot (\\dots) = 0$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^3 - 4x = 0 \\;\\Rightarrow\\; x\\left(x^2 - 4\\right) = 0$$
                    $$x_1 = 0, \\quad x_2 = 2, \\quad x_3 = -2$$
                </div>
            </details>
        `
    },
    {
        id: "k9-037", niveau: "ga",
        category: "quadrat",
        question: "Welche Eigenschaften hat die Normalparabel?",
        answer: `
            <h4>\\( y = x^2 \\)</h4>
            <ul>
                <li>Scheitelpunkt \\( S(0 \\mid 0) \\), nach oben geöffnet</li>
                <li>Achsensymmetrisch zur \\( y \\)-Achse</li>
                <li>Definitionsbereich \\( \\mathbb{R} \\), Wertebereich \\( y \\ge 0 \\)</li>
                <li>Fallend für \\( x < 0 \\), steigend für \\( x > 0 \\)</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(1) = 1, \\; f(2) = 4, \\; f(3) = 9$$
                    Vom Scheitel aus: 1 nach rechts und 1 hoch, 2 nach rechts und 4 hoch.
                </div>
            </details>
        `
    },
    {
        id: "k9-038", niveau: "ga",
        category: "quadrat",
        question: "Wie lese ich den Scheitelpunkt aus der Scheitelpunktform ab?",
        answer: `
            <h4>Scheitelpunktform</h4>
            <div class="formula-box">
                $$y = a(x - d)^2 + e \\;\\Rightarrow\\; S(d \\mid e)$$
            </div>
            <p>Vorzeichenfalle: \\( y = (x+3)^2 - 2 \\) hat den Scheitel \\( S(-3 \\mid -2) \\), denn \\( x + 3 = x - (-3) \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$y = 2(x-4)^2 + 1 \\;\\Rightarrow\\; S(4 \\mid 1)$$
                    $$y = -(x+1)^2 + 5 \\;\\Rightarrow\\; S(-1 \\mid 5)$$
                </div>
            </details>
        `
    },
    {
        id: "k9-039", niveau: "ga",
        category: "quadrat",
        question: "Was bewirkt der Parameter \\( a \\) bei einer Parabel?",
        answer: `
            <h4>Form und Öffnung</h4>
            <ul>
                <li>\\( a > 0 \\): nach oben geöffnet, Scheitel ist Tiefpunkt</li>
                <li>\\( a < 0 \\): nach unten geöffnet, Scheitel ist Hochpunkt</li>
                <li>\\( |a| > 1 \\): gestreckt, schmaler als die Normalparabel</li>
                <li>\\( 0 < |a| < 1 \\): gestaucht, breiter</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = 3x^2 \\) ist schmaler, \\( y = 0{,}5x^2 \\) breiter als \\( y = x^2 \\).
                    $$y = -2x^2: \\; f(1) = -2, \\; f(2) = -8$$
                </div>
            </details>
        `
    },
    {
        id: "k9-040", niveau: "ga",
        category: "quadrat",
        question: "Wie komme ich mit quadratischer Ergänzung zur Scheitelpunktform?",
        answer: `
            <h4>Quadratische Ergänzung</h4>
            <ol>
                <li>Falls nötig \\( a \\) ausklammern</li>
                <li>\\( \\left(\\frac{p}{2}\\right)^2 \\) addieren und sofort wieder subtrahieren</li>
                <li>Binomische Formel rückwärts anwenden</li>
                <li>Reste zusammenfassen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$y = x^2 - 6x + 11$$
                    $$= x^2 - 6x + 9 - 9 + 11$$
                    $$= (x-3)^2 + 2 \\;\\Rightarrow\\; S(3 \\mid 2)$$
                </div>
            </details>
        `
    },
    {
        id: "k9-041", niveau: "ga",
        category: "quadrat",
        question: "Wie berechne ich den Scheitelpunkt mit einer Formel?",
        answer: `
            <h4>Scheitel aus der Normalform</h4>
            <div class="formula-box">
                $$x_S = -\\frac{b}{2a}, \\qquad y_S = f(x_S)$$
            </div>
            <p>Die Scheitelstelle liegt genau in der Mitte zwischen den Nullstellen — auch das ist eine gute Kontrolle.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$y = 2x^2 - 8x + 5$$
                    $$x_S = \\frac{8}{4} = 2, \\quad y_S = 8 - 16 + 5 = -3$$
                    $$S(2 \\mid -3)$$
                </div>
            </details>
        `
    },
    {
        id: "k9-042", niveau: "ga",
        category: "quadrat",
        question: "Wie berechne ich die Nullstellen einer quadratischen Funktion?",
        answer: `
            <h4>Nullstellen</h4>
            <p>Nullstellen sind die \\( x \\)-Werte mit \\( f(x) = 0 \\) — die Schnittstellen mit der \\( x \\)-Achse. Man setzt den Funktionsterm gleich null und löst die quadratische Gleichung.</p>
            <p>Der Schnittpunkt mit der \\( y \\)-Achse ist dagegen einfach \\( f(0) \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2 - 2x - 8 = 0$$
                    $$x_{1,2} = 1 \\pm \\sqrt{1+8} = 1 \\pm 3$$
                    Nullstellen \\( x_1 = 4 \\), \\( x_2 = -2 \\); \\( y \\)-Achsenabschnitt \\( f(0) = -8 \\).
                </div>
            </details>
        `
    },
    {
        id: "k9-043", niveau: "ga",
        category: "quadrat",
        question: "Wie beschreibe ich die Eigenschaften einer quadratischen Funktion?",
        answer: `
            <h4>Eigenschaften</h4>
            <ul>
                <li>Definitionsbereich: \\( \\mathbb{R} \\)</li>
                <li>Wertebereich: \\( y \\ge y_S \\) (nach oben geöffnet) bzw. \\( y \\le y_S \\)</li>
                <li>Symmetrieachse: \\( x = x_S \\)</li>
                <li>Monotonie: links vom Scheitel fallend, rechts steigend (bei \\( a>0 \\))</li>
                <li>Scheitel als Tief- oder Hochpunkt</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = -(x-2)^2 + 9 \\), \\( S(2 \\mid 9) \\):<br>
                    Wertebereich \\( y \\le 9 \\), Symmetrieachse \\( x = 2 \\), Hochpunkt.
                </div>
            </details>
        `
    },
    {
        id: "k9-044", niveau: "ga",
        category: "quadrat",
        question: "Wie stelle ich die Gleichung einer Parabel auf?",
        answer: `
            <h4>Gleichung bestimmen</h4>
            <ul>
                <li>Scheitel \\( S(d \\mid e) \\) und ein Punkt bekannt → Scheitelpunktform ansetzen und \\( a \\) berechnen</li>
                <li>Drei Punkte bekannt → in \\( y = ax^2+bx+c \\) einsetzen und das Gleichungssystem lösen</li>
                <li>Nullstellen und ein Punkt bekannt → \\( y = a(x-x_1)(x-x_2) \\)</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( S(1 \\mid -4) \\), Punkt \\( P(3 \\mid 0) \\):
                    $$0 = a(3-1)^2 - 4 \\;\\Rightarrow\\; 4a = 4 \\;\\Rightarrow\\; a = 1$$
                    $$y = (x-1)^2 - 4$$
                </div>
            </details>
        `
    },
    {
        id: "k9-045", niveau: "ga",
        category: "quadrat",
        question: "Wie berechne ich Schnittpunkte zweier Funktionen?",
        answer: `
            <h4>Schnittpunkte</h4>
            <ol>
                <li>Funktionsterme gleichsetzen</li>
                <li>Alles auf eine Seite bringen und die Gleichung lösen</li>
                <li>\\( x \\)-Werte in eine der beiden Gleichungen einsetzen — das gibt die \\( y \\)-Werte</li>
            </ol>
            <p>Die Anzahl der Lösungen sagt, ob sich die Graphen schneiden, berühren oder verfehlen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^2 - 1 = x + 1 \\;\\Rightarrow\\; x^2 - x - 2 = 0$$
                    $$x_1 = 2, \\; x_2 = -1$$
                    Schnittpunkte \\( (2 \\mid 3) \\) und \\( (-1 \\mid 0) \\).
                </div>
            </details>
        `
    },
    // ── Häufigkeitsverteilungen ─────────────────────────────────────────────
    {
        id: "k9-046", niveau: "ga",
        category: "daten",
        question: "Was sind Grundgesamtheit, Stichprobe und Stichprobenumfang?",
        answer: `
            <h4>Begriffe der Statistik</h4>
            <ul>
                <li><strong>Grundgesamtheit</strong>: alle Objekte, über die man etwas aussagen will</li>
                <li><strong>Stichprobe</strong>: der tatsächlich untersuchte Teil davon</li>
                <li><strong>Stichprobenumfang \\( n \\)</strong>: Anzahl der Untersuchten</li>
            </ul>
            <p>Eine Stichprobe trägt nur dann, wenn sie zufällig gezogen und groß genug ist.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Grundgesamtheit: alle 800 Schülerinnen und Schüler der Schule.<br>
                    Stichprobe: 50 zufällig befragte, also \\( n = 50 \\).
                </div>
            </details>
        `
    },
    {
        id: "k9-047", niveau: "ga",
        category: "daten",
        question: "Was ist der Unterschied zwischen absoluter und relativer Häufigkeit?",
        answer: `
            <h4>Häufigkeiten</h4>
            <div class="formula-box">
                $$h(A) = \\frac{H(A)}{n}$$
            </div>
            <p>\\( H(A) \\) ist die <strong>absolute</strong> Häufigkeit (Anzahl), \\( h(A) \\) die <strong>relative</strong> (Anteil, oft in Prozent). Die relative Häufigkeit liegt immer zwischen 0 und 1, alle zusammen ergeben 1.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    12 von 50 Befragten fahren mit dem Rad:
                    $$h = \\frac{12}{50} = 0{,}24 = 24\\,\\%$$
                </div>
            </details>
        `
    },
    {
        id: "k9-048", niveau: "ga",
        category: "daten",
        question: "Wie teile ich Daten sinnvoll in Klassen ein?",
        answer: `
            <h4>Klasseneinteilung</h4>
            <ul>
                <li>Alle Klassen gleich breit, lückenlos, ohne Überschneidung</li>
                <li>Faustregel: 5 bis 10 Klassen</li>
                <li>Eindeutige Grenzen festlegen (z. B. „von 10 bis unter 20")</li>
            </ul>
            <p>Zu wenige Klassen verwischen das Bild, zu viele zerfasern es.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Körpergrößen von 152 cm bis 189 cm:
                    Klassenbreite 5 cm, also 150–155, 155–160, …, 185–190.
                </div>
            </details>
        `
    },
    {
        id: "k9-049", niveau: "ga",
        category: "daten",
        question: "Wie lese ich ein Histogramm?",
        answer: `
            <h4>Histogramm</h4>
            <p>Die Säulen stehen direkt nebeneinander, weil die Klassen lückenlos aneinandergrenzen. Bei gleicher Klassenbreite ist die Höhe die Häufigkeit der Klasse.</p>
            <ul>
                <li>Höchste Säule: Klasse mit den meisten Werten</li>
                <li>Summe aller Säulenhöhen: Stichprobenumfang \\( n \\)</li>
                <li>Anders als das Balkendiagramm zeigt es <strong>gruppierte</strong> Daten</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Klassen 150–155: 4, 155–160: 9, 160–165: 12, 165–170: 5<br>
                    $$n = 4+9+12+5 = 30$$
                    Anteil in der höchsten Klasse: \\( \\frac{12}{30} = 40\\,\\% \\).
                </div>
            </details>
        `
    },
    {
        id: "k9-050", niveau: "ga",
        category: "daten",
        question: "Wie berechne ich Mittelwert, Median und Modalwert?",
        answer: `
            <h4>Lagemaße</h4>
            <div class="formula-box">
                $$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$
            </div>
            <ul>
                <li><strong>Median</strong>: mittlerer Wert der <em>geordneten</em> Liste; bei geradem \\( n \\) der Durchschnitt der beiden mittleren</li>
                <li><strong>Modalwert</strong>: der häufigste Wert</li>
            </ul>
            <p>Der Median ist unempfindlich gegen Ausreißer, das Stichprobenmittel nicht.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Daten: 2; 3; 3; 4; 18
                    $$\\bar{x} = \\frac{30}{5} = 6, \\quad \\text{Median } = 3$$
                    Modalwert 3. Der Ausreißer 18 zieht nur den Mittelwert hoch.
                </div>
            </details>
        `
    },
    {
        id: "k9-051", niveau: "ga",
        category: "daten",
        question: "Wie berechne ich Spannweite und Standardabweichung?",
        answer: `
            <h4>Streumaße</h4>
            <div class="formula-box">
                $$R = x_{\\max} - x_{\\min}$$
                $$s = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}\\left(x_i - \\bar{x}\\right)^2}$$
            </div>
            <p>Beide messen, wie weit die Daten streuen. Kleines \\( s \\) heißt: die Werte liegen dicht am Mittelwert.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Daten: 2; 4; 4; 6, also \\( \\bar{x} = 4 \\):
                    $$R = 6 - 2 = 4$$
                    $$s = \\sqrt{\\frac{4+0+0+4}{4}} = \\sqrt{2} \\approx 1{,}41$$
                </div>
            </details>
        `
    },
    {
        id: "k9-052", niveau: "ga",
        category: "daten",
        question: "Wie lese und zeichne ich einen Boxplot?",
        answer: `
            <h4>Boxplot</h4>
            <p>Fünf Werte bestimmen das Bild: Minimum, unteres Quartil \\( Q_1 \\), Median, oberes Quartil \\( Q_3 \\), Maximum.</p>
            <ul>
                <li>Die Box reicht von \\( Q_1 \\) bis \\( Q_3 \\) und enthält die mittleren 50 % der Daten</li>
                <li>Der Strich in der Box ist der Median</li>
                <li>Die Antennen reichen zu Minimum und Maximum</li>
                <li>Boxbreite \\( Q_3 - Q_1 \\) heißt Interquartilsabstand</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Daten: 1; 3; 4; 6; 7; 9; 12<br>
                    Median 6, \\( Q_1 = 3 \\), \\( Q_3 = 9 \\), Minimum 1, Maximum 12.<br>
                    Box von 3 bis 9, Interquartilsabstand 6.
                </div>
            </details>
        `
    }
    ]
};
