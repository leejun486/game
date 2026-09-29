#!/usr/bin/env python3
"""Compose LPC character layers into single sprite sheets used by the game.

Usage:
  git clone https://github.com/sanderfrenken/Universal-LPC-Spritesheet-Character-Generator ulpc
  python3 tools/build_sprites.py ulpc/spritesheets assets/sprites

Every output sheet is 832x1344 (13 x 21 frames of 64x64), the standard LPC layout:
  rows 0-3 spellcast(7)  4-7 thrust(8)  8-11 walk(9)  12-15 slash(6)  16-19 shoot(13)  20 hurt(6)
  direction order inside each block: up, left, down, right
"""
import os
import sys

from PIL import Image

W, H = 832, 1344

# Layers are listed bottom -> top.
CHARACTERS = {
    # --- player classes ---
    "knight": [
        "shadow/adult/shadow.png",
        "cape/solid_behind/maroon.png",
        "weapon/sword/arming/universal/bg/steel.png",
        "body/bodies/male/light.png",
        "legs/armour/plate/male/steel.png",
        "feet/armour/plate/male/steel.png",
        "torso/armour/plate/male/steel.png",
        "cape/solid/male/maroon.png",
        "head/heads/human/male/light.png",
        "hair/plain/male/dark_brown.png",
        "weapon/sword/arming/universal/fg/steel.png",
    ],
    "elf": [
        "shadow/adult/shadow.png",
        "weapon/ranged/bow/normal/universal/background/medium.png",
        "body/bodies/female/light.png",
        "legs/pants/female/forest.png",
        "feet/boots/female/brown.png",
        "torso/armour/leather/female/forest.png",
        "head/heads/human/female/light.png",
        "hair/long/female/platinum.png",
        "weapon/ranged/bow/normal/universal/foreground/medium.png",
    ],
    "mage": [
        "shadow/adult/shadow.png",
        "cape/solid_behind/white.png",
        "weapon/magic/crystal/universal/background/purple.png",
        "body/bodies/female/light.png",
        "legs/skirts/plain/female/navy.png",
        "feet/boots/female/white.png",
        "torso/clothes/blouse_longsleeve/female/navy.png",
        "cape/solid/female/white.png",
        "head/heads/human/female/light.png",
        "hair/ponytail/female/violet.png",
        "weapon/magic/crystal/universal/foreground/purple.png",
    ],
    # --- other "players" wandering around town ---
    "knight_gold": [
        "shadow/adult/shadow.png",
        "cape/solid_behind/black.png",
        "weapon/sword/arming/universal/bg/gold.png",
        "body/bodies/male/bronze.png",
        "legs/armour/plate/male/gold.png",
        "feet/armour/plate/male/gold.png",
        "torso/armour/plate/male/gold.png",
        "cape/solid/male/black.png",
        "head/heads/human/male/bronze.png",
        "hair/spiked/male/black.png",
        "weapon/sword/arming/universal/fg/gold.png",
    ],
    "knight_dark": [
        "shadow/adult/shadow.png",
        "cape/solid_behind/purple.png",
        "weapon/sword/arming/universal/bg/iron.png",
        "body/bodies/male/light.png",
        "legs/armour/plate/male/iron.png",
        "feet/armour/plate/male/iron.png",
        "torso/armour/plate/male/iron.png",
        "cape/solid/male/lavender.png",
        "head/heads/human/male/light.png",
        "hair/messy1/male/white.png",
        "weapon/sword/arming/universal/fg/iron.png",
    ],
    "elf_red": [
        "shadow/adult/shadow.png",
        "weapon/ranged/bow/normal/universal/background/red.png",
        "body/bodies/female/light.png",
        "legs/pants/female/maroon.png",
        "feet/boots/female/black.png",
        "torso/armour/leather/female/maroon.png",
        "head/heads/human/female/light.png",
        "hair/long/female/redhead.png",
        "weapon/ranged/bow/normal/universal/foreground/red.png",
    ],
    "mage_white": [
        "shadow/adult/shadow.png",
        "cape/solid_behind/navy.png",
        "weapon/magic/crystal/universal/background/blue.png",
        "body/bodies/female/amber.png",
        "legs/skirts/plain/female/white.png",
        "feet/boots/female/navy.png",
        "torso/clothes/blouse_longsleeve/female/white.png",
        "cape/solid/female/navy.png",
        "head/heads/human/female/amber.png",
        "hair/princess/female/blonde.png",
        "weapon/magic/crystal/universal/foreground/blue.png",
    ],
    # --- NPCs ---
    "npc_merchant": [
        "shadow/adult/shadow.png",
        "body/bodies/male/light.png",
        "legs/pants/male/brown.png",
        "feet/boots/male/brown.png",
        "torso/clothes/longsleeve/longsleeve/male/white.png",
        "torso/aprons/apron/male/leather.png",
        "head/heads/human/male_elderly/light.png",
        "hair/plain/male/gray.png",
    ],
    "npc_woman": [
        "shadow/adult/shadow.png",
        "body/bodies/female/olive.png",
        "legs/skirts/plain/female/maroon.png",
        "feet/boots/female/brown.png",
        "torso/clothes/blouse_longsleeve/female/tan.png",
        "head/heads/human/female/olive.png",
        "hair/bob/adult/chestnut.png",
    ],
    "npc_guard": [
        "shadow/adult/shadow.png",
        "cape/solid_behind/blue.png",
        "body/bodies/male/brown.png",
        "legs/armour/plate/male/silver.png",
        "feet/armour/plate/male/silver.png",
        "torso/armour/plate/male/silver.png",
        "cape/solid/male/blue.png",
        "head/heads/human/male/brown.png",
        "hair/plain/male/black.png",
        "weapon/sword/arming/universal/fg/silver.png",
    ],
    "npc_sage": [
        "shadow/adult/shadow.png",
        "cape/solid_behind/purple.png",
        "body/bodies/male/light.png",
        "legs/pants/male/purple.png",
        "feet/boots/male/black.png",
        "torso/clothes/longsleeve/longsleeve/male/purple.png",
        "cape/solid/male/lavender.png",
        "head/heads/human/male_elderly/light.png",
        "hair/long/male/white.png",
        "weapon/magic/crystal/universal/foreground/yellow.png",
    ],
    # --- monsters ---
    "skeleton": [
        "shadow/adult/shadow.png",
        "body/bodies/skeleton/universal/skeleton.png",
        "head/heads/skeleton/adult/skeleton.png",
        "weapon/sword/arming/universal/fg/iron.png",
    ],
    "zombie": [
        "shadow/adult/shadow.png",
        "body/bodies/zombie/universal/zombie.png",
        "legs/pants/male/charcoal.png",
        "head/heads/zombie/adult/zombie.png",
    ],
    "orc": [
        "shadow/adult/shadow.png",
        "body/bodies/male/green.png",
        "legs/pants/male/leather.png",
        "feet/boots/male/black.png",
        "torso/armour/leather/male/brown.png",
        "head/heads/orc/male/green.png",
        "weapon/sword/arming/universal/fg/bronze.png",
    ],
    "goblin": [
        "shadow/adult/shadow.png",
        "body/bodies/male/bright_green.png",
        "legs/pants/male/brown.png",
        "head/heads/goblin/adult/bright_green.png",
    ],
    "wolfman": [
        "shadow/adult/shadow.png",
        "body/bodies/male/fur_grey.png",
        "legs/pants/male/charcoal.png",
        "head/heads/wolf/male/fur_grey.png",
    ],
    "lizardman": [
        "shadow/adult/shadow.png",
        "body/bodies/male/dark_green.png",
        "torso/armour/leather/male/black.png",
        "head/heads/lizard/male/dark_green.png",
        "weapon/sword/arming/universal/fg/copper.png",
    ],
    "troll": [
        "shadow/adult/shadow.png",
        "body/bodies/muscular/taupe.png",
        "legs/pants/muscular/leather.png",
        "head/heads/troll/adult/taupe.png",
    ],
    "boarman": [
        "shadow/adult/shadow.png",
        "body/bodies/male/fur_brown.png",
        "legs/pants/male/brown.png",
        "torso/armour/leather/male/leather.png",
        "head/heads/boarman/adult/fur_brown.png",
    ],
    "minotaur": [
        "shadow/adult/shadow.png",
        "body/bodies/muscular/fur_brown.png",
        "legs/pants/muscular/maroon.png",
        "head/heads/minotaur/male/fur_brown.png",
    ],
    "vampire": [
        "shadow/adult/shadow.png",
        "cape/solid_behind/red.png",
        "body/bodies/male/lavender.png",
        "legs/pants/male/black.png",
        "feet/boots/male/black.png",
        "torso/clothes/longsleeve/longsleeve/male/black.png",
        "cape/solid/male/red.png",
        "head/heads/vampire/adult/lavender.png",
        "hair/plain/male/raven.png",
    ],
}


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


