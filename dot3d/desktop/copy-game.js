// 게임 파일(빌드된 웹 버전)을 desktop/game 으로 복사. 먼저 상위 폴더에서 npm run build
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..');
const dst = path.join(__dirname, 'game');
fs.rmSync(dst, { recursive: true, force: true });
for (const f of ['index.html', 'style.css', 'icon.png', 'favicon.png', 'dist', 'audio', 'fonts']) {
  fs.cpSync(path.join(src, f), path.join(dst, f), { recursive: true });
}
console.log('게임 파일 복사 완료 →', dst);
