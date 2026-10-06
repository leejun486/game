// 키 아트: 네 영웅 + 보스, 화면 글자 없음 (게임 서버를 8765에 띄운 뒤)
// node tools/key_art.cjs '{"at":[-2,8],"zoom":3.2,"yaw":0,"night":1,"boss":"boss","bossDz":4,"out":"key.png","w":1920,"h":1080,"scale":1}'
//
// marketing/keyart 의 세 장 (png로 찍은 뒤 jpg 92로 저장):
//  land     '{"at":[-6.6,2.2],"zoom":6.4,"pitch":30,"yaw":0.1,"night":0.6,"boss":"boss","bossDz":-3.6,"bossDx":2.2,"mobs":[["blue",-0.4,-2.6],["red",4.8,-2.8],["wisp",1,-5],["wisp",3.8,-5.5],["blue",5.6,-1.6]],"offs":[[1.45,0.15],[2.9,0.2],[4.3,0.1]],"fdx":0.5,"fdz":-1.6,"scale":2,"out":"land.png"}'
//  portrait '{"at":[-6,2],"zoom":5.4,"pitch":30,"yaw":0.1,"night":0.6,"boss":"boss","bossDz":-3.6,"bossDx":0.6,"mobs":[["blue",-2.4,-2.6],["red",3.6,-2.8],["wisp",-1,-5],["wisp",2.4,-5.5],["blue",5,-1.2]],"fdx":1.5,"fdz":-3.4,"w":1000,"h":1300,"scale":2,"out":"portrait.png"}'
//  wide     '{"at":[-6,2],"zoom":5,"pitch":30,"yaw":0.1,"night":0.6,"boss":"boss","bossDz":-3.6,"bossDx":0.6,"mobs":[["blue",-2.4,-2.6],["red",3.6,-2.8],["wisp",-1,-5],["wisp",2.4,-5.5],["blue",5,-1.2]],"fdx":0.9,"fdz":-1.8,"w":1920,"h":620,"scale":2,"out":"wide.png"}'
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const S = JSON.parse(process.argv[2]);
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: S.w || 1920, height: S.h || 1080 }, deviceScaleFactor: S.scale || 1 }); page.setDefaultTimeout(300000);
  page.on('pageerror', (e) => console.log('ERR', e.message));
  await page.goto('http://localhost:8765/index.html');
  await page.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', tips: false, quality: 'high', autoQ: false })); });
  await page.reload(); await page.waitForTimeout(3000);
  await page.click('#btn-new'); await page.waitForTimeout(800); await page.keyboard.press('Escape'); await page.waitForTimeout(300);
  const info = await page.evaluate((S) => {
    const g = game, p = g.player; g.ui.inDialog && g.ui.advance(); g.flags.tut = 1; g.coach.step = -1; g.coach.hide();
    document.body.classList.add('shot');
    for (const id of ['ot8', 'ot11', 'ot6', 'ot12', 'otB2', 'otB3', 'otB8', 'otB10', 'swB1', 'mg3', 'bw3', 'sp3']) g.inv.add(id);
    const OUT = S.outfits || { sword: 'ot8', mage: 'ot11', elf: 'ot6', lancer: 'ot12' };
    for (const [c, o] of Object.entries(OUT)) g.progressOf(c).outfit = o;
    p.buildRig();
    g.cleared = { palace: true, bamboo: true, temple: true, swamp: true, canyon: true, fortress: true, sea: true, valley: true, snowfield: true }; g.quest.step = 46; g.updateGates(true);
    g.teleport(S.at[0], S.at[1]);
    g.nightTarget = g.night = S.night || 0;
    for (const e of g.enemies) e.dispose(); g.enemies = [];
    const idle = { mx: 0, mz: 0, moveLen: 0 };
    const st = (k) => { for (let f = 0; f < k; f++) { g.time += 1 / 60; g.simulate(1 / 60, idle); if (g.cine) g.updateCine(1 / 60); g.fx.update(1 / 60); } };
    // 다른 세 직업은 리그만 세움
    const others = ['mage', 'elf', 'lancer'].filter((c) => c !== p.cls);
    const offs = S.offs || [[-1.7, 0.5], [1.7, 0.5], [3.3, 1.1]];
    window.__extra = others.map((c, i) => {
      const r = g.heroRig(c); const [dx, dz] = offs[i];
      r.root.position.set(p.pos.x + dx, g.world.heightAt(p.pos.x + dx, p.pos.z + dz), p.pos.z + dz);
      r.root.rotation.y = S.yaw + (S.yawOff?.[i] || 0); g.scene.add(r.root); return r;
    });
    p.yaw = S.yaw + (S.pyaw || 0);
    if (S.boss) {
      const B = g.spawnEnemyAt(S.boss, p.pos.x + (S.bossDx || 0), p.pos.z + S.bossDz); B.field = true; B.aggro = false; B.entrance = null;
      g.cine = null; document.getElementById('cine').className = ''; g.ui.setBoss(null);
      window.__B = B;
    }
    for (const t of (S.mobs || [])) { const [type, dx, dz] = t; const e = g.spawnEnemyAt(type, p.pos.x + dx, p.pos.z + dz); e.field = true; e.aggro = false; }
    st(30);
    for (const e of g.enemies) { e.pos.x = e.spawnX ?? e.pos.x; e.state = 'idle'; e.attackCd = 99; e.aggro = false; e.yaw = S.byaw ?? (S.yaw + Math.PI * 0); }
    for (let f = 0; f < 60; f++) { for (const r of window.__extra) r.animate(1 / 60, { speed: 0 }); }
    if (window.__B) { window.__B.yaw = S.byaw ?? S.yaw; window.__B.root && (window.__B.root.rotation.y = window.__B.yaw); }
    for (const n of document.querySelectorAll('#numbers > *')) n.remove();
    if (S.pitch) g.pixel.pitch = S.pitch * Math.PI / 180; g.pixel.userZoom = S.zoom; g.pixel.resize(); g.focus.set(p.pos.x + (S.fdx || 0), 0.8, p.pos.z + (S.fdz || 0)); g.hitstop = 1000;
    return { p: [p.pos.x, p.pos.z] };
  }, S).catch((e) => console.log('eval', e.message));
  console.log(JSON.stringify(info));
  await page.waitForTimeout(4000);
  await page.screenshot({ path: S.out, type: S.out.endsWith('jpg') ? 'jpeg' : 'png', ...(S.out.endsWith('jpg') ? { quality: 92 } : {}) });
  await browser.close();
})();
