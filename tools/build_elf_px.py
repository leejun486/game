#!/usr/bin/env python3
"""Build assets/sprites/elf_px.png: an LPC-layout sheet (13 cols x 21 rows of 64px) for the elf class
from single-pose PixelLab art in assets/src/elf_px/ (48x48, one pose per direction).
Rows 0-20 are the standard LPC layout for up/left/down/right; rows 21-40 add diagonals in the same
animation order (spellcast, thrust, walk, slash, shoot) x (up_left, down_left, down_right, up_right).
Where PixelLab animations exist (walk_<dir>.gif, shoot_<dir>.gif) their frames replace the procedural motion;
a down_right animation also serves down (close enough to the front pose) and, mirrored, down_left.
The poses are static, so motion is procedural: a walking bob and sway, a lean for casts and swings,
a draw-and-release recoil for the bow, and a topple for the hurt/death row."""
from PIL import Image, ImageSequence
import os

ROOT = os.path.join(os.path.dirname(__file__), '..')
SRC = os.path.join(ROOT, 'assets', 'src', 'elf_px')
OUT = os.path.join(ROOT, 'assets', 'sprites', 'elf_px.png')
DIRS = ['up', 'left', 'down', 'right']  # LPC row order within each animation block
FOOT_Y = 59  # frame y the sprite's feet rest on (entities anchor at y=56 with the shadow a bit below)

pose = {d: Image.open(os.path.join(SRC, d + '.png')).convert('RGBA') for d in DIRS}
DIAGS = ['up_left', 'down_left', 'down_right', 'up_right']
for d in DIAGS[:3]:
    pose[d] = Image.open(os.path.join(SRC, d + '.png')).convert('RGBA')
pose['up_right'] = pose['up_left'].transpose(Image.FLIP_LEFT_RIGHT)  # no art for it: mirror
sheet = Image.new('RGBA', (13 * 64, 41 * 64), (0, 0, 0, 0))


def put(row, col, img, dx=0, dy=0, sx=1.0, sy=1.0, bottom=None):
    """bottom: the image's foot line; defaults to its opaque bbox (animations pass a fixed one so frames don't jitter)"""
    bb = img.getbbox()
    w, h = img.size
    if sx != 1 or sy != 1:
        img = img.resize((max(1, round(w * sx)), max(1, round(h * sy))), Image.NEAREST)
        bb = img.getbbox()
        w, h = img.size
    if bottom is not None:  # animation frames replace whatever the procedural pass put in the cell
        sheet.paste((0, 0, 0, 0), (col * 64, row * 64, col * 64 + 64, row * 64 + 64))
    x = 32 - w // 2 + dx
    y = FOOT_Y - (bottom if bottom is not None else bb[3]) + dy
    sheet.alpha_composite(img, (col * 64 + x, row * 64 + y)) if 0 <= x and 0 <= y else sheet.paste(img, (col * 64 + x, row * 64 + y), img)


def fwd(d):  # unit step toward the facing direction
    return {'up': (0, -1), 'left': (-1, 0), 'down': (0, 1), 'right': (1, 0),
            'up_left': (-1, -1), 'down_left': (-1, 1), 'down_right': (1, 1), 'up_right': (1, -1)}[d]


def block(base, i, d):
    """all five animations for one direction; base 0 = LPC rows, base 21 = diagonal rows"""
    im = pose[d]
    fx, fy = fwd(d)
    # spellcast (rows 0-3, 7 frames): rise onto the toes and settle
    for c, (dy, s) in enumerate([(0, 1), (-1, 1), (-2, 1.02), (-2, 1.02), (-1, 1), (0, 1), (0, 1)]):
        put(base + 0 + i, c, im, dy=dy, sy=s)
    # thrust (rows 4-7, 8 frames): lean in and back
    for c, k in enumerate([0, 0, 1, 2, 2, 1, 0, 0]):
        put(base + 4 + i, c, im, dx=fx * k, dy=fy * k)
    # walk (rows 8-11, 9 frames; col 0 is standing): bob with a slight side sway and stride squash
    bob = [0, -1, -2, -1, 0, -1, -2, -1, 0]
    sway = [0, 0, 1, 1, 0, 0, -1, -1, 0]
    for c in range(9):
        side = d != 'up' and d != 'down'
        put(base + 8 + i, c, im, dx=0 if side else sway[c], dy=bob[c], sx=1.0, sy=1.0 if c == 0 else (0.97 if bob[c] == 0 else 1.0))
    # slash (rows 12-15, 6 frames): wind back, strike forward
    for c, k in enumerate([0, -1, -1, 2, 2, 0]):
        put(base + 12 + i, c, im, dx=fx * k, dy=fy * k)
    # shoot (rows 16-19, 13 frames): draw the bow (lean back), release (recoil forward), recover
    for c, k in enumerate([0, 0, -1, -1, -2, -2, -2, -2, 2, 1, 0, 0, 0]):
        put(base + 16 + i, c, im, dx=fx * k, dy=fy * k)

for i, d in enumerate(DIRS):
    block(0, i, d)
for i, d in enumerate(DIAGS):
    block(21, i, d)

# ---- PixelLab animations
def gif_frames(name):
    path = os.path.join(SRC, name)
    if not os.path.exists(path):
        return None
    fr = [f.convert('RGBA') for f in ImageSequence.Iterator(Image.open(path))]
    return fr, max(f.getbbox()[3] for f in fr)


def mirror(anim):
    return [f.transpose(Image.FLIP_LEFT_RIGHT) for f in anim[0]], anim[1]


WALK_ROW = {'down': 8 + 2, 'down_right': 21 + 8 + 2, 'down_left': 21 + 8 + 1}
SHOOT_ROW = {'down': 16 + 2, 'down_right': 21 + 16 + 2, 'down_left': 21 + 16 + 1}
walk = gif_frames('walk_down_right.gif')
if walk:
    for d, anim in (('down_right', walk), ('down', walk), ('down_left', mirror(walk))):
        frames, bottom = anim
        for c in range(1, 9):  # col 0 stays the standing pose
            put(WALK_ROW[d], c, frames[(c - 1) * len(frames) // 8], bottom=bottom)
shoot = gif_frames('shoot_down_right.gif')
if shoot:
    REL = 5  # frame where the arrow leaves the bow in the art
    for d, anim in (('down_right', shoot), ('down', shoot), ('down_left', mirror(shoot))):
        frames, bottom = anim
        n = len(frames)
        for c in range(13):  # the game releases on col 9 of 13: stretch the draw, keep the follow-through
            k = round(c * REL / 9) if c <= 9 else min(n - 1, REL + round((c - 9) * (n - 1 - REL) / 3))
            put(SHOOT_ROW[d], c, frames[k], bottom=bottom)

# hurt / death (row 20, 6 frames): topple sideways from the front pose and sink
down = pose['down']
for c, (ang, dy) in enumerate([(0, 0), (8, 0), (25, 1), (50, 3), (75, 6), (90, 9)]):
    r = down.rotate(-ang, resample=Image.NEAREST, expand=True)
    put(20, c, r, dx=c * 2, dy=dy)

sheet.save(OUT)
print('wrote', OUT, sheet.size)
