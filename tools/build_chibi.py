#!/usr/bin/env python3
"""Generate the game's chibi pixel-art ("2.5D 도트") character sheets and weapon atlases.

Usage:
  python3 tools/build_chibi.py            # writes assets/sprites/*.png, assets/weapons/*.png and both meta.js files
  python3 tools/build_chibi.py --preview out.png

Characters are drawn procedurally at native pixel resolution (32px frames, feet at y=28) with
big heads, 3-tone shading and a dark outline, then upscaled 2x into the 64px frame layout the
game already uses (the LPC row layout below), so every existing draw path keeps working:

  rows 0-3 spellcast (7)   4-7 thrust (8)   8-11 walk (9)   12-15 slash (6)   16-19 shoot (13)   20 hurt (6)
  directions per group: up, left, down, right

Weapon looks are drawn the same way into 192px cells (96 native) around the body frame, split into
a layer behind the body (_bg) and in front (_fg), plus meta with the weapon centre and tip per cell.
"""
import json
import math
import os
import sys

import numpy as np
from PIL import Image

N = 32            # native frame size
UP = 2            # upscale factor into the 64px sheet
FX, FY = 16, 28   # feet position inside a native frame
ROWS = [7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 6, 6, 6, 6, 13, 13, 13, 13, 6]
ANIM_ROW = {"spellcast": 0, "thrust": 4, "walk": 8, "slash": 12, "shoot": 16}
UPD, LEFT, DOWN, RIGHT = 0, 1, 2, 3
OUTLINE = (34, 22, 30)
LIE_C = (12, 19)  # rotation centre that lays a body down inside its frame


# ---------------------------------------------------------------- colour helpers
def hexc(h):
    h = h.lstrip("#")
    return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))


def mix(a, b, k):
    return tuple(int(round(a[i] + (b[i] - a[i]) * k)) for i in range(3))


def ramp(h):
    """hi, light, base, shade, dark"""
    c = hexc(h) if isinstance(h, str) else h
    return (mix(c, (255, 255, 240), 0.45), mix(c, (255, 250, 235), 0.2), c, mix(c, (20, 10, 40), 0.25), mix(c, (15, 5, 30), 0.5))


# ---------------------------------------------------------------- canvas
class Cv:
    def __init__(self, w=N, h=N):
        self.w, self.h = w, h
        self.a = np.zeros((h, w, 4), np.uint8)

    def px(self, x, y, c, a=255):
        x, y = int(round(x)), int(round(y))
        if 0 <= x < self.w and 0 <= y < self.h and c is not None:
            self.a[y, x, :3] = c
            self.a[y, x, 3] = a

    def get(self, x, y):
        if 0 <= x < self.w and 0 <= y < self.h:
            return self.a[y, x]
        return None

    def rect(self, x0, y0, x1, y1, c):
        for y in range(int(y0), int(y1) + 1):
            for x in range(int(x0), int(x1) + 1):
                self.px(x, y, c)

    def shaded_rect(self, x0, y0, x1, y1, r, top=1, bot=1, left=0, right=1):
        """fill with base, light top rows, shaded bottom/right"""
        for y in range(int(y0), int(y1) + 1):
            for x in range(int(x0), int(x1) + 1):
                c = r[2]
                if y < y0 + top:
                    c = r[1]
                if x >= x1 - right + 1:
                    c = r[3]
                if y > y1 - bot:
                    c = r[3]
                if left and x < x0 + left:
                    c = r[1]
                self.px(x, y, c)

    def ellipse(self, cx, cy, rx, ry, r, shade=True):
        for y in range(int(math.floor(cy - ry)), int(math.ceil(cy + ry)) + 1):
            for x in range(int(math.floor(cx - rx)), int(math.ceil(cx + rx)) + 1):
                dx, dy = (x - cx) / (rx + 0.35), (y - cy) / (ry + 0.35)
                d = dx * dx + dy * dy
                if d <= 1.0:
                    if not shade:
                        c = r if isinstance(r[0], int) else r[2]
                    else:
                        c = r[2]
                        if dy < -0.45 and dx < 0.4:
                            c = r[1]
                        if dy > 0.5 or dx > 0.7:
                            c = r[3]
                    self.px(x, y, c)

    def line(self, x0, y0, x1, y1, c, w=1):
        n = int(max(abs(x1 - x0), abs(y1 - y0)) * 2) + 1
        for i in range(n + 1):
            t = i / n
            x, y = x0 + (x1 - x0) * t, y0 + (y1 - y0) * t
            if w <= 1:
                self.px(x, y, c)
            else:
                for oy in range(w):
                    for ox in range(w):
                        self.px(x - (w - 1) / 2 + ox, y - (w - 1) / 2 + oy, c)

    def poly(self, pts, c):
        ys = [p[1] for p in pts]
        for y in range(int(min(ys)), int(max(ys)) + 1):
            xs = []
            n = len(pts)
            for i in range(n):
                (x0, y0), (x1, y1) = pts[i], pts[(i + 1) % n]
                if (y0 <= y + 0.5 < y1) or (y1 <= y + 0.5 < y0):
                    xs.append(x0 + (y + 0.5 - y0) * (x1 - x0) / (y1 - y0))
            xs.sort()
            for i in range(0, len(xs) - 1, 2):
                for x in range(int(math.ceil(xs[i] - 0.5)), int(math.floor(xs[i + 1] - 0.5)) + 1):
                    self.px(x, y, c)

    def paste(self, o, dx=0, dy=0):
        for y in range(o.h):
            for x in range(o.w):
                if o.a[y, x, 3]:
                    self.px(x + dx, y + dy, tuple(o.a[y, x, :3]))

    def outline(self, col=OUTLINE, soft=True):
        a = self.a
        solid = a[:, :, 3] > 0
        out = np.zeros_like(solid)
        out[1:, :] |= solid[:-1, :]
        out[:-1, :] |= solid[1:, :]
        out[:, 1:] |= solid[:, :-1]
        out[:, :-1] |= solid[:, 1:]
        out &= ~solid
        ys, xs = np.nonzero(out)
        for y, x in zip(ys, xs):
            c = col
            if soft:  # tint the outline toward the neighbour so it reads as dark shading, not a black line
                for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                    if 0 <= ny < self.h and 0 <= nx < self.w and solid[ny, nx]:
                        c = mix(tuple(int(v) for v in a[ny, nx, :3]), col, 0.78)
                        break
            a[y, x, :3] = c
            a[y, x, 3] = 255

    def flip(self):
        o = Cv(self.w, self.h)
        o.a = self.a[:, ::-1].copy()
        return o

    def rot90(self, cx, cy):
        """lie the sprite down: rotate 90deg clockwise about (cx, cy)"""
        o = Cv(self.w, self.h)
        for y in range(self.h):
            for x in range(self.w):
                if self.a[y, x, 3]:
                    nx, ny = cx + (cy - y), cy - (cx - x)
                    o.px(nx, ny, tuple(self.a[y, x, :3]))
        return o

    def img(self, scale=UP):
        im = Image.fromarray(self.a, "RGBA")
        return im.resize((self.w * scale, self.h * scale), Image.NEAREST)


# ---------------------------------------------------------------- poses
class Pose:
    def __init__(self, **k):
        self.by = 0          # body bob (y)
        self.lx = 0          # torso lean (x)
        self.legs = (0, 0)   # front/back: lift of (left, right) leg; side: see side_legs
        self.side_legs = ((0, 0), (0, 0))  # side view: (x offset, lift) for far, near leg
        self.hn = (-6, -7)   # near / right-hand position rel. to feet
        self.hf = (6, -7)    # far / left-hand position
        self.kneel = 0       # 0 standing .. 3 knees on the ground
        self.lie = False
        self.wpn = None      # (angle deg, hand 'n'|'f', flags)
        self.draw = 0.0      # bow draw amount 0..1
        self.arrow = False
        self.cast = 0.0      # spell glow in hands
        self.__dict__.update(k)


def walk_pose(d, i):
    """i = 0 standing, 1..8 walk cycle"""
    p = Pose()
    if i == 0:
        ph = 0.0
    else:
        ph = (i - 1) / 8 * 2 * math.pi
    s = math.sin(ph) if i else 0
    p.by = -1 if i in (2, 3, 6, 7) else 0
    if d in (DOWN, UPD):
        p.legs = (1 if i in (1, 2, 3) else 0, 1 if i in (5, 6, 7) else 0)
        sw = round(s * 1)
        p.hn, p.hf = (-6, -7 - sw), (6, -7 + sw)
    else:
        f = round(math.sin(ph) * 2.2)
        p.side_legs = ((-f, 1 if (i and math.cos(ph) < -0.3) else 0), (f, 1 if (i and math.cos(ph) > 0.3) else 0))
        p.hn, p.hf = (-f - 1, -7), (f + 1, -8)
    return p


def std_weapon_rest(kind, d):
    if kind == "bow":
        return {UPD: (-90, "n"), DOWN: (-90, "n"), LEFT: (-90, "n")}[d]
    if kind == "staff":
        return {UPD: (-95, "n"), DOWN: (-95, "n"), LEFT: (-100, "n")}[d]
    return {UPD: (-70, "n"), DOWN: (-110, "n"), LEFT: (-125, "n")}[d]


