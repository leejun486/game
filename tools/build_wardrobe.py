#!/usr/bin/env python3
"""Build the 옷장 (wardrobe) layers from the Universal LPC generator.

Usage:
  git clone https://github.com/sanderfrenken/Universal-LPC-Spritesheet-Character-Generator ulpc
  python3 tools/build_wardrobe.py ulpc/spritesheets assets/wardrobe

Outputs (all 832x1344, 13 x 21 frames of 64x64, the standard LPC layout):
  base_<class>.png       shadow + bare body
  head_<class>.png       head + hair, drawn over the clothes (long hair falls over a robe's back)
  <part>_<sex>.png       one hat / top / bottom / shoes / back piece for that body type
  <part>_<sex>_bg.png    the part's layer behind the body, for capes
The game stacks them at run time (js/wardrobe.js): back_bg, base, bottom, shoes, top, back, head, hat; the
weapon look goes on top of that.

Besides plain LPC layers a part can carry drawn details that follow each frame:
  ("goreum", colour)   the 고름 ribbon tied on a 저고리's chest
  ("gat", colour)      a horsehair 갓 on the head
  ("satgat",)          a woven straw 삿갓
"""
import os
import sys

from PIL import Image, ImageDraw

W, H, C = 832, 1344, 64

CLASSES = {
    "knight": ("male", ["body/bodies/male/light.png"], ["head/heads/human/male/light.png", "hair/plain/male/dark_brown.png"]),
    "elf": ("female", ["body/bodies/female/light.png"], ["head/heads/human/female/light.png", "hair/long/female/platinum.png"]),
    "mage": ("female", ["body/bodies/female/light.png"], ["head/heads/human/female/light.png", "hair/ponytail/female/violet.png"]),
}
HEAD = {"male": "head/heads/human/male/light.png", "female": "head/heads/human/female/light.png"}
LEG = {"male": "male", "female": "thin"}  # pantaloons and tabi name the female legs "thin"


def both(*layers):
    out = {}
    for s in ("male", "female"):
        out[s] = [tuple(x.replace("{sex}", s).replace("{leg}", LEG[s]) if isinstance(x, str) else x for x in l) if isinstance(l, tuple)
                  else l.replace("{sex}", s).replace("{leg}", LEG[s]) for l in layers]
    return out


def kimono(colour, trim, sleeves=None, oversize=None, sash=None, split=False):
    k = "split" if split else "normal"
    l = [f"dress/kimono/{k}/universal/female/{colour}.png", f"dress/kimono/{k}/trim/universal/female/{trim}.png"]
    if oversize:
        l.insert(0, f"dress/kimono/sleeves_oversize/universal/female/{oversize}.png")
    if sleeves:
        l.append(f"dress/kimono/sleeves/universal/female/{sleeves}.png")
    if sash:
        l.append(f"dress/sash/female/{sash}.png")
    return l


