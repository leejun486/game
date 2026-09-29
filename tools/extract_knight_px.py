#!/usr/bin/env python3
"""Split assets/src/knight_px/attack_sheet.webp (8 directions x 6 attack frames, transparent background,
swords and slash arcs overlapping neighbouring cells) into per-frame images, scaled to game size.
Connected pieces are assigned to the cell whose body they belong to (or whose centre is nearest),
so a sword reaching into the next cell stays with its owner.
Writes assets/src/knight_px/attack_<dir>_<k>.png (96x96, feet at y=88, centred at x=48)."""
from PIL import Image
import numpy as np
from scipy import ndimage
import os

SRC = os.path.join(os.path.dirname(__file__), '..', 'assets', 'src', 'knight_px')
DIRS = ['down', 'down_right', 'right', 'up_right', 'up', 'up_left', 'left', 'down_left']  # sheet row order
SCALE = 0.36          # ~130px tall source -> ~47px, the elf's height
F, FOOT = 96, 88

a = np.array(Image.open(os.path.join(SRC, 'attack_sheet.webp')).convert('RGBA'))
alpha = a[..., 3]
body = (alpha > 120) & (a[..., :3].max(axis=2) < 150)  # dark armour, not steel or fire


def runs(v, gap, minlen):
    out, s, last = [], None, -99
    for i, x in enumerate(v):
        if x > 0:
            s = i if s is None else s
            last = i
        elif s is not None and i - last > gap:
            out.append((s, last + 1)); s = None
    if s is not None:
        out.append((s, last + 1))
    return [r for r in out if r[1] - r[0] >= minlen]


rows = runs(body.sum(1), 3, 20)
assert len(rows) == 8, rows
cells = []  # (row, col, x0, x1, y0, y1) body boxes
for r, (y0, y1) in enumerate(rows):
    cols = runs(body[y0:y1].sum(0), 4, 15)
    assert len(cols) == 6, (r, cols)
    for c, (x0, x1) in enumerate(cols):
        cells.append((r, c, x0, x1, y0, y1))

lab, n = ndimage.label(alpha > 8, structure=np.ones((3, 3)))
cell_of = np.full(alpha.shape, -1, dtype=int)
centres = np.array([((x0 + x1) / 2, (y0 + y1) / 2) for (_, _, x0, x1, y0, y1) in cells])
for i, sl in enumerate(ndimage.find_objects(lab), start=1):
    ys, xs = np.nonzero(lab[sl] == i)
    ys = ys + sl[0].start; xs = xs + sl[1].start
    # cells whose body this piece touches; touching arcs can fuse two frames into one piece
    bm = body[ys, xs]
    cand = [k for k, (r, c, x0, x1, y0, y1) in enumerate(cells) if ((xs >= x0) & (xs < x1) & (ys >= y0) & (ys < y1) & bm).any()]
    if not cand:  # loose fx: nearest cell centre
        cy, cx = ys.mean(), xs.mean()
        cand = [int(np.argmin(((centres - [cx, cy]) ** 2).sum(1)))]
    if len(cand) == 1:
        cell_of[ys, xs] = cand[0]
        continue
    # split per pixel by distance to each candidate's body box
    best = np.full(len(xs), np.inf); pick = np.zeros(len(xs), dtype=int)
    for k in cand:
        _, _, x0, x1, y0, y1 = cells[k]
        d = np.maximum(np.maximum(x0 - xs, xs - x1), 0) ** 2 + np.maximum(np.maximum(y0 - ys, ys - y1), 0) ** 2
        better = d < best
        best[better] = d[better]; pick[better] = k
    cell_of[ys, xs] = pick

for k, (r, c, x0, x1, y0, y1) in enumerate(cells):
    mask = cell_of == k
    ys, xs = np.nonzero(mask)
    img = a.copy(); img[~mask] = 0
    crop = Image.fromarray(img[ys.min():ys.max() + 1, xs.min():xs.max() + 1])
    # anchor: feet = bottom of this row's body band, centre = the body box centre
    ax, ay = (x0 + x1) / 2 - xs.min(), y1 - ys.min()
    w, h = crop.size
    small = crop.resize((max(1, round(w * SCALE)), max(1, round(h * SCALE))), Image.LANCZOS)
    arr = np.array(small)
    al = arr[..., 3].astype(int)
    arr[..., 3] = np.where(al < 40, 0, np.minimum(255, al * 1.25)).astype(np.uint8)  # crisp edges, keep fx glow
    small = Image.fromarray(arr)
    out = Image.new('RGBA', (F, F), (0, 0, 0, 0))
    out.alpha_composite(small, (round(F / 2 - ax * SCALE), round(FOOT - ay * SCALE))) if round(F / 2 - ax * SCALE) >= 0 and round(FOOT - ay * SCALE) >= 0 else out.paste(small, (round(F / 2 - ax * SCALE), round(FOOT - ay * SCALE)), small)
    out.save(os.path.join(SRC, f'attack_{DIRS[r]}_{c}.png'))
print('wrote', len(cells), 'frames')
