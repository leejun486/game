// 메인 퀘스트
//  1) 모든 단계: 시작할 수 있고, 목표가 있고, 그 목표까지 길이 이어져 있음 (자동 이동이 "길이 막혀 있어요"로 멈추지 않음)
//  2) 새 방식 퀘스트 아홉(추격·찾기·순서·호위·버티기)을 실제로 끝까지 풀어 봄
//  영어 화면으로 돌려서 퀘스트 글의 번역 빠짐도 함께 잡음
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '메인 퀘스트 (전 단계 길찾기 · 새 방식 아홉 개)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'en' });
    await g.newGame();
    await g.eval(() => { const G = window.game; G.player.level = 20; G.player.recalc?.(true);
      G.cleared = { palace: 1, bamboo: 1, temple: 1, swamp: 1, canyon: 1, fortress: 1, sea: 1, valley: 1, snowfield: 1 }; });

    // 1) 전 단계 길찾기
    const steps = await g.eval(() => { const G = window.game, out = []; for (let i = 0; i < 99; i++) { G.quest.step = i; const Q = G.curQuest(); if (!Q) break; out.push([i, Q.type, Q.region || null, Q.title, !!Q.added]); } return out; });
    check(steps.length >= 50, `퀘스트 단계가 ${steps.length}개뿐`);
    const blocked = [];
    for (const [i, type, region, title] of steps) {
      const r = await g.eval(([i]) => {
        const G = window.game;
        const toasts = []; const t0 = G.ui.toast; G.ui.toast = (s, d) => { toasts.push(s); return t0.call(G.ui, s, d); };
        G.stopAutoMove(); G.qk.clear(); G.quest.step = i; G.quest.prog = {}; G.quest.lit = []; G.updateGates(true);
        for (const e of G.enemies) e.dispose(); G.enemies = []; G.spawnQueue.length = 0; G.waveActive = false;
        G.startStep();
        // 바로 앞 단계의 목표 근처에서 출발 (실제 플레이와 비슷하게): 없으면 궁궐 남문
        const sp = G.world.spawn; G.teleport(sp.x, sp.z);
        const T = G.questTargets();
        G.startAutoMove();
        G.ui.toast = t0;
        const am = G.autoMove;
        G.stopAutoMove();
        return { targets: T.length, moving: !!am, toasts };
      }, [i]);
      const bad = r.toasts.find((t) => /길이 막혀|갈 곳이 없어요|길을 찾지/.test(t));
      if (!r.targets || bad) blocked.push(`${i} ${title} (${type}${region ? ' · ' + region : ''}): ${bad || '목표 없음'}`);
    }
    check(!blocked.length, `목표까지 갈 수 없는 단계 ${blocked.length}개:\n    ` + blocked.join('\n    '));
    ctx.log(`전 단계 ${steps.length}개: 목표·길 확인`);

    // 1-2) 단계가 넘어간 직후(새 임무가 시작되기 전)에도 목표 계산이 오류 없이 되는지 (예전엔 버티기 퀘스트에서 매 프레임 오류)
    const early = await g.eval(() => { const G = window.game, out = []; for (let i = 0; i < 99; i++) { G.qk.clear(); G.quest.step = i; G.quest.prog = {}; const Q = G.curQuest(); if (!Q) break; try { G.questTargets(); G.progText(Q, G.quest.prog); } catch (e) { out.push(`${i} ${Q.title}: ${e.message}`); } } return out; });
    check(!early.length, `임무 시작 전 목표 계산 오류:\n    ${early.join('\n    ')}`);

    // 2) 새 방식 퀘스트
    const fresh = steps.filter((s) => s[4]);
    check(fresh.length === 9, `새 방식 퀘스트가 ${fresh.length}개 (9개여야 함)`);
    for (const [i, type, region, title] of fresh) {
      await g.eval(([i, region]) => {
        const G = window.game; G.qk.clear(); G.quest.step = i; G.quest.prog = {}; G.updateGates(true);
        const R = G.world.regions.find((r) => r.id === region); G.teleport(R.spawn[0], R.spawn[2]); G.updateRegion(true);
        for (const e of G.enemies) e.dispose(); G.enemies = []; G.spawnQueue.length = 0; G.startStep();
      }, [i, region]);
      await g.step(1.5);
      const done = () => g.eval((i) => window.game.quest.step > i, i);
      if (type === 'chase') {
        for (let k = 0; k < 60 && !(await done()); k++) {
          await g.eval(() => { const G = window.game, e = G.qk.thief; if (!e || e.dead) return; G.player.pos.set(e.pos.x - 1.2, G.player.pos.y, e.pos.z); e.hit(Math.ceil(e.maxHp / 5), { x: 1, y: 0, z: 0 }, 2, 0.4); });
          await g.step(0.5, { input: {} });
        }
      } else if (type === 'search') {
        const kinds = await g.eval(() => { const G = window.game, r = []; for (const o of [...G.qk.objs]) { G.teleport(o.x + 0.8, o.z); G.nearInteract = G.findInteract(); r.push(G.nearInteract?.kind); G.interact(); } return r; });
        check(kinds.every((k) => k === 'qobj'), `${title}: 숨은 물건 옆에서 상호작용이 안 됨 ${JSON.stringify(kinds)}`);
      } else if (type === 'order') {
        // 틀린 것부터 두드려 처음으로 돌아가는지, 그다음 바른 순서로
        const wrong = await g.eval(() => { const G = window.game, P = G.quest.prog; const o = G.qk.objs.find((o) => P.dots[o.i] === 2); G.teleport(o.x + 1, o.z); G.nearInteract = G.findInteract(); G.interact(); return P.next; });
        check(wrong === 1 || wrong === 0, `${title}: 틀린 순서인데 진행됨 (${wrong})`);
        await g.step(1, { input: {} });
        await g.eval(() => { const G = window.game, P = G.quest.prog; for (let k = 1; k <= 4; k++) { const o = G.qk.objs.find((o) => P.dots[o.i] === k); if (!o) break; G.teleport(o.x + 1, o.z); G.nearInteract = G.findInteract(); G.interact(); } });
      } else if (type === 'hold') {
        for (let k = 0; k < 30 && !(await done()); k++) {
          await g.eval(() => { const G = window.game, c = G.quest.prog.c; if (c) G.teleport(c[0], c[1]); for (const e of G.enemies) if (!e.dead && !e.spawning) e.hit(99999, { x: 1, y: 0, z: 0 }); });
          await g.step(2, { input: {} });
        }
      } else if (type === 'escort') {
        for (let k = 0; k < 150 && !(await done()); k++) {
          await g.eval(() => { const G = window.game, E = G.qk.escort; if (!E) return; const n = E.npc; G.teleport(n.pos.x - 1.5, n.pos.z - 1); for (const e of G.enemies) if (e.questMob && !e.dead && !e.spawning) e.hit(99999, { x: 1, y: 0, z: 0 }); });
          await g.step(1, { input: {} });
        }
      }
      await g.step(1, { input: {} });
      check(await done(), `${i} ${title} (${type}) 을(를) 끝내지 못함 — 진행 ${JSON.stringify(await g.eval(() => window.game.quest.prog))}`);
      ctx.log(`${i} ${title} (${type}) 완료`);
    }
    await clean(g);
    await g.close();
  },
};