PARTS = {
    # ---- 상의 (tops)
    "top_plate": both("torso/armour/plate/{sex}/steel.png"),
    "top_leather": both("torso/armour/leather/{sex}/forest.png"),
    "top_blouse": {"female": ["torso/clothes/blouse_longsleeve/female/navy.png"], "male": ["torso/clothes/longsleeve/longsleeve/male/navy.png"]},
    "top_dobok": {"female": kimono("white", "white", sash="navy"), "male": ["torso/clothes/longsleeve/longsleeve/male/white.png", "torso/waist/obi/male/navy.png", "torso/waist/obi/knot/left/male/navy.png"]},
    "top_mubok": {"female": kimono("black", "red", split=True, sash="red"), "male": ["torso/clothes/longsleeve/longsleeve/male/charcoal.png", "torso/clothes/vest/male/black.png", "torso/waist/obi/male/red.png", "torso/waist/obi/knot/right/male/red.png"]},
    "top_hanbok": {"female": kimono("pink", "red", sleeves="pink") + [("goreum", (196, 36, 52))], "male": ["torso/clothes/longsleeve/longsleeve/male/sky.png", "torso/clothes/vest/male/navy.png", ("goreum", (150, 30, 40))]},
    "top_dopo": {"female": kimono("white", "navy", oversize="white", sash="navy"), "male": ["torso/clothes/longsleeve/longsleeve/male/white.png", "torso/jacket/tabard/male/white.png", "torso/waist/sash/male/navy.png"]},
    "top_jeonpo": {"female": kimono("navy", "yellow", split=True, sash="yellow"), "male": ["torso/clothes/longsleeve/longsleeve/male/navy.png", "torso/jacket/tabard/male/navy.png", "torso/waist/obi/male/yellow.png"]},
    "top_hongpo": {"female": kimono("red", "black", oversize="red", sash="black"), "male": ["torso/clothes/longsleeve/longsleeve/male/red.png", "torso/jacket/tabard/male/maroon.png", "torso/waist/obi/male/black.png"]},
    "top_muneo": {"female": kimono("white", "red", oversize="white", sash="red") + [("goreum", (196, 36, 52))], "male": ["torso/clothes/longsleeve/longsleeve/male/white.png", "torso/jacket/tabard/male/red.png", "torso/waist/sash/male/red.png"]},
    "top_hwarang": {"female": kimono("sky", "white", sleeves="sky", sash="white") + [("goreum", (40, 60, 140))], "male": ["torso/clothes/longsleeve/longsleeve/male/white.png", "torso/clothes/vest/male/maroon.png", "torso/waist/obi/male/yellow.png", "torso/waist/obi/knot/left/male/yellow.png"]},
    "top_jeoseung": {"female": kimono("black", "charcoal", oversize="black", sash="charcoal"), "male": ["torso/clothes/longsleeve/longsleeve/male/black.png", "torso/jacket/tabard/male/black.png", "torso/waist/sash/male/charcoal.png"]},
    "top_bronze": both("torso/armour/legion/{sex}/bronze.png"),
    "top_general": both("torso/armour/legion/{sex}/gold.png"),
    "top_dragon": both("torso/armour/plate/{sex}/gold.png", "torso/waist/sash/{sex}/red.png"),
    # ---- 하의 (bottoms)
    "bottom_plate": both("legs/armour/plate/{sex}/steel.png"),
    "bottom_pants": both("legs/pants/{sex}/forest.png"),
    "bottom_skirt": both("legs/skirts/plain/{sex}/navy.png"),
    "bottom_baji": both("legs/pantaloons/{leg}/white.png"),
    "bottom_baji_navy": both("legs/pantaloons/{leg}/navy.png"),
    "bottom_baji_black": both("legs/pantaloons/{leg}/black.png"),
    "bottom_chima_red": both("legs/skirts/plain/{sex}/red.png"),
    "bottom_chima_sky": both("legs/skirts/plain/{sex}/sky.png"),
    "bottom_gold": both("legs/armour/plate/{sex}/gold.png"),
    # ---- 신발 (shoes)
    "shoes_plate": both("feet/armour/plate/{sex}/steel.png"),
    "shoes_boots": both("feet/boots/{sex}/brown.png"),
    "shoes_boots_white": both("feet/boots/{sex}/white.png"),
    "shoes_boots_black": both("feet/boots/{sex}/black.png"),
    "shoes_jipsin": both("feet/sandals/{sex}/tan.png"),
    "shoes_beoseon": both("feet/socks/tabi/{leg}/white.png"),
    "shoes_gold": both("feet/armour/plate/{sex}/gold.png"),
    # ---- 장식 (back / neck)
    "back_scarf_red": both("neck/scarf/red.png"),
    "back_scarf_white": both("neck/scarf/white.png"),
    "back_cape_red": both(("bg", "cape/solid_behind/red.png"), "cape/solid/{sex}/red.png"),
    "back_cape_black": both(("bg", "cape/solid_behind/black.png"), "cape/solid/{sex}/black.png"),
    "back_cape_white": both(("bg", "cape/solid_behind/white.png"), "cape/solid/{sex}/white.png"),
    "back_cape_gold": both(("bg", "cape/solid_behind/yellow.png"), "cape/solid/{sex}/yellow.png"),
    # ---- 모자 (hats)
    "hat_band_red": both("hat/headband/tied/adult/red.png"),
    "hat_band_white": both("hat/headband/thick/adult/white.png"),
    "hat_hood": both("hat/cloth/hood/adult/hood_brown.png"),
    "hat_gokkal": both("hat/magic/wizard/base/adult/navy.png"),
    "hat_jeonrip": both("hat/helmet/kettle/adult/steel.png"),
    "hat_horns": both("hat/accessory/horns_upward/bg/adult/red.png", "hat/accessory/horns_upward/fg/adult/red.png"),
    "hat_crown": both("hat/formal/crown/adult/crown_gold.png"),
    "hat_gat": both(("gat", (16, 16, 20))),
    "hat_gat_white": both(("gat", (226, 224, 214))),
    "hat_satgat": both(("satgat",)),
    "hat_hwagwan": both("hat/formal/tiara/adult/tiara_gold.png"),
}
SEXES = sorted({s for s, _, _ in CLASSES.values()})


def load(root, rel, missing, name):
    path = os.path.join(root, rel)
    if not os.path.exists(path):
        missing.append(f"{name}: {rel}")
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
        img = load(root, rel, missing, name)
        if img is not None:
            sheet.alpha_composite(img)
    return sheet


