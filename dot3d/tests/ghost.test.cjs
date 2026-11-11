// 가려져도 보이는 캐릭터: 남문 지붕 아래에서는 실루엣이 칠해지고(화면 화소가 달라짐), 트인 곳에서는 아무것도 칠하지 않음
//  같은 장면을 실루엣을 켜고/끄고 두 번 그려 캐릭터 몸통 둘레의 화소를 견줌
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '가려져도 보이는 캐릭터 (지붕 아래 실루엣)',
  async run(ctx) {
    for (const quality of ['high', 'low']) {
      const g = await openGame(ctx, { settings: { quality } });
      await g.newGame();
      const probe = (dx, dz) => g.eval(([dx, dz]) => {
        const G = window.game, sp = G.world.spawn;
        if (G.story) G.endStory(); G.cut?.skip();
        G.teleport(sp.x + dx, sp.z + dz);
        for (let i = 0; i < 40; i++) G.simulate(1 / 30, { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null });
        G.focus.copy(G.player.pos); G.pixel.setFocus(G.focus);
        const gl = G.pixel.renderer.getContext(), cv = G.pixel.renderer.domElement;
        const p = G.player.pos.clone(); p.y += 0.7;
        const s = G.pixel.project(p), kx = cv.width / window.innerWidth, ky = cv.height / window.innerHeight;
        const x0 = Math.round(s.x * kx) - 8, y0 = Math.round(cv.height - s.y * ky) - 8;
        const grab = (on) => {
          if (on) G.collectGhosts(); else G.pixel.ghosts.length = 0;
          G.pixel.render(G.scene);
          const px = new Uint8Array(16 * 16 * 4);
          gl.readPixels(x0, y0, 16, 16, gl.RGBA, gl.UNSIGNED_BYTE, px);
          return px;
        };
        const a = grab(true), n = G.pixel.ghosts.length, b = grab(false);
        let changed = 0, bluer = 0;
        for (let i = 0; i < a.length; i += 4) { const d = Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]); if (d > 24) { changed++; if (a[i + 2] > b[i + 2]) bluer++; } }
        return { changed, bluer, n };
      }, [dx, dz]);
      const roof = await probe(-1, 3.4), open = await probe(0, -6);
      check(roof.n >= 1 && roof.changed >= 20 && roof.bluer >= roof.changed * 0.8, `${quality}: 지붕 아래에서 실루엣이 안 보임 ${JSON.stringify(roof)}`);
      check(open.changed <= 2, `${quality}: 트인 곳인데 실루엣이 칠해짐 ${JSON.stringify(open)}`);
      ctx.log(`${quality}: 지붕 아래 ${roof.changed}/256 화소가 하늘빛으로 · 트인 곳 ${open.changed}`);
      await clean(g, { i18n: false });
      await g.close();
    }
  },
};
