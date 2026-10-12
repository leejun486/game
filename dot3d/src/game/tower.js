// Game의 한 부분: 저승 시련탑 (층·규칙·보상) — 보스 도전도 같은 마당을 씀
//  main.js의 Game 클래스에서 떼어 낸 메서드들 (main.js가 Game.prototype에 붙임 — this는 game)
import { makeGear, rollGearTier, makeSetPiece, SETS } from '../gear.js';
import { BOSS_TYPES } from '../maps.js';
import { rand } from '../util.js';
import { ruleFor } from '../towerrules.js';
import { challengeClear, finishRush } from '../challenge.js';
import { V } from './shared.js';

import { updateDungeon, DUNGEONS, lootLine, removeDungeonProps } from '../dungeon.js';
export class TowerPart {
  // ---------- 저승 시련탑 (엔드게임) ----------
  // 층마다 섞인 적 무리, 5층마다 지역 보스, 10층마다 염라대왕. 5층 단위로 이어서 도전
  towerUnlocked() { return !!this.cleared.canyon; }
  towerZ() { return this.world.regions.find((r) => r.id === 'tower').center[1]; }

  usePortal(P) {
    if (P.kind === 'enter') {
      if (!this.towerUnlocked()) { this.ui.toast('저승 문이 굳게 닫혀 있다 — 불가사리를 물리치면 열린다', 3); this.audio.play('denied'); return; }
      if (this.waveActive) { this.ui.toast('싸우는 중에는 들어갈 수 없어요', 2); return; }
      this.enterTower();
    } else if (P.kind === 'exit') this.leaveTower();
    else if (P.kind === 'next' && this.tower?.active && this.tower.cleared && !this.tower.mode) this.startTowerFloor(this.tower.floor + 1);
  }

  enterTower() {
    const best = this.towerBest || 0;
    const start = Math.floor(best / 5) * 5; // 5층 단위 이어하기
    const P = this.world.portals.find((x) => x.kind === 'enter');
    this.towerReturn = V(P.x, 0, P.z - 1.6);
    this.tower = { active: true, floor: start, best, cleared: true };
    this.teleport(0, this.towerZ() + 8);
    this.audio.play('portal');
    this.ui.banner('저승 시련탑', start ? `${start + 1}층부터 이어서 도전` : '끝없는 저승의 탑', 2.6, 'night-banner');
    this.after(2.2, () => { if (this.tower?.active) this.startTowerFloor(start + 1); });
  }

  teleport(x, z) {
    const p = this.player;
    for (const e of this.enemies) if (e.field) { e.dispose(); e.removed = true; }
    this.enemies = this.enemies.filter((e) => !e.removed);
    if (this.target?.removed) this.target = null;
    p.pos.set(x, this.world.heightAt(x, z), z);
    p.y = p.pos.y;
    p.vel.set(0, 0, 0);
    this.focus.copy(p.pos);
    this.fx.ring(V(x, p.pos.y, z), 2, '#c8a0ff', 0.5);
    this.updateRegion(true);
    this.blendTheme(0, true);
  }

