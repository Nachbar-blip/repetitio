// Repetitio-Deck: Klasse 7 — Stoffverteilungsplan Mathematik Klasse 7, Gymnasium Sachsen-Anhalt
// Alle Karten niveau "ga": Klassenstufen-Decks kennen kein gA/eA.
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["klasse7"] = {
    title: "Klasse 7",
    subtitle: "Prozente und Zinsen, Gleichungen, Kreis, Körperdarstellung, Wahrscheinlichkeit",
    categories: {
        prozent: "Prozent- & Zinsrechnung",
        gleichung: "Gleichungen & Ungleichungen",
        kreis: "Kreis",
        koerper: "Körperdarstellung",
        zufall: "Häufigkeiten & Wahrscheinlichkeit"
    },
    cards: [
    // ── Prozent- & Zinsrechnung ─────────────────────────────────────────────
    {
        id: "k7-001", niveau: "ga",
        category: "prozent",
        question: "Was bedeuten Grundwert, Prozentwert und Prozentsatz?",
        answer: `
            <h4>Die drei Größen</h4>
            <ul>
                <li><strong>Grundwert \\( G \\)</strong>: das Ganze, die 100 %</li>
                <li><strong>Prozentwert \\( W \\)</strong>: der Anteil davon, in derselben Einheit</li>
                <li><strong>Prozentsatz \\( p\\,\\% \\)</strong>: wie groß der Anteil ist</li>
            </ul>
            <p>Im Text steht der Grundwert meist nach „von" oder „von … aus".</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    „12 % von 250 € sind 30 €":
                    Grundwert \\( G = 250 \\) €, Prozentsatz \\( p\\,\\% = 12\\,\\% \\), Prozentwert \\( W = 30 \\) €
                </div>
            </details>
        `
    },
    {
        id: "k7-002", niveau: "ga",
        category: "prozent",
        question: "Wie wandle ich zwischen Prozent, Bruch und Dezimalzahl um?",
        answer: `
            <h4>Drei Schreibweisen</h4>
            <div class="formula-box">
                $$1\\,\\% = \\frac{1}{100} = 0{,}01$$
            </div>
            <p>Von Prozent zur Dezimalzahl: durch 100 teilen (Komma zwei Stellen nach links). Umgekehrt mal 100.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$25\\,\\% = \\frac{1}{4} = 0{,}25$$
                    $$0{,}08 = 8\\,\\%, \\qquad \\frac{3}{5} = 0{,}6 = 60\\,\\%$$
                </div>
            </details>
        `
    },
    {
        id: "k7-003", niveau: "ga",
        category: "prozent",
        question: "Wie berechne ich den Prozentwert?",
        answer: `
            <h4>Prozentwert</h4>
            <div class="formula-box">
                $$W = G \\cdot \\frac{p}{100}$$
            </div>
            <p>Gesucht ist der Anteil, gegeben sind das Ganze und der Prozentsatz.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    18 % von 450 €:
                    $$W = 450 \\cdot 0{,}18 = 81$$ €
                </div>
            </details>
        `
    },
    {
        id: "k7-004", niveau: "ga",
        category: "prozent",
        question: "Wie berechne ich den Grundwert?",
        answer: `
            <h4>Grundwert</h4>
            <div class="formula-box">
                $$G = \\frac{W \\cdot 100}{p}$$
            </div>
            <p>Gesucht ist das Ganze. Typische Formulierung: „… sind 15 % — wie viel ist das Ganze?"</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    60 € sind 15 % des Preises:
                    $$G = \\frac{60 \\cdot 100}{15} = 400$$ €
                </div>
            </details>
        `
    },
    {
        id: "k7-005", niveau: "ga",
        category: "prozent",
        question: "Wie berechne ich den Prozentsatz?",
        answer: `
            <h4>Prozentsatz</h4>
            <div class="formula-box">
                $$p\\,\\% = \\frac{W}{G} \\cdot 100\\,\\%$$
            </div>
            <p>Anteil durch Ganzes, dann mal 100. Beide Größen müssen dieselbe Einheit haben.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    36 von 240 Schülern:
                    $$p\\,\\% = \\frac{36}{240} \\cdot 100\\,\\% = 15\\,\\%$$
                </div>
            </details>
        `
    },
    {
        id: "k7-006", niveau: "ga",
        category: "prozent",
        question: "Wie rechne ich mit vermindertem und vermehrtem Grundwert?",
        answer: `
            <h4>„um" und „auf"</h4>
            <div class="formula-box">
                $$\\text{Rabatt } p\\,\\%: \\quad \\text{neuer Wert} = G \\cdot \\left(1 - \\tfrac{p}{100}\\right)$$
                $$\\text{Aufschlag } p\\,\\%: \\quad \\text{neuer Wert} = G \\cdot \\left(1 + \\tfrac{p}{100}\\right)$$
            </div>
            <p>Achtung auf die Sprache: „um 20 % reduziert" heißt mal 0,8; „auf 20 % reduziert" heißt mal 0,2.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    80 € um 20 % reduziert:
                    $$80 \\cdot 0{,}8 = 64$$ €
                    64 € um 25 % erhöht ergibt wieder 80 €.
                </div>
            </details>
        `
    },
    {
        id: "k7-007", niveau: "ga",
        category: "prozent",
        question: "Wie rechne ich vom ermäßigten Preis auf den alten zurück?",
        answer: `
            <h4>Grundwert nach Veränderung</h4>
            <p>Der neue Preis entspricht nicht 100 %, sondern \\( 100 - p \\) Prozent (bzw. \\( 100 + p \\)). Genau dieser Prozentsatz gehört in die Grundwertformel.</p>
            <div class="formula-box">
                $$G = \\frac{\\text{neuer Wert} \\cdot 100}{100 - p}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Nach 15 % Rabatt kostet die Jacke 68 €:
                    $$G = \\frac{68 \\cdot 100}{85} = 80$$ €
                </div>
            </details>
        `
    },
    {
        id: "k7-008", niveau: "ga",
        category: "prozent",
        question: "Was bedeuten Brutto, Netto und Promille?",
        answer: `
            <h4>Begriffe aus dem Alltag</h4>
            <ul>
                <li><strong>Netto</strong>: Preis ohne Mehrwertsteuer</li>
                <li><strong>Brutto</strong>: Preis mit Mehrwertsteuer, also Netto mal \\( 1{,}19 \\) (bzw. \\( 1{,}07 \\))</li>
                <li><strong>Skonto</strong>: Nachlass bei schneller Zahlung</li>
                <li><strong>Promille</strong>: Anteil von tausend, 1 ‰ entspricht \\( \\frac{1}{1000} \\)</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Netto 200 €:
                    $$\\text{Brutto} = 200 \\cdot 1{,}19 = 238$$ €
                    Brutto 238 € zurück: \\( 238 : 1{,}19 = 200 \\) €.
                </div>
            </details>
        `
    },
    {
        id: "k7-009", niveau: "ga",
        category: "prozent",
        question: "Wie lese und zeichne ich ein Kreisdiagramm?",
        answer: `
            <h4>Kreisdiagramm</h4>
            <div class="formula-box">
                $$\\alpha = \\frac{p}{100} \\cdot 360^\\circ$$
            </div>
            <p>Der ganze Kreis sind 100 % bzw. \\( 360^\\circ \\); 1 % entspricht \\( 3{,}6^\\circ \\). Alle Sektoren zusammen müssen \\( 360^\\circ \\) ergeben.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    25 % → \\( 90^\\circ \\); 40 % → \\( 144^\\circ \\); 35 % → \\( 126^\\circ \\)
                    $$90 + 144 + 126 = 360 \\; ✓$$
                </div>
            </details>
        `
    },
    {
        id: "k7-010", niveau: "ga",
        category: "prozent",
        question: "Wie berechne ich Jahreszinsen?",
        answer: `
            <h4>Zinsformel</h4>
            <div class="formula-box">
                $$Z = K \\cdot \\frac{p}{100}$$
            </div>
            <p>\\( K \\) ist das Kapital, \\( p\\,\\% \\) der Zinssatz pro Jahr, \\( Z \\) die Zinsen für ein volles Jahr. Es ist dieselbe Rechnung wie beim Prozentwert.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    2500 € zu 3,2 % für ein Jahr:
                    $$Z = 2500 \\cdot 0{,}032 = 80$$ €
                </div>
            </details>
        `
    },
    {
        id: "k7-011", niveau: "ga",
        category: "prozent",
        question: "Wie berechne ich Zinsen für Monate oder Tage?",
        answer: `
            <h4>Zinsen für Teilzeiträume</h4>
            <div class="formula-box">
                $$Z = K \\cdot \\frac{p}{100} \\cdot \\frac{m}{12} \\qquad Z = K \\cdot \\frac{p}{100} \\cdot \\frac{t}{360}$$
            </div>
            <p>In der Zinsrechnung hat das Jahr 360 Tage und jeder Monat 30 Tage.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    4000 € zu 3 % für 5 Monate:
                    $$Z = 4000 \\cdot 0{,}03 \\cdot \\frac{5}{12} = 50$$ €
                </div>
            </details>
        `
    },
    {
        id: "k7-012", niveau: "ga",
        category: "prozent",
        question: "Wie rechne ich mit Zinseszins?",
        answer: `
            <h4>Zinseszins</h4>
            <div class="formula-box">
                $$K_n = K_0 \\cdot \\left(1 + \\frac{p}{100}\\right)^n$$
            </div>
            <p>Die Zinsen bleiben auf dem Konto und werden im nächsten Jahr mitverzinst. Deshalb wächst das Kapital schneller als bei einfacher Verzinsung.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    1000 € zu 4 % für 3 Jahre:
                    $$K_3 = 1000 \\cdot 1{,}04^3 \\approx 1124{,}86$$ €
                    ohne Zinseszins wären es nur 1120 €.
                </div>
            </details>
        `
    },
    // ── Gleichungen & Ungleichungen ─────────────────────────────────────────
    {
        id: "k7-013", niveau: "ga",
        category: "gleichung",
        question: "Was sind Lösungsmenge und Grundbereich?",
        answer: `
            <h4>Begriffe</h4>
            <p>Der <strong>Grundbereich</strong> sagt, welche Zahlen überhaupt eingesetzt werden dürfen. Die <strong>Lösungsmenge</strong> \\( \\mathbb{L} \\) enthält alle Zahlen daraus, die die Gleichung zu einer wahren Aussage machen.</p>
            <p>Zwei Gleichungen heißen <strong>äquivalent</strong>, wenn sie dieselbe Lösungsmenge haben.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( 2x = 7 \\) über \\( \\mathbb{N} \\): \\( \\mathbb{L} = \\{\\} \\)<br>
                    dieselbe Gleichung über \\( \\mathbb{Q} \\): \\( \\mathbb{L} = \\{3{,}5\\} \\)
                </div>
            </details>
        `
    },
    {
        id: "k7-014", niveau: "ga",
        category: "gleichung",
        question: "Welche Äquivalenzumformungen darf ich anwenden?",
        answer: `
            <h4>Umformungsregeln</h4>
            <p>Auf <strong>beiden</strong> Seiten dasselbe tun:</p>
            <ul>
                <li>dieselbe Zahl addieren oder subtrahieren</li>
                <li>mit derselben Zahl \\( \\neq 0 \\) multiplizieren oder dividieren</li>
            </ul>
            <p>Die Rechnung notiert man hinter einem senkrechten Strich.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$3x + 7 = 22 \\quad | -7$$
                    $$3x = 15 \\quad | : 3$$
                    $$x = 5$$
                </div>
            </details>
        `
    },
    {
        id: "k7-015", niveau: "ga",
        category: "gleichung",
        question: "Wie löse ich eine lineare Gleichung mit Klammern?",
        answer: `
            <h4>Vorgehen</h4>
            <ol>
                <li>Klammern auflösen</li>
                <li>Auf jeder Seite zusammenfassen</li>
                <li>Variablen auf eine Seite, Zahlen auf die andere</li>
                <li>Durch den Koeffizienten teilen</li>
                <li>Probe</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$4(x-2) = 2(x+3)$$
                    $$4x - 8 = 2x + 6 \\quad | -2x +8$$
                    $$2x = 14 \\;\\Rightarrow\\; x = 7$$
                    Probe: \\( 4 \\cdot 5 = 20 = 2 \\cdot 10 \\) ✓
                </div>
            </details>
        `
    },
    {
        id: "k7-016", niveau: "ga",
        category: "gleichung",
        question: "Wie erkenne ich Gleichungen ohne oder mit unendlich vielen Lösungen?",
        answer: `
            <h4>Sonderfälle</h4>
            <ul>
                <li>Bleibt eine <strong>falsche</strong> Aussage wie \\( 0 = 5 \\): \\( \\mathbb{L} = \\{\\} \\)</li>
                <li>Bleibt eine <strong>wahre</strong> Aussage wie \\( 0 = 0 \\): jede Zahl des Grundbereichs ist Lösung</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2(x+3) = 2x + 6 \\;\\Rightarrow\\; 0 = 0$$
                    alle Zahlen sind Lösung.<br>
                    $$2x + 1 = 2x + 4 \\;\\Rightarrow\\; 1 = 4 \\;\\Rightarrow\\; \\mathbb{L} = \\{\\}$$
                </div>
            </details>
        `
    },
    {
        id: "k7-017", niveau: "ga",
        category: "gleichung",
        question: "Wie löse ich eine Verhältnisgleichung?",
        answer: `
            <h4>Über Kreuz multiplizieren</h4>
            <div class="formula-box">
                $$\\frac{a}{b} = \\frac{c}{d} \\;\\Rightarrow\\; a \\cdot d = b \\cdot c$$
            </div>
            <p>Voraussetzung: die Nenner sind nicht null.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{x}{12} = \\frac{5}{4}$$
                    $$4x = 60 \\;\\Rightarrow\\; x = 15$$
                </div>
            </details>
        `
    },
    {
        id: "k7-018", niveau: "ga",
        category: "gleichung",
        question: "Wie löse ich eine einfache Bruchgleichung?",
        answer: `
            <h4>Bruchgleichung</h4>
            <ol>
                <li>Definitionsbereich bestimmen: Nenner dürfen nicht null werden</li>
                <li>Mit dem Hauptnenner multiplizieren</li>
                <li>Die entstandene Gleichung lösen</li>
                <li>Prüfen, ob die Lösung im Definitionsbereich liegt</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\frac{12}{x} = 4, \\quad x \\neq 0$$
                    $$12 = 4x \\;\\Rightarrow\\; x = 3$$
                </div>
            </details>
        `
    },
    {
        id: "k7-019", niveau: "ga",
        category: "gleichung",
        question: "Was ist beim Lösen von Ungleichungen anders?",
        answer: `
            <h4>Ungleichungen</h4>
            <div class="formula-box">
                $$\\text{Mal oder geteilt durch eine negative Zahl}$$
                $$\\Rightarrow \\text{ Relationszeichen umdrehen}$$
            </div>
            <p>Sonst rechnet man wie bei Gleichungen. Die Lösung ist meist ein ganzes Intervall und lässt sich auf der Zahlengeraden darstellen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$-3x + 5 < 14 \\quad | -5$$
                    $$-3x < 9 \\quad | : (-3)$$
                    $$x > -3$$
                </div>
            </details>
        `
    },
    {
        id: "k7-020", niveau: "ga",
        category: "gleichung",
        question: "Wie stelle ich zu einer Sachaufgabe eine Gleichung auf?",
        answer: `
            <h4>Modellieren</h4>
            <ol>
                <li>Festlegen, wofür \\( x \\) steht — in Worten und mit Einheit</li>
                <li>Die anderen Größen durch \\( x \\) ausdrücken</li>
                <li>Gleichung aufstellen, lösen, Probe am Text</li>
                <li>Antwortsatz</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Ein Sohn ist \\( x \\) Jahre alt, der Vater dreimal so alt; zusammen 48 Jahre.
                    $$x + 3x = 48 \\;\\Rightarrow\\; x = 12$$
                    Der Sohn ist 12, der Vater 36 Jahre alt.
                </div>
            </details>
        `
    },
    {
        id: "k7-021", niveau: "ga",
        category: "gleichung",
        question: "Wie löse ich eine einfache Potenz- oder Wurzelgleichung?",
        answer: `
            <h4>Nichtlineare Gleichungen</h4>
            <div class="formula-box">
                $$x^2 = a \\;(a>0) \\;\\Rightarrow\\; x = \\pm\\sqrt{a}$$
                $$\\sqrt{x} = a \\;(a \\ge 0) \\;\\Rightarrow\\; x = a^2$$
            </div>
            <p>Beim Quadrieren immer die Probe machen; bei \\( x^2 = a \\) gibt es zwei Lösungen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$x^2 = 49 \\;\\Rightarrow\\; x = 7 \\;\\text{oder}\\; x = -7$$
                    $$\\sqrt{x} = 6 \\;\\Rightarrow\\; x = 36$$
                </div>
            </details>
        `
    },
    {
        id: "k7-022", niveau: "ga",
        category: "gleichung",
        question: "Wie löse ich eine Betragsgleichung?",
        answer: `
            <h4>Betragsgleichung</h4>
            <p>Der Betrag misst den Abstand von null, deshalb gibt es zwei Fälle:</p>
            <div class="formula-box">
                $$|T| = a \\;(a \\ge 0) \\;\\Rightarrow\\; T = a \\;\\text{oder}\\; T = -a$$
            </div>
            <p>Für \\( a < 0 \\) gibt es keine Lösung.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$|x - 3| = 5$$
                    $$x - 3 = 5 \\;\\Rightarrow\\; x = 8$$
                    $$x - 3 = -5 \\;\\Rightarrow\\; x = -2$$
                </div>
            </details>
        `
    },
    // ── Kreis ───────────────────────────────────────────────────────────────
    {
        id: "k7-023", niveau: "ga",
        category: "kreis",
        question: "Wie heißen die Teile eines Kreises?",
        answer: `
            <h4>Begriffe am Kreis</h4>
            <ul>
                <li><strong>Radius \\( r \\)</strong>: Mittelpunkt bis Kreislinie</li>
                <li><strong>Durchmesser \\( d = 2r \\)</strong></li>
                <li><strong>Kreisausschnitt</strong> (Sektor): von zwei Radien begrenzt — ein „Tortenstück"</li>
                <li><strong>Kreissegment</strong> (Abschnitt): von einer Sehne begrenzt</li>
                <li><strong>Kreisring</strong>: Fläche zwischen zwei Kreisen mit gleichem Mittelpunkt</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( r = 4 \\) cm → \\( d = 8 \\) cm.<br>
                    Kreisring mit \\( r_a = 5 \\), \\( r_i = 3 \\):
                    $$A = \\pi (25 - 9) = 16\\pi \\approx 50{,}3 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k7-024", niveau: "ga",
        category: "kreis",
        question: "Wie liegen Geraden zu einem Kreis?",
        answer: `
            <h4>Lagebeziehungen</h4>
            <ul>
                <li><strong>Passante</strong>: kein gemeinsamer Punkt, Abstand \\( > r \\)</li>
                <li><strong>Tangente</strong>: genau ein Punkt, Abstand \\( = r \\)</li>
                <li><strong>Sekante</strong>: zwei Punkte, Abstand \\( < r \\)</li>
                <li><strong>Sehne</strong>: die Strecke zwischen den beiden Schnittpunkten</li>
            </ul>
            <p>Entscheidend ist immer der <strong>Abstand des Mittelpunkts</strong> von der Geraden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( r = 5 \\) cm, Abstand 5 cm → Tangente.<br>
                    Abstand 3 cm → Sekante; Abstand 7 cm → Passante.
                </div>
            </details>
        `
    },
    {
        id: "k7-025", niveau: "ga",
        category: "kreis",
        question: "Wie konstruiere ich eine Tangente an einen Kreis?",
        answer: `
            <h4>Tangentenkonstruktion</h4>
            <p>Die Tangente steht im Berührpunkt senkrecht auf dem <strong>Berührungsradius</strong>.</p>
            <ol>
                <li>Berührpunkt \\( B \\) mit \\( M \\) verbinden</li>
                <li>In \\( B \\) die Senkrechte zu \\( \\overline{MB} \\) errichten</li>
            </ol>
            <p>Von einem Punkt außerhalb: Thaleskreis über \\( \\overline{MP} \\) zeichnen — die Schnittpunkte mit dem Kreis sind die Berührpunkte.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( r = 3 \\) cm, \\( \\overline{MP} = 5 \\) cm. Die Tangentenlänge ist
                    $$\\sqrt{25-9} = 4 \\text{ cm}$$
                </div>
            </details>
        `
    },
    {
        id: "k7-026", niveau: "ga",
        category: "kreis",
        question: "Was besagt der Satz des Thales?",
        answer: `
            <h4>Satz des Thales</h4>
            <p>Liegt der Punkt \\( C \\) auf dem Kreis über dem Durchmesser \\( \\overline{AB} \\), so ist der Winkel bei \\( C \\) ein rechter.</p>
            <div class="formula-box">
                $$C \\text{ auf dem Thaleskreis} \\;\\Rightarrow\\; \\gamma = 90^\\circ$$
            </div>
            <p>Damit konstruiert man rechte Winkel und rechtwinklige Dreiecke.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( \\overline{AB} = 8 \\) cm als Durchmesser, \\( C \\) auf dem Kreis:
                    Das Dreieck \\( ABC \\) hat bei \\( C \\) stets \\( 90^\\circ \\) — egal wo \\( C \\) liegt.
                </div>
            </details>
        `
    },
    {
        id: "k7-027", niveau: "ga",
        category: "kreis",
        question: "Wie hängen Peripheriewinkel und Zentriwinkel zusammen?",
        answer: `
            <h4>Winkel am Kreis</h4>
            <div class="formula-box">
                $$\\varphi_{\\text{Zentri}} = 2 \\cdot \\varphi_{\\text{Peripherie}}$$
            </div>
            <p>Über demselben Bogen ist der Mittelpunktswinkel doppelt so groß wie jeder Umfangswinkel. Alle Umfangswinkel über demselben Bogen sind gleich groß.</p>
            <p>Der Satz des Thales ist der Sonderfall \\( 180^\\circ : 2 = 90^\\circ \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zentriwinkel \\( 110^\\circ \\) → Peripheriewinkel \\( 55^\\circ \\).<br>
                    Peripheriewinkel \\( 35^\\circ \\) → Zentriwinkel \\( 70^\\circ \\).
                </div>
            </details>
        `
    },
    {
        id: "k7-028", niveau: "ga",
        category: "kreis",
        question: "Wie berechne ich Umfang und Flächeninhalt eines Kreises?",
        answer: `
            <h4>Kreisformeln</h4>
            <div class="formula-box">
                $$u = 2\\pi r = \\pi d$$
                $$A = \\pi r^2$$
            </div>
            <p>\\( \\pi \\approx 3{,}14159 \\) ist irrational. Ist der Durchmesser gegeben, für die Fläche zuerst halbieren.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( r = 7 \\) cm:
                    $$u = 14\\pi \\approx 44{,}0 \\text{ cm}$$
                    $$A = 49\\pi \\approx 153{,}9 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k7-029", niveau: "ga",
        category: "kreis",
        question: "Wie berechne ich Bogenlänge und Ausschnittsfläche?",
        answer: `
            <h4>Kreisausschnitt</h4>
            <div class="formula-box">
                $$b = 2\\pi r \\cdot \\frac{\\alpha}{360^\\circ}$$
                $$A = \\pi r^2 \\cdot \\frac{\\alpha}{360^\\circ}$$
            </div>
            <p>Der Ausschnitt ist derselbe Bruchteil des Kreises, den der Mittelpunktswinkel von \\( 360^\\circ \\) ausmacht.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( r = 6 \\) cm, \\( \\alpha = 60^\\circ \\), also ein Sechstel:
                    $$b = 2\\pi \\;\\approx 6{,}28 \\text{ cm}$$
                    $$A = 6\\pi \\approx 18{,}85 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    {
        id: "k7-030", niveau: "ga",
        category: "kreis",
        question: "Wie rechne ich vom Umfang oder Flächeninhalt auf den Radius zurück?",
        answer: `
            <h4>Formeln umstellen</h4>
            <div class="formula-box">
                $$r = \\frac{u}{2\\pi}, \\qquad r = \\sqrt{\\frac{A}{\\pi}}$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( u = 31{,}4 \\) cm:
                    $$r = \\frac{31{,}4}{2\\pi} \\approx 5 \\text{ cm}$$
                    \\( A = 78{,}5 \\) cm²: \\( r = \\sqrt{\\frac{78{,}5}{\\pi}} \\approx 5 \\) cm.
                </div>
            </details>
        `
    },
    {
        id: "k7-031", niveau: "ga",
        category: "kreis",
        question: "Wie berechne ich zusammengesetzte Figuren?",
        answer: `
            <h4>Zerlegen</h4>
            <ol>
                <li>Figur in Rechtecke, Dreiecke, Halb- und Viertelkreise zerlegen</li>
                <li>Teilflächen berechnen</li>
                <li>Addieren oder — bei ausgeschnittenen Teilen — subtrahieren</li>
            </ol>
            <p>Beim Umfang zählen nur die <strong>äußeren</strong> Randlinien mit.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Quadrat mit \\( a = 10 \\) cm, darin ein größtmöglicher Kreis:
                    $$A_{\\text{Rest}} = 100 - 25\\pi \\approx 21{,}5 \\text{ cm}^2$$
                </div>
            </details>
        `
    },
    // ── Körperdarstellung ───────────────────────────────────────────────────
    {
        id: "k7-032", niveau: "ga",
        category: "koerper",
        question: "Wie unterscheide ich Prisma, Pyramide, Zylinder, Kegel und Kugel?",
        answer: `
            <h4>Körper erkennen</h4>
            <ul>
                <li><strong>Prisma</strong>: zwei gleiche, parallele Vielecke als Grund- und Deckfläche</li>
                <li><strong>Pyramide</strong>: ein Vieleck als Grundfläche, alle Seitenkanten treffen sich in der Spitze</li>
                <li><strong>Zylinder</strong>: zwei gleiche Kreise, gerade Mantelfläche</li>
                <li><strong>Kegel</strong>: ein Kreis und eine Spitze</li>
                <li><strong>Kugel</strong>: alle Punkte haben denselben Abstand vom Mittelpunkt</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Konservendose → Zylinder; Zelt mit quadratischem Boden → Pyramide;
                    Toblerone-Packung → dreiseitiges Prisma.
                </div>
            </details>
        `
    },
    {
        id: "k7-033", niveau: "ga",
        category: "koerper",
        question: "Wie heißen die Teile eines Körpers?",
        answer: `
            <h4>Bezeichnungen</h4>
            <ul>
                <li><strong>Grundfläche</strong> und <strong>Deckfläche</strong></li>
                <li><strong>Seitenflächen</strong>, zusammen die <strong>Mantelfläche</strong></li>
                <li><strong>Körperhöhe</strong>: senkrechter Abstand von Grund- und Deckfläche bzw. von der Spitze</li>
                <li><strong>Seitenhöhe</strong> bei der Pyramide: Höhe einer dreieckigen Seitenfläche</li>
            </ul>
            <p>Körperhöhe und Seitenhöhe zu verwechseln, ist der häufigste Fehler.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Quadratische Pyramide: Grundfläche Quadrat, Mantel aus vier Dreiecken,
                    Körperhöhe von der Spitze bis zur Mitte der Grundfläche.
                </div>
            </details>
        `
    },
    {
        id: "k7-034", niveau: "ga",
        category: "koerper",
        question: "Wie zeichne ich das Netz eines Körpers?",
        answer: `
            <h4>Netz</h4>
            <p>Das Netz ist der aufgeklappte Körper in der Ebene. Alle Flächen kommen in wahrer Größe vor und müssen an den richtigen Kanten zusammenhängen.</p>
            <ul>
                <li>Prisma: zwei Grundflächen plus ein Rechteck der Länge \\( u \\)</li>
                <li>Zylinder: zwei Kreise plus ein Rechteck mit der Breite \\( 2\\pi r \\)</li>
                <li>Pyramide: Grundfläche plus Dreiecke mit der Seitenhöhe</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zylinder \\( r = 3 \\) cm, \\( h = 8 \\) cm: Mantelrechteck
                    $$2\\pi \\cdot 3 \\approx 18{,}85 \\text{ cm breit}, \\; 8 \\text{ cm hoch}$$
                </div>
            </details>
        `
    },
    {
        id: "k7-035", niveau: "ga",
        category: "koerper",
        question: "Wie zeichne ich ein Schrägbild?",
        answer: `
            <h4>Schrägbild</h4>
            <ul>
                <li>Front- und Rückfläche in wahrer Größe</li>
                <li>Tiefenkanten unter \\( \\alpha = 45^\\circ \\)</li>
                <li>Tiefenkanten nur halb so lang: \\( q = \\frac{1}{2} \\)</li>
                <li>Verdeckte Kanten gestrichelt</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel mit \\( a = 4 \\) cm: Vorderfläche 4 cm × 4 cm,
                    Tiefenkanten 2 cm lang unter \\( 45^\\circ \\).
                </div>
            </details>
        `
    },
    {
        id: "k7-036", niveau: "ga",
        category: "koerper",
        question: "Was ist ein Zweitafelbild?",
        answer: `
            <h4>Zweitafelbild</h4>
            <p>Zwei Ansichten desselben Körpers: der <strong>Grundriss</strong> von oben und der <strong>Aufriss</strong> von vorn, genau übereinander gezeichnet.</p>
            <p>Beide Bilder zeigen wahre Längen; zusammen legen sie den Körper eindeutig fest — anders als ein einzelnes Bild.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Zylinder: Grundriss ein Kreis, Aufriss ein Rechteck.<br>
                    Quadratische Pyramide: Grundriss ein Quadrat mit Diagonalen, Aufriss ein Dreieck.
                </div>
            </details>
        `
    },
    {
        id: "k7-037", niveau: "ga",
        category: "koerper",
        question: "Wie wechsle ich zwischen den Darstellungen?",
        answer: `
            <h4>Darstellungen überführen</h4>
            <ol>
                <li>Zuerst den Körper benennen</li>
                <li>Die Maße aus der gegebenen Darstellung ablesen — beim Schrägbild die Tiefenkanten verdoppeln</li>
                <li>Die neue Darstellung nach ihren eigenen Regeln zeichnen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Im Schrägbild ist die Tiefenkante 3 cm lang → in Wirklichkeit 6 cm →
                    im Grundriss wird sie 6 cm gezeichnet.
                </div>
            </details>
        `
    },
    {
        id: "k7-038", niveau: "ga",
        category: "koerper",
        question: "Wie gehe ich bei zusammengesetzten Körpern vor?",
        answer: `
            <h4>Zusammengesetzte Körper</h4>
            <p>Den Körper in bekannte Grundkörper zerlegen und die Trennkanten markieren. Beim Zeichnen zuerst den großen Körper, dann den aufgesetzten oder ausgeschnittenen Teil.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Haus-Modell: Quader als Erdgeschoss, aufgesetztes dreiseitiges Prisma als Dach.
                    Im Aufriss ein Rechteck mit Dreieck darüber.
                </div>
            </details>
        `
    },
    // ── Häufigkeiten & Wahrscheinlichkeit ───────────────────────────────────
    {
        id: "k7-039", niveau: "ga",
        category: "zufall",
        question: "Was sind Ergebnis, Ereignis und Ergebnismenge?",
        answer: `
            <h4>Grundbegriffe</h4>
            <ul>
                <li><strong>Ergebnis</strong>: ein einzelner Ausgang des Versuchs</li>
                <li><strong>Ergebnismenge \\( S \\)</strong>: alle möglichen Ergebnisse</li>
                <li><strong>Ereignis</strong>: eine Teilmenge von \\( S \\), in Mengenschreibweise notiert</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfelwurf: \\( S = \\{1;2;3;4;5;6\\} \\)<br>
                    Ereignis „ungerade Zahl": \\( E = \\{1;3;5\\} \\)
                </div>
            </details>
        `
    },
    {
        id: "k7-040", niveau: "ga",
        category: "zufall",
        question: "Was ist der Unterschied zwischen absoluter und relativer Häufigkeit?",
        answer: `
            <h4>Häufigkeiten</h4>
            <div class="formula-box">
                $$h(E) = \\frac{H(E)}{n}$$
            </div>
            <p>Die absolute Häufigkeit \\( H(E) \\) zählt, wie oft etwas eintrat. Die relative Häufigkeit \\( h(E) \\) setzt das ins Verhältnis zur Gesamtzahl \\( n \\) und liegt stets zwischen 0 und 1.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Bei 60 Würfen fiel 12-mal eine Sechs:
                    $$h = \\frac{12}{60} = 0{,}2 = 20\\,\\%$$
                </div>
            </details>
        `
    },
    {
        id: "k7-041", niveau: "ga",
        category: "zufall",
        question: "Wie stelle ich Häufigkeiten in einem Diagramm dar?",
        answer: `
            <h4>Diagramme</h4>
            <ul>
                <li><strong>Säulendiagramm</strong>: Höhe zeigt die Häufigkeit, gut zum Vergleichen</li>
                <li><strong>Kreisdiagramm</strong>: Anteile am Ganzen, \\( \\alpha = \\frac{p}{100} \\cdot 360^\\circ \\)</li>
                <li>Achsen beschriften und die Skala bei null beginnen lassen — sonst täuscht das Bild</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    30 von 120 Befragten (25 %) im Kreisdiagramm:
                    $$\\alpha = 0{,}25 \\cdot 360^\\circ = 90^\\circ$$
                </div>
            </details>
        `
    },
    {
        id: "k7-042", niveau: "ga",
        category: "zufall",
        question: "Warum nähert sich die relative Häufigkeit der Wahrscheinlichkeit?",
        answer: `
            <h4>Gesetz der großen Zahlen</h4>
            <p>Je öfter man einen Zufallsversuch durchführt, desto mehr stabilisiert sich die relative Häufigkeit um einen festen Wert. Diesen Wert nennt man die <strong>Wahrscheinlichkeit</strong>.</p>
            <p>Bei wenigen Versuchen schwanken die Werte stark — aus 10 Würfen lässt sich wenig schließen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Münzwurf: nach 10 Würfen 7-mal Kopf (70 %),
                    nach 1000 Würfen etwa 500-mal (rund 50 %).
                </div>
            </details>
        `
    },
    {
        id: "k7-043", niveau: "ga",
        category: "zufall",
        question: "Was ist ein Laplace-Versuch?",
        answer: `
            <h4>Laplace-Versuch</h4>
            <p>Ein Zufallsversuch, bei dem alle Ergebnisse <strong>gleich wahrscheinlich</strong> sind — etwa ein fairer Würfel, eine faire Münze oder das Ziehen aus gut gemischten Karten.</p>
            <p>Eine gezinkte Münze oder ein Glücksrad mit ungleichen Sektoren ist kein Laplace-Versuch.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel: jedes Ergebnis hat \\( \\frac{1}{6} \\).<br>
                    Glücksrad mit einem halben roten und zwei viertelgroßen Feldern: kein Laplace-Versuch.
                </div>
            </details>
        `
    },
    {
        id: "k7-044", niveau: "ga",
        category: "zufall",
        question: "Wie berechne ich eine Wahrscheinlichkeit bei einem Laplace-Versuch?",
        answer: `
            <h4>Laplace-Formel</h4>
            <div class="formula-box">
                $$P(E) = \\frac{\\text{Anzahl der günstigen Ergebnisse}}{\\text{Anzahl der möglichen Ergebnisse}}$$
            </div>
            <p>Das Ergebnis liegt immer zwischen 0 und 1 und lässt sich als Bruch, Dezimalzahl oder Prozentsatz angeben.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel, „Augenzahl größer als 4": \\( E = \\{5;6\\} \\)
                    $$P(E) = \\frac{2}{6} = \\frac{1}{3} \\approx 33{,}3\\,\\%$$
                </div>
            </details>
        `
    },
    {
        id: "k7-045", niveau: "ga",
        category: "zufall",
        question: "Was sind sicheres und unmögliches Ereignis?",
        answer: `
            <h4>Sonderfälle</h4>
            <div class="formula-box">
                $$P(S) = 1 \\quad \\text{(sicheres Ereignis)}$$
                $$P(\\{\\}) = 0 \\quad \\text{(unmögliches Ereignis)}$$
            </div>
            <p>Jede Wahrscheinlichkeit liegt zwischen diesen beiden Werten: \\( 0 \\le P(E) \\le 1 \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel: „Augenzahl kleiner als 7" ist sicher, \\( P = 1 \\).<br>
                    „Augenzahl 7" ist unmöglich, \\( P = 0 \\).
                </div>
            </details>
        `
    },
    {
        id: "k7-046", niveau: "ga",
        category: "zufall",
        question: "Wie nutze ich das Gegenereignis?",
        answer: `
            <h4>Gegenereignis</h4>
            <div class="formula-box">
                $$P(E) + P(\\overline{E}) = 1 \\;\\Rightarrow\\; P(\\overline{E}) = 1 - P(E)$$
            </div>
            <p>Das Gegenereignis \\( \\overline{E} \\) enthält alle Ergebnisse, die nicht zu \\( E \\) gehören. Bei „mindestens"-Aufgaben ist der Umweg über das Gegenereignis oft der kürzere Weg.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Würfel, \\( E = \\) „eine Sechs": \\( P(E) = \\frac{1}{6} \\)
                    $$P(\\overline{E}) = 1 - \\frac{1}{6} = \\frac{5}{6}$$
                </div>
            </details>
        `
    },
    {
        id: "k7-047", niveau: "ga",
        category: "zufall",
        question: "Wie plane und simuliere ich einen Zufallsversuch?",
        answer: `
            <h4>Versuch und Simulation</h4>
            <ol>
                <li>Festlegen, was untersucht wird und wie oft der Versuch läuft</li>
                <li>Ergebnisse in einer Strichliste festhalten</li>
                <li>Relative Häufigkeiten berechnen und als Schätzwert nutzen</li>
            </ol>
            <p>Bei einer Simulation ersetzt man den Versuch durch einen gleichwertigen mit Würfel, Münze oder Zufallszahlen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    „Jede dritte Packung enthält eine Figur" wird zum Würfeln:
                    1 und 2 bedeuten Figur, 3 bis 6 keine.
                </div>
            </details>
        `
    }
    ]
};
