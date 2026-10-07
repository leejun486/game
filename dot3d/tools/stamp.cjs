// 빌드한 뒤 index.html의 스크립트·스타일 주소에 내용 해시를 붙임 (?v=…)
//  같은 주소면 브라우저·앱이 예전 파일을 그대로 써서, 고친 버전이 안 보이는 일이 있었음
//  node tools/stamp.cjs  (npm run build 가 함께 부름)
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const root = path.join(__dirname, '..');
const hash = (f) => crypto.createHash('sha1').update(fs.readFileSync(path.join(root, f))).digest('hex').slice(0, 10);
const p = path.join(root, 'index.html');
let html = fs.readFileSync(p, 'utf8');
for (const f of ['dist/game.js', 'style.css']) {
  const re = new RegExp(`(["'])${f.replace(/[./]/g, (c) => '\\' + c)}(\\?v=[0-9a-f]+)?\\1`, 'g');
  html = html.replace(re, `$1${f}?v=${hash(f)}$1`);
}
fs.writeFileSync(p, html);
console.log('stamped', hash('dist/game.js'), hash('style.css'));