  towerWave(n) {
    const out = [];
    if (n % 10 === 0) {
      out.push({ type: 'yeomra' });
      for (let i = 0; i < 2 + Math.floor(n / 10); i++) out.push({ type: i % 2 ? 'ghost' : 'jiangshi' });
      return out;
    }
    if (n % 5 === 0) {
      const bosses = ['boss', 'gumiho', 'reaper', 'imugi', 'bulgasari', 'baekho', 'dragon', 'centipede', 'frostgiant', 'eodum', 'dokgak', 'jangsan', 'noegong'];
      const b = bosses[(n / 5 - 1) % bosses.length];
      out.push({ type: b });
      const adds = { boss: ['red', 'blue'], gumiho: ['fox', 'foxfire'], reaper: ['ghost', 'jiangshi'], imugi: ['waterghost', 'toad'], bulgasari: ['firedok', 'stonegolem'], baekho: ['tiger', 'bandit'], dragon: ['crab', 'jelly'], centipede: ['mantis', 'bee'], frostgiant: ['wolf', 'icedok'], eodum: ['tombsoldier', 'gungnyeo'], dokgak: ['imp', 'gambler'], jangsan: ['fishman', 'mudghost'], noegong: ['thunderkid', 'shadowfairy'] }[b];
      for (let i = 0; i < 3; i++) out.push({ type: adds[i % 2] });
      return out;
    }
    const tiers = [['blue', 'red', 'wisp'], ['fox', 'foxfire'], ['jiangshi', 'ghost'], ['waterghost', 'toad'], ['firedok', 'stonegolem']];
    const avail = tiers.slice(0, Math.min(tiers.length, 1 + Math.floor(n / 3))).flat();
    const count = Math.min(14, 5 + Math.floor(n * 0.5));
    const elites = n >= 3 ? Math.min(4, Math.floor(n / 4) + 1) : 0;
    const R = ruleFor(n)?.key;
    // 특수 규칙: 정예의 층은 절반이 모두 정예, 떼의 층은 두 배가 약하게
    const c = R === 'elite' ? Math.ceil(count / 2) : R === 'swarm' ? Math.min(24, count * 2) : count;
    for (let i = 0; i < c; i++) out.push({ type: avail[Math.floor(Math.random() * avail.length)], elite: R === 'elite' || (R !== 'swarm' && i < elites), weak: R === 'swarm' });
    return out;
  }

  startTowerFloor(n) {
    const T = this.tower;
    T.floor = n;
    T.cleared = false;
    const next = this.world.portals.find((x) => x.kind === 'next');
    if (next.mesh) next.mesh.visible = false;
    this.player.hp = Math.min(this.player.maxHp, this.player.hp + Math.round(this.player.maxHp * 0.3));
    const list = this.towerWave(n);
    const boss = list.some((q) => BOSS_TYPES.has(q.type));
    T.rule = ruleFor(n);
    T.fireAt = this.time + 4;
    if (T.rule) {
      this.ui.banner(`${n}층 · ${T.rule.name}`, `${T.rule.desc} — 보상이 더 좋다`, 3, 'night-banner');
      this.audio.play('gong');
    } else this.ui.banner(`${n}층`, boss ? `${n >= 20 ? '각성 ' : ''}${{ boss: '도깨비 대왕', gumiho: '천년 구미호', reaper: '저승사자', imugi: '천년 이무기', bulgasari: '불가사리', baekho: '산군 백호', dragon: '동해 용왕', centipede: '천년 왕지네', frostgiant: '동장군', eodum: '어둑시니', dokgak: '독각귀', jangsan: '장산범', noegong: '뇌공', yeomra: '염라대왕' }[list[0].type]} 출현!` : `적 ${list.length}마리${list.some((q) => q.elite) ? ' · 정예 포함' : ''}`, 2.4, boss ? 'boss-banner' : '');
    if (!T.rule) this.audio.play(boss ? 'gong' : 'wave');
    let delay = 1.0;
    for (const q of list) {
      this.spawnQueue.push({ ...q, at: this.time + delay });
      delay += BOSS_TYPES.has(q.type) ? 1.2 : rand(0.25, 0.5);
    }
    this.updateQuest();
  }

