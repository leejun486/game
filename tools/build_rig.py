#!/usr/bin/env python3
"""Bake animated field sprites from character turnaround art (front / side / back views).

Usage:
  python3 tools/build_rig.py            # writes assets/sprites/r_<cls>.png and assets/sprites/rig_meta.js
  python3 tools/build_rig.py --preview out.png

Each view is split into rigid parts (body, two arms, two legs) using the joint positions in RIG
below. Arms turn at the shoulders and legs at the hips; the holes an arm leaves in hair/clothes
behind it are filled by colour diffusion. Every pose of the game's sheet layout is baked into
128px frames:

  rows 0-3 spellcast (7)   4-7 thrust (8)   8-11 walk (9)   12-15 slash (6)   16-19 shoot (13)   20 hurt (6)
  directions per group: up, left, down, right

The side view faces right; left is its mirror. Weapons are not baked: rig_meta.js records, per
frame, where the weapon hand is, the weapon angle, whether it is drawn behind or in front of the
body and the bow draw amount, and the game draws the equipped weapon look there at runtime.
"""
import json
import math
import os
import sys

import numpy as np
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SRC = os.path.join(ROOT, "tools/rig/src")
FS = 128                 # output frame size
WK = 2                   # working resolution multiplier
CH = 96                  # character height in output pixels
FEET = (64, 122)         # feet position inside an output frame
ROWS = [7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 6, 6, 6, 6, 13, 13, 13, 13, 6]
UPD, LEFT, DOWN, RIGHT = 0, 1, 2, 3

# joint positions in source-view pixels.
#  arms: [(shoulder, hand), ...]  front/back: [viewer-left, viewer-right]; side: [near]
#  legs: [(x0, x1) column span, ...] below legTop; hips: pivot per leg; aw: arm half-width (shoulder, cuff)
RIG = {
    "elf": {
        "front": dict(arms=[((175, 305), (40, 545)), ((330, 305), (470, 545))], legs=[(105, 220), (285, 405)], legTop=705, hips=[(180, 560), (320, 560)], aw=(40, 78)),
        "side": dict(arms=[((215, 300), (206, 548))], legs=[(150, 232), (226, 312)], legTop=715, hips=[(212, 585), (258, 585)], aw=(40, 62)),
        "back": dict(arms=[((171, 300), (26, 545)), ((331, 300), (471, 545))], legs=[(135, 216), (290, 376)], legTop=720, hips=[(185, 560), (320, 560)], aw=(40, 78)),
        "weapon": "bow",
    },
    "knight": {
        "front": dict(arms=[((150, 410), (40, 632)), ((360, 410), (470, 632))], legs=[(85, 195), (315, 425)], legTop=815, hips=[(195, 650), (315, 650)], aw=(40, 62)),
        "side": dict(arms=[((191, 420), (186, 645))], legs=[(200, 282), (278, 370)], legTop=825, hips=[(236, 660), (290, 660)], aw=(40, 55)),
        "back": dict(arms=[((156, 420), (46, 632)), ((366, 420), (466, 632))], legs=[(100, 192), (310, 410)], legTop=830, hips=[(180, 650), (320, 650)], aw=(40, 62)),
        "weapon": "sword",
    },
    "mage": {
        "front": dict(arms=[((160, 430), (40, 626)), ((355, 430), (470, 626))], legs=[(85, 205), (315, 425)], legTop=820, hips=[(190, 660), (320, 660)], aw=(42, 72)),
        "side": dict(arms=[((211, 420), (221, 622))], legs=[(200, 272), (268, 340)], legTop=825, hips=[(236, 660), (290, 660)], aw=(42, 60)),
        "back": dict(arms=[((144, 420), (44, 626)), ((364, 420), (474, 626))], legs=[(100, 198), (325, 418)], legTop=825, hips=[(190, 660), (330, 660)], aw=(42, 72)),
        "weapon": "staff",
    },
}


# ---------------------------------------------------------------- parts
def seg_dist(px, py, a, b):
    ax, ay = a; bx, by = b
    dx, dy = bx - ax, by - ay
    t = np.clip(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy), -0.15, 1.18)
    return np.hypot(px - (ax + t * dx), py - (ay + t * dy)), t


