#!/usr/bin/env python3
"""Build assets/sprites/knight_px.png: LPC-layout sheet with 96px cells (13 cols x 41 rows) for the knight
from the 8-direction attack frames in assets/src/knight_px/attack_<dir>_<k>.png (made by extract_knight_px.py)
and walk frames walk_<dir>_<k>.png (made by extract_knight_walk.py).
Rows 0-20 follow LPC (up/left/down/right), rows 21-40 hold the diagonals (up_left, down_left, down_right,
up_right) in the same animation order. Slash rows use the six real attack frames (the fire arc on frame 3,
the game's hit frame); walk rows use the six real walk frames in cols 1-6 (the game reads the cycle length
from WALK_FRAMES in js/data.js); standing (walk col 0) and the other animations move the first walk frame,
the sword held low, procedurally."""
from PIL import Image
import os

ROOT = os.path.join(os.path.dirname(__file__), '..')
SRC = os.path.join(ROOT, 'assets', 'src', 'knight_px')
OUT = os.path.join(ROOT, 'assets', 'sprites', 'knight_px.png')
F = 96
DIRS = ['up', 'left', 'down', 'right']
DIAGS = ['up_left', 'down_left', 'down_right', 'up_right']
atk = {d: [Image.open(os.path.join(SRC, f'attack_{d}_{k}.png')).convert('RGBA') for k in range(6)] for d in DIRS + DIAGS}
walk = {d: [Image.open(os.path.join(SRC, f'walk_{d}_{k}.png')).convert('RGBA') for k in range(6)] for d in DIRS + DIAGS}
sheet = Image.new('RGBA', (13 * F, 41 * F), (0, 0, 0, 0))


def put(row, col, img, dx=0, dy=0):
    cell = Image.new('RGBA', (F, F), (0, 0, 0, 0))
    cell.paste(img, (dx, dy), img)
    sheet.paste(cell, (col * F, row * F))


def fwd(d):
    return {'up': (0, -1), 'left': (-1, 0), 'down': (0, 1), 'right': (1, 0),
            'up_left': (-1, -1), 'down_left': (-1, 1), 'down_right': (1, 1), 'up_right': (1, -1)}[d]


def block(base, i, d):
    stand, (fx, fy) = walk[d][0], fwd(d)
    for c, dy in enumerate([0, -1, -2, -2, -1, 0, 0]):  # spellcast: rise and settle
        put(base + 0 + i, c, stand, dy=dy)
    for c, k in enumerate([0, 0, 1, 2, 2, 1, 0, 0]):  # thrust: lunge
        put(base + 4 + i, c, stand, dx=fx * k, dy=fy * k)
    for c, img in enumerate([stand] + walk[d]):  # walk: standing, then the real cycle
        put(base + 8 + i, c, img)
    for c in range(6):  # slash: the real swing
        put(base + 12 + i, c, atk[d][c])
    for c, k in enumerate([0, 0, -1, -1, -2, -2, -2, -2, 2, 1, 0, 0, 0]):  # shoot (unused by knights): lean
        put(base + 16 + i, c, stand, dx=fx * k, dy=fy * k)


for i, d in enumerate(DIRS):
    block(0, i, d)
for i, d in enumerate(DIAGS):
    block(21, i, d)
down = walk['down'][0]
for c, (ang, dy) in enumerate([(0, 0), (8, 0), (25, 1), (50, 3), (75, 6), (90, 9)]):  # hurt / death: topple
    r = down.rotate(-ang, resample=Image.NEAREST, center=(F / 2, F - 8))
    put(20, c, r, dx=c * 2, dy=dy)
sheet.save(OUT)
print('wrote', OUT, sheet.size)
