// Repetitio-Deck: Analysis — gA-Karten aus dem GK-Trainer; eA-Karten werden ergänzt
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["analysis"] = {
    title: "Analysis",
    subtitle: "Ableiten, Kurvendiskussion, Integrieren",
    categories: {
        ableitung: "Ableitung",
        kurvendiskussion: "Kurvendisk.",
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
    }
]
};
