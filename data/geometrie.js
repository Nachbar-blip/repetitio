// Repetitio-Deck: Analytische Geometrie (gA-Karten aus dem GK-Trainer, eA-Karten ergänzt)
window.REPETITIO_DECKS = window.REPETITIO_DECKS || {};
window.REPETITIO_DECKS["geometrie"] = {
    title: "Analytische Geometrie",
    subtitle: "Vektoren, Geraden, Ebenen, LGS",
    categories: {
        vektoren: "Vektoren",
        geraden: "Geraden",
        ebenen: "Ebenen",
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
]
};
