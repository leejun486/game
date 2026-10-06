// 연출 장면: 첫 밤 · 대왕 격파 뒤 · 용왕 격파 뒤 · 엔딩 직전이 끝까지 돌고,
// 건너뛰기(Esc)가 화면 띠와 NPC 자리를 원래대로 돌려놓는지
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '연출 장면 (네 장면 · 건너뛰기)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'ja' });
    await g.page.click('#btn-new');
    await g.page.waitForTimeout(400);
    await g.eval(() => window.game.endStory());
    // 장면이 시작돼서 끝날 때까지 게임 시간으로 (최대 60초)
    const play = async (name) => {
      let seen = false;
      for (let k = 0; k < 120; k++) {
        const st = await g.eval(() => ({ cut: !!window.game.cut, dlg: window.game.ui.inDialog }));
        if (st.cut) seen = true;
        if (seen && !st.cut && !st.dlg) return;
        await g.step(0.5, { input: {} });
      }
      check(false, `${name}: ${seen ? '60초 안에 끝나지 않음' : '시작되지 않음'}`);
    };
    await play('첫 밤');
    await g.eval(() => { const G = window.game; G.flags.tut = 1; G.coach.finish(true); G.godMode = true; });
    await g.eval(() => { const G = window.game; G.quest.step = 1; G.cleared = {}; G.mapId = 'palace'; G.victory(); });
    await play('대왕 격파 뒤');
    await g.eval(() => { const G = window.game; const R = G.world.regions.find((r) => r.id === 'sea'); G.teleport(R.spawn[0] + 4, R.spawn[2] + 10); G.updateRegion(true); G.mapId = 'sea'; delete G.cleared.sea; G.victory(); });
    await play('용왕 격파 뒤');
    await g.eval(() => { window.game.quest.ended = false; window.game.playEnding(); });
    await play('엔딩 직전');
    check(await g.eval(() => !!window.game.story), '엔딩 장면 뒤에 에필로그가 이어지지 않음');
    // 건너뛰기
    await g.eval(() => { const G = window.game; G.endStory(); delete G.cleared.palace; G.mapId = 'palace'; G.teleport(0, 10); G.updateRegion(true); G.victory(); });
    for (let k = 0; k < 60 && !(await g.eval(() => !!window.game.cut)); k++) await g.step(0.5, { input: {} });
    check(await g.eval(() => !!window.game.cut), '건너뛰기 시험용 장면이 시작되지 않음');
    await g.step(1, { input: {} });
    await g.page.keyboard.press('Escape');
    await g.page.waitForTimeout(300);
    const s = await g.eval(() => { const n = window.game.npcs.find((n) => n.kind === 'guard'); return { cut: !!window.game.cut, home: n.pos.distanceTo(n.home) < 0.01, bars: document.getElementById('cine').className, paused: window.game.paused }; });
    check(!s.cut && s.home && !s.bars && !s.paused, `건너뛰기 뒤 상태가 이상함 ${JSON.stringify(s)}`);
    await clean(g);
    await g.close();
  },
};
