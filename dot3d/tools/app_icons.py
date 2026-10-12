#!/usr/bin/env python3
"""앱 아이콘·시작 화면 만들기: icon.png(512, 도트) → mobile/android 리소스
 - 예전 아이콘(ic_launcher, 둥근 것): 크기별로 도트 그대로 줄임
 - 적응형 아이콘(안드로이드 8+): 뒤 = 아이콘을 크게 흐린 것(가장자리 색이 이어지게), 앞 = 아이콘을 안전 영역 안에 (가장자리는 부드럽게)
 - 시작 화면(splash): 먹빛 바탕 가운데 아이콘
사용: python3 tools/app_icons.py  (npx cap add android 다음에, 아이콘을 바꿨을 때)"""
import os
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RES = os.path.join(ROOT, 'mobile', 'android', 'app', 'src', 'main', 'res')
src = Image.open(os.path.join(ROOT, 'icon.png')).convert('RGBA')
BG = (16, 12, 24, 255)
DENS = {'mdpi': 1, 'hdpi': 1.5, 'xhdpi': 2, 'xxhdpi': 3, 'xxxhdpi': 4}

def px(img, n):  # 도트가 뭉개지지 않게: 크게 줄일 땐 고르게, 아니면 가장 가까운 점
    return img.resize((n, n), Image.LANCZOS if n < 256 else Image.NEAREST)

def round_mask(n):
    m = Image.new('L', (n * 4, n * 4), 0)
    ImageDraw.Draw(m).ellipse((0, 0, n * 4 - 1, n * 4 - 1), fill=255)
    return m.resize((n, n), Image.LANCZOS)

for d, k in DENS.items():
    folder = os.path.join(RES, f'mipmap-{d}')
    os.makedirs(folder, exist_ok=True)
    n = int(48 * k)
    px(src, n).save(os.path.join(folder, 'ic_launcher.png'))
    r = px(src, n); r.putalpha(round_mask(n)); r.save(os.path.join(folder, 'ic_launcher_round.png'))
    # 적응형: 108dp 캔버스, 앞 그림은 가운데 76dp
    full = int(108 * k)
    back = src.resize((full, full), Image.LANCZOS).filter(ImageFilter.GaussianBlur(full / 10))
    back.save(os.path.join(folder, 'ic_launcher_background.png'))
    inner = int(76 * k)
    fg = px(src, inner)
    fade = Image.new('L', (inner, inner), 0)
    e = max(2, inner // 14)
    ImageDraw.Draw(fade).rounded_rectangle((e // 2, e // 2, inner - e // 2, inner - e // 2), radius=e, fill=255)
    fg.putalpha(fade.filter(ImageFilter.GaussianBlur(e / 2)))
    canvas = Image.new('RGBA', (full, full), (0, 0, 0, 0))
    canvas.paste(fg, ((full - inner) // 2, (full - inner) // 2), fg)
    canvas.save(os.path.join(folder, 'ic_launcher_foreground.png'))

# 적응형 아이콘 정의: 뒤를 그림으로
for name in ('ic_launcher.xml', 'ic_launcher_round.xml'):
    p = os.path.join(RES, 'mipmap-anydpi-v26', name)
    with open(p, 'w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n'
                '    <background android:drawable="@mipmap/ic_launcher_background"/>\n'
                '    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>\n'
                '    <monochrome android:drawable="@mipmap/ic_launcher_foreground"/>\n</adaptive-icon>\n')

# 시작 화면: 있는 splash.png 크기마다 먹빛 바탕 + 가운데 아이콘(짧은 변의 30%)
n = 0
for base, _, files in os.walk(RES):
    for f in files:
        if f != 'splash.png':
            continue
        p = os.path.join(base, f)
        w, h = Image.open(p).size
        im = Image.new('RGBA', (w, h), BG)
        s = max(48, int(min(w, h) * 0.3) // 16 * 16)
        ic = px(src, s)
        im.paste(ic, ((w - s) // 2, (h - s) // 2), ic)
        im.convert('RGB').save(p)
        n += 1
print('아이콘 5 크기 · 적응형 · 시작 화면', n, '개')

# iOS (npx cap add ios 다음): 1024 아이콘(투명 없이), 2732 시작 화면
IOS = os.path.join(ROOT, 'mobile', 'ios', 'App', 'App', 'Assets.xcassets')
if os.path.isdir(IOS):
    ic = src.resize((1024, 1024), Image.NEAREST)
    bg = Image.new('RGB', (1024, 1024), BG[:3]); bg.paste(ic, (0, 0), ic)
    bg.save(os.path.join(IOS, 'AppIcon.appiconset', 'AppIcon-512@2x.png'))
    for f in os.listdir(os.path.join(IOS, 'Splash.imageset')):
        if f.endswith('.png'):
            im = Image.new('RGB', (2732, 2732), BG[:3])
            s = 768
            im.paste(src.resize((s, s), Image.NEAREST), ((2732 - s) // 2, (2732 - s) // 2), src.resize((s, s), Image.NEAREST))
            im.save(os.path.join(IOS, 'Splash.imageset', f))
    print('iOS 아이콘·시작 화면')
