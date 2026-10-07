// 타이틀 화면: 네 언어 모두 오류 없이 뜨고, 외부 서버에 아무것도 요청하지 않으며(오프라인),
// 제목 명조체가 실제로 불러와지는지
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '타이틀 · 오프라인 · 네 언어',
  async run(ctx) {
    for (const lang of ['ko', 'en', 'ja', 'zh']) {
      const g = await openGame(ctx, { lang });
      await g.page.waitForTimeout(1200);
      const r = await g.eval(() => ({
        lang: document.documentElement.dataset.lang,
        serif: [...document.fonts].filter((f) => f.family.includes('WolhaSerif') && f.status === 'loaded').map((f) => f.family),
        state: window.game.state,
        hasNew: !!document.getElementById('btn-new'),
      }));
      check(r.lang === lang, `${lang}: 화면 언어가 ${r.lang}`);
      check(r.serif.length > 0, `${lang}: 제목 명조체를 못 불러옴`);
      check(r.state === 'title' && r.hasNew, `${lang}: 타이틀 상태가 아님 (${r.state})`);
      check(!g.external.length, `${lang}: 외부 요청 ${g.external.length}개 — ${g.external.slice(0, 3).join(', ')}`);
      await clean(g);
      ctx.log(lang, 'ok', r.serif.join(','));
      await g.close();
    }
    // 도트 모드(선택 화면의 고화질/도트 단추): 켜지고, 아홉 지역과 시련탑을 그려도 오류가 없는지
    //  (예전엔 도트 모드에서 용궁 모래 재질에 무늬가 없어 게임이 아예 시작되지 않았음)
    const g = await openGame(ctx, { lang: 'ko', gfx: 'pixel' });
    check(await g.eval(() => !!window.game), '도트 모드에서 게임이 시작되지 않음: ' + g.errors.slice(0, 2).join(' / '));
    await g.newGame();
    const regions = await g.eval(() => window.game.world.regions.map((r) => r.id));
    for (const id of regions) {
      await g.eval((id) => { const G = window.game, R = G.world.regions.find((r) => r.id === id); G.teleport(R.spawn ? R.spawn[0] : R.center[0], R.spawn ? R.spawn[2] : R.center[1]); G.updateRegion(true); }, id);
      await g.page.waitForTimeout(400); // 실제로 몇 장 그림
    }
    await clean(g);
    ctx.log('도트 모드:', regions.length, '곳 그림');
    await g.close();
  },
};
