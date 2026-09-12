"""Engine-Verhalten: Niveau-Filter, Speicherung, Fehlerseite, leere Kategorie.
Aufruf: python -m pytest tests/test_engine.py -q"""
from pathlib import Path
import pytest
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
URL = f"file:///{ROOT.as_posix()}/trainer.html"


@pytest.fixture(scope="module")
def page():
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page()
        yield pg
        b.close()


def ready(page):
    page.wait_for_function("window.REPETITIO && window.REPETITIO.state === 'ready'")


def counts(page):
    return page.evaluate("[window.REPETITIO.cards.length, window.REPETITIO.deck.cards.length]")


def test_ga_hides_ea_cards(page):
    page.goto(URL + "?deck=analysis&niveau=ga"); ready(page)
    shown, total = counts(page)
    ea = page.evaluate("window.REPETITIO.deck.cards.filter(c => c.niveau === 'ea').length")
    assert shown == total - ea


def test_ea_shows_all_and_persists(page):
    page.goto(URL + "?deck=analysis&niveau=ga"); ready(page)
    page.click("#niveauSwitch button[data-niveau=ea]")
    shown, total = counts(page)
    assert shown == total
    assert page.evaluate("localStorage.getItem('repetitio:niveau')") == "ea"


def test_rating_saves_progress(page):
    page.goto(URL + "?deck=geometrie"); ready(page)
    page.evaluate("localStorage.removeItem('repetitio:geometrie')")
    page.click("#flipBtn"); page.click(".btn-good")
    saved = page.evaluate("JSON.parse(localStorage.getItem('repetitio:geometrie'))")
    assert list(saved.values())[0]["repetitions"] == 1


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
    page.evaluate("filterByCategory('nurea')")
    assert page.evaluate("window.REPETITIO.filteredCards.length") == 0
    assert page.inner_text("#cardCounter") == "Keine Karten"
    assert page.evaluate("document.getElementById('nextBtn').disabled")
