// 시간 던전: 하루에 던전마다 60분 (수호자를 잡으면 체력 40%, 20마리마다 20% 회복). 안에 있는 동안만 시간이 줄고(메뉴·가방을 연 동안은 멈춤), 날이 바뀌면 다시 60분
//  - 잠든 서고: 저승 명부를 지키던 혼령의 서고. 강화 주문서가 쏟아짐 (저승사자를 물리치면 열림)
//  - 도깨비 곳간: 도깨비들이 모아 둔 보물 곳간. 방어구·장신구·무기·갑옷이 나옴 (도깨비 대왕을 물리치면 열림)
//  - 달빛 광맥: 달빛이 굳은 돌이 박힌 광맥. 무기 세공석이 나옴 (불가사리를 물리치면 열림)
//  시련탑 마당을 빌려 쓰고(game.tower.mode = 'dungeon'), 색감은 던전마다 다른 지역의 것
//  적은 끊이지 않게 계속 나오고(레벨에 맞춤, 정예 섞임), 4분마다 수호자(보스)가 나옴
//  기록은 game.ext.dg = { day, used: {던전: 쓴 초}, total }
import { today } from './shop.js';
import { makeGear, rollGearTier, makeSetPiece, SETS } from './gear.js';
import { rollDrop, item } from './items.js';
import { canChallenge } from './challenge.js';
import { MATS } from './enhance.js';
import * as THREE from 'three';

export const DAILY_SEC = 3600;
export const DUNGEONS = {
  scroll: {
    name: '잠든 서고', sub: '명부를 지키던 혼령의 서고', unlock: 'reaper', unlockName: '저승사자', lockMsg: '저승사자를 물리치면 열려요',
    loot: '강화 주문서 · 축복받은 주문서 · 수호자에게서 요괴 혼석',
    pool: ['ghost', 'jiangshi', 'wisp', 'gungnyeo', 'shadowfairy', 'foxfire'], guard: 'reaper', theme: 'tomb', color: '#a8b8ff',
  },
  gear: {
    name: '도깨비 곳간', sub: '도깨비들이 숨겨 둔 보물 곳간', unlock: 'boss', unlockName: '도깨비 대왕', lockMsg: '도깨비 대왕을 물리치면 열려요',
    loot: '방어구·장신구 · 세트 조각 · 무기·갑옷',
    pool: ['blue', 'red', 'imp', 'gambler', 'tanuki', 'bandit'], guard: 'dokgak', theme: 'market', color: '#ffd76a',
  },
  stone: {
    name: '달빛 광맥', sub: '달빛이 굳어 박힌 돌의 굴', unlock: 'bulgasari', unlockName: '불가사리', lockMsg: '불가사리를 물리치면 열려요',
    loot: '거친 세공석 · 맑은 세공석 · 달빛 세공석',
    pool: ['stonegolem', 'icedok', 'tombsoldier', 'crab', 'icewisp', 'mantis'], guard: 'bulgasari', theme: 'snowfield', color: '#bfe8ff',
  },
};
export const DG_ORDER = ['scroll', 'gear', 'stone'];
const GUARD_EVERY = 240; // 수호자 간격 (초)
const KEEP = 7;          // 늘 이만큼은 살아 있게

export function dgState(g) {
  const E = (g.ext.dg ||= { day: null, used: {}, total: 0 });
  if (E.day !== today()) { E.day = today(); E.used = {}; }
  return E;
}
export const dgLeft = (g, id) => Math.max(0, DAILY_SEC - (dgState(g).used[id] || 0));
export const dgOpen = (g, id) => !!g.stats.killsBy?.[DUNGEONS[id].unlock];
const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export function startDungeon(g, id) {
  const D = DUNGEONS[id];
  if (!D) return '없는 던전이에요';
  if (!dgOpen(g, id)) return D.lockMsg;
  const err = canChallenge(g);
  if (err) return err.replace('도전할', '들어갈');
  if (dgLeft(g, id) <= 0) return '오늘 시간을 다 썼어요 (내일 다시 60분)';
  const p = g.player;
  g.towerReturn = p.pos.clone();
  // 적 레벨 = 1 + floor + (내 레벨-1)/3 (spawnEnemy) → 내 레벨보다 4쯤 낮게 (오래 싸우는 곳이라)
  g.tower = { active: true, mode: 'dungeon', dg: id, floor: Math.max(1, p.level - 2 - Math.floor((p.level - 1) / 6)), best: 0, cleared: false, lastT: g.time, kills: 0, loot: {}, guardAt: g.time + GUARD_EVERY, spawnAt: g.time + 2 };
  g.teleport(0, g.towerZ() + 8);
  addDungeonProps(g, id);
  g.audio.play('portal');
  p.hp = p.maxHp;
  const logo = document.getElementById('logo');
  if (logo) logo.innerHTML = `<span class="han">${D.name}</span><span class="sub">${D.sub}</span>`;
  g.ui.banner(D.name, `오늘 남은 시간 ${mmss(dgLeft(g, id))}`, 2.6, 'title-banner');
  g.stats.dungeons = (g.stats.dungeons || 0) + 1;
  g.updateQuest();
  return '';
}

