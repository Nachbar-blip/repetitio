"""Engine-Verhalten: Niveau-Filter, Speicherung, Fehlerseite, leere Kategorie.
Aufruf: python -m pytest tests/test_engine.py -q"""
from pathlib import Path
import pytest
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
URL = f"file:///{ROOT.as_posix()}/trainer.html"


@pytest.fixture(scope="module")
def browser():
    with sync_playwright() as p:
        b = p.chromium.launch()
        yield b
        b.close()


@pytest.fixture
def page(browser):
    # frischer Kontext pro Test: localStorage leakt nicht zwischen Tests
    ctx = browser.new_context()
    yield ctx.new_page()
    ctx.close()


def ready(page):
    page.wait_for_function("window.REPETITIO && window.REPETITIO.state === 'ready'")


def counts(page):
    return page.evaluate("[window.REPETITIO.cards.length, window.REPETITIO.deck.cards.length]")


def inject_ea_card(page):
    """Injiziert eine zusätzliche eA-Karte mit bekannter ID, damit der Test nicht vom Datenbestand abhängt."""
    page.evaluate("window.REPETITIO.deck.cards.push({id:'x-ea', niveau:'ea', category:'ableitung', question:'q', answer:'a'})")
    return page.evaluate("window.REPETITIO.deck.cards.filter(c => c.niveau === 'ea').length")


def test_ga_hides_ea_cards(page):
    page.goto(URL + "?deck=analysis&niveau=ga"); ready(page)
    ea = inject_ea_card(page)
    assert ea > 0
    page.evaluate("window.REPETITIO.setNiveau('ga')")
    shown, total = counts(page)
    assert shown == total - ea
    assert not page.evaluate("window.REPETITIO.cards.some(c => c.id === 'x-ea')")


def test_ea_shows_all_and_persists(page):
    page.goto(URL + "?deck=analysis&niveau=ga"); ready(page)
    ea = inject_ea_card(page)
    assert ea > 0
    page.click("#niveauSwitch button[data-niveau=ea]")
    shown, total = counts(page)
    assert shown == total
    assert page.evaluate("window.REPETITIO.cards.some(c => c.id === 'x-ea')")
    assert page.evaluate("localStorage.getItem('repetitio:niveau')") == "ea"


def test_rating_saves_progress(page):
    page.goto(URL + "?deck=geometrie"); ready(page)
    assert page.evaluate("localStorage.getItem('repetitio:geometrie')") is None
    cid = page.evaluate("window.REPETITIO.filteredCards[0].id")
    page.click("#flipBtn"); page.click(".btn-good")
    saved = page.evaluate("JSON.parse(localStorage.getItem('repetitio:geometrie'))")
    assert saved[cid]["repetitions"] == 1


def test_unknown_deck_shows_error(page):
    page.goto(URL + "?deck=gibtsnicht")
    page.wait_for_selector(".error-box")
    assert "Startseite" in page.inner_text(".error-box")


def test_empty_category_state(page):
    page.goto(URL + "?deck=analysis&niveau=ga"); ready(page)
    # eA-Karte in eine neue Kategorie injizieren; im gA-Modus darf sie nach dem
    # Niveau-Filter nicht in `cards` landen -> Kategorie ist real leer.
    page.evaluate("""() => {
        window.REPETITIO.deck.categories.nurea = 'Nur eA';
        window.REPETITIO.deck.cards.push({id:'x-1', niveau:'ea', category:'nurea', question:'q', answer:'a'});
        window.REPETITIO.setNiveau('ga');
    }""")
    assert page.evaluate("window.REPETITIO.cards.some(c => c.id === 'x-1')") is False
    page.evaluate("window.REPETITIO.filterByCategory('nurea')")
    assert page.evaluate("window.REPETITIO.filteredCards.length") == 0
    assert page.inner_text("#cardCounter") == "Keine Karten"
    assert page.evaluate("document.getElementById('nextBtn').disabled")


def test_index_niveau_links(page):
    """Die Niveau-Wahl sitzt in den Abitur-Kacheln: ein Klick auf eA merkt sich das Niveau,
    beim naechsten Besuch zeigen die Hauptlinks der Abitur-Kacheln darauf."""
    index = URL.replace("trainer.html", "index.html")
    page.goto(index)
    abi = page.evaluate("[...document.querySelectorAll('.deck-niveau')].length")
    assert abi == 3, f"erwartet 3 Abitur-Kacheln mit Niveau-Wahl, gefunden {abi}"
    # Klassenstufen-Decks haben keine Niveau-Wahl
    assert page.evaluate("""!![...document.querySelectorAll('.deck-card')]
        .filter(c => c.dataset.deck.startsWith('klasse'))
        .every(c => !c.querySelector('.deck-niveau'))""")
    page.evaluate("localStorage.setItem('repetitio:niveau', 'ga')")
    page.goto(index)
    assert page.evaluate("""document.querySelector('.deck-card[data-deck=analysis] .deck-link')
        .getAttribute('href')""").endswith("niveau=ga")
    page.click(".deck-card[data-deck=analysis] .deck-niveau a[data-niveau=ea]")
    page.wait_for_function("window.REPETITIO && window.REPETITIO.state === 'ready'")
    assert page.evaluate("window.REPETITIO.niveau") == "ea"
    page.goto(index)
    hrefs = page.evaluate("""[...document.querySelectorAll('.deck-niveau')]
        .map(g => g.closest('.deck-card').querySelector('.deck-link').getAttribute('href'))""")
    assert all("niveau=ea" in h for h in hrefs), hrefs


def test_flipped_card_no_overlap(page):
    """Lange Rückseite (Beispiel offen): Karte endet oberhalb der Steuerleiste."""
    page.goto(URL + "?deck=analysis&niveau=ea"); ready(page)
    page.evaluate("window.REPETITIO.filterByCategory('scharen')")
    ea = page.evaluate("window.REPETITIO.filteredCards.findIndex(c => c.niveau === 'ea')")
    assert ea >= 0
    page.evaluate(f"window.REPETITIO.showCard({ea})")
    page.click("#flipBtn"); page.wait_for_timeout(800)
    page.evaluate("document.querySelectorAll('#flashcard details').forEach(d => d.open = true)")
    page.wait_for_timeout(200)
    card_bottom, controls_top = page.evaluate(
        "[document.getElementById('flashcard').getBoundingClientRect().bottom,"
        " document.querySelector('.controls').getBoundingClientRect().top]")
    assert card_bottom <= controls_top


def test_keyboard_after_button_click(page):
    """Tastatur bleibt nach Button-Klick aktiv (Fokus auf Button); 1/2 bewerten nur aufgedeckt."""
    page.goto(URL + "?deck=analysis&niveau=ga"); ready(page)
    page.click("#nextBtn")
    page.wait_for_timeout(450)
    page.keyboard.press("ArrowRight")
    assert page.inner_text("#cardCounter").startswith("Karte 3 von")
    page.keyboard.press("1")
    assert page.evaluate("localStorage.getItem('repetitio:analysis')") is None
