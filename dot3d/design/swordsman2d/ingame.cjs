// 2D 검객을 실제 게임 화면에 세워 보기 (게임 코드는 그대로, 시험용으로 판을 붙임)
const H = require('/home/user/game/dot3d/tests/harness.cjs');
const path = require('path');
(async () => {
  const out = __dirname;
  const srv = await H.startServer(); const base = `http://127.0.0.1:${srv.address().port}`;
  const browser = await H.chromium().launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const [name, zoom, vw, vh, touch] of [['play_default', 0, 1280, 720, false], ['play_close', 3, 1280, 720, false], ['play_mobile', 0, 390, 844, true]]) {
    const page = await browser.newPage({ viewport: { width: vw, height: vh }, hasTouch: touch, isMobile: touch }); page.setDefaultTimeout(300000);
    page.on('pageerror', (e) => console.log('ERR', e.message));
    await page.goto(base + '/index.html');
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', tips: false, quality: 'high' })); });
    await page.reload(); await page.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 200000 });
    await page.evaluate(() => document.getElementById('btn-new').click()); await page.waitForTimeout(800);
    await page.addScriptTag({ path: path.join(__dirname, 'sword2d.js') });
    await page.evaluate(async ([zoom]) => {
      const T = await import('/node_modules/three/build/three.module.js');
      const g = window.game, p = g.player; if (g.story) g.endStory(); g.cut?.skip(); g.flags.tut = 1; g.coach.finish?.(true); g.godMode = true;
      g.teleport(-2, 8); g.nightTarget = 0; g.night = 0;
      for (const e of g.enemies) e.dispose(); g.enemies = []; g.spawnQueue = [];
      for (const t of ['blue', 'red', 'blue']) g.spawnEnemy(t);
      const idle = { mx: 0, mz: 0, moveLen: 0 };
      for (let f = 0; f < 120; f++) { g.time += 1 / 60; g.simulate(1 / 60, idle); }
      g.enemies.forEach((e, i) => { const a = i * 0.9 - 0.9; e.pos.set(p.pos.x + Math.sin(a) * 2.6 + 1.2, e.pos.y, p.pos.z - 1.6 + Math.cos(a) * 0.4); e.state = 'idle'; });
      for (let f = 0; f < 5; f++) { g.time += 1 / 60; g.simulate(1 / 60, idle); }
      // 그림 → 텍스처
      const tex = async (inner, flip) => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -12 240 432" width="600" height="1080">${inner}</svg>`;
        const img = new Image(); img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); await img.decode();
        const cv = document.createElement('canvas'); cv.width = 600; cv.height = 1080;
        const c = cv.getContext('2d'); if (flip) { c.translate(600, 0); c.scale(-1, 1); } c.drawImage(img, 0, 0);
        const t = new T.CanvasTexture(cv); t.colorSpace = T.SRGBColorSpace; t.generateMipmaps = false; t.minFilter = T.LinearFilter; return t;
      };
      const pitch = g.pixel.pitch;
      const card = async (inner, x, z, flip) => {
        const h = 2.0, w = h * 240 / 432;
        const geo = new T.PlaneGeometry(w, h); geo.translate(0, h / 2 - h * (28 / 432), 0);
        const m = new T.Mesh(geo, new T.MeshBasicMaterial({ map: await tex(inner, flip), alphaTest: 0.5, transparent: false, toneMapped: false }));
        m.rotation.x = -pitch * 0.35; m.position.set(x, 0.02, z); m.userData.noOutline = true; m.renderOrder = 2;
        g.scene.add(m); return m;
      };
      p.rig.root.scale.setScalar(0.0001); p.rig.root.traverse((o) => { if (o.material) o.visible = false; });
      await card(SWORD2D.front('calm'), p.pos.x, p.pos.z, false);
      if (zoom >= 3) { await card(SWORD2D.side(), p.pos.x - 1.6, p.pos.z + 0.2, false); await card(SWORD2D.back(), p.pos.x + 1.6, p.pos.z + 0.2, false); }
      document.body.classList.add('shot');
      g.pixel.userZoom = zoom; g.pixel.resize(); g.focus.set(p.pos.x, 0.8, p.pos.z + 0.6); g.hitstop = 1000;
    }, [zoom]);
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `${out}/${name}.jpg`, type: 'jpeg', quality: 90 });
    console.log('saved', name);
    await page.close();
  }
  await browser.close(); srv.close();
})();
