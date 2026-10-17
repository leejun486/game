// 수호령: 곁을 따라다니며 능력치를 조금 올려 주고, 몇몇은 가까운 적을 함께 공격함 (모든 직업 공통, 하나만 데리고 다님)
//  얻는 법: 보스를 처음 물리치면 그 보스의 수호령, 장터에서 엽전으로, 보스 연속 도전 기록으로
//  game.ext.pets = 가진 것 목록, game.ext.pet = 데리고 다니는 것
import { lvEq } from './entities.js';
import * as THREE from 'three';
import { rbox } from './style.js';
import { fmtStats } from './codex.js';

export const PETS = {
  wisp: { name: '도깨비불', color: '#7ac8ff', glow: '#d8f0ff', shape: 'orb', stats: { atk: 0.03 }, attack: { every: 2.2, dmg: 7, color: '#7ac8ff' }, boss: 'boss', how: '도깨비 대왕을 물리치면' },
  foxfire: { name: '여우 구슬', color: '#ff8a4a', glow: '#ffe0b0', shape: 'orb', stats: { crit: 0.04, critDmg: 0.1 }, attack: { every: 2.6, dmg: 9, color: '#ff8a4a' }, boss: 'gumiho', how: '천년 구미호를 물리치면' },
  magpie: { name: '까치', color: '#2a3a5a', glow: '#ffffff', shape: 'bird', stats: { exp: 0.08 }, coins: 0.15, price: 2500, how: '장터에서 2500 엽전 · 엽전을 15% 더 얻어요' },
  haetae: { name: '아기 해태', color: '#e0c060', glow: '#fff4c0', shape: 'beast', stats: { hp: 40, def: 0.02 }, attack: { every: 3.2, dmg: 12, color: '#ffe080', melee: true }, price: 3000, how: '장터에서 3000 엽전' },
  rabbit: { name: '달토끼', color: '#f4f0ff', glow: '#fff8c8', shape: 'beast', stats: { regen: 1.2, hp: 20 }, price: 4000, how: '장터에서 4000 엽전' },
  crane: { name: '선계 학', color: '#ffffff', glow: '#c8f0ff', shape: 'bird', stats: { spd: 0.05, cdr: 0.04 }, rush: 5, how: '보스 연속 도전에서 보스 다섯을 넘으면' },
  dragon: { name: '아기 용', color: '#3ac0a0', glow: '#c8fff0', shape: 'beast', stats: { atk: 0.05, ls: 0.01 }, attack: { every: 2.0, dmg: 11, color: '#6affd0' }, boss: 'dragon', how: '동해 용왕을 물리치면' },
};
export const PET_ORDER = Object.keys(PETS);

// 가졌는지: 산 것 + 보스·기록으로 저절로 얻은 것
export function petOwned(g, id) {
  const P = PETS[id];
  if ((g.ext.pets || []).includes(id)) return true;
  if (P.boss && g.stats.killsBy?.[P.boss]) return true;
  if (P.rush && (g.ext.rushBest || 0) >= P.rush) return true;
  return false;
}

// 작은 도트 몸: 구슬 / 새 / 네발짐승
function buildMesh(P) {
  const g = new THREE.Group();
  const mat = (c, e = 0.25) => new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: e, roughness: 0.8, flatShading: true });
  const box = (w, h, d, c, x, y, z, e) => { const m = new THREE.Mesh(rbox(w, h, d), mat(c, e)); m.position.set(x, y, z); g.add(m); return m; };
  if (P.shape === 'orb') {
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), new THREE.MeshBasicMaterial({ color: P.glow }));
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 0), new THREE.MeshBasicMaterial({ color: P.color, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    shell.userData.noOutline = true;
    g.add(core, shell);
    box(0.05, 0.07, 0.02, '#1a1420', -0.07, 0.04, 0.2, 0);
    box(0.05, 0.07, 0.02, '#1a1420', 0.07, 0.04, 0.2, 0);
  } else if (P.shape === 'bird') {
    box(0.22, 0.18, 0.34, P.color, 0, 0, 0);
    box(0.16, 0.16, 0.16, P.color, 0, 0.12, 0.18);
    box(0.06, 0.04, 0.1, '#f0b030', 0, 0.1, 0.3);
    box(0.04, 0.04, 0.02, '#ffffff', -0.07, 0.16, 0.26, 0);
    box(0.04, 0.04, 0.02, '#ffffff', 0.07, 0.16, 0.26, 0);
    g.userData.wings = [box(0.3, 0.04, 0.2, P.glow === '#ffffff' ? '#f4f4f4' : P.glow, -0.24, 0.04, 0), box(0.3, 0.04, 0.2, P.glow === '#ffffff' ? '#f4f4f4' : P.glow, 0.24, 0.04, 0)];
  } else {
    box(0.3, 0.22, 0.4, P.color, 0, 0, 0);
    box(0.26, 0.24, 0.24, P.color, 0, 0.16, 0.24);
    box(0.05, 0.05, 0.02, '#1a1420', -0.07, 0.2, 0.37, 0);
    box(0.05, 0.05, 0.02, '#1a1420', 0.07, 0.2, 0.37, 0);
    box(0.07, 0.12, 0.07, P.color, -0.1, 0.34, 0.2);
    box(0.07, 0.12, 0.07, P.color, 0.1, 0.34, 0.2);
    for (const [x, z] of [[-0.1, 0.12], [0.1, 0.12], [-0.1, -0.12], [0.1, -0.12]]) box(0.08, 0.14, 0.08, P.color, x, -0.16, z);
  }
  return g;
}