// 던전마다 다른 꾸밈 (마당 둘레, 남쪽 홍살문 쪽은 비움): 서고 = 책장·촛불·부적, 곳간 = 궤짝·금덩이 더미·항아리, 광맥 = 빛나는 돌기둥
export function addDungeonProps(g, id) {
  removeDungeonProps(g);
  const grp = new THREE.Group(), cz = g.towerZ();
  const mat = (c, e = 0, ei = 0.6) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, flatShading: true, ...(e ? { emissive: e, emissiveIntensity: ei } : {}) });
  const box = (w, h, d, m, x, y, z, ry = 0, par = grp) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.rotation.y = ry; o.castShadow = true; par.add(o); return o; };
  const wood = mat('#4a2e1e'), gold = mat('#e8b84a', '#a06a10', 0.5), cloth = mat('#8a2a2a');
  const books = ['#8a2a2a', '#2a4a7a', '#3a6a3a', '#7a5a2a', '#5a3a6a'].map((c) => mat(c));
  const N = 12;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 + 0.26;
    if (Math.abs(Math.atan2(Math.sin(a), Math.cos(a)) - Math.PI / 2) < 0.5) continue; // 남쪽(+z) 홍살문 쪽
    const r = 12.6 + (i % 2) * 0.8, x = Math.cos(a) * r, z = cz + Math.sin(a) * r, ry = -a + Math.PI / 2;
    const s = new THREE.Group(); s.position.set(x, 0, z); s.rotation.y = ry; grp.add(s);
    if (id === 'scroll') {
      box(2.2, 2.6, 0.6, wood, 0, 1.3, 0, 0, s);
      for (let row = 0; row < 3; row++) for (let b = 0; b < 7; b++) box(0.2, 0.55 - (b % 3) * 0.06, 0.4, books[(b + row + i) % books.length], -0.85 + b * 0.28, 0.45 + row * 0.8, 0.05, 0, s);
      const flame = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffd080' }));
      box(0.12, 0.4, 0.12, mat('#f0e8d0'), 1.4, 0.2, 0.6, 0, s); flame.position.set(1.4, 0.48, 0.6); flame.userData.noOutline = true; s.add(flame);
      const tal = box(0.35, 0.6, 0.02, mat('#f0d890', '#806020', 0.3), -1.5, 1.6 + (i % 3) * 0.3, 0.9, 0.4, s); tal.userData.bob = i;
    } else if (id === 'gear') {
      const ch = new THREE.Group(); ch.position.set(-0.4, 0, 0); s.add(ch);
      box(1.3, 0.7, 0.8, wood, 0, 0.35, 0, 0, ch); box(1.34, 0.12, 0.84, gold, 0, 0.72, 0, 0, ch); box(0.2, 0.25, 0.05, gold, 0, 0.5, 0.42, 0, ch);
      for (let k = 0; k < 5; k++) { const pile = new THREE.Mesh(new THREE.ConeGeometry(0.35 - k * 0.04, 0.5, 6), gold); pile.position.set(0.9 + (k % 2) * 0.35, 0.25, -0.2 + k * 0.15); pile.castShadow = true; s.add(pile); }
      const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.35, 0.8, 8), cloth); jar.position.set(-1.3, 0.4, 0.3); s.add(jar);
    } else {
      const glow = mat('#c8ecff', '#6ac8ff', 1.1);
      for (let k = 0; k < 4; k++) {
        const h = 1 + ((i * 7 + k * 3) % 5) * 0.4;
        const c = new THREE.Mesh(new THREE.OctahedronGeometry(0.35, 0), glow);
        c.scale.set(1, h, 1); c.position.set(-0.6 + k * 0.4, h * 0.3, (k % 2) * 0.3); c.rotation.set((k - 1.5) * 0.2, k, (k - 1.5) * 0.25); c.castShadow = true; s.add(c);
      }
      box(1.8, 0.4, 1, mat('#4a4a58'), 0, 0.2, 0, 0.2, s);
    }
  }
  grp.position.y = g.world.heightAt(0, cz);
  g.scene.add(grp);
  g.dgProps = grp;
}
export function removeDungeonProps(g) {
  if (!g.dgProps) return;
  g.scene.remove(g.dgProps);
  g.dgProps.traverse((m) => { if (m.isMesh) { m.geometry.dispose(); } });
  g.dgProps = null;
}

