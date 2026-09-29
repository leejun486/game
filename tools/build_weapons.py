#!/usr/bin/env python3
"""Build weapon-look atlases from Universal LPC weapon layers.

Usage:
  python3 tools/build_weapons.py <ulpc>/spritesheets assets/weapons

LPC weapons are split over many per-animation sheets with different frame sizes
(64px universal sheets, 128px walk/slash sheets, 192px oversized attack sheets).
This script normalises every look into one grid of 192px cells so the game can
draw the weapon as its own layer on top of a weapon-less body:

  rows 0-3  walk   (up, left, down, right), 9 frames
  rows 4-7  attack (the class attack: knight slash 6, elf shoot 13, mage thrust 8)
  row  8    hurt   6 frames
  13 columns

Each look produces <id>_bg.png (drawn behind the body) and <id>_fg.png (in front),
plus an entry in meta.js with frame counts and, per cell, the weapon centre and tip
(used for glow, particles and slash trails).
"""
import json
import os
import sys

import numpy as np
from PIL import Image

CELL, COLS, ROWS = 192, 13, 9
ATTACK_FRAMES = {"knight": 6, "elf": 13, "mage": 8}
UNIVERSAL_ROW = {"walk": 8, "slash": 12, "shoot": 16, "thrust": 4, "hurt": 20}

# body centre inside a 192 cell (the 64px body frame sits at offset 64,64)
BODY_CX, BODY_CY = 96, 104


def sword(main, behind, atk_fg, atk_bg):
    return {"walk": [("u64", behind, "bg"), ("u64", main, "fg")],
            "attack": [("sheet", atk_bg, "bg"), ("sheet", atk_fg, "fg")],
            "hurt": [("u64", main, "fg")]}


def arming(c):
    b = "weapon/sword/arming/"
    return sword(f"{b}universal/fg/{c}.png", f"{b}universal/bg/{c}.png",
                 f"{b}attack_slash/fg/{c}.png", f"{b}attack_slash/bg/{c}.png")


def named_sword(kind, name, behind_dir="universal_behind"):
    b = f"weapon/{kind}/{name.split('/')[0]}/"
    n = name.split("/")[-1]
    return sword(f"{b}{n}.png", f"{b}{behind_dir}/{n}.png",
                 f"{b}attack_slash/{n}.png", f"{b}attack_slash/behind/{n}.png")


def bow(kind, c):
    b = f"weapon/ranged/bow/{kind}/"
    return {"walk": [("sheet", f"{b}walk/background/{c}.png", "bg"), ("sheet", f"{b}walk/foreground/{c}.png", "fg")],
            "attack": [("u64", f"{b}universal/background/{c}.png", "bg"), ("u64", f"{b}universal/foreground/{c}.png", "fg")],
            "hurt": [("u64", f"{b}universal/foreground/{c}.png", "fg")]}


def staff(kind, c):
    b = f"weapon/magic/{kind}/"
    return {"walk": [("u64", f"{b}universal/background/{c}.png", "bg"), ("u64", f"{b}universal/foreground/{c}.png", "fg")],
            "attack": [("sheet", f"{b}thrust/background/{c}.png", "bg"), ("sheet", f"{b}thrust/foreground/{c}.png", "fg")],
            "hurt": [("u64", f"{b}universal/foreground/{c}.png", "fg")]}


LOOKS = {
    # knight / swords
    "ks_steel": ("knight", arming("steel")),
    "ks_bronze": ("knight", arming("bronze")),
    "ks_gold": ("knight", arming("gold")),
    "ks_saber": ("knight", named_sword("sword", "saber")),
    "ks_rapier": ("knight", named_sword("sword", "rapier")),
    "ks_long": ("knight", named_sword("sword", "longsword")),
    "ks_mace": ("knight", named_sword("blunt", "mace")),
    "ks_axe": ("knight", named_sword("blunt", "waraxe", "behind")),
    "ks_frost": ("knight", named_sword("sword", "glowsword/blue")),
    "ks_flame": ("knight", named_sword("sword", "glowsword/red")),
    # elf / bows
    "eb_medium": ("elf", bow("normal", "medium")),
    "eb_light": ("elf", bow("normal", "light")),
    "eb_recurve": ("elf", bow("recurve", "medium")),
    "eb_great": ("elf", bow("great", "medium")),
    "eb_silver": ("elf", bow("normal", "silver")),
    "eb_gold": ("elf", bow("great", "gold")),
    "eb_shadow": ("elf", bow("recurve", "dark")),
    "eb_crimson": ("elf", bow("great", "red")),
    # mage / staves
    "ms_purple": ("mage", staff("crystal", "purple")),
    "ms_gnarled": ("mage", staff("gnarled", "gnarled")),
    "ms_loop": ("mage", staff("loop", "brass")),
    "ms_serpent": ("mage", staff("s", "bronze")),
    "ms_diamond": ("mage", staff("diamond", "gold")),
    "ms_earth": ("mage", staff("crystal", "green")),
    "ms_frost": ("mage", staff("crystal", "blue")),
    "ms_inferno": ("mage", staff("crystal", "red")),
}


