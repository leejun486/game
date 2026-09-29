#!/usr/bin/env python3
"""Split assets/src/knight_px/walk_sheet.gif (a 6-frame preview animation: 8 directions on a 4x2 grid,
4x-upscaled pixel art on a flat background, a text label under each direction) into per-frame images.
Writes assets/src/knight_px/walk_<dir>_<k>.png (96x96, feet at y=88), anchored like the attack frames:
the dark-armour body box is centred at x=48, so walking and swinging line up."""
from PIL import Image, ImageSequence
import numpy as np
import os

SRC = os.path.join(os.path.dirname(__file__), '..', 'assets', 'src', 'knight_px')
GRID = [['down', 'down_right', 'right', 'up_right'],   # south, south-east, east, north-east
        ['up', 'up_left', 'left', 'down_left']]        # north, north-west, west, south-west
UP = 4                 # source pixel size
F, FOOT = 96, 88
CELL_W, CELL_H, ART_H = 272, 296, 260  # grid cell size; art sits above the label (label rows are cut)

frames = [np.array(f.convert('RGB')) for f in ImageSequence.Iterator(Image.open(os.path.join(SRC, 'walk_sheet.gif')))]
bg = frames[0][0, 0].astype(int)

for r, row in enumerate(GRID):
    for c, d in enumerate(row):
        cuts = []
        for f in frames:
            cell = f[r * CELL_H:r * CELL_H + ART_H:UP, c * CELL_W:(c + 1) * CELL_W:UP].astype(int)  # one sample per art pixel
            rgba = np.dstack([cell, np.where(np.abs(cell - bg).sum(2) > 6, 255, 0)]).astype(np.uint8)
            cuts.append(rgba)
        # shared anchor for all frames of this direction so the walk doesn't jitter:
        # feet = lowest opaque row over the cycle, centre = body (dark armour, not the steel blade) of frame 0
        feet = max(np.nonzero(a[..., 3])[0].max() for a in cuts) + 1
        a0 = cuts[0]
        body = (a0[..., 3] > 0) & (a0[..., :3].max(2) < 150)
        xs = np.nonzero(body.any(0))[0]
        cx = (xs.min() + xs.max() + 1) / 2
        for k, a in enumerate(cuts):
            out = Image.new('RGBA', (F, F), (0, 0, 0, 0))
            out.paste(Image.fromarray(a), (round(F / 2 - cx), FOOT - feet))
            out.save(os.path.join(SRC, f'walk_{d}_{k}.png'))
print('wrote', len(frames) * 8, 'frames')
