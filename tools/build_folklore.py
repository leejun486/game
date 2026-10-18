#!/usr/bin/env python3
"""Build the folklore (설화) monster sheets from the Universal LPC generator.

Usage:
  git clone https://github.com/sanderfrenken/Universal-LPC-Spritesheet-Character-Generator ulpc
  python3 tools/build_folklore.py ulpc/spritesheets assets/sprites

Same 832x1344 LPC layout as tools/build_sprites.py. On top of the plain layer stack:
  - a layer can be recoloured ("tint": dark/mid/light colours over its grey levels), for red and blue 도깨비 skin
  - "gat": a black horsehair 갓 is drawn over the head of every frame (저승사자)
  - "bujeok": a yellow 부적 talisman hangs from the forehead (강시)
Both are placed from the head layer's bounding box in each 64px cell, so they follow every pose.
"""
import os
import sys

from PIL import Image, ImageDraw, ImageOps

W, H, C = 832, 1344, 64

RED = ((45, 8, 6), (196, 58, 40), (255, 196, 160))
BLUE = ((8, 18, 52), (62, 112, 206), (196, 224, 255))
PALE = ((40, 40, 52), (176, 178, 190), (236, 236, 244))

SHEETS = {
    # 꼬마 도깨비: small red goblin, short horns, 방망이
    "dokkaebi_small": {"layers": [
        "shadow/adult/shadow.png",
        "weapon/blunt/club/background/club.png",
        {"path": "body/bodies/male/light.png", "tint": RED},
        "legs/pants/male/leather.png",
        {"path": "head/heads/goblin/adult/light.png", "tint": RED},
        "hat/accessory/horns_short/bg/adult/yellow.png",
        "hat/accessory/horns_short/fg/adult/yellow.png",
        "weapon/blunt/club/club.png",
    ]},
    # 도깨비 장수: blue orc-headed brute, long horns, leather armour, 방망이
    "dokkaebi": {"layers": [
        "shadow/adult/shadow.png",
        "weapon/blunt/club/background/club.png",
        {"path": "body/bodies/male/light.png", "tint": BLUE},
        "legs/pants/male/leather.png",
        "feet/boots/male/black.png",
        "torso/armour/leather/male/brown.png",
        {"path": "head/heads/orc/male/light.png", "tint": BLUE},
        "hat/accessory/horns_upward/bg/adult/ceramic.png",
        "hat/accessory/horns_upward/fg/adult/ceramic.png",
        "weapon/blunt/club/club.png",
    ]},
    # 산도깨비: the muscular troll with horns
    "dokkaebi_big": {"layers": [
        "shadow/adult/shadow.png",
        {"path": "body/bodies/muscular/taupe.png", "tint": RED},
        "legs/pants/muscular/leather.png",
        {"path": "head/heads/troll/adult/taupe.png", "tint": RED},
        "hat/accessory/horns_short/bg/adult/ceramic.png",
        "hat/accessory/horns_short/fg/adult/ceramic.png",
    ]},
    # 저승사자: pale face, black 도포 and 갓
    "jeoseung": {"head": 4, "gat": True, "layers": [
        "shadow/adult/shadow.png",
        {"path": "body/bodies/male/light.png", "tint": PALE},
        "legs/pants/male/black.png",
        "feet/boots/male/black.png",
        "torso/clothes/longsleeve/longsleeve/male/black.png",
        "torso/jacket/tabard/male/black.png",
        {"path": "head/heads/human/male/light.png", "tint": PALE},
        "hair/plain/male/raven.png",
    ]},
    # 강시: the zombie with a 부적 on its forehead
    "gangsi": {"head": 3, "bujeok": True, "layers": [
        "shadow/adult/shadow.png",
        "body/bodies/zombie/universal/zombie.png",
        "legs/pants/male/charcoal.png",
        "head/heads/zombie/adult/zombie.png",
    ]},
}


def load(root, rel, missing):
    path = os.path.join(root, rel)
    if not os.path.exists(path):
        missing.append(rel)
        return None
    img = Image.open(path).convert("RGBA")
    if img.size[1] > H:
        img = img.crop((0, 0, W, H))
    if img.size != (W, H):
        c = Image.new("RGBA", (W, H))
        c.paste(img, (0, 0))
        img = c
    return img


def oversize_slash(root, rel, missing):
    """an oversize (192px cell) slash sheet: 6 frames x 4 directions -> the 64px cells of rows 12-15.
    Only the middle 64px of each cell fits the monster's frame, so wide swings are clipped."""
    path = os.path.join(root, rel)
    if not os.path.exists(path):
        missing.append(rel)
        return None
    src = Image.open(path).convert("RGBA")
    out = Image.new("RGBA", (W, H))
    for d in range(4):
        for c in range(6):
            out.paste(src.crop((c * 192 + 64, d * 192 + 64, c * 192 + 128, d * 192 + 128)), (c * C, (12 + d) * C))
    return out


