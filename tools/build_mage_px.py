#!/usr/bin/env python3
"""Build assets/sprites/mage_px.png: LPC-layout sheet with 96px cells (13 cols x 41 rows) for the mage (도사)
from the idle and walk frames in assets/src/mage_px/<idle|walk>_<dir>_<k>.png (made by extract_mage_px.py).
The radish staff is part of the art (no weapon-look layer, see D.BAKED_WEAPON).
  walk col 0 = idle pose 1, walk col 12 = idle pose 2 (the game alternates them while standing, see IDLE_COL;
  same as pose 1 for the directions in STILL),
  walk cols 1-8 = step, step, pass (idle pose, one pixel up), pass, other step, step, pass, pass,
  spellcast = rise and settle, thrust/slash = lunge, shoot = lean (moved idle poses until those frames exist),
  row 20 = topple.
Rows 0-20 follow LPC (up/left/down/right), rows 21-40 hold the diagonals (up_left, down_left, down_right, up_right)."""
from PIL import Image
import numpy as np
from scipy import ndimage
import os

ROOT = os.path.join(os.path.dirname(__file__), '..')
SRC = os.path.join(ROOT, 'assets', 'src', 'mage_px')
OUT = os.path.join(ROOT, 'assets', 'sprites', 'mage_px.png')
F = 96
H = 60  # character height in the cell (fox mask ears to sandals)
DIRS = ['up', 'left', 'down', 'right']
DIAGS = ['up_left', 'down_left', 'down_right', 'up_right']


def shrink(img):
    """one scale for every frame (source frames are ~400px tall), so steps do not change the size"""
    w, h = img.size
    k = H / 400
    s = img.resize((max(1, round(w * k)), max(1, round(h * k))), Image.LANCZOS)
    a = np.array(s)
    a[:, :, 3] = np.where(a[:, :, 3] > 110, 255, 0)  # crisp pixel edges
    lab, n = ndimage.label(a[:, :, 3] > 0)  # drop specks left from the checkerboard
    if n > 1:
        sizes = ndimage.sum(a[:, :, 3] > 0, lab, range(1, n + 1))
        a[:, :, 3] = np.where(np.isin(lab, 1 + np.nonzero(sizes >= 12)[0]), a[:, :, 3], 0)
    return Image.fromarray(a, 'RGBA')


def body_x(img):
    """x of the body centre: mean x of the kimono pink around the obi (the radish would skew a bbox centre,
    striding legs would skew the lower half)"""
    a = np.array(img).astype(int)
    r, g, b, al = a[:, :, 0], a[:, :, 1], a[:, :, 2], a[:, :, 3]
    pink = (al > 0) & (r > 170) & (r - g > 40) & (b > 90) & (b < r)
    h = img.size[1]
    pink[: int(h * 0.45)] = False
    pink[int(h * 0.72):] = False
    xs = np.nonzero(pink)[1]
    return xs.mean() if len(xs) else img.size[0] / 2


# the two idle poses alternate only where they are close; elsewhere (radish swaps from behind to the front,
# head turns) the switch reads as a jump, so those directions keep one pose and the game's breathing bob
STILL = {'left', 'right', 'up_left', 'up_right', 'down_right'}
idle = {}
for d in DIRS + DIAGS:
    idle[d] = [shrink(Image.open(os.path.join(SRC, f'idle_{d}_{k}.png')).convert('RGBA')) for k in range(2)]
    if d in STILL:
        idle[d][1] = idle[d][0]
walk = {}
for d in DIRS + DIAGS:
    walk[d] = [shrink(Image.open(os.path.join(SRC, f'walk_{d}_{k}.png')).convert('RGBA')) for k in range(2)]
    if d in STILL:  # same reason: the second step pose swaps the radish side
        walk[d][1] = walk[d][0]
sheet = Image.new('RGBA', (13 * F, 41 * F), (0, 0, 0, 0))


def put(row, col, img, dx=0, dy=0):
    """feet 8px above the cell bottom, body centred"""
    x = round(F / 2 - body_x(img)) + dx
    y = F - 8 - img.size[1] + dy
    cell = Image.new('RGBA', (F, F), (0, 0, 0, 0))
    cell.paste(img, (x, y), img)
    sheet.paste(cell, (col * F, row * F))


def fwd(d):
    return {'up': (0, -1), 'left': (-1, 0), 'down': (0, 1), 'right': (1, 0),
            'up_left': (-1, -1), 'down_left': (-1, 1), 'down_right': (1, 1), 'up_right': (1, -1)}[d]


def block(base, i, d):
    a, b = idle[d]
    fx, fy = fwd(d)
    for c, dy in enumerate([0, -1, -2, -3, -2, -1, 0]):  # spellcast: rise and settle
        put(base + 0 + i, c, b if 2 <= c <= 4 else a, dy=dy)
    for c, k in enumerate([0, 0, 1, 2, 3, 2, 1, 0]):  # thrust: lunge
        put(base + 4 + i, c, a, dx=fx * k, dy=fy * k)
    put(base + 8 + i, 0, a)  # walk: standing
    w0, w1 = walk[d]
    for c, (img, dy) in enumerate([(w0, 0), (w0, 0), (a, -1), (a, -1), (w1, 0), (w1, 0), (b, -1), (b, -1)]):  # walk
        put(base + 8 + i, c + 1, img, dy=dy)
    put(base + 8 + i, 12, b)  # second idle pose (IDLE_COL)
    for c, k in enumerate([0, 1, 2, 3, 1, 0]):  # slash: lunge
        put(base + 12 + i, c, b if c in (2, 3) else a, dx=fx * k, dy=fy * k)
    for c, k in enumerate([0, 0, -1, -1, -2, -2, -2, -2, 2, 1, 0, 0, 0]):  # shoot: lean back, then forward
        put(base + 16 + i, c, a, dx=fx * k, dy=fy * k)


for i, d in enumerate(DIRS):
    block(0, i, d)
for i, d in enumerate(DIAGS):
    block(21, i, d)
down = Image.new('RGBA', (F, F), (0, 0, 0, 0))
img = idle['down'][0]
down.paste(img, (round(F / 2 - body_x(img)), F - 8 - img.size[1]), img)
for c, (ang, dy) in enumerate([(0, 0), (8, 0), (25, 1), (50, 3), (75, 6), (90, 9)]):  # hurt / death: topple
    r = down.rotate(-ang, resample=Image.NEAREST, center=(F / 2, F - 8))
    cell = Image.new('RGBA', (F, F), (0, 0, 0, 0))
    cell.paste(r, (c * 2, dy), r)
    sheet.paste(cell, (c * F, 20 * F))
sheet.save(OUT, optimize=True)
print('wrote', OUT, sheet.size)
