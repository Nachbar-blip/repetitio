// Repetitio-Deck: Analysis — gA-Karten aus dem GK-Trainer, eA-Karten ana-101 bis ana-116
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["analysis"] = {
    title: "Analysis",
    subtitle: "Ableiten, Kurvendiskussion, Integrieren",
    categories: {
        ableitung: "Ableitung",
        grenzwerte: "Grenzwerte",
        kurvendiskussion: "Kurvendisk.",
        scharen: "Scharen",
        integral: "Integral",
        sonstiges: "Sonstiges"
    },
    cards: [
    // Ableitung
    {
        id: "ana-001", niveau: "ga",
        category: "ableitung",
        question: "Wie leite ich eine Potenzfunktion ab?",
        answer: `
            <h4>Potenzregel</h4>
            <div class="formula-box">
                $$f(x) = x^n$$<br><br>
                $$f'(x) = n \\cdot x^{n-1}$$
            </div>
            <p><strong>Merksatz:</strong> Exponent als Faktor nach vorne, dann Exponent um 1 verringern.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Beispiel 1:</strong><br>
                    $$f(x) = x^5$$<br>
                    $$f'(x) = 5 \\cdot x^4$$<br><br>
                    <strong>Beispiel 2:</strong><br>
                    $$g(x) = 3x^4$$<br>
                    $$g'(x) = 3 \\cdot 4 \\cdot x^3 = 12x^3$$
                </div>
            </details>
        `
    },
    {
        id: "ana-002", niveau: "ga",
        category: "ableitung",
        question: "Wie leite ich \\( e^{kx} \\) ab?",
        answer: `
            <h4>Ableitung der e-Funktion</h4>
            <div class="formula-box">$$f(x) = e^{kx} \\Rightarrow f'(x) = k \\cdot e^{kx}$$</div>
            <p>Die e-Funktion bleibt erhalten, der innere Faktor k wird nach vorne multipliziert (Kettenregel).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = e^{2x}$$<br>
                    $$f'(x) = 2 \\cdot e^{2x}$$<br><br>
                    $$g(x) = 5e^{-3x}$$<br>
                    $$g'(x) = 5 \\cdot (-3) \\cdot e^{-3x} = -15e^{-3x}$$
                </div>
            </details>
        `
    },
    {
        id: "ana-003", niveau: "ga",
        category: "ableitung",
        question: "Wie wende ich die Produktregel an?",
        answer: `
            <h4>Produktregel</h4>
            <div class="formula-box">$$(u \\cdot v)' = u' \\cdot v + u \\cdot v'$$</div>
            <p>Erste ableiten mal Zweite plus Erste mal Zweite ableiten.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2 \\cdot e^x$$<br>
                    $$u = x^2, \\quad v = e^x$$<br>
                    $$u' = 2x, \\quad v' = e^x$$<br><br>
                    $$f'(x) = 2x \\cdot e^x + x^2 \\cdot e^x$$<br>
                    $$f'(x) = e^x(2x + x^2)$$
                </div>
            </details>
        `
    },
    {
        id: "ana-004", niveau: "ga",
        category: "ableitung",
        question: "Wie wende ich die Kettenregel an?",
        answer: `
            <h4>Kettenregel</h4>
            <div class="formula-box">$$f(g(x))' = f'(g(x)) \\cdot g'(x)$$</div>
            <p>Äußere Ableitung (innere Funktion bleibt) mal innere Ableitung.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = (3x + 1)^4$$<br>
                    Äußere: $$()^4$$, Innere: $$3x + 1$$<br><br>
                    $$f'(x) = 4(3x + 1)^3 \\cdot 3$$<br>
                    $$f'(x) = 12(3x + 1)^3$$
                </div>
            </details>
        `
    },
    // Kurvendiskussion
    {
        id: "ana-005", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie bestimme ich Nullstellen einer Funktion?",
        answer: `
            <h4>Nullstellen berechnen</h4>
            <ol>
                <li>Setze $$f(x) = 0$$</li>
                <li>Löse nach $$x$$ auf</li>
            </ol>
            <p><strong>Methoden:</strong> Ausklammern, pq-Formel, Substitution</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2 - 5x + 6 = 0$$<br><br>
                    pq-Formel mit p = -5, q = 6:<br>
                    $$x_{1,2} = \\frac{5}{2} \\pm \\sqrt{\\frac{25}{4} - 6}$$<br>
                    $$x_{1,2} = 2{,}5 \\pm 0{,}5$$<br><br>
                    $$x_1 = 3, \\quad x_2 = 2$$
                </div>
            </details>
        `
    },
    {
        id: "ana-006", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie berechne ich Extrempunkte?",
        answer: `
            <h4>Extremstellen berechnen</h4>
            <ol>
                <li>Setze $$f'(x) = 0$$</li>
                <li>Löse nach $$x$$ (Kandidaten)</li>
                <li>Prüfe mit $$f''(x)$$:<br>
                    $$f''(x) < 0$$ → Hochpunkt<br>
                    $$f''(x) > 0$$ → Tiefpunkt</li>
                <li>Berechne $$y$$-Werte mit $$f(x)$$</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^3 - 3x$$<br>
                    $$f'(x) = 3x^2 - 3 = 0$$<br>
                    $$x^2 = 1 \\Rightarrow x = \\pm 1$$<br><br>
                    $$f''(x) = 6x$$<br>
                    $$f''(1) = 6 > 0$$ → TP<br>
                    $$f''(-1) = -6 < 0$$ → HP<br><br>
                    $$f(1) = -2, \\quad f(-1) = 2$$<br>
                    <strong>HP(-1|2), TP(1|-2)</strong>
                </div>
            </details>
        `
    },
    {
        id: "ana-007", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie bestimme ich Wendepunkte?",
        answer: `
            <h4>Wendepunkte berechnen</h4>
            <ol>
                <li>Setze $$f''(x) = 0$$</li>
                <li>Löse nach $$x$$</li>
                <li>Prüfe VZW von $$f''(x)$$ (oder $$f'''(x) \\neq 0$$)</li>
                <li>Berechne $$y$$-Werte mit $$f(x)$$</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^3 - 3x$$<br>
                    $$f''(x) = 6x = 0$$<br>
                    $$x = 0$$<br><br>
                    VZW prüfen:<br>
                    $$f''(-1) = -6 < 0$$ (rechtsgekrümmt)<br>
                    $$f''(1) = 6 > 0$$ (linksgekrümmt)<br>
                    → VZW vorhanden ✓<br><br>
                    $$f(0) = 0$$<br>
                    <strong>WP(0|0)</strong>
                </div>
            </details>
        `
    },
    {
        id: "ana-008", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie stelle ich eine Tangentengleichung auf?",
        answer: `
            <h4>Tangentengleichung aufstellen</h4>
            <ol>
                <li>Steigung berechnen: $$m = f'(x_0)$$</li>
                <li>y-Wert berechnen: $$y_0 = f(x_0)$$</li>
                <li>In lineare Funktion einsetzen: $$y = mx + n$$</li>
                <li>Mit Punkt $$(x_0|y_0)$$ den y-Achsenabschnitt n berechnen</li>
            </ol>
            <div class="formula-box">
                $$y_0 = m \\cdot x_0 + n \\Rightarrow n = y_0 - m \\cdot x_0$$
            </div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2$$ an der Stelle $$x_0 = 2$$<br><br>
                    <strong>1. Steigung:</strong><br>
                    $$f'(x) = 2x$$<br>
                    $$m = f'(2) = 4$$<br><br>
                    <strong>2. Berührpunkt:</strong><br>
                    $$f(2) = 4$$ → Punkt $$(2|4)$$<br><br>
                    <strong>3. n berechnen:</strong><br>
                    $$4 = 4 \\cdot 2 + n$$<br>
                    $$4 = 8 + n$$<br>
                    $$n = -4$$<br><br>
                    <strong>Tangentengleichung:</strong> $$t(x) = 4x - 4$$
                </div>
            </details>
        `
    },
    {
        id: "ana-009", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie untersuche ich die Monotonie einer Funktion?",
        answer: `
            <h4>Monotonieverhalten</h4>
            <ul>
                <li>$$f'(x) > 0$$ → streng monoton steigend</li>
                <li>$$f'(x) < 0$$ → streng monoton fallend</li>
            </ul>
            <p>Untersuche das Vorzeichen von $$f'(x)$$ in den Intervallen zwischen den Nullstellen von $$f'(x)$$.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^3 - 3x$$<br>
                    $$f'(x) = 3x^2 - 3 = 3(x^2 - 1)$$<br>
                    $$f'(x) = 0$$ bei $$x = \\pm 1$$<br><br>
                    Intervalle prüfen:<br>
                    $$x < -1$$: $$f'(-2) = 9 > 0$$ ↗<br>
                    $$-1 < x < 1$$: $$f'(0) = -3 < 0$$ ↘<br>
                    $$x > 1$$: $$f'(2) = 9 > 0$$ ↗
                </div>
            </details>
        `
    },
    {
        id: "ana-010", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie untersuche ich die Krümmung einer Funktion?",
        answer: `
            <h4>Krümmungsverhalten</h4>
            <ul>
                <li>$$f''(x) > 0$$ → linksgekrümmt (konvex, "Tal")</li>
                <li>$$f''(x) < 0$$ → rechtsgekrümmt (konkav, "Berg")</li>
            </ul>
            <p>Wendepunkte liegen dort, wo sich die Krümmung ändert.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^3$$<br>
                    $$f''(x) = 6x$$<br><br>
                    $$x < 0$$: $$f''(x) < 0$$ → rechtsgekrümmt<br>
                    $$x > 0$$: $$f''(x) > 0$$ → linksgekrümmt<br><br>
                    Wendepunkt bei $$x = 0$$
                </div>
            </details>
        `
    },
    {
        id: "ana-011", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie bestimme ich das Verhalten für \\( x \\to \\pm\\infty \\)?",
        answer: `
            <h4>Grenzwertverhalten</h4>
            <p>Betrachte den Term mit der höchsten Potenz (dominiert für große |x|):</p>
            <ul>
                <li>Gerade Potenz: beide Grenzwerte gleich</li>
                <li>Ungerade Potenz: Grenzwerte unterschiedlich</li>
                <li>Positiver Koeffizient: $$\\to +\\infty$$</li>
                <li>Negativer Koeffizient: $$\\to -\\infty$$</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = -2x^3 + 5x$$<br><br>
                    Führender Term: $$-2x^3$$<br><br>
                    $$x \\to +\\infty$$: $$f(x) \\to -\\infty$$<br>
                    $$x \\to -\\infty$$: $$f(x) \\to +\\infty$$
                </div>
            </details>
        `
    },
    {
        id: "ana-012", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie berechne ich den Schnittwinkel zweier Graphen?",
        answer: `
            <h4>Schnittwinkel</h4>
            <div class="formula-box">$$\\tan(\\alpha) = \\left|\\frac{m_1 - m_2}{1 + m_1 \\cdot m_2}\\right|$$</div>
            <ol>
                <li>Schnittpunkt berechnen</li>
                <li>Steigungen $$m_1, m_2$$ an diesem Punkt berechnen</li>
                <li>In Formel einsetzen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2$$, $$g(x) = x$$<br>
                    Schnitt bei $$x = 1$$<br><br>
                    $$f'(1) = 2$$, $$g'(1) = 1$$<br><br>
                    $$\\tan(\\alpha) = \\left|\\frac{2 - 1}{1 + 2 \\cdot 1}\\right| = \\frac{1}{3}$$<br><br>
                    $$\\alpha = \\arctan\\left(\\frac{1}{3}\\right) \\approx 18{,}4°$$
                </div>
            </details>
        `
    },
    // Integral
    {
        id: "ana-013", niveau: "ga",
        category: "integral",
        question: "Wie bilde ich eine Stammfunktion?",
        answer: `
            <h4>Stammfunktion (Integral)</h4>
            <div class="formula-box">$$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$$</div>
            <p>Potenzregel "rückwärts": Exponent erhöhen, durch neuen Exponenten teilen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = 3x^2$$<br>
                    $$F(x) = 3 \\cdot \\frac{x^3}{3} + C = x^3 + C$$<br><br>
                    $$g(x) = 4x^3 - 2x$$<br>
                    $$G(x) = x^4 - x^2 + C$$
                </div>
            </details>
        `
    },
    {
        id: "ana-014", niveau: "ga",
        category: "integral",
        question: "Wie bilde ich die Stammfunktion von \\( e^{kx} \\)?",
        answer: `
            <h4>Stammfunktion der e-Funktion</h4>
            <div class="formula-box">$$\\int e^{kx} \\, dx = \\frac{1}{k} \\cdot e^{kx} + C$$</div>
            <p>Durch den inneren Faktor k teilen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = e^{2x}$$<br>
                    $$F(x) = \\frac{1}{2}e^{2x} + C$$<br><br>
                    $$g(x) = 6e^{-3x}$$<br>
                    $$G(x) = 6 \\cdot \\frac{1}{-3}e^{-3x} + C = -2e^{-3x} + C$$
                </div>
            </details>
        `
    },
    {
        id: "ana-015", niveau: "ga",
        category: "integral",
        question: "Wie berechne ich die Fläche unter einem Graphen?",
        answer: `
            <h4>Flächenberechnung</h4>
            <div class="formula-box">$$A = \\left|\\int_a^b f(x) \\, dx\\right|$$</div>
            <ol>
                <li>Stammfunktion $$F(x)$$ bilden</li>
                <li>$$F(b) - F(a)$$ berechnen</li>
                <li>Bei negativen Werten: Betrag nehmen!</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2$$ von $$x = 0$$ bis $$x = 3$$<br><br>
                    $$F(x) = \\frac{x^3}{3}$$<br><br>
                    $$A = F(3) - F(0) = \\frac{27}{3} - 0 = 9$$
                </div>
            </details>
        `
    },
    {
        id: "ana-016", niveau: "ga",
        category: "integral",
        question: "Wie berechne ich die Fläche zwischen zwei Graphen?",
        answer: `
            <h4>Fläche zwischen Graphen</h4>
            <div class="formula-box">$$A = \\left|\\int_a^b (f(x) - g(x)) \\, dx\\right|$$</div>
            <ol>
                <li>Schnittpunkte bestimmen (= Grenzen)</li>
                <li>Differenz $$f(x) - g(x)$$ bilden</li>
                <li>Integrieren und Betrag nehmen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = 4 - x^2$$, $$g(x) = x^2$$<br>
                    Schnitt: $$4 - x^2 = x^2 \\Rightarrow x = \\pm\\sqrt{2}$$<br><br>
                    $$A = \\int_{-\\sqrt{2}}^{\\sqrt{2}} (4 - 2x^2) \\, dx$$<br>
                    $$= \\left[4x - \\frac{2x^3}{3}\\right]_{-\\sqrt{2}}^{\\sqrt{2}}$$<br>
                    $$= \\frac{16\\sqrt{2}}{3} \\approx 7{,}54$$
                </div>
            </details>
        `
    },
    {
        id: "ana-017", niveau: "ga",
        category: "integral",
        question: "Wie lese ich ein Integral aus einem Graphen ab?",
        answer: `
            <h4>Integral graphisch bestimmen</h4>
            <ol>
                <li>Kästchen unter/über der x-Achse zählen</li>
                <li>Kästchenfläche bestimmen (Achsenbeschriftung!)</li>
                <li>Fläche über x-Achse: positiv</li>
                <li>Fläche unter x-Achse: negativ</li>
            </ol>
            <p><strong>Tipp:</strong> Bei Stammfunktion F: $$\\int_a^b f(x)\\,dx = F(b) - F(a)$$</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Kästchen: 1 LE × 1 LE = 1 FE<br><br>
                    Über x-Achse: 6 Kästchen = +6<br>
                    Unter x-Achse: 2 Kästchen = -2<br><br>
                    Integral (orientiert): 6 + (-2) = 4<br>
                    Fläche (Betrag): 6 + 2 = 8
                </div>
            </details>
        `
    },
    {
        id: "ana-018", niveau: "ga",
        category: "integral",
        question: "Wann muss ich beim Integrieren aufteilen?",
        answer: `
            <h4>Nullstellen beachten!</h4>
            <p>Wenn $$f(x)$$ im Intervall $$[a,b]$$ das Vorzeichen wechselt:</p>
            <ol>
                <li>Nullstellen im Intervall finden</li>
                <li>Integral an Nullstellen aufteilen</li>
                <li>Jeden Bereich einzeln berechnen</li>
                <li>Beträge addieren</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x$$ von $$-2$$ bis $$3$$<br>
                    Nullstelle bei $$x = 0$$<br><br>
                    $$A_1 = \\left|\\int_{-2}^{0} x \\, dx\\right| = |-2| = 2$$<br>
                    $$A_2 = \\left|\\int_{0}^{3} x \\, dx\\right| = |4{,}5| = 4{,}5$$<br><br>
                    Gesamtfläche: $$A = 2 + 4{,}5 = 6{,}5$$
                </div>
            </details>
        `
    },
    // Sonstiges
    {
        id: "ana-019", niveau: "ga",
        category: "sonstiges",
        question: "Wie löse ich eine Gleichung mit \\( e^x \\)?",
        answer: `
            <h4>Gleichungen mit e-Funktion</h4>
            <ol>
                <li>$$e^{...}$$ isolieren</li>
                <li>Logarithmieren: $$\\ln(e^x) = x$$</li>
            </ol>
            <p><strong>Wichtig:</strong> $$e^x > 0$$ für alle x!</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$2e^{3x} = 10$$<br>
                    $$e^{3x} = 5$$<br>
                    $$3x = \\ln(5)$$<br>
                    $$x = \\frac{\\ln(5)}{3} \\approx 0{,}54$$
                </div>
            </details>
        `
    },
    {
        id: "ana-020", niveau: "ga",
        category: "sonstiges",
        question: "Wie beeinflusst ein Parameter den Graphen?",
        answer: `
            <h4>Parameterfunktionen $$f_a(x)$$</h4>
            <ul>
                <li>$$f(x) + a$$: Verschiebung in y-Richtung</li>
                <li>$$f(x - a)$$: Verschiebung in x-Richtung (entgegen!)</li>
                <li>$$a \\cdot f(x)$$: Streckung/Stauchung in y-Richtung</li>
                <li>$$f(a \\cdot x)$$: Stauchung/Streckung in x-Richtung</li>
                <li>$$-f(x)$$: Spiegelung an x-Achse</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f_a(x) = (x - a)^2$$<br><br>
                    Scheitelpunkt bei $$(a|0)$$<br>
                    → Verschiebung nach rechts um $$a$$<br><br>
                    $$a = 2$$: Scheitelpunkt bei $$(2|0)$$<br>
                    $$a = -1$$: Scheitelpunkt bei $$(-1|0)$$
                </div>
            </details>
        `
    },
    {
        id: "ana-021", niveau: "ga",
        category: "sonstiges",
        question: "Wie bestimme ich eine Funktion aus Bedingungen?",
        answer: `
            <h4>Steckbriefaufgaben</h4>
            <ol>
                <li>Allgemeinen Ansatz wählen (z.B. $$ax^3 + bx^2 + cx + d$$)</li>
                <li>Bedingungen in Gleichungen übersetzen</li>
                <li>Gleichungssystem aufstellen und lösen</li>
            </ol>
            <p><strong>Typische Bedingungen:</strong></p>
            <ul>
                <li>"geht durch P(x|y)" → $$f(x) = y$$</li>
                <li>"Extremum bei x" → $$f'(x) = 0$$</li>
                <li>"Wendepunkt bei x" → $$f''(x) = 0$$</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gesucht: Parabel durch (0|1), (1|0), (2|1)<br>
                    Ansatz: $$f(x) = ax^2 + bx + c$$<br><br>
                    $$f(0) = 1$$: $$c = 1$$<br>
                    $$f(1) = 0$$: $$a + b + 1 = 0$$<br>
                    $$f(2) = 1$$: $$4a + 2b + 1 = 1$$<br><br>
                    Lösung: $$a = 1, b = -2, c = 1$$<br>
                    $$f(x) = x^2 - 2x + 1$$
                </div>
            </details>
        `
    },
    {
        id: "ana-022", niveau: "ga",
        category: "sonstiges",
        question: "Wie prüfe ich, ob ein Punkt auf einem Graphen liegt?",
        answer: `
            <h4>Punktprobe</h4>
            <ol>
                <li>x-Koordinate in $$f(x)$$ einsetzen</li>
                <li>Ergebnis mit y-Koordinate vergleichen</li>
                <li>Gleich? → Punkt liegt auf Graph</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2 - 4$$<br>
                    Liegt P(3|5) auf dem Graphen?<br><br>
                    $$f(3) = 9 - 4 = 5$$ ✓<br>
                    Ja, P liegt auf dem Graphen.<br><br>
                    Liegt Q(2|1) auf dem Graphen?<br>
                    $$f(2) = 4 - 4 = 0 \\neq 1$$ ✗<br>
                    Nein.
                </div>
            </details>
        `
    },
    {
        id: "ana-023", niveau: "ga",
        category: "sonstiges",
        question: "Wie interpretiere ich den Differenzenquotienten?",
        answer: `
            <h4>Differenzenquotient (Mittlere Änderungsrate)</h4>
            <div class="formula-box">$$\\frac{f(b) - f(a)}{b - a} = \\frac{\\Delta y}{\\Delta x}$$</div>
            <p>Durchschnittliche Steigung im Intervall $$[a,b]$$ = Sekantensteigung</p>
            <p><strong>Anwendung:</strong> "Wie stark ändert sich f im Durchschnitt?"</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Bevölkerung: $$f(0) = 1000$$, $$f(10) = 1500$$<br><br>
                    Mittlere Änderungsrate:<br>
                    $$\\frac{1500 - 1000}{10 - 0} = 50$$<br><br>
                    → Im Durchschnitt 50 Personen pro Jahr
                </div>
            </details>
        `
    },
    {
        id: "ana-024", niveau: "ga",
        category: "sonstiges",
        question: "Was bedeutet \\( f'(x_0) \\) im Sachzusammenhang?",
        answer: `
            <h4>Momentane Änderungsrate</h4>
            <p>$$f'(x_0)$$ gibt an, wie schnell sich $$f$$ an der Stelle $$x_0$$ ändert.</p>
            <ul>
                <li>Einheit: [y-Einheit] pro [x-Einheit]</li>
                <li>$$f'(x_0) > 0$$: f wächst</li>
                <li>$$f'(x_0) < 0$$: f nimmt ab</li>
                <li>$$f'(x_0) = 0$$: momentan keine Änderung</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    h(t) = Höhe in Metern nach t Sekunden<br>
                    $$h'(3) = 5$$ m/s<br><br>
                    → Nach 3 Sekunden steigt die Höhe<br>
                    mit 5 Metern pro Sekunde.
                </div>
            </details>
        `
    },
    {
        id: "ana-025", niveau: "ga",
        category: "sonstiges",
        question: "Was bedeutet \\( \\int_a^b f(x)\\,dx \\) im Sachzusammenhang?",
        answer: `
            <h4>Integral im Sachkontext</h4>
            <p>Das Integral berechnet die <strong>Gesamtänderung</strong> oder <strong>Gesamtmenge</strong>.</p>
            <ul>
                <li>Geschwindigkeit → Strecke</li>
                <li>Zuflussrate → Volumen</li>
                <li>Wachstumsrate → Bestandsänderung</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    v(t) = Geschwindigkeit in km/h<br><br>
                    $$\\int_0^2 v(t) \\, dt = 150$$<br><br>
                    → In den ersten 2 Stunden wurden<br>
                    insgesamt 150 km zurückgelegt.
                </div>
            </details>
        `
    },
    // Neue Karten basierend auf IQB 2025
    {
        id: "ana-026", niveau: "ga",
        category: "ableitung",
        question: "Wie leite ich \\( \\sin(x) \\) und \\( \\cos(x) \\) ab?",
        answer: `
            <h4>Trigonometrische Ableitungen</h4>
            <div class="formula-box">
                $$\\sin(x) \\rightarrow \\cos(x)$$<br><br>
                $$\\cos(x) \\rightarrow -\\sin(x)$$
            </div>
            <p><strong>Mit Kettenregel:</strong></p>
            <ul>
                <li>$$\\sin(kx) \\rightarrow k \\cdot \\cos(kx)$$</li>
                <li>$$\\cos(kx) \\rightarrow -k \\cdot \\sin(kx)$$</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = 3\\sin(2x)$$<br>
                    $$f'(x) = 3 \\cdot 2 \\cdot \\cos(2x) = 6\\cos(2x)$$<br><br>
                    $$g(x) = \\cos(\\pi x)$$<br>
                    $$g'(x) = -\\pi \\cdot \\sin(\\pi x)$$
                </div>
            </details>
        `
    },
    {
        id: "ana-027", niveau: "ga",
        category: "sonstiges",
        question: "Wie hängen \\( e^x \\) und \\( \\ln(x) \\) zusammen?",
        answer: `
            <h4>Umkehrfunktionen e und ln</h4>
            <div class="formula-box">
                $$e^{\\ln(x)} = x \\quad \\text{und} \\quad \\ln(e^x) = x$$
            </div>
            <p><strong>Wichtige Regeln:</strong></p>
            <ul>
                <li>$$\\ln(a \\cdot b) = \\ln(a) + \\ln(b)$$</li>
                <li>$$\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)$$</li>
                <li>$$\\ln(a^n) = n \\cdot \\ln(a)$$</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Löse: $$e^{2x} = 5$$<br><br>
                    $$\\ln(e^{2x}) = \\ln(5)$$<br>
                    $$2x = \\ln(5)$$<br>
                    $$x = \\frac{\\ln(5)}{2} \\approx 0{,}805$$<br><br>
                    Ableitung von $$\\ln(x)$$:<br>
                    $$(\\ln(x))' = \\frac{1}{x}$$
                </div>
            </details>
        `
    },
    {
        id: "ana-028", niveau: "ga",
        category: "kurvendiskussion",
        question: "Wie bestimme ich parallele Tangenten?",
        answer: `
            <h4>Parallele Tangenten finden</h4>
            <p>Tangenten sind parallel, wenn sie die gleiche Steigung haben.</p>
            <ol>
                <li>Setze $$f'(x) = m$$ (gegebene Steigung)</li>
                <li>Löse die Gleichung nach $$x$$</li>
                <li>Jede Lösung gibt einen Berührpunkt</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^3 - 3x$$<br>
                    Gesucht: Tangente parallel zur Geraden $$y = 9x$$<br><br>
                    $$f'(x) = 3x^2 - 3 = 9$$<br>
                    $$3x^2 = 12$$<br>
                    $$x^2 = 4$$<br>
                    $$x = \\pm 2$$<br><br>
                    → Zwei Stellen mit Steigung 9:<br>
                    Bei $$x = 2$$: Punkt $$(2|2)$$<br>
                    Bei $$x = -2$$: Punkt $$(-2|-2)$$
                </div>
            </details>
        `
    },
    {
        id: "ana-029", niveau: "ga",
        category: "integral",
        question: "Wie berechne ich die Fläche zwischen Graph und Tangente?",
        answer: `
            <h4>Fläche zwischen Funktion und Tangente</h4>
            <ol>
                <li>Tangentengleichung $$t(x)$$ aufstellen</li>
                <li>Schnittpunkte von $$f(x)$$ und $$t(x)$$ berechnen</li>
                <li>Differenz integrieren: $$\\int_a^b |f(x) - t(x)|\\,dx$$</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2$$, Tangente an $$x_0 = 1$$<br><br>
                    Tangente: $$t(x) = 2x - 1$$<br><br>
                    Schnittpunkte: $$x^2 = 2x - 1$$<br>
                    $$x^2 - 2x + 1 = 0$$<br>
                    $$(x-1)^2 = 0 \\Rightarrow x = 1$$ (doppelt)<br><br>
                    → Nur Berührpunkt, keine eingeschlossene Fläche!<br><br>
                    Bei echter Schnittfläche (z.B. mit einer anderen Tangente):<br>
                    $$A = \\int_a^b |f(x) - t(x)|\\,dx$$
                </div>
            </details>
        `
    },
    {
        id: "ana-030", niveau: "ga",
        category: "sonstiges",
        question: "Wie interpretiere ich einen Hochpunkt im Sachkontext?",
        answer: `
            <h4>Hochpunkt im Sachzusammenhang</h4>
            <p>Ein <strong>Hochpunkt</strong> bedeutet:</p>
            <ul>
                <li>Die Funktion erreicht dort ein <strong>Maximum</strong></li>
                <li>Die Änderungsrate wechselt von positiv zu negativ</li>
                <li>x-Koordinate: Zeitpunkt/Stelle des Maximums</li>
                <li>y-Koordinate: Maximaler Wert</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    h(t) = Wasserhöhe in einem Becken<br>
                    Hochpunkt bei (3|5)<br><br>
                    <strong>Interpretation:</strong><br>
                    → Nach 3 Stunden erreicht der Wasserstand sein Maximum.<br>
                    → Die maximale Höhe beträgt 5 Meter.<br>
                    → Danach sinkt der Wasserstand wieder.
                </div>
            </details>
        `
    },
    {
        id: "ana-031", niveau: "ga",
        category: "ableitung",
        question: "Wie leite ich \\( \\ln(x) \\) ab?",
        answer: `
            <h4>Ableitung des natürlichen Logarithmus</h4>
            <div class="formula-box">$$\\frac{d}{dx}\\ln(x) = \\frac{1}{x}$$</div>
            <p><strong>Mit Kettenregel:</strong></p>
            <div class="formula-box">$$\\frac{d}{dx}\\ln(g(x)) = \\frac{g'(x)}{g(x)}$$</div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = \\ln(2x)$$<br>
                    $$f'(x) = \\frac{2}{2x} = \\frac{1}{x}$$<br><br>
                    $$g(x) = \\ln(x^2 + 1)$$<br>
                    $$g'(x) = \\frac{2x}{x^2 + 1}$$<br><br>
                    $$h(x) = 3\\ln(x)$$<br>
                    $$h'(x) = \\frac{3}{x}$$
                </div>
            </details>
        `
    },
    {
        id: "ana-032", niveau: "ga",
        category: "integral",
        question: "Wie bilde ich die Stammfunktion von \\( \\frac{1}{x} \\)?",
        answer: `
            <h4>Stammfunktion von 1/x</h4>
            <div class="formula-box">$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$</div>
            <p><strong>Wichtig:</strong> Betrag beachten!</p>
            <p>Allgemein für $$\\frac{g'(x)}{g(x)}$$:</p>
            <div class="formula-box">$$\\int \\frac{g'(x)}{g(x)}\\,dx = \\ln|g(x)| + C$$</div>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\int_1^e \\frac{1}{x}\\,dx = [\\ln(x)]_1^e$$<br>
                    $$= \\ln(e) - \\ln(1) = 1 - 0 = 1$$<br><br>
                    $$\\int \\frac{2x}{x^2+1}\\,dx = \\ln(x^2+1) + C$$<br>
                    (weil $$\\frac{d}{dx}(x^2+1) = 2x$$)
                </div>
            </details>
        `
    },
    // ===== eA-Karten =====
    // Grenzwerte
    {
        id: "ana-101", niveau: "ea",
        category: "grenzwerte",
        question: "Wie berechne ich Grenzwerte mit den Grenzwertsätzen?",
        answer: `
            <h4>Grenzwertsätze</h4>
            <div class="formula-box">
                $$\\lim (f \\pm g) = \\lim f \\pm \\lim g, \\quad \\lim (f \\cdot g) = \\lim f \\cdot \\lim g$$<br><br>
                $$\\lim \\frac{f}{g} = \\frac{\\lim f}{\\lim g} \\quad (\\lim g \\neq 0)$$
            </div>
            <p><strong>Merksatz:</strong> Grenzwerte dürfen gliedweise gebildet werden, solange alle Einzelgrenzwerte existieren und kein Nenner gegen 0 geht. Beim Typ „0/0" zuerst kürzen, bei \\( x \\to \\pm\\infty \\) Zähler und Nenner durch die höchste Potenz teilen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Beispiel 1 (Typ „0/0", kürzen):</strong><br>
                    $$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = \\lim_{x \\to 1} (x+1) = 2$$<br><br>
                    <strong>Beispiel 2 (Verhalten im Unendlichen):</strong><br>
                    $$\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 4} = \\lim_{x \\to \\infty} \\frac{3 + \\frac{1}{x^2}}{1 - \\frac{4}{x^2}} = \\frac{3 + 0}{1 - 0} = 3$$
                </div>
            </details>
        `
    },
    {
        id: "ana-102", niveau: "ea",
        category: "grenzwerte",
        question: "Wie untersuche ich das Verhalten an einer Stelle (Polstelle / Lücke)?",
        answer: `
            <h4>Definitionslücken gebrochenrationaler Funktionen</h4>
            <div class="formula-box">
                $$f(x) = \\frac{z(x)}{n(x)}, \\quad n(x_0) = 0$$<br><br>
                $$z(x_0) \\neq 0 \\Rightarrow \\text{Polstelle} \\qquad z(x_0) = 0 \\text{ und kürzbar} \\Rightarrow \\text{hebbare Lücke}$$
            </div>
            <p><strong>Vorgehen:</strong> Zähler und Nenner faktorisieren. Kürzt sich der Faktor \\( (x - x_0) \\) vollständig weg, ist \\( x_0 \\) eine hebbare Lücke (Grenzwert der gekürzten Funktion einsetzen). Bleibt er im Nenner, liegt eine Polstelle vor; das Vorzeichen links und rechts entscheidet über einen Vorzeichenwechsel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = \\frac{x^2 - 4}{x^2 - 2x} = \\frac{(x-2)(x+2)}{x(x-2)}, \\quad D = \\mathbb{R} \\setminus \\{0;\\, 2\\}$$<br><br>
                    <strong>Stelle \\( x = 2 \\):</strong> Faktor kürzt sich:
                    $$\\lim_{x \\to 2} \\frac{x+2}{x} = \\frac{4}{2} = 2$$
                    → hebbare Lücke bei \\( (2 \\,|\\, 2) \\).<br><br>
                    <strong>Stelle \\( x = 0 \\):</strong> Nenner bleibt 0, ursprünglicher Zähler \\( z(0) = -4 \\neq 0 \\) (gekürzte Form: Zähler \\( x + 2 \\to 2 \\)):
                    $$\\lim_{x \\to 0^-} \\frac{x+2}{x} = -\\infty, \\qquad \\lim_{x \\to 0^+} \\frac{x+2}{x} = +\\infty$$
                    → Polstelle mit Vorzeichenwechsel, senkrechte Asymptote \\( x = 0 \\).
                </div>
            </details>
        `
    },
    {
        id: "ana-103", niveau: "ea",
        category: "grenzwerte",
        question: "Wie prüfe ich Stetigkeit an einer Stelle?",
        answer: `
            <h4>Stetigkeit an der Stelle \\( x_0 \\)</h4>
            <div class="formula-box">
                $$f \\text{ stetig in } x_0 \\Leftrightarrow \\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)$$
            </div>
            <p><strong>Merksatz:</strong> Drei Werte vergleichen – linksseitiger Grenzwert, rechtsseitiger Grenzwert und Funktionswert. Stimmen alle drei überein, hat der Graph an dieser Stelle keinen Sprung. Typisch bei abschnittsweise definierten Funktionen: die Nahtstelle prüfen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = \\begin{cases} x^2 + 1 & \\text{für } x < 1 \\\\ 3x - 1 & \\text{für } x \\geq 1 \\end{cases}$$<br><br>
                    Linksseitig: \\( \\lim_{x \\to 1^-} (x^2 + 1) = 2 \\)<br>
                    Rechtsseitig: \\( \\lim_{x \\to 1^+} (3x - 1) = 2 \\)<br>
                    Funktionswert: \\( f(1) = 3 \\cdot 1 - 1 = 2 \\)<br><br>
                    Alle drei Werte sind gleich → \\( f \\) ist bei \\( x_0 = 1 \\) stetig.<br><br>
                    <strong>Variante mit Parameter:</strong> Für \\( g(x) = x^2 \\) (\\( x < 2 \\)) und \\( g(x) = ax + 1 \\) (\\( x \\geq 2 \\)) muss gelten
                    $$4 = 2a + 1 \\Rightarrow a = \\frac{3}{2}$$
                </div>
            </details>
        `
    },
    // Ableitung (eA)
    {
        id: "ana-104", niveau: "ea",
        category: "ableitung",
        question: "Wie leite ich verkettete Funktionen wie \\( \\sin(x^2) \\) oder \\( e^{-x^2} \\) ab?",
        answer: `
            <h4>Kettenregel</h4>
            <div class="formula-box">$$f(x) = u(v(x)) \\Rightarrow f'(x) = u'(v(x)) \\cdot v'(x)$$</div>
            <p><strong>Merksatz:</strong> „Äußere Ableitung mal innere Ableitung." Zuerst die äußere Funktion ableiten und die innere unverändert einsetzen, dann mit der Ableitung der inneren Funktion multiplizieren.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = \\sin(x^2): \\quad f'(x) = \\cos(x^2) \\cdot 2x = 2x \\cos(x^2)$$<br><br>
                    $$g(x) = e^{-x^2}: \\quad g'(x) = e^{-x^2} \\cdot (-2x) = -2x \\, e^{-x^2}$$<br><br>
                    $$h(x) = (2x + 1)^5: \\quad h'(x) = 5(2x+1)^4 \\cdot 2 = 10(2x+1)^4$$
                </div>
            </details>
        `
    },
    {
        id: "ana-105", niveau: "ea",
        category: "ableitung",
        question: "Wie wende ich die Quotientenregel an?",
        answer: `
            <h4>Quotientenregel</h4>
            <div class="formula-box">$$f(x) = \\frac{u(x)}{v(x)} \\Rightarrow f'(x) = \\frac{u'(x) \\cdot v(x) - u(x) \\cdot v'(x)}{[v(x)]^2}$$</div>
            <p><strong>Merksatz:</strong> „NAZ minus ZAN durch Nenner-Quadrat" (Nenner · Ableitung Zähler − Zähler · Ableitung Nenner). Die Reihenfolge im Zähler ist wichtig, da subtrahiert wird. Nach dem Ableiten den Zähler vereinfachen, den Nenner meist faktorisiert lassen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = \\frac{x^2}{x + 1}, \\quad u = x^2,\\ u' = 2x,\\ v = x + 1,\\ v' = 1$$<br>
                    $$f'(x) = \\frac{2x(x+1) - x^2 \\cdot 1}{(x+1)^2} = \\frac{x^2 + 2x}{(x+1)^2}$$<br><br>
                    $$g(x) = \\frac{e^x}{x}: \\quad g'(x) = \\frac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\frac{e^x (x - 1)}{x^2}$$
                </div>
            </details>
        `
    },
    {
        id: "ana-106", niveau: "ea",
        category: "ableitung",
        question: "Wie leite ich die Umkehrfunktion ab (einfache Fälle)?",
        answer: `
            <h4>Ableitung der Umkehrfunktion</h4>
            <div class="formula-box">$$\\left(f^{-1}\\right)'(y_0) = \\frac{1}{f'(x_0)} \\quad \\text{mit } y_0 = f(x_0),\\ f'(x_0) \\neq 0$$</div>
            <p><strong>Merksatz:</strong> Der Graph der Umkehrfunktion ist die Spiegelung an \\( y = x \\); dabei wird die Tangentensteigung zum Kehrwert. Man muss die Umkehrfunktion also nicht explizit kennen – es genügt, die Stelle \\( x_0 \\) mit \\( f(x_0) = y_0 \\) zu finden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^3 + x \\quad (\\text{streng monoton steigend, also umkehrbar})$$<br>
                    Gesucht: \\( (f^{-1})'(2) \\). Wegen \\( f(1) = 1 + 1 = 2 \\) ist \\( x_0 = 1 \\).<br>
                    $$f'(x) = 3x^2 + 1 \\Rightarrow f'(1) = 4 \\Rightarrow (f^{-1})'(2) = \\frac{1}{4}$$<br><br>
                    <strong>Bekannter Spezialfall:</strong> \\( f(x) = e^x \\), \\( f^{-1}(y) = \\ln(y) \\):
                    $$(\\ln)'(y) = \\frac{1}{e^{x_0}} = \\frac{1}{y}$$
                </div>
            </details>
        `
    },
    // Kurvendiskussion (eA)
    {
        id: "ana-107", niveau: "ea",
        category: "kurvendiskussion",
        question: "Wie funktioniert das Newton-Verfahren?",
        answer: `
            <h4>Newton-Verfahren (Nullstellen näherungsweise)</h4>
            <div class="formula-box">$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$</div>
            <p><strong>Merksatz:</strong> An der Stelle \\( x_n \\) wird die Tangente gelegt; ihre Nullstelle ist die nächste Näherung \\( x_{n+1} \\). Der Startwert sollte nahe an der gesuchten Nullstelle liegen und \\( f'(x_n) \\neq 0 \\) sein. Abbruch, wenn sich die Näherungen bis zur gewünschten Stelle nicht mehr ändern.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^3 - 2x - 5, \\quad f'(x) = 3x^2 - 2, \\quad x_0 = 2$$<br><br>
                    $$x_1 = 2 - \\frac{f(2)}{f'(2)} = 2 - \\frac{8 - 4 - 5}{12 - 2} = 2 - \\frac{-1}{10} = 2{,}1$$<br><br>
                    $$x_2 = 2{,}1 - \\frac{f(2{,}1)}{f'(2{,}1)} = 2{,}1 - \\frac{0{,}061}{11{,}23} \\approx 2{,}0946$$<br><br>
                    Die Nullstelle liegt bei \\( x \\approx 2{,}0946 \\) (bereits nach zwei Schritten auf vier Nachkommastellen genau).
                </div>
            </details>
        `
    },
    {
        id: "ana-108", niveau: "ea",
        category: "kurvendiskussion",
        question: "Wie stelle ich eine Normalengleichung auf?",
        answer: `
            <h4>Normale im Punkt \\( P(x_0 \\,|\\, f(x_0)) \\)</h4>
            <div class="formula-box">$$n(x) = -\\frac{1}{f'(x_0)} \\cdot (x - x_0) + f(x_0) \\quad (f'(x_0) \\neq 0)$$</div>
            <p><strong>Merksatz:</strong> Die Normale steht senkrecht auf der Tangente. Für senkrechte Geraden gilt \\( m_t \\cdot m_n = -1 \\), also ist die Normalensteigung der negative Kehrwert der Tangentensteigung. Danach wie bei der Tangente den Punkt einsetzen (Punkt-Steigungs-Form).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(x) = x^2, \\quad P(1 \\,|\\, 1)$$<br>
                    $$f'(x) = 2x \\Rightarrow m_t = f'(1) = 2 \\Rightarrow m_n = -\\frac{1}{2}$$<br><br>
                    $$n(x) = -\\frac{1}{2}(x - 1) + 1 = -\\frac{1}{2}x + \\frac{3}{2}$$<br><br>
                    Probe: \\( n(1) = -0{,}5 + 1{,}5 = 1 = f(1) \\) ✓ und \\( 2 \\cdot \\left(-\\frac{1}{2}\\right) = -1 \\) ✓
                </div>
            </details>
        `
    },
    // Scharen
    {
        id: "ana-109", niveau: "ea",
        category: "scharen",
        question: "Wie untersuche ich eine Funktionenschar \\( f_a(x) \\)?",
        answer: `
            <h4>Funktionenschar mit Parameter \\( a \\)</h4>
            <div class="formula-box">$$f_a(x) = x \\cdot e^{-ax}, \\quad a > 0 \\qquad \\text{(Parameter wie eine Zahl behandeln)}$$</div>
            <p><strong>Merksatz:</strong> Der Parameter ist eine feste, aber unbekannte Zahl. Alle Schritte der Kurvendiskussion (Ableiten, Nullsetzen, Vorzeichen prüfen) laufen wie gewohnt – die Ergebnisse hängen dann von \\( a \\) ab. Immer angeben, für welche \\( a \\) ein Schritt gilt (z. B. Division durch \\( a \\) nur für \\( a \\neq 0 \\)).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f_a(x) = x \\, e^{-ax}, \\quad a > 0$$<br>
                    <strong>Nullstelle:</strong> \\( x \\, e^{-ax} = 0 \\Rightarrow x = 0 \\) (da \\( e^{-ax} > 0 \\)).<br><br>
                    <strong>Ableitung (Produkt- und Kettenregel):</strong>
                    $$f_a'(x) = 1 \\cdot e^{-ax} + x \\cdot (-a) e^{-ax} = e^{-ax}(1 - ax)$$<br>
                    <strong>Extremum:</strong> \\( 1 - ax = 0 \\Rightarrow x = \\frac{1}{a} \\), Vorzeichenwechsel von + nach − → Hochpunkt
                    $$H\\left(\\frac{1}{a} \\,\\Big|\\, \\frac{1}{a \\cdot e}\\right)$$<br>
                    <strong>Verhalten:</strong> \\( x \\to \\infty: f_a(x) \\to 0 \\) (e-Funktion dominiert); \\( x \\to -\\infty: f_a(x) \\to -\\infty \\).<br><br>
                    Je größer \\( a \\), desto weiter rückt der Hochpunkt nach links und nach unten.
                </div>
            </details>
        `
    },
    {
        id: "ana-110", niveau: "ea",
        category: "scharen",
        question: "Wie bestimme ich die Ortskurve der Extrempunkte?",
        answer: `
            <h4>Ortskurve (Ortslinie) der Extrempunkte</h4>
            <div class="formula-box">
                $$E_a\\big(x(a) \\,|\\, y(a)\\big): \\quad x = x(a) \\text{ nach } a \\text{ auflösen, in } y(a) \\text{ einsetzen}$$
            </div>
            <p><strong>Merksatz:</strong> Die Ortskurve ist die Kurve, auf der alle Extrempunkte der Schar liegen. Man eliminiert den Parameter: aus der x-Koordinate \\( a \\) ausdrücken und in die y-Koordinate einsetzen – so entsteht eine Gleichung \\( y = g(x) \\) ohne \\( a \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f_a(x) = x^2 - 2ax + a$$<br>
                    $$f_a'(x) = 2x - 2a = 0 \\Rightarrow x = a$$<br>
                    $$y = f_a(a) = a^2 - 2a^2 + a = -a^2 + a$$<br><br>
                    Tiefpunkt \\( T_a(a \\,|\\, -a^2 + a) \\). Parameter eliminieren: \\( a = x \\) einsetzen:
                    $$y = -x^2 + x$$<br>
                    Alle Tiefpunkte liegen auf der Parabel \\( g(x) = -x^2 + x \\). Probe für \\( a = 2 \\): \\( T_2(2 \\,|\\, -2) \\) und \\( g(2) = -4 + 2 = -2 \\) ✓
                </div>
            </details>
        `
    },
    {
        id: "ana-111", niveau: "ea",
        category: "scharen",
        question: "Wie finde ich gemeinsame Punkte aller Scharkurven?",
        answer: `
            <h4>Gemeinsame Punkte einer Schar</h4>
            <div class="formula-box">
                $$f_a(x) = a \\cdot T(x) + R(x) \\quad \\Rightarrow \\quad T(x) = 0 \\text{ liefert die gemeinsamen Stellen}$$
            </div>
            <p><strong>Merksatz:</strong> Ein Punkt gehört zu allen Kurven, wenn sein Funktionswert nicht von \\( a \\) abhängt. Dazu den Funktionsterm nach dem Parameter ordnen: Der Faktor vor \\( a \\) muss null werden. Alternativ zwei verschiedene Parameterwerte \\( a \\neq b \\) gleichsetzen (\\( f_a(x) = f_b(x) \\)) und die Lösung für beliebige \\( a, b \\) prüfen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f_a(x) = a x^2 + (1 - a) x = a(x^2 - x) + x$$<br><br>
                    Faktor vor \\( a \\) nullsetzen:
                    $$x^2 - x = 0 \\Rightarrow x(x - 1) = 0 \\Rightarrow x = 0 \\text{ oder } x = 1$$<br>
                    Funktionswerte (unabhängig von \\( a \\)): \\( f_a(0) = 0 \\), \\( f_a(1) = a + 1 - a = 1 \\).<br><br>
                    Gemeinsame Punkte aller Scharkurven: \\( P_1(0 \\,|\\, 0) \\) und \\( P_2(1 \\,|\\, 1) \\).
                </div>
            </details>
        `
    },
    // Integral (eA)
    {
        id: "ana-112", niveau: "ea",
        category: "integral",
        question: "Wie integriere ich mit linearer Substitution?",
        answer: `
            <h4>Lineare Substitution (innere Funktion \\( mx + n \\))</h4>
            <div class="formula-box">$$\\int f(mx + n) \\, dx = \\frac{1}{m} \\cdot F(mx + n) + C \\quad (m \\neq 0)$$</div>
            <p><strong>Merksatz:</strong> Ist die innere Funktion linear, entsteht beim Ableiten der Stammfunktion nach der Kettenregel der Faktor \\( m \\) – deshalb muss man durch \\( m \\) teilen, um ihn auszugleichen. Bei nichtlinearer innerer Funktion funktioniert das nicht!</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\int (2x + 3)^4 \\, dx = \\frac{1}{2} \\cdot \\frac{(2x+3)^5}{5} + C = \\frac{(2x+3)^5}{10} + C$$<br><br>
                    $$\\int \\cos(2x - 1) \\, dx = \\frac{1}{2} \\sin(2x - 1) + C$$<br><br>
                    $$\\int_0^1 e^{3x} \\, dx = \\left[\\frac{1}{3} e^{3x}\\right]_0^1 = \\frac{e^3 - 1}{3} \\approx 6{,}362$$
                </div>
            </details>
        `
    },
    {
        id: "ana-113", niveau: "ea",
        category: "integral",
        question: "Wie integriere ich \\( \\frac{1}{ax+b} \\)?",
        answer: `
            <h4>Stammfunktion von \\( \\frac{1}{ax + b} \\)</h4>
            <div class="formula-box">$$\\int \\frac{1}{ax + b} \\, dx = \\frac{1}{a} \\ln|ax + b| + C \\quad (a \\neq 0)$$</div>
            <p><strong>Merksatz:</strong> Kombination aus \\( \\int \\frac{1}{x}\\,dx = \\ln|x| + C \\) und linearer Substitution: durch den inneren Faktor \\( a \\) teilen. Der Betrag sichert, dass die Stammfunktion auch für negative Argumente definiert ist. Probe durch Ableiten: \\( \\frac{1}{a} \\cdot \\frac{a}{ax+b} = \\frac{1}{ax+b} \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\int \\frac{1}{2x + 3} \\, dx = \\frac{1}{2} \\ln|2x + 3| + C$$<br><br>
                    $$\\int_0^1 \\frac{1}{2x + 3} \\, dx = \\frac{1}{2}\\big[\\ln|2x+3|\\big]_0^1 = \\frac{1}{2}\\left(\\ln 5 - \\ln 3\\right) = \\frac{1}{2}\\ln\\frac{5}{3} \\approx 0{,}2554$$<br><br>
                    $$\\int \\frac{4}{1 - 3x} \\, dx = 4 \\cdot \\frac{1}{-3} \\ln|1 - 3x| + C = -\\frac{4}{3}\\ln|1 - 3x| + C$$
                </div>
            </details>
        `
    },
    {
        id: "ana-114", niveau: "ea",
        category: "integral",
        question: "Was ist eine Integralfunktion \\( I_a(x) \\) und wie leite ich sie ab?",
        answer: `
            <h4>Integralfunktion</h4>
            <div class="formula-box">
                $$I_a(x) = \\int_a^x f(t) \\, dt \\qquad I_a'(x) = f(x) \\qquad I_a(a) = 0$$
            </div>
            <p><strong>Merksatz:</strong> Die Integralfunktion ordnet der oberen Grenze \\( x \\) den orientierten Flächeninhalt ab der festen unteren Grenze \\( a \\) zu. Nach dem Hauptsatz ist sie eine Stammfunktion von \\( f \\) – nämlich genau die mit der Nullstelle bei \\( x = a \\). Extrema von \\( I_a \\) liegen also bei Nullstellen von \\( f \\) mit Vorzeichenwechsel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$f(t) = 2t, \\quad I_1(x) = \\int_1^x 2t \\, dt = \\big[t^2\\big]_1^x = x^2 - 1$$<br><br>
                    Ableitung: \\( I_1'(x) = 2x = f(x) \\) ✓, und \\( I_1(1) = 1 - 1 = 0 \\) ✓<br><br>
                    Nullstellen von \\( I_1 \\): \\( x^2 - 1 = 0 \\Rightarrow x = 1 \\) (untere Grenze) und \\( x = -1 \\).<br>
                    Konkret: \\( I_1(3) = 9 - 1 = 8 \\) ist die Fläche unter \\( f \\) zwischen 1 und 3.
                </div>
            </details>
        `
    },
    {
        id: "ana-115", niveau: "ea",
        category: "integral",
        question: "Wie berechne ich ein uneigentliches Integral?",
        answer: `
            <h4>Uneigentliches Integral (unbeschränkter Bereich)</h4>
            <div class="formula-box">$$\\int_a^{\\infty} f(x) \\, dx = \\lim_{z \\to \\infty} \\int_a^{z} f(x) \\, dx$$</div>
            <p><strong>Merksatz:</strong> Unendlich ist keine Zahl – deshalb zuerst mit einer variablen Grenze \\( z \\) integrieren und anschließend den Grenzwert \\( z \\to \\infty \\) bilden. Existiert der Grenzwert, hat die ins Unendliche reichende Fläche einen endlichen Inhalt (konvergent), sonst ist das Integral divergent.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\int_1^{\\infty} \\frac{1}{x^2} \\, dx = \\lim_{z \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^{z} = \\lim_{z \\to \\infty} \\left(-\\frac{1}{z} + 1\\right) = 1$$<br><br>
                    $$\\int_0^{\\infty} e^{-2x} \\, dx = \\lim_{z \\to \\infty} \\left[-\\frac{1}{2} e^{-2x}\\right]_0^{z} = 0 + \\frac{1}{2} = \\frac{1}{2}$$<br><br>
                    <strong>Gegenbeispiel:</strong>
                    $$\\int_1^{\\infty} \\frac{1}{x} \\, dx = \\lim_{z \\to \\infty} \\ln(z) \\to \\infty \\quad \\text{(divergent)}$$
                </div>
            </details>
        `
    },
    // Sonstiges (eA)
    {
        id: "ana-116", niveau: "ea",
        category: "sonstiges",
        question: "Wie löse ich eine Extremwertaufgabe mit Nebenbedingung?",
        answer: `
            <h4>Extremwertaufgabe</h4>
            <div class="formula-box">
                $$\\text{Hauptbedingung} + \\text{Nebenbedingung} \\Rightarrow \\text{Zielfunktion } Z(x) \\text{ mit einer Variablen}$$
            </div>
            <ol>
                <li>Hauptbedingung: Was soll extremal werden? (z. B. Flächeninhalt)</li>
                <li>Nebenbedingung: Zusammenhang der Variablen aufstellen, nach einer Variablen auflösen</li>
                <li>In die Hauptbedingung einsetzen → Zielfunktion \\( Z(x) \\) mit Definitionsbereich</li>
                <li>\\( Z'(x) = 0 \\) lösen, Art des Extremums prüfen (\\( Z'' \\) oder Vorzeichenwechsel)</li>
                <li>Randwerte des Definitionsbereichs vergleichen, Antwortsatz</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Ein rechteckiges Gehege wird an einer Mauer mit 40 m Zaun eingezäunt (drei Seiten). Wann ist die Fläche maximal?<br><br>
                    Hauptbedingung: \\( A = x \\cdot y \\), Nebenbedingung: \\( 2x + y = 40 \\Rightarrow y = 40 - 2x \\)<br>
                    $$Z(x) = x(40 - 2x) = 40x - 2x^2, \\quad 0 < x < 20$$<br>
                    $$Z'(x) = 40 - 4x = 0 \\Rightarrow x = 10, \\qquad Z''(x) = -4 < 0 \\Rightarrow \\text{Maximum}$$<br><br>
                    \\( y = 40 - 20 = 20 \\), also \\( A_{\\max} = 10 \\cdot 20 = 200\\ \\text{m}^2 \\). An den Rändern (\\( x \\to 0 \\), \\( x \\to 20 \\)) geht \\( A \\to 0 \\).
                </div>
            </details>
        `
    }
]
};
