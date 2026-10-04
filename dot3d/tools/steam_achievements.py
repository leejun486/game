#!/usr/bin/env python3
"""스팀웍스 업적 등록 자료 만들기
 - STEAM_ACHIEVEMENTS.md: API 이름 · 한국어/영어 이름과 설명 표 (스팀웍스 '업적' 화면에 그대로 옮겨 적음)
 - marketing/achievements/*.png: 64x64 아이콘 (달성 / 미달성 회색) — tools/steam_icons.cjs가 브라우저로 그림
API 이름은 src/records.js의 steamName()과 같아야 함: ACH_<id 대문자>"""
import os, re, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(ROOT, 'src', 'records.js'), encoding='utf-8').read()
block = src[src.index('export const ACHIEVEMENTS'):]
block = block[:block.index('\n];')]
items = re.findall(r"\{ id: '([^']*)', name: '([^']*)', desc: '([^']*)'", block)

# 영어: 번역 사전에서 '한국어': 'English' 짝을 찾음
en = {}
for f in os.listdir(os.path.join(ROOT, 'src', 'lang')):
    t = open(os.path.join(ROOT, 'src', 'lang', f), encoding='utf-8').read()
    for k, v in re.findall(r"'((?:[^'\\]|\\.)*)':\s*'((?:[^'\\]|\\.)*)'", t):
        en.setdefault(k.replace("\\'", "'"), v.replace("\\'", "'"))
    for k, v in re.findall(r"'((?:[^'\\]|\\.)*)':\s*\"((?:[^\"\\]|\\.)*)\"", t):
        en.setdefault(k.replace("\\'", "'"), v)

rows, data, missing = [], [], []
for i, n, d in items:
    api = 'ACH_' + i.upper()
    en_n, en_d = en.get(n, ''), en.get(d, '')
    if not en_n or not en_d: missing.append(i)
    rows.append(f'| `{api}` | {n} | {d} | {en_n} | {en_d} |')
    data.append({'api': api, 'id': i, 'ko': n, 'koDesc': d, 'en': en_n, 'enDesc': en_d})

out = os.path.join(ROOT, 'STEAM_ACHIEVEMENTS.md')
with open(out, 'w', encoding='utf-8') as fp:
    fp.write('# 스팀 업적 등록표\n\n')
    fp.write('`python3 tools/steam_achievements.py`로 만든 표입니다 (손으로 고치지 말 것).\n')
    fp.write('스팀웍스 → 앱 관리 → 통계 및 업적 → 업적에서 **API 이름**을 그대로 쓰고, 언어마다 이름과 설명을 넣습니다.\n')
    fp.write('아이콘: `marketing/achievements/<API 이름>.png` (달성), `<API 이름>_locked.png` (미달성). 모두 64×64.\n\n')
    fp.write(f'업적 {len(items)}개\n\n')
    fp.write('| API 이름 | 이름 | 설명 | Name | Description |\n| --- | --- | --- | --- | --- |\n')
    fp.write('\n'.join(rows) + '\n')
json.dump(data, open(os.path.join(ROOT, 'tools', 'steam_achievements.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(out, len(items), '개', '영어 없음:', missing)
