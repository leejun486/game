// Game의 한 부분: 떨어진 물건 줍기 · 장비 끼고 벗기 · 분해 · 자동 착용
//  main.js의 Game 클래스에서 떼어 낸 메서드들 (main.js가 Game.prototype에 붙임 — this는 game)
import * as THREE from 'three';
import { CLASS_ORDER } from '../classes.js';
import { gearScore, salvageExp, BAG_MAX, GEAR_SLOTS, rarityOf, SETS } from '../gear.js';
import { item, RARITY, ULTS } from '../items.js';
import { rand } from '../util.js';
import { drop } from '../dispose.js';
import { MATS } from '../enhance.js';
import { salvageCoins, salvageDust } from '../shop.js';
import { V } from './shared.js';

export class ItemsPart {
  // 적이 떨어뜨린 장비: 빛기둥과 함께 바닥에서 빙글빙글, 가까이 가면 빨려와 획득
  spawnDrop(pos, id) {
    const it = typeof id === 'object' ? id : item(id);
    const rar = typeof id === 'object' ? rarityOf(it) : RARITY[it.tier];
    const col = new THREE.Color(rar.color);
    const g = new THREE.Group();
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.34), new THREE.MeshBasicMaterial({ color: col }));
    const core = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
    core.userData.noOutline = true;
    box.add(core);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.3, 4, 8, 1, true), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    beam.position.y = 2;
    g.add(box, beam);
    g.position.set(pos.x, this.world.heightAt(pos.x, pos.z), pos.z);
    this.scene.add(g);
    const vel = V(rand(-2, 2), 5, rand(-2, 2));
    this.drops.push({ id, g, box, beam, vel, y: 0.6, t: 0, col });
    this.fx.ring(g.position, 1.2, rar.color, 0.4);
  }

  updateDrops(dt) {
    const p = this.player;
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      d.t += dt;
      const gy = this.world.heightAt(d.g.position.x, d.g.position.z);
      if (d.t < 0.8) {
        // 튀어 오른 뒤 떨어짐
        d.vel.y -= 14 * dt;
        this.world.move(d.g.position, d.vel.x * dt, d.vel.z * dt, 0.1);
        d.y = Math.max(0.35, d.y + d.vel.y * dt);
      } else d.y = 0.45 + Math.sin(d.t * 3) * 0.08;
      d.box.rotation.y += dt * 2.5;
      d.box.position.y = d.y;
      d.g.position.y = gy;
      d.beam.material.opacity = 0.25 + Math.sin(d.t * 5) * 0.08;
      if (Math.random() < dt * 8) this.fx.add.emit({ x: d.g.position.x + rand(-0.3, 0.3), y: gy + rand(0.2, 1.5), z: d.g.position.z + rand(-0.3, 0.3), vy: 0.8, life: 0.6, size: 2, color: '#ffffff', color2: '#' + d.col.getHexString() });
      const dist = Math.hypot(p.pos.x - d.g.position.x, p.pos.z - d.g.position.z);
      if (d.t > 0.8 && dist < 3.5 && !p.dead) {
        // 끌려옴
        const k = Math.min(1, dt * 8);
        d.g.position.x += (p.pos.x - d.g.position.x) * k;
        d.g.position.z += (p.pos.z - d.g.position.z) * k;
      }
      if (d.t > 0.8 && dist < 0.7) {
        drop(this.scene, d.g);
        this.drops.splice(i, 1);
        this.pickup(d.id);
      }
    }
  }

  pickup(id) {
    if (typeof id === 'object') { this.pickupGear(id); return; }
    this.records.item(id);
    const it = item(id);
    const r = RARITY[it.tier];
    const p = this.player;
    this.audio.play('coin');
    this.fx.spark(p.pos.x, p.y + 1, p.pos.z, 14, r.color, 4);
    if (this.inv.has(id)) {
      p.addExp(15 + it.tier * 15);
      this.ui.toast(`이미 가진 ${it.name} → 경험치 +${15 + it.tier * 15}`, 2.2);
    } else {
      this.inv.add(id);
      this.codex.dirty(); p.recalc();
      if (it.perk) {
        this.ui.banner(it.name, it.ult ? `보스 무기 획득! 고유 기술 「${ULTS[it.ult].name}」 — B 키로 착용 후 U` : `보스 전용 장비 획득! — B 키로 착용`, 3.2, 'win-banner');
        this.audio.play('levelup');
        this.fx.ring(p.pos, 2.4, r.color, 0.5);
        this.fx.colorFire(p.pos.x, p.y + 0.5, p.pos.z, 40, 0.6, '#ffe0a0', r.color);
      } else this.ui.toast(`획득! [${r.name}] ${it.name} — B 키로 가방 열기`, 3);
      this.ui.newItem = true;
      this.ui.refreshBag();
    }
    this.save(false);
  }

  // ---------- 방어구·장신구 ----------
  pickupGear(g) {
    this.coach.tip('bag', 1.2);
    this.records.gear(g);
    const r = rarityOf(g);
    const p = this.player;
    this.audio.play('coin');
    this.fx.spark(p.pos.x, p.y + 1, p.pos.z, 14, r.color, 4);
    if (this.gear.filter((x) => !this.isEquipped(x)).length >= BAG_MAX) {
      // 가방이 꽉 차면 바로 분해
      const ex = salvageExp(g);
      p.addExp(ex);
      this.shop.gain(salvageCoins(g));
      this.mats.dust = (this.mats.dust || 0) + salvageDust(g);
      this.ui.toast(`가방이 가득 차서 ${g.name}을(를) 분해 → 경험치 +${ex} · 엽전 +${salvageCoins(g)}`, 2.4);
      return;
    }
    this.gear.push(g);
    const cur = this.gearInSlot(g.kind === 'ring' ? this.worseRingSlot() : g.kind);
    const better = gearScore(g) > gearScore(cur);
    this.ui.toast(g.set ? `세트 획득! ${SETS[g.set].name} · ${g.name}` : `획득! [${r.name}] ${g.name}${better ? ' ▲ 지금 것보다 좋아요' : ''}`, 2.6);
    if (g.tier >= 3 || g.set) { this.audio.play('levelup'); this.fx.ring(p.pos, 2, r.color, 0.5); }
    this.ui.newItem = true;
    this.ui.refreshBag();
    this.save(false);
  }

  eqOf(cls = this.player.cls) { const pr = this.progressOf(cls); return (pr.eq ||= {}); }

  gearByUid(uid) { return this.gear.find((g) => g.uid === uid) || null; }

  gearInSlot(slot, cls) { return this.gearByUid(this.eqOf(cls)[slot]); }

  equippedGear(cls) { const eq = this.eqOf(cls); return GEAR_SLOTS.map((s) => this.gearByUid(eq[s])).filter(Boolean); }

  isEquipped(g, cls = this.player.cls) { return Object.values(this.eqOf(cls)).includes(g.uid); }

  isEquippedAny(g) { return CLASS_ORDER.some((c) => this.isEquipped(g, c)); }

  // 강화 재료 얻기 (주문서·혼석): 머리 위 글자 + 큰 것은 알림
  gainMats(m, at) {
    const keys = Object.keys(m);
    if (!keys.length) return;
    for (const k of keys) this.mats[k] = (this.mats[k] || 0) + m[k];
    if (keys.some((k) => k.startsWith('scroll'))) this.coach.tip('enh', 2);
    const txt = keys.map((k) => `${MATS[k].name}${m[k] > 1 ? ' ×' + m[k] : ''}`).join(' · ');
    if (at) this.fx.number(V(at.x, (at.y || 0) + 3, at.z), txt, 'alert');
    if (m.soul || m.bless) this.ui.toast(`얻음: ${txt}`, 2.4); else this.ui.toast(`얻음: ${txt}`, 1.4);
    this.audio.play('coin');
    this.ui.refreshBag();
  }

  // 반지는 빈 칸부터, 둘 다 차 있으면 점수가 낮은 쪽
  worseRingSlot() {
    const a = this.gearInSlot('ring1'), b = this.gearInSlot('ring2');
    if (!a) return 'ring1';
    if (!b) return 'ring2';
    return gearScore(a) <= gearScore(b) ? 'ring1' : 'ring2';
  }

  equipGear(uid, slot) {
    const g = this.gearByUid(uid);
    if (!g) return;
    const p = this.player;
    const eq = this.eqOf();
    if (this.isEquipped(g)) return;
    // 다른 직업이 끼고 있던 것이면 그쪽에서 벗김
    for (const c of CLASS_ORDER) if (c !== p.cls) { const e2 = this.eqOf(c); for (const k of Object.keys(e2)) if (e2[k] === uid) delete e2[k]; }
    slot = slot || (g.kind === 'ring' ? this.worseRingSlot() : g.kind);
    eq[slot] = uid;
    this.afterGearChange(rarityOf(g).color);
    this.audio.play('coin');
  }

  unequipGear(slot) {
    const eq = this.eqOf();
    if (!eq[slot]) return;
    delete eq[slot];
    this.afterGearChange('#a89e8a');
  }

  salvageGear(uids) {
    let ex = 0, n = 0, coins = 0, dust = 0;
    for (const uid of uids) {
      const g = this.gearByUid(uid);
      if (!g || g.lock || this.isEquipped(g) || CLASS_ORDER.some((c) => this.isEquipped(g, c))) continue;
      ex += salvageExp(g); n++; coins += salvageCoins(g); dust += salvageDust(g);
      this.gear.splice(this.gear.indexOf(g), 1);
    }
    if (!n) return;
    this.player.addExp(ex);
    this.shop.gain(coins);
    this.mats.dust = (this.mats.dust || 0) + dust;
    this.audio.play('crit');
    this.ui.toast(`${n}개 분해 → 경험치 +${ex} · 엽전 +${coins} · ${MATS.dust.name} +${dust}`, 2.4);
    this.ui.refreshBag();
    this.ui.setClass(this.player.cfg, this.player);
    this.save(false);
  }

  afterGearChange(color) {
    const p = this.player;
    p.buildRig();
    p.recalc();
    const pos = V(p.pos.x, p.y, p.pos.z);
    this.fx.ring(pos, 1.6, color, 0.4);
    for (let i = 0; i < 20; i++) this.fx.add.emit({ x: pos.x + rand(-0.4, 0.4), y: pos.y + rand(0, 1.6), z: pos.z + rand(-0.4, 0.4), vy: rand(0.5, 2), life: rand(0.4, 0.8), size: 2, color: '#ffffff', color2: color });
    this.ui.setClass(p.cfg, p);
    this.ui.refreshBag();
    this.save(false);
  }

  // 자동 착용: 지금 직업이 가진 것 중 가장 좋은 무기·옷·방어구·장신구로 한 번에 바꿈
  //  무기는 공격력(고유 기술이 있으면 조금 더), 옷은 체력과 받는 피해 감소, 방어구·장신구는 옵션 점수(gearScore)
  //  다른 직업이 끼고 있는 방어구·장신구는 빼앗지 않음
  autoEquip() {
    const p = this.player, cls = p.cls, pr = this.progressOf(cls);
    const owned = [...this.inv].map((id) => item(id)).filter(Boolean);
    const wScore = (it) => it.atk + (it.ult ? 0.04 : 0) + it.tier * 0.001;
    const oScore = (it) => it.hp + it.def * 500 + (it.perk ? 15 : 0) + it.tier * 0.01;
    let changed = 0;
    const bestW = owned.filter((it) => it.kind === 'weapon' && it.cls === cls).sort((a, b) => wScore(b) - wScore(a))[0];
    const bestO = owned.filter((it) => it.kind === 'outfit').sort((a, b) => oScore(b) - oScore(a))[0];
    const curW = item(pr.weapon), curO = item(pr.outfit);
    if (bestW && (!curW || wScore(bestW) > wScore(curW))) { pr.weapon = bestW.id; changed++; }
    if (bestO && (!curO || oScore(bestO) > oScore(curO))) { pr.outfit = bestO.id; changed++; }
    // 방어구·장신구
    const eq = this.eqOf(cls);
    const others = new Set(CLASS_ORDER.filter((c) => c !== cls).flatMap((c) => Object.values(this.eqOf(c))));
    const free = this.gear.filter((g) => !others.has(g.uid)).sort((a, b) => gearScore(b) - gearScore(a));
    const want = {};
    for (const k of ['gloves', 'legs', 'belt']) want[k] = free.find((g) => g.kind === k)?.uid;
    // 반지 두 칸: 이미 낀 좋은 반지는 그 칸에 그대로, 남은 칸만 채움
    const top = free.filter((g) => g.kind === 'ring').slice(0, 2).map((g) => g.uid);
    want.ring1 = top.includes(eq.ring1) ? eq.ring1 : null;
    want.ring2 = top.includes(eq.ring2) ? eq.ring2 : null;
    for (const uid of top) {
      if (uid === want.ring1 || uid === want.ring2) continue;
      if (!want.ring1) want.ring1 = uid; else if (!want.ring2) want.ring2 = uid;
    }
    for (const slot of GEAR_SLOTS) {
      const uid = want[slot];
      if (!uid || eq[slot] === uid) continue;
      eq[slot] = uid;
      changed++;
    }
    if (!changed) { this.ui.toast('이미 가장 좋은 장비를 끼고 있어요', 1.8); this.audio.play('denied'); return 0; }
    const best = [bestW, bestO, ...this.equippedGear(cls)].filter(Boolean).reduce((a, b) => (b.tier > a.tier ? b : a));
    this.afterGearChange(rarityOf(best).color || '#ffd76a');
    this.audio.play('draw');
    this.ui.toast(`자동 착용: ${changed}개를 바꿨어요`, 2);
    return changed;
  }
}
