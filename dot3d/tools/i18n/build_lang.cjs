// 번역 조립: 영어 사전(src/lang/en_*.js)의 줄 순서에 맞춰 쓴 번역 줄(tools/i18n/<lang>_<part>.txt)을
// 한국어 원문 키와 짝지어 src/lang/<lang>_<part>.js 로 만듦.
//  번역 줄 형식: "<영어 파일의 줄 번호>|번역1 ‖ 번역2 ‖ …" (그 줄에 있는 항목 수와 같아야 함)
//  node tools/i18n/build_lang.cjs ja data
const fs = require('fs');
const path = require('path');
const [lang, part] = process.argv.slice(2);
const root = path.join(__dirname, '..', '..');
const enSrc = fs.readFileSync(path.join(root, 'src/lang', `en_${part}.js`), 'utf8').split('\n');
// 키와 값이 두 줄에 걸친 항목은 첫 줄 번호로 합침
for (let i = 0; i < enSrc.length - 1; i++) if (/:\s*$/.test(enSrc[i]) && !enSrc[i].trim().startsWith('//')) { enSrc[i] += ' ' + enSrc[i + 1].trim(); enSrc[i + 1] = ''; }
const tx = fs.readFileSync(path.join(__dirname, `${lang}_${part}.txt`), 'utf8').split('\n').filter((l) => /^\d+\|/.test(l));
const T = new Map(tx.map((l) => { const i = l.indexOf('|'); return [+l.slice(0, i), l.slice(i + 1).split(' ‖ ').map((s) => s.trim())]; }));
const out = [`// ${lang} 번역 (${part}) — tools/i18n/build_lang.cjs 로 만든 파일. 고칠 땐 tools/i18n/${lang}_${part}.txt 를 고치고 다시 만듦`, 'export default {'];
let n = 0, bad = 0;
const q = (s) => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
enSrc.forEach((line, i) => {
  const ln = i + 1;
  const t = line.trim();
  if (!t || t.startsWith('//') || t.startsWith('export') || t.startsWith('}') || t.startsWith('import') || t.startsWith('[')) return;
  let obj;
  try { obj = eval('({' + line + '})'); } catch { return; } // 패턴 줄 등은 건너뜀
  const keys = Object.keys(obj);
  if (!keys.length) return;
  const tr = T.get(ln);
  if (!tr) { console.error(`missing line ${ln}: ${keys.slice(0, 3).join(', ')}`); bad++; return; }
  if (tr.length !== keys.length) { console.error(`count mismatch line ${ln}: ${keys.length} keys vs ${tr.length} — ${line.slice(0, 80)}`); bad++; return; }
  out.push('  ' + keys.map((k, j) => `${q(k)}: ${q(tr[j])}`).join(', ') + ',');
  n += keys.length;
});
out.push('};', '');
if (bad) { console.error(`${bad} problem line(s); not written`); process.exit(1); }
fs.writeFileSync(path.join(root, 'src/lang', `${lang}_${part}.js`), out.join('\n'));
console.log(`${lang}_${part}.js: ${n} entries`);
