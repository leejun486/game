// scene.html 을 화면 없이 띄워 프레임을 한 장씩 찍고, 소리를 따로 렌더링해 MP4 로 합친다.
// 사용법: node render.js [--place place.json] [--out out.mp4] [--fps 24]
// 필요: Node + Playwright(Chromium), ffmpeg
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const placeFile = opt('place', null);
const out = path.resolve(opt('out', 'restaurant.mp4'));
const fps = Number(opt('fps', 24));

(async () => {
  const place = placeFile ? JSON.parse(fs.readFileSync(placeFile, 'utf8')) : null;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 720, height: 1280 } });
  page.on('pageerror', e => console.error('page error:', e.message));
  if (place) await page.addInitScript(p => { window.PLACE_OVERRIDE = p; }, place);
  await page.goto('file://' + path.join(__dirname, 'scene.html') + '?render=1');
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });
  const dur = await page.evaluate(() => window.__DUR);

  process.stdout.write('소리 렌더링… ');
  const wav = out.replace(/\.mp4$/i, '') + '.wav';
  fs.writeFileSync(wav, Buffer.from(await page.evaluate(() => window.__renderAudio()), 'base64'));
  console.log('완료');

  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    '-i', wav, '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p', '-r', String(fps),
    '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg 종료 코드 ' + c))));

  const total = Math.round(dur * fps);
  for (let i = 0; i < total; i++) {
    const url = await page.evaluate(t => { window.__frame(t); return window.__cv.toDataURL('image/jpeg', 0.93); }, i / fps);
    if (!ff.stdin.write(Buffer.from(url.slice(url.indexOf(',') + 1), 'base64'))) await new Promise(r => ff.stdin.once('drain', r));
    if (i % fps === 0) process.stdout.write(`\r프레임 ${i}/${total}`);
  }
  ff.stdin.end();
  await done;
  await browser.close();
  fs.unlinkSync(wav);
  console.log(`\r완성: ${out} (${dur}초, ${fps}fps)          `);
})().catch(e => { console.error(e); process.exit(1); });
