#!/usr/bin/env python3
"""Bake animated monster sheets from front / side / back views (tools/rig/mobs/m<N>_<view>.png).

Usage:
  python3 tools/build_mobs.py              # writes assets/sprites/mob_<id>.png and assets/sprites/mob_meta.js
  python3 tools/build_mobs.py --preview out.png

Monsters are animated as whole-body puppets: every frame is the source view moved, tilted and
squashed/stretched (walk bob and sway, hop for blobs, hover for flyers, wind-up and lunge
attacks, a slam for heavy attacks, falling over for death). Only the rows monsters use are
stored (thrust, walk, slash, hurt); rig meta maps game rows to image rows.
"""
import json
import math
import os
import sys

from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SRC = os.path.join(ROOT, "tools/rig/mobs")
SS = 2  # supersampling
ROWS = [0, 0, 0, 0, 8, 8, 8, 8, 9, 9, 9, 9, 6, 6, 6, 6, 0, 0, 0, 0, 6]
USED = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20]
UPD, LEFT, DOWN, RIGHT = 0, 1, 2, 3

# id: (source number, height in sheet px, gait, side view faces left?, overrides)
#  gait: walk (bipeds), heavy (big bipeds), quad (four legs), hop (blobs/mushrooms/mimic),
#        hover (ghosts, succubi), fly (wasp, dragons), crawl (spiders, scorpions)
MOBS = {
    "goblin": (9, 68, "walk", False, {}),
    "wolfman": (12, 62, "quad", False, {}),
    "boarman": (13, 61, "quad", False, {}),
    "zombie": (4, 80, "walk", False, {}),
    "skeleton": (6, 86, "hover", False, {}),
    "vampire": (28, 90, "heavy", False, {}),
    "orc": (7, 84, "walk", False, {}),
    "lizardman": (18, 93, "heavy", False, {}),
    "troll": (27, 84, "heavy", True, {}),
    "minotaur": (26, 84, "heavy", False, {}),
    "slime": (21, 34, "hop", False, {}),
    "king_slime": (22, 30, "hop", False, {}),
    "goblin_shaman": (10, 64, "walk", False, {}),
    "mushroom": (17, 50, "hop", True, {}),
    "wasp": (16, 52, "fly", False, {"side": "front"}),
    "ghost": (5, 80, "hover", False, {}),
    "hellhound": (11, 62, "quad", False, {}),
    "orc_chief": (8, 96, "heavy", False, {}),
    "mimic": (23, 44, "hop", False, {}),
    "spider": (14, 48, "crawl", False, {"side": "front"}),
    "scorpion": (15, 56, "crawl", False, {}),
    "ice_golem": (19, 98, "heavy", False, {}),
    "lava_golem": (20, 100, "heavy", False, {}),
    "succubus": (24, 84, "hover", True, {}),
    "lilith": (25, 84, "hover", True, {}),
    "red_dragon": (29, 96, "fly", True, {}),
    "ice_dragon": (30, 94, "fly", True, {}),
}


def load(num, view):
    return Image.open(os.path.join(SRC, f"m{num}_{view}.png")).convert("RGBA")


