#!/usr/bin/env python3
"""Slice assets/src/classes6/sheet.png (6 classes x illustration / 8 sprite rows / face / weapons on a dark
grid) into transparent pieces under assets/classes/<id>/.  Background is removed per cell by flood-filling
from the cell border over pixels close to the local background colour, so dark outlines inside a sprite stay.
Also writes assets/classes/manifest.js (frame counts per animation)."""
from PIL import Image
import numpy as np
from scipy import ndimage
import os, json

ROOT = os.path.join(os.path.dirname(__file__), '..')
a = np.array(Image.open(os.path.join(ROOT, 'assets/src/classes6/sheet.png')).convert('RGB')).astype(np.int16)
OUT = os.path.join(ROOT, 'assets/classes')

CLASSES = ['knight', 'darkelf', 'elf', 'mage', 'lord', 'gunner']
COLS = [(97, 356), (357, 597), (598, 829), (830, 1064), (1065, 1299), (1300, 1536)]
ROWS = {  # band y-range on the sheet
    'front': (250, 306), 'side': (309, 369), 'back': (370, 432), 'move': (433, 497),
    'attack': (498, 567), 'skill': (568, 659), 'death': (660, 714), 'idle': (715, 782),
}
FACES = [(147, 298), (400, 548), (642, 776), (872, 1008), (1115, 1256), (1360, 1501)]  # inside the gold frames
ILLUST, FACE, WEAPON = (52, 248), (788, 902), (904, 1016)


def cutout(box, tol=22, grow=1):
    """Return RGBA crop of box with the background flood-filled away."""
    x0, y0, x1, y1 = box
    c = a[y0:y1, x0:x1]
    edge = np.concatenate([c[0], c[-1], c[:, 0], c[:, -1]])
    bg = np.median(edge, axis=0)
    # local background varies (vignettes), so compare with a blurred version of the cell too
    blur = np.stack([ndimage.median_filter(c[..., k], size=15) for k in range(3)], -1)
    near = (np.abs(c - bg).max(-1) < tol) | ((np.abs(c - blur).max(-1) < 10) & (c.max(-1) < 70))
    lab, _ = ndimage.label(near)
    border = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    bgmask = np.isin(lab, border[border > 0])
    fg = ~bgmask
    fg = ndimage.binary_opening(fg, iterations=1)
    # drop specks and grey smudges of the cell's own gradient
    l2, n = ndimage.label(fg)
    if n:
        idx = range(1, n + 1)
        sizes = ndimage.sum(fg, l2, idx)
        diff = np.abs(c - blur).max(-1).astype(float)
        sat = (c.max(-1) - c.min(-1)).astype(float)
        dmean = ndimage.mean(diff, l2, idx)
        smean = ndimage.mean(sat, l2, idx)
        keep = [i for i, z, dm, sm in zip(idx, sizes, dmean, smean) if z >= 12 and not (dm < 16 and sm < 22)]
        fg = np.isin(l2, keep)
    alpha = ndimage.gaussian_filter(fg.astype(float), 0.6) * 255
    alpha[fg] = 255
    rgba = np.dstack([c.clip(0, 255), alpha.clip(0, 255)]).astype(np.uint8)
    return rgba, fg


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


def trim(rgba):
    ys, xs = np.nonzero(rgba[..., 3] > 0)
    return rgba[ys.min():ys.max() + 1, xs.min():xs.max() + 1]


def save(rgba, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    Image.fromarray(rgba).save(path)


def frames(box, minlen=10, gap=3):
    """Split a band into frames by body columns (tall columns), keep fx with the nearest body."""
    rgba, fg = cutout(box)
    h = fg.shape[0]
    tall = fg.sum(0) >= max(4, h * 0.18)
    bodies = runs(tall, gap, minlen)
    lab, n = ndimage.label(fg, structure=np.ones((3, 3)))
    owner = np.full(fg.shape, -1)
    cx = np.array([(s + e) / 2 for s, e in bodies])
    for i, sl in enumerate(ndimage.find_objects(lab), 1):
        ys, xs = np.nonzero(lab[sl] == i); ys += sl[0].start; xs += sl[1].start
        if np.ptp(ys) < 4 and np.ptp(xs) > 8:  # grid line remnant
            continue
        hit = [k for k, (s, e) in enumerate(bodies) if ((xs >= s) & (xs < e)).mean() > 0.6]
        owner[ys, xs] = hit[0] if len(hit) == 1 else np.argmin(np.abs(xs[:, None] - cx[None]), 1)
    out = []
    for k, (s, e) in enumerate(bodies):
        m = owner == k
        if not m.any():
            continue
        img = rgba.copy(); img[~m] = 0
        ys, xs = np.nonzero(m)
        crop = img[:, xs.min():xs.max() + 1]
        foot = ys.max()
        # anchor relative to crop: body centre x, feet y (band bottom of mask)
        out.append((crop, (s + e) / 2 - xs.min(), foot))
    return out


manifest = {}
for ci, cid in enumerate(CLASSES):
    X0, X1 = COLS[ci]
    d = os.path.join(OUT, cid)
    info = {'anims': {}}
    os.makedirs(d, exist_ok=True)
    Image.fromarray(a[ILLUST[0]:ILLUST[1], X0 + 2:X1 - 2].clip(0, 255).astype(np.uint8)).save(os.path.join(d, 'illust.png'))
    fx0, fx1 = FACES[ci]
    Image.fromarray(a[FACE[0] + 9:FACE[1] - 6, fx0:fx1].clip(0, 255).astype(np.uint8)).save(os.path.join(d, 'face.png'))
    # weapons
    wf = frames((X0 + 6, WEAPON[0] + 4, X1 - 4, WEAPON[1] - 4), minlen=8, gap=2)
    for k, (img, _, _) in enumerate(wf):
        save(trim(img), os.path.join(d, f'weapon_{k}.png'))
    info['weapons'] = len(wf)
    for anim, (y0, y1) in ROWS.items():
        if anim == 'skill':  # one wide effect sequence: keep as a strip
            rgba, _ = cutout((X0 + 2, y0, X1 - 2, y1))
            save(trim(rgba), os.path.join(d, 'skill.png'))
            info['anims'][anim] = {'n': 1, 'strip': True}
            continue
        fr = frames((X0 + 2, y0, X1 - 2, y1))
        # common canvas so frames line up: width = max, feet at same y
        W = int(max(f[0].shape[1] for f in fr)) + 8
        H = y1 - y0
        meta = []
        for k, (img, ax, foot) in enumerate(fr):
            save(img, os.path.join(d, f'{anim}_{k}.png'))
            meta.append([round(float(ax), 1), int(foot)])
        info['anims'][anim] = {'n': len(fr), 'h': H, 'anchor': meta}
    manifest[cid] = info
    print(cid, {k: v['n'] for k, v in info['anims'].items()}, 'weapons', info['weapons'])

with open(os.path.join(OUT, 'manifest.js'), 'w') as f:
    f.write('// generated by tools/extract_classes6.py\nwindow.CLASS6_MANIFEST = ' + json.dumps(manifest) + ';\n')

# inline the manifest into the character creation page (it must also work as a single published page)
import re
page = os.path.join(ROOT, 'characters.html')
html = open(page, encoding='utf-8').read()
html = re.sub(r'const M = .*?;\n', lambda m: 'const M = /*MANIFEST*/' + json.dumps(manifest, separators=(',', ':')) + ';\n', html, count=1)
open(page, 'w', encoding='utf-8').write(html)
