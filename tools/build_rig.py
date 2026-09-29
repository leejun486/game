#!/usr/bin/env python3
"""Bake animated field sprites from character turnaround art (front / side / back views).

Usage:
  python3 tools/build_rig.py            # writes assets/sprites/r_<cls>(_fist).png and assets/sprites/rig_meta.js
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
TE = 0.5                 # elbow position along shoulder -> hand
FIST = 30                # fist radius (source px) drawn over the weapon grip
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
        # two-segment arms: upper arm turns at the shoulder, forearm at the elbow; the fist is also cut
        # out on its own so it can be drawn over the weapon grip
        self.arm_imgs = [part(m) for m in self.arm_masks]
        self.upper, self.fore, self.fist, self.elbows, self.rest = [], [], [], [], []
        for (sh, hd), m in zip(self.arms, self.arm_masks):
            _, tt = seg_dist(xx, yy, sh, hd)
            el = (sh[0] + (hd[0] - sh[0]) * TE, sh[1] + (hd[1] - sh[1]) * TE)
            self.upper.append(part(m & (tt < TE + 0.07)))
            self.fore.append(part(m & (tt >= TE - 0.03)))
            self.fist.append(part(m & (np.hypot(xx - hd[0], yy - hd[1]) < FIST * s)))
            self.elbows.append(el)
            self.rest.append((math.degrees(math.atan2(el[1] - sh[1], el[0] - sh[0])), math.degrees(math.atan2(hd[1] - el[1], hd[0] - el[0]))))
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
# Arms are posed by absolute direction (screen degrees: 0 forward/right, 90 down, 180 back/left, -90 up)
# of the upper arm and the forearm, in the side view facing right; front/back views mirror as needed.
class Pose:
    def __init__(self):
        self.body = (0.0, 0.0, 0.0)            # (angle about the hips, dx, dy) in output px
        self.arms = [None, None]               # per arm: (upper dir, forearm dir) or None = rest (+ swing)
        self.swing = [0.0, 0.0]                # small rotation added to a resting arm
        self.legs = [(0.0, 0.0), (0.0, 0.0)]   # (angle, lift) per leg
        self.wpn = None                        # weapon direction
        self.draw = 0.0
        self.lie = 0.0
        self.kneel = 0.0


def weapon_arm(d):
    return 0 if d in (DOWN, RIGHT) else 1  # front: viewer-left; back: viewer-right; side: near


def mir(a):
    return None if a is None else 180 - a


# side view keyframes (facing right). front view uses FRONT tables; back view mirrors the front.
SLASH_SIDE = [(80, 50, -35), (-115, 175, 115), (-95, -165, 160), (-15, 5, 10), (40, 60, 75), (70, 55, 35)]
SLASH_FRONT = [(115, 95, -105), (-125, -60, -15), (-100, -35, -45), (165, 155, 155), (135, 120, 115), (118, 100, 95)]
REST_WPN = {"sword": {RIGHT: 35, DOWN: 105, UPD: 75}, "bow": {RIGHT: -90, DOWN: -90, UPD: -90}, "staff": {RIGHT: -95, DOWN: -92, UPD: -88}}


def pose_for(anim, d, i, kind):
    p = Pose()
    side = d == RIGHT
    wa = 0 if side else weapon_arm(d)
    front = d == DOWN
    back = d == UPD
    fix = (lambda a: a) if not back else mir  # back view = mirrored front table on the other arm
    if anim == "walk":
        ph = (i - 1) / 8 * 2 * math.pi if i else 0.0
        sn = math.sin(ph) if i else 0.0
        p.body = (0, 0, -abs(sn) * 2.2 if i else 0)
        if side:
            p.legs = [(22 * sn, 0), (-22 * sn, 0)]
            p.swing = [-14 * sn, 0]
        else:
            p.legs = [(0, max(0, sn) * 4), (0, max(0, -sn) * 4)]
            p.swing = [4 * sn, 4 * sn]
            p.body = (1.5 * sn, 0, p.body[2])
        p.wpn = REST_WPN[kind][d] + (-6 * sn if kind == "sword" else 0)
        return p
    if anim == "slash":
        if side:
            u, f, w = SLASH_SIDE[i]
            p.body = ([2, 6, 7, -5, -8, -4][i], [0, -1, -2, 3, 4, 2][i], 0)
            p.legs = [([0, 0, -6, 12, 16, 12][i], 0), ([0, 0, 4, -10, -14, -10][i], 0)]
        else:
            u, f, w = SLASH_FRONT[i]
            u, f, w = fix(u), fix(f), fix(w)
            p.body = ([0, 2, 3, -3, -4, -2][i] * (1 if front else -1), 0, 0)
        p.arms[wa] = (u, f)
        p.wpn = w
        return p
    if anim == "thrust":
        k = [0, 0.2, 0.45, 0.6, 0.9, 1.0, 0.7, 0.3][i]
        if side:
            p.arms[0] = (90 - 80 * k, 60 - 70 * k)
            p.wpn = -92 + 30 * k
            p.body = (-4 * k, 2 * k, 0)
        else:
            u, f = 118 + 40 * k, 100 + 70 * k  # viewer-left arm lifts out to the side
            p.arms[wa] = (fix(u), fix(f))
            p.wpn = fix(-95 - 8 * k)
            p.body = (0, 0, -2 * k)
        return p
    if anim == "spellcast":
        k = [0, 0.35, 0.7, 1, 1, 1, 0.4][i]
        if side:
            p.arms[0] = (90 - 150 * k, 60 - 145 * k)
        else:
            p.arms = [(118 + 95 * k, 110 + 110 * k), (62 - 95 * k, 70 - 110 * k)]
        p.wpn = REST_WPN[kind][d]
        p.body = (0, 0, -2 * k)
        return p
    if anim == "shoot":
        k = [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 1, 1, 0.2, 0.1, 0, 0][i]
        up = min(1, i / 3) if i < 11 else 0.4
        if side:
            p.arms[0] = (90 - 88 * up, 60 - 60 * up)
            p.body = (-2 * up, 0, 0)
        else:
            p.arms[wa] = (fix(118 + 40 * up), fix(100 + 55 * up))
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
        """returns (body Image FSxFS, fist Image FSxFS, meta list)"""
        dd = RIGHT if d == LEFT else d
        v = self.views[{DOWN: "front", UPD: "back", RIGHT: "side"}[dd]]
        p = pose_for(anim, dd, i, self.kind)
        CW = FS * WK
        canvas = Image.new("RGBA", (CW, CW))
        fistc = Image.new("RGBA", (CW, CW))
        ox = FEET[0] * WK - v.cx
        oy = FEET[1] * WK - v.feet_y
        k = p.kneel
        bang, bdx, bdy = p.body
        bdx *= WK; bdy = (bdy + k * 10) * WK
        hipc = ((v.hips[0][0] + v.hips[-1][0]) / 2, v.hips[0][1])

        def place(c, img):
            c.alpha_composite(img, (int(round(ox)), int(round(oy))))

        for li in (0, 1):
            ang, lift = p.legs[li]
            img = v.leg_imgs[li]
            if k > 0:
                img = rot_about(img, v.hips[li], 0, 0, -k * 26 * WK)
            img = rot_about(img, v.hips[li], ang, 0, -lift * WK)
            if dd == RIGHT and li == 0:
                arr = np.asarray(img).astype(np.float32); arr[:, :, :3] *= 0.82; img = Image.fromarray(arr.astype(np.uint8))
            place(canvas, img)
        layer = Image.new("RGBA", (v.W, v.H))
        fl = Image.new("RGBA", (v.W, v.H))
        layer.alpha_composite(v.body)
        hands = []
        wa = 0 if dd == RIGHT else weapon_arm(dd)
        for ai in range(len(v.arms)):
            sh, hd = v.arms[ai]
            el = v.elbows[ai]
            ru, rf = v.rest[ai]
            if p.arms[ai] is None:
                du = df = p.swing[ai]
            else:
                du = p.arms[ai][0] - ru
                df = p.arms[ai][1] - rf
            # upper arm about the shoulder; forearm about the (moved) elbow
            up = rot_about(v.upper[ai], sh, du)
            el2 = rot_pt(el, sh, du)
            fo = rot_about(v.fore[ai], el, df, el2[0] - el[0], el2[1] - el[1])
            fi = rot_about(v.fist[ai], el, df, el2[0] - el[0], el2[1] - el[1])
            hand = rot_pt(hd, el, df, el2[0] - el[0], el2[1] - el[1])
            layer.alpha_composite(up); layer.alpha_composite(fo)
            if ai == wa:
                fl.alpha_composite(fi)
            hands.append(hand)
        layer = rot_about(layer, hipc, bang, bdx, bdy)
        fl = rot_about(fl, hipc, bang, bdx, bdy)
        hands = [rot_pt(h, hipc, bang, bdx, bdy) for h in hands]
        place(canvas, layer); place(fistc, fl)
        hx, hy = hands[wa if wa < len(hands) else 0]
        hx, hy = (hx + ox) / WK, (hy + oy) / WK
        ang = p.wpn + bang
        img = canvas
        if p.lie > 0:
            # lying body is centred back over the feet so it stays inside the frame
            img = rot_about(img, (FEET[0] * WK, FEET[1] * WK), 88 * p.lie, -46 * WK * p.lie, -16 * WK * p.lie)
            fistc = rot_about(fistc, (FEET[0] * WK, FEET[1] * WK), 88 * p.lie, -46 * WK * p.lie, -16 * WK * p.lie)
            hx, hy = rot_pt((hx, hy), FEET, 88 * p.lie, -46 * p.lie, -16 * p.lie)
            ang = ang + 88 * p.lie
        out = img.resize((FS, FS), Image.LANCZOS)
        fout = fistc.resize((FS, FS), Image.LANCZOS)
        meta = [round(hx, 1), round(hy, 1), round(ang, 1), 0 if dd == UPD else 1, round(p.draw, 2)]
        if d == LEFT:
            out = out.transpose(Image.FLIP_LEFT_RIGHT); fout = fout.transpose(Image.FLIP_LEFT_RIGHT)
            meta[0] = round(FS - meta[0], 1)
            meta[2] = round(180 - meta[2], 1)
        return out, fout, meta

    def sheet(self):
        im = Image.new("RGBA", (13 * FS, 21 * FS))
        fim = Image.new("RGBA", (13 * FS, 21 * FS))
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
                f, ff, m = self.frame(anim, d, i)
                im.alpha_composite(f, (i * FS, r * FS)); fim.alpha_composite(ff, (i * FS, r * FS))
                mr.append(m)
            meta.append(mr)
        return im, fim, meta


def build_all():
    out = {}
    for cls in RIG:
        rig = Rig(cls)
        im, fim, meta = rig.sheet()
        im.save(os.path.join(ROOT, f"assets/sprites/r_{cls}.png"), optimize=True)
        fim.save(os.path.join(ROOT, f"assets/sprites/r_{cls}_fist.png"), optimize=True)
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
            f, ff, m = rig.frame(anim, d, idx)
            f.alpha_composite(ff)
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
