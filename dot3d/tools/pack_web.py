#!/usr/bin/env python3
"""웹판 묶음: itch.io 같은 곳에 올릴 zip (index.html이 맨 위에 있어야 함). 먼저 npm run build.
결과: release/Wolhagung-web-<버전>.zip"""
import os, re, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ver = re.search(r"VERSION = '([^']+)'", open(os.path.join(ROOT, 'src', 'version.js'), encoding='utf-8').read()).group(1)
FILES = ['index.html', 'style.css', 'icon.png', 'favicon.png']
DIRS = ['dist', 'audio', 'fonts']

os.makedirs(os.path.join(ROOT, 'release'), exist_ok=True)
out = os.path.join(ROOT, 'release', f'Wolhagung-web-{ver}.zip')
n = 0
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in FILES:
        z.write(os.path.join(ROOT, f), f); n += 1
    for d in DIRS:
        for base, _, files in os.walk(os.path.join(ROOT, d)):
            for f in files:
                if f.endswith('.map'):
                    continue
                full = os.path.join(base, f)
                z.write(full, os.path.relpath(full, ROOT)); n += 1
print(f'{out} ({n}개 파일, {os.path.getsize(out) / 1e6:.1f} MB)')