def load(root, rel):
    p = os.path.join(root, rel)
    return Image.open(p).convert("RGBA") if os.path.exists(p) else None


def paste_row(atlas, src, src_row, frame, dst_row, n):
    for c in range(min(n, src.size[0] // frame)):
        tile = src.crop((c * frame, src_row * frame, c * frame + frame, src_row * frame + frame))
        off = (CELL - frame) // 2
        atlas.alpha_composite(tile, (c * CELL + off, dst_row * CELL + off))


def build(root, cls, spec, missing):
    layers = {"bg": Image.new("RGBA", (COLS * CELL, ROWS * CELL)), "fg": Image.new("RGBA", (COLS * CELL, ROWS * CELL))}
    atk_anim = {"knight": "slash", "elf": "shoot", "mage": "thrust"}[cls]
    counts = {"walk": 9, "attack": ATTACK_FRAMES[cls], "hurt": 6}
    base_row = {"walk": 0, "attack": 4, "hurt": 8}
    for part, sources in spec.items():
        for kind, rel, layer in sources:
            img = load(root, rel)
            if img is None:
                missing.append(rel)
                continue
            dirs = 1 if part == "hurt" else 4
            for d in range(dirs):
                if kind == "u64":
                    anim = {"walk": "walk", "attack": atk_anim, "hurt": "hurt"}[part]
                    paste_row(layers[layer], img, UNIVERSAL_ROW[anim] + d, 64, base_row[part] + d, counts[part])
                else:  # per-animation sheet: 4 direction rows, square frames
                    frame = img.size[1] // 4
                    paste_row(layers[layer], img, d, frame, base_row[part] + d, counts[part])
    return layers, counts


def points(layers):
    """Per cell: weapon centre and tip (farthest opaque pixel from the body centre)."""
    a = np.maximum(np.array(layers["bg"])[:, :, 3], np.array(layers["fg"])[:, :, 3])
    out = []
    for r in range(ROWS):
        row = []
        for c in range(COLS):
            cell = a[r * CELL:(r + 1) * CELL, c * CELL:(c + 1) * CELL]
            ys, xs = np.nonzero(cell > 40)
            if len(xs) == 0:
                row.append(0)
                continue
            d = (xs - BODY_CX) ** 2 + (ys - BODY_CY) ** 2
            i = int(np.argmax(d))
            row.append([int(xs.mean()), int(ys.mean()), int(xs[i]), int(ys[i])])
        out.append(row)
    return out


def main():
    root, out = sys.argv[1], sys.argv[2]
    os.makedirs(out, exist_ok=True)
    meta, missing, used = {}, [], set()
    for lid, (cls, spec) in LOOKS.items():
        layers, counts = build(root, cls, spec, missing)
        for k, im in layers.items():
            im.save(os.path.join(out, f"{lid}_{k}.png"), optimize=True)
        meta[lid] = {"cls": cls, "frames": [counts["walk"], counts["attack"], counts["hurt"]], "pts": points(layers)}
        for srcs in spec.values():
            for _, rel, _ in srcs:
                used.add(rel)
        print("built", lid)
    with open(os.path.join(out, "meta.js"), "w") as f:
        f.write("// generated by tools/build_weapons.py\nwindow.WEAPON_META = " + json.dumps(meta, separators=(",", ":")) + ";\n")
    with open(os.path.join(out, "layers_used.txt"), "w") as f:
        f.write("\n".join(sorted(u for u in used if os.path.exists(os.path.join(root, u)))) + "\n")
    if missing:
        print("missing (skipped):\n  " + "\n  ".join(sorted(set(missing))))


if __name__ == "__main__":
    main()
