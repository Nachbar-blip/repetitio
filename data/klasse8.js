// Repetitio-Deck: Klasse 8 — Stoffverteilungsplan Mathematik Klasse 8, Gymnasium Sachsen-Anhalt
// Alle Karten niveau "ga": Klassenstufen-Decks kennen kein gA/eA.
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["klasse8"] = {
    title: "Klasse 8",
    subtitle: "Terme, Ähnlichkeit, Pythagoras, lineare Funktionen, Körper, Zufall",
    categories: {
        terme: "Terme & Variablen",
        aehnlich: "Ähnlichkeit",
        pythagoras: "Satzgruppe des Pythagoras",
        linear: "Lineare Funktionen",
        koerper: "Körperberechnung",
        zufall: "Mehrstufige Zufallsversuche"
    },
    cards: [
    // ── Terme & Variablen ───────────────────────────────────────────────────
    {
        id: "k8-001", niveau: "ga",
        category: "terme",
        question: "Wie erkenne ich die Struktur eines Terms?",
        answer: `
            <h4>Termarten</h4>
            <p>Entscheidend ist die <strong>zuletzt</strong> auszuführende Rechenoperation — danach heißt der Term Summe, Differenz, Produkt, Quotient oder Potenz.</p>
            <div class="formula-box">
                $$3x + 5 \\;\\text{Summe} \\qquad 3 \\cdot (x+5) \\;\\text{Produkt}$$
            </div>
            <p>Das entscheidet auch, welche Regel man anwenden darf: ausklammern nur bei Summen, kürzen nur bei Produkten.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( 2a^2 - 4 \\): Differenz<br>
                    \\( (a+b)^2 \\): Potenz<br>
                    \\( \\dfrac{a+b}{c} \\): Quotient
                </div>
            </details>
        `
    },
    {
        id: "k8-002", niveau: "ga",
        category: "terme",
        question: "Wie berechne ich den Wert eines Terms?",
        answer: `
            <h4>Termwert</h4>
            <ol>
                <li>Für jede Variable den Zahlenwert in <strong>Klammern</strong> einsetzen</li>
                <li>Nach den Vorrangregeln rechnen: Klammer vor Potenz vor Punkt vor Strich</li>
            </ol>
            <p>Die Klammern beim Einsetzen sparen Vorzeichenfehler bei negativen Zahlen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( T = 3x^2 - 2x \\) für \\( x = -2 \\):
                    $$T = 3 \\cdot (-2)^2 - 2 \\cdot (-2) = 12 + 4 = 16$$
                </div>
            </details>
        `
    },
    {
        id: "k8-003", niveau: "ga",
        category: "terme",
        question: "Wie bestimme ich den Definitionsbereich eines Bruchterms?",
        answer: `
            <h4>Definitionsbereich</h4>
            <p>Durch null darf man nicht teilen. Man setzt den <strong>Nenner</strong> gleich null und schließt diese Werte aus.</p>
            <div class="formula-box">
                $$\\text{Nenner} = 0 \\;\\Rightarrow\\; \\text{Wert ausschließen}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$T = \\frac{3x}{x-4} \\;\\Rightarrow\\; x \\neq 4$$
                    $$T = \\frac{5}{x^2-9} \\;\\Rightarrow\\; x \\neq 3 \\;\\text{und}\\; x \\neq -3$$
                </div>
            </details>
        `
    },
    {
        id: "k8-004", niveau: "ga",
        category: "terme",
        question: "Wie fasse ich Terme zusammen?",
        answer: `
            <h4>Gleichartige Glieder</h4>
            <p>Nur Glieder mit <strong>genau derselben</strong> Variablenpotenz dürfen zusammengefasst werden. Die Vorzeichen gehören zum Glied.</p>
            <div class="formula-box">
                $$3a + 5a = 8a, \\qquad 3a + 5b \\;\\text{bleibt stehen}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$4x^2 - 7x + 2x^2 + 5x = 6x^2 - 2x$$
                    \\( x^2 \\) und \\( x \\) sind nicht gleichartig.
                </div>
            </details>
        `
    },
    {
        id: "k8-005", niveau: "ga",
        category: "terme",
        question: "Wie löse ich Klammern auf?",
        answer: `
            <h4>Ausmultiplizieren</h4>
            <div class="formula-box">
                $$a(b+c) = ab + ac$$
                $$(a+b)(c+d) = ac + ad + bc + bd$$
            </div>
            <p>Steht ein Minus vor der Klammer, kehren sich <strong>alle</strong> Vorzeichen in der Klammer um.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$5 - (2x - 3) = 5 - 2x + 3 = 8 - 2x$$
                    $$(x+2)(x-5) = x^2 - 3x - 10$$
                </div>
            </details>
        `
    },
    {
        id: "k8-006", niveau: "ga",
        category: "terme",
        question: "Wie klammere ich aus?",
        answer: `
            <h4>Ausklammern</h4>
            <p>Man sucht den größten gemeinsamen Faktor aller Glieder — Zahl und Variable — und zieht ihn vor die Klammer.</p>
            <div class="formula-box">
                $$ab + ac = a(b+c)$$
            </div>
            <p>Probe: die Klammer wieder ausmultiplizieren.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$12x^3 - 18x^2 = 6x^2(2x - 3)$$
                    $$5a + 5b - 5c = 5(a+b-c)$$
                </div>
            </details>
        `
    },
    {
        id: "k8-007", niveau: "ga",
        category: "terme",
        question: "Wie lauten die binomischen Formeln?",
        answer: `
            <h4>Binomische Formeln</h4>
            <div class="formula-box">
                $$(a+b)^2 = a^2 + 2ab + b^2$$
                $$(a-b)^2 = a^2 - 2ab + b^2$$
                $$(a+b)(a-b) = a^2 - b^2$$
            </div>
            <p>Häufigster Fehler: das mittlere Glied \\( 2ab \\) vergessen. \\( (a+b)^2 \\) ist <strong>nicht</strong> \\( a^2+b^2 \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$(3x+4)^2 = 9x^2 + 24x + 16$$
                    $$(2a-5)(2a+5) = 4a^2 - 25$$
                </div>
            </details>
        `
    },
    {
        id: "k8-008", niveau: "ga",
        category: "terme",
        question: "Wie nutze ich die binomischen Formeln rückwärts?",
        answer: `
            <h4>Faktorisieren</h4>
            <p>Erkennt man in einem Term die Bauform einer binomischen Formel, lässt er sich als Produkt schreiben.</p>
            <ul>
                <li>Zwei Quadrate mit Minus dazwischen → dritte binomische Formel</li>
                <li>Zwei Quadrate und passendes Mittelglied → erste oder zweite</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^2 - 49 = (x+7)(x-7)$$
                    $$x^2 + 10x + 25 = (x+5)^2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-009", niveau: "ga",
        category: "terme",
        question: "Wie kürze ich einen Bruchterm?",
        answer: `
            <h4>Kürzen</h4>
            <p>Gekürzt wird nur, was <strong>Faktor</strong> von Zähler und Nenner ist. Dazu müssen beide zuerst als Produkt geschrieben werden.</p>
            <div class="formula-box">
                <em>„Aus Summen kürzen nur die Dummen.“</em>
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{3x+6}{x+2} = \\frac{3(x+2)}{x+2} = 3, \\quad x \\neq -2$$
                    $$\\frac{x^2-9}{x-3} = \\frac{(x+3)(x-3)}{x-3} = x+3$$
                </div>
            </details>
        `
    },
    {
        id: "k8-010", niveau: "ga",
        category: "terme",
        question: "Wie beschreibe ich einen Sachverhalt mit einem Term?",
        answer: `
            <h4>Terme aufstellen</h4>
            <ol>
                <li>Festlegen, wofür die Variable steht — mit Einheit</li>
                <li>Den Text Satz für Satz in Rechenzeichen übersetzen</li>
                <li>Mit einer Beispielzahl prüfen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Grundgebühr 5 €, je Stunde 3 €, \\( x \\) = Stunden:
                    $$K(x) = 3x + 5$$
                    Probe für 4 Stunden: \\( 3 \\cdot 4 + 5 = 17 \\) €.
                </div>
            </details>
        `
    },
    {
        id: "k8-011", niveau: "ga",
        category: "terme",
        question: "Wie zeige ich mit Variablen, dass eine Aussage immer gilt?",
        answer: `
            <h4>Direkter Beweis</h4>
            <ol>
                <li>Die beteiligten Zahlen allgemein darstellen (z. B. gerade Zahl als \\( 2n \\))</li>
                <li>Den Term aufstellen und umformen</li>
                <li>Am Ergebnis die Behauptung ablesen</li>
            </ol>
            <p>Ein Beispiel beweist nichts — ein einziges Gegenbeispiel widerlegt dagegen eine Allaussage.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Behauptung: Die Summe dreier aufeinanderfolgender Zahlen ist durch 3 teilbar.
                    $$n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$$
                    Das Ergebnis ist ein Vielfaches von 3. ∎
                </div>
            </details>
        `
    },
    {
        id: "k8-012", niveau: "ga",
        category: "terme",
        question: "Wie stelle ich eine Formel nach einer anderen Größe um?",
        answer: `
            <h4>Formel umstellen</h4>
            <p>Wie beim Gleichungslösen: auf beiden Seiten dieselbe Operation ausführen, bis die gesuchte Größe allein steht.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$A = \\frac{g \\cdot h}{2} \\quad | \\cdot 2$$
                    $$2A = g \\cdot h \\quad | : g$$
                    $$h = \\frac{2A}{g}$$
                </div>
            </details>
        `
    },
    {
        id: "k8-013", niveau: "ga",
        category: "terme",
        question: "Wie prüfe ich, ob eine Allaussage wahr ist?",
        answer: `
            <h4>Wahr oder falsch</h4>
            <ul>
                <li><strong>Widerlegen</strong>: ein einziges Gegenbeispiel genügt</li>
                <li><strong>Beweisen</strong>: allgemeine Umformung mit Variablen, kein Beispiel</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    „Das Quadrat einer Zahl ist stets größer als die Zahl selbst."<br>
                    Gegenbeispiel \\( x = 0{,}5 \\): \\( 0{,}25 < 0{,}5 \\) — die Aussage ist falsch.
                </div>
            </details>
        `
    },
    // ── Ähnlichkeit ─────────────────────────────────────────────────────────
    {
        id: "k8-014", niveau: "ga",
        category: "aehnlich",
        question: "Wie rechne ich mit einem Maßstab?",
        answer: `
            <h4>Maßstab</h4>
            <div class="formula-box">
                $$\\text{Maßstab } 1 : m \\;\\Rightarrow\\; \\text{Wirklichkeit} = \\text{Karte} \\cdot m$$
            </div>
            <p>Verkleinerung \\( 1 : m \\), Vergrößerung \\( m : 1 \\). Vor dem Rechnen die Einheiten angleichen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Maßstab \\( 1 : 25\\,000 \\), auf der Karte 4 cm:
                    $$4 \\text{ cm} \\cdot 25\\,000 = 100\\,000 \\text{ cm} = 1 \\text{ km}$$
                </div>
            </details>
        `
    },
    {
        id: "k8-015", niveau: "ga",
        category: "aehnlich",
        question: "Was ist eine zentrische Streckung?",
        answer: `
            <h4>Zentrische Streckung</h4>
            <p>Jeder Punkt \\( P \\) wird vom Streckzentrum \\( Z \\) aus auf einem Strahl verschoben, sodass gilt:</p>
            <div class="formula-box">
                $$\\overline{ZP'} = k \\cdot \\overline{ZP}$$
            </div>
            <ul>
                <li>\\( k > 1 \\): Vergrößerung, \\( 0 < k < 1 \\): Verkleinerung</li>
                <li>Alle Strecken werden mit \\( k \\) multipliziert, alle Winkel bleiben gleich</li>
                <li>Der Flächeninhalt wächst mit \\( k^2 \\)</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( k = 3 \\), Originalstrecke 4 cm, Fläche 5 cm²:
                    $$\\text{Bildstrecke } 12 \\text{ cm}, \\quad \\text{Bildfläche } 45 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-016", niveau: "ga",
        category: "aehnlich",
        question: "Wann sind zwei Figuren zueinander ähnlich?",
        answer: `
            <h4>Ähnlichkeit</h4>
            <p>Zwei Figuren sind ähnlich (Symbol \\( \\sim \\)), wenn sie in allen Winkeln übereinstimmen und alle entsprechenden Seiten dasselbe Verhältnis haben.</p>
            <div class="formula-box">
                $$\\frac{a'}{a} = \\frac{b'}{b} = \\frac{c'}{c} = k$$
            </div>
            <p>Kongruent ist der Sonderfall \\( k = 1 \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Dreieck mit 3; 4; 5 und Dreieck mit 6; 8; 10:
                    $$k = 2 \\;\\Rightarrow\\; \\text{ähnlich}$$
                </div>
            </details>
        `
    },
    {
        id: "k8-017", niveau: "ga",
        category: "aehnlich",
        question: "Woran erkenne ich ähnliche Dreiecke?",
        answer: `
            <h4>Ähnlichkeitssätze</h4>
            <ul>
                <li>Zwei Winkel stimmen überein (dann auch der dritte)</li>
                <li>Alle drei Seitenverhältnisse stimmen überein</li>
                <li>Zwei Seitenverhältnisse und der eingeschlossene Winkel stimmen überein</li>
            </ul>
            <p>In der Praxis am häufigsten: zwei gleiche Winkel — etwa bei parallelen Linien im Dreieck.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Dreieck mit \\( 40^\\circ \\) und \\( 60^\\circ \\), zweites mit \\( 60^\\circ \\) und \\( 80^\\circ \\):<br>
                    beide haben \\( 40^\\circ, 60^\\circ, 80^\\circ \\) — ähnlich.
                </div>
            </details>
        `
    },
    {
        id: "k8-018", niveau: "ga",
        category: "aehnlich",
        question: "Wie berechne ich fehlende Längen in ähnlichen Figuren?",
        answer: `
            <h4>Verhältnisgleichung</h4>
            <ol>
                <li>Entsprechende Seiten einander zuordnen</li>
                <li>Verhältnisgleichung aufstellen</li>
                <li>Über Kreuz multiplizieren und auflösen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{x}{6} = \\frac{15}{9}$$
                    $$9x = 90 \\;\\Rightarrow\\; x = 10$$
                </div>
            </details>
        `
    },
    {
        id: "k8-019", niveau: "ga",
        category: "aehnlich",
        question: "Wie nutze ich die Strahlensätze?",
        answer: `
            <h4>Strahlensätze</h4>
            <p>Zwei Strahlen von einem Punkt \\( Z \\) aus werden von zwei parallelen Geraden geschnitten. Dann gilt:</p>
            <div class="formula-box">
                $$\\frac{\\overline{ZA'}}{\\overline{ZA}} = \\frac{\\overline{ZB'}}{\\overline{ZB}} = \\frac{\\overline{A'B'}}{\\overline{AB}}$$
            </div>
            <p>Wichtig: Abschnitte immer <strong>vom Scheitel aus</strong> messen, nicht Teilstücke vermischen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( \\overline{ZA} = 4 \\), \\( \\overline{ZA'} = 10 \\), \\( \\overline{AB} = 6 \\):
                    $$\\overline{A'B'} = 6 \\cdot \\frac{10}{4} = 15$$
                </div>
            </details>
        `
    },
    {
        id: "k8-020", niveau: "ga",
        category: "aehnlich",
        question: "Wie messe ich mit Ähnlichkeit unzugängliche Längen?",
        answer: `
            <h4>Anwendung</h4>
            <p>Zwei ähnliche Dreiecke suchen — etwa aus Gegenstand und Schatten oder über einen Messstab — und die Verhältnisgleichung aufstellen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Stab 1,5 m wirft 2 m Schatten, der Baum 18 m:
                    $$\\frac{h}{18} = \\frac{1{,}5}{2} \\;\\Rightarrow\\; h = 13{,}5 \\text{ m}$$
                </div>
            </details>
        `
    },
    {
        id: "k8-021", niveau: "ga",
        category: "aehnlich",
        question: "Wie ändern sich Umfang, Fläche und Volumen beim Strecken?",
        answer: `
            <h4>Streckungsfaktor und Maße</h4>
            <div class="formula-box">
                $$\\text{Längen} \\cdot k, \\qquad \\text{Flächen} \\cdot k^2, \\qquad \\text{Volumen} \\cdot k^3$$
            </div>
            <p>Deshalb wird ein doppelt so großes Modell viermal so schwer zu bemalen und achtmal so schwer zu füllen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( k = 2 \\), Würfel mit \\( a = 3 \\) cm:
                    $$O: 54 \\to 216 \\text{ cm}^2, \\quad V: 27 \\to 216 \\text{ cm}^3$$
                </div>
            </details>
        `
    },
    // ── Satzgruppe des Pythagoras ───────────────────────────────────────────
    {
        id: "k8-022", niveau: "ga",
        category: "pythagoras",
        question: "Was sind Katheten und Hypotenuse?",
        answer: `
            <h4>Bezeichnungen</h4>
            <p>Im rechtwinkligen Dreieck heißen die beiden Seiten, die den rechten Winkel bilden, <strong>Katheten</strong>. Die Seite gegenüber dem rechten Winkel heißt <strong>Hypotenuse</strong> und ist stets die längste Seite.</p>
            <p>Der Höhenfußpunkt teilt die Hypotenuse in die <strong>Hypotenusenabschnitte</strong> \\( p \\) und \\( q \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Rechter Winkel bei \\( C \\): Katheten \\( a \\) und \\( b \\), Hypotenuse \\( c \\),
                    Höhe \\( h \\) auf \\( c \\), Abschnitte \\( p + q = c \\).
                </div>
            </details>
        `
    },
    {
        id: "k8-023", niveau: "ga",
        category: "pythagoras",
        question: "Wie lautet der Satz des Pythagoras?",
        answer: `
            <h4>Satz des Pythagoras</h4>
            <div class="formula-box">
                $$a^2 + b^2 = c^2$$
            </div>
            <p>Die Quadrate über den Katheten ergeben zusammen das Quadrat über der Hypotenuse. Gilt <strong>nur</strong> im rechtwinkligen Dreieck, und \\( c \\) ist immer die Seite gegenüber dem rechten Winkel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( a = 6 \\), \\( b = 8 \\):
                    $$c = \\sqrt{36+64} = \\sqrt{100} = 10$$
                </div>
            </details>
        `
    },
    {
        id: "k8-024", niveau: "ga",
        category: "pythagoras",
        question: "Wie berechne ich eine Kathete?",
        answer: `
            <h4>Nach einer Kathete umstellen</h4>
            <div class="formula-box">
                $$a = \\sqrt{c^2 - b^2}$$
            </div>
            <p>Hier wird subtrahiert, nicht addiert — zuerst prüfen, welche Seite die Hypotenuse ist.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( c = 13 \\), \\( b = 5 \\):
                    $$a = \\sqrt{169 - 25} = \\sqrt{144} = 12$$
                </div>
            </details>
        `
    },
    {
        id: "k8-025", niveau: "ga",
        category: "pythagoras",
        question: "Wie prüfe ich, ob ein Dreieck rechtwinklig ist?",
        answer: `
            <h4>Umkehrung des Satzes</h4>
            <p>Gilt für die längste Seite \\( c \\) die Gleichung \\( a^2+b^2 = c^2 \\), so ist das Dreieck rechtwinklig — der rechte Winkel liegt \\( c \\) gegenüber.</p>
            <p>Ist \\( a^2+b^2 > c^2 \\), ist das Dreieck spitzwinklig, bei \\( < \\) stumpfwinklig.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    5; 12; 13: \\( 25+144 = 169 \\) ✓ rechtwinklig<br>
                    4; 6; 8: \\( 16+36 = 52 < 64 \\) → stumpfwinklig
                </div>
            </details>
        `
    },
    {
        id: "k8-026", niveau: "ga",
        category: "pythagoras",
        question: "Was sind pythagoreische Zahlentripel?",
        answer: `
            <h4>Zahlentripel</h4>
            <p>Drei natürliche Zahlen mit \\( a^2+b^2 = c^2 \\). Jedes Vielfache eines Tripels ist wieder eines.</p>
            <div class="formula-box">
                $$(3;4;5), \quad (5;12;13)$$
                $$(8;15;17), \quad (7;24;25)$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Aus \\( (3;4;5) \\) wird mit dem Faktor 4:
                    $$(12;16;20): \\; 144+256 = 400$$
                </div>
            </details>
        `
    },
    {
        id: "k8-027", niveau: "ga",
        category: "pythagoras",
        question: "Wie lautet der Höhensatz?",
        answer: `
            <h4>Höhensatz</h4>
            <div class="formula-box">
                $$h^2 = p \\cdot q$$
            </div>
            <p>Die Höhe auf der Hypotenuse zum Quadrat ist das Produkt der beiden Hypotenusenabschnitte.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( p = 4 \\), \\( q = 9 \\):
                    $$h = \\sqrt{36} = 6$$
                </div>
            </details>
        `
    },
    {
        id: "k8-028", niveau: "ga",
        category: "pythagoras",
        question: "Wie lautet der Kathetensatz?",
        answer: `
            <h4>Kathetensatz</h4>
            <div class="formula-box">
                $$a^2 = c \\cdot p, \\qquad b^2 = c \\cdot q$$
            </div>
            <p>Jede Kathete zum Quadrat ist das Produkt aus der Hypotenuse und dem <strong>anliegenden</strong> Hypotenusenabschnitt.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( c = 13 \\), \\( p = 4 \\) (anliegend an \\( a \\)):
                    $$a = \\sqrt{13 \\cdot 4} = \\sqrt{52} \\approx 7{,}21$$
                </div>
            </details>
        `
    },
    {
        id: "k8-029", niveau: "ga",
        category: "pythagoras",
        question: "Wie berechne ich Diagonalen in Figuren und Körpern?",
        answer: `
            <h4>Diagonalen</h4>
            <div class="formula-box">
                $$\\text{Rechteck}: d = \\sqrt{a^2+b^2}$$
                $$\\text{Quader}: d = \\sqrt{a^2+b^2+c^2}$$
            </div>
            <p>Die Raumdiagonale entsteht durch zweimaliges Anwenden des Satzes: erst die Flächendiagonale, dann mit der Höhe.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Quader \\( 3 \\times 4 \\times 12 \\):
                    $$d = \\sqrt{9+16+144} = \\sqrt{169} = 13$$
                </div>
            </details>
        `
    },
    {
        id: "k8-030", niveau: "ga",
        category: "pythagoras",
        question: "Wie löse ich eine Sachaufgabe mit dem Satz des Pythagoras?",
        answer: `
            <h4>Vorgehen</h4>
            <ol>
                <li>Skizze anfertigen und das rechtwinklige Dreieck kenntlich machen</li>
                <li>Prüfen, welche Seite die Hypotenuse ist</li>
                <li>Formel ansetzen, rechnen, runden</li>
                <li>Antwortsatz mit Einheit</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Leiter 5 m lang, Fuß 1,4 m von der Wand entfernt:
                    $$h = \\sqrt{25 - 1{,}96} = \\sqrt{23{,}04} = 4{,}8 \\text{ m}$$
                </div>
            </details>
        `
    },
    // ── Lineare Funktionen ──────────────────────────────────────────────────
    {
        id: "k8-031", niveau: "ga",
        category: "linear",
        question: "Was ist eine Funktion?",
        answer: `
            <h4>Funktionsbegriff</h4>
            <p>Eine Funktion ordnet jedem Element des Definitionsbereichs <strong>genau einen</strong> Funktionswert zu.</p>
            <div class="formula-box">
                $$x \\longmapsto f(x)$$
            </div>
            <p>\\( x \\) heißt Argument, \\( f(x) \\) Funktionswert. Am Graphen erkennt man eine Funktion daran, dass jede Senkrechte ihn höchstens einmal trifft.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zuordnung „Anzahl → Preis" ist eine Funktion.<br>
                    Zuordnung „Preis → Ware" meist nicht: zu einem Preis kann es mehrere Waren geben.
                </div>
            </details>
        `
    },
    {
        id: "k8-032", niveau: "ga",
        category: "linear",
        question: "Welche Darstellungsformen einer Funktion gibt es?",
        answer: `
            <h4>Vier Darstellungen</h4>
            <ul>
                <li>Wortvorschrift: „Jedem \\( x \\) wird das Doppelte plus 1 zugeordnet."</li>
                <li>Gleichung: \\( y = 2x+1 \\)</li>
                <li>Wertetabelle</li>
                <li>Graph im Koordinatensystem</li>
            </ul>
            <p>Zwischen den Formen wechseln zu können, ist der Kern des Themas.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = 2x+1 \\):
                    $$x: -1; \\; 0; \\; 1; \\; 2$$
                    $$y: -1; \\; 1; \\; 3; \\; 5$$
                </div>
            </details>
        `
    },
    {
        id: "k8-033", niveau: "ga",
        category: "linear",
        question: "Was bedeuten \\( m \\) und \\( n \\) bei \\( y = mx+n \\)?",
        answer: `
            <h4>Parameter der Geraden</h4>
            <ul>
                <li>\\( m \\): Anstieg — um wie viel \\( y \\) wächst, wenn \\( x \\) um 1 wächst</li>
                <li>\\( n \\): absolutes Glied — der \\( y \\)-Wert bei \\( x = 0 \\), der Schnittpunkt mit der \\( y \\)-Achse</li>
            </ul>
            <p>\\( m > 0 \\): steigend, \\( m < 0 \\): fallend, \\( m = 0 \\): waagerecht.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = -3x + 4 \\): Schnittpunkt \\( (0 \\mid 4) \\), pro Schritt nach rechts geht es 3 nach unten.
                </div>
            </details>
        `
    },
    {
        id: "k8-034", niveau: "ga",
        category: "linear",
        question: "Wie berechne ich den Anstieg aus zwei Punkten?",
        answer: `
            <h4>Differenzenquotient</h4>
            <div class="formula-box">
                $$m = \\frac{y_2 - y_1}{x_2 - x_1}$$
            </div>
            <p>Die Reihenfolge der Punkte ist gleichgültig, solange sie oben und unten dieselbe ist.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( A(1 \\mid 2) \\), \\( B(5 \\mid 10) \\):
                    $$m = \\frac{10-2}{5-1} = \\frac{8}{4} = 2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-035", niveau: "ga",
        category: "linear",
        question: "Wie zeichne ich eine Gerade aus ihrer Gleichung?",
        answer: `
            <h4>Zeichnen mit Steigungsdreieck</h4>
            <ol>
                <li>Punkt \\( (0 \\mid n) \\) auf der \\( y \\)-Achse einzeichnen</li>
                <li>Von dort 1 nach rechts und \\( m \\) nach oben (bei \\( m<0 \\) nach unten)</li>
                <li>Beide Punkte verbinden</li>
            </ol>
            <p>Bei Brüchen: Nenner nach rechts, Zähler nach oben — das vermeidet Schätzen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = \\frac{2}{3}x - 1 \\): Start \\( (0\\mid-1) \\), dann 3 nach rechts und 2 nach oben zu \\( (3\\mid1) \\).
                </div>
            </details>
        `
    },
    {
        id: "k8-036", niveau: "ga",
        category: "linear",
        question: "Wie berechne ich die Nullstelle einer linearen Funktion?",
        answer: `
            <h4>Nullstelle</h4>
            <div class="formula-box">
                $$mx + n = 0 \\;\\Rightarrow\\; x = -\\frac{n}{m}$$
            </div>
            <p>Die Nullstelle ist die Schnittstelle mit der \\( x \\)-Achse; der zugehörige Punkt ist \\( (x \\mid 0) \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = 2x - 6 \\):
                    $$2x - 6 = 0 \\;\\Rightarrow\\; x = 3$$
                    Schnittpunkt mit der \\( x \\)-Achse: \\( (3 \\mid 0) \\).
                </div>
            </details>
        `
    },
    {
        id: "k8-037", niveau: "ga",
        category: "linear",
        question: "Wie bestimme ich die Geradengleichung aus zwei Punkten?",
        answer: `
            <h4>Gleichung aufstellen</h4>
            <ol>
                <li>\\( m \\) mit dem Differenzenquotienten berechnen</li>
                <li>Einen Punkt in \\( y = mx+n \\) einsetzen und \\( n \\) bestimmen</li>
                <li>Mit dem zweiten Punkt die Probe machen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( A(1 \\mid 5) \\), \\( B(3 \\mid 11) \\):
                    $$m = \\frac{11-5}{3-1} = 3$$
                    $$5 = 3 \\cdot 1 + n \\;\\Rightarrow\\; n = 2 \\;\\Rightarrow\\; y = 3x+2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-038", niveau: "ga",
        category: "linear",
        question: "Wie prüfe ich, ob ein Punkt auf einer Geraden liegt?",
        answer: `
            <h4>Punktprobe</h4>
            <p>Koordinaten des Punktes in die Gleichung einsetzen. Entsteht eine wahre Aussage, liegt der Punkt auf der Geraden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( y = 2x-1 \\), \\( P(4 \\mid 7) \\):
                    $$7 = 2 \\cdot 4 - 1 = 7 \\; ✓$$
                    \\( Q(2 \\mid 5) \\): \\( 5 \\neq 3 \\) — liegt nicht auf der Geraden.
                </div>
            </details>
        `
    },
    {
        id: "k8-039", niveau: "ga",
        category: "linear",
        question: "Wie berechne ich den Schnittpunkt zweier Geraden?",
        answer: `
            <h4>Schnittpunkt</h4>
            <ol>
                <li>Beide Gleichungen gleichsetzen</li>
                <li>Nach \\( x \\) auflösen</li>
                <li>\\( x \\) in eine Gleichung einsetzen, das ergibt \\( y \\)</li>
            </ol>
            <p>Sind die Anstiege gleich, schneiden sich die Geraden nicht: sie sind parallel oder identisch.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2x+1 = -x+7 \\;\\Rightarrow\\; 3x = 6 \\;\\Rightarrow\\; x = 2$$
                    $$y = 2 \\cdot 2 + 1 = 5 \\;\\Rightarrow\\; S(2 \\mid 5)$$
                </div>
            </details>
        `
    },
    {
        id: "k8-040", niveau: "ga",
        category: "linear",
        question: "Woran erkenne ich, ob eine Zuordnung proportional ist?",
        answer: `
            <h4>Proportionalität</h4>
            <ul>
                <li><strong>Direkt proportional</strong>: \\( \\frac{y}{x} = m \\) ist konstant, Graph ist eine Ursprungsgerade \\( y = mx \\)</li>
                <li><strong>Indirekt proportional</strong>: \\( x \\cdot y \\) ist konstant, Graph ist eine Hyperbel</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    3 kg kosten 7,50 €, 5 kg kosten 12,50 €:
                    $$\\frac{7{,}50}{3} = \\frac{12{,}50}{5} = 2{,}50$$
                    direkt proportional mit \\( y = 2{,}5x \\).
                </div>
            </details>
        `
    },
    {
        id: "k8-041", niveau: "ga",
        category: "linear",
        question: "Wie modelliere ich eine Sachsituation mit einer linearen Funktion?",
        answer: `
            <h4>Modellieren</h4>
            <ul>
                <li>Fester Grundbetrag → absolutes Glied \\( n \\)</li>
                <li>Betrag „je Einheit" → Anstieg \\( m \\)</li>
                <li>Variable mit Einheit benennen und den sinnvollen Definitionsbereich angeben</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Grundgebühr 12 €, je km 0,80 €:
                    $$K(x) = 0{,}8x + 12$$
                    Für 25 km: \\( K(25) = 32 \\) €.
                </div>
            </details>
        `
    },
    {
        id: "k8-042", niveau: "ga",
        category: "linear",
        question: "Wie vergleiche ich zwei Tarife rechnerisch?",
        answer: `
            <h4>Tarifvergleich</h4>
            <ol>
                <li>Für jeden Tarif eine Funktionsgleichung aufstellen</li>
                <li>Gleichsetzen — das ergibt die Menge, bei der beide gleich teuer sind</li>
                <li>Davor und danach je einen Wert prüfen und in Worten antworten</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$A(x) = 0{,}5x + 20, \\quad B(x) = 0{,}9x$$
                    $$0{,}5x + 20 = 0{,}9x \\;\\Rightarrow\\; x = 50$$
                    Bis 50 Einheiten ist B günstiger, darüber A.
                </div>
            </details>
        `
    },
    // ── Körperberechnung ────────────────────────────────────────────────────
    {
        id: "k8-043", niveau: "ga",
        category: "koerper",
        question: "Wie berechne ich Volumen und Oberfläche eines Prismas?",
        answer: `
            <h4>Gerades Prisma</h4>
            <div class="formula-box">
                $$V = G \\cdot h$$
                $$O = 2G + M, \\quad M = u \\cdot h$$
            </div>
            <p>\\( G \\) ist der Grundflächeninhalt, \\( u \\) der Umfang der Grundfläche, \\( M \\) der Mantel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Dreiecksprisma, \\( G = 6 \\) cm², \\( u = 12 \\) cm, \\( h = 10 \\) cm:
                    $$V = 60 \\text{ cm}^3, \\quad O = 12 + 120 = 132 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-044", niveau: "ga",
        category: "koerper",
        question: "Wie berechne ich Volumen und Oberfläche eines Kreiszylinders?",
        answer: `
            <h4>Zylinder</h4>
            <div class="formula-box">
                $$V = \\pi r^2 h$$
                $$O = 2\\pi r^2 + 2\\pi r h$$
            </div>
            <p>Der Mantel ist abgewickelt ein Rechteck mit der Breite \\( 2\\pi r \\) und der Höhe \\( h \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( r = 5 \\) cm, \\( h = 12 \\) cm:
                    $$V = \\pi \\cdot 25 \\cdot 12 \\approx 942{,}5 \\text{ cm}^3$$
                    $$O = 50\\pi + 120\\pi = 170\\pi \\approx 534{,}1 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-045", niveau: "ga",
        category: "koerper",
        question: "Wie berechne ich Volumen und Oberfläche einer Pyramide?",
        answer: `
            <h4>Pyramide</h4>
            <div class="formula-box">
                $$V = \\frac{1}{3} G \\cdot h$$
                $$O = G + M$$
            </div>
            <p>Die Körperhöhe \\( h \\) steht senkrecht auf der Grundfläche; für den Mantel braucht man die <strong>Seitenhöhe</strong> \\( h_s \\), die man meist erst mit Pythagoras berechnet.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Quadratische Pyramide, \\( a = 6 \\) cm, \\( h = 4 \\) cm:
                    $$V = \\frac{1}{3} \\cdot 36 \\cdot 4 = 48 \\text{ cm}^3$$
                    $$h_s = \\sqrt{16+9} = 5, \\quad O = 36 + 60 = 96 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-046", niveau: "ga",
        category: "koerper",
        question: "Wie berechne ich Volumen und Oberfläche eines Kegels?",
        answer: `
            <h4>Kegel</h4>
            <div class="formula-box">
                $$V = \\frac{1}{3}\\pi r^2 h$$
                $$O = \\pi r^2 + \\pi r s$$
            </div>
            <p>\\( s \\) ist die Mantellinie mit \\( s = \\sqrt{r^2+h^2} \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( r = 3 \\) cm, \\( h = 4 \\) cm:
                    $$s = 5, \\quad V = \\frac{1}{3}\\pi \\cdot 9 \\cdot 4 \\approx 37{,}7 \\text{ cm}^3$$
                    $$O = 9\\pi + 15\\pi = 24\\pi \\approx 75{,}4 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-047", niveau: "ga",
        category: "koerper",
        question: "Wie berechne ich Volumen und Oberfläche einer Kugel?",
        answer: `
            <h4>Kugel</h4>
            <div class="formula-box">
                $$V = \\frac{4}{3}\\pi r^3, \\qquad O = 4\\pi r^2$$
            </div>
            <p>Beide Formeln brauchen nur den Radius. Ist der Durchmesser gegeben, zuerst halbieren.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( r = 6 \\) cm:
                    $$V = \\frac{4}{3}\\pi \\cdot 216 = 288\\pi \\approx 904{,}8 \\text{ cm}^3$$
                    $$O = 144\\pi \\approx 452{,}4 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k8-048", niveau: "ga",
        category: "koerper",
        question: "Wie berechne ich aus dem Volumen eine fehlende Länge?",
        answer: `
            <h4>Rückwärts rechnen</h4>
            <p>Formel nach der gesuchten Größe umstellen und erst dann einsetzen. Bei \\( r \\) in einer Quadrat- oder Kubikformel steht am Ende eine Wurzel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zylinder, \\( V = 500 \\) cm³, \\( h = 10 \\) cm:
                    $$r = \\sqrt{\\frac{V}{\\pi h}} = \\sqrt{\\frac{500}{10\\pi}} \\approx 3{,}99 \\text{ cm}$$
                </div>
            </details>
        `
    },
    {
        id: "k8-049", niveau: "ga",
        category: "koerper",
        question: "Wie rechne ich bei zusammengesetzten Körpern?",
        answer: `
            <h4>Zusammengesetzte Körper</h4>
            <ol>
                <li>Den Körper gedanklich in Grundkörper zerlegen</li>
                <li>Volumen addieren, bei Restkörpern subtrahieren</li>
                <li>Bei der Oberfläche nur die <strong>sichtbaren</strong> Flächen zählen — Klebeflächen entfallen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zylinder (\\( r=3 \\), \\( h=10 \\)) mit aufgesetzter Halbkugel:
                    $$V = 90\\pi + \\frac{2}{3}\\pi \\cdot 27 = 108\\pi \\approx 339{,}3 \\text{ cm}^3$$
                </div>
            </details>
        `
    },
    {
        id: "k8-050", niveau: "ga",
        category: "koerper",
        question: "Wie rechne ich Volumeneinheiten um?",
        answer: `
            <h4>Einheiten</h4>
            <div class="formula-box">
                $$1 \\text{ dm}^3 = 1000 \\text{ cm}^3 = 1 \\text{ l}$$
                $$1 \\text{ m}^3 = 1000 \\text{ dm}^3, \\qquad 1 \\text{ cm}^3 = 1 \\text{ ml}$$
            </div>
            <p>Bei Volumen ist der Umrechnungsfaktor 1000, bei Flächen 100, bei Längen 10.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2{,}5 \\text{ m}^3 = 2500 \\text{ l}$$
                    $$750 \\text{ cm}^3 = 0{,}75 \\text{ l}$$
                </div>
            </details>
        `
    },
    // ── Mehrstufige Zufallsversuche ─────────────────────────────────────────
    {
        id: "k8-051", niveau: "ga",
        category: "zufall",
        question: "Wie zeichne ich ein Baumdiagramm?",
        answer: `
            <h4>Baumdiagramm</h4>
            <p>Jede Stufe des Versuchs ist eine Verzweigungsebene. An jeden Ast schreibt man die Wahrscheinlichkeit dieses Schrittes.</p>
            <p>Kontrolle: Die Wahrscheinlichkeiten an den Ästen, die von <strong>einem</strong> Punkt ausgehen, ergeben zusammen 1.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zweimal werfen einer Münze: erste Stufe K und Z mit je \\( \\frac{1}{2} \\),
                    zweite Stufe wieder K und Z — vier Pfade: KK, KZ, ZK, ZZ.
                </div>
            </details>
        `
    },
    {
        id: "k8-052", niveau: "ga",
        category: "zufall",
        question: "Wie lautet die Produktregel (1. Pfadregel)?",
        answer: `
            <h4>Produktregel</h4>
            <div class="formula-box">
                $$P(\\text{Pfad}) = p_1 \\cdot p_2 \\cdot \\dots \\cdot p_n$$
            </div>
            <p>Entlang eines Pfades werden die Wahrscheinlichkeiten multipliziert.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zweimal würfeln, beide Male eine Sechs:
                    $$P = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36} \\approx 2{,}8\\,\\%$$
                </div>
            </details>
        `
    },
    {
        id: "k8-053", niveau: "ga",
        category: "zufall",
        question: "Wie lautet die Summenregel (2. Pfadregel)?",
        answer: `
            <h4>Summenregel</h4>
            <div class="formula-box">
                $$P(E) = \\sum P(\\text{günstige Pfade})$$
            </div>
            <p>Gehören mehrere Pfade zum selben Ereignis, addiert man ihre Wahrscheinlichkeiten.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zwei Münzwürfe, „genau einmal Kopf": Pfade KZ und ZK
                    $$P = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$
                </div>
            </details>
        `
    },
    {
        id: "k8-054", niveau: "ga",
        category: "zufall",
        question: "Was ändert sich beim Ziehen ohne Zurücklegen?",
        answer: `
            <h4>Mit und ohne Zurücklegen</h4>
            <ul>
                <li><strong>Mit</strong> Zurücklegen: die Wahrscheinlichkeiten bleiben in jeder Stufe gleich</li>
                <li><strong>Ohne</strong> Zurücklegen: Anzahl und Zusammensetzung ändern sich, die Nenner werden kleiner</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Urne mit 3 roten und 2 blauen Kugeln, zweimal rot:<br>
                    mit Zurücklegen: \\( \\frac{3}{5} \\cdot \\frac{3}{5} = \\frac{9}{25} = 0{,}36 \\)<br>
                    ohne Zurücklegen: \\( \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{3}{10} = 0{,}3 \\)
                </div>
            </details>
        `
    },
    {
        id: "k8-055", niveau: "ga",
        category: "zufall",
        question: "Wie berechne ich die Wahrscheinlichkeit für „mindestens einmal“?",
        answer: `
            <h4>Gegenereignis</h4>
            <div class="formula-box">
                $$P(\\text{mindestens einmal}) = 1 - P(\\text{keinmal})$$
            </div>
            <p>Statt vieler Pfade rechnet man den einen Pfad „keinmal" und zieht ihn von 1 ab.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Dreimal würfeln, mindestens eine Sechs:
                    $$P = 1 - \\left(\\frac{5}{6}\\right)^3 = 1 - \\frac{125}{216} = \\frac{91}{216} \\approx 42{,}1\\,\\%$$
                </div>
            </details>
        `
    },
    {
        id: "k8-056", niveau: "ga",
        category: "zufall",
        question: "Was ist der Unterschied zwischen geordneter und ungeordneter Auswahl?",
        answer: `
            <h4>Reihenfolge</h4>
            <ul>
                <li><strong>Geordnet</strong>: die Reihenfolge zählt, „rot dann blau" ist ein anderer Fall als „blau dann rot"</li>
                <li><strong>Ungeordnet</strong>: nur die Zusammenstellung zählt, beide Pfade gehören zum selben Ereignis und werden addiert</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    3 rote, 2 blaue Kugeln, zwei Züge ohne Zurücklegen, „eine rote und eine blaue":
                    $$P = \\frac{3}{5}\\cdot\\frac{2}{4} + \\frac{2}{5}\\cdot\\frac{3}{4} = \\frac{3}{5} = 0{,}6$$
                </div>
            </details>
        `
    },
    {
        id: "k8-057", niveau: "ga",
        category: "zufall",
        question: "Was ist ein Urnenmodell und wozu dient eine Simulation?",
        answer: `
            <h4>Urnenmodell und Simulation</h4>
            <p>Viele Zufallsversuche lassen sich auf das Ziehen von Kugeln aus einer Urne zurückführen — man muss nur festlegen, wofür die Kugeln stehen und ob zurückgelegt wird.</p>
            <p>Bei einer Simulation ersetzt man den echten Versuch durch einen gleichwertigen mit Würfel, Münze oder Zufallszahlen und schätzt die Wahrscheinlichkeit über die relative Häufigkeit.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    „Ein Viertel der Packungen enthält eine Figur" wird zur Urne mit
                    1 schwarzen und 3 weißen Kugeln, mit Zurücklegen — oder zu Zufallszahlen von 1 bis 4.
                </div>
            </details>
        `
    }
    ]
};
