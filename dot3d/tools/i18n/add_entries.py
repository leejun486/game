# 새 문장 추가: (한국어, 영어, 일본어, 중국어) 묶음을 en_ui.js 사전 끝에 넣고, ja/zh 번역 줄도 같은 줄 번호로 붙인 뒤 다시 만듦
#  python3 tools/i18n/add_entries.py entries.json
import json, os, subprocess, sys
root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
rows = json.load(open(sys.argv[1], encoding='utf8'))
en_path = os.path.join(root, 'src/lang/en_ui.js')
lines = open(en_path, encoding='utf8').read().split('\n')
end = lines.index('};')  # 사전(dict)의 끝
q = lambda s: "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"
new_en, ja, zh = [], [], []
for k, (ko, en, j, z) in enumerate(rows):
    new_en.append(f'  {q(ko)}: {q(en)},')
    ln = end + 1 + k
    ja.append(f'{ln}|{j}'); zh.append(f'{ln}|{z}')
lines[end:end] = new_en
open(en_path, 'w', encoding='utf8').write('\n'.join(lines))
for lang, add in (('ja', ja), ('zh', zh)):
    p = os.path.join(root, 'tools/i18n', f'{lang}_ui.txt')
    t = open(p, encoding='utf8').read().rstrip('\n') + '\n' + '\n'.join(add) + '\n'
    open(p, 'w', encoding='utf8').write(t)
    subprocess.run(['node', os.path.join(root, 'tools/i18n/build_lang.cjs'), lang, 'ui'], check=True)
print('added', len(rows))
