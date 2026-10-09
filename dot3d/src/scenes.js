// 연출 장면 모음 (cutscene.js로 재생)
//  prologue  : 첫 밤, 남문으로 들어서는 주인공과 북 곁에서 피어오르는 도깨비불
//  palaceWin : 도깨비 대왕을 처음 물리친 뒤 달려오는 수문장
//  seaWin    : 동해 용왕을 처음 물리친 뒤 물빛이 돌아오는 용궁과 해랑
//  mirror    : 엔딩 직전, 열 조각이 주인공 둘레를 돌다 하나의 달로 모임
import * as THREE from 'three';
import { Cutscene } from './cutscene.js';
import { SHARD_MAX } from './story.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const rand = (a, b) => a + Math.random() * (b - a);

function drumOf(g, region) { return g.world.drums.find((d) => d.region === region); }
function npc(g, kind) { return g.npcs.find((n) => n.kind === kind); }
function sideOf(g, a, b, dist) {
  // a 곁에서 b 쪽으로 dist 떨어진, 걸을 수 있는 자리
  const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1;
  let x = a.x + (dx / l) * dist, z = a.z + (dz / l) * dist;
  if (g.world.isBlocked(x, z, 0.35, g.world.heightAt(x, z))) { const w = g.world.randomWalkable(a.x, a.z, 1.2, 2.2); if (w) { x = w.x; z = w.z; } }
  return [x, z];
}

export function playScene(g, id, onEnd) {
  const make = SCENES[id];
  if (!make || g.cut) { onEnd?.(g); return; }
  g.cut = new Cutscene(g, make(g), { finish: FINISH[id], onEnd });
}

