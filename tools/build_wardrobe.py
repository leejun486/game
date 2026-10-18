#!/usr/bin/env python3
"""Build the 옷장 (wardrobe) layers from the Universal LPC generator.

Usage:
  git clone https://github.com/sanderfrenken/Universal-LPC-Spritesheet-Character-Generator ulpc
  python3 tools/build_wardrobe.py ulpc/spritesheets assets/wardrobe

Outputs (all 832x1344, 13 x 21 frames of 64x64, the standard LPC layout):
  base_<class>.png      body, head, hair, legs and feet only (no top, no hat, no weapon)
  <part>_<sex>.png      one hat or top, for the body type of the classes that can wear it
The game stacks base + top + hat at run time (js/wardrobe.js) and draws the weapon look on top.
"""
import os
import sys

from PIL import Image

W, H = 832, 1344

BASES = {
    "knight": ("male", [
        "shadow/adult/shadow.png",
        "body/bodies/male/light.png",
        "legs/armour/plate/male/steel.png",
        "feet/armour/plate/male/steel.png",
        "head/heads/human/male/light.png",
        "hair/plain/male/dark_brown.png",
    ]),
    "elf": ("female", [
        "shadow/adult/shadow.png",
        "body/bodies/female/light.png",
        "legs/pants/female/forest.png",
        "feet/boots/female/brown.png",
        "head/heads/human/female/light.png",
        "hair/long/female/platinum.png",
    ]),
    "mage": ("female", [
        "shadow/adult/shadow.png",
        "body/bodies/female/light.png",
        "legs/skirts/plain/female/navy.png",
        "feet/boots/female/white.png",
        "head/heads/human/female/light.png",
        "hair/ponytail/female/violet.png",
    ]),
}

# part id -> {sex: [layers bottom -> top]}; "{sex}" is replaced by male/female
def both(*layers):
    return {s: [l.replace("{sex}", s) for l in layers] for s in ("male", "female")}

PARTS = {
    # ---- 상의 (tops)
    "top_plate": both("torso/armour/plate/{sex}/steel.png"),
    "top_leather": both("torso/armour/leather/{sex}/forest.png"),
    "top_blouse": {"female": ["torso/clothes/blouse_longsleeve/female/navy.png"], "male": ["torso/clothes/longsleeve/longsleeve/male/navy.png"]},
    "top_dobok": both("torso/clothes/longsleeve/longsleeve/{sex}/white.png", "torso/waist/obi/thin/navy.png"),
    "top_mubok": both("torso/clothes/longsleeve/longsleeve/{sex}/charcoal.png", "torso/waist/obi/thin/red.png"),
    "top_hanbok": both("torso/clothes/longsleeve/longsleeve/{sex}/pink.png", "torso/waist/sash/{sex}/rose.png"),
    "top_dopo": {"female": ["torso/clothes/robe/female/white.png", "torso/waist/sash/female/navy.png"], "male": ["torso/clothes/longsleeve/longsleeve/male/white.png", "torso/jacket/tabard/male/white.png", "torso/waist/sash/male/navy.png"]},
    "top_jeonpo": both("torso/clothes/longsleeve/longsleeve/{sex}/navy.png", "torso/jacket/tabard/{sex}/navy.png", "torso/waist/obi/thin/yellow.png"),
    "top_hongpo": {"female": ["torso/clothes/robe/female/red.png"], "male": ["torso/clothes/longsleeve/longsleeve/male/red.png", "torso/jacket/tabard/male/maroon.png", "torso/waist/obi/thin/black.png"]},
    "top_bronze": both("torso/armour/legion/{sex}/bronze.png"),
    "top_general": both("torso/armour/legion/{sex}/gold.png"),
    "top_dragon": both("torso/armour/plate/{sex}/gold.png", "torso/waist/obi/thin/red.png"),
    # ---- 모자 (hats)
    "hat_band_red": both("hat/headband/tied/adult/red.png"),
    "hat_band_white": both("hat/headband/thick/adult/white.png"),
    "hat_hood": both("hat/cloth/hood/adult/hood_brown.png"),
    "hat_gokkal": both("hat/magic/wizard/base/adult/navy.png"),
    "hat_jeonrip": both("hat/helmet/kettle/adult/steel.png"),
    "hat_horns": both("hat/accessory/horns_upward/bg/adult/red.png", "hat/accessory/horns_upward/fg/adult/red.png"),
    "hat_crown": both("hat/formal/crown/adult/crown_gold.png"),
}
SEXES = sorted({s for s, _ in BASES.values()})


def load(root, rel):
    path = os.path.join(root, rel)
    if not os.path.exists(path):
        return None
    img = Image.open(path).convert("RGBA")
    if img.size[1] > H:
        img = img.crop((0, 0, W, H))
    if img.size != (W, H):
        canvas = Image.new("RGBA", (W, H))
        canvas.paste(img, (0, 0))
        img = canvas
    return img


def stack(root, layers, missing, name):
    sheet = Image.new("RGBA", (W, H))
    for rel in layers:
        img = load(root, rel)
        if img is None:
            missing.append(f"{name}: {rel}")
            continue
        sheet.alpha_composite(img)
    return sheet


def main():
    root, out = sys.argv[1], sys.argv[2]
    os.makedirs(out, exist_ok=True)
    missing = []
    for cls, (_, layers) in BASES.items():
        stack(root, layers, missing, cls).save(os.path.join(out, f"base_{cls}.png"), optimize=True)
        print("base", cls)
    for pid, by_sex in PARTS.items():
        for sex in SEXES:
            stack(root, by_sex[sex], missing, f"{pid}_{sex}").save(os.path.join(out, f"{pid}_{sex}.png"), optimize=True)
        print("part", pid)
    if missing:
        print("MISSING:\n  " + "\n  ".join(missing))
        sys.exit(1)


if __name__ == "__main__":
    main()
