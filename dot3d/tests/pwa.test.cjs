// 설치형 웹판·기기 옮기기·기기 점검: 오프라인 저장(sw.js)이 켜지고 인터넷이 끊겨도 다시 열리는지,
// 옮기기 코드로 기록이 그대로 옮겨지는지, 점검 결과가 만들어지는지
const { check } = require('./harness.cjs');

module.exports = {
  name: '설치형 웹판 · 기기 옮기기 코드 · 기기 점검',
  async run(ctx) {
    const c = await ctx.browser.newContext({ viewport: { width: 960, height: 540 } });
    const p = await c.newPage(); p.setDefaultTimeout(300000);
    const errors = []; p.on('pageerror', (e) => errors.push(e.message));
    await p.goto(ctx.base + '/index.html?sw=1');
    await p.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', quality: 'low', tips: false, autoQ: false })); });
    await p.reload();
    await p.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 180000 });
    const man = await p.evaluate(async () => { const r = await fetch(document.querySelector('link[rel=manifest]').href); const j = await r.json(); return { name: j.name, icons: j.icons.length, display: j.display }; });
    check(man.name && man.icons >= 1, `매니페스트 이상 ${JSON.stringify(man)}`);
    await p.waitForFunction(() => navigator.serviceWorker?.controller || navigator.serviceWorker?.ready.then(() => true), null, { timeout: 60000 });
    await p.reload(); // 한 번 더 열어 모든 파일이 저장되게
    await p.waitForFunction(() => window.game && document.getElementById('btn-new') && navigator.serviceWorker.controller, null, { timeout: 180000 });
    await p.waitForTimeout(1500);
    // 인터넷을 끊고 다시 열기
    await c.setOffline(true);
    await p.reload();
    await p.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 180000 });
    const off = await p.evaluate(() => !!window.game && !navigator.onLine);
    check(off, '인터넷이 끊긴 채로 다시 열리지 않음');
    await c.setOffline(false);
    ctx.log(`오프라인 다시 열기 (${man.display})`);

    // 옮기기 코드: 기록 → 코드 → 지우기 → 코드로 불러오기
    await p.click('#btn-new'); await p.waitForTimeout(500);
    const code = await p.evaluate(async () => {
      const G = window.game; if (G.story) G.endStory(); G.cut?.skip(); G.flags.tut = 1; G.coach.finish(true);
      G.ext.coins = 4321; G.player.level = 7; G.save(false);
      G.togglePause(true); G.pausePane('data');
      document.getElementById('pz-code').click();
      await new Promise((r) => setTimeout(r, 600));
      return document.getElementById('pz-codebox').value;
    });
    check(/^WH[01]:[A-Za-z0-9_-]{40,}$/.test(code), `코드가 이상함: ${code.slice(0, 40)}`);
    const back = await p.evaluate(async (code) => {
      localStorage.removeItem('dot3d-palace-save-v1');
      const G = window.game;
      G.pausePane('data');
      document.getElementById('pz-paste').click();
      document.getElementById('pz-codebox').value = code;
      document.getElementById('pz-codego').click();
      await new Promise((r) => setTimeout(r, 400));
      const d = JSON.parse(localStorage.getItem('dot3d-palace-save-v1') || 'null');
      return d && { coins: d.ext?.coins, msg: document.getElementById('pz-msg').textContent };
    }, code);
    check(back && back.coins === 4321, `코드로 불러오기 이상 ${JSON.stringify(back)}`);
    ctx.log(`옮기기 코드 ${code.length}자 → 엽전 ${back.coins} 그대로`);
    await p.waitForTimeout(1500); // 다시 불러오기(새로고침)

    // 기기 점검
    await p.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 180000 });
    const rep = await p.evaluate(() => { const G = window.game; G.settings.fps = true; for (let i = 0; i < 30; i++) G.dev.tick(1 / 60); return { text: G.dev.report(), fps: document.getElementById('fps')?.textContent }; });
    check(/그래픽 칩/.test(rep.text) && /프레임: 평균 \d+/.test(rep.text) && /FPS/.test(rep.fps || ''), `점검 결과 이상 ${JSON.stringify(rep)}`);
    ctx.log('기기 점검: ' + rep.text.split('\n')[5]);
    check(!errors.length, '페이지 오류: ' + errors.slice(0, 3).join(' / '));
    await c.close();
  },
};
