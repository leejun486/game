// 앱 스토어용 휴대폰 세로 스크린샷 (1080×1920, 터치 화면 그대로): node tools/phone_shots.cjs
//  게임 폴더에서 python3 -m http.server 8765 를 켜 두고 실행 → marketing/play/phone_*.png
let pw; try { pw = require('playwright'); } catch { pw = require('/opt/node22/lib/node_modules/playwright'); }
const OUT = require('path').join(__dirname, '..', 'marketing', 'play');
const SHOTS = [
  // [파일 이름, 직업 키, 준비, 기다릴 초, 찍기 직전에 할 일]
  ['phone_1_palace', 'Digit1', (g) => { g.night = 1; g.nightTarget = 1; g.teleport(0, 6); const p = g.player.pos; for (const [t, dx, dz] of [['blue', -2, -3], ['red', 2, -4], ['blue', 3, -1], ['wisp', -3, 1], ['red', 0, -5]]) g.spawnEnemyAt(t, p.x + dx, p.z + dz); }, 6],
  ['phone_2_boss', 'Digit4', (g) => { g.teleport(-4, 584); g.spawnEnemy('noegong'); }, 14, (g) => { g.cine = null; document.getElementById('cine').className = ''; document.getElementById('app').classList.remove('cine-on'); }],
  ['phone_3_market', 'Digit3', (g) => { g.night = 1; g.nightTarget = 1; g.teleport(0, 486); const p = g.player.pos; for (const [t, dx, dz] of [['imp', -3, -3], ['gambler', 3, -2], ['tanuki', 0, -4], ['imp', 2, 2]]) g.spawnEnemyAt(t, p.x + dx, p.z + dz); }, 6],
  ['phone_4_menu', 'Digit2', (g) => { g.teleport(-7, 436); g.setAutoHunt(false); }, 3, (g) => g.hub.toggle(true)],
  ['phone_5_shop', 'Digit1', (g) => { g.teleport(0, 6); g.setAutoHunt(false); g.ext.coins = 4280; g.mats = { scrollW: 6, scrollA: 3, scrollG: 4, bless: 1, soul: 2, dust: 37 }; }, 3, (g) => { g.togglePause(true); g.pausePane('shop'); }],
];
(async () => {
  const browser = await pw.chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const [name, key, setup, wait, post] of SHOTS) {
    const ctx = await browser.newContext({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true });
    const page = await ctx.newPage(); page.setDefaultTimeout(300000);
    page.on('pageerror', (e) => console.log('ERR', e.message));
    await page.goto('http://localhost:8765/index.html');
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', quality: 'high', tips: false, autoQ: false, vol: { master: 0, music: 0, sfx: 0, amb: 0 } })); });
    await page.reload(); await page.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 180000 });
    await page.keyboard.press(key); await page.waitForTimeout(300);
    await page.tap('#btn-new'); await page.waitForTimeout(800);
    await page.evaluate((src) => {
      const g = window.game; if (g.story) g.endStory(); g.cut?.skip(); g.flags.tut = 1; g.coach.finish(true); g.godMode = true;
      for (const k of Object.keys(g.world.gates)) g.world.setGate(k, true, true);
      const p = g.player; p.level = 24; p.recalc(); p.hp = p.maxHp; g.ui.setClass(p.cfg, p); g.quest.step = 30; g.updateQuest();
      for (const k of ['boss', 'gumiho', 'reaper', 'imugi', 'bulgasari']) g.stats.killsBy[k] = 1;
      g.ext.pet = 'wisp'; g.setAutoHunt(true);
      (0, eval)(`(${src})`)(g);
    }, setup.toString());
    await page.waitForTimeout(wait * 1000);
    await page.evaluate((src) => {
      const g = window.game;
      if (src) (0, eval)(`(${src})`)(g);
      for (const id of ['toast', 'coach', 'banner']) { const el = document.getElementById(id); el.classList.remove('show'); el.style.opacity = '0'; }
    }, post ? post.toString() : null);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${OUT}/${name}.png` });
    console.log('shot', name);
    await ctx.close();
  }
  await browser.close();
})();
