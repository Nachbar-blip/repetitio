// ---- Deck laden ----
const params = new URLSearchParams(location.search);
const DECK_ID = params.get("deck") || "";
const NIVEAU_KEY = "repetitio:niveau";
// localStorage kann werfen (Private-Mode, blockierte Site-Daten) -> Helfer mit try/catch
function lsGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function lsSet(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* nur Session-weit */ } }
let niveau = params.get("niveau") || lsGet(NIVEAU_KEY) || "ga";
if (niveau !== "ea") niveau = "ga";
if (params.get("niveau")) lsSet(NIVEAU_KEY, niveau);

let deck = null;        // { title, subtitle, categories, cards }
let cards = [];         // nach Niveau gefilterte Karten
let currentIndex = 0;
let filteredCards = [];
let progress = {};
let activeCategory = "all";
const STORAGE_KEY = "repetitio:" + DECK_ID;

function showError(msg) {
    document.querySelector(".container").innerHTML =
        `<div class="error-box"><h2>Deck nicht gefunden</h2><p>${msg}</p>
         <p><a href="index.html">Zur Startseite</a></p></div>`;
}

function loadDeck() {
    if (!/^[a-z0-9_-]+$/.test(DECK_ID)) { showError("Kein gültiges Deck angegeben."); return; }
    const s = document.createElement("script");
    s.src = "data/" + DECK_ID + ".js";
    s.onload = () => {
        deck = (window.REPETITIO_DECKS || {})[DECK_ID];
        if (!deck) {
            console.error(`data/${DECK_ID}.js geladen, aber window.REPETITIO_DECKS['${DECK_ID}'] fehlt – Syntaxfehler in der Deckdatei?`);
            showError(`Die Datei data/${DECK_ID}.js enthält kein Deck „${DECK_ID}".`); return;
        }
        initTrainer();
    };
    s.onerror = () => showError(`Das Deck „${DECK_ID}" gibt es nicht.`);
    document.head.appendChild(s);
}

function loadProgress() {
    try { progress = JSON.parse(lsGet(STORAGE_KEY)) || {}; }
    catch (e) { progress = {}; }
}

function applyNiveau() {
    cards = deck.cards.filter(c => niveau === "ea" || c.niveau !== "ea");
    // Decks ohne eA-Karten (z. B. Klasse 10): der Schalter haette keine Wirkung, also ausblenden.
    const sw = document.getElementById("niveauSwitch");
    if (sw) sw.hidden = !deck.cards.some(c => c.niveau === "ea");
    document.querySelectorAll("#niveauSwitch button").forEach(b => {
        const on = b.dataset.niveau === niveau;
        b.setAttribute("aria-pressed", on);
    });
    filterByCategory(activeCategory);
}

function setNiveau(n) {
    niveau = n; lsSet(NIVEAU_KEY, n);
    try { const u = new URL(location); u.searchParams.set("niveau", n); history.replaceState(null, "", u); } catch (e) {}
    applyNiveau();
}

function categoryOf(card) { return Object.hasOwn(deck.categories, card.category) ? card.category : "sonstiges"; }

function buildTabs() {
    const tabs = document.getElementById("categoryTabs");
    const cats = { all: "Alle", ...deck.categories };
    for (const c of deck.cards) if (!Object.hasOwn(deck.categories, c.category)) {
        console.warn("Unbekannte Kategorie", c.category, "bei Karte", c.id);
        cats.sonstiges = cats.sonstiges || "Sonstiges";
    }
    tabs.innerHTML = Object.entries(cats).map(([k, v]) =>
        `<button class="category-tab${k === "all" ? " active" : ""}" data-category="${k}">${v}</button>`).join("");
    tabs.querySelectorAll(".category-tab").forEach(tab =>
        tab.addEventListener("click", () => filterByCategory(tab.dataset.category)));
}

function initTrainer() {
    document.body.dataset.deck = DECK_ID;
    document.title = "Repetitio · " + deck.title;
    document.getElementById("deckTitle").textContent = deck.title;
    document.getElementById("deckSubtitle").textContent = deck.subtitle || "";
    document.querySelectorAll("#niveauSwitch button").forEach(b =>
        b.addEventListener("click", () => setNiveau(b.dataset.niveau)));
    buildTabs();
    loadProgress();
    applyNiveau();
}