def pose_for(anim, d, i, kind):
    """kind = weapon kind held ('sword', 'bow', 'staff', 'claw', ...) for weapon angles"""
    if anim == "walk":
        p = walk_pose(d, i)
        p.wpn = std_weapon_rest(kind, d)
        return p
    p = Pose()
    if anim == "slash":  # 6 frames, hit on 3
        if d == LEFT:
            hand = [(-3, -9), (1, -15), (0, -17), (-6, -13), (-7, -9), (-6, -8)][i]
            ang = [-110, -45, -80, -165, 160, 130][i]
            p.lx = [0, 1, 1, -1, -1, 0][i]
            p.side_legs = ((1, 0), (-2, 0)) if i >= 3 else ((0, 0), (0, 0))
        elif d == DOWN:
            hand = [(-6, -8), (-7, -15), (-5, -17), (0, -10), (4, -7), (5, -7)][i]
            ang = [-110, -135, -80, 20, 70, 95][i]
        else:
            hand = [(6, -8), (7, -15), (5, -17), (0, -12), (-4, -9), (-5, -8)][i]
            ang = [-70, -45, -100, -160, -200, -215][i]
        p.hn = hand
        p.wpn = (ang, "n")
        p.by = [0, -1, -1, 0, 1, 0][i]
        return p
    if anim == "thrust":  # 8 frames, hit on 5
        k = [0, 0.2, 0.45, 0.6, 0.9, 1.0, 0.7, 0.3][i]
        pull = [0, 1, 2, 2, 0, 0, 0, 0][i]
        if d == LEFT:
            p.hn = (-4 - round(k * 5) + pull, -9 - round(k * 3))
            p.hf = (-1 - round(k * 3), -9)
            p.wpn = (-100 - k * 35, "n")
            p.lx = -round(k * 1.5)
            p.side_legs = ((1, 0), (-2, 0)) if k > 0.5 else ((0, 0), (0, 0))
        elif d == DOWN:
            p.hn = (-5 + round(k * 2), -8 - round(k * 7))
            p.hf = (5 - round(k * 2), -8 - round(k * 3))
            p.wpn = (-95 + k * 10, "n")
        else:
            p.hn = (5 - round(k * 2), -8 - round(k * 7))
            p.hf = (-5 + round(k * 2), -8 - round(k * 3))
            p.wpn = (-85 - k * 10, "n")
        p.cast = k if i >= 3 else 0
        p.by = -1 if k > 0.8 else 0
        return p
    if anim == "spellcast":  # 7 frames, hit on 5
        k = [0, 0.35, 0.7, 1, 1, 1, 0.4][i]
        if d == LEFT:
            p.hn, p.hf = (-5 - round(k * 2), -8 - round(k * 9)), (-2 - round(k * 1), -8 - round(k * 8))
        else:
            sx = 1 if d == DOWN else -1
            p.hn, p.hf = (-6 * sx - round(k * 1) * sx, -8 - round(k * 10)), (6 * sx + round(k * 1) * sx, -8 - round(k * 10))
        p.wpn = std_weapon_rest(kind, d)
        p.cast = k
        p.by = -1 if 2 <= i <= 5 else 0
        return p
    if anim == "shoot":  # 13 frames, release on 9
        k = [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 1, 1, 0.2, 0.1, 0, 0][i]
        if d == LEFT:
            p.hn = (-8, -11)          # bow hand extended forward
            p.hf = (-7 + round(k * 6), -11)  # string hand pulls back
            p.wpn = (-90, "n")
            p.side_legs = ((2, 0), (-2, 0))
        elif d == DOWN:
            p.hn = (-4, -11)
            p.hf = (2, -11 + round(k * 1))
            p.wpn = (-90, "n")
        else:
            p.hn = (4, -11)
            p.hf = (-2, -11 + round(k * 1))
            p.wpn = (-90, "n")
        p.draw = k if i < 9 else 0
        p.arrow = 2 <= i <= 8
        return p
    raise ValueError(anim)


def hurt_pose(i):
    p = Pose()
    p.kneel = [0, 1, 2, 3, 3, 3][i]
    p.by = [0, 1, 2, 3, 3, 3][i]
    p.lie = i >= 4
    p.hn, p.hf = (-6, -6 + p.by), (6, -6 + p.by)
    p.wpn = (-150 if i < 4 else -60, "n")
    return p


# ---------------------------------------------------------------- character renderer
HEAD_ROWS = [(2, 10), (1, 11), (0, 12), (0, 12), (0, 12), (0, 12), (0, 12), (0, 12), (0, 12), (1, 11), (2, 10)]
EYE_W = (255, 255, 255)