// 매 프레임 (updateTower에서): 시간 줄이기 · 적 채우기 · 수호자
export function updateDungeon(g) {
  const T = g.tower, D = DUNGEONS[T.dg];
  const dt = Math.max(0, Math.min(0.25, g.time - T.lastT));
  T.lastT = g.time;
  if (T.ending || g.player.dead) return;
  const E = dgState(g);
  E.used[T.dg] = (E.used[T.dg] || 0) + dt;
  E.total = (E.total || 0) + dt;
  g.stats.dgTime = (g.stats.dgTime || 0) + dt;
  if (E.used[T.dg] >= DAILY_SEC) {
    T.ending = true;
    g.ui.banner('시간 끝', `${D.name} — 오늘의 60분을 다 썼어요`, 3, 'win-banner');
    g.audio.play('victory');
    g.after(3.2, () => { if (g.tower?.mode === 'dungeon') g.leaveTower(); });
    return;
  }
  const alive = g.enemies.filter((e) => !e.dead && !e.field).length + g.spawnQueue.length;
  if (g.time > T.spawnAt && alive < KEEP) {
    T.spawnAt = g.time + 0.5;
    const n = Math.min(3, KEEP - alive);
    for (let i = 0; i < n; i++) g.spawnQueue.push({ type: D.pool[Math.floor(Math.random() * D.pool.length)], elite: Math.random() < 0.15, at: g.time + 0.3 + i * 0.35 });
  }
  if (g.time > T.guardAt) {
    T.guardAt = g.time + GUARD_EVERY;
    g.spawnQueue.push({ type: D.guard, at: g.time + 0.8, guard: true });
    g.audio.play('gong');
    g.ui.toast(`수호자가 나타났다 — ${D.name}`, 2.4);
  }
  if (Math.floor(E.used[T.dg]) % 5 === 0) g.updateQuest();
}

// 던전에서 쓰러지면: 밖으로 내보내지 않고 1분을 깎은 뒤 마당 가운데서 다시 일어남 (적은 정리하고 새로)
export const DEATH_COST = 60;
export function dungeonRevive(g) {
  const T = g.tower, E = dgState(g);
  E.used[T.dg] = (E.used[T.dg] || 0) + DEATH_COST;
  g.stats.dgDeaths = (g.stats.dgDeaths || 0) + 1;
  for (const e of g.enemies) e.dispose();
  g.enemies = []; g.spawnQueue = [];
  g.ui.setBoss(null);
  g.teleport(0, g.towerZ() + 8);
  T.spawnAt = g.time + 3; T.lastT = g.time;
  T.guardAt = Math.max(T.guardAt, g.time + 30);
  g.ui.toast(`쓰러졌다… 시간 1분을 내고 다시 일어났어요 (남은 시간 ${mmss(dgLeft(g, T.dg))})`, 3);
  g.updateQuest();
  if (dgLeft(g, T.dg) <= 0) { T.ending = true; g.after(1.5, () => { if (g.tower?.mode === 'dungeon') g.leaveTower(); }); }
}