class Mob:
    def __init__(self, mid):
        num, h, gait, side_left, ov = MOBS[mid]
        self.id, self.gait = mid, gait
        views = {}
        for v in ("front", "side", "back"):
            im = load(num, ov.get(v, v))
            if v == "side" and side_left and "side" not in ov:
                im = im.transpose(Image.FLIP_LEFT_RIGHT)
            views[v] = im
        # one scale for all views, from the tallest one, so turning doesn't change size
        tall = max(im.height for im in views.values())
        self.s = h * SS / tall
        self.views = {k: v.resize((max(1, round(v.width * self.s)), max(1, round(v.height * self.s))), Image.LANCZOS) for k, v in views.items()}
        wmax = max(v.width for v in self.views.values()) / SS
        hmax = max(v.height for v in self.views.values()) / SS
        lift = 18 if gait in ("fly", "hover") else 0
        fs = int(math.ceil(max(wmax * 1.45, (hmax + lift) * 1.3 + 8) / 8) * 8)
        self.fs = fs
        self.feet = (fs // 2, fs - 6)
        self.head = round(hmax + lift * 0.6)
        self.hh = hmax

    # returns (dx, dy, rot deg, sx, sy, alpha) body transform for a frame
    def pose(self, anim, d, i, n):
        g = self.gait
        t = i / n
        fly = g in ("fly", "hover")
        base_dy = -14 if g == "fly" else (-10 if g == "hover" else 0)
        dx = dy = rot = 0.0
        sx = sy = 1.0
        if anim == "walk":
            ph = (i - 1) / 8 * 2 * math.pi if i else 0.0
            s1 = math.sin(ph)
            if g == "hop":
                k = max(0.0, math.sin(ph / 2 * 2))  # one hop per cycle
                hop = abs(math.sin(ph / 2))
                dy = -hop * 10 if i else 0
                sy = 1 + (hop - 0.5) * 0.16 if i else 1
                sx = 2 - sy
            elif fly:
                dy = base_dy + math.sin(ph) * 3
                rot = s1 * 3 if d == RIGHT else 0
                if d == RIGHT:
                    rot += 5  # lean into the flight
            elif g == "quad":
                dy = -abs(math.sin(ph)) * 3
                rot = math.sin(ph) * 3 if d == RIGHT else 0
                sx = 1 + abs(math.cos(ph)) * 0.02
            elif g == "crawl":
                dy = -abs(math.sin(ph * 2)) * 1.5
                sx = 1 + math.sin(ph * 2) * 0.03
            else:
                heavy = g == "heavy"
                dy = -abs(s1) * (2 if heavy else 3)
                rot = s1 * (2.5 if heavy else 4)
                land = 1 - abs(s1)
                sy = 1 - land * (0.035 if heavy else 0.025)
                sx = 1 + land * 0.02
            if not i:
                dx = dy = rot = 0
                sx = sy = 1
                if fly:
                    dy = base_dy
            return dx, dy, rot, sx, sy, 1
        if anim in ("slash", "thrust"):
            # hand-timed keys: (forward, up, lean deg, stretch along the strike, squash)
            # side view strikes forward; front view lunges toward the camera (grows), back view away (shrinks)
            if anim == "slash":  # quick swipe: crouch, coil, snap forward (hit on frame 3), follow through, settle
                K = [(0, 0, 0, 1, 1), (-3, 2, -5, 0.97, 0.94), (-5, 1, -8, 0.96, 0.92), (15, -1, 9, 1.12, 0.96), (11, 0, 6, 1.06, 0.98), (4, 0, 2, 1.01, 1)]
            else:  # heavy slam: crouch, rise high, hang, crash down (hit on frame 5), shake off
                K = [(0, 0, 0, 1, 1), (-2, 3, -3, 0.96, 0.9), (-4, -7, -8, 1.02, 1.08), (-5, -13, -11, 1.04, 1.12), (0, -9, -4, 1.03, 1.06),
                     (12, 3, 8, 1.16, 0.84), (8, 1, 5, 1.08, 0.92), (3, 0, 2, 1.02, 0.98)]
            f, u, lean, st, sq = K[i]
            if d == RIGHT:
                dx, dy, rot, sx, sy = f, u, lean, st, sq
            else:
                toward = 1 if d == DOWN else -1
                grow = 1 + toward * (st - 1) * 0.9
                dx, dy, rot = 0, u + toward * f * 0.35, 0
                sx, sy = grow * (2 - sq) ** 0.3, grow * sq
            if g == "hop":
                rot *= 0.5
            if g == "crawl":
                dy *= 0.4
            if fly:
                dy += base_dy
            return dx, dy, rot, sx, sy, 1
        if anim == "hurt":  # death: fall over and flatten
            k = [0, 0.25, 0.55, 0.85, 1, 1][i]
            if g in ("hop", "crawl"):
                return 0, 0, 0, 1 + 0.25 * k, 1 - 0.55 * k, 1
            back = -self.hh * 0.48 * k  # lying body re-centred over the feet
            if fly:
                return back, (base_dy) * (1 - k), 80 * k, 1, 1, 1
            return back, 0, 82 * k, 1, 1, 1
        raise ValueError(anim)

    def frame(self, anim, d, i, n):
        dd = RIGHT if d == LEFT else d
        view = self.views[{DOWN: "front", UPD: "back", RIGHT: "side"}[dd]]
        dx, dy, rot, sx, sy, a = self.pose(anim, dd, i, n)
        W = self.fs * SS
        canvas = Image.new("RGBA", (W, W))
        # scale about the feet, then rotate about the feet (death falls away from the viewer's right)
        vw, vh = view.size
        im = view.resize((max(1, round(vw * sx)), max(1, round(vh * sy))), Image.LANCZOS)
        fx, fy = self.feet[0] * SS, self.feet[1] * SS
        ox, oy = fx - im.width / 2, fy - im.height
        layer = Image.new("RGBA", (W, W))
        layer.alpha_composite(im, (int(round(ox)), int(round(oy))))
        if rot:
            pv = (fx, fy - im.height * (0.1 if anim == 'hurt' else 0.42))  # death tips over at the feet, attacks lean at the hips
            layer = layer.rotate(-rot, resample=Image.BICUBIC, center=pv)
        canvas.alpha_composite(layer, (0, 0)) if not (dx or dy) else canvas.alpha_composite(
            layer.transform(layer.size, Image.AFFINE, (1, 0, -dx * SS, 0, 1, -dy * SS), resample=Image.BICUBIC))
        out = canvas.resize((self.fs, self.fs), Image.LANCZOS)
        if d == LEFT:
            out = out.transpose(Image.FLIP_LEFT_RIGHT)
        return out

    def sheet(self):
        fs = self.fs
        im = Image.new("RGBA", (9 * fs, len(USED) * fs))
        names = {4: "thrust", 8: "walk", 12: "slash"}
        for j, r in enumerate(USED):
            if r == 20:
                anim, d = "hurt", DOWN
            else:
                base = r - r % 4
                anim, d = names[base], (UPD, LEFT, DOWN, RIGHT)[r % 4]
            n = ROWS[r]
            for i in range(n):
                im.alpha_composite(self.frame(anim, d, i, n), (i * fs, j * fs))
        return im

    def meta(self):
        return {"fs": self.fs, "feet": list(self.feet), "rows": ROWS, "rowOf": {str(r): j for j, r in enumerate(USED)}, "k": 1, "head": self.head, "mob": True}


def build_all(only=None):
    meta = {}
    for mid in MOBS:
        if only and mid not in only:
            continue
        m = Mob(mid)
        m.sheet().save(os.path.join(ROOT, f"assets/sprites/mob_{mid}.webp"), quality=88, method=6)
        meta["mob_" + mid] = dict(m.meta(), src=f"assets/sprites/mob_{mid}.webp")
        print("mob", mid, m.fs)
    path = os.path.join(ROOT, "assets/sprites/mob_meta.js")
    with open(path, "w") as f:
        f.write("// generated by tools/build_mobs.py\nwindow.MOB_META = " + json.dumps(meta, separators=(",", ":")) + ";\n")


def preview(path):
    ids = list(MOBS)
    cell = 150
    im = Image.new("RGBA", (8 * cell, len(ids) * cell), (70, 90, 60, 255))
    for j, mid in enumerate(ids):
        m = Mob(mid)
        frames = [m.frame("walk", DOWN, 0, 9), m.frame("walk", DOWN, 3, 9), m.frame("walk", RIGHT, 3, 9), m.frame("walk", LEFT, 6, 9),
                  m.frame("walk", UPD, 2, 9), m.frame("slash", RIGHT, 1, 6), m.frame("slash", RIGHT, 3, 6), m.frame("hurt", DOWN, 5, 6)]
        for i, f in enumerate(frames):
            k = min(1, cell / m.fs)
            f = f.resize((int(m.fs * k), int(m.fs * k)), Image.LANCZOS)
            im.alpha_composite(f, (i * cell + (cell - f.width) // 2, j * cell + cell - f.height))
    im.save(path)


if __name__ == "__main__":
    if len(sys.argv) > 2 and sys.argv[1] == "--preview":
        preview(sys.argv[2])
    else:
        build_all(sys.argv[1:] or None)
