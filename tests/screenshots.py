"""Screenshots für die Sichtprüfung: Startseite, eA-Karte vorne/hinten (Details offen), Desktop und Handybreite."""
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT = Path(__file__).resolve().parent.parent; OUT = ROOT / "tests" / "reports"; OUT.mkdir(exist_ok=True)
CASES = [("analysis", "scharen"), ("geometrie", "abstand"), ("stochastik", "statistik"),
         ("klasse10", "potenz"), ("klasse10", "explog"), ("klasse10", "trigo"),
         ("klasse10", "lgs"), ("klasse10", "vektoren"), ("klasse10", "zufall"),
         ("klasse9", "trigo"), ("klasse9", "potenz"), ("klasse9", "quadrat"), ("klasse9", "daten"),
         ("klasse8", "terme"), ("klasse8", "aehnlich"), ("klasse8", "pythagoras"),
         ("klasse8", "linear"), ("klasse8", "koerper"), ("klasse8", "zufall"),
         ("klasse7", "prozent"), ("klasse7", "gleichung"), ("klasse7", "kreis"),
         ("klasse7", "koerper"), ("klasse7", "zufall")]
with sync_playwright() as p:
    b = p.chromium.launch()
    for name, w in [("desktop", 1200), ("phone", 400)]:
        pg = b.new_page(viewport={"width": w, "height": 900})
        pg.goto(f"file:///{ROOT.as_posix()}/index.html"); pg.screenshot(path=OUT / f"index-{name}.png", full_page=True)
        print(name, "index scrollWidth", pg.evaluate("document.documentElement.scrollWidth"))
        for deck, cat in CASES:
            pg.goto(f"file:///{ROOT.as_posix()}/trainer.html?deck={deck}&niveau=ea")
            pg.wait_for_function("window.REPETITIO && window.REPETITIO.state === 'ready'")
            pg.evaluate(f"window.REPETITIO.filterByCategory('{cat}')")
            # Decks ohne eA-Karten (Klasse 10): erste Karte der Kategorie nehmen
            ea = pg.evaluate("Math.max(0, window.REPETITIO.filteredCards.findIndex(c => c.niveau === 'ea'))")
            pg.evaluate(f"window.REPETITIO.showCard({ea})"); pg.wait_for_timeout(300)
            pg.screenshot(path=OUT / f"{deck}-{cat}-front-{name}.png", full_page=True)
            pg.click("#flipBtn"); pg.wait_for_timeout(800)
            pg.evaluate("document.querySelectorAll('#flashcard details').forEach(d => d.open = true)"); pg.wait_for_timeout(200)
            pg.screenshot(path=OUT / f"{deck}-{cat}-back-{name}.png", full_page=True)
            print(name, deck, "eA-Index", ea, "scrollWidth", pg.evaluate("document.documentElement.scrollWidth"),
                  "overlap", pg.evaluate("document.getElementById('flashcard').getBoundingClientRect().bottom - document.querySelector('.controls').getBoundingClientRect().top"))
    b.close()
print("ok ->", OUT)