// ---- Engine (übernommen aus analysis-trainer.html) ----

// Create new card progress entry
function createNewCardProgress(cardId) {
    return {
        status: 'new',
        lastReview: null,
        nextReview: Date.now(),
        interval: 1,
        easeFactor: 2.5,
        repetitions: 0,
        correctStreak: 0
    };
}

// SM-2 algorithm for spaced repetition
function updateCardProgress(cardId, quality) {
    if (!progress[cardId]) {
        progress[cardId] = createNewCardProgress(cardId);
    }
    const card = progress[cardId];

    if (quality >= 3) {
        card.repetitions++;
        card.correctStreak++;
        if (card.repetitions === 1) {
            card.interval = 1;
        } else if (card.repetitions === 2) {
            card.interval = 3;
        } else {
            card.interval = Math.round(card.interval * card.easeFactor);
        }
        card.status = card.repetitions >= 3 ? 'mastered' : 'learning';
    } else {
        card.repetitions = 0;
        card.interval = 1;
        card.correctStreak = 0;
        card.status = 'learning';
    }

    // Adjust ease factor
    card.easeFactor = Math.max(1.3,
        card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );

    card.lastReview = Date.now();
    card.nextReview = Date.now() + card.interval * 24 * 60 * 60 * 1000;

    saveProgress();
    return card.interval;
}

// Format interval for display
function formatInterval(days) {
    if (days < 1) return 'heute';
    if (days === 1) return 'morgen';
    if (days < 7) return `in ${days} Tagen`;
    if (days < 30) { const w = Math.round(days / 7); return w === 1 ? 'in 1 Woche' : `in ${w} Wochen`; }
    const m = Math.round(days / 30);
    return m === 1 ? 'in 1 Monat' : `in ${m} Monaten`;
}

// Save progress to localStorage
function saveProgress() {
    lsSet(STORAGE_KEY, JSON.stringify(progress));
}

// Render KaTeX
function renderMath() {
    renderMathInElement(document.getElementById('flashcard'), {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '\\(', right: '\\)', display: false}
        ],
        throwOnError: false
    });
    klebeSatzzeichen(document.getElementById('flashcard'));
    passeFormelnAn();
}

// Zu breite abgesetzte Formeln (Handy) verkleinern statt sie mitten in Klammern umbrechen zu lassen.
// Zugeklappte Beispiele kurz oeffnen, damit auch deren Formeln eine Breite haben.
const MIN_FORMEL_SKALA = 0.75;
function passeFormelnAn() {
    const card = document.getElementById('flashcard');
    if (!card) return;
    const zu = [...card.querySelectorAll('details:not([open])')];
    zu.forEach(d => { d.open = true; });
    card.querySelectorAll('.katex-display > .katex').forEach(k => { k.style.fontSize = ''; });
    card.querySelectorAll('.katex-display > .katex').forEach(k => {
        const box = k.parentElement;
        if (!box.clientWidth || box.scrollWidth <= box.clientWidth + 1) return;
        const skala = Math.max(MIN_FORMEL_SKALA, (box.clientWidth / box.scrollWidth) * 0.97);
        k.style.fontSize = (parseFloat(getComputedStyle(k).fontSize) * skala) + 'px';
    });
    zu.forEach(d => { d.open = false; });
}

let resizeTimer = null;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (deck && filteredCards.length) passeFormelnAn(); }, 150);
});

