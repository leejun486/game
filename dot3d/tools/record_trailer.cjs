// 트레일러 프레임 녹화: 게임 시간을 1/30초씩 직접 진행하며 매 프레임 캡처 (1280x720 JPEG)
// 사용: 게임 폴더에서 python3 -m http.server 8765 를 켜 두고
//   OUT=/tmp/frames/ node tools/record_trailer.cjs [sword|elf|mage|lancer|title]  (인자 없으면 전부)
//   그다음 tools/make_trailer.sh /tmp/frames
// 장면은 폴더 이름(a_ … l_) 순서로 이어 붙음. 장면 목록은 아래 SEGS
let pw; try { pw = require('playwright'); } catch { pw = require('/opt/node22/lib/node_modules/playwright'); }
const { chromium } = pw;
const fs = require('fs');
const OUT = process.env.OUT || '/tmp/wolhagung-trailer/';
const W = 1280, H = 720;
// [이름, 직업 키, 장면 준비(페이지 안에서 실행), 프레임 수]
const SEGS = {
  sword: [
    ['b_palace', (g) => { g.night = 1; g.nightTarget = 1; g.teleport(0, 6); for (const [t, dx, dz] of [['blue', -3, -3], ['red', 2, -4], ['blue', 4, -1], ['wisp', -4, 1], ['blue', 0, -5], ['red', -2, 3]]) g.spawnEnemyAt(t, dx, 6 + dz); }, 150],
    ['c_kingdrop', (g) => { g.night = 1; g.nightTarget = 1; for (const e of g.enemies) e.dispose(); g.enemies = []; g.teleport(0, 6); g.spawnEnemy('boss'); }, 150],
    ['g_baekho', (g) => { g.night = 0; g.nightTarget = 0; for (const e of g.enemies) e.dispose(); g.enemies = []; g.teleport(0, 240); g.spawnEnemy('baekho'); }, 120],
  ],
  elf: [
    ['d_bamboo', (g) => { g.teleport(0, 52); for (const [t, dx, dz] of [['fox', -3, -4], ['fox', 3, -4], ['foxfire', 0, -6], ['fox', 4, 1], ['foxfire', -4, 2]]) g.spawnEnemyAt(t, dx, 52 + dz); }, 120],
    ['h_dragon', (g) => { for (const e of g.enemies) e.dispose(); g.enemies = []; g.teleport(0, 292); g.spawnEnemy('dragon'); }, 120],
  ],
  mage: [
    ['e_temple', (g) => { g.night = 0; g.nightTarget = 0; g.teleport(0, 100); for (const [t, dx, dz] of [['jiangshi', -3, -4], ['ghost', 3, -4], ['jiangshi', 0, -6], ['ghost', 4, 1], ['jiangshi', -4, 2]]) g.spawnEnemyAt(t, dx, 100 + dz); }, 120],
    ['j_frost', (g) => { g.night = 0; g.nightTarget = 0; for (const e of g.enemies) e.dispose(); g.enemies = []; g.teleport(0, 390); g.spawnEnemy('frostgiant'); }, 150],
    ['k_kill', (g) => { const b = g.enemies.find((e) => e.isBoss && !e.dead); if (b) g.damageEnemy(b, b.hp + 10, true, 0, 0); }, 100],
  ],
  lancer: [
    ['f_imugi', (g) => { g.teleport(1, 147); g.spawnEnemy('imugi'); }, 120],
    ['i_valley', (g) => { for (const e of g.enemies) e.dispose(); g.enemies = []; g.teleport(4, 340); for (const [t, dx, dz] of [['boar', -3, -4], ['bee', 3, -4], ['mantis', 0, -6], ['bee', 4, 1]]) g.spawnEnemyAt(t, dx, 340 + dz); }, 100],
  ],
};
const KEYS = { sword: 'Digit1', mage: 'Digit2', elf: 'Digit3', lancer: 'Digit4' };
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const only = process.argv[2];
  for (const cls of Object.keys(SEGS)) {
    if (only && only !== cls && only !== 'title') continue;
    if (only === 'title') break;
    const ctx = await browser.newContext({ viewport: { width: W, height: H } });
    const page = await ctx.newPage(); page.setDefaultTimeout(300000);
    page.on('pageerror', (e) => console.log('ERR', e.message));
    await page.goto('http://localhost:8765/index.html');
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', quality: 'high', tips: false, autoQ: false, vol: { master: 0, music: 0, sfx: 0, amb: 0 } })); });
    await page.reload(); await page.waitForTimeout(4000);
    await page.keyboard.press(KEYS[cls]); await page.waitForTimeout(300);
    await page.click('#btn-new'); await page.waitForTimeout(800); await page.keyboard.press('Escape'); await page.waitForTimeout(500);
    await page.addStyleTag({ content: '#hud,#toast,#coach,#prompt,#ach-pop,#savemark,#banner,#minimap,#touch{display:none!important}' });
    // 수동 프레임 진행으로 전환
    await page.evaluate(() => {
      window.__rafs = []; window.__t = performance.now();
      window.requestAnimationFrame = (f) => { window.__rafs.push(f); return 1; };
      const g = game; g.coach.finish(true); g.godMode = true;
      for (const k of Object.keys(g.world.gates)) g.world.setGate(k, true, true);
      const p = g.player; p.level = 30; p.maxHp = 2000; p.hp = 2000;
      g.setAutoHunt(true);
    });
    const step = async (n, dir) => {
      for (let i = 0; i < n; i++) {
        await page.evaluate(() => { window.__t += 1000 / 30; const fs = window.__rafs.splice(0).filter((f) => f !== game.loop); for (const f of fs) f(window.__t); game.loop(window.__t); });
        if (dir) await page.screenshot({ path: `${dir}/f_${String(i).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 92 });
      }
    };
    // 무거운 첫 렌더(셰이더 준비)가 녹화에 섞이지 않게 먼저 몇 프레임 진행
    await step(30, null);
    const pick = process.env.SEG ? process.env.SEG.split(',') : null;
    for (const [name, setup, frames] of SEGS[cls]) {
      if (pick && !pick.includes(name)) continue;
      const dir = OUT + name; fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
      // 앞 장면의 보스 소개(레터박스·카메라)가 남지 않게
      if (name !== 'k_kill') await page.evaluate(() => { const g = game; g.cine = null; g.killCam = null; document.getElementById('cine').className = ''; document.getElementById('app').classList.remove('cine-on'); document.body.classList.remove('killcam'); });
      await page.evaluate(`(${setup.toString()})(game); game.setAutoHunt(true);`);
      await step(name === 'k_kill' ? 2 : 24, null); // 자리 잡기
      await step(frames, dir);
      console.log('seg', name, frames);
    }
    await ctx.close();
  }
  // 제목 화면 (처음과 끝)
  if (!only || only === 'title') {
    const ctx = await browser.newContext({ viewport: { width: W, height: H } });
    const page = await ctx.newPage(); page.setDefaultTimeout(300000);
    await page.goto('http://localhost:8765/index.html');
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', quality: 'high', tips: false, autoQ: false })); });
    await page.reload(); await page.waitForTimeout(4000);
    await page.evaluate(() => { window.__rafs = []; window.__t = performance.now(); window.requestAnimationFrame = (f) => { window.__rafs.push(f); return 1; }; });
    // 첫 장면: 선택 화면 대신 로고만 크게
    await page.addStyleTag({ content: '#select,#title .title-btns,#title .press,#title-save,#title .credit,#title .hint,#title .corner,#title button{visibility:hidden!important} #title .logo-big{transform:scale(1.25)}' });
    for (const [name, frames] of [['a_title', 90], ['l_end', 120]]) {
      const dir = OUT + name; fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
      if (name === 'l_end') await page.evaluate(() => { document.querySelector('#title .logo-big').insertAdjacentHTML('beforeend', '<div style="margin-top:28px;font-size:26px;color:#ffe9a8;letter-spacing:6px;text-shadow:2px 2px 0 #000">Steam 찜하기</div><div style="margin-top:10px;font-size:16px;color:#d8cfb8;letter-spacing:3px;text-shadow:1px 1px 0 #000">네 직업 · 열 개의 지역 · 열 마리의 보스</div>'); });
      for (let i = 0; i < frames; i++) {
        await page.evaluate(() => { window.__t += 1000 / 30; const fs = window.__rafs.splice(0).filter((f) => f !== game.loop); for (const f of fs) f(window.__t); game.loop(window.__t); });
        await page.screenshot({ path: `${dir}/f_${String(i).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 92 });
      }
      console.log('seg', name);
    }
    await ctx.close();
  }
  await browser.close();
})();
