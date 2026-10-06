# 중국어(간체) 화면용 도트 글꼴: Fusion Pixel 12px (OFL) 에서 번역에 쓰인 글자만 뽑아 fonts/fusion-zh.woff2 로 저장
#  준비: npm pack @vp-tw/cjk-web-fonts-fusion-pixel-font  (압축을 풀어 package/ 폴더를 이 스크립트에 넘김)
#  python3 tools/i18n/zh_font.py <풀어 둔 package 폴더>
# 번역(src/lang/zh_*.js)을 고친 뒤에는 다시 돌려야 새 글자가 들어감. 한글은 갈무리 글꼴이 그대로 맡음.
import glob, sys, os
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.merge import Merger

pkg = sys.argv[1]
root = os.path.join(os.path.dirname(__file__), '..', '..')
used = set()
for p in glob.glob(os.path.join(root, 'src/lang/zh_*.js')):
    used |= set(c for c in open(p, encoding='utf8').read() if not 0xAC00 <= ord(c) <= 0xD7A3)
used |= set(chr(c) for c in range(0x20, 0x7f))
used |= set(',。:;!?()「」『』《》“”‘’—…、·・%+/×▲▼✔★☆◆▶←→↑↓ⅠⅡⅢⅣⅤ🌐')
cps = sorted(ord(c) for c in used)
parts = []
tmp = os.path.join(root, 'fonts', '_zh_parts')
os.makedirs(tmp, exist_ok=True)
for f in sorted(glob.glob(os.path.join(pkg, 'dist/12px/proportional/zh_hans/*.woff2'))):
    t = TTFont(f)
    cm = t.getBestCmap()
    have = [c for c in cps if c in cm]
    if not have or 'Hangul' in f:
        continue
    opt = subset.Options(); opt.layout_features = ['*']; opt.notdef_outline = True
    s = subset.Subsetter(opt); s.populate(unicodes=have); s.subset(t)
    t.flavor = None
    out = os.path.join(tmp, os.path.basename(f) + '.ttf'); t.save(out); parts.append(out)
font = Merger().merge(parts)
font.flavor = 'woff2'
dst = os.path.join(root, 'fonts', 'fusion-zh.woff2')
font.save(dst)
for p in parts: os.remove(p)
os.rmdir(tmp)
cm = TTFont(dst).getBestCmap()
miss = [chr(c) for c in cps if c not in cm and c > 0x2E7F]
print(dst, os.path.getsize(dst), 'bytes; missing CJK:', ''.join(miss) or 'none')
