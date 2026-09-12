// Repetitio-Deck: Analytische Geometrie — gA-Karten aus dem GK-Trainer, eA-Karten geo-101 bis geo-115
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["geometrie"] = {
    title: "Analytische Geometrie",
    subtitle: "Vektoren, Geraden, Ebenen, Abstände, Kreis, LGS",
    categories: {
        vektoren: "Vektoren",
        geraden: "Geraden",
        ebenen: "Ebenen",
        abstand: "Abstände",
        kreis: "Kreis",
        lgs: "LGS"
    },
    cards: [
    // Vektoren
    {
        id: "geo-001", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich den Vektor \\( \\vec{AB} \\)?",
        answer: `
            <h4>Verbindungsvektor</h4>
            <div class="formula-box">
                $$\\vec{AB} = B - A$$
            </div>
            <p><strong>Merksatz:</strong> "Spitze minus Fuß"</p>
            <p>Jede Koordinate einzeln: Endpunkt minus Startpunkt</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gegeben: $$A(1|2|3)$$ und $$B(4|6|5)$$<br><br>
                    $$\\vec{AB} = B - A$$<br><br>
                    $$= \\begin{pmatrix} 4-1 \\\\ 6-2 \\\\ 5-3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 2 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "geo-002", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich die Länge eines Vektors?",
        answer: `
            <h4>Betrag eines Vektors</h4>
            <div class="formula-box">$$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$$</div>
            <p>Die Länge ist immer ≥ 0.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{v} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$$<br><br>
                    $$|\\vec{v}| = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$$
                </div>
            </details>
        `
    },
    {
        id: "geo-003", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich das Skalarprodukt?",
        answer: `
            <h4>Skalarprodukt</h4>
            <div class="formula-box">$$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$</div>
            <p>Das Ergebnis ist eine <strong>Zahl</strong> (kein Vektor!).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}, \\quad \\vec{b} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 4 \\end{pmatrix}$$<br><br>
                    $$\\vec{a} \\cdot \\vec{b} = 2 \\cdot 1 + 3 \\cdot (-1) + 1 \\cdot 4$$<br>
                    $$= 2 - 3 + 4 = 3$$
                </div>
            </details>
        `
    },
    {
        id: "geo-004", niveau: "ga",
        category: "vektoren",
        question: "Wie prüfe ich, ob zwei Vektoren senkrecht sind?",
        answer: `
            <h4>Orthogonalität prüfen</h4>
            <div class="formula-box">$$\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$$</div>
            <p>Zwei Vektoren stehen senkrecht aufeinander, wenn ihr Skalarprodukt Null ist.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{a} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad \\vec{b} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 5 \\end{pmatrix}$$<br><br>
                    $$\\vec{a} \\cdot \\vec{b} = 2 \\cdot 1 + 1 \\cdot (-2) + 0 \\cdot 5$$<br>
                    $$= 2 - 2 + 0 = 0$$ ✓<br><br>
                    → Die Vektoren sind orthogonal.
                </div>
            </details>
        `
    },
    {
        id: "geo-005", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich den Winkel zwischen zwei Vektoren?",
        answer: `
            <h4>Winkel zwischen Vektoren</h4>
            <div class="formula-box">$$\\cos(\\alpha) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$$</div>
            <ol>
                <li>Skalarprodukt berechnen</li>
                <li>Beide Beträge berechnen</li>
                <li>Einsetzen und cos⁻¹ anwenden</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{a} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\quad \\vec{b} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$$<br><br>
                    $$\\vec{a} \\cdot \\vec{b} = 1$$<br>
                    $$|\\vec{a}| = 1, \\quad |\\vec{b}| = \\sqrt{2}$$<br><br>
                    $$\\cos(\\alpha) = \\frac{1}{1 \\cdot \\sqrt{2}} = \\frac{1}{\\sqrt{2}}$$<br>
                    $$\\alpha = 45°$$
                </div>
            </details>
        `
    },
    {
        id: "geo-006", niveau: "ga",
        category: "vektoren",
        question: "Wie berechne ich den Mittelpunkt einer Strecke?",
        answer: `
            <h4>Mittelpunkt</h4>
            <div class="formula-box">$$M = \\frac{1}{2}(A + B) = \\begin{pmatrix} \\frac{a_1+b_1}{2} \\\\ \\frac{a_2+b_2}{2} \\\\ \\frac{a_3+b_3}{2} \\end{pmatrix}$$</div>
            <p>Arithmetisches Mittel der Koordinaten.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$A(2|4|6), \\quad B(8|2|4)$$<br><br>
                    $$M = \\begin{pmatrix} \\frac{2+8}{2} \\\\ \\frac{4+2}{2} \\\\ \\frac{6+4}{2} \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\\\ 5 \\end{pmatrix}$$<br><br>
                    $$M(5|3|5)$$
                </div>
            </details>
        `
    },
    // Geraden
    {
        id: "geo-007", niveau: "ga",
        category: "geraden",
        question: "Wie stelle ich eine Geradengleichung auf?",
        answer: `
            <h4>Geradengleichung in Parameterform</h4>
            <div class="formula-box">$$g: \\vec{x} = \\vec{p} + t \\cdot \\vec{v}$$</div>
            <p><strong>Stützvektor</strong> $$\\vec{p}$$: ein Punkt auf der Geraden<br>
            <strong>Richtungsvektor</strong> $$\\vec{v}$$: gibt die Richtung an</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    Gerade durch A(1|2|3) und B(4|6|5):<br><br>
                    $$\\vec{v} = \\vec{AB} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 2 \\end{pmatrix}$$<br><br>
                    $$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 3 \\\\ 4 \\\\ 2 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "geo-008", niveau: "ga",
        category: "geraden",
        question: "Wie prüfe ich, ob ein Punkt auf einer Geraden liegt?",
        answer: `
            <h4>Punktprobe Gerade</h4>
            <ol>
                <li>Punkt in Geradengleichung einsetzen</li>
                <li>Gleichungssystem nach t auflösen</li>
                <li>Alle drei Gleichungen müssen dasselbe t liefern!</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + t \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}$$<br>
                    Liegt P(5|4|5) auf g?<br><br>
                    $$5 = 1 + 2t \\Rightarrow t = 2$$<br>
                    $$4 = 2 + 1t \\Rightarrow t = 2$$ ✓<br>
                    $$5 = 3 + 1t \\Rightarrow t = 2$$ ✓<br><br>
                    → Ja, P liegt auf g.
                </div>
            </details>
        `
    },
    {
        id: "geo-009", niveau: "ga",
        category: "geraden",
        question: "Wie berechne ich die Spurpunkte einer Geraden?",
        answer: `
            <h4>Spurpunkte</h4>
            <p>Schnittpunkte mit den Koordinatenebenen:</p>
            <ul>
                <li><strong>$$S_{xy}$$</strong>: Setze $$z = 0$$, löse nach t</li>
                <li><strong>$$S_{xz}$$</strong>: Setze $$y = 0$$, löse nach t</li>
                <li><strong>$$S_{yz}$$</strong>: Setze $$x = 0$$, löse nach t</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\end{pmatrix} + t \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$$<br><br>
                    $$S_{xy}$$ (z=0): $$6 - 2t = 0 \\Rightarrow t = 3$$<br>
                    $$S_{xy}(5|10|0)$$<br><br>
                    $$S_{xz}$$ (y=0): $$4 + 2t = 0 \\Rightarrow t = -2$$<br>
                    $$S_{xz}(0|0|10)$$
                </div>
            </details>
        `
    },
    {
        id: "geo-010", niveau: "ga",
        category: "geraden",
        question: "Wie untersuche ich die Lage zweier Geraden?",
        answer: `
            <h4>Lagebeziehung von Geraden</h4>
            <ol>
                <li>Richtungsvektoren parallel? (Vielfache?)</li>
                <li>Wenn ja: Punktprobe → identisch oder echt parallel</li>
                <li>Wenn nein: Gleichsetzen, LGS lösen</li>
            </ol>
            <p>
                <strong>Lösbar:</strong> Schnittpunkt<br>
                <strong>Nicht lösbar:</strong> windschief
            </p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + s \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$$<br>
                    $$h: \\vec{x} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} + t \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$$<br><br>
                    Nicht parallel → Gleichsetzen:<br>
                    $$1 + s = 0 \\Rightarrow s = -1$$<br>
                    $$s = 1 + t \\Rightarrow t = -2$$<br>
                    Probe: $$0 = 0 + t \\cdot 1 = -2 \\neq 0$$ ✗<br><br>
                    → Geraden sind windschief.
                </div>
            </details>
        `
    },
    // Ebenen
    {
        id: "geo-011", niveau: "ga",
        category: "ebenen",
        question: "Wie stelle ich eine Ebenengleichung aus 3 Punkten auf?",
        answer: `
            <h4>Ebene in Parameterform</h4>
            <div class="formula-box">$$E: \\vec{x} = \\vec{a} + s \\cdot \\vec{AB} + t \\cdot \\vec{AC}$$</div>
            <ol>
                <li>Einen Punkt als Stützvektor wählen</li>
                <li>Zwei Spannvektoren berechnen (zu den anderen Punkten)</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$A(1|0|0), B(0|2|0), C(0|0|3)$$<br><br>
                    $$\\vec{AB} = \\begin{pmatrix} -1 \\\\ 2 \\\\ 0 \\end{pmatrix}, \\quad \\vec{AC} = \\begin{pmatrix} -1 \\\\ 0 \\\\ 3 \\end{pmatrix}$$<br><br>
                    $$E: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + s \\begin{pmatrix} -1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t \\begin{pmatrix} -1 \\\\ 0 \\\\ 3 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "geo-012", niveau: "ga",
        category: "ebenen",
        question: "Wie wandle ich in Koordinatenform um?",
        answer: `
            <h4>Koordinatenform der Ebene</h4>
            <div class="formula-box">$$E: n_1 x_1 + n_2 x_2 + n_3 x_3 = d$$</div>
            <ol>
                <li>Normalenvektor $$\\vec{n}$$ bestimmen (senkrecht zu beiden Spannvektoren)</li>
                <li>Einen Punkt einsetzen, um d zu berechnen</li>
            </ol>
            <p><strong>Tipp:</strong> $$\\vec{n}$$ aus Koordinatenform ablesen oder gegeben.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{n} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}$$ (gegeben)<br>
                    Punkt A(1|0|0) liegt auf E.<br><br>
                    $$6 \\cdot 1 + 3 \\cdot 0 + 2 \\cdot 0 = d$$<br>
                    $$d = 6$$<br><br>
                    $$E: 6x_1 + 3x_2 + 2x_3 = 6$$
                </div>
            </details>
        `
    },
    {
        id: "geo-013", niveau: "ga",
        category: "ebenen",
        question: "Wie prüfe ich, ob ein Punkt auf einer Ebene liegt?",
        answer: `
            <h4>Punktprobe Ebene</h4>
            <p><strong>Bei Koordinatenform:</strong> Punkt einsetzen, Gleichung prüfen.</p>
            <p><strong>Bei Parameterform:</strong> LGS mit 2 Unbekannten (s, t) aufstellen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$E: 2x_1 + 3x_2 - x_3 = 7$$<br>
                    Liegt P(1|2|1) auf E?<br><br>
                    $$2 \\cdot 1 + 3 \\cdot 2 - 1 \\cdot 1$$<br>
                    $$= 2 + 6 - 1 = 7$$ ✓<br><br>
                    → Ja, P liegt auf E.
                </div>
            </details>
        `
    },
    {
        id: "geo-014", niveau: "ga",
        category: "ebenen",
        question: "Wie berechne ich den Schnittpunkt Gerade-Ebene?",
        answer: `
            <h4>Schnittpunkt Gerade-Ebene</h4>
            <ol>
                <li>Geradengleichung in Ebenengleichung einsetzen</li>
                <li>Nach dem Parameter t auflösen</li>
                <li>t in Geradengleichung einsetzen → Schnittpunkt</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$$<br>
                    $$E: x_1 + x_2 + x_3 = 6$$<br><br>
                    Einsetzen:<br>
                    $$(1+t) + (2+t) + (0+t) = 6$$<br>
                    $$3 + 3t = 6 \\Rightarrow t = 1$$<br><br>
                    $$S = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "geo-015", niveau: "ga",
        category: "ebenen",
        question: "Wie berechne ich den Abstand Punkt-Ebene?",
        answer: `
            <h4>Abstand Punkt-Ebene (Hesse-Normalform)</h4>
            <div class="formula-box">$$d = \\frac{|n_1 p_1 + n_2 p_2 + n_3 p_3 - d|}{|\\vec{n}|}$$</div>
            <ol>
                <li>Ebene in Koordinatenform bringen</li>
                <li>Punkt P in linke Seite einsetzen</li>
                <li>Differenz zu d bilden, Betrag nehmen</li>
                <li>Durch Betrag des Normalenvektors teilen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$E: 2x_1 + 2x_2 + x_3 = 6$$<br>
                    $$P(1|1|1)$$<br><br>
                    $$|\\vec{n}| = \\sqrt{4+4+1} = 3$$<br><br>
                    $$d = \\frac{|2 \\cdot 1 + 2 \\cdot 1 + 1 \\cdot 1 - 6|}{3}$$<br>
                    $$= \\frac{|5 - 6|}{3} = \\frac{1}{3}$$
                </div>
            </details>
        `
    },
    {
        id: "geo-016", niveau: "ga",
        category: "ebenen",
        question: "Wie berechne ich den Schnittwinkel Gerade-Ebene?",
        answer: `
            <h4>Schnittwinkel Gerade-Ebene</h4>
            <div class="formula-box">$$\\sin(\\alpha) = \\frac{|\\vec{n} \\cdot \\vec{v}|}{|\\vec{n}| \\cdot |\\vec{v}|}$$</div>
            <p><strong>Achtung:</strong> Hier Sinus, nicht Kosinus!<br>
            (Der Winkel wird zum Normalenvektor gemessen.)</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{n} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\vec{v} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$$<br><br>
                    $$\\vec{n} \\cdot \\vec{v} = 1$$<br>
                    $$|\\vec{n}| = 1, \\quad |\\vec{v}| = \\sqrt{2}$$<br><br>
                    $$\\sin(\\alpha) = \\frac{1}{\\sqrt{2}}$$<br>
                    $$\\alpha = 45°$$
                </div>
            </details>
        `
    },
    {
        id: "geo-017", niveau: "ga",
        category: "ebenen",
        question: "Wie prüfe ich, ob Gerade und Ebene parallel sind?",
        answer: `
            <h4>Parallelität Gerade-Ebene</h4>
            <div class="formula-box">$$g \\parallel E \\Leftrightarrow \\vec{n} \\cdot \\vec{v} = 0$$</div>
            <p>Richtungsvektor der Geraden steht senkrecht zum Normalenvektor der Ebene.</p>
            <ul>
                <li>$$\\vec{n} \\cdot \\vec{v} = 0$$: parallel</li>
                <li>Zusätzlich Punkt auf E: g liegt in E</li>
                <li>$$\\vec{n} \\cdot \\vec{v} \\neq 0$$: Schnittpunkt existiert</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{n} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\quad \\vec{v} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix}$$<br><br>
                    $$\\vec{n} \\cdot \\vec{v} = 1 - 1 + 0 = 0$$ ✓<br><br>
                    → Die Gerade ist parallel zur Ebene.
                </div>
            </details>
        `
    },
    {
        id: "geo-018", niveau: "ga",
        category: "ebenen",
        question: "Wie bestimme ich den Normalenvektor einer Ebene?",
        answer: `
            <h4>Normalenvektor bestimmen</h4>
            <p><strong>Aus Koordinatenform:</strong> Koeffizienten ablesen</p>
            <p>$$ax_1 + bx_2 + cx_3 = d \\Rightarrow \\vec{n} = \\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$$</p>
            <p><strong>Im GK:</strong> Normalenvektor wird oft gegeben oder aus Koordinatenform abgelesen.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$E: 3x_1 - 2x_2 + 5x_3 = 10$$<br><br>
                    $$\\vec{n} = \\begin{pmatrix} 3 \\\\ -2 \\\\ 5 \\end{pmatrix}$$<br><br>
                    Der Normalenvektor steht senkrecht auf der Ebene.
                </div>
            </details>
        `
    },
    // LGS
    {
        id: "geo-019", niveau: "ga",
        category: "lgs",
        question: "Wie löse ich ein LGS mit dem Additionsverfahren?",
        answer: `
            <h4>Additionsverfahren</h4>
            <ol>
                <li>Gleichungen so multiplizieren, dass eine Variable wegfällt</li>
                <li>Gleichungen addieren/subtrahieren</li>
                <li>Reduziertes System weiter lösen</li>
                <li>Rückwärts einsetzen</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    I: $$2x + y = 5$$<br>
                    II: $$x - y = 1$$<br><br>
                    I + II: $$3x = 6 \\Rightarrow x = 2$$<br><br>
                    In II: $$2 - y = 1 \\Rightarrow y = 1$$<br><br>
                    Lösung: $$(2|1)$$
                </div>
            </details>
        `
    },
    {
        id: "geo-020", niveau: "ga",
        category: "lgs",
        question: "Wie löse ich ein LGS mit dem Gauß-Verfahren?",
        answer: `
            <h4>Gauß-Algorithmus (Stufenform)</h4>
            <ol>
                <li>Erweiterte Koeffizientenmatrix aufstellen</li>
                <li>Durch Zeilenoperationen auf Stufenform bringen</li>
                <li>Von unten nach oben auflösen</li>
            </ol>
            <p><strong>Erlaubte Operationen:</strong></p>
            <ul>
                <li>Zeilen vertauschen</li>
                <li>Zeile mit Zahl ≠ 0 multiplizieren</li>
                <li>Vielfaches einer Zeile zu anderer addieren</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{pmatrix} 1 & 1 & | & 3 \\\\ 2 & -1 & | & 0 \\end{pmatrix}$$<br><br>
                    II - 2·I:<br>
                    $$\\begin{pmatrix} 1 & 1 & | & 3 \\\\ 0 & -3 & | & -6 \\end{pmatrix}$$<br><br>
                    $$-3y = -6 \\Rightarrow y = 2$$<br>
                    $$x + 2 = 3 \\Rightarrow x = 1$$
                </div>
            </details>
        `
    },
    {
        id: "geo-021", niveau: "ga",
        category: "lgs",
        question: "Was bedeuten die verschiedenen Lösungsfälle eines LGS?",
        answer: `
            <h4>Lösungsfälle</h4>
            <ul>
                <li><strong>Eindeutige Lösung:</strong> Genau ein Schnittpunkt</li>
                <li><strong>Keine Lösung:</strong> Widerspruch (z.B. 0 = 5)<br>
                → Geraden/Ebenen parallel</li>
                <li><strong>Unendlich viele Lösungen:</strong> Freie Variable<br>
                → Schnittgerade oder identisch</li>
            </ul>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Keine Lösung:</strong><br>
                    $$x + y = 2$$<br>
                    $$x + y = 5$$<br>
                    Widerspruch: 0 = 3 ✗<br><br>
                    <strong>Unendlich viele:</strong><br>
                    $$x + y = 2$$<br>
                    $$2x + 2y = 4$$<br>
                    → Identische Gleichung, y frei wählbar
                </div>
            </details>
        `
    },
    // Neue Karten basierend auf IQB 2025
    {
        id: "geo-022", niveau: "ga",
        category: "geraden",
        question: "Wie prüfe ich, ob zwei Geraden parallel sind?",
        answer: `
            <h4>Parallelität von Geraden</h4>
            <div class="formula-box">
                $$g_1 \\parallel g_2 \\Leftrightarrow \\vec{v}_1 = k \\cdot \\vec{v}_2$$
            </div>
            <p>Zwei Geraden sind parallel, wenn ihre Richtungsvektoren Vielfache voneinander sind.</p>
            <ol>
                <li>Prüfe: Ist $$\\vec{v}_1 = k \\cdot \\vec{v}_2$$ für ein k ∈ ℝ?</li>
                <li>Wenn ja: Punktprobe → identisch oder echt parallel</li>
                <li>Wenn nein: nicht parallel</li>
            </ol>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$g_1: \\vec{v}_1 = \\begin{pmatrix} 2 \\\\ 4 \\\\ 6 \\end{pmatrix}$$<br>
                    $$g_2: \\vec{v}_2 = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$$<br><br>
                    $$\\vec{v}_1 = 2 \\cdot \\vec{v}_2$$ ✓<br><br>
                    → Die Geraden sind parallel.
                </div>
            </details>
        `
    },
    {
        id: "geo-023", niveau: "ga",
        category: "ebenen",
        question: "Wie lese ich den Normalenvektor aus der Koordinatenform ab?",
        answer: `
            <h4>Normalenvektor aus Koordinatenform</h4>
            <p>Bei einer Ebene in Koordinatenform:</p>
            <div class="formula-box">
                $$E: ax_1 + bx_2 + cx_3 = d$$<br><br>
                $$\\Rightarrow \\vec{n} = \\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$$
            </div>
            <p>Die Koeffizienten vor den Variablen bilden direkt den Normalenvektor!</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$E: 2x_1 - 3x_2 + 5x_3 = 7$$<br><br>
                    $$\\vec{n} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}$$<br><br>
                    Der Normalenvektor steht senkrecht auf der Ebene.
                </div>
            </details>
        `
    }
    ,
    // ===== eA-Karten geo-101 bis geo-115 =====
    // Vektoren (eA)
    {
        id: "geo-101", niveau: "ea",
        category: "vektoren",
        question: "Wie prüfe ich Kollinearität und Komplanarität?",
        answer: `
            <h4>Kollinear und komplanar</h4>
            <div class="formula-box">
                $$\\vec{a}, \\vec{b} \\text{ kollinear} \\Leftrightarrow \\vec{b} = k \\cdot \\vec{a}$$<br><br>
                $$\\vec{a}, \\vec{b}, \\vec{c} \\text{ komplanar} \\Leftrightarrow \\vec{c} = r \\cdot \\vec{a} + s \\cdot \\vec{b} \\quad (\\vec{a}, \\vec{b} \\text{ nicht kollinear})$$
            </div>
            <p><strong>Merksatz:</strong> Kollineare Vektoren liegen auf einer Geraden (Vielfache voneinander), komplanare Vektoren in einer Ebene (einer ist Linearkombination der anderen). Ist das LGS für \\( r, s \\) lösbar, sind die Vektoren komplanar; alternativ: Spatprodukt \\( (\\vec{a} \\times \\vec{b}) \\cdot \\vec{c} = 0 \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Kollinear?</strong>
                    $$\\vec{a} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 4 \\end{pmatrix}, \\quad \\vec{b} = \\begin{pmatrix} -4 \\\\ 2 \\\\ -8 \\end{pmatrix}$$<br>
                    Koordinatenweise: \\( -4 : 2 = -2, \\; 2 : (-1) = -2, \\; -8 : 4 = -2 \\), also \\( \\vec{b} = -2 \\vec{a} \\) → kollinear.<br><br>
                    <strong>Komplanar?</strong>
                    $$\\vec{a} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\vec{b} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\quad \\vec{c} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$$<br>
                    Ansatz \\( \\vec{c} = r\\vec{a} + s\\vec{b} \\): Zeile 1: \\( r = 1 \\), Zeile 2: \\( s = 1 \\), Zeile 3: \\( r + s = 2 \\) ✓<br>
                    → \\( \\vec{c} = \\vec{a} + \\vec{b} \\), die drei Vektoren sind komplanar.
                </div>
            </details>
        `
    },
    // Ebenen (eA)
    {
        id: "geo-102", niveau: "ea",
        category: "ebenen",
        question: "Wie untersuche ich die Lage zweier Ebenen?",
        answer: `
            <h4>Lagebeziehung Ebene–Ebene</h4>
            <div class="formula-box">
                $$\\vec{n}_1 = k \\cdot \\vec{n}_2 \\;\\Rightarrow\\; \\text{parallel (identisch oder echt parallel)}$$<br><br>
                $$\\vec{n}_1 \\neq k \\cdot \\vec{n}_2 \\;\\Rightarrow\\; \\text{Schnittgerade}$$
            </div>
            <p><strong>Merksatz:</strong> Zuerst die Normalenvektoren vergleichen. Sind sie kollinear, entscheidet ein Punkt der einen Ebene durch Einsetzen in die andere: erfüllt er die Gleichung, sind die Ebenen identisch, sonst echt parallel.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$E_1: 2x_1 - x_2 + 2x_3 = 4, \\quad E_2: -4x_1 + 2x_2 - 4x_3 = 6$$<br>
                    $$\\vec{n}_2 = \\begin{pmatrix} -4 \\\\ 2 \\\\ -4 \\end{pmatrix} = -2 \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 2 \\end{pmatrix} = -2 \\vec{n}_1$$<br>
                    → parallel. Punktprobe: \\( P(2 \\,|\\, 0 \\,|\\, 0) \\in E_1 \\), in \\( E_2 \\): \\( -8 \\neq 6 \\)<br>
                    → \\( E_1 \\) und \\( E_2 \\) sind <strong>echt parallel</strong>.<br><br>
                    Mit \\( E_3: x_1 + x_2 + x_3 = 1 \\) dagegen: \\( \\vec{n}_3 \\) ist kein Vielfaches von \\( \\vec{n}_1 \\) → \\( E_1 \\) und \\( E_3 \\) schneiden sich in einer Geraden.
                </div>
            </details>
        `
    },
    {
        id: "geo-103", niveau: "ea",
        category: "ebenen",
        question: "Wie berechne ich die Schnittgerade zweier Ebenen?",
        answer: `
            <h4>Schnittgerade zweier Ebenen</h4>
            <div class="formula-box">
                $$\\vec{u} = \\vec{n}_1 \\times \\vec{n}_2 \\quad \\text{(Richtungsvektor)}$$<br><br>
                $$\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_2 b_3 - a_3 b_2 \\\\ a_3 b_1 - a_1 b_3 \\\\ a_1 b_2 - a_2 b_1 \\end{pmatrix}$$
            </div>
            <p><strong>Merksatz:</strong> Das Kreuzprodukt (Vektorprodukt) liefert einen Vektor, der auf beiden Faktoren senkrecht steht. Die Schnittgerade liegt in beiden Ebenen, also senkrecht zu beiden Normalenvektoren – ihr Richtungsvektor ist \\( \\vec{n}_1 \\times \\vec{n}_2 \\). Einen Stützpunkt liefert eine gemeinsame Lösung beider Gleichungen (z. B. eine Koordinate frei wählen). Alternativ: beide Gleichungen als LGS mit Gauß lösen, freie Variable = Parameter.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$E_1: x_1 + x_2 + x_3 = 3, \\quad E_2: x_1 - x_2 + 2x_3 = 2$$<br>
                    $$\\vec{u} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 1 \\cdot 2 - 1 \\cdot (-1) \\\\ 1 \\cdot 1 - 1 \\cdot 2 \\\\ 1 \\cdot (-1) - 1 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -1 \\\\ -2 \\end{pmatrix}$$<br>
                    Stützpunkt: \\( x_2 = 0 \\) setzen → \\( x_1 + x_3 = 3 \\) und \\( x_1 + 2x_3 = 2 \\) → \\( x_3 = -1, \\; x_1 = 4 \\)<br>
                    $$g: \\vec{x} = \\begin{pmatrix} 4 \\\\ 0 \\\\ -1 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 3 \\\\ -1 \\\\ -2 \\end{pmatrix}$$<br>
                    Probe mit \\( t = 1 \\): \\( (7 \\,|\\, {-1} \\,|\\, {-3}) \\): \\( 7 - 1 - 3 = 3 \\) ✓ und \\( 7 + 1 - 6 = 2 \\) ✓
                </div>
            </details>
        `
    },
    {
        id: "geo-104", niveau: "ea",
        category: "ebenen",
        question: "Wie berechne ich den Schnittwinkel zweier Ebenen?",
        answer: `
            <h4>Schnittwinkel Ebene–Ebene</h4>
            <div class="formula-box">
                $$\\cos \\alpha = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}, \\quad 0^\\circ \\le \\alpha \\le 90^\\circ$$
            </div>
            <p><strong>Merksatz:</strong> Der Winkel zwischen zwei Ebenen ist gleich dem Winkel zwischen ihren Normalenvektoren. Der Betrag im Zähler sorgt dafür, dass immer der spitze Schnittwinkel herauskommt. Für Gerade–Ebene gilt dagegen \\( \\sin \\alpha = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|} \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$E_1: x_1 + x_2 = 5, \\quad E_2: x_1 = 2$$<br>
                    $$\\vec{n}_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad \\vec{n}_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$$<br>
                    $$\\cos \\alpha = \\frac{|1 \\cdot 1 + 1 \\cdot 0 + 0 \\cdot 0|}{\\sqrt{2} \\cdot 1} = \\frac{1}{\\sqrt{2}}$$<br>
                    $$\\alpha = 45^\\circ$$
                </div>
            </details>
        `
    },
    // Geraden (eA)
    {
        id: "geo-105", niveau: "ea",
        category: "geraden",
        question: "Wie berechne ich den Schnittwinkel zweier Geraden?",
        answer: `
            <h4>Schnittwinkel Gerade–Gerade</h4>
            <div class="formula-box">
                $$\\cos \\alpha = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}| \\cdot |\\vec{v}|}, \\quad 0^\\circ \\le \\alpha \\le 90^\\circ$$
            </div>
            <p><strong>Merksatz:</strong> Der Schnittwinkel ist der Winkel zwischen den Richtungsvektoren; der Betrag im Zähler liefert den spitzen der beiden Winkel. Voraussetzung: Die Geraden schneiden sich (bei windschiefen Geraden spricht man vom Winkel der Richtungen).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\vec{u} = \\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}, \\quad \\vec{v} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix}$$<br>
                    $$\\vec{u} \\cdot \\vec{v} = 1 + 0 + 0 = 1, \\quad |\\vec{u}| = |\\vec{v}| = \\sqrt{2}$$<br>
                    $$\\cos \\alpha = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\;\\Rightarrow\\; \\alpha = 60^\\circ$$
                </div>
            </details>
        `
    },
    // Abstände (eA)
    {
        id: "geo-106", niveau: "ea",
        category: "abstand",
        question: "Was ist die Hessesche Normalform und wie nutze ich sie?",
        answer: `
            <h4>Hessesche Normalform (HNF)</h4>
            <div class="formula-box">
                $$E: \\frac{a x_1 + b x_2 + c x_3 - d}{|\\vec{n}|} = 0 \\quad \\text{mit } |\\vec{n}| = \\sqrt{a^2 + b^2 + c^2}$$<br><br>
                $$d(P, E) = \\frac{|a p_1 + b p_2 + c p_3 - d|}{|\\vec{n}|}$$
            </div>
            <p><strong>Merksatz:</strong> Die HNF ist die Koordinatenform, geteilt durch die Länge des Normalenvektors. Setzt man einen Punkt ein, erhält man direkt seinen Abstand zur Ebene (Betrag!). In der Ebene gilt dasselbe für Geraden \\( g: ax + by = c \\) mit \\( |\\vec{n}| = \\sqrt{a^2 + b^2} \\). Fehlt \\( \\vec{n} \\), liefert das Kreuzprodukt der Spannvektoren einen Normalenvektor.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Ebene:</strong> \\( E: 2x_1 - x_2 + 2x_3 = 6 \\), \\( |\\vec{n}| = \\sqrt{4 + 1 + 4} = 3 \\)<br>
                    $$\\text{HNF: } \\frac{2x_1 - x_2 + 2x_3 - 6}{3} = 0$$<br>
                    Abstand von \\( P(3 \\,|\\, 1 \\,|\\, 4) \\):
                    $$d(P, E) = \\frac{|6 - 1 + 8 - 6|}{3} = \\frac{7}{3} \\approx 2{,}33$$<br>
                    <strong>Gerade in der Ebene:</strong> \\( g: 3x + 4y = 12 \\), \\( |\\vec{n}| = 5 \\), \\( P(4 \\,|\\, 5) \\):
                    $$d(P, g) = \\frac{|12 + 20 - 12|}{5} = 4$$<br>
                    <strong>Normalenvektor aus Spannvektoren:</strong>
                    $$\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} \\times \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}$$
                </div>
            </details>
        `
    },
    {
        id: "geo-107", niveau: "ea",
        category: "abstand",
        question: "Wie berechne ich den Abstand Punkt–Gerade (Lotfußpunkt)?",
        answer: `
            <h4>Abstand Punkt–Gerade über den Lotfußpunkt</h4>
            <div class="formula-box">
                $$F = \\vec{a} + t \\cdot \\vec{u} \\quad \\text{mit} \\quad \\vec{PF} \\cdot \\vec{u} = 0$$<br><br>
                $$d(P, g) = |\\vec{PF}|$$
            </div>
            <p><strong>Merksatz:</strong> Der Lotfußpunkt \\( F \\) ist der Punkt der Geraden, für den \\( \\vec{PF} \\) senkrecht auf dem Richtungsvektor steht. Die Orthogonalitätsbedingung liefert eine Gleichung für \\( t \\); der Abstand ist die Länge des Lotvektors. Gleichwertig: Hilfsebene durch \\( P \\) mit Normalenvektor \\( \\vec{u} \\) mit \\( g \\) schneiden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ -2 \\end{pmatrix}, \\quad P(4 \\,|\\, 1 \\,|\\, 1)$$<br>
                    $$\\vec{PF} = \\begin{pmatrix} 1 + 2t - 4 \\\\ t - 1 \\\\ 2 - 2t - 1 \\end{pmatrix} = \\begin{pmatrix} 2t - 3 \\\\ t - 1 \\\\ 1 - 2t \\end{pmatrix}$$<br>
                    $$\\vec{PF} \\cdot \\vec{u} = 2(2t - 3) + (t - 1) - 2(1 - 2t) = 9t - 9 = 0 \\;\\Rightarrow\\; t = 1$$<br>
                    $$F(3 \\,|\\, 1 \\,|\\, 0), \\quad \\vec{PF} = \\begin{pmatrix} -1 \\\\ 0 \\\\ -1 \\end{pmatrix}, \\quad d(P, g) = \\sqrt{2} \\approx 1{,}41$$
                </div>
            </details>
        `
    },
    {
        id: "geo-108", niveau: "ea",
        category: "abstand",
        question: "Wie berechne ich den Abstand windschiefer Geraden?",
        answer: `
            <h4>Abstand windschiefer Geraden</h4>
            <div class="formula-box">
                $$d(g, h) = \\frac{|(\\vec{b} - \\vec{a}) \\cdot \\vec{n}|}{|\\vec{n}|} \\quad \\text{mit} \\quad \\vec{n} = \\vec{u} \\times \\vec{v}$$
            </div>
            <p><strong>Merksatz:</strong> Der gemeinsame Lotvektor steht senkrecht auf beiden Richtungsvektoren, also \\( \\vec{n} = \\vec{u} \\times \\vec{v} \\). Der Verbindungsvektor der Stützpunkte wird auf \\( \\vec{n} \\) projiziert – das ist die HNF der Hilfsebene durch \\( g \\) parallel zu \\( h \\). Vorher prüfen: Richtungsvektoren nicht kollinear (sonst parallel); ergibt sich \\( d = 0 \\), schneiden sich die Geraden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad h: \\vec{x} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$$<br>
                    Richtungsvektoren nicht kollinear → nicht parallel.<br>
                    $$\\vec{n} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} \\times \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\cdot 1 - 1 \\cdot 1 \\\\ 1 \\cdot 0 - 1 \\cdot 1 \\\\ 1 \\cdot 1 - 0 \\cdot 0 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ -1 \\\\ 1 \\end{pmatrix}, \\quad |\\vec{n}| = \\sqrt{3}$$<br>
                    $$\\vec{b} - \\vec{a} = \\begin{pmatrix} -1 \\\\ -1 \\\\ 3 \\end{pmatrix}, \\quad (\\vec{b} - \\vec{a}) \\cdot \\vec{n} = 1 + 1 + 3 = 5$$<br>
                    $$d(g, h) = \\frac{5}{\\sqrt{3}} \\approx 2{,}89$$<br>
                    Da \\( d > 0 \\) und nicht parallel: \\( g \\) und \\( h \\) sind windschief.
                </div>
            </details>
        `
    },
    {
        id: "geo-109", niveau: "ea",
        category: "abstand",
        question: "Wie berechne ich den Abstand paralleler Ebenen bzw. Gerade–Ebene?",
        answer: `
            <h4>Abstand bei Parallelität</h4>
            <div class="formula-box">
                $$d(E_1, E_2) = d(P, E_2) \\quad \\text{für ein beliebiges } P \\in E_1$$<br><br>
                $$d(g, E) = d(A, E) \\quad \\text{für den Stützpunkt } A \\text{ von } g, \\text{ falls } \\vec{u} \\cdot \\vec{n} = 0$$
            </div>
            <p><strong>Merksatz:</strong> Bei parallelen Objekten haben alle Punkte des einen denselben Abstand zum anderen – also einen Punkt wählen und in die HNF der Ebene einsetzen. Vorher Parallelität nachweisen: Normalenvektoren kollinear bzw. \\( \\vec{u} \\perp \\vec{n} \\). Schneidet die Gerade die Ebene, ist der Abstand 0.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Ebene–Ebene:</strong> \\( E_1: 2x_1 - x_2 + 2x_3 = 6 \\), \\( E_2: 2x_1 - x_2 + 2x_3 = -3 \\) (gleicher \\( \\vec{n} \\), \\( |\\vec{n}| = 3 \\))<br>
                    \\( P(0 \\,|\\, 3 \\,|\\, 0) \\in E_2 \\) in die HNF von \\( E_1 \\):
                    $$d(E_1, E_2) = \\frac{|0 - 3 + 0 - 6|}{3} = 3$$<br>
                    <strong>Gerade–Ebene:</strong> \\( g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} \\) und \\( E_1 \\)<br>
                    \\( \\vec{u} \\cdot \\vec{n} = 2 - 2 + 0 = 0 \\) → parallel. Stützpunkt \\( A(1 \\,|\\, 1 \\,|\\, 1) \\):
                    $$d(g, E_1) = \\frac{|2 - 1 + 2 - 6|}{3} = 1$$
                </div>
            </details>
        `
    },
    // Kreis (eA)
    {
        id: "geo-110", niveau: "ea",
        category: "kreis",
        question: "Wie stelle ich die Kreisgleichung auf und lese Mittelpunkt/Radius ab?",
        answer: `
            <h4>Kreisgleichung in der Ebene</h4>
            <div class="formula-box">
                $$k: (x - m_1)^2 + (y - m_2)^2 = r^2 \\quad \\text{mit } M(m_1 \\,|\\, m_2)$$
            </div>
            <p><strong>Merksatz:</strong> Ein Kreis ist die Menge aller Punkte mit Abstand \\( r \\) vom Mittelpunkt – die Gleichung ist der Satz des Pythagoras für \\( |\\vec{MX}| = r \\). Liegt die Gleichung ausmultipliziert vor, bringt quadratische Ergänzung sie in die Mittelpunktsform.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    <strong>Aufstellen:</strong> \\( M(3 \\,|\\, {-2}) \\), \\( r = 5 \\):
                    $$k: (x - 3)^2 + (y + 2)^2 = 25$$<br>
                    <strong>Ablesen aus</strong> \\( x^2 + y^2 - 6x + 4y - 12 = 0 \\):<br>
                    $$x^2 - 6x + y^2 + 4y = 12$$<br>
                    $$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$<br>
                    $$(x - 3)^2 + (y + 2)^2 = 25$$<br>
                    → \\( M(3 \\,|\\, {-2}) \\), \\( r = \\sqrt{25} = 5 \\)
                </div>
            </details>
        `
    },
    {
        id: "geo-111", niveau: "ea",
        category: "kreis",
        question: "Wie untersuche ich die Lage Punkt–Kreis und Gerade–Kreis?",
        answer: `
            <h4>Lage Punkt–Kreis und Gerade–Kreis</h4>
            <div class="formula-box">
                $$|\\vec{MP}| < r,\\; = r,\\; > r \\;:\\; \\text{innen} \\;/\\; \\text{auf } k \\;/\\; \\text{außen}$$<br><br>
                $$d(M, g) < r,\\; = r,\\; > r \\;:\\; \\text{Sekante} \\;/\\; \\text{Tangente} \\;/\\; \\text{Passante}$$
            </div>
            <p><strong>Merksatz:</strong> Beide Fragen entscheidet ein Abstandsvergleich mit dem Radius. Die Schnittpunkte von Gerade und Kreis erhält man durch Einsetzen der Geradengleichung in die Kreisgleichung – die Anzahl der Lösungen (2, 1, 0) bestätigt den Lagefall.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( k: (x - 3)^2 + (y + 2)^2 = 25 \\), also \\( M(3 \\,|\\, {-2}) \\), \\( r = 5 \\)<br><br>
                    <strong>Punkte:</strong> \\( P(6 \\,|\\, 2) \\): \\( 3^2 + 4^2 = 25 \\) → auf dem Kreis.<br>
                    \\( Q(0 \\,|\\, 0) \\): \\( (-3)^2 + 2^2 = 13 < 25 \\) → innerhalb.<br><br>
                    <strong>Gerade</strong> \\( g: y = x + 2 \\), also \\( x - y + 2 = 0 \\):
                    $$d(M, g) = \\frac{|3 - (-2) + 2|}{\\sqrt{2}} = \\frac{7}{\\sqrt{2}} \\approx 4{,}95 < 5 \\;\\Rightarrow\\; \\text{Sekante}$$<br>
                    Schnittpunkte: \\( (x - 3)^2 + (x + 4)^2 = 25 \\)
                    $$2x^2 + 2x + 25 = 25 \\;\\Rightarrow\\; 2x(x + 1) = 0 \\;\\Rightarrow\\; x = 0 \\text{ oder } x = -1$$<br>
                    → \\( S_1(0 \\,|\\, 2) \\), \\( S_2({-1} \\,|\\, 1) \\)
                </div>
            </details>
        `
    },
    {
        id: "geo-112", niveau: "ea",
        category: "kreis",
        question: "Wie untersuche ich die Lage zweier Kreise?",
        answer: `
            <h4>Lage Kreis–Kreis</h4>
            <div class="formula-box">
                $$d = |\\vec{M_1 M_2}| \\quad \\text{vergleichen mit } r_1 + r_2 \\text{ und } |r_1 - r_2|$$
            </div>
            <ul>
                <li>\\( d > r_1 + r_2 \\): getrennt (außerhalb voneinander)</li>
                <li>\\( d = r_1 + r_2 \\): Berührung von außen</li>
                <li>\\( |r_1 - r_2| < d < r_1 + r_2 \\): zwei Schnittpunkte</li>
                <li>\\( d = |r_1 - r_2| \\): Berührung von innen</li>
                <li>\\( d < |r_1 - r_2| \\): ein Kreis liegt im anderen (bei \\( d = 0 \\): konzentrisch)</li>
            </ul>
            <p><strong>Merksatz:</strong> Nur der Mittelpunktsabstand im Vergleich zu Summe und Differenz der Radien entscheidet über die Lage. Schnittpunkte berechnet man, indem man beide Kreisgleichungen subtrahiert (ergibt eine Gerade) und diese mit einem Kreis schneidet.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( k_1: x^2 + y^2 = 25 \\) mit \\( M_1(0 \\,|\\, 0) \\), \\( r_1 = 5 \\); \\( M_2(6 \\,|\\, 8) \\)
                    $$d = \\sqrt{6^2 + 8^2} = 10$$<br>
                    <strong>Fall</strong> \\( r_2 = 5 \\): \\( r_1 + r_2 = 10 = d \\) → Berührung von außen.<br>
                    <strong>Fall</strong> \\( r_2 = 7 \\): \\( |r_1 - r_2| = 2 < 10 < 12 = r_1 + r_2 \\) → zwei Schnittpunkte.<br>
                    <strong>Fall</strong> \\( r_2 = 3 \\): \\( r_1 + r_2 = 8 < 10 \\) → die Kreise liegen getrennt.<br>
                    <strong>Fall</strong> \\( r_2 = 15 \\): \\( |r_1 - r_2| = |5 - 15| = 10 = d \\) → Berührung von innen (\\( k_1 \\) liegt in \\( k_2 \\)).
                </div>
            </details>
        `
    },
    {
        id: "geo-113", niveau: "ea",
        category: "kreis",
        question: "Wie stelle ich die Tangente in einem Kreispunkt auf?",
        answer: `
            <h4>Tangente im Kreispunkt B</h4>
            <div class="formula-box">
                $$t: \\vec{MB} \\cdot \\left( \\vec{x} - \\vec{b} \\right) = 0 \\quad \\Leftrightarrow \\quad \\vec{MB} \\cdot \\vec{x} = \\vec{MB} \\cdot \\vec{b}$$
            </div>
            <p><strong>Merksatz:</strong> Die Tangente steht senkrecht auf dem Berührradius. Deshalb ist \\( \\vec{MB} \\) ein Normalenvektor der Tangente, und \\( B \\) ist ein Punkt darauf – die Normalenform ist sofort hinschreibbar. Probe: \\( d(M, t) = r \\).</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( k: (x - 3)^2 + (y + 2)^2 = 25 \\), \\( B(6 \\,|\\, 2) \\) (liegt auf \\( k \\): \\( 9 + 16 = 25 \\) ✓)<br>
                    $$\\vec{MB} = \\begin{pmatrix} 6 - 3 \\\\ 2 - (-2) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$$<br>
                    $$t: 3x + 4y = 3 \\cdot 6 + 4 \\cdot 2 = 26 \\quad \\Leftrightarrow \\quad y = -\\frac{3}{4}x + \\frac{13}{2}$$<br>
                    Probe: \\( d(M, t) = \\frac{|3 \\cdot 3 + 4 \\cdot (-2) - 26|}{5} = \\frac{25}{5} = 5 = r \\) ✓
                </div>
            </details>
        `
    },
    {
        id: "geo-114", niveau: "ea",
        category: "kreis",
        question: "Wie bestimme ich Tangenten von einem äußeren Punkt an den Kreis?",
        answer: `
            <h4>Tangenten von einem Punkt P außerhalb</h4>
            <div class="formula-box">
                $$t: y = m(x - p_1) + p_2 \\quad \\text{und} \\quad d(M, t) = r$$
            </div>
            <p><strong>Merksatz:</strong> Zuerst prüfen: \\( |\\vec{MP}| > r \\), sonst gibt es 0 (innen) bzw. 1 Tangente (auf dem Kreis). Ansatz: Geradenbüschel durch \\( P \\) mit unbekannter Steigung \\( m \\). Die Berührbedingung „Abstand des Mittelpunkts von der Geraden gleich Radius" (HNF) liefert eine quadratische Gleichung in \\( m \\) mit zwei Lösungen – den beiden Tangenten. Senkrechte Tangenten (\\( x = \\text{const} \\)) müssen gesondert geprüft werden.</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    \\( k: x^2 + y^2 = 25 \\) (\\( M(0 \\,|\\, 0) \\), \\( r = 5 \\)), \\( P(7 \\,|\\, 1) \\)<br>
                    Außen-Check: \\( |\\vec{MP}|^2 = 7^2 + 1^2 = 50 > 25 = r^2 \\) → \\( P \\) liegt außerhalb, zwei Tangenten.<br>
                    Ansatz: \\( t: y = m(x - 7) + 1 \\), also \\( mx - y + (1 - 7m) = 0 \\)<br>
                    $$d(M, t) = \\frac{|1 - 7m|}{\\sqrt{m^2 + 1}} = 5$$<br>
                    $$(1 - 7m)^2 = 25(m^2 + 1) \\;\\Rightarrow\\; 24m^2 - 14m - 24 = 0 \\;\\Rightarrow\\; 12m^2 - 7m - 12 = 0$$<br>
                    $$m = \\frac{7 \\pm \\sqrt{49 + 576}}{24} = \\frac{7 \\pm 25}{24} \\;\\Rightarrow\\; m_1 = \\frac{4}{3}, \\; m_2 = -\\frac{3}{4}$$<br>
                    $$t_1: y = \\frac{4}{3}x - \\frac{25}{3}, \\quad t_2: y = -\\frac{3}{4}x + \\frac{25}{4}$$<br>
                    Berührpunkte (Einsetzen in \\( k \\), jeweils Doppellösung): \\( B_1(4 \\,|\\, {-3}) \\), \\( B_2(3 \\,|\\, 4) \\)
                </div>
            </details>
        `
    },
    // LGS (eA)
    {
        id: "geo-115", niveau: "ea",
        category: "lgs",
        question: "Wie behandle ich ein LGS mit Parameter (Fallunterscheidung)?",
        answer: `
            <h4>LGS mit Parameter</h4>
            <div class="formula-box">
                $$\\text{letzte Stufenzeile: } \\; c(a) \\cdot z = r(a)$$
            </div>
            <p><strong>Merksatz:</strong> Gauß-Verfahren wie gewohnt, den Parameter mitführen. In der letzten Zeile entscheidet die Form \\( c(a) \\cdot z = r(a) \\): Für \\( c(a) \\neq 0 \\) eindeutig lösbar; für \\( c(a) = 0 \\) und \\( r(a) = 0 \\) unendlich viele Lösungen; für \\( c(a) = 0 \\) und \\( r(a) \\neq 0 \\) keine Lösung. Nie durch einen Term teilen, der 0 werden kann!</p>
            <details class="example">
                <summary>Beispiel anzeigen</summary>
                <div class="example-content">
                    $$\\begin{array}{rl} \\text{I:} & x + y + z = 3 \\\\ \\text{II:} & x + 2y + 3z = 6 \\\\ \\text{III:} & 2x + 3y + a^2 z = a + 7 \\end{array}$$<br>
                    II − I: \\( y + 2z = 3 \\); III − 2·I: \\( y + (a^2 - 2)z = a + 1 \\)<br>
                    Differenz: \\( (a^2 - 4) \\cdot z = a - 2 \\), also \\( (a - 2)(a + 2) \\cdot z = a - 2 \\)<br><br>
                    <strong>Fall \\( a = 2 \\):</strong> \\( 0 = 0 \\) → unendlich viele Lösungen: \\( z = t, \\; y = 3 - 2t, \\; x = t \\)<br>
                    <strong>Fall \\( a = -2 \\):</strong> \\( 0 = -4 \\) → keine Lösung<br>
                    <strong>Fall \\( a \\neq \\pm 2 \\):</strong> eindeutig:
                    $$z = \\frac{1}{a + 2}, \\quad y = \\frac{3a + 4}{a + 2}, \\quad x = \\frac{1}{a + 2}$$<br>
                    Probe \\( a = 0 \\): \\( x = z = \\frac{1}{2}, \\; y = 2 \\): I: \\( 3 \\) ✓, II: \\( \\frac{1}{2} + 4 + \\frac{3}{2} = 6 \\) ✓, III: \\( 1 + 6 + 0 = 7 \\) ✓
                </div>
            </details>
        `
    }
]
};