// 처치 보상 (던전에서는 보통의 주문서·장비 떨어짐 대신 이것)
export function dungeonLoot(g, e) {
  const T = g.tower, id = T.dg, lv = Math.max(1, e.lvl || 1) + g.round;
  T.kills++;
  // 한 시간 내내 싸우니 숨 돌릴 틈: 수호자를 잡으면 40%, 20마리마다 20% 회복
  const pl = g.player, heal = e.isBoss ? 0.3 : T.kills % 20 === 0 ? 0.1 : 0;
  if (heal && !pl.dead) { const h = Math.min(pl.maxHp - pl.hp, Math.round(pl.maxHp * heal)); if (h > 0) { pl.hp += h; g.fx.number(pl.pos.clone().add(new pl.pos.constructor(0, 2.2, 0)), `+${h}`, 'heal'); } }
  const add = (k, n = 1) => { T.loot[k] = (T.loot[k] || 0) + n; };
  const r = Math.random;
  const scroll = () => ['scrollW', 'scrollA', 'scrollG'][Math.floor(r() * 3)];
  if (id === 'scroll') {
    const m = {};
    const give = (k, n = 1) => { m[k] = (m[k] || 0) + n; add(k, n); };
    if (e.isBoss) { for (let i = 0; i < 2 + (r() < 0.3 ? 1 : 0); i++) give(scroll()); if (r() < 0.25) give('bless'); if (r() < 0.2) give('soul'); }
    else if (e.elite) { if (r() < 0.15) give(scroll()); if (r() < 0.01) give('bless'); }
    else { if (r() < 0.02) give(scroll()); if (r() < 0.0005) give('bless'); }
    g.gainMats(m, e.pos);
  } else if (id === 'gear') {
    const drops = [];
    if (e.isBoss) {
      for (let i = 0; i < 2; i++) drops.push(makeGear(lv, rollGearTier(0.8, g.round)));
      if (r() < 0.3) { const sets = Object.keys(SETS); drops.push(makeSetPiece(sets[Math.floor(r() * sets.length)], lv)); }
      if (r() < 0.2) { const it = rollDrop('boss', g.round, g.player.cls); if (it) drops.push(it); }
    } else if (e.elite) { if (r() < 0.12) drops.push(makeGear(lv, rollGearTier(0.5, g.round))); }
    else {
      if (r() < 0.012) drops.push(makeGear(lv, rollGearTier(0.25, g.round)));
      if (r() < 0.004) { const it = rollDrop(e.type, g.round, g.player.cls); if (it) drops.push(it); }
    }
    for (const d of drops) { g.spawnDrop(e.pos, d); add(typeof d === 'object' ? 'gearN' : 'itemN'); }
  } else {
    const m = {};
    const give = (k, n = 1) => { m[k] = (m[k] || 0) + n; add(k, n); };
    if (e.isBoss) { give('stoneR', 2); give('stoneC', 1); if (r() < 0.15) give('stoneM'); }
    else if (e.elite) { if (r() < 0.12) give('stoneR'); if (r() < 0.05) give('stoneC'); if (r() < 0.006) give('stoneM'); }
    else { if (r() < 0.015) give('stoneR'); if (r() < 0.005) give('stoneC'); if (r() < 0.001) give('stoneM'); }
    g.gainMats(m, e.pos);
  }
}

// 얻은 것 한 줄
export function lootLine(T) {
  const L = T.loot, parts = [];
  for (const k of Object.keys(L)) {
    if (k === 'gearN') parts.push(`장비 ${L[k]}`);
    else if (k === 'itemN') parts.push(`무기·갑옷 ${L[k]}`);
    else parts.push(`${MATS[k]?.name || k} ${L[k]}`);
  }
  return parts.join(' · ') || '아직 없음';
}

export function dungeonQuest(g) {
  const T = g.tower, D = DUNGEONS[T.dg];
  return [`${D.name} · 남은 시간 ${mmss(dgLeft(g, T.dg))}`, `처치 <b>${T.kills}</b> · 다음 수호자 ${mmss(Math.max(0, T.guardAt - g.time))}<br>얻은 것: ${lootLine(T)}<br>남쪽 홍살문으로 나가면 시간이 멈춰요`];
}

// 시간 던전 창 (일시정지 창 안)
export function renderDungeons(g, el, msg = '') {
  el.innerHTML = `<h3>시간 던전</h3>
    <div class="cx-sum">던전마다 하루 60분이에요. 안에 있는 동안만 시간이 줄고 나왔다가 다시 들어가도 남은 시간에서 이어져요. 적은 끊이지 않고 나오고 4분마다 수호자가 나와요. 날이 바뀌면 다시 60분이에요.</div>
    ${msg ? `<div class="enh-msg shop-msg">${msg}</div>` : ''}
    <div class="dg-list">${DG_ORDER.map((id) => {
      const D = DUNGEONS[id], open = dgOpen(g, id), left = dgLeft(g, id);
      return `<div class="dg-card${open ? '' : ' lock'}" style="--dg:${D.color}"><div class="dg-t"><b>${D.name}</b><small>${D.sub}</small></div>
        <div class="dg-loot">나오는 것: ${D.loot}</div>
        <div class="dg-bar"><i style="width:${(left / DAILY_SEC) * 100}%"></i><span>오늘 남은 시간 ${mmss(left)}</span></div>
        ${open ? `<button class="pz-btn main" data-dg="${id}" ${left > 0 ? '' : 'disabled'}>${left > 0 ? '들어가기' : '내일 다시'}</button>` : `<small class="how">${D.lockMsg}</small>`}</div>`;
    }).join('')}</div>`;
  for (const b of el.querySelectorAll('[data-dg]')) b.addEventListener('click', () => {
    const err = startDungeon(g, b.dataset.dg);
    if (err) { g.audio.play('denied'); renderDungeons(g, el, err); } else g.togglePause(false);
  });
}
