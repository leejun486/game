// 번역 사전: 영어·일본어·중국어가 같은 원문(한국어 키)을 모두 덮는지, 패턴 수가 같은지,
// 중국어 도트 글꼴에 번역에 쓴 글자가 다 들어 있는지 (번역을 고치고 zh_font.py를 안 돌린 경우)
const path = require('path');
const { execFileSync } = require('child_process');
const { check, ROOT } = require('./harness.cjs');
const { pathToFileURL } = require('url');

const load = async (f) => import(pathToFileURL(path.join(ROOT, 'src/lang', f)).href);
const HANGUL = /[가-힣]/;

module.exports = {
  name: '번역 사전 (en/ja/zh 짝 맞춤 · 중국어 글꼴)',
  browser: false,
  async run(ctx) {
    process.removeAllListeners('warning'); // ESM 다시 읽기 경고 숨김
    const en = { data: (await load('en_data.js')).default, items: (await load('en_items.js')).default, ui: (await load('en_ui.js')).dict };
    const enPats = (await load('en_ui.js')).pats;
    for (const L of ['ja', 'zh']) {
      for (const part of ['data', 'items', 'ui']) {
        const D = (await load(`${L}_${part}.js`)).default;
        const miss = Object.keys(en[part]).filter((k) => !(k in D));
        check(!miss.length, `${L}_${part}: 번역 없는 원문 ${miss.length}개 — ${JSON.stringify(miss.slice(0, 5))}`);
        const empty = Object.entries(D).filter(([, v]) => !String(v).trim());
        check(!empty.length, `${L}_${part}: 빈 번역 ${JSON.stringify(empty.slice(0, 5).map(([k]) => k))}`);
        const ko = Object.entries(D).filter(([k, v]) => HANGUL.test(v) && v !== k); // 언어 이름 '한국어'처럼 원문 그대로인 것은 괜찮음
        check(!ko.length, `${L}_${part}: 한글이 남은 번역 ${JSON.stringify(ko.slice(0, 3))}`);
      }
      const P = (await load(`${L}_pats.js`)).default;
      check(P.length === enPats.length, `${L}_pats: 패턴 ${P.length}개, 영어는 ${enPats.length}개`);
      P.forEach(([re], i) => check(String(re) === String(enPats[i][0]), `${L}_pats ${i}번째 패턴 순서가 영어와 다름: ${re} / ${enPats[i][0]}`));
    }
    // 중국어 글꼴 (fontTools가 있을 때만)
    let have = null;
    try {
      have = execFileSync('python3', ['-c', `from fontTools.ttLib import TTFont\nprint(''.join(chr(c) for c in TTFont('${path.join(ROOT, 'fonts/fusion-zh.woff2')}').getBestCmap()))`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    } catch { ctx.log('fontTools 없음 — 중국어 글꼴 검사는 건너뜀'); }
    if (have) {
      const fs = require('fs');
      const used = new Set();
      for (const f of fs.readdirSync(path.join(ROOT, 'src/lang')).filter((f) => f.startsWith('zh_'))) for (const c of fs.readFileSync(path.join(ROOT, 'src/lang', f), 'utf8')) if (c.codePointAt(0) >= 0x3400 && c.codePointAt(0) <= 0x9fff) used.add(c);
      const lack = [...used].filter((c) => !have.includes(c));
      check(!lack.length, `중국어 글꼴에 없는 글자 ${lack.length}개: ${lack.slice(0, 20).join('')} — python3 tools/i18n/zh_font.py 다시 돌리기`);
    }
  },
};
