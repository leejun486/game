#!/usr/bin/env python3
"""Clean assets/src/talking_island/map_grid.webp (painted island with a debug grid, cell labels, place names,
NPC icons, logo, compass and a minimap inset baked in) into a game background, and derive a walk mask.
Writes assets/maps/talking_island.jpg and assets/maps/talking_island_walk.png (1 px = 8x8 map px, white = walkable)."""
from PIL import Image
import numpy as np
import cv2, os

ROOT = os.path.join(os.path.dirname(__file__), '..')
src = cv2.cvtColor(np.array(Image.open(os.path.join(ROOT, 'assets/src/talking_island/map_grid.webp')).convert('RGB')), cv2.COLOR_RGB2BGR)
H, W = src.shape[:2]
img = src.copy()
CELL = 128
plates = []

# 1. find the cell label plates: black boxes, all the same size, in each cell's top-left
for r in range(H // CELL):
    for c in range(W // CELL):
        x0, y0 = c * CELL, r * CELL
        bx0, bx1, by0, by1 = x0 + 1, x0 + 94, y0 + 1, y0 + 29
        if (src[by0 + 2:by1 - 2, bx0 + 2:bx1 - 2].max(-1) < 30).mean() >= 0.5:
            plates.append((bx0, by0, bx1, by1))

# 2. place names and NPC signs: inpaint the drawn text/icon pixels inside hand-picked boxes. Plates and grid
#    lines are masked as well so their black and yellow do not bleed into the fill.
TEXT = [
    (660, 88, 775, 140), (1170, 100, 1290, 155), (295, 235, 388, 288), (540, 330, 676, 366),
    (958, 292, 1095, 348), (482, 405, 582, 442), (516, 462, 616, 503), (646, 452, 746, 492),
    (742, 414, 852, 452), (728, 368, 835, 400), (1305, 425, 1418, 484), (232, 540, 340, 598),
    (736, 572, 850, 628), (1110, 680, 1228, 740), (185, 752, 335, 790), (512, 756, 618, 812),
]
mask = np.zeros((H, W), np.uint8)
hsv = cv2.cvtColor(src, cv2.COLOR_BGR2HSV)
for x0, y0, x1, y1 in TEXT:
    v = hsv[y0:y1, x0:x1, 2].astype(int); s = hsv[y0:y1, x0:x1, 1].astype(int)
    m = ((v > 185) & (s < 90)) | (v < 28)
    mask[y0:y1, x0:x1] |= cv2.dilate(m.astype(np.uint8), np.ones((3, 3), np.uint8), iterations=2)
for bx0, by0, bx1, by1 in plates:
    mask[by0:by1, bx0:bx1] = 1
for k in range(1, H // CELL):
    mask[k * CELL - 3:k * CELL + 3] = 1
for k in range(1, W // CELL):
    mask[:, k * CELL - 3:k * CELL + 3] = 1
img = cv2.inpaint(img, mask * 255, 3, cv2.INPAINT_TELEA)

# 3. plates and grid lines get real texture instead of the blur: mirror the terrain next to them
for bx0, by0, bx1, by1 in plates:
    h = by1 - by0
    img[by0:by1, bx0:bx1] = img[by1:by1 + h, bx0:bx1][::-1]
# a 2 px yellow line with a dark halo, 6 px in all: 3 px mirrored in from each side keeps the painting sharp
for k in range(1, H // CELL):
    y = k * CELL
    img[y - 3:y] = img[y - 6:y - 3][::-1]
    img[y:y + 3] = img[y + 3:y + 6][::-1]
for k in range(1, W // CELL):
    x = k * CELL
    img[:, x - 3:x] = img[:, x - 6:x - 3][:, ::-1]
    img[:, x:x + 3] = img[:, x + 3:x + 6][:, ::-1]
seam = np.zeros((H, W), np.uint8)
for bx0, by0, bx1, by1 in plates:  # soften the plate edges
    seam[by0:by1 + 1, bx1 - 1:bx1 + 1] = 1; seam[by1 - 1:by1 + 1, bx0:bx1] = 1
img = cv2.inpaint(img, seam * 255, 2, cv2.INPAINT_TELEA)

# 4. logo, compass and minimap sit on open sea: cover them with sea from elsewhere, feathered
def patch(dst, tile):
    """Mirror-tile a sea tile over dst and feather it into the picture."""
    x0, y0, x1, y1 = dst
    tx, ty, tw, th = tile
    t = img[ty:ty + th, tx:tx + tw]
    t2 = np.concatenate([np.concatenate([t, t[:, ::-1]], 1), np.concatenate([t[::-1], t[::-1, ::-1]], 1)], 0)
    w, h = x1 - x0, y1 - y0
    p = np.tile(t2, (h // t2.shape[0] + 1, w // t2.shape[1] + 1, 1))[:h, :w].astype(float)
    e = 20.0
    xs, ys = np.arange(w)[None], np.arange(h)[:, None]
    f = np.ones((h, w))
    if x0 > 0: f = np.minimum(f, xs / e)
    if x1 < W: f = np.minimum(f, (w - 1 - xs) / e)
    if y0 > 0: f = np.minimum(f, ys / e)
    if y1 < H: f = np.minimum(f, (h - 1 - ys) / e)
    f = np.clip(f, 0, 1)[..., None]
    img[y0:y1, x0:x1] = (p * f + img[y0:y1, x0:x1] * (1 - f)).astype(np.uint8)


TILE = (520, 935, 110, 85)  # calm deep sea off the south coast
for dst in [(0, 0, 300, 152), (0, 125, 145, 265), (1262, 758, 1536, 1024)]:
    patch(dst, TILE)

Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB)).save(os.path.join(ROOT, 'assets/maps/talking_island.jpg'), quality=90)
print('map', W, H)

# 5. walk mask: sea is blue/teal, everything else is ground. One mask pixel per 8x8 map pixels.
G = 8
rgb = img[..., ::-1].astype(int)
r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
water = (b > r + 28) & (b > g - 12)
wm = water.reshape(H // G, G, W // G, G).mean((1, 3)) > 0.45
wm = cv2.morphologyEx(wm.astype(np.uint8), cv2.MORPH_OPEN, np.ones((2, 2), np.uint8))
wm = cv2.morphologyEx(wm, cv2.MORPH_CLOSE, np.ones((2, 2), np.uint8))
walk = (1 - wm).astype(np.uint8)
# keep only the main island (drop sea stacks and ships that are not reachable on foot)
n, lab, stats, _ = cv2.connectedComponentsWithStats(walk, connectivity=4)
main = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
walk = (lab == main).astype(np.uint8)
# fill small enclosed patches (the teleport circle, fountains) but keep the lake
n, lab, stats, _ = cv2.connectedComponentsWithStats(1 - walk, connectivity=4)
for i in range(1, n):
    if stats[i, cv2.CC_STAT_AREA] < 40:
        walk[lab == i] = 1
Image.fromarray(walk * 255).save(os.path.join(ROOT, 'assets/maps/talking_island_walk.png'))
print('walk', walk.shape, round(walk.mean(), 2))