def diffuse_fill(rgba, hole, iters=80):
    """fill hole pixels with colours flowing in from their opaque neighbours"""
    a = rgba.astype(np.float32)
    known = (a[:, :, 3] > 200) & ~hole
    col = a[:, :, :3] * known[:, :, None]
    w = known.astype(np.float32)
    for _ in range(iters):
        pc = np.pad(col, ((1, 1), (1, 1), (0, 0))); pw = np.pad(w, 1)
        sc = sum(pc[1 + dy:pc.shape[0] - 1 + dy, 1 + dx:pc.shape[1] - 1 + dx] for dy in (-1, 0, 1) for dx in (-1, 0, 1))
        sw = sum(pw[1 + dy:pw.shape[0] - 1 + dy, 1 + dx:pw.shape[1] - 1 + dx] for dy in (-1, 0, 1) for dx in (-1, 0, 1))
        grow = hole & (w == 0) & (sw > 0)
        col[grow] = sc[grow] / sw[grow][:, None]; w[grow] = 1
    out = a.copy()
    fill = hole & (w > 0)
    out[fill, :3] = col[fill]; out[fill, 3] = 255
    return out.astype(np.uint8)


class View:
    """one source view cut into parts at working resolution"""

    def __init__(self, cls, view):
        cfg = RIG[cls][view]
        im = Image.open(os.path.join(SRC, f"{cls}_{view}.png")).convert("RGBA")
        self.s = s = CH * WK / im.height
        im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
        A = np.asarray(im).copy()
        H, W = A.shape[:2]
        S = lambda p: (p[0] * s, p[1] * s)
        self.arms = [(S(a), S(b)) for a, b in cfg["arms"]]
        self.hips = [S(h) for h in cfg["hips"]]
        legs = [(x0 * s, x1 * s) for x0, x1 in cfg["legs"]]
        legTop = cfg["legTop"] * s
        yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
        solid = A[:, :, 3] > 10
        cx = (self.hips[0][0] + self.hips[-1][0]) / 2
        # arms: capsule around shoulder->hand, widening toward the cuff; front/back skip the torso core
        self.arm_masks = []
        for sh, hd in self.arms:
            d, t = seg_dist(xx, yy, sh, hd)
            r = (cfg["aw"][0] + (cfg["aw"][1] - cfg["aw"][0]) * np.clip(t, 0, 1)) * s
            m = solid & (d < r) & (yy > sh[1] - 18 * s)
            if view != "side":
                m &= np.abs(xx - cx) > abs(sh[0] - cx) - 8 * s
            self.arm_masks.append(m)
        # legs: column spans below legTop (plus a hidden strip that tucks under the skirt)
        self.leg_masks, self.leg_tuck = [], []
        for x0, x1 in legs:
            col = (xx >= x0) & (xx <= x1)
            self.leg_masks.append(solid & col & (yy >= legTop))
            self.leg_tuck.append(solid & col & (yy >= legTop - 30 * s) & (yy < legTop))
        taken = np.zeros_like(solid)
        for m in self.arm_masks + self.leg_masks:
            taken |= m
        body = A.copy(); body[taken, 3] = 0
        # holes an arm leaves where hair/clothes continue beyond it get filled
        hole = np.zeros_like(solid)
        for m in self.arm_masks:
            rows = np.nonzero(m.any(1))[0]
            for y in rows:
                xs = np.nonzero(m[y])[0]
                rest = (body[y, :, 3] > 200)
                left = rest[:xs.min()].any(); right = rest[xs.max() + 1:].any()
                if left and right:
                    hole[y, xs.min():xs.max() + 1] |= m[y, xs.min():xs.max() + 1]
        self.body = Image.fromarray(diffuse_fill(body, hole) if hole.any() else body)
        part = lambda m: Image.fromarray(np.where(m[:, :, None], A, 0).astype(np.uint8))
        self.arm_imgs = [part(m) for m in self.arm_masks]
        self.leg_imgs = [part(m | t) for m, t in zip(self.leg_masks, self.leg_tuck)]
        self.W, self.H = W, H
        self.cx = cx
        self.feet_y = H - 1


