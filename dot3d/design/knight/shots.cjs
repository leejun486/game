// 기사 그림 캐릭터를 실제 게임에서 찍기: 기본·가까이(8방향, 달리기 그림)·휴대폰·밤 + 움직이는 장면(연속 사진)
const H = require('/home/user/game/dot3d/tests/harness.cjs');
const out = process.argv[3] || __dirname;
const only = process.argv[2];
(async () => {
  const srv = await H.startServer(); const base = `http://127.0.0.1:${srv.address().port}`;
  const browser = await H.chromium().launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const setup = async (vw, vh, touch) => {
    const page = await browser.newPage({ viewport: { width: vw, height: vh }, hasTouch: touch, isMobile: touch }); page.setDefaultTimeout(300000);
    page.on('pageerror', (e) => console.log('ERR', e.message));
    await page.goto(base + '/index.html');
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', tips: false, quality: 'high' })); });
    await page.reload(); await page.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 200000 });
    await page.evaluate(() => document.getElementById('btn-new').click()); await page.waitForTimeout(800);
    await page.evaluate(async () => {
      const g = window.game, p = g.player; if (g.story) g.endStory(); g.cut?.skip(); g.flags.tut = 1; g.coach.finish?.(true); g.godMode = true;
      g.teleport(-2, 8); g.nightTarget = 0; g.night = 0;
      for (const e of g.enemies) e.dispose(); g.enemies = []; g.spawnQueue = [];
      for (const t of ['blue', 'red', 'blue']) g.spawnEnemy(t);
      const idle = { mx: 0, mz: 0, moveLen: 0 };
      for (let f = 0; f < 120; f++) { g.time += 1 / 60; g.simulate(1 / 60, idle); }
      g.enemies.forEach((e, i) => { const a = i * 0.9 - 0.9; e.pos.set(p.pos.x + Math.sin(a) * 2.6 + 1.2, e.pos.y, p.pos.z - 1.6 + Math.cos(a) * 0.4); e.state = 'idle'; e.frozenT = 999; });
      p.yaw = 0;
      for (let f = 0; f < 5; f++) { g.time += 1 / 60; g.simulate(1 / 60, idle); }
      await p.sprite.sheet.promise;
      for (let f = 0; f < 3; f++) { g.time += 1 / 60; g.simulate(1 / 60, idle); }
      document.body.classList.add('shot');
    });
    return page;
  };
  const still = async (page, name, fn, arg) => {
    await page.evaluate(fn, arg);
    await page.waitForTimeout(1800);
    await page.screenshot({ path: `${out}/${name}.jpg`, type: 'jpeg', quality: 90 }); console.log('saved', name);
  };
  const focus = (zoom) => { const g = window.game, p = g.player; g.pixel.userZoom = zoom; g.pixel.resize(); g.focus.set(p.pos.x, 0.8, p.pos.z + 0.6); g.hitstop = 1000; };

  if (!only || only === 'still') {
    const page = await setup(1280, 720, false);
    await still(page, 'k_default', focus, 0);
    // 가까이: 8방향 서 있기 (위 줄) + 달리기 그림 (아래 두 줄)
    await still(page, 'k_dirs', () => {
      const g = window.game, p = g.player, S = p.sprite.constructor, def = p.sprite.def;
      for (const e of g.enemies) e.pos.x += 40;
      const mk = (x, z, yaw, opt) => { const b = new S(g.scene, def); b.update(0.016, Object.assign({ pos: { x, y: g.world.heightAt(x, z), z }, yaw, speed: 0, attack: null, dash: false, hurt: 0, dead: false, visible: true, flash: 0, night: 0, pitch: g.pixel.pitch }, opt)); return b; };
      p.rig.root.visible = false; p.sprite.group.visible = false;
      const cx = p.pos.x, cz = p.pos.z + 0.4;
      for (let i = 0; i < 8; i++) mk(cx + (i - 3.5) * 1.35, cz - 1.6, i * Math.PI / 4);
      g.pixel.userZoom = 2; g.pixel.resize(); g.focus.set(cx, 0.8, cz); g.hitstop = 1000;
    });
    await page.close();
  }
  if (!only || only === 'night') {
    const page = await setup(1280, 720, false);
    await still(page, 'k_night', () => { const g = window.game; g.nightTarget = 1; g.night = 1; const p = g.player; g.pixel.userZoom = 2; g.pixel.resize(); g.focus.set(p.pos.x, 0.8, p.pos.z + 0.6); g.hitstop = 1000; });
    await page.close();
  }
  if (!only || only === 'mobile') {
    const page = await setup(390, 844, true);
    await still(page, 'k_mobile', focus, 0);
    await page.close();
  }
  if (!only || only === 'anim') {
    // 움직이는 장면: 오른쪽 → 아래 → 왼쪽 → 위로 달리고, 도깨비 쪽으로 세 번 베기
    const page = await setup(960, 540, false);
    await page.evaluate(() => { const g = window.game; g.pixel.userZoom = 2; g.pixel.resize(); });
    const plan = [];
    const dirs = [[1, 0], [0.7, 0.7], [0, 1], [-0.7, 0.7], [-1, 0], [-0.7, -0.7], [0, -1], [0.7, -0.7]];
    for (const [x, z] of dirs) for (let i = 0; i < 6; i++) plan.push({ mx: x, mz: z, moveLen: 1 });
    for (let i = 0; i < 6; i++) plan.push({ mx: 0, mz: 0, moveLen: 0 });
    for (let k = 0; k < 3; k++) { plan.push({ mx: 0, mz: 0, moveLen: 0, atk: 1 }); for (let i = 0; i < 6; i++) plan.push({ mx: 0, mz: 0, moveLen: 0 }); }
    let n = 0; const pos = [];
    for (const inp of plan) {
      await page.evaluate((inp) => {
        const g = window.game, p = g.player;
        g.hitstop = 0;
        if (inp.atk) { g.target = g.enemies.find((e) => !e.dead) || null; p.startAttack(inp); }
        for (let f = 0; f < 4; f++) { g.time += 1 / 60; g.simulate(1 / 60, inp); }
        g.focus.set(p.pos.x, 0.8, p.pos.z + 0.6); g.hitstop = 1000;
      }, inp);
      await page.waitForTimeout(120);
      const sp = await page.evaluate(() => { const g = window.game, v = g.player.sprite.group.position.clone(); v.y += 0.9; v.project(g.pixel.camera); return [Math.round((v.x + 1) / 2 * innerWidth), Math.round((1 - v.y) / 2 * innerHeight)]; });
      pos.push(sp);
      await page.screenshot({ path: `${out}/anim_${String(n++).padStart(3, '0')}.jpg`, type: 'jpeg', quality: 85 });
    }
    console.log('anim frames', n); require('fs').writeFileSync(`${out}/anim_pos.json`, JSON.stringify(pos));
    await page.close();
  }
  await browser.close(); srv.close();
})();