// Satzzeichen direkt nach einer Formel (", . ; : ) !?") und "(" direkt davor
// umbrechen sonst allein in die naechste bzw. vorige Zeile - mit der Formel verbinden.
function klebeSatzzeichen(container) {
    container.querySelectorAll('.katex').forEach(k => {
        if (k.closest('.katex-display') || k.parentElement.classList.contains('rep-nowrap')) return;
        const node = (k.parentElement.tagName === 'SPAN' && k.parentElement.childNodes.length === 1) ? k.parentElement : k;
        const next = node.nextSibling, prev = node.previousSibling;
        const nach = next && next.nodeType === 3 ? (next.textContent.match(/^[,.;:!?)\]]+/) || [''])[0] : '';
        const vor = prev && prev.nodeType === 3 ? (prev.textContent.match(/[(\[„]+$/) || [''])[0] : '';
        if (!nach && !vor) return;
        // nur kurze Formeln: lange sollen innerhalb umbrechen duerfen
        if (k.offsetWidth > 160 || (k.offsetWidth === 0 && k.textContent.length > 40)) return;
        const w = document.createElement('span');
        w.className = 'rep-nowrap';
        w.style.whiteSpace = 'nowrap';
        node.parentNode.insertBefore(w, node);
        if (vor) { prev.textContent = prev.textContent.slice(0, -vor.length); w.appendChild(document.createTextNode(vor)); }
        w.appendChild(node);
        if (nach) { next.textContent = next.textContent.slice(nach.length); w.appendChild(document.createTextNode(nach)); }
    });
}

// Display current card
function displayCard() {
    if (filteredCards.length === 0) {
        document.getElementById('cardQuestion').innerHTML = 'Keine Karten in dieser Kategorie.';
        document.getElementById('cardAnswer').innerHTML = '';
        document.getElementById('cardCategory').textContent = '';
        document.getElementById('cardCategoryBack').textContent = '';
        document.getElementById('cardCounter').textContent = 'Keine Karten';
        document.getElementById('prevBtn').disabled = true;
        document.getElementById('nextBtn').disabled = true;
        document.getElementById('nextReview').textContent = '';
        document.getElementById('flashcard').classList.remove('flipped');
        document.getElementById('flipBtn').textContent = 'Aufdecken';
        document.getElementById('ratingButtons').classList.remove('visible');
        updateStats();
        updateProgressBar();
        return;
    }

    const card = filteredCards[currentIndex];
    const label = deck.categories[categoryOf(card)] || "Sonstiges";
    // Wrapper-Span: Frage, Formeln und Badge bleiben ein Textfluss (kein Flex-Item pro Knoten)
    // zusatz: true = Stoff, der nicht im Fachlehrplan steht (bleibt drin, wird aber gekennzeichnet)
    document.getElementById('cardQuestion').innerHTML = '<span>' + card.question
        + (card.niveau === 'ea' ? ' <span class="badge-ea">eA</span>' : '')
        + (card.zusatz ? ' <span class="badge-zusatz">Zusatz</span>' : '') + '</span>';
    document.getElementById('cardAnswer').innerHTML = (card.zusatz
        ? '<p class="hinweis-zusatz">Zusatzstoff: steht nicht im Fachlehrplan.</p>' : '') + card.answer;
    document.getElementById('cardCategory').textContent = label;
    document.getElementById('cardCategoryBack').textContent = label;

    // Reset card flip
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('flipBtn').textContent = 'Aufdecken';
    document.getElementById('ratingButtons').classList.remove('visible');
    document.getElementById('nextReview').textContent = '';

    updateCounter();
    updateStats();
    renderMath();
}

// Flip card
function flipCard() {
    if (!document.getElementById('flashcard')) return;
    const card = document.getElementById('flashcard');
    const btn = document.getElementById('flipBtn');
    const rating = document.getElementById('ratingButtons');

    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
        btn.textContent = 'Zurück zur Frage';
        rating.classList.add('visible');
    } else {
        btn.textContent = 'Aufdecken';
        rating.classList.remove('visible');
    }
}

// Navigate cards with debouncing
let isNavigating = false;

function nextCard() {
    if (isNavigating || currentIndex >= filteredCards.length - 1) return;
    isNavigating = true;
    currentIndex++;
    displayCard();
    setTimeout(() => isNavigating = false, 400);
}

function prevCard() {
    if (isNavigating || currentIndex <= 0) return;
    isNavigating = true;
    currentIndex--;
    displayCard();
    setTimeout(() => isNavigating = false, 400);
}

// Rate card with spaced repetition
function rateCard(quality) {
    if (!filteredCards.length) return;
    const card = filteredCards[currentIndex];
    const interval = updateCardProgress(card.id, quality);

    // Show next review info and hide rating buttons
    document.getElementById('nextReview').textContent =
        `Nächste Wiederholung: ${formatInterval(interval)}`;
    document.getElementById('ratingButtons').classList.remove('visible');

    updateStats();
    updateProgressBar();

    // Auto-advance to next card
    if (currentIndex < filteredCards.length - 1) {
        setTimeout(() => nextCard(), 500);
    }
}