class Char:
    """design dict -> frames. All coordinates relative to the feet; the head box is 13x11."""

    def __init__(self, D):
        self.D = D
        self.skin = ramp(D.get("skin", "#f4cda4"))
        self.hair = ramp(D.get("hair", "#2e2230"))
        self.top = ramp(D.get("top", "#e8e0cc"))
        self.bot = ramp(D.get("bottom", D.get("top", "#e8e0cc")))
        self.trim = ramp(D.get("trim", "#c23a3a"))
        self.shoe = ramp(D.get("shoes", "#4a3428"))
        self.hat = ramp(D.get("hatc", "#26222a"))

    # ---- helpers
    def P(self, x, y):
        return FX + x, FY + y

    def headbox(self, p):
        return FX - 6 + p.lx, FY - 23 + p.by

    # ---- legs
    def legs(self, cv, p, d):
        D = self.D
        style = D.get("lower", "pants")
        if p.kneel >= 2:
            # kneeling: shins folded under, only the shoes show behind
            y = FY - 1
            cv.rect(FX - 4, y, FX - 2, y + 1, self.shoe[2]); cv.rect(FX + 2, y, FX + 4, y + 1, self.shoe[2])
            return
        leg = self.bot if style != "bare" else self.skin
        if style == "bones":
            leg = ramp("#ece6d4")
        wrap = ramp(D.get("wrap", "#efe8d8")) if style == "pants" else leg
        if d in (DOWN, UPD):
            for side, lift in ((-1, p.legs[0]), (1, p.legs[1])):
                x0 = FX + (-3 if side < 0 else 1)
                top = FY - 5
                bot = FY - 1 - lift
                w = 1 if style == "bones" else 2
                if style == "bones":
                    x0 += 0 if side < 0 else 1
                cv.rect(x0, top, x0 + w - 1, bot - 1, leg[2])
                cv.px(x0 + w - 1, bot - 1, leg[3])
                if style == "pants":
                    cv.rect(x0, bot - 1, x0 + 1, bot - 1, wrap[2])
                cv.rect(x0 - (1 if side < 0 else 0), bot, x0 + 2 - (1 if side < 0 else 0), bot, self.shoe[2] if style not in ("bones", "bare", "paw") else leg[3])
        else:
            for (ox, lift), shade in zip(p.side_legs, (1, 0)):
                x0 = FX - 1 + ox
                bot = FY - 1 - lift
                c = leg[3] if shade else leg[2]
                w = 1 if style == "bones" else 2
                cv.rect(x0, FY - 5, x0 + w - 1, bot - 1, c)
                if style == "pants":
                    cv.rect(x0, bot - 1, x0 + 1, bot - 1, wrap[3] if shade else wrap[2])
                sc = self.shoe[3] if shade else self.shoe[2]
                if style in ("bones", "bare", "paw"):
                    sc = leg[3]
                cv.rect(x0 - 1, bot, x0 + 1, bot, sc)  # toes point left (facing left)

    # ---- torso
    def torso(self, cv, p, d):
        D = self.D
        st = D.get("body", "jeogori")
        x0, y0 = FX + p.lx, FY + p.by
        top, bot, trim = self.top, self.bot, self.trim
        side = d in (LEFT, RIGHT)
        hw = 3 if side else 4  # half width
        if st == "robe":  # 도포 / long robe flaring to the ankles
            for i, y in enumerate(range(y0 - 13, y0 - 1)):
                w = hw + (i // 4)
                for x in range(x0 - w, x0 + w + 1):
                    c = top[2]
                    if x == x0 + w:
                        c = top[3]
                    if i == 0:
                        c = top[1]
                    cv.px(x, y, c)
            cv.rect(x0 - hw - 2, y0 - 2, x0 + hw + 2, y0 - 2, top[3])
            cv.rect(x0 - hw, y0 - 8, x0 + hw, y0 - 8, trim[2])  # sash
            if d == DOWN:
                cv.line(x0, y0 - 13, x0 - 2, y0 - 10, EYE_W)
                cv.line(x0 + 1, y0 - 13, x0 - 1, y0 - 11, (230, 226, 214))
                cv.px(x0 + 2, y0 - 7, trim[2]); cv.px(x0 + 2, y0 - 6, trim[3])
            return
        if st == "chima":  # short jeogori over a bell skirt
            for i, y in enumerate(range(y0 - 9, y0)):
                w = hw + (i + 1) // 2
                for x in range(x0 - w, x0 + w + 1):
                    c = bot[2] if x < x0 + w else bot[3]
                    if i % 3 == 2 and (x - x0) % 3 == 0:
                        c = bot[3]
                    cv.px(x, y, c)
            cv.rect(x0 - hw - 4, y0 - 1, x0 + hw + 4, y0 - 1, bot[3])
            cv.shaded_rect(x0 - hw, y0 - 13, x0 + hw, y0 - 10, top)
            if d == DOWN:
                cv.line(x0, y0 - 13, x0 - 2, y0 - 11, EYE_W)
                cv.px(x0 + 1, y0 - 11, trim[2]); cv.px(x0 + 1, y0 - 10, trim[2]); cv.px(x0 + 2, y0 - 9, trim[2]); cv.px(x0 + 1, y0 - 8, trim[3])
            return
        # upper body
        tb = y0 - 6 if st in ("jeogori", "fur", "bones", "rags") else y0 - 5
        if st == "bones":
            cv.rect(x0, y0 - 13, x0, tb, (236, 230, 212))
            for y in range(y0 - 12, tb - 1, 2):
                cv.rect(x0 - hw + 1, y, x0 + hw - 1, y, (236, 230, 212) if d != UPD else (200, 194, 176))
            cv.rect(x0 - 2, tb, x0 + 2, tb + 1, (220, 214, 196))
            return
        cv.shaded_rect(x0 - hw, y0 - 13, x0 + hw, tb, top)
        if st == "fur":
            if d == DOWN:
                cv.rect(x0 - 2, y0 - 11, x0 + 2, tb - 1, top[1])
            cv.rect(x0 - hw, tb, x0 + hw, tb + 1, trim[2])  # loincloth
            if d == DOWN:
                cv.rect(x0 - 1, tb + 2, x0 + 1, tb + 3, trim[3])
            return
        if st == "rags":
            for x in range(x0 - hw, x0 + hw + 1, 2):
                cv.px(x, tb + 1, top[3])
            if d == DOWN:
                cv.px(x0 - 2, y0 - 10, top[4]); cv.px(x0 + 1, y0 - 8, top[4])
            return
        if st == "jeogori":
            cv.rect(x0 - hw, tb - 1, x0 + hw, tb, bot[2])  # pants waist under the jacket hem
            cv.rect(x0 - hw, tb - 2, x0 + hw, tb - 2, top[3])
            if d == DOWN:
                cv.line(x0, y0 - 13, x0 - 2, y0 - 11, EYE_W)
                cv.px(x0 + 1, y0 - 10, trim[2]); cv.px(x0 + 2, y0 - 9, trim[2]); cv.px(x0 + 1, y0 - 9, trim[3]); cv.px(x0 + 2, y0 - 8, trim[3])
            return
        if st in ("armor", "leather"):
            metal = ramp(D.get("metal", "#d8b04a"))
            cv.rect(x0 - hw, tb - 1, x0 + hw, tb - 1, self.trim[2])  # belt
            if d != UPD:
                cv.px(x0 + (0 if not side else -1), tb - 1, metal[1])
            if st == "armor":
                for y in range(y0 - 11, tb - 2, 2):
                    for x in range(x0 - hw + 1, x0 + hw, 2):
                        cv.px(x + (y // 2) % 2, y, metal[2])  # 두정갑 studs
                if d == DOWN:
                    cv.rect(x0 - 1, y0 - 13, x0 + 1, y0 - 12, trim[2])
                # skirt panels
                cv.shaded_rect(x0 - hw, tb, x0 + hw, y0 - 4, top, top=0)
                if d == DOWN:
                    cv.rect(x0, tb, x0, y0 - 4, top[4])
            else:
                cv.line(x0 - hw, y0 - 13, x0 + hw, tb - 2, trim[3])  # strap
            return

    # ---- arms (drawn from the shoulder to the hand)
    def arm(self, cv, p, d, which):
        D = self.D
        st = D.get("body", "jeogori")
        near = which == "n"
        hx, hy = p.hn if near else p.hf
        sx = (-4 if near else 4) if d in (DOWN, UPD) else (-1 if near else 2)
        if d == UPD:
            sx = -sx
        sx += FX + p.lx
        sy = FY - 12 + p.by
        ex, ey = FX + hx + p.lx, FY + hy + p.by
        sleeve = self.top if st not in ("fur", "bones", "bare") else self.skin
        if st == "bones":
            sleeve = ramp("#ece6d4")
        if st in ("armor",):
            sleeve = ramp(D.get("sleeve", D.get("top")))
        dark = not near and d in (LEFT, RIGHT)
        w = 3 if st == "robe" else 2
        if st == "bones":
            w = 1
        cv.line(sx, sy, ex, ey - 1, sleeve[3] if dark else sleeve[2], w)
        if st == "robe":  # wide sleeve cuff
            cv.rect(ex - 1, ey - 2, ex + 1, ey - 1, sleeve[3] if dark else sleeve[1])
        if st == "armor":
            metal = ramp(D.get("metal", "#d8b04a"))
            cv.rect(sx - 1, sy - 1, sx + 1, sy, metal[2] if not dark else metal[3])  # pauldron
        hand = self.skin if st != "bones" else ramp("#ece6d4")
        if D.get("claws"):
            cv.px(ex - 1, ey + 1, (240, 236, 220)); cv.px(ex + 1, ey + 1, (240, 236, 220))
        cv.rect(ex - 1 + (1 if w == 1 else 0), ey - 1, ex, ey, hand[3] if dark else hand[2])

    # ---- head, face, hair, hat
    def head(self, cv, p, d):
        D = self.D
        hx, hy = self.headbox(p)
        face = D.get("face", "human")
        sk = self.skin
        if face == "skull":
            sk = ramp("#eee8d6")
        for r, (a, b) in enumerate(HEAD_ROWS):
            for c in range(a, b + 1):
                col = sk[2]
                if r == 10 or (r == 9 and c > 8):
                    col = sk[3]
                if c == b and r > 2:
                    col = sk[3]
                if r <= 1 and c < 7:
                    col = sk[1]
                cv.px(hx + c, hy + r, col)
        getattr(self, "face_" + face)(cv, hx, hy, d, p)
        self.hairdo(cv, hx, hy, d)
        hat = D.get("hat")
        if hat:
            getattr(self, "hat_" + hat)(cv, hx, hy, d)

    def eyes(self, cv, hx, hy, d, iris=(60, 40, 70), y=6, wide=False, blush=True):
        if d == UPD:
            return
        if d == DOWN:
            xs = [3, 8] if not wide else [2, 9]
        else:
            xs = [2]
        for x in xs:
            cv.px(hx + x, hy + y, OUTLINE); cv.px(hx + x + 1, hy + y, OUTLINE)
            cv.px(hx + x, hy + y + 1, EYE_W); cv.px(hx + x + 1, hy + y + 1, iris)
            cv.px(hx + x, hy + y + 2, iris); cv.px(hx + x + 1, hy + y + 2, OUTLINE)
        if blush:
            bl = mix(self.skin[2], (255, 110, 130), 0.45)
            if d == DOWN:
                cv.px(hx + 1, hy + 9, bl); cv.px(hx + 11, hy + 9, bl)
            else:
                cv.px(hx + 3, hy + 9, bl)
        if d == DOWN:
            cv.px(hx + 6, hy + 9, self.skin[4])
        else:
            cv.px(hx + 0, hy + 9, self.skin[3])

    def face_human(self, cv, hx, hy, d, p):
        self.eyes(cv, hx, hy, d, hexc(self.D.get("iris", "#3c2a48")))
        if d in (LEFT, RIGHT):
            cv.px(hx + 8, hy + 6, self.skin[3]); cv.px(hx + 8, hy + 7, self.skin[3])  # ear
        if self.D.get("ears") == "elf":
            if d == DOWN:
                cv.line(hx - 1, hy + 6, hx - 3, hy + 3, self.skin[2]); cv.line(hx + 13, hy + 6, hx + 15, hy + 3, self.skin[2])
            elif d == UPD:
                cv.line(hx - 1, hy + 6, hx - 3, hy + 3, self.skin[3]); cv.line(hx + 13, hy + 6, hx + 15, hy + 3, self.skin[3])
            else:
                cv.line(hx + 8, hy + 6, hx + 11, hy + 3, self.skin[2])
        if self.D.get("beard"):
            b = ramp(self.D["beard"])
            if d == DOWN:
                cv.poly([(hx + 2, hy + 9), (hx + 11, hy + 9), (hx + 8, hy + 15), (hx + 5, hy + 15)], b[2])
                cv.px(hx + 6, hy + 9, OUTLINE)
            elif d != UPD:
                cv.poly([(hx - 1, hy + 9), (hx + 5, hy + 9), (hx + 3, hy + 15), (hx + 0, hy + 14)], b[2])
        if self.D.get("fangs") and d != UPD:
            x = hx + (6 if d == DOWN else 1)
            cv.px(x - 1, hy + 10, EYE_W); cv.px(x + 1, hy + 10, EYE_W)
        if self.D.get("stitch") and d == DOWN:
            cv.line(hx + 9, hy + 2, hx + 11, hy + 4, self.skin[4]); cv.px(hx + 10, hy + 2, self.skin[4]); cv.px(hx + 11, hy + 3, self.skin[4])

    def face_goblin(self, cv, hx, hy, d, p):
        sk = self.skin
        if d in (DOWN, UPD):
            for s, x in ((-1, hx - 1), (1, hx + 13)):
                cv.poly([(x, hy + 4), (x + s * 5, hy + 2), (x + s * 5, hy + 3), (x, hy + 8)], sk[2] if d == DOWN else sk[3])
        else:
            cv.poly([(hx + 8, hy + 4), (hx + 14, hy + 1), (hx + 13, hy + 3), (hx + 9, hy + 8)], sk[2])
        self.eyes(cv, hx, hy, d, (230, 200, 40), blush=False)
        if d == DOWN:
            cv.rect(hx + 5, hy + 7, hx + 7, hy + 8, sk[3])  # nose
            cv.rect(hx + 4, hy + 10, hx + 8, hy + 10, OUTLINE); cv.px(hx + 5, hy + 10, EYE_W); cv.px(hx + 7, hy + 10, EYE_W)
        elif d != UPD:
            cv.rect(hx - 2, hy + 7, hx, hy + 8, sk[2]); cv.rect(hx, hy + 10, hx + 2, hy + 10, OUTLINE)

    def face_orc(self, cv, hx, hy, d, p):
        sk = self.skin
        self.eyes(cv, hx, hy, d, (220, 60, 40), blush=False)
        if d == DOWN:
            cv.rect(hx + 2, hy + 5, hx + 5, hy + 5, sk[4]); cv.rect(hx + 7, hy + 5, hx + 10, hy + 5, sk[4])  # brows
            cv.rect(hx + 3, hy + 10, hx + 9, hy + 10, sk[4])
            cv.rect(hx + 3, hy + 8, hx + 3, hy + 9, EYE_W); cv.rect(hx + 9, hy + 8, hx + 9, hy + 9, EYE_W)
            for s, x in ((-1, hx), (1, hx + 12)):
                cv.px(x + s, hy + 4, sk[2]); cv.px(x + 2 * s, hy + 3, sk[2])
        elif d != UPD:
            cv.rect(hx + 1, hy + 5, hx + 4, hy + 5, sk[4]); cv.rect(hx - 1, hy + 10, hx + 3, hy + 10, sk[4])
            cv.rect(hx + 1, hy + 8, hx + 1, hy + 9, EYE_W); cv.px(hx - 1, hy + 7, sk[3])
            cv.px(hx + 9, hy + 4, sk[2]); cv.px(hx + 10, hy + 3, sk[2])

    def face_troll(self, cv, hx, hy, d, p):
        sk = self.skin
        self.eyes(cv, hx, hy, d, (250, 220, 90), blush=False)
        if d == DOWN:
            cv.rect(hx + 5, hy + 7, hx + 7, hy + 9, sk[3]); cv.px(hx + 6, hy + 9, sk[4])
            cv.rect(hx + 3, hy + 10, hx + 9, hy + 10, sk[4]); cv.px(hx + 4, hy + 9, EYE_W); cv.px(hx + 8, hy + 9, EYE_W)
        elif d != UPD:
            cv.rect(hx - 2, hy + 7, hx, hy + 9, sk[3]); cv.rect(hx, hy + 10, hx + 3, hy + 10, sk[4]); cv.px(hx + 1, hy + 9, EYE_W)
            cv.px(hx + 9, hy + 5, sk[3]); cv.px(hx + 10, hy + 4, sk[3])

    def snout(self, cv, hx, hy, d, col, nose, long=3, tall=4, y=6):
        if d == DOWN:
            cv.shaded_rect(hx + 4, hy + y, hx + 8, hy + y + tall - 1, col)
            cv.rect(hx + 5, hy + y, hx + 7, hy + y, nose)
        elif d != UPD:
            cv.shaded_rect(hx - long, hy + y, hx + 2, hy + y + tall - 1, col)
            cv.px(hx - long, hy + y, nose); cv.px(hx - long, hy + y + 1, nose)
            cv.rect(hx - long + 1, hy + y + tall - 1, hx + 1, hy + y + tall - 1, col[4])

    def face_wolf(self, cv, hx, hy, d, p):
        sk = self.skin
        for x in ((1, 9) if d in (DOWN, UPD) else (5,)):
            cv.poly([(hx + x, hy + 2), (hx + x + 1, hy - 3), (hx + x + 3, hy + 2)], sk[2] if d != UPD else sk[3])
            if d == DOWN:
                cv.px(hx + x + 1, hy, (220, 150, 160))
        self.eyes(cv, hx, hy, d, (240, 200, 40), y=4, blush=False)
        self.snout(cv, hx, hy, d, ramp(mix(sk[2], (240, 236, 226), 0.55)), OUTLINE, long=4, tall=4, y=7)
        if d == DOWN:
            cv.px(hx + 5, hy + 10, EYE_W); cv.px(hx + 7, hy + 10, EYE_W)

    def face_boar(self, cv, hx, hy, d, p):
        sk = self.skin
        for x in ((0, 10) if d in (DOWN, UPD) else (6,)):
            cv.poly([(hx + x, hy + 2), (hx + x + 1, hy - 1), (hx + x + 3, hy + 2)], sk[3])
        self.eyes(cv, hx, hy, d, (40, 20, 20), y=4, blush=False)
        pig = ramp("#e89a98")
        self.snout(cv, hx, hy, d, pig, (120, 50, 60), long=3, tall=3, y=7)
        if d == DOWN:
            cv.px(hx + 5, hy + 8, (120, 50, 60)); cv.px(hx + 7, hy + 8, (120, 50, 60))
            cv.line(hx + 3, hy + 10, hx + 2, hy + 7, EYE_W); cv.line(hx + 9, hy + 10, hx + 10, hy + 7, EYE_W)
        elif d != UPD:
            cv.line(hx - 1, hy + 10, hx - 2, hy + 7, EYE_W)

    def face_bull(self, cv, hx, hy, d, p):
        sk = self.skin
        horn = ramp("#efe4c4")
        if d in (DOWN, UPD):
            for s, x in ((-1, hx + 1), (1, hx + 11)):
                cv.line(x, hy + 2, x + s * 4, hy + 1, horn[2], 2); cv.line(x + s * 5, hy + 1, x + s * 6, hy - 3, horn[1], 2)
        else:
            cv.line(hx + 6, hy + 2, hx + 2, hy - 1, horn[2], 2); cv.line(hx + 1, hy - 1, hx - 1, hy - 4, horn[1], 2)
        self.eyes(cv, hx, hy, d, (200, 30, 30), y=4, blush=False)
        self.snout(cv, hx, hy, d, ramp(mix(sk[2], (230, 200, 170), 0.4)), OUTLINE, long=3, tall=4, y=7)
        gold = (255, 210, 70)
        if d == DOWN:
            cv.px(hx + 6, hy + 11, gold); cv.px(hx + 5, hy + 10, gold); cv.px(hx + 7, hy + 10, gold)
        elif d != UPD:
            cv.px(hx - 3, hy + 10, gold)

    def face_lizard(self, cv, hx, hy, d, p):
        sk = self.skin
        crest = ramp("#f0902a")
        for i in range(3):
            x = (3 + i * 3) if d in (DOWN, UPD) else (5 + i * 2)
            cv.poly([(hx + x, hy + 1), (hx + x + 1, hy - 2 - (i == 1)), (hx + x + 2, hy + 1)], crest[2])
        self.eyes(cv, hx, hy, d, (250, 210, 40), y=4, wide=True, blush=False)
        self.snout(cv, hx, hy, d, ramp(mix(sk[2], (210, 230, 150), 0.3)), sk[4], long=4, tall=3, y=7)
        if d == DOWN:
            cv.rect(hx + 4, hy + 10, hx + 8, hy + 10, sk[4])

    def face_skull(self, cv, hx, hy, d, p):
        if d == UPD:
            return
        if d == DOWN:
            for x in (2, 8):
                cv.rect(hx + x, hy + 5, hx + x + 2, hy + 7, (30, 20, 30)); cv.px(hx + x + 1, hy + 6, (255, 60, 60))
            cv.px(hx + 6, hy + 8, (60, 50, 50))
            for x in range(4, 9):
                cv.px(hx + x, hy + 10, (60, 50, 50) if x % 2 else (240, 236, 220))
        else:
            cv.rect(hx + 1, hy + 5, hx + 3, hy + 7, (30, 20, 30)); cv.px(hx + 2, hy + 6, (255, 60, 60))
            for x in range(0, 4):
                cv.px(hx + x, hy + 10, (60, 50, 50) if x % 2 else (240, 236, 220))

    def hairdo(self, cv, hx, hy, d):
        D = self.D
        st = D.get("hairstyle", "short")
        h = self.hair
        if st == "none":
            return
        long_ = st in ("long", "braid")
        if d == DOWN:
            for r in range(0, 3):
                a, b = HEAD_ROWS[r]
                for c in range(a, b + 1):
                    cv.px(hx + c, hy + r, h[1] if r == 0 else h[2])
            # parted bangs
            for c in (1, 2, 3, 9, 10, 11):
                cv.px(hx + c, hy + 3, h[2])
            cv.px(hx + 2, hy + 4, h[3]); cv.px(hx + 10, hy + 4, h[3])
            cv.px(hx + 6, hy + 2, h[3])
            depth = 12 if long_ else 7
            for r in range(3, depth):
                cv.px(hx + (0 if r < 11 else -1), hy + r, h[2]); cv.px(hx + (12 if r < 11 else 13), hy + r, h[3])
            if st == "spiky":
                for c in range(0, 13, 3):
                    cv.px(hx + c, hy - 1, h[2]); cv.px(hx + c + 1, hy - 2, h[1])
        elif d == UPD:
            for r in range(0, 11):
                a, b = HEAD_ROWS[r]
                for c in range(a, b + 1):
                    cv.px(hx + c, hy + r, h[1] if r < 2 else (h[3] if r > 8 or c == b else h[2]))
            if long_:
                cv.rect(hx + 1, hy + 11, hx + 11, hy + 14, h[2]); cv.rect(hx + 2, hy + 15, hx + 10, hy + 15, h[3])
            if st == "braid":
                cv.rect(hx + 5, hy + 11, hx + 7, hy + 18, h[2]); cv.rect(hx + 5, hy + 19, hx + 7, hy + 20, hexc("#d8323a"))
            if st == "spiky":
                for c in range(0, 13, 3):
                    cv.px(hx + c, hy - 1, h[2]); cv.px(hx + c + 1, hy - 2, h[1])
        else:
            for r in range(0, 3):
                a, b = HEAD_ROWS[r]
                for c in range(a, b + 1):
                    cv.px(hx + c, hy + r, h[1] if r == 0 else h[2])
            for r in range(3, 11 if not long_ else 11):
                for c in range(7 if r < 8 else 8, HEAD_ROWS[r][1] + 1):
                    cv.px(hx + c, hy + r, h[2] if c < 11 else h[3])
            cv.px(hx + 0, hy + 3, h[2]); cv.px(hx + 1, hy + 3, h[2])
            if long_:
                cv.rect(hx + 8, hy + 11, hx + 12, hy + 15, h[2])
            if st == "braid":
                cv.rect(hx + 10, hy + 11, hx + 12, hy + 18, h[2]); cv.rect(hx + 10, hy + 19, hx + 12, hy + 20, hexc("#d8323a"))
            if st == "spiky":
                for c in range(2, 13, 3):
                    cv.px(hx + c, hy - 1, h[2]); cv.px(hx + c + 1, hy - 2, h[1])
        if st == "topknot" and not D.get("hat"):
            cv.rect(hx + 5, hy - 2, hx + 7, hy - 1, h[2]); cv.px(hx + 6, hy - 3, h[1])
        if D.get("pin"):
            pc = ramp(D["pin"])
            if d == DOWN:
                cv.px(hx + 11, hy + 1, pc[1]); cv.px(hx + 12, hy + 2, pc[2]); cv.px(hx + 10, hy + 2, pc[2]); cv.px(hx + 11, hy + 3, pc[3])
            elif d != UPD:
                cv.px(hx + 9, hy + 1, pc[1]); cv.px(hx + 10, hy + 2, pc[2]); cv.px(hx + 8, hy + 2, pc[2])

    # hats ------------------------------------------------------------
    def hat_gat(self, cv, hx, hy, d):
        """갓: wide translucent horsehair brim, tall crown, bead chin strap"""
        k = self.hat
        brim = mix(k[2], (90, 90, 110), 0.25)
        if d in (DOWN, UPD):
            cv.rect(hx - 4, hy + 1, hx + 16, hy + 1, brim); cv.rect(hx - 3, hy + 2, hx + 15, hy + 2, k[3])
            cv.rect(hx - 4, hy + 0, hx + 16, hy + 0, mix(brim, (160, 160, 180), 0.3))
        else:
            cv.rect(hx - 5, hy + 1, hx + 15, hy + 1, brim); cv.rect(hx - 4, hy + 2, hx + 14, hy + 2, k[3])
        cv.shaded_rect(hx + 3, hy - 5, hx + 9, hy - 1, k)
        cv.rect(hx + 3, hy - 1, hx + 9, hy - 1, self.trim[3] if self.D.get("gatband") else k[3])
        if d == DOWN:
            bead = ramp(self.D.get("bead", "#e8c060"))
            for i in range(5):
                cv.px(hx + 0, hy + 3 + i * 2, bead[1 + i % 2]); cv.px(hx + 12, hy + 3 + i * 2, bead[1 + i % 2])
        elif d != UPD:
            bead = ramp(self.D.get("bead", "#e8c060"))
            for i in range(5):
                cv.px(hx + 7, hy + 3 + i * 2, bead[1 + i % 2])

    def hat_paraengi(self, cv, hx, hy, d):
        """패랭이: straw hat with cotton pompoms (보부상)"""
        k = ramp(self.D.get("hatc", "#d8b070"))
        cv.rect(hx - 3, hy + 1, hx + 15, hy + 2, k[2]); cv.rect(hx - 2, hy + 3, hx + 14, hy + 3, k[3])
        for x in range(hx - 3, hx + 16, 2):
            cv.px(x, hy + 2, k[1])
        cv.ellipse(hx + 6, hy - 1, 5, 3, k)
        for x in range(hx + 2, hx + 11, 2):
            cv.px(x, hy - 2, k[3])
        if d == DOWN:
            for x in (hx - 1, hx + 13):
                cv.ellipse(x, hy + 0, 1.5, 1.5, ramp("#fbfaf4"))
        elif d != UPD:
            cv.ellipse(hx + 11, hy + 0, 1.8, 1.8, ramp("#fbfaf4"))

    def hat_jeollip(self, cv, hx, hy, d):
        """전립: black felt hat with red tassel (포졸)"""
        k = self.hat
        cv.rect(hx - 2, hy + 2, hx + 14, hy + 2, k[3]); cv.rect(hx - 1, hy + 1, hx + 13, hy + 1, k[2])
        cv.ellipse(hx + 6, hy - 1, 5, 3.2, k)
        red = ramp("#d8302a")
        cv.rect(hx + 5, hy - 5, hx + 7, hy - 4, red[2]); cv.px(hx + 6, hy - 6, red[1])
        cv.line(hx + 7, hy - 4, hx + 10, hy - 1, red[3])
        if d == DOWN:
            cv.rect(hx + 5, hy - 1, hx + 7, hy, (230, 220, 200))  # badge
            cv.px(hx + 6, hy, OUTLINE)

    def hat_helmet(self, cv, hx, hy, d):
        """투구: steel dome, neck guard and red plume (knight)"""
        m = ramp(self.D.get("metal", "#b8c0cc"))
        cv.ellipse(hx + 6, hy + 2, 7, 4.5, m)
        cv.rect(hx - 1, hy + 3, hx + 13, hy + 4, m[3])
        if d == DOWN:
            cv.rect(hx - 1, hy + 5, hx + 0, hy + 10, m[2]); cv.rect(hx + 12, hy + 5, hx + 13, hy + 10, m[3])
            cv.rect(hx + 5, hy + 3, hx + 7, hy + 5, m[1])  # nasal plate
        elif d == UPD:
            cv.rect(hx - 1, hy + 5, hx + 13, hy + 11, m[3])
            for x in range(hx, hx + 13, 3):
                cv.px(x, hy + 8, m[2])
        else:
            cv.rect(hx + 7, hy + 5, hx + 13, hy + 11, m[3])
            for y in range(hy + 6, hy + 11, 2):
                cv.px(hx + 10, y, m[2])
        plume = ramp(self.D.get("plume", "#d8302a"))
        cv.rect(hx + 6, hy - 4, hx + 6, hy - 2, m[1])
        cv.ellipse(hx + 6 + (2 if d in (LEFT, RIGHT) else 0), hy - 5, 2.5, 1.8, plume)
        cv.line(hx + 7, hy - 5, hx + 11, hy - 2, plume[3])

    def hat_jeonmo(self, cv, hx, hy, d):
        """전모: wide shallow cone hat painted with flowers"""
        k = ramp(self.D.get("hatc", "#7a5ad8"))
        cv.poly([(hx - 5, hy + 3), (hx + 6, hy - 4), (hx + 17, hy + 3)], k[2])
        cv.rect(hx - 5, hy + 3, hx + 17, hy + 3, k[3])
        cv.poly([(hx + 1, hy + 0), (hx + 6, hy - 4), (hx + 11, hy + 0)], k[1])
        for x, c in ((hx + 1, "#ff8ab0"), (hx + 6, "#ffd24a"), (hx + 11, "#ff8ab0")):
            cv.px(x, hy + 1, hexc(c))
        cv.px(hx + 9, hy - 1, hexc("#7ad86a")); cv.px(hx + 3, hy - 1, hexc("#7ad86a"))
        if d == DOWN:
            cv.line(hx - 2, hy + 4, hx - 2, hy + 12, k[3]); cv.line(hx + 14, hy + 4, hx + 14, hy + 12, k[3])

    def hat_hood(self, cv, hx, hy, d):
        k = self.hat
        for r in range(-1, 6):
            a, b = HEAD_ROWS[max(0, r)]
            for c in range(a - 1, b + 2):
                cv.px(hx + c, hy + r, k[1] if r < 1 else k[2])
        if d == DOWN:
            cv.rect(hx - 1, hy + 6, hx, hy + 12, k[2]); cv.rect(hx + 12, hy + 6, hx + 13, hy + 12, k[3])
        elif d == UPD:
            cv.rect(hx - 1, hy + 6, hx + 13, hy + 12, k[3])
        else:
            cv.rect(hx + 7, hy + 6, hx + 13, hy + 12, k[3])

    def hat_crown(self, cv, hx, hy, d):
        g = ramp("#f0c040")
        cv.rect(hx + 2, hy - 1, hx + 10, hy + 0, g[2])
        for x in (2, 6, 10):
            cv.px(hx + x, hy - 2, g[1]); cv.px(hx + x, hy - 3, g[1])
        cv.px(hx + 6, hy - 1, hexc("#e0303a"))

    # ---- extras (cape, tail) drawn behind the body
    def back_extras(self, cv, p, d):
        D = self.D
        x0, y0 = FX + p.lx, FY + p.by
        if D.get("cape"):
            c = ramp(D["cape"])
            lin = ramp(D.get("capein", D["cape"]))
            if d == UPD:
                cv.poly([(x0 - 5, y0 - 13), (x0 + 5, y0 - 13), (x0 + 7, y0 - 1), (x0 - 7, y0 - 1)], c[2])
                cv.rect(x0 - 7, y0 - 1, x0 + 7, y0 - 1, c[3])
            elif d == DOWN:
                cv.poly([(x0 - 5, y0 - 13), (x0 - 7, y0 - 1), (x0 - 4, y0 - 1)], lin[2]); cv.poly([(x0 + 5, y0 - 13), (x0 + 7, y0 - 1), (x0 + 4, y0 - 1)], lin[3])
            else:
                cv.poly([(x0 + 1, y0 - 13), (x0 + 7, y0 - 1), (x0 + 1, y0 - 1)], c[2])
        if D.get("tail"):
            c = ramp(D["tail"])
            if d == UPD:
                cv.line(x0, y0 - 5, x0 + 1, y0 + 0, c[2], 2)
            elif d in (LEFT, RIGHT):
                cv.line(x0 + 3, y0 - 5, x0 + 7, y0 - 2, c[2], 2); cv.px(x0 + 8, y0 - 2, c[3])
        if D.get("quiver") and d in (UPD, LEFT, RIGHT):
            q = ramp("#8a5a30")
            if d == UPD:
                cv.line(x0 + 2, y0 - 13, x0 - 2, y0 - 6, q[2], 2)
                cv.px(x0 + 3, y0 - 14, (240, 240, 230)); cv.px(x0 + 2, y0 - 15, (240, 240, 230))
            else:
                cv.line(x0 + 3, y0 - 13, x0 + 4, y0 - 7, q[3], 2); cv.px(x0 + 3, y0 - 14, (240, 240, 230))

    # ---- frame
    def frame(self, p, d, hand_out=None):
        cv = Cv()
        D = self.D
        self.back_extras(cv, p, d)
        if d in (LEFT, RIGHT):
            self.arm(cv, p, d, "f")
        if d == UPD:
            self.arm(cv, p, d, "n"); self.arm(cv, p, d, "f")
        self.legs(cv, p, d)
        self.torso(cv, p, d)
        if d == DOWN:
            self.arm(cv, p, d, "f")
        self.head(cv, p, d)
        if d in (DOWN, LEFT, RIGHT):
            self.arm(cv, p, d, "n")
        if p.cast > 0.3 and D.get("castc"):
            gc = ramp(D["castc"])
            for h in (p.hn, p.hf):
                x, y = FX + h[0] + p.lx, FY + h[1] + p.by - 1
                cv.px(x, y - 1, gc[0]); cv.px(x - 1, y, gc[1]); cv.px(x + 1, y, gc[1])
        cv.outline()
        if p.lie:
            cv = cv.rot90(LIE_C[0], LIE_C[1])
        return cv


# ---------------------------------------------------------------- weapons
WEAPONS = {
    # knight
    "ks_steel": dict(kind="sword", blade="#dfe6f0", hilt="#6a4a2a", guard="#a8a0a0", len=11),
    "ks_bronze": dict(kind="sword", blade="#e0a860", hilt="#5a3a22", guard="#b07a3a", len=10),
    "ks_saber": dict(kind="sword", blade="#e8eef6", hilt="#2a2a3a", guard="#e0c050", len=11, curve=1),
    "ks_rapier": dict(kind="sword", blade="#d8f0ff", hilt="#3a4a8a", guard="#c0d8f0", len=13, thin=True),
    "ks_mace": dict(kind="mace", blade="#e8d890", hilt="#6a4a2a", len=8),
    "ks_long": dict(kind="sword", blade="#eef2f8", hilt="#2a3a7a", guard="#e8c050", len=14),
    "ks_gold": dict(kind="sword", blade="#ffe070", hilt="#8a2a2a", guard="#fff0a0", len=13),
    "ks_axe": dict(kind="axe", blade="#d8d0d0", hilt="#5a2a1a", len=11, glow="#ff3050"),
    "ks_frost": dict(kind="sword", blade="#a8ecff", hilt="#1a4a7a", guard="#e0f8ff", len=14, glow="#7fd4ff"),
    "ks_flame": dict(kind="sword", blade="#ff8a3a", hilt="#2a1a1a", guard="#ffd060", len=15, glow="#ff6a2a", edge="#fff0a0"),
    # elf
    "eb_medium": dict(kind="bow", wood="#8a5a30", string="#f0ead8"),
    "eb_light": dict(kind="bow", wood="#e8dcc0", string="#f8f4e8"),
    "eb_recurve": dict(kind="bow", wood="#4a8a40", string="#f0ead8", recurve=True),
    "eb_great": dict(kind="bow", wood="#6a4020", string="#f0ead8", big=True),
    "eb_silver": dict(kind="bow", wood="#d8e4f0", string="#a8ecff", recurve=True, glow="#7fd4ff"),
    "eb_gold": dict(kind="bow", wood="#f0c040", string="#fff8d0", recurve=True, glow="#ffe28a"),
    "eb_shadow": dict(kind="bow", wood="#4a3a6a", string="#c8a8ff", big=True, glow="#b07cff"),
    "eb_crimson": dict(kind="bow", wood="#c02a2a", string="#ffd060", recurve=True, big=True, glow="#ff6a2a"),
    # mage
    "ms_purple": dict(kind="staff", wood="#6a4a30", top="orb", gem="#b070ff"),
    "ms_gnarled": dict(kind="staff", wood="#5a4a2a", top="gnarl", gem="#7ad86a"),
    "ms_loop": dict(kind="staff", wood="#8a6a40", top="loop", gem="#ffe070", ring="#e8c050"),
    "ms_serpent": dict(kind="staff", wood="#3a6a3a", top="serpent", gem="#e03030"),
    "ms_earth": dict(kind="staff", wood="#6a5030", top="orb", gem="#5ad07a", big=True),
    "ms_diamond": dict(kind="staff", wood="#e8c050", top="diamond", gem="#a8f0ff"),
    "ms_frost": dict(kind="staff", wood="#a8c8e8", top="orb", gem="#8ae8ff", big=True, glow="#7fd4ff"),
    "ms_inferno": dict(kind="staff", wood="#3a1a1a", top="orb", gem="#ff5a1a", big=True, glow="#ff6a2a", horns=True),
    # monster weapons (baked into their sheets)
    "club": dict(kind="club", wood="#8a5a30", len=8),
    "axe": dict(kind="axe", blade="#b8b0b0", hilt="#5a3a22", len=10),
    "spear": dict(kind="spear", wood="#7a5a3a", blade="#d8dce4", len=15),
    "rusty": dict(kind="sword", blade="#b89a80", hilt="#4a3020", guard="#7a6a5a", len=10),
    "cleaver": dict(kind="cleaver", blade="#c8c4c0", hilt="#3a2418", len=9),
}
CLASS_OF = {"ks": "knight", "eb": "elf", "ms": "mage"}
ATTACK_ANIM = {"knight": "slash", "elf": "shoot", "mage": "thrust"}


def wkind(wid):
    return WEAPONS[wid]["kind"] if wid else None


def draw_weapon(cv, W, gx, gy, ang, d, p, hf=None):
    """draw weapon W with its grip at (gx, gy) pointing along ang (deg). returns (centre, tip)."""
    a = math.radians(ang)
    ux, uy = math.cos(a), math.sin(a)
    nx, ny = -uy, ux
    k = W["kind"]
    at = lambda s, o=0: (gx + ux * s + nx * o, gy + uy * s + ny * o)
    if k in ("sword", "mace", "axe", "club", "cleaver", "spear"):
        hilt = ramp(W.get("hilt", W.get("wood", "#6a4a2a")))
        L = W.get("len", 10)
        if k == "spear":
            wood = ramp(W["wood"])
            cv.line(*at(-6), *at(L), wood[2])
            bl = ramp(W["blade"])
            cv.poly([at(L, -1.5), at(L + 5, 0), at(L, 1.5)], bl[1])
            cv.line(*at(L), *at(L + 4), bl[3])
            cv.line(*at(L - 1, -1), *at(L - 1, 1), hexc("#c0302a"))
            return at(L / 2), at(L + 5)
        if k == "club":
            wood = ramp(W["wood"])
            for s in range(-1, L + 1):
                w = 1 + (s > 3) + (s > 6)
                for o in range(-w // 2 * 1, w - w // 2):
                    cv.px(*at(s, o), wood[2] if o <= 0 else wood[3])
            cv.px(*at(L - 2, -1), wood[1])
            return at(L / 2), at(L)
        cv.line(*at(-2), *at(1), hilt[2])
        cv.px(*at(-3), hilt[3])
        if k == "sword":
            g = ramp(W.get("guard", "#a8a0a0"))
            cv.line(*at(2, -2.5), *at(2, 2.5), g[2])
            bl = ramp(W["blade"])
            curve = W.get("curve", 0)
            for s in range(3, L + 3):
                c = curve * ((s - 3) / L) ** 2 * 2
                cv.px(*at(s, -0.5 + c), bl[1] if not W.get("edge") else hexc(W["edge"]))
                if not W.get("thin"):
                    cv.px(*at(s, 0.5 + c), bl[3])
            cv.px(*at(L + 3, curve * 2), bl[0])
            return at(L / 2 + 3), at(L + 3)
        if k == "mace":
            cv.line(*at(1), *at(L), hilt[2])
            h = ramp(W["blade"])
            cx, cy = at(L + 1.5)
            cv.ellipse(cx, cy, 2.2, 2.2, h)
            for o in (-3, 3):
                cv.px(*at(L + 1.5, o), h[1])
            cv.px(*at(L + 4.5), h[1])
            return at(L / 2), at(L + 3)
        if k in ("axe", "cleaver"):
            cv.line(*at(1), *at(L), hilt[2])
            h = ramp(W["blade"])
            if k == "axe":
                cv.poly([at(L - 4, 0), at(L - 5, 5), at(L + 1, 6), at(L, 0)], h[2])
                cv.line(*at(L - 5, 5), *at(L + 1, 6), h[0])
                cv.poly([at(L - 2, 0), at(L - 2, -2.5), at(L, -2.5), at(L, 0)], h[3])
            else:
                cv.poly([at(L - 6, 0), at(L - 6, 4), at(L + 1, 4), at(L + 1, 0)], h[2])
                cv.line(*at(L - 6, 4), *at(L + 1, 4), h[0])
                cv.px(*at(L - 1, 1.5), h[4])
            return at(L - 2, 2), at(L, 5)
    if k == "bow":
        wood = ramp(W["wood"])
        big = W.get("big")
        hh = 9 if big else 8
        side = 1 if d in (LEFT, RIGHT) else 0.25
        if d == UPD:  # seen from behind: the bow is edge-on, just a thin stave
            cv.line(gx, gy - hh, gx, gy + hh, wood[3]); cv.px(gx, gy - hh, wood[1]); cv.px(gx, gy + hh, wood[1])
            return (gx, gy), (gx, gy - hh)
        # limbs bulge away from the archer (-x when facing left)
        tipT, tipB = (gx + 2 * side, gy - hh), (gx + 2 * side, gy + hh)
        pts = []
        for i in range(-hh, hh + 1):
            t = i / hh
            x = gx - (1 - t * t) * 2 * side
            if W.get("recurve") and abs(t) > 0.75:
                x += (abs(t) - 0.75) * 10 * side
            pts.append((x, gy + i))
        for i, (x, y) in enumerate(pts):
            cv.px(x, y, wood[2] if i % 5 else wood[1])
            cv.px(x - side, y, wood[3])
        sc = hexc(W["string"])
        if hf is not None and p.draw > 0.05:
            cv.line(*tipT, *hf, sc); cv.line(*hf, *tipB, sc)
        else:
            cv.line(*tipT, *tipB, sc)
        cv.rect(gx - 1, gy - 1, gx, gy + 1, ramp("#5a3a22")[2])
        if p.arrow and hf is not None:
            shaft = (220, 200, 150)
            cv.line(hf[0], hf[1], gx - 4 * side - (1 - side) * 0, gy, shaft)
            cv.px(gx - 4 * side - 1, gy, (230, 236, 240)); cv.px(gx - 4 * side - 2, gy, (230, 236, 240))
            cv.px(hf[0] + 1, hf[1] - 1, (240, 80, 80)); cv.px(hf[0] + 1, hf[1] + 1, (240, 80, 80))
        return (gx, gy), (gx - 3 * side, gy)
    if k == "staff":
        wood = ramp(W["wood"])
        top = 13
        cv.line(*at(-7), *at(top), wood[2])
        cv.line(*at(-7, 0.9), *at(top - 1, 0.9), wood[3])
        gem = ramp(W["gem"])
        tx, ty = at(top + 2)
        t = W["top"]
        if t == "orb":
            r = 2.6 if W.get("big") else 2.1
            if W.get("horns"):
                cv.line(*at(top, -2), *at(top + 4, -3.5), ramp("#e8dcc0")[2]); cv.line(*at(top, 2), *at(top + 4, 3.5), ramp("#e8dcc0")[2])
            cv.line(*at(top, -2), *at(top + 1, -2), wood[1]); cv.line(*at(top, 2), *at(top + 1, 2), wood[1])
            cv.ellipse(tx, ty, r, r, gem)
            cv.px(tx - 1, ty - 1, gem[0])
        elif t == "gnarl":
            cv.line(*at(top, 0), *at(top + 3, -2), wood[2]); cv.line(*at(top, 0), *at(top + 2, 2.5), wood[2])
            cv.px(*at(top + 1.5, 0), gem[1]); cv.px(*at(top + 2, 0), gem[2])
            tx, ty = at(top + 2)
        elif t == "loop":
            rg = ramp(W["ring"])
            for i in range(16):
                aa = i / 16 * 2 * math.pi
                cv.px(tx + math.cos(aa) * 3, ty + math.sin(aa) * 3, rg[2] if i % 4 else rg[1])
            cv.px(tx, ty, gem[1])
        elif t == "serpent":
            for i in range(12):
                aa = i / 12 * 2 * math.pi * 1.2
                cv.px(tx + math.cos(aa) * 2.5, ty + math.sin(aa) * 2.5, wood[2 if i % 3 else 1])
            cv.px(tx + 1, ty - 1, gem[1]); cv.px(tx + 2, ty - 1, gem[2])
        elif t == "diamond":
            cv.poly([at(top, 0), at(top + 3, -2.5), at(top + 6, 0), at(top + 3, 2.5)], gem[1])
            cv.px(*at(top + 3, 0), gem[0])
            tx, ty = at(top + 3)
        return at(top / 2), (tx, ty)
    return (gx, gy), (gx, gy)


def weapon_layer(W, p, d, cell=False):
    """returns (bg Cv, fg Cv, centre, tip) for a frame; cell=True draws into a 96px cell (frame at 32,32)"""
    size, off = (96, 32) if cell else (N, 0)
    lay = Cv(size, size)
    if not p.wpn:
        return None, None, None, None
    ang, hand = p.wpn
    h = p.hn if hand == "n" else p.hf
    gx, gy = off + FX + h[0] + p.lx, off + FY + h[1] + p.by - 1
    hf = (off + FX + p.hf[0] + p.lx, off + FY + p.hf[1] + p.by - 1)
    if W["kind"] == "bow" and d == UPD:
        pass
    c, t = draw_weapon(lay, W, gx, gy, ang, d, p, hf)
    if W.get("glow") and W["kind"] != "bow":
        gc = ramp(W["glow"])
        lay.px(t[0], t[1], gc[0])
    lay.outline(soft=False)
    if p.lie:
        cx, cy = off + LIE_C[0], off + LIE_C[1]
        lay = lay.rot90(cx, cy)
        c = (cx + cy - c[1], cy - cx + c[0])
        t = (cx + cy - t[1], cy - cx + t[0])
    behind = d == UPD
    empty = Cv(size, size)
    return (lay, empty, c, t) if behind else (empty, lay, c, t)


# ---------------------------------------------------------------- designs
DESIGNS = {
    # player classes (Korean fantasy)
    "knight": dict(hat="helmet", metal="#c4ccd8", plume="#d8302a", hair="#2a2026", body="armor", top="#2c4a8a", sleeve="#2c4a8a", trim="#b8302a",
                   bottom="#2a2a3a", lower="pants", wrap="#3a3040", shoes="#3a2a22", weapon="ks_steel"),
    "knight_gold": dict(hat="helmet", metal="#ffd460", plume="#ffffff", hair="#3a2a20", body="armor", top="#c89020", sleeve="#c89020", trim="#8a1a2a",
                        bottom="#5a3a20", lower="pants", wrap="#f0e0b0", shoes="#5a3a1a", weapon="ks_gold"),
    "knight_dark": dict(hat="helmet", metal="#6a6478", plume="#8a3adf", hair="#1a1420", body="armor", top="#2a2230", sleeve="#2a2230", trim="#6a2ab0",
                        bottom="#1a1620", lower="pants", wrap="#2a2230", shoes="#1a1418", iris="#c03050", weapon="ks_flame"),
    "elf": dict(hairstyle="long", hair="#6a4a2a", ears="elf", pin="#ff8ab0", body="jeogori", top="#6ac06a", trim="#e05a8a", bottom="#f4ecd8",
                lower="pants", wrap="#f4ecd8", shoes="#5a3a2a", quiver=True, iris="#2a7a4a", weapon="eb_medium"),
    "elf_red": dict(hairstyle="long", hair="#e8d8a8", ears="elf", pin="#ffd24a", body="jeogori", top="#d8404a", trim="#ffd24a", bottom="#3a2a3a",
                    lower="pants", wrap="#3a2a3a", shoes="#3a2020", quiver=True, iris="#a02a2a", weapon="eb_crimson"),
    "mage": dict(hat="gat", hatc="#1c1a24", hair="#1a1418", body="robe", top="#3a5ab8", trim="#e8c060", lower="robe", shoes="#2a2030", castc="#8ad8ff",
                 iris="#2a3a6a", weapon="ms_purple"),
    "mage_white": dict(hat="jeonmo", hatc="#8a6ae0", hairstyle="braid", hair="#2a1e28", body="robe", top="#f0ecf8", trim="#8a6ae0", lower="robe",
                       shoes="#e0d8f0", castc="#fff0a0", iris="#6a4ab0", weapon="ms_diamond"),
    # NPCs
    "npc_guard": dict(hat="jeollip", hatc="#1c1a1e", hair="#1a1418", body="jeogori", top="#2a2a34", trim="#d8302a", bottom="#e8e0cc", wrap="#e8e0cc",
                      shoes="#2a2022", weapon="spear"),
    "npc_merchant": dict(hat="paraengi", hatc="#d8b070", hair="#2a2026", body="jeogori", top="#e4dcc4", trim="#8a6a4a", bottom="#d8cfb4", wrap="#f0ead8",
                         shoes="#6a4a30"),
    "npc_sage": dict(hairstyle="topknot", hair="#eeeeee", beard="#f4f4f0", body="robe", top="#9aa4b8", trim="#3a5ab8", lower="robe", shoes="#3a3440",
                     castc="#b8f0ff", weapon="ms_gnarled"),
    "npc_woman": dict(hairstyle="braid", hair="#2a1e24", pin="#ffd24a", body="chima", top="#ffe070", trim="#d8323a", bottom="#e84a6a", lower="robe",
                      shoes="#fff0f0"),
    # monsters
    "goblin": dict(face="goblin", skin="#7ac04a", hairstyle="none", body="fur", top="#6aa840", trim="#8a5a30", lower="bare", weapon="club", claws=False),
    "wolfman": dict(face="wolf", skin="#8a8a98", hairstyle="none", body="fur", top="#7a7a88", trim="#5a3a2a", lower="bare", claws=True, tail="#6a6a78"),
    "boarman": dict(face="boar", skin="#8a5a3a", hairstyle="spiky", hair="#3a2418", body="leather", top="#7a4a2a", trim="#3a2418", bottom="#5a3a22",
                    lower="pants", wrap="#5a3a22", shoes="#2a1810", weapon="axe"),
    "zombie": dict(face="human", skin="#9ab08a", hairstyle="spiky", hair="#3a3a2a", body="rags", top="#6a6a58", bottom="#4a4a40", lower="pants",
                   wrap="#5a5a48", shoes="#3a3028", iris="#e0e040", stitch=True),
    "skeleton": dict(face="skull", hairstyle="none", body="bones", lower="bones", weapon="rusty"),
    "vampire": dict(face="human", skin="#e8e0e8", hairstyle="short", hair="#1a1420", body="leather", top="#3a1a2a", trim="#a01a2a", bottom="#1a1420",
                    lower="pants", wrap="#1a1420", shoes="#1a1014", iris="#e02030", fangs=True, cape="#1a1020", capein="#b01a2a", hat="crown"),
    "orc": dict(face="orc", skin="#6a9a4a", hairstyle="spiky", hair="#1a1a14", body="leather", top="#5a4a3a", trim="#8a2a1a", bottom="#3a3024",
                lower="pants", wrap="#3a3024", shoes="#2a2018", weapon="cleaver"),
    "lizardman": dict(face="lizard", skin="#4aa070", hairstyle="none", body="leather", top="#8a6a3a", trim="#d8a040", bottom="#4aa070", lower="bare",
                      tail="#4aa070", weapon="spear"),
    "troll": dict(face="troll", skin="#7a8aa8", hairstyle="spiky", hair="#4a5a3a", body="fur", top="#6a7a98", trim="#5a4030", lower="bare", weapon="club"),
    "minotaur": dict(face="bull", skin="#7a4a30", hairstyle="none", body="leather", top="#6a3a24", trim="#c0302a", bottom="#5a3020", lower="bare",
                     weapon="axe", tail="#5a3020"),
}


def preview(path):
    rows = []
    for name, D in DESIGNS.items():
        ch = Char(D)
        cells = []
        for d in (DOWN, LEFT, UPD):
            for i in (0, 2, 4, 6):
                cells.append(ch.frame(walk_pose(d, i), d))
        cells.append(ch.frame(hurt_pose(2), DOWN)); cells.append(ch.frame(hurt_pose(5), DOWN))
        rows.append(cells)
    W = max(len(r) for r in rows)
    im = Image.new("RGBA", (W * N * 3, len(rows) * N * 3), (106, 122, 80, 255))
    for j, r in enumerate(rows):
        for i, c in enumerate(r):
            im.alpha_composite(c.img(3), (i * N * 3, j * N * 3))
    im.save(path)


def mirror(cv):
    """facing right = facing left mirrored, shifted so the feet stay on the same column"""
    o = cv.flip()
    o.a = np.roll(o.a, 1, axis=1)
    o.a[:, 0] = 0
    return o


def frames_for(anim_row):
    """yields (row, anim, dir, count) for the whole sheet"""
    for name, base in (("spellcast", 0), ("thrust", 4), ("walk", 8), ("slash", 12), ("shoot", 16)):
        for k, d in enumerate((UPD, LEFT, DOWN, RIGHT)):
            yield base + k, name, d, ROWS[base + k]
    yield 20, "hurt", DOWN, 6


def pose_at(anim, d, i, kind):
    return hurt_pose(i) if anim == "hurt" else pose_for(anim, d, i, kind)


def build_sheet(name, D):
    ch = Char(D)
    wid = D.get("weapon")
    W = WEAPONS.get(wid) if wid else None
    kind = W["kind"] if W else None
    full = Image.new("RGBA", (13 * 64, 21 * 64))
    bare = Image.new("RGBA", (13 * 64, 21 * 64))
    for row, anim, d, n in frames_for(None):
        for i in range(n):
            dd = LEFT if d == RIGHT else d
            p = pose_at(anim, dd, i, kind)
            body = ch.frame(p, dd)
            comp = Cv()
            if W:
                bg, fg, _, _ = weapon_layer(W, p, dd)
                comp.paste(bg); comp.paste(body); comp.paste(fg)
            else:
                comp = body
            if d == RIGHT:
                body, comp = mirror(body), mirror(comp)
            full.alpha_composite(comp.img(), (i * 64, row * 64))
            bare.alpha_composite(body.img(), (i * 64, row * 64))
    return full, bare


def build_atlas(wid):
    W = WEAPONS[wid]
    cls = CLASS_OF[wid[:2]]
    atk = ATTACK_ANIM[cls]
    kind = W["kind"]
    bgim = Image.new("RGBA", (13 * 192, 9 * 192)); fgim = Image.new("RGBA", (13 * 192, 9 * 192))
    pts = []
    groups = [("walk", d, 9) for d in (UPD, LEFT, DOWN, RIGHT)] + [(atk, d, ROWS[ANIM_ROW[atk]]) for d in (UPD, LEFT, DOWN, RIGHT)] + [("hurt", DOWN, 6)]
    for r, (anim, d, n) in enumerate(groups):
        row = []
        for i in range(13):
            if i >= n:
                row.append(0)
                continue
            dd = LEFT if d == RIGHT else d
            p = pose_at(anim, dd, i, kind)
            bg, fg, c, tp = weapon_layer(W, p, dd, cell=True)
            if d == RIGHT:
                bg, fg = mirror(bg), mirror(fg)
                c, tp = (96 - c[0], c[1]), (96 - tp[0], tp[1])
            bgim.alpha_composite(bg.img(), (i * 192, r * 192)); fgim.alpha_composite(fg.img(), (i * 192, r * 192))
            row.append([round(c[0] * 2 + 1), round(c[1] * 2 + 1), round(tp[0] * 2 + 1), round(tp[1] * 2 + 1)])
        pts.append(row)
    frames = [9, ROWS[ANIM_ROW[atk]], 6]
    return bgim, fgim, {"cls": cls, "frames": frames, "pts": pts}


def build_all(root):
    sp, wp = os.path.join(root, "assets/sprites"), os.path.join(root, "assets/weapons")
    rows = {}
    for name, D in DESIGNS.items():
        full, bare = build_sheet(name, D)
        full.save(os.path.join(sp, name + ".png"), optimize=True)
        bare.save(os.path.join(sp, name + "_nw.png"), optimize=True)
        rows[name] = ROWS; rows[name + "_nw"] = ROWS
        print("sheet", name)
    with open(os.path.join(sp, "meta.js"), "w") as f:
        f.write("// generated by tools/build_chibi.py\nwindow.SPRITE_ROWS = " + json.dumps(rows) + ";\n")
    meta = {}
    for wid in WEAPONS:
        if wid[:2] not in CLASS_OF:
            continue
        bg, fg, m = build_atlas(wid)
        bg.save(os.path.join(wp, wid + "_bg.png"), optimize=True); fg.save(os.path.join(wp, wid + "_fg.png"), optimize=True)
        meta[wid] = m
        print("weapon", wid)
    with open(os.path.join(wp, "meta.js"), "w") as f:
        f.write("// generated by tools/build_chibi.py\nwindow.WEAPON_META = " + json.dumps(meta, separators=(",", ":")) + ";\n")


if __name__ == "__main__":
    if len(sys.argv) > 2 and sys.argv[1] == "--preview":
        preview(sys.argv[2])
    else:
        build_all(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
