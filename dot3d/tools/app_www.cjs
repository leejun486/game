// 앱(Capacitor)에 넣을 웹판 파일을 mobile/www 로 모음 (npm run build 다음에)
//  sw.js는 넣지 않음 — 앱은 파일이 이미 기기 안에 있어 오프라인 저장이 필요 없음
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'mobile', 'www');
const FILES = ['index.html', 'style.css', 'icon.png', 'favicon.png'];
const DIRS = ['dist', 'audio', 'fonts', 'sprites'];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
let n = 0, bytes = 0;
const copy = (src, dst) => { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(src, dst); n++; bytes += fs.statSync(src).size; };
for (const f of FILES) copy(path.join(root, f), path.join(out, f));
const walk = (d) => {
  for (const e of fs.readdirSync(path.join(root, d), { withFileTypes: true })) {
    const rel = path.join(d, e.name);
    if (e.isDirectory()) walk(rel);
    else if (!e.name.endsWith('.map')) copy(path.join(root, rel), path.join(out, rel));
  }
};
for (const d of DIRS) walk(d);
// 앱에서는 매니페스트 링크가 필요 없음 (없는 파일을 찾지 않게)
const html = path.join(out, 'index.html');
fs.writeFileSync(html, fs.readFileSync(html, 'utf8').replace(/\n<link rel="manifest"[^>]*>/, ''));
console.log(`mobile/www: ${n}개 파일, ${(bytes / 1e6).toFixed(1)} MB`);