// Legacy function for compatibility
function markCard(known) {
    rateCard(known ? 4 : 1);
}

// Spaced Repetition wirksam machen: faellige und neue Karten zuerst (in Deck-Reihenfolge),
// danach die noch nicht faelligen, die am fruehesten faellige zuerst.
function isDue(card, now = Date.now()) {
    const p = progress[card.id];
    return !p || !p.nextReview || p.nextReview <= now;
}

function sortByDue(list) {
    const now = Date.now();
    const order = new Map(list.map((c, i) => [c.id, i]));
    list.sort((a, b) => {
        const da = isDue(a, now), db = isDue(b, now);
        if (da !== db) return da ? -1 : 1;
        if (!da) return progress[a.id].nextReview - progress[b.id].nextReview;
        return order.get(a.id) - order.get(b.id);
    });
}

// Filter by category
function filterByCategory(category) {
    activeCategory = category;
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });

    if (category === 'all') {
        filteredCards = [...cards];
    } else {
        filteredCards = cards.filter(c => categoryOf(c) === category);
    }
    sortByDue(filteredCards);

    currentIndex = 0;
    displayCard();
    updateProgressBar();
}

// Shuffle cards
function shuffleCards() {
    for (let i = filteredCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
    }
    currentIndex = 0;
    displayCard();
}

// Reset progress
function resetProgress() {
    if (confirm('Willst du wirklich den gesamten Fortschritt zurücksetzen?')) {
        progress = {};
        saveProgress();
        updateStats();
        updateProgressBar();
    }
}

// Update counter display
function updateCounter() {
    const due = filteredCards.filter(c => isDue(c)).length;
    document.getElementById('cardCounter').textContent =
        `Karte ${currentIndex + 1} von ${filteredCards.length} · ${due} fällig`;

    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === filteredCards.length - 1;
}

// Update statistics
function updateStats() {
    let mastered = 0;
    let learning = 0;
    let newCards = 0;

    for (const card of cards) {
        const p = progress[card.id];
        if (!p || p.status === 'new') {
            newCards++;
        } else if (p.status === 'mastered' || p.repetitions >= 3) {
            mastered++;
        } else {
            learning++;
        }
    }

    document.getElementById('knownCount').textContent = mastered;
    document.getElementById('unknownCount').textContent = learning;
    document.getElementById('remainingCount').textContent = newCards;
}

// Update progress bar
function updateProgressBar() {
    const total = filteredCards.length;
    const mastered = filteredCards.filter(c => {
        const p = progress[c.id];
        return p && (p.status === 'mastered' || p.repetitions >= 3);
    }).length;
    const percent = total > 0 ? Math.round((mastered / total) * 100) : 0;

    const fill = document.getElementById('progressFill');
    fill.style.width = percent + '%';
    fill.textContent = percent + '%';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!deck) return;
    if (e.target.closest('summary, a, input, textarea')) return;
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
    if (e.key === ' ' || e.key === 'Enter') {
        // Fokussierter Button löst per Space/Enter selbst aus -> keine Doppelauslösung
        if (e.target.tagName === 'BUTTON') return;
        e.preventDefault();
        flipCard();
    }
    const flipped = document.getElementById('flashcard').classList.contains('flipped');
    if (e.key === '1' && flipped) markCard(false);
    if (e.key === '2' && flipped) markCard(true);
});

// Klick auf die Karte deckt auf (nicht bei Beispiel-Details, Links, Buttons)
document.getElementById('flashcard').addEventListener('click', e => {
    if (!e.target.closest('details, a, button')) flipCard();
});

// Prüf-API (Render-Check, Tests)
window.REPETITIO = {
    get deck() { return deck; }, get cards() { return cards; },
    get filteredCards() { return filteredCards; }, get niveau() { return niveau; },
    get state() { return document.querySelector('.error-box') ? 'error' : deck ? 'ready' : 'loading'; },
    showCard(i) { if (i < 0 || i >= filteredCards.length) return; currentIndex = i; displayCard(); }, setNiveau, filterByCategory,
};

loadDeck();
