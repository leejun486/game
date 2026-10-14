# 캐릭터 스프라이트 시트(그림 한 장) → 게임용 묶음 그림(sprites/<이름>.webp) + 자리표(<이름>.json)
#  - 베이지 모눈 배경을 가장자리부터 채워서 지움 (캐릭터의 진한 외곽선에서 멈춤)
#  - 캐릭터 안쪽에 갇힌 배경(스카프와 몸 사이 등)은 색이 고른 것만 지움 (갑옷 하이라이트는 배경색과 같아도 명암이 있어 남음)
#  - 덩어리마다 한 장, 위 줄 a1~a8 · 아래 줄 b1~b8 (왼쪽부터)
#  - 붙어 버린 두 장은 가장 가는 세로줄에서 나눔
#  - 발 위치(바닥 기준점)를 재서 자리표에 적음
# 쓰기: python3 tools/sprites/cut_sheet.py design/knight/sheet.webp sprites/knight
import json, sys
import numpy as np
from PIL import Image
from scipy import ndimage as nd

src, out = sys.argv[1], sys.argv[2]
SCALE = 0.6      # 시트 픽셀 → 묶음 그림 픽셀
ROW_SPLIT = 560  # 이 높이보다 아래는 둘째 줄

im = Image.open(src).convert('RGB')
a = np.array(im).astype(int)
R, G, B = a[..., 0], a[..., 1], a[..., 2]
mx, mn = a.max(-1), a.min(-1)
lum = (R * 3 + G * 6 + B) / 10

# 1) 배경: 가장자리와 이어진 '따뜻하고 흐린' 픽셀 (모눈 선·그림자 포함)
bgl = (mx - mn <= 52) & (lum >= 105) & (lum <= 240) & (R >= B + 4)
lab, _ = nd.label(bgl)
edge = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
bg = np.isin(lab, edge[edge > 0])
fg = nd.binary_opening(~bg, iterations=1)
fl, n = nd.label(fg)
sizes = nd.sum(fg, fl, range(1, n + 1))

# 2) 덩어리 → 한 장씩
items = []
for c in [i + 1 for i, s in enumerate(sizes) if s > 3000]:
    m = fl == c
    xs = np.where(m.any(0))[0]
    x0, x1 = xs.min(), xs.max()
    if x1 - x0 > 400:  # 두 장이 붙음
        cs = m[:, x0:x1].sum(0); mid = (x1 - x0) // 2; lo = mid - 120
        cut = x0 + lo + int(np.argmin(cs[lo:mid + 120]))
        L = m.copy(); L[:, cut:] = False
        Rm = m.copy(); Rm[:, :cut] = False
        items += [L, Rm]
    else:
        items.append(m)

hole_like = (mx - mn <= 42) & (lum >= 140) & (lum <= 235) & (R >= B + 8)
frames = []
for m in items:
    # 떨어져 나온 작은 조각(옆 그림의 끝자락)은 버림
    pl, pn = nd.label(m)
    ps = nd.sum(m, pl, range(1, pn + 1))
    m = np.isin(pl, [i + 1 for i, s in enumerate(ps) if s >= ps.max() * 0.08])
    hl, hn = nd.label(hole_like & m)
    if hn:
        hs = nd.sum(hole_like & m, hl, range(1, hn + 1))
        sd = nd.standard_deviation(lum, hl, range(1, hn + 1))
        m = m & ~np.isin(hl, [i + 1 for i in range(hn) if hs[i] > 250 and sd[i] <= 16])
    ys, xs = np.where(m)
    frames.append(dict(m=m, y0=ys.min(), x0=xs.min(), y1=ys.max() + 1, x1=xs.max() + 1))
frames.sort(key=lambda f: (f['y0'] > ROW_SPLIT, f['x0']))
assert len(frames) == 16, len(frames)

# 3) 발 위치: 붉은 칼·스카프를 뺀 몸에서 가장 낮은 곳, 가로는 몸통 띠의 가운데
red = (R > G + 50) & (R > B + 30)
cells = []
for k, f in enumerate(frames):
    m = f['m']; body = m & ~red
    ys, xs = np.where(body)
    foot = ys.max()
    band = body[foot - 330:foot - 150]
    bx = np.where(band)[1]
    cx = float(np.median(bx)) if len(bx) else float(xs.mean())
    name = ('a' if k < 8 else 'b') + str(k % 8 + 1)
    crop = np.zeros((f['y1'] - f['y0'], f['x1'] - f['x0'], 4), 'uint8')
    crop[..., :3] = a[f['y0']:f['y1'], f['x0']:f['x1']]
    al = nd.gaussian_filter(m[f['y0']:f['y1'], f['x0']:f['x1']].astype(float), 0.6)
    crop[..., 3] = (np.clip(al * 1.3, 0, 1) * 255).astype('uint8')
    img = Image.fromarray(crop)
    img = img.resize((round(img.width * SCALE), round(img.height * SCALE)), Image.LANCZOS)
    cells.append(dict(name=name, img=img, ax=(cx - f['x0']) * SCALE, ay=(foot - f['y0']) * SCALE))

# 4) 한 장으로 묶기 (두 줄)
PAD = 2
rows = [cells[:8], cells[8:]]
W = max(sum(c['img'].width + PAD for c in r) for r in rows)
H = sum(max(c['img'].height for c in r) + PAD for r in rows)
atlas = Image.new('RGBA', (W, H), (0, 0, 0, 0))
meta = {'frames': {}, 'w': W, 'h': H, 'unit': round(1 / SCALE, 4)}
y = 0
for r in rows:
    x = 0
    for c in r:
        atlas.paste(c['img'], (x, y))
        meta['frames'][c['name']] = [x, y, c['img'].width, c['img'].height, round(c['ax'], 1), round(c['ay'], 1)]
        x += c['img'].width + PAD
    y += max(c['img'].height for c in r) + PAD
atlas.save(out + '.webp', quality=92, method=6)
json.dump(meta, open(out + '.json', 'w'), separators=(',', ':'))
print(W, H, {k: v[4:] for k, v in meta['frames'].items()})