def rot_about(img, pivot, ang, dx=0, dy=0):
    """rotate img by ang degrees (clockwise on screen) about pivot, then shift"""
    a = math.radians(ang)
    c, s = math.cos(a), math.sin(a)
    px, py = pivot
    # inverse map: output (x,y) -> input
    # forward: p' = R(p - pv) + pv + d ; inverse: p = R^T(p' - pv - d) + pv
    ox, oy = px + dx, py + dy
    m = (c, s, px - c * ox - s * oy, -s, c, py + s * ox - c * oy)
    return img.transform(img.size, Image.AFFINE, m, resample=Image.BICUBIC)


def rot_pt(p, pivot, ang, dx=0, dy=0):
    a = math.radians(ang)
    x, y = p[0] - pivot[0], p[1] - pivot[1]
    return (pivot[0] + x * math.cos(a) - y * math.sin(a) + dx, pivot[1] + x * math.sin(a) + y * math.cos(a) + dy)


# ---------------------------------------------------------------- poses
class Pose:
    def __init__(self):
        self.body = (0.0, 0.0, 0.0)       # (angle about the hips, dx, dy) in output px
        self.arms = [0.0, 0.0]            # rotation per arm (deg, clockwise)
        self.legs = [(0.0, 0.0), (0.0, 0.0)]  # (angle, lift) per leg
        self.wpn = None                   # weapon angle (screen deg, 0 = right, -90 = up)
        self.draw = 0.0
        self.lie = 0.0
        self.kneel = 0.0


def raise_sign(d, i):
    """rotation sign that lifts arm i outward/up for view direction d"""
    if d == DOWN:
        return 1 if i == 0 else -1
    if d == UPD:
        return 1 if i == 0 else -1
    return -1  # side view (facing right): negative swings the near arm forward/up


def weapon_arm(d):
    return 0 if d in (DOWN, RIGHT) else 1  # front: viewer-left; back: viewer-right; side: near


def pose_for(anim, d, i, kind):
    p = Pose()
    side = d == RIGHT
    wa = weapon_arm(d) if not side else 0
    if anim == "walk":
        ph = (i - 1) / 8 * 2 * math.pi if i else 0.0
        sn = math.sin(ph) if i else 0.0
        p.body = (0, 0, -abs(sn) * 2.2 if i else 0)
        if side:
            p.legs = [(22 * sn, 0), (-22 * sn, 0)]
            p.arms = [16 * sn, 0]
        else:
            p.legs = [(0, max(0, sn) * 4), (0, max(0, -sn) * 4)]
            p.arms = [4 * sn, 4 * sn]
            p.body = (1.5 * sn, 0, p.body[2])
        p.wpn = {"sword": -60 if side else -75, "bow": -90, "staff": -95}[kind]
        return p
    if anim == "slash":
        if side:
            p.arms = [[20, 120, 160, 10, -80, -60][i], 0]
            p.wpn = [-40, -150, -120, -10, 45, 35][i]
            p.body = ([2, 5, 6, -4, -8, -5][i], [0, -1, -2, 2, 4, 3][i], 0)
            p.legs = [([0, 0, -6, 10, 14, 12][i], 0), ([0, 0, 4, -10, -14, -12][i], 0)]
        else:
            s = raise_sign(d, wa)
            lift = [15, 80, 130, 40, -10, 0][i]
            p.arms[wa] = s * lift
            base = -120 if d == DOWN else -60
            p.wpn = base + (-1 if d == DOWN else 1) * [0, 30, 45, -60, -120, -130][i]
            p.body = (s * [0, 2, 3, -2, -4, -3][i], 0, 0)
        return p
    if anim == "thrust":
        k = [0, 0.2, 0.45, 0.6, 0.9, 1.0, 0.7, 0.3][i]
        if side:
            p.arms = [-80 * k, 0]
            p.wpn = -95 + 40 * k
            p.body = (-4 * k, 2 * k, 0)
        else:
            p.arms[wa] = raise_sign(d, wa) * 60 * k
            p.wpn = -92
            p.body = (0, 0, -2 * k)
        return p
    if anim == "spellcast":
        k = [0, 0.35, 0.7, 1, 1, 1, 0.4][i]
        if side:
            p.arms = [-125 * k, 0]
        else:
            p.arms = [raise_sign(d, 0) * 95 * k, raise_sign(d, 1) * 95 * k]
        p.wpn = {"sword": -75, "bow": -90, "staff": -95}[kind]
        p.body = (0, 0, -2 * k)
        return p
    if anim == "shoot":
        k = [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 1, 1, 0.2, 0.1, 0, 0][i]
        up = min(1, i / 3) if i < 11 else 0.4
        if side:
            p.arms = [-88 * up, 0]
            p.body = (-2 * up, 0, 0)
        else:
            p.arms[wa] = raise_sign(d, wa) * 50 * up
        p.wpn = -90
        p.draw = k if i < 9 else 0
        return p
    if anim == "hurt":
        p.kneel = [0, 0.3, 0.6, 1, 1, 1][i]
        p.lie = [0, 0, 0, 0, 0.6, 1][i]
        p.wpn = 150
        return p
    raise ValueError(anim)


