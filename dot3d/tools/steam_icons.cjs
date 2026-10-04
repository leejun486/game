// 스팀 업적 아이콘 64x64 (달성 / 미달성) 그리기 — 브라우저(Playwright) 캔버스로 Galmuri 글꼴을 써서
// 먼저: python3 tools/steam_achievements.py, 게임 폴더에서 python3 -m http.server 8765
// 실행: node tools/steam_icons.cjs → marketing/achievements/
let pw; try { pw = require('playwright'); } catch { pw = require('/opt/node22/lib/node_modules/playwright'); }
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const list = JSON.parse(fs.readFileSync(path.join(__dirname, 'steam_achievements.json'), 'utf8'));
const OUT = path.join(ROOT, 'marketing', 'achievements');
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const browser = await pw.chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8765/index.html');
  const imgs = await page.evaluate(async (list) => {
    const f = new FontFace('G', 'url(fonts/Galmuri11-Bold.woff2)');
    await f.load(); document.fonts.add(f);
    // 종류별 바탕색: 보스(붉은), 처치(금), 연속·기술(푸른), 수집·도감(초록), 그 밖(보라)
    const tone = (id) => id.startsWith('b_') ? ['#5a1420', '#c83a3a'] : /^k\d|first/.test(id) ? ['#4a3410', '#d8a030'] : /combo|perfect|crit|dodge|skill|rank|evo|hit/.test(id) ? ['#10304a', '#3a8ad8'] : /codex|mon|item|gear|set|outfit|collect/.test(id) ? ['#123a20', '#3aa860'] : ['#2a1a40', '#8a5ad8'];
    const out = {};
    for (const A of list) for (const locked of [false, true]) {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const g = c.getContext('2d');
      const [d, l] = tone(A.id);
      const gr = g.createRadialGradient(32, 26, 4, 32, 32, 44); gr.addColorStop(0, l); gr.addColorStop(1, d);
      g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
      g.strokeStyle = '#1a1018'; g.lineWidth = 4; g.strokeRect(2, 2, 60, 60);
      g.strokeStyle = '#f0c860'; g.lineWidth = 2; g.strokeRect(5, 5, 54, 54);
      // 네 귀퉁이 장식
      g.fillStyle = '#f0c860'; for (const [x, y] of [[5, 5], [55, 5], [5, 55], [55, 55]]) g.fillRect(x, y, 4, 4);
      // 가운데 글자: 이름의 첫 글자 (보스는 '격', 처치 수는 숫자 느낌을 살려 첫 글자)
      const ch = A.ko.replace(/[^가-힣A-Za-z0-9]/g, '')[0] || '★';
      g.font = '34px G'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.lineWidth = 5; g.strokeStyle = '#140c14'; g.strokeText(ch, 32, 34);
      g.fillStyle = '#fff3c8'; g.fillText(ch, 32, 34);
      if (locked) {
        const im = g.getImageData(0, 0, 64, 64), p = im.data;
        for (let i = 0; i < p.length; i += 4) { const y = (p[i] * 0.3 + p[i + 1] * 0.59 + p[i + 2] * 0.11) * 0.55; p[i] = p[i + 1] = p[i + 2] = y; }
        g.putImageData(im, 0, 0);
      }
      out[A.api + (locked ? '_locked' : '')] = c.toDataURL('image/png');
    }
    return out;
  }, list);
  for (const [k, v] of Object.entries(imgs)) fs.writeFileSync(path.join(OUT, k + '.png'), Buffer.from(v.split(',')[1], 'base64'));
  console.log(Object.keys(imgs).length, '개 →', OUT);
  await browser.close();
})();
