// 휴대폰: 터치 조작(가상 스틱 이동, 공격 단추 누르고 있기)과 작은 화면 배치(일시정지 메뉴가 잘리지 않는지, 알림이 터치 단추에 가리지 않는지)
const { check } = require('./harness.cjs');

async function phone(ctx, w, h) {
  const c = await ctx.browser.newContext({ viewport: { width: w, height: h }, hasTouch: true, isMobile: true });
  const p = await c.newPage(); p.setDefaultTimeout(300000);
  const errors = []; p.on('pageerror', (e) => errors.push(e.message));
  await p.goto(ctx.base + '/index.html');
  await p.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', quality: 'low', tips: false, autoQ: false })); });
  await p.reload(); await p.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 180000 });
  await p.tap('#btn-new'); await p.waitForTimeout(600);
  await p.evaluate(() => { const G = window.game; if (G.story) G.endStory(); G.cut?.skip(); G.flags.tut = 1; G.coach.finish(true); G.godMode = true; });
  await p.waitForTimeout(800);
  const cdp = await c.newCDPSession(p);
  const touch = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts.map(([x, y], i) => ({ x, y, id: i })) });
  return { c, p, errors, touch };
}
const rect = (p, sel) => p.evaluate((sel) => { const r = document.querySelector(sel)?.getBoundingClientRect(); return r && { l: r.left, t: r.top, r: r.right, b: r.bottom, w: r.width, h: r.height }; }, sel);

module.exports = {
  name: '휴대폰 (터치 조작 · 작은 화면 배치)',
  async run(ctx) {
    // 가로 휴대폰
    const L = await phone(ctx, 844, 390);
    check(await L.p.evaluate(() => document.body.classList.contains('touch') && document.getElementById('touch').classList.contains('on')), '터치 단추가 켜지지 않음');
    // 가상 스틱: 왼쪽 아래를 끌면 그쪽으로 걸어감
    const before = await L.p.evaluate(() => ({ x: window.game.player.pos.x, z: window.game.player.pos.z }));
    await L.touch('touchStart', [[150, 260]]);
    for (let k = 1; k <= 5; k++) { await L.touch('touchMove', [[150 + k * 12, 260]]); await L.p.waitForTimeout(40); }
    await L.p.waitForTimeout(1500);
    await L.touch('touchEnd', []);
    const after = await L.p.evaluate(() => ({ x: window.game.player.pos.x, z: window.game.player.pos.z }));
    check(after.x - before.x > 0.5, `가상 스틱을 오른쪽으로 끌었는데 움직이지 않음 (x ${before.x.toFixed(2)} → ${after.x.toFixed(2)})`);
    // 공격 단추를 누르고 있으면 여러 번 벰
    await L.p.evaluate(() => { const pl = window.game.player, o = pl.startAttack.bind(pl); window.__atk = 0; pl.startAttack = (i) => { window.__atk++; return o(i); }; });
    const a = await rect(L.p, '#touch [data-k="atk"]');
    await L.touch('touchStart', [[a.l + a.w / 2, a.t + a.h / 2]]);
    await L.p.waitForTimeout(1500);
    await L.touch('touchEnd', []);
    const n = await L.p.evaluate(() => window.__atk);
    check(n >= 4, `공격 단추를 1.5초 누르고 있었는데 ${n}번만 벰`);
    // 일시정지 메뉴: 모든 항목에 닿을 수 있음 (화면 안이거나 스크롤로)
    await L.p.evaluate(() => window.game.togglePause(true)); await L.p.waitForTimeout(300);
    const reach = await L.p.evaluate(() => [...document.querySelectorAll('#pause .pz-menu .tbtn')].map((b) => { b.scrollIntoView({ block: 'nearest' }); const r = b.getBoundingClientRect(); return [b.textContent, r.top >= 0 && r.bottom <= innerHeight + 1]; }));
    const cut = reach.filter(([, ok]) => !ok).map(([t]) => t);
    check(!cut.length, `가로 휴대폰에서 일시정지 메뉴 항목이 화면 밖: ${cut.join(', ')}`);
    await L.p.evaluate(() => window.game.togglePause(false));
    ctx.log(`가로: 스틱 이동 ${(after.x - before.x).toFixed(1)}칸, 누르고 있기 공격 ${n}번, 메뉴 ${reach.length}개 모두 닿음`);
    check(!L.errors.length, '페이지 오류: ' + L.errors.slice(0, 3).join(' / '));
    await L.c.close();

    // 세로 휴대폰: 알림이 터치 단추와 겹치지 않음
    const P = await phone(ctx, 390, 844);
    await P.p.evaluate(() => window.game.ui.toast('새 날이 밝았어요 — 오늘의 목표가 생겼어요 (메뉴 → 오늘의 목표)', 5));
    await P.p.waitForTimeout(400);
    const t = await rect(P.p, '#toast'), b = await rect(P.p, '#touch .btns');
    check(t.l >= 0 && t.r <= 390, `세로 화면에서 알림이 화면 밖으로 나감 (${t.l.toFixed(0)}~${t.r.toFixed(0)})`);
    check(t.b <= b.t + 2, `세로 화면에서 알림(아래 ${t.b.toFixed(0)})이 터치 단추(위 ${b.t.toFixed(0)})에 가림`);
    check(!P.errors.length, '페이지 오류: ' + P.errors.slice(0, 3).join(' / '));
    ctx.log('세로: 알림이 단추 위에 보임');
    await P.c.close();
  },
};
