// 두루마리 메뉴: Esc로 열고 닫기, 칸을 누르면 창이 열리고, 설정 창에서 Esc를 누르면 다시 두루마리로
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '두루마리 메뉴 (Esc · 칸 · 되돌아가기)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'en' });
    await g.newGame();
    const st = () => g.eval(() => { const G = window.game; return { hub: G.hub.open, pause: G.pauseOpen, bag: !!G.ui.bagOpen, map: !!G.mapOpen, paused: !!G.paused }; });
    await g.page.keyboard.press('Escape');
    let s = await st();
    check(s.hub && s.paused && !s.pause, `Esc로 두루마리가 안 열림 ${JSON.stringify(s)}`);
    const tiles = await g.eval(() => document.querySelectorAll('#hub .hub-tile').length);
    check(tiles >= 15, `칸이 ${tiles}개뿐`);
    await g.page.click('[data-h="screen"]');
    s = await st();
    check(s.pause && !s.hub, `화면 칸이 설정 창을 안 엶 ${JSON.stringify(s)}`);
    await g.page.keyboard.press('Escape');
    s = await st();
    check(s.hub && !s.pause, `설정 창에서 Esc → 두루마리로 안 돌아감 ${JSON.stringify(s)}`);
    await g.page.click('[data-h="map"]');
    s = await st();
    check(s.map && !s.hub, `지도 칸이 지도를 안 엶 ${JSON.stringify(s)}`);
    await g.page.keyboard.press('Escape');
    await g.page.keyboard.press('Escape');
    await g.page.click('[data-h="bag"]');
    s = await st();
    check(s.bag && !s.hub, `가방 칸이 가방을 안 엶 ${JSON.stringify(s)}`);
    await g.page.keyboard.press('Escape');
    await g.page.keyboard.press('Escape');
    await g.page.keyboard.press('Escape');
    s = await st();
    check(!s.hub && !s.paused, `Esc로 닫히지 않음 ${JSON.stringify(s)}`);
    ctx.log('열기 · 칸 · 되돌아가기 · 닫기 확인');
    await clean(g);
    await g.close();
  },
};