def tint(img, cols):
    grey = ImageOps.grayscale(img)
    out = ImageOps.colorize(grey, black=cols[0], mid=cols[1], white=cols[2]).convert("RGBA")
    out.putalpha(img.getchannel("A"))
    return out


def head_boxes(head):
    """per cell: (x0, y0, x1, y1) of the head layer in sheet coordinates, or None"""
    boxes = {}
    a = head.getchannel("A")
    for r in range(H // C):
        for c in range(W // C):
            bb = a.crop((c * C, r * C, c * C + C, r * C + C)).getbbox()
            if bb:
                boxes[r, c] = (c * C + bb[0], r * C + bb[1], c * C + bb[2], r * C + bb[3])
    return boxes


def facing(row):
    return 2 if row >= 20 else row % 4  # 0 up, 1 left, 2 down, 3 right


def draw_gat(sheet, boxes):
    d = ImageDraw.Draw(sheet)
    for (r, c), (x0, y0, x1, y1) in boxes.items():
        cx = (x0 + x1) / 2
        f = facing(r)
        if f == 1:
            cx += 1
        elif f == 3:
            cx -= 1
        by = y0 + 3  # brim sits low on the hair
        # 양태 (brim): a wide translucent disc seen from slightly above
        d.ellipse((cx - 12, by - 3, cx + 12, by + 3), fill=(18, 18, 24, 190), outline=(70, 70, 84, 230))
        # 모정 (crown): a short black cylinder
        d.rectangle((cx - 4, by - 9, cx + 4, by), fill=(12, 12, 16, 245))
        d.ellipse((cx - 4, by - 11, cx + 4, by - 7), fill=(30, 30, 38, 255))
        d.line((cx - 4, by - 1, cx + 4, by - 1), fill=(120, 30, 30, 255))  # red band
        # 갓끈 (strings) down the cheeks when the face is visible
        if f != 0:
            d.line((cx - 4, by + 2, cx - 3, by + 11), fill=(40, 40, 50, 200))
            d.line((cx + 4, by + 2, cx + 3, by + 11), fill=(40, 40, 50, 200))


def draw_bujeok(sheet, boxes):
    d = ImageDraw.Draw(sheet)
    for (r, c), (x0, y0, x1, y1) in boxes.items():
        f = facing(r)
        if f == 0:
            continue
        cx = (x0 + x1) // 2
        top = y0 + 3
        if f == 2:
            d.rectangle((cx - 3, top, cx + 3, top + 11), fill=(236, 204, 84, 255), outline=(170, 130, 40, 255))
            # red brush strokes of the 부적 script
            d.line((cx - 1, top + 2, cx - 1, top + 9), fill=(196, 30, 24, 255))
            d.point((cx + 1, top + 3), fill=(196, 30, 24, 255))
            d.line((cx + 1, top + 5, cx + 2, top + 7), fill=(196, 30, 24, 255))
            d.point((cx + 1, top + 9), fill=(196, 30, 24, 255))
        else:  # side view: the strip hangs in front of the face
            fx = x0 + 1 if f == 1 else x1 - 2
            d.rectangle((fx - 1, top, fx + 1, top + 11), fill=(236, 204, 84, 255))
            d.line((fx, top + 3, fx, top + 8), fill=(196, 30, 24, 255))


def build(root, spec, missing):
    sheet = Image.new("RGBA", (W, H))
    layers = []
    for l in spec["layers"]:
        rel = l if isinstance(l, str) else l["path"]
        img = oversize_slash(root, rel, missing) if rel.startswith("weapon/blunt/") else load(root, rel, missing)
        if img is None:
            continue
        if not isinstance(l, str) and "tint" in l:
            img = tint(img, l["tint"])
        layers.append(img)
        sheet.alpha_composite(img)
    if "head" in spec:
        boxes = head_boxes(layers[spec["head"]])
        if spec.get("gat"):
            hair = layers[-1]
            hb = head_boxes(hair)
            boxes = {k: (min(v[0], hb[k][0]), min(v[1], hb[k][1]), max(v[2], hb[k][2]), max(v[3], hb[k][3])) if k in hb else v for k, v in boxes.items()}
            draw_gat(sheet, boxes)
        if spec.get("bujeok"):
            draw_bujeok(sheet, boxes)
    return sheet


def main():
    root, out = sys.argv[1], sys.argv[2]
    missing = []
    for name, spec in SHEETS.items():
        build(root, spec, missing).save(os.path.join(out, name + ".png"), optimize=True)
        print("sheet", name)
    if missing:
        print("MISSING:\n  " + "\n  ".join(missing))
        sys.exit(1)


if __name__ == "__main__":
    main()
