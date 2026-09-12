"""Einmaliger Konverter: cards-Array der drei GK-Trainer -> data/<deck>.js
Aufruf: python tools/convert_gk.py   (aus dem Projektordner)"""
import re
import sys
from pathlib import Path

SRC = Path(r"C:\DevProjects\schule\Trainer-Lokal\Abi")
OUT = Path(__file__).resolve().parent.parent / "data"

DECKS = {
    "analysis":   ("ana", "Analysis", "Ableiten, Kurvendiskussion, Integrieren",
                   {"ableitung": "Ableitung", "kurvendiskussion": "Kurvendisk.", "integral": "Integral", "sonstiges": "Sonstiges"}, 32),
    "geometrie":  ("geo", "Analytische Geometrie", "Vektoren, Geraden, Ebenen, LGS",
                   {"vektoren": "Vektoren", "geraden": "Geraden", "ebenen": "Ebenen", "lgs": "LGS"}, 23),
    "stochastik": ("sto", "Stochastik", "Wahrscheinlichkeit, Binomialverteilung, Kenngrößen",
                   {"grundlagen": "Grundlagen", "binomial": "Binomial", "kenngroessen": "Kenngrößen", "bedingt": "Bedingt"}, 25),
}

def extract_cards(html: str) -> str:
    start = html.index("const cards = [") + len("const cards = ")
    end = html.index("];", start) + 1
    return html[start:end]

def main():
    OUT.mkdir(exist_ok=True)
    force = "--force" in sys.argv[1:]
    for deck, (prefix, title, subtitle, cats, erwartet) in DECKS.items():
        ziel = OUT / f"{deck}.js"
        if ziel.exists() and not force:
            sys.exit(f"{ziel} existiert bereits – mit --force überschreiben (verwirft eA-Karten!)")
        html = (SRC / f"{deck}-trainer.html").read_text(encoding="utf-8")
        cards = extract_cards(html)
        assert cards.count("id:") == erwartet, f"{deck}: {cards.count('id:')} Karten, erwartet {erwartet}"
        cards = re.sub(r'id:\s*(\d+),',
                       lambda m: f'id: "{prefix}-{int(m.group(1)):03d}", niveau: "ga",', cards)
        cards = "\n".join(l[8:] if l.startswith("        ") else l for l in cards.splitlines())
        cat_js = ",\n".join(f'        {k}: "{v}"' for k, v in cats.items())
        js = (f"// Repetitio-Deck: {title} — gA-Karten aus dem GK-Trainer; eA-Karten werden ergänzt\n"
              f"window.REPETITIO_DECKS = window.REPETITIO_DECKS || {{}};\n"
              f'window.REPETITIO_DECKS["{deck}"] = {{\n'
              f'    title: "{title}",\n    subtitle: "{subtitle}",\n'
              f"    categories: {{\n{cat_js}\n    }},\n"
              f"    cards: {cards}\n}};\n")
        ziel.write_text(js, encoding="utf-8")
        print(deck, "->", cards.count("niveau:"), "Karten")

if __name__ == "__main__":
    main()
