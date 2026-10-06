// 테스트 공용 도구: 정적 서버, 브라우저, 게임 열기, 게임 시간 돌리기
//  화면 그리기는 헤드리스에서 아주 느리므로, 게임 로직은 simulate()를 직접 불러 게임 시간으로 돌림
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.json': 'application/json', '.wav': 'audio/wav' };

function startServer() {
  const srv = http.createServer((req, res) => {
    const u = decodeURIComponent(req.url.split('?')[0]);
    const f = path.join(ROOT, u === '/' ? 'index.html' : u);
    if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((ok) => srv.listen(0, '127.0.0.1', () => ok(srv)));
}

function chromium() {
  try { return require('playwright').chromium; } catch { /* 저장소에 안 깔렸으면 전역 설치본 */ }
  return require('/opt/node22/lib/node_modules/playwright').chromium;
}

class Failure extends Error {}
const check = (cond, msg) => { if (!cond) throw new Failure(msg); };

// 게임 페이지 하나: 언어·설정을 정하고 타이틀까지 띄움
async function openGame(ctx, { lang = 'ko', viewport = { width: 960, height: 540 }, settings = {}, blockExternal = true } = {}) {
  const page = await ctx.browser.newPage({ viewport });
  page.setDefaultTimeout(300000);
  const errors = [], external = [];
  page.on('pageerror', (e) => errors.push(e.message + ' @ ' + (e.stack || '').split('\n')[1]?.trim()));
  page.on('console', (m) => { if (m.type() === 'error' && !/favicon|AudioContext/.test(m.text())) errors.push('console: ' + m.text()); });
  await page.route('**/*', (r) => {
    const u = r.request().url();
    if (!u.startsWith(ctx.base)) { external.push(u); return blockExternal ? r.abort() : r.continue(); }
    r.continue();
  });
  await page.goto(ctx.base + '/index.html');
  await page.evaluate(([l, s]) => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: l, quality: 'low', tips: false, autoQ: false, ...s })); }, [lang, settings]);
  await page.reload();
  await page.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 60000 });
  await page.waitForTimeout(500);
  const g = {
    page, errors, external,
    eval: (fn, arg) => page.evaluate(fn, arg),
    // 게임 시간으로 sec초 (대화는 넘기고, 연출·격파 연출도 함께 돌림)
    step: (sec, { dt = 1 / 30, input = null } = {}) => page.evaluate(([sec, dt, input]) => {
      const g = window.game;
      for (let i = 0; i < Math.round(sec / dt); i++) {
        g.time += dt;
        if (g.ui.inDialog) g.ui.advance();
        let inp = input ? { ...input } : { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null };
        if (g.cut) inp = g.cut.update(dt);
        else if (!input) inp = g.autoControl(inp, dt);
        if (g.killCam) g.updateKillCam(dt);
        if (g.cine) g.updateCine(dt);
        g.simulate(dt, inp);
      }
    }, [sec, dt, input]),
    missing: () => page.evaluate(() => [...(window.__i18nMissing || [])]),
    // 새 게임: 프롤로그·첫 연출·튜토리얼을 건너뛰고 바로 조작할 수 있는 상태로
    newGame: async ({ god = true } = {}) => {
      await page.click('#btn-new');
      await page.waitForTimeout(400);
      await page.evaluate((god) => {
        const g = window.game;
        if (g.story) g.endStory();
        g.cut?.skip();
        g.flags.tut = 1; g.coach.finish(true);
        g.godMode = god;
      }, god);
      await g.step(0.5);
    },
    close: () => page.close(),
  };
  return g;
}

// 페이지 오류·빠진 번역이 없는지 (테스트 끝에 부름)
async function clean(g, { i18n = true } = {}) {
  check(!g.errors.length, '페이지 오류:\n  ' + g.errors.slice(0, 5).join('\n  '));
  if (i18n) { const m = await g.missing(); check(!m.length, '번역 빠짐: ' + JSON.stringify(m.slice(0, 10))); }
}

module.exports = { startServer, chromium, openGame, check, clean, Failure, ROOT };
