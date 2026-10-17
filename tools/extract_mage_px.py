#!/usr/bin/env python3
"""Cut a mage (도사) motion sheet into per-direction frames: assets/src/mage_px/<motion>_<dir>_<k>.png.
Input: a 2x6 sheet on a baked grey checkerboard (6 columns, 2 rows, each row one pose of the motion).
  python3 tools/extract_mage_px.py <sheet image> [idle|walk]
Row 1: down, down_left, left, up, up_right, up_left. Row 2: down, down_left, left, up, up_right, down_right.
Missing frames are mirrored (right <- left, down_right <- down_left, up_left <- up_right).
Frames keep the source resolution; tools/build_mage_px.py scales them into the game sheet."""
import os
import sys
import numpy as np
from PIL import Image, ImageOps
from scipy import ndimage

ROOT = os.path.join(os.path.dirname(__file__), '..')
OUT = os.path.join(ROOT, 'assets', 'src', 'mage_px')
os.makedirs(OUT, exist_ok=True)
im = Image.open(sys.argv[1]).convert('RGB')
MOTION = sys.argv[2] if len(sys.argv) > 2 else 'idle'
W, H = im.size
a = np.array(im).astype(int)
mx, mn = a.max(2), a.min(2)
bg = ((mx - mn) < 20) & (mx > 88) & (mx < 178)  # the two checkerboard greys
bg[int(H * 0.9):, int(W * 0.925):] = True  # generator watermark in the corner
fg = ~bg
lab, n = ndimage.label(fg)
sizes = ndimage.sum(fg, lab, range(1, n + 1))
keep = np.zeros(n + 1, bool)
keep[1:] = sizes > 400
fg = keep[lab]
rgba = Image.fromarray(np.dstack([a, fg * 255]).astype(np.uint8), 'RGBA')

LAYOUT = [['down', 'down_left', 'left', 'up', 'up_right', 'up_left'],
          ['down', 'down_left', 'left', 'up', 'up_right', 'down_right']]
got = {}
for r, row in enumerate(LAYOUT):
    for c, d in enumerate(row):
        x0, x1, y0, y1 = int(c * W / 6), int((c + 1) * W / 6), int(r * H / 2), int((r + 1) * H / 2)
        ys, xs = np.nonzero(fg[y0:y1, x0:x1])
        crop = rgba.crop((x0 + xs.min(), y0 + ys.min(), x0 + xs.max() + 1, y0 + ys.max() + 1))
        got.setdefault(d, []).append(crop)
mir = ImageOps.mirror
got['right'] = [mir(f) for f in got['left']]
got['down_right'].append(mir(got['down_left'][0]))
got['up_left'].append(mir(got['up_right'][1]))
for d, frames in got.items():
    for k, f in enumerate(frames):
        f.save(os.path.join(OUT, f'{MOTION}_{d}_{k}.png'))
print('wrote', MOTION, len(got), 'directions to', OUT)
