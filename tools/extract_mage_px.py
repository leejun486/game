#!/usr/bin/env python3
"""Cut a mage (도사) motion sheet into per-direction frames: assets/src/mage_px/<motion>_<dir>_<k>.png.
Input: a 2x6 sheet on a baked grey checkerboard (6 columns, 2 rows, each row one pose of the motion).
  python3 tools/extract_mage_px.py <sheet image> [idle|walk|attack]
idle/walk: row 1 down, down_left, left, up, up_right, up_left; row 2 down, down_left, left, up, up_right,
  down_right. Missing frames are mirrored (right <- left, down_right <- down_left, up_left <- up_right).
attack: frame 0 = windup, frame 1 = strike. The sheet mixes the order and has real right-facing art:
  row 1 down 0, down_left 0, left 1, up 0, up_right 0, right 1; row 2 down 1, down_left 1, left 0, up 1, right 0,
  down_right 1. down_right 0 <- mirrored down_left 0, up_right 1 <- up_right 0, up_left <- mirrored up_right.
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
ATTACK = [[('down', 0), ('down_left', 0), ('left', 1), ('up', 0), ('up_right', 0), ('right', 1)],
          [('down', 1), ('down_left', 1), ('left', 0), ('up', 1), ('right', 0), ('down_right', 1)]]
got = {}
for r in range(2):
    for c in range(6):
        d = ATTACK[r][c] if MOTION == 'attack' else (LAYOUT[r][c], None)
        x0, x1, y0, y1 = int(c * W / 6), int((c + 1) * W / 6), int(r * H / 2), int((r + 1) * H / 2)
        ys, xs = np.nonzero(fg[y0:y1, x0:x1])
        crop = rgba.crop((x0 + xs.min(), y0 + ys.min(), x0 + xs.max() + 1, y0 + ys.max() + 1))
        if d[1] is None:
            got.setdefault(d[0], []).append(crop)
        else:
            got.setdefault(d[0], [None, None])[d[1]] = crop
mir = ImageOps.mirror
if MOTION == 'attack':
    got['down_right'][0] = mir(got['down_left'][0])
    got['up_right'] = [got['up_right'][0], got['up_right'][0]]
    got['up_left'] = [mir(f) for f in got['up_right']]
else:
    got['right'] = [mir(f) for f in got['left']]
    got['down_right'].append(mir(got['down_left'][0]))
    got['up_left'].append(mir(got['up_right'][1]))
for d, frames in got.items():
    for k, f in enumerate(frames):
        f.save(os.path.join(OUT, f'{MOTION}_{d}_{k}.png'))
print('wrote', MOTION, len(got), 'directions to', OUT)
