#!/usr/bin/env python3
"""스팀웍스 업적 등록 자료 만들기
 - STEAM_ACHIEVEMENTS.md: API 이름 · 한국어/영어/일본어/중국어(간체) 이름과 설명 표 (스팀웍스 '업적' 화면에 그대로 옮겨 적음)
 - marketing/achievements/*.png: 64x64 아이콘 (달성 / 미달성 회색) — tools/steam_icons.cjs가 브라우저로 그림
API 이름은 src/records.js의 steamName()과 같아야 함: ACH_<id 대문자>"""
import os, re, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(ROOT, 'src', 'records.js'), encoding='utf-8').read()
block = src[src.index('export const ACHIEVEMENTS'):]
block = block[:block.index('\n];')]
items = re.findall(r"\{ id: '([^']*)', name: '([^']*)', desc: '([^']*)'", block)

# 언어별: 번역 사전(src/lang/<언어>_*.js)에서 '한국어': '번역' 짝을 찾음
def load(lang):
    m = {}
    for f in sorted(os.listdir(os.path.join(ROOT, 'src', 'lang'))):
        if not f.startswith(lang + '_'): continue
        t = open(os.path.join(ROOT, 'src', 'lang', f), encoding='utf-8').read()
        for k, v in re.findall(r"'((?:[^'\\]|\\.)*)':\s*'((?:[^'\\]|\\.)*)'", t):
            m.setdefault(k.replace("\\'", "'"), v.replace("\\'", "'"))
        for k, v in re.findall(r"'((?:[^'\\]|\\.)*)':\s*\"((?:[^\"\\]|\\.)*)\"", t):
            m.setdefault(k.replace("\\'", "'"), v)
    return m
LANGS = {'en': load('en'), 'ja': load('ja'), 'zh': load('zh')}

rows, data, missing = [], [], []
for i, n, d in items:
    api = 'ACH_' + i.upper()
    row = {'api': api, 'id': i, 'ko': n, 'koDesc': d}
    for L, m in LANGS.items():
        row[L], row[L + 'Desc'] = m.get(n, ''), m.get(d, '')
        if not row[L] or not row[L + 'Desc']: missing.append(f'{i}:{L}')
    rows.append(f"| `{api}` | {n} | {d} | {row['en']} | {row['enDesc']} | {row['ja']} | {row['jaDesc']} | {row['zh']} | {row['zhDesc']} |")
    data.append(row)

out = os.path.join(ROOT, 'STEAM_ACHIEVEMENTS.md')
with open(out, 'w', encoding='utf-8') as fp:
    fp.write('# 스팀 업적 등록표\n\n')
    fp.write('`python3 tools/steam_achievements.py`로 만든 표입니다 (손으로 고치지 말 것).\n')
    fp.write('스팀웍스 → 앱 관리 → 통계 및 업적 → 업적에서 **API 이름**을 그대로 쓰고, 언어마다 이름과 설명을 넣습니다.\n')
    fp.write('아이콘: `marketing/achievements/<API 이름>.png` (달성), `<API 이름>_locked.png` (미달성). 모두 64×64.\n\n')
    fp.write(f'업적 {len(items)}개\n\n')
    fp.write('| API 이름 | 이름 | 설명 | Name | Description | 名前 (日本語) | 説明 | 名称 (简体中文) | 说明 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n')
    fp.write('\n'.join(rows) + '\n')
json.dump(data, open(os.path.join(ROOT, 'tools', 'steam_achievements.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(out, len(items), '개', '번역 없음:', missing)