# ---------------------------------------------------------------- rendering
class Rig:
    def __init__(self, cls):
        self.cls = cls
        self.kind = RIG[cls]["weapon"]
        self.views = {v: View(cls, v) for v in ("front", "side", "back")}

    def frame(self, anim, d, i):
        """returns (Image FSxFS, meta dict)"""
        dd = RIGHT if d == LEFT else d
        v = self.views[{DOWN: "front", UPD: "back", RIGHT: "side"}[dd]]
        p = pose_for(anim, dd, i, self.kind)
        CW = FS * WK
        canvas = Image.new("RGBA", (CW, CW))
        # place the view so its feet sit at FEET and its hips centre on x
        ox = FEET[0] * WK - v.cx
        oy = FEET[1] * WK - v.feet_y
        k = p.kneel
        bang, bdx, bdy = p.body
        bdx *= WK; bdy = (bdy + k * 10) * WK
        hipc = ((v.hips[0][0] + v.hips[-1][0]) / 2, v.hips[0][1])

        def place(img, dx=0, dy=0):
            canvas.alpha_composite(img, (int(round(ox + dx)), int(round(oy + dy))))

        def full(img):
            c = Image.new("RGBA", (v.W, v.H)); c.alpha_composite(img); return c

        # legs behind the body (far leg first); kneeling folds them up under the skirt
        order = [0, 1]
        for li in order:
            ang, lift = p.legs[li]
            img = v.leg_imgs[li]
            if k > 0:
                img = rot_about(img, v.hips[li], 0, 0, -k * 26 * WK)
                img = Image.fromarray(np.asarray(img))
            img = rot_about(img, v.hips[li], ang, 0, -lift * WK)
            if dd == RIGHT and li == 0:
                arr = np.asarray(img).astype(np.float32); arr[:, :, :3] *= 0.82; img = Image.fromarray(arr.astype(np.uint8))
            place(img, 0, 0 if k == 0 else 0)
        # body (+ arms) rotate together about the hip centre
        layer = Image.new("RGBA", (v.W, v.H))
        arm_order = [0, 1] if len(v.arms) == 2 else [0]
        hands = []
        behind = []
        for ai in arm_order:
            ang = p.arms[ai]
            sh, hd = v.arms[ai]
            img = rot_about(v.arm_imgs[ai], sh, ang)
            hand = rot_pt(hd, sh, ang)
            hands.append(hand)
            behind.append(img)
        layer.alpha_composite(v.body)
        for img in behind:
            layer.alpha_composite(img)
        layer = rot_about(layer, hipc, bang, bdx, bdy)
        hands = [rot_pt(h, hipc, bang, bdx, bdy) for h in hands]
        place(layer)
        img = canvas
        wa = 0 if dd == RIGHT else weapon_arm(dd)
        hx, hy = hands[wa if wa < len(hands) else 0]
        hx, hy = (hx + ox) / WK, (hy + oy) / WK
        ang = p.wpn
        if p.lie > 0:
            # fall over sideways about the feet
            # lying body is centred back over the feet so it stays inside the frame
            img = rot_about(img, (FEET[0] * WK, FEET[1] * WK), 88 * p.lie, -46 * WK * p.lie, -16 * WK * p.lie)
            hx, hy = rot_pt((hx, hy), FEET, 88 * p.lie, -46 * p.lie, -16 * p.lie)
            ang = ang + 88 * p.lie
        out = img.resize((FS, FS), Image.LANCZOS)
        layer_ = "bg" if dd == UPD else "fg"
        meta = [round(hx, 1), round(hy, 1), round(ang, 1), 0 if layer_ == "bg" else 1, round(p.draw, 2)]
        if d == LEFT:
            out = out.transpose(Image.FLIP_LEFT_RIGHT)
            meta[0] = round(FS - meta[0], 1)
            meta[2] = round(180 - meta[2], 1)
        return out, meta

    def sheet(self):
        im = Image.new("RGBA", (13 * FS, 21 * FS))
        meta = []
        groups = [("spellcast", 0), ("thrust", 4), ("walk", 8), ("slash", 12), ("shoot", 16)]
        rows = {}
        for anim, base in groups:
            for k, d in enumerate((UPD, LEFT, DOWN, RIGHT)):
                rows[base + k] = (anim, d)
        rows[20] = ("hurt", DOWN)
        for r in range(21):
            anim, d = rows[r]
            mr = []
            for i in range(ROWS[r]):
                f, m = self.frame(anim, d, i)
                im.alpha_composite(f, (i * FS, r * FS))
                mr.append(m)
            meta.append(mr)
        return im, meta


