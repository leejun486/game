// 게임 파일(빌드된 웹 버전)을 desktop/game 으로 복사. 먼저 상위 폴더에서 npm run build
//  체험판: node copy-game.js demo (먼저 npm run build:demo) → dist-demo/game.js를 dist/game.js 자리에, game/DEMO 표시 파일
const fs = require('fs');
const path = require('path');
const demo = process.argv[2] === 'demo';
const src = path.join(__dirname, '..');
const dst = path.join(__dirname, 'game');
fs.rmSync(dst, { recursive: true, force: true });
for (const f of ['index.html', 'style.css', 'icon.png', 'favicon.png', 'dist', 'audio', 'fonts']) {
  fs.cpSync(path.join(src, f), path.join(dst, f), { recursive: true });
}
if (demo) {
  fs.copyFileSync(path.join(src, 'dist-demo', 'game.js'), path.join(dst, 'dist', 'game.js'));
  fs.writeFileSync(path.join(dst, 'DEMO'), 'demo\n');
}
console.log(`게임 파일 복사 완료${demo ? ' (체험판)' : ''} →`, dst);
