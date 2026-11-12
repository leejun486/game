#!/usr/bin/env python3
"""Turn a 4x4 sprite grid on a magenta background (made with Gemini) into a game sheet.

Input grid: row 1 front walk, row 2 walk right, row 3 back walk, row 4 attack right (4 frames each).
Output uses the LPC row numbers the game already reads: walk 8 up / 9 left / 10 down / 11 right,
attack 12-15 (left is the right-facing frame mirrored). Column 0 of a walk row is the standing pose.

  python3 tools/build_gem_sheet.py survivors/art/01_knight.webp assets/sprites/gem_knight.png
"""
import sys
import numpy as np
from PIL import Image

CELL = 160          # output cell size
BODY = 148          # tallest frame is scaled to this many pixels
FOOT = 6            # pixels from the cell bottom to the feet


def key_magenta(rgb):
    """Alpha from the distance to pure magenta, with the pink spill pulled out of the edges."""
    f = rgb.astype(np.float32)
    r, g, b = f[..., 0], f[..., 1], f[..., 2]
    # how magenta a pixel is: red and blue high, green low
    mag = np.clip((np.minimum(r, b) - g - 60) / 110, 0, 1)
    alpha = 1 - mag
    # despill: on soft edges, bring red/blue down toward green
    spill = np.clip(np.minimum(r, b) - g, 0, None) * (1 - alpha)
    out = f.copy()
    out[..., 0] -= spill * 0.9
    out[..., 2] -= spill * 0.9
    return np.clip(out, 0, 255), alpha


def keep_main(a, step=4):
    """Keep the character and what touches it; drop stray bits (a neighbour's sword tip, the watermark)."""
    m = a[::step, ::step] > 0.3
    h, w = m.shape
    # grow the mask a little so a sword held a pixel away from the hand still counts as attached
    g = m.copy()
    g[1:] |= m[:-1]; g[:-1] |= m[1:]; g[:, 1:] |= m[:, :-1]; g[:, :-1] |= m[:, 1:]
    label = np.zeros((h, w), np.int32)
    sizes = [0]
    for y in range(h):
        for x in range(w):
            if g[y, x] and not label[y, x]:
                n = len(sizes); sizes.append(0); stack = [(y, x)]; label[y, x] = n
                while stack:
                    cy, cx = stack.pop(); sizes[n] += 1
                    for dy in (-1, 0, 1):
                        for dx in (-1, 0, 1):
                            ny, nx = cy + dy, cx + dx
                            if 0 <= ny < h and 0 <= nx < w and g[ny, nx] and not label[ny, nx]:
                                label[ny, nx] = n; stack.append((ny, nx))
    if len(sizes) <= 2:
        return
    big = max(sizes)
    keep = np.array([s >= big * 0.15 for s in sizes])
    keep[0] = False
    full = np.repeat(np.repeat(keep[label], step, 0), step, 1)[:a.shape[0], :a.shape[1]]
    a[~full] = 0


def main(src, dst):
    im = Image.open(src).convert('RGB')
    W, H = im.size
    rgb, alpha = key_magenta(np.asarray(im))
    # Gemini's sparkle watermark sits in the bottom-right corner: clear any near-white blob there
    y0, x0 = int(H * 0.88), int(W * 0.88)
    corner = rgb[y0:, x0:]
    white = (corner.min(axis=2) > 170)
    alpha[y0:, x0:][white] = 0
    cw, ch = W // 4, H // 4
    for r in range(4):
        for c in range(4):
            keep_main(alpha[r * ch:(r + 1) * ch, c * cw:(c + 1) * cw])
    frames = []
    for r in range(4):
        row = []
        for c in range(4):
            a = alpha[r * ch:(r + 1) * ch, c * cw:(c + 1) * cw]
            m = a > 0.5
            ys, xs = np.nonzero(m)
            # feet = lowest solid row; body centre = centre of mass of the lower half (ignores a swung sword)
            bottom = ys.max()
            low = m[(ys.min() + bottom) // 2:bottom + 1]
            cx = np.nonzero(low)[1].mean()
            row.append((r, c, ys.min(), bottom, cx))
        frames.append(row)
    tallest = max(f[3] - f[2] for row in frames for f in row)
    k = BODY / tallest
    rgba = np.dstack([rgb * alpha[..., None], alpha * 255]).astype(np.float32)  # premultiplied for clean resizing
    sheet = np.zeros((16 * CELL, 5 * CELL, 4), np.float32)

    def cell_image(r, c):
        _, _, top, bottom, cx = frames[r][c]
        crop = rgba[r * ch:(r + 1) * ch, c * cw:(c + 1) * cw]
        h, w = crop.shape[:2]
        pm = Image.fromarray(np.uint8(np.clip(crop, 0, 255)), 'RGBA')
        size = (max(1, round(w * k)), max(1, round(h * k)))
        # resize each premultiplied channel as greyscale so colours do not bleed into transparency
        chans = [np.asarray(pm.getchannel(i).resize(size, Image.LANCZOS), np.float32) for i in range(4)]
        small = np.dstack(chans)
        out = np.zeros((CELL, CELL, 4), np.float32)
        ox = round(CELL / 2 - cx * k)
        oy = round(CELL - FOOT - bottom * k)
        sy0, sx0 = max(0, -oy), max(0, -ox)
        dy0, dx0 = max(0, oy), max(0, ox)
        hh = min(small.shape[0] - sy0, CELL - dy0)
        ww = min(small.shape[1] - sx0, CELL - dx0)
        out[dy0:dy0 + hh, dx0:dx0 + ww] = small[sy0:sy0 + hh, sx0:sx0 + ww]
        return out

    def put(row, col, img, mirror=False):
        if mirror:
            img = img[:, ::-1]
        sheet[row * CELL:(row + 1) * CELL, col * CELL:(col + 1) * CELL] = img

    for src_row, (lpc_row, mirror_row) in {0: (10, None), 1: (11, 9), 2: (8, None)}.items():
        imgs = [cell_image(src_row, c) for c in range(4)]
        for c, img in enumerate([imgs[0]] + imgs):  # col 0 stands, cols 1-4 walk
            put(lpc_row, c, img)
            if mirror_row is not None:
                put(mirror_row, c, img, mirror=True)
    atk = [cell_image(3, c) for c in range(4)]
    for c, img in enumerate(atk):
        for row in (12, 14, 15):
            put(row, c, img)
        put(13, c, img, mirror=True)
    # un-premultiply
    a = sheet[..., 3:4] / 255
    rgb_out = np.where(a > 0, sheet[..., :3] / np.maximum(a, 1e-6), 0)
    out = np.dstack([np.clip(rgb_out, 0, 255), sheet[..., 3]]).astype(np.uint8)
    Image.fromarray(out, 'RGBA').save(dst, optimize=True)
    print(f'{dst}: cell {CELL}px, scale {k:.3f}')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
