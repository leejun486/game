# 제목·배너용 명조체: Noto Serif KR/JP/SC 900 (OFL)을 Google Fonts에서 받아 게임에 쓰인 글자만 뽑아 fonts/serif-*.woff2 로 저장
#  (인터넷 없이 켜도 제목 '월하궁'과 배너가 같은 글꼴로 나오도록)
#  python3 tools/i18n/serif_font.py [작업 폴더]   — 글이 바뀌면 다시 돌림
import glob, os, re, sys, subprocess
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.merge import Merger

root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
work = sys.argv[1] if len(sys.argv) > 1 else os.path.join(root, 'fonts', '_serif_work')
os.makedirs(work, exist_ok=True)
UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36'

def chars(paths):
    s = set()
    for p in paths: s |= set(open(p, encoding='utf8').read())
    return s

base = set(chr(c) for c in range(0x20, 0x7f)) | set('·—…!?「」『』《》“”‘’、。,:;()★☆◆▶')
need = {
    'KR': chars(glob.glob(os.path.join(root, 'src', '*.js')) + [os.path.join(root, 'index.html')] + glob.glob(os.path.join(root, 'src', 'lang', 'en_*.js'))) | base,
    'JP': chars(glob.glob(os.path.join(root, 'src', 'lang', 'ja_*.js'))) | base,
    'SC': chars(glob.glob(os.path.join(root, 'src', 'lang', 'zh_*.js'))) | base,
}
need['KR'] = set(c for c in need['KR'] if ord(c) < 0x2E80 or 0xAC00 <= ord(c) <= 0xD7A3 or ord(c) >= 0xFF00)

def ranges(s):
    out = []
    for part in s.split(','):
        part = part.strip().replace('U+', '')
        if '-' in part: a, b = part.split('-'); out.append((int(a, 16), int(b, 16)))
        else: out.append((int(part, 16), int(part, 16)))
    return out

covered = set()
for fam in ['KR', 'JP', 'SC']:
    css = subprocess.run(['curl', '-sS', '-m', '60', '-A', UA, f'https://fonts.googleapis.com/css2?family=Noto+Serif+{fam}:wght@900'], capture_output=True, text=True).stdout
    want = sorted(ord(c) for c in need[fam] if (fam == 'KR' or ord(c) not in covered))
    parts = []
    for i, (url, ur) in enumerate(re.findall(r'src: url\((\S+?)\).*?unicode-range: ([^;]+);', css, re.S)):
        rs = ranges(ur)
        hit = [c for c in want if any(a <= c <= b for a, b in rs)]
        if not hit: continue
        f = os.path.join(work, f'{fam}_{i}.woff2')
        if not os.path.exists(f): subprocess.run(['curl', '-sS', '-m', '60', '-o', f, url], check=True)
        t = TTFont(f)
        cm = t.getBestCmap()
        hit = [c for c in hit if c in cm]
        if not hit: continue
        o = subset.Options(); o.layout_features = ['*']; o.notdef_outline = True
        sb = subset.Subsetter(o); sb.populate(unicodes=hit); sb.subset(t)
        t.flavor = None
        out = f[:-6] + '.sub.ttf'; t.save(out); parts.append(out)
    if not parts: print(fam, 'nothing needed'); continue
    font = Merger().merge(parts) if len(parts) > 1 else TTFont(parts[0])
    font.flavor = 'woff2'
    dst = os.path.join(root, 'fonts', f'serif-{fam.lower()}.woff2')
    font.save(dst)
    cm = TTFont(dst).getBestCmap()
    covered |= set(cm)
    miss = [chr(c) for c in want if c not in cm and c > 0x2E7F]
    print(dst, os.path.getsize(dst), 'glyphs', len(cm), 'missing', ''.join(miss)[:60])