const SCENES = {
  prologue(g) {
    const p = g.player, dr = drumOf(g, 'palace');
    const start = [p.pos.x, p.pos.z + 3.5], stop = [p.pos.x, p.pos.z - 2.5];
    return [
      { do: () => { p.pos.set(start[0], g.world.heightAt(start[0], start[1]), start[1]); p.yaw = Math.PI; g.nightTarget = Math.max(g.nightTarget, 0.55); g.night = Math.max(g.night, 0.55); } },
      { cam: [dr.pos.x + 2, 1.2, dr.pos.z - 1], k: 1.15, speed: 1.6 },
      { wait: 1.2 },
      { do: () => {
        g.audio.play('laugh');
        for (let i = 0; i < 4; i++) g.after(i * 0.35, () => { const x = dr.pos.x + rand(-3, 3), z = dr.pos.z + rand(-2, 3); g.fx.colorFire(x, g.world.heightAt(x, z) + 0.6, z, 26, 0.5, '#9ff0ff', '#2050ff'); });
      } },
      { wait: 1.6 },
      { cam: 'player', k: 0.8, speed: 2.2 },
      { walk: 'player', to: stop, speed: 2.6 },
      { face: 'npc:guard', at: 'player' },
      { do: () => { const n = npc(g, 'guard'); g.fx.number(n.pos.clone().add(V(0, 2.3, 0)), '!', 'alert'); g.audio.play('talk'); } },
      { wait: 0.9 },
    ];
  },

  palaceWin(g) {
    const p = g.player, n = npc(g, 'guard');
    const to = sideOf(g, p.pos, n.pos, 1.6);
    return [
      { cam: [(p.pos.x + n.pos.x) / 2, p.y + 1, (p.pos.z + n.pos.z) / 2 - 0.5], k: 0.85, speed: 2 },
      { walk: 'npc:guard', to, speed: 3.6 },
      { face: 'npc:guard', at: 'player' },
      { cam: 'player', k: 0.7, speed: 2.4 },
      { say: '수문장 박돌쇠', lines: ['해냈구려! 도깨비 대왕이 꽁무니를 빼고 달아나는 꼴이라니!', '그 빛나는 조각은… 대왕이 품고 있던 것이오? 달빛을 머금은 걸 보니 예사 물건이 아니구려.'] },
      { walk: 'npc:guard', to: [n.home.x, n.home.z], speed: 3.4, wait: false },
      { wait: 0.7 },
    ];
  },

  seaWin(g) {
    const p = g.player, n = npc(g, 'envoy'), dr = drumOf(g, 'sea');
    const to = sideOf(g, p.pos, n.pos, 1.6);
    return [
      { cam: [dr.pos.x, dr.pos.y + 2, dr.pos.z - 2], k: 1.1, speed: 1.4 },
      { do: () => {
        g.audio.play('bell');
        for (let i = 0; i < 40; i++) g.after(i * 0.05, () => { const x = dr.pos.x + rand(-8, 8), z = dr.pos.z + rand(-6, 6); g.fx.add.emit({ x, y: g.world.heightAt(x, z) + 0.2, z, vy: rand(1.5, 3), life: 1.4, size: 3, endSize: 1, color: '#e8fbff', color2: '#4ab0ff' }); });
      } },
      { wait: 1.8 },
      { cam: 'player', k: 0.75, speed: 2.2 },
      { walk: 'npc:envoy', to, speed: 3.4 },
      { face: 'npc:envoy', at: 'player' },
      { say: '용녀 해랑', lines: ['보세요… 용궁에 물빛이 돌아오고 있어요.', '고마워요, 뭍의 손님. 용왕님도 곧 정신을 차리실 거예요.'] },
      { walk: 'npc:envoy', to: [n.home.x, n.home.z], speed: 3.2, wait: false },
      { wait: 0.6 },
    ];
  },

  mirror(g) {
    const p = g.player;
    const S = (g._shardFx = []);
    return [
      { cam: 'player', k: 0.72, speed: 2 },
      { do: () => {
        const mat = new THREE.MeshBasicMaterial({ color: '#fff4d0', transparent: true, opacity: 0.95, side: THREE.DoubleSide });
        for (let i = 0; i < SHARD_MAX; i++) {
          const m = new THREE.Mesh(new THREE.CircleGeometry(0.22, 3 + (i % 3)), mat.clone());
          m.userData.noOutline = true; m.renderOrder = 30;
          m.userData.a = (i / SHARD_MAX) * Math.PI * 2; m.userData.h = rand(0.4, 1.6);
          g.scene.add(m); S.push(m);
        }
        g.audio.play('levelup');
      } },
      // 모든 조각이 주인공 둘레를 돌며 떠오름
      { dur: 2.6, anim: (g2, k, dt) => {
        S.forEach((m, i) => {
          m.userData.a += dt * (1.2 + k * 3);
          const r = 3.2 * (1 - k * 0.75), h = p.y + m.userData.h + k * 2.4;
          m.position.set(p.pos.x + Math.sin(m.userData.a) * r, h, p.pos.z + Math.cos(m.userData.a) * r);
          m.rotation.set(m.userData.a, m.userData.a * 0.7, 0);
          if (Math.random() < dt * 20) g2.fx.add.emit({ x: m.position.x, y: m.position.y, z: m.position.z, vy: 0.4, life: 0.5, size: 2, endSize: 1, color: '#ffffff', color2: '#f0d890' });
        });
      } },
      // 하나로 모여 보름달이 됨
      { dur: 1.2, anim: (g2, k) => {
        const c = V(p.pos.x, p.y + 4.2, p.pos.z);
        S.forEach((m) => { m.position.lerp(c, k * 0.35); m.scale.setScalar(1 + k * 2.5); m.material.opacity = 0.95 - k * 0.4; });
      } },
      { do: () => {
        for (const m of S) { g.scene.remove(m); m.geometry.dispose(); m.material.dispose(); }
        S.length = 0;
        const c = V(p.pos.x, p.y + 4.2, p.pos.z);
        const moon = new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 16), new THREE.MeshBasicMaterial({ color: '#fff8e0' }));
        moon.position.copy(c); moon.userData.noOutline = true;
        g.scene.add(moon); g._moon = moon;
        g.ui.flash('#ffffff', 0.7);
        g.audio.play('victory');
        for (let r = 0; r < 3; r++) g.fx.ring(V(p.pos.x, p.y, p.pos.z), 2 + r * 2, '#fff2c0', 0.5 + r * 0.2);
        for (let i = 0; i < 60; i++) g.fx.add.emit({ x: c.x, y: c.y, z: c.z, vx: rand(-4, 4), vy: rand(-2, 4), vz: rand(-4, 4), life: rand(0.6, 1.4), size: 3, endSize: 1, color: '#ffffff', color2: '#f0d890' });
      } },
      { wait: 1.8 },
    ];
  },
};

// 건너뛰거나 끝날 때 남는 것 정리 (사람은 제자리로)
const FINISH = {
  prologue(g) { const n = npc(g, 'guard'); n.baseYaw = n.baseYaw; },
  palaceWin(g) { const n = npc(g, 'guard'); n.pos.copy(n.home); },
  seaWin(g) { const n = npc(g, 'envoy'); n.pos.copy(n.home); },
  mirror(g) {
    for (const m of g._shardFx || []) { g.scene.remove(m); m.geometry.dispose(); m.material.dispose(); }
    g._shardFx = [];
    if (g._moon) { g.scene.remove(g._moon); g._moon.geometry.dispose(); g._moon.material.dispose(); g._moon = null; }
  },
};