  updateTower() {
    const T = this.tower;
    if (T?.active && T.mode === 'dungeon') { updateDungeon(this); return; }
    if (!T?.active || T.cleared || this.player.dead) return;
    if (T.mode) { if (!this.spawnQueue.length && !this.enemies.some((e) => !e.dead)) challengeClear(this); return; }
    // 불바다: 몇 초마다 내 주변에 불기둥
    if (T.rule?.key === 'fire' && this.time > T.fireAt && !this.cut) {
      T.fireAt = this.time + 3.5;
      this.hazards(this.aroundPlayer(5, 1.5, 4.5), { r: 1.4, delay: 1.1, color: '#ff5a1a', dmg: Math.round(10 + T.floor * 1.4),
        boom: (at) => { this.fx.colorFire(at.x, at.y + 0.2, at.z, 26, 0.7, '#ffd080', '#ff3a00'); this.fx.ring(at, 1.5, '#ff8a3a', 0.3); } });
    }
    if (this.spawnQueue.length || this.enemies.some((e) => !e.dead)) return;
    T.cleared = true;
    const n = T.floor;
    const first = n > T.best;
    T.best = Math.max(T.best, n);
    this.towerBest = Math.max(this.towerBest || 0, n);
    this.dailyGoals.event('tower');
    const rule = T.rule;
    const exp = Math.round((60 + n * 30) * (first ? 1.5 : 1) * (rule ? 1.5 : 1));
    this.player.addExp(exp);
    if (rule) { this.stats.ruleFloors = (this.stats.ruleFloors || 0) + 1; this.records.check(); }
    T.rule = null;
    this.fx.number(this.player.pos.clone().add(V(0, 2.4, 0)), `+${exp} EXP`, 'exp');
    // 보상: 층이 높을수록 좋은 장비, 처음 돌파하면 하나 더. 5층마다 세트 조각
    const lv = 1 + n + Math.floor((this.player.level - 1) / 3);
    const center = V(0, 0, this.towerZ());
    const k = 1 + (first ? 1 : 0) + (n % 5 === 0 ? 1 : 0) + (rule ? 1 : 0);
    for (let i = 0; i < k; i++) this.spawnDrop(V(center.x + rand(-1.5, 1.5), 0, center.z + 2 + rand(-1, 1)), makeGear(lv, rollGearTier(0.3 + n * 0.03, n / 5)));
    if (n % 5 === 0) {
      const sets = Object.keys(SETS);
      this.spawnDrop(V(center.x, 0, center.z + 3), makeSetPiece(sets[Math.floor(Math.random() * sets.length)], lv));
    }
    const next = this.world.portals.find((x) => x.kind === 'next');
    if (next.mesh) next.mesh.visible = true;
    this.audio.play('victory');
    if (rule) this.after(1.2, () => this.ui.toast('특수 규칙 보상 — 장비 하나 더 · 경험치 1.5배', 2.6));
    this.ui.banner(`${n}층 돌파!`, (first ? `최고 기록 갱신 · 경험치 +${exp}` : `경험치 +${exp}`), 3, 'win-banner');
    if (n % 10 === 0 && !this.quest.ended) this.after(3.2, () => this.playEnding());
    this.updateQuest();
    this.save(false);
  }

  leaveTower(died = false) {
    const T = this.tower;
    if (!T) return;
    if (T.mode === 'rush' && !T.rushDone) finishRush(this, false);
    if (T.mode === 'dungeon') removeDungeonProps(this);
    T.active = false;
    for (const e of this.enemies) e.dispose();
    this.enemies = [];
    this.spawnQueue = [];
    this.ui.setBoss(null);
    const next = this.world.portals.find((x) => x.kind === 'next');
    if (next.mesh) next.mesh.visible = false;
    const r = this.towerReturn || V(-9.3, 0, 214);
    this.teleport(r.x, r.z);
    this.player.hp = this.player.maxHp;
    if (T.mode === 'dungeon') this.ui.banner(DUNGEONS[T.dg].name, `처치 ${T.kills} · 얻은 것: ${lootLine(T)}`, 3.4, '');
    else if (T.mode) this.ui.banner('보스 도전', died ? '쓰러졌다… 다시 도전해 보자' : '돌아왔다', 2.4, '');
    else this.ui.banner('저승 시련탑', died ? `${T.floor}층에서 쓰러졌다… 최고 기록 ${T.best}층` : `최고 기록 ${T.best}층`, 3, '');
    this.tower = null;
    this.updateQuest();
    this.save(false);
  }
}
