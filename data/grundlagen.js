// Repetitio-Deck: Rechengrundlagen — Reparatur-Deck für die Oberstufe.
// Kein Klassenstufen-Deck: der Stoff stammt aus Klasse 5 bis 7, die Beispiele aus der Oberstufe.
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["grundlagen"] = {
    title: "Rechengrundlagen",
    subtitle: "Brüche, Vorzeichen, Einheiten — was in der Oberstufe stillschweigend vorausgesetzt wird",
    categories: {
        brueche: "Bruchrechnung",
        vorzeichen: "Vorzeichen & Klammern",
        terme: "Termstruktur & Vorrang",
        dreisatz: "Dreisatz & Anteile",
        groessen: "Größen & Einheiten",
        runden: "Runden & Überschlag",
        teiler: "Teiler & Faktorisieren"
    },
    cards: [
    // ── Bruchrechnung ───────────────────────────────────────────────────────
    {
        id: "g-001", niveau: "ga",
        category: "brueche",
        question: "Wie addiere und subtrahiere ich Brüche?",
        answer: `
            <h4>Gleichnamig machen</h4>
            <div class="formula-box">
                $$\\frac{a}{b} + \\frac{c}{d} = \\frac{a \\cdot d + c \\cdot b}{b \\cdot d}$$
            </div>
            <p>Erst auf den Hauptnenner erweitern, dann <strong>nur die Zähler</strong> addieren. Der Nenner wird nie addiert.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$$
                    Mit Variablen, wie es bei Ableitungen vorkommt:
                    $$\\frac{1}{x} + \\frac{1}{x^2} = \\frac{x+1}{x^2}$$
                </div>
            </details>
        `
    },
    {
        id: "g-002", niveau: "ga",
        category: "brueche",
        question: "Wie multipliziere und dividiere ich Brüche?",
        answer: `
            <h4>Mal und Geteilt</h4>
            <div class="formula-box">
                $$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$
                $$\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$$
            </div>
            <p>Beim Multiplizieren braucht man <strong>keinen</strong> Hauptnenner. Geteilt wird mit dem Kehrwert.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{24}{36} = \\frac{2}{3}$$
                    $$\\frac{5}{6} : \\frac{2}{3} = \\frac{5}{6} \\cdot \\frac{3}{2} = \\frac{5}{4}$$
                </div>
            </details>
        `
    },
    {
        id: "g-003", niveau: "ga",
        category: "brueche",
        question: "Wie löse ich einen Doppelbruch auf?",
        answer: `
            <h4>Doppelbruch</h4>
            <div class="formula-box">
                $$\\frac{\\;\\frac{a}{b}\\;}{\\frac{c}{d}} = \\frac{a}{b} \\cdot \\frac{d}{c}$$
            </div>
            <p>Der Hauptbruchstrich ist das Geteiltzeichen: Zählerbruch mal Kehrwert des Nennerbruchs. Entscheidend ist, welcher Strich der lange ist.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{\\;\\frac{3}{4}\\;}{\\frac{1}{2}} = \\frac{3}{4} \\cdot 2 = \\frac{3}{2}$$
                    Typisch bei der Quotientenregel:
                    $$\\frac{\\;\\frac{1}{x}\\;}{x^2} = \\frac{1}{x^3}$$
                </div>
            </details>
        `
    },
    {
        id: "g-004", niveau: "ga",
        category: "brueche",
        question: "Wann darf ich in einem Bruch kürzen?",
        answer: `
            <h4>Kürzen</h4>
            <p>Gekürzt wird nur, was in Zähler <em>und</em> Nenner <strong>Faktor</strong> ist. Steht oben oder unten eine Summe, muss man sie zuerst in ein Produkt verwandeln.</p>
            <div class="formula-box">
                $$\\text{Aus Summen kürzen nur die Dummen.}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Falsch: \\( \\dfrac{x+3}{x} = 3 \\) — hier ist \\( x \\) kein Faktor des Zählers.<br>
                    Richtig:
                    $$\\frac{x^2+3x}{x} = \\frac{x(x+3)}{x} = x+3$$
                </div>
            </details>
        `
    },
    {
        id: "g-005", niveau: "ga",
        category: "brueche",
        question: "Wie teile ich eine Summe durch eine Zahl oder Variable?",
        answer: `
            <h4>Gliedweise teilen</h4>
            <div class="formula-box">
                $$\\frac{a+b}{c} = \\frac{a}{c} + \\frac{b}{c}$$
            </div>
            <p>Diese Richtung ist erlaubt — <strong>jedes</strong> Glied wird geteilt. Umgekehrt gilt es nicht: \\( \\dfrac{a}{b+c} \\) darf man nicht aufspalten.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Vor dem Ableiten umformen:
                    $$\\frac{6x^2+4x}{2x} = 3x + 2$$
                    $$\\frac{x^3 - x}{x^2} = x - \\frac{1}{x} = x - x^{-1}$$
                </div>
            </details>
        `
    },
    {
        id: "g-006", niveau: "ga",
        category: "brueche",
        question: "Wie werde ich Brüche in einer Gleichung los?",
        answer: `
            <h4>Mit dem Hauptnenner multiplizieren</h4>
            <ol>
                <li>Definitionsbereich prüfen: Nenner dürfen nicht null werden</li>
                <li>Beide Seiten mit dem Hauptnenner multiplizieren — <strong>jedes</strong> Glied</li>
                <li>Gleichung ohne Brüche lösen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{x}{3} + \\frac{x}{4} = 7 \\quad | \\cdot 12$$
                    $$4x + 3x = 84 \\;\\Rightarrow\\; x = 12$$
                </div>
            </details>
        `
    },
    {
        id: "g-007", niveau: "ga",
        category: "brueche",
        question: "Wie wandle ich zwischen Bruch, Dezimalzahl und Prozent um?",
        answer: `
            <h4>Drei Schreibweisen</h4>
            <div class="formula-box">
                $$\\frac{3}{4} = 0{,}75 = 75\\,\\%$$
            </div>
            <p>Bruch zu Dezimalzahl: Zähler durch Nenner. Dezimalzahl zu Prozent: mal 100.</p>
            <p>In Zwischenrechnungen lieber den Bruch behalten — er ist exakt, die gerundete Dezimalzahl nicht.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{1}{3} = 0{,}\\overline{3} \\approx 33{,}3\\,\\%$$
                    $$\\frac{5}{8} = 0{,}625 = 62{,}5\\,\\%$$
                </div>
            </details>
        `
    },
    // ── Vorzeichen & Klammern ───────────────────────────────────────────────
    {
        id: "g-008", niveau: "ga",
        category: "vorzeichen",
        question: "Welche Vorzeichenregeln gelten beim Multiplizieren?",
        answer: `
            <h4>Vorzeichen bei Mal und Geteilt</h4>
            <div class="formula-box">
                $$(+) \\cdot (+) = +, \\qquad (-) \\cdot (-) = +$$
                $$(+) \\cdot (-) = -, \\qquad (-) \\cdot (+) = -$$
            </div>
            <p>Gleiche Vorzeichen ergeben Plus, verschiedene Minus. Bei mehreren Faktoren: eine gerade Anzahl von Minuszeichen ergibt Plus.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$(-2) \\cdot (-3) \\cdot (-4) = -24$$
                    $$\\frac{-12}{-3} = 4$$
                </div>
            </details>
        `
    },
    {
        id: "g-009", niveau: "ga",
        category: "vorzeichen",
        question: "Was passiert mit einem Minus vor der Klammer?",
        answer: `
            <h4>Klammer auflösen</h4>
            <div class="formula-box">
                $$-(a - b + c) = -a + b - c$$
            </div>
            <p><strong>Alle</strong> Vorzeichen in der Klammer kehren sich um — nicht nur das erste. Das ist der häufigste Fehler beim Einsetzen von Integralgrenzen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Obere minus untere Grenze:
                    $$\\left(8 - 4\\right) - \\left(1 - 2\\right) = 4 - (-1) = 5$$
                    $$5 - (2x - 3) = 8 - 2x$$
                </div>
            </details>
        `
    },
    {
        id: "g-010", niveau: "ga",
        category: "vorzeichen",
        question: "Was ist der Unterschied zwischen \\( (-2)^4 \\) und \\( -2^4 \\)?",
        answer: `
            <h4>Vorzeichen und Potenz</h4>
            <div class="formula-box">
                $$(-2)^4 = 16, \\qquad -2^4 = -16$$
            </div>
            <p>Ohne Klammer gilt die Potenz nur für die Zahl, das Minus bleibt davor stehen. Mit Klammer wird das Vorzeichen mitpotenziert.</p>
            <p>Merke: negative Basis mit <strong>geradem</strong> Exponenten ergibt Plus, mit ungeradem Minus.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Beim Einsetzen in \\( f(x) = x^4 - x^3 \\) für \\( x = -2 \\):
                    $$f(-2) = (-2)^4 - (-2)^3 = 16 + 8 = 24$$
                </div>
            </details>
        `
    },
    {
        id: "g-011", niveau: "ga",
        category: "vorzeichen",
        question: "Wie rechne ich mit negativen Zahlen bei Plus und Minus?",
        answer: `
            <h4>Addieren und Subtrahieren</h4>
            <div class="formula-box">
                $$a - (-b) = a + b, \\qquad a + (-b) = a - b$$
            </div>
            <p>Zwei Minuszeichen direkt hintereinander werden zu einem Plus. Nützlich als Bild: Minus heißt Richtungswechsel auf der Zahlengeraden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$-3 - (-7) = -3 + 7 = 4$$
                    Differenz zweier Funktionswerte:
                    $$f(2) - f(-1) = 5 - (-3) = 8$$
                </div>
            </details>
        `
    },
    // ── Termstruktur & Vorrang ──────────────────────────────────────────────
    {
        id: "g-012", niveau: "ga",
        category: "terme",
        question: "In welcher Reihenfolge rechne ich?",
        answer: `
            <h4>Vorrangregeln</h4>
            <div class="formula-box">
                $$\\text{Klammer} \\to \\text{Potenz und Wurzel} \\to \\text{Punkt} \\to \\text{Strich}$$
            </div>
            <p>Bruchstrich und Wurzelzeichen wirken wie eine Klammer: was darunter steht, wird zuerst ausgerechnet.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$3 + 4 \\cdot 2^2 = 3 + 16 = 19$$
                    $$\\frac{4+8}{2+1} = \\frac{12}{3} = 4 \\quad (\\text{nicht } 4+4+1)$$
                </div>
            </details>
        `
    },
    {
        id: "g-013", niveau: "ga",
        category: "terme",
        question: "Wie erkenne ich die Struktur eines Terms?",
        answer: `
            <h4>Der letzte Rechenschritt entscheidet</h4>
            <p>Welche Operation würde man <strong>zuletzt</strong> ausführen? Danach heißt der Term Summe, Produkt, Quotient oder Potenz.</p>
            <p>Das bestimmt in der Oberstufe die Ableitungsregel: Produkt heißt Produktregel, Quotient Quotientenregel, Verkettung Kettenregel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( x^2 \\cdot e^x \\): Produkt → Produktregel<br>
                    \\( e^{x^2} \\): Verkettung → Kettenregel<br>
                    \\( x^2 + e^x \\): Summe → gliedweise ableiten
                </div>
            </details>
        `
    },
    {
        id: "g-014", niveau: "ga",
        category: "terme",
        question: "Wie gebe ich Brüche und Exponenten richtig in den Taschenrechner ein?",
        answer: `
            <h4>Klammern setzen</h4>
            <ul>
                <li>Ganzer Zähler und ganzer Nenner gehören in Klammern</li>
                <li>Ein mehrgliedriger Exponent gehört in Klammern</li>
                <li>Negative Zahlen beim Potenzieren einklammern</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( \\dfrac{3+5}{2 \\cdot 4} \\) eingeben als \\( (3+5)/(2 \\cdot 4) = 1 \\);
                    ohne Klammern rechnet der Rechner \\( 3 + \\frac{5}{2} \\cdot 4 = 13 \\).<br>
                    \\( e^{-0{,}5 \\cdot 4} \\) eingeben als \\( e^{\\wedge}(-0{,}5 \\cdot 4) \\).
                </div>
            </details>
        `
    },
    // ── Dreisatz & Anteile ──────────────────────────────────────────────────
    {
        id: "g-015", niveau: "ga",
        category: "dreisatz",
        question: "Wie rechne ich mit dem Dreisatz bei proportionalen Größen?",
        answer: `
            <h4>Proportionaler Dreisatz</h4>
            <p>Doppelt so viel hier heißt doppelt so viel dort. Man geht über die Einheit: erst durch die gegebene Anzahl teilen, dann mit der gesuchten multiplizieren.</p>
            <div class="formula-box">
                $$\\frac{y_1}{x_1} = \\frac{y_2}{x_2}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    7 Stück kosten 21,00, gesucht sind 12 Stück:
                    $$1 \\text{ Stück}: 3{,}00 \\;\\Rightarrow\\; 12 \\text{ Stück}: 36{,}00$$
                </div>
            </details>
        `
    },
    {
        id: "g-016", niveau: "ga",
        category: "dreisatz",
        question: "Wie erkenne ich antiproportionale Zusammenhänge?",
        answer: `
            <h4>Antiproportionaler Dreisatz</h4>
            <p>Mehr hier heißt weniger dort; das <strong>Produkt</strong> bleibt konstant.</p>
            <div class="formula-box">
                $$x_1 \\cdot y_1 = x_2 \\cdot y_2$$
            </div>
            <p>Beim Dreisatz wird deshalb über Kreuz gerechnet, nicht parallel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    4 Personen brauchen 6 Stunden, wie lange brauchen 3 Personen?
                    $$4 \\cdot 6 = 24 \\;\\Rightarrow\\; t = \\frac{24}{3} = 8 \\text{ Stunden}$$
                </div>
            </details>
        `
    },
    {
        id: "g-017", niveau: "ga",
        category: "dreisatz",
        question: "Wie rechne ich Anteile und Prozente sicher aus?",
        answer: `
            <h4>Anteil, Ganzes, Prozentsatz</h4>
            <div class="formula-box">
                $$\\text{Anteil} = \\text{Ganzes} \\cdot \\frac{p}{100}, \\qquad p\\,\\% = \\frac{\\text{Anteil}}{\\text{Ganzes}} \\cdot 100\\,\\%$$
            </div>
            <p>Zuerst klären, was das Ganze ist — in der Stochastik ist das die entscheidende Frage, etwa bei bedingten Wahrscheinlichkeiten.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Von 250 Befragten antworten 40 mit Ja:
                    $$\\frac{40}{250} = 0{,}16 = 16\\,\\%$$
                    Hochrechnung auf 20000: \\( 0{,}16 \\cdot 20000 = 3200 \\).
                </div>
            </details>
        `
    },
    // ── Größen & Einheiten ──────────────────────────────────────────────────
    {
        id: "g-018", niveau: "ga",
        category: "groessen",
        question: "Mit welchem Faktor rechne ich Längen, Flächen und Volumen um?",
        answer: `
            <h4>Umrechnungsfaktoren</h4>
            <div class="formula-box">
                $$\\text{Längen}: 10 \\qquad \\text{Flächen}: 100 \\qquad \\text{Volumen}: 1000$$
            </div>
            <p>Der Faktor der Länge geht quadriert in die Fläche und kubiert in das Volumen ein.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$1 \\text{ m} = 100 \\text{ cm}$$
                    $$1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2$$
                    $$1 \\text{ m}^3 = 1\\,000\\,000 \\text{ cm}^3 = 1000 \\text{ l}$$
                </div>
            </details>
        `
    },
    {
        id: "g-019", niveau: "ga",
        category: "groessen",
        question: "Wie rechne ich Zeit- und Geschwindigkeitseinheiten um?",
        answer: `
            <h4>Zeit und Geschwindigkeit</h4>
            <div class="formula-box">
                $$1 \\text{ h} = 60 \\text{ min} = 3600 \\text{ s}$$
                $$1 \\;\\frac{\\text{m}}{\\text{s}} = 3{,}6 \\;\\frac{\\text{km}}{\\text{h}}$$
            </div>
            <p>Zeitangaben sind nicht dezimal: 1,5 h sind 90 min, aber 1 h 30 min sind nicht „1,30 h".</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$72 \\;\\frac{\\text{km}}{\\text{h}} = 20 \\;\\frac{\\text{m}}{\\text{s}}$$
                    45 min als Dezimalzahl: \\( \\frac{45}{60} = 0{,}75 \\) h.
                </div>
            </details>
        `
    },
    {
        id: "g-020", niveau: "ga",
        category: "groessen",
        question: "Wie behalte ich Einheiten in einer Sachaufgabe im Griff?",
        answer: `
            <h4>Einheiten mitführen</h4>
            <ol>
                <li>Vor dem Rechnen alle Größen in <strong>eine</strong> Einheit bringen</li>
                <li>Die Einheit in jeder Zeile mitschreiben</li>
                <li>Am Ende prüfen: passt die Einheit zur Frage?</li>
            </ol>
            <p>Die Einheit ist zugleich eine Kontrolle: Wer eine Fläche berechnet und cm heraus bekommt, hat einen Fehler gemacht.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zuflussrate \\( 0{,}5 \\;\\frac{\\text{l}}{\\text{min}} \\) über 90 Minuten:
                    $$0{,}5 \\;\\frac{\\text{l}}{\\text{min}} \\cdot 90 \\text{ min} = 45 \\text{ l}$$
                    Die Minuten kürzen sich weg — übrig bleibt Liter.
                </div>
            </details>
        `
    },
    // ── Runden & Überschlag ─────────────────────────────────────────────────
    {
        id: "g-021", niveau: "ga",
        category: "runden",
        question: "Wann und wie runde ich sinnvoll?",
        answer: `
            <h4>Runden</h4>
            <ul>
                <li>Ziffer 0 bis 4: abrunden; 5 bis 9: aufrunden</li>
                <li>Erst im <strong>Endergebnis</strong> runden, Zwischenwerte im Rechner behalten</li>
                <li>Die Genauigkeit an die Aufgabe anpassen: Geld auf zwei Stellen, Winkel auf eine, Wahrscheinlichkeiten meist auf vier</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zwischenwert \\( 2{,}236\\ldots \\) gerundet zu 2,2 und dann weitergerechnet:
                    $$2{,}2^2 = 4{,}84 \\quad \\text{statt} \\quad 5$$
                    Der Fehler wächst mit jedem weiteren Schritt.
                </div>
            </details>
        `
    },
    {
        id: "g-022", niveau: "ga",
        category: "runden",
        question: "Wie kontrolliere ich ein Ergebnis mit einem Überschlag?",
        answer: `
            <h4>Überschlag</h4>
            <p>Alle Zahlen grob runden und im Kopf rechnen. Weicht das Ergebnis um eine Zehnerpotenz ab, steckt meist ein Tippfehler oder eine fehlende Klammer dahinter.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( 19{,}8 \\cdot 4{,}1 \\): Überschlag \\( 20 \\cdot 4 = 80 \\), genau 81,18 — plausibel.<br>
                    Käme 8,1 heraus, wäre eine Stelle verrutscht.
                </div>
            </details>
        `
    },
    // ── Teiler & Faktorisieren ──────────────────────────────────────────────
    {
        id: "g-023", niveau: "ga",
        category: "teiler",
        question: "Wozu brauche ich Primfaktoren, ggT und kgV?",
        answer: `
            <h4>Zerlegen</h4>
            <p>Die Primfaktorzerlegung liefert beides: das <strong>kgV</strong> ist der kleinste gemeinsame Nenner beim Bruchrechnen, der <strong>ggT</strong> der Faktor, mit dem man kürzt.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$12 = 2^2 \\cdot 3, \\qquad 18 = 2 \\cdot 3^2$$
                    $$\\text{ggT} = 6, \\qquad \\text{kgV} = 36$$
                    Damit: \\( \\frac{1}{12} + \\frac{1}{18} = \\frac{3}{36} + \\frac{2}{36} = \\frac{5}{36} \\).
                </div>
            </details>
        `
    },
    {
        id: "g-024", niveau: "ga",
        category: "teiler",
        question: "Wie rate ich eine Nullstelle einer ganzrationalen Funktion?",
        answer: `
            <h4>Teiler des absoluten Gliedes</h4>
            <p>Hat ein Polynom mit ganzzahligen Koeffizienten eine ganzzahlige Nullstelle, so ist sie ein <strong>Teiler des absoluten Gliedes</strong>. Man probiert diese Teiler der Reihe nach, positiv und negativ.</p>
            <p>Danach geht es mit Polynomdivision oder Horner-Schema weiter.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( f(x) = x^3 - 4x^2 + x + 6 \\), absolutes Glied 6.<br>
                    Teiler: \\( \\pm 1, \\pm 2, \\pm 3, \\pm 6 \\).
                    $$f(-1) = -1 - 4 - 1 + 6 = 0$$
                    Also ist \\( x = -1 \\) eine Nullstelle.
                </div>
            </details>
        `
    }
    ]
};