def build_all():
    out = {}
    for cls in RIG:
        rig = Rig(cls)
        im, meta = rig.sheet()
        im.save(os.path.join(ROOT, f"assets/sprites/r_{cls}.png"), optimize=True)
        out["r_" + cls] = {"fs": FS, "feet": FEET, "rows": ROWS, "kind": rig.kind, "hands": meta}
        print("rig", cls)
    with open(os.path.join(ROOT, "assets/sprites/rig_meta.js"), "w") as f:
        f.write("// generated by tools/build_rig.py\nwindow.RIG_META = " + json.dumps(out, separators=(",", ":")) + ";\n")


def preview(path):
    cells = []
    for cls in RIG:
        rig = Rig(cls)
        row = []
        for anim, d, idx in [("walk", DOWN, 0), ("walk", DOWN, 3), ("walk", RIGHT, 2), ("walk", RIGHT, 6), ("walk", UPD, 3), ("walk", LEFT, 4),
                             ("slash", RIGHT, 2), ("slash", RIGHT, 4), ("slash", DOWN, 2), ("spellcast", DOWN, 4), ("shoot", RIGHT, 7), ("hurt", DOWN, 5)]:
            f, m = rig.frame(anim, d, idx)
            row.append((f, m))
        cells.append(row)
    Z = 2
    im = Image.new("RGBA", (12 * FS * Z, 3 * FS * Z), (70, 90, 60, 255))
    from PIL import ImageDraw
    dr = ImageDraw.Draw(im)
    for j, row in enumerate(cells):
        for i, (f, m) in enumerate(row):
            im.alpha_composite(f.resize((FS * Z, FS * Z), Image.LANCZOS), (i * FS * Z, j * FS * Z))
            x, y = i * FS * Z + m[0] * Z, j * FS * Z + m[1] * Z
            a = math.radians(m[2])
            dr.line([(x, y), (x + math.cos(a) * 40, y + math.sin(a) * 40)], fill=(255, 255, 0, 255), width=3)
            dr.ellipse([x - 4, y - 4, x + 4, y + 4], fill=(255, 0, 0, 255))
    im.save(path)


if __name__ == "__main__":
    if len(sys.argv) > 2 and sys.argv[1] == "--preview":
        preview(sys.argv[2])
    else:
        build_all()