def boxes(img):
    """per 64px cell: the bounding box of the image's pixels in sheet coordinates"""
    out = {}
    a = img.getchannel("A")
    for r in range(H // C):
        for c in range(W // C):
            bb = a.crop((c * C, r * C, c * C + C, r * C + C)).getbbox()
            if bb:
                out[r, c] = (c * C + bb[0], r * C + bb[1], c * C + bb[2], r * C + bb[3])
    return out


def facing(row):
    return 2 if row >= 20 else row % 4  # 0 up, 1 left, 2 down, 3 right


def shade(col, k):
    return tuple(max(0, min(255, int(v * k))) for v in col[:3])


def draw_goreum(sheet, col):
    d = ImageDraw.Draw(sheet)
    dark = shade(col, 0.6)
    for (r, c), (x0, y0, x1, y1) in boxes(sheet).items():
        f = facing(r)
        if f == 0:
            continue
        top = y0 + 6
        if f == 2:  # 고름: a bow just right of centre, two long tails
            x = (x0 + x1) // 2 + 2
            d.rectangle((x - 2, top, x + 1, top + 1), fill=col + (255,))
            d.point((x - 1, top), fill=dark + (255,))
            d.line((x - 1, top + 2, x - 2, top + 9), fill=col + (255,))
            d.line((x, top + 2, x + 1, top + 7), fill=col + (255,))
        else:  # side: the tails hang at the front of the chest
            x = x0 + 4 if f == 1 else x1 - 5
            d.line((x, top + 1, x, top + 7), fill=col + (255,))
            d.point((x, top), fill=dark + (255,))


def draw_gat(sheet, head, col):
    d = ImageDraw.Draw(sheet)
    rim = shade(col, 0.55) if sum(col) > 300 else (70, 70, 84)
    for (r, c), (x0, y0, x1, y1) in boxes(head).items():
        cx = (x0 + x1) / 2 + {1: 1, 3: -1}.get(facing(r), 0)
        by = y0 + 1
        d.ellipse((cx - 12, by - 3, cx + 12, by + 3), fill=col + (200,), outline=rim + (230,))
        d.rectangle((cx - 4, by - 9, cx + 4, by), fill=col + (245,))
        d.ellipse((cx - 4, by - 11, cx + 4, by - 7), fill=shade(col, 1.3) + (255,))
        d.line((cx - 4, by - 1, cx + 4, by - 1), fill=(120, 30, 30, 255))
        if facing(r) != 0:
            d.line((cx - 4, by + 2, cx - 3, by + 11), fill=rim + (200,))
            d.line((cx + 4, by + 2, cx + 3, by + 11), fill=rim + (200,))


def draw_satgat(sheet, head):
    d = ImageDraw.Draw(sheet)
    straw, edge, line = (204, 168, 104, 255), (122, 92, 50, 255), (160, 124, 70, 255)
    for (r, c), (x0, y0, x1, y1) in boxes(head).items():
        cx = (x0 + x1) / 2 + {1: 1, 3: -1}.get(facing(r), 0)
        by = y0 + 5
        d.polygon([(cx - 15, by), (cx + 15, by), (cx, by - 11)], fill=straw, outline=edge)
        for k in (-9, -4, 4, 9):
            d.line((cx, by - 10, cx + k, by - 1), fill=line)
        d.line((cx - 15, by, cx + 15, by), fill=edge)
        d.line((cx - 14, by + 1, cx + 14, by + 1), fill=(80, 60, 34, 160))


def build_part(root, layers, sex, missing, name):
    front, back = Image.new("RGBA", (W, H)), None
    head = None
    for l in layers:
        if isinstance(l, str):
            img = load(root, l, missing, name)
            if img is not None:
                front.alpha_composite(img)
        elif l[0] == "bg":
            img = load(root, l[1], missing, name)
            if img is not None:
                back = back or Image.new("RGBA", (W, H))
                back.alpha_composite(img)
        elif l[0] == "goreum":
            draw_goreum(front, l[1])
        else:
            head = head or load(root, HEAD[sex], missing, name)
            if l[0] == "gat":
                draw_gat(front, head, l[1])
            elif l[0] == "satgat":
                draw_satgat(front, head)
    return front, back


def main():
    root, out = sys.argv[1], sys.argv[2]
    os.makedirs(out, exist_ok=True)
    missing = []
    for cls, (_, body, head) in CLASSES.items():
        stack(root, ["shadow/adult/shadow.png"] + body, missing, cls).save(os.path.join(out, f"base_{cls}.png"), optimize=True)
        stack(root, head, missing, cls).save(os.path.join(out, f"head_{cls}.png"), optimize=True)
        print("base", cls)
    for pid, by_sex in PARTS.items():
        for sex in SEXES:
            front, back = build_part(root, by_sex[sex], sex, missing, f"{pid}_{sex}")
            front.save(os.path.join(out, f"{pid}_{sex}.png"), optimize=True)
            if back is not None:
                back.save(os.path.join(out, f"{pid}_{sex}_bg.png"), optimize=True)
        print("part", pid)
    if missing:
        print("MISSING:\n  " + "\n  ".join(missing))
        sys.exit(1)


if __name__ == "__main__":
    main()