def main():
    root, out = sys.argv[1], sys.argv[2]
    os.makedirs(out, exist_ok=True)
    used = set()
    missing = []
    for name, layers in CHARACTERS.items():
        sheet = Image.new("RGBA", (W, H))
        for rel in layers:
            img = load(root, rel)
            if img is None:
                missing.append(f"{name}: {rel}")
                continue
            used.add(rel)
            sheet.alpha_composite(img)
        sheet.save(os.path.join(out, f"{name}.png"), optimize=True)
        print("built", name)
        # weapon-less variant: the player draws its weapon look as a separate layer
        if any(l.startswith("weapon/") for l in layers):
            nw = Image.new("RGBA", (W, H))
            for rel in layers:
                img = None if rel.startswith("weapon/") else load(root, rel)
                if img is not None:
                    nw.alpha_composite(img)
            nw.save(os.path.join(out, f"{name}_nw.png"), optimize=True)
    with open(os.path.join(out, "layers_used.txt"), "w") as f:
        f.write("\n".join(sorted(used)) + "\n")
    if missing:
        print("MISSING LAYERS:\n  " + "\n  ".join(missing))



def write_meta(root, out):
    """Record how many frames of each of the 21 animation rows contain a body, per sheet."""
    import json
    meta = {}
    for name, layers in CHARACTERS.items():
        im = load(root, next(l for l in layers if l.startswith("body/")))
        rows = []
        for r in range(H // 64):
            rows.append(sum(1 for c in range(W // 64)
                            if im.crop((c * 64, r * 64, c * 64 + 64, r * 64 + 64)).getbbox()))
        meta[name] = rows
        if any(l.startswith("weapon/") for l in layers):
            meta[name + "_nw"] = rows
    with open(os.path.join(out, "meta.js"), "w") as f:
        f.write("// generated by tools/build_sprites.py\nwindow.SPRITE_ROWS = " + json.dumps(meta) + ";\n")


if __name__ == "__main__":
    main()
    write_meta(sys.argv[1], sys.argv[2])