export class Pet {
  constructor(game) { this.game = game; this.id = null; this.mesh = null; this.pos = new THREE.Vector3(); this.cd = 1; this.t = 0; }

  stats() {
    const P = PETS[this.game.ext?.pet];
    return P && petOwned(this.game, this.game.ext.pet) ? P.stats : {};
  }
  ownedCount() { return PET_ORDER.filter((id) => petOwned(this.game, id)).length; }
  coinMul() { const P = PETS[this.game.ext?.pet]; return P?.coins ? 1 + P.coins : 1; }

  set(id) {
    const g = this.game;
    if (this.mesh) { g.scene.remove(this.mesh); this.mesh = null; }
    this.id = id && PETS[id] && petOwned(g, id) ? id : null;
    if (!this.id) return;
    this.mesh = buildMesh(PETS[this.id]);
    const p = g.player.pos;
    this.pos.set(p.x - 1, (g.player.y || 0) + 1.6, p.z - 1);
    this.mesh.position.copy(this.pos);
    g.scene.add(this.mesh);
  }

  update(dt) {
    const g = this.game, pl = g.player;
    if ((g.ext?.pet || null) !== this.id) this.set(g.ext?.pet);
    if (!this.mesh || !pl) return;
    this.t += dt;
    const P = PETS[this.id];
    this.mesh.visible = !pl.dead && g.state === 'play';
    // 플레이어 왼쪽 뒤에서 둥실둥실 따라옴
    const yaw = pl.yaw ?? pl.rig?.rotation?.y ?? 0;
    const tx = pl.pos.x - Math.sin(yaw) * 1.1 + Math.cos(yaw) * 0.9;
    const tz = pl.pos.z - Math.cos(yaw) * 1.1 - Math.sin(yaw) * 0.9;
    const ty = (pl.y || 0) + (P.shape === 'beast' ? 0.3 : 1.5) + Math.sin(this.t * 3) * (P.shape === 'beast' ? 0.03 : 0.12);
    const k = Math.min(1, dt * 5);
    this.pos.x += (tx - this.pos.x) * k; this.pos.z += (tz - this.pos.z) * k; this.pos.y += (ty - this.pos.y) * k;
    if (P.shape === 'beast') this.pos.y = Math.max(this.pos.y, g.world.heightAt(this.pos.x, this.pos.z) + 0.3);
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.y = Math.atan2(tx - this.pos.x, tz - this.pos.z) || this.mesh.rotation.y;
    const W = this.mesh.userData.wings;
    if (W) { const a = Math.sin(this.t * 14) * 0.6; W[0].rotation.z = a; W[1].rotation.z = -a; }
    if (P.shape === 'orb' && Math.random() < dt * 10) g.fx.add.emit({ x: this.pos.x, y: this.pos.y, z: this.pos.z, vy: 0.6, life: 0.5, size: 2, color: P.glow, color2: P.color });
    // 공격: 가까운 적에게 불꽃(또는 박치기)
    if (!P.attack || g.paused || pl.dead) return;
    this.cd -= dt;
    if (this.cd > 0) return;
    const e = g.nearestEnemy(8, true);
    if (!e || e.dead || e.spawning) { this.cd = 0.4; return; }
    this.cd = P.attack.every;
    const c = e.center();
    const from = this.pos.clone();
    const A = P.attack;
    if (A.melee) { this.pos.lerp(c, 0.6); this.mesh.position.copy(this.pos); }
    else for (let i = 0; i < 10; i++) { const s = i / 10; g.fx.add.emit({ x: from.x + (c.x - from.x) * s, y: from.y + (c.y - from.y) * s, z: from.z + (c.z - from.z) * s, life: 0.25 + s * 0.1, size: 3, color: '#ffffff', color2: A.color }); }
    g.fx.spark(c.x, c.y, c.z, 8, A.color, 4);
    const hs = g.hitstop;
    g.damageEnemy(e, A.dmg * (1 + (lvEq(pl.level) - 1) * 0.04), false, 0, 0);
    g.hitstop = hs;
  }
}

// 장터의 수호령 탭
export function renderPets(g) {
  const cur = g.ext.pet;
  return '<div class="pz-note" style="margin-top:0">하나만 데리고 다닐 수 있어요. 능력치는 모든 직업에 함께 붙어요.</div><div class="pet-list">' + PET_ORDER.map((id) => {
    const P = PETS[id], own = petOwned(g, id), on = cur === id;
    const btn = own ? `<button data-pet="${id}" class="${on ? 'on' : ''}">${on ? '돌려보내기' : '데리고 다니기'}</button>` : P.price ? `<button data-pet="${id}" ${(g.ext.coins || 0) >= P.price ? '' : 'disabled'}>${P.price} 엽전에 데려오기</button>` : '<button disabled>잠김</button>';
    return `<div class="pet-row${own ? '' : ' lock'}${on ? ' on' : ''}"><i class="pet-dot" style="background:${P.color};box-shadow:0 0 8px ${P.glow}"></i><div class="sr-t"><b>${P.name}</b><small>${fmtStats(P.stats)}${P.coins ? ` · 엽전 +${Math.round(P.coins * 100)}%` : ''}${P.attack ? ' · 함께 공격' : ''}</small><small class="how">${own ? '' : P.how}</small></div>${btn}</div>`;
  }).join('') + '</div>';
}
