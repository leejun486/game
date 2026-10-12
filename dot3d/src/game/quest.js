// Game의 한 부분: 메인 퀘스트 진행 · 현상수배 · 석등 · 퀘스트 표시
//  main.js의 Game 클래스에서 떼어 낸 메서드들 (main.js가 Game.prototype에 붙임 — this는 game)
import * as THREE from 'three';
import { NPC } from '../entities.js';
import { QUESTS, BOUNTIES, KILL_NAME } from '../quests.js';
import { item, rollDrop, WEAPONS } from '../items.js';
import { DEMO, DEMO_LOCKED_GATES, DEMO_QUEST, DEMO_END_LINES } from '../edition.js';
import { V, DEMO_END } from './shared.js';

export class QuestPart {
  // ---------- 퀘스트 ----------
  curQuest() {
    if (DEMO && this.quest.step >= DEMO_END) return DEMO_QUEST;
    return QUESTS[this.quest.step] || null;
  }

  needMet(need, prog) { return Object.entries(need).every(([t, n]) => (prog[t] || 0) >= n); }

  progText(Q, prog) {
    if (Q.type === 'kill') return '<br>' + Object.entries(Q.need).map(([t, n]) => `${KILL_NAME[t]} <b>${Math.min(n, prog[t] || 0)}</b>/${n}`).join(' · ');
    if (Q.type === 'collect') return `<br>${Q.item} <b>${prog.n || 0}</b>/${Q.n}`;
    if (Q.type === 'light') return `<br>석등 <b>${this.litCount(Q)}</b>/${Q.n}`;
    if (this.qk.handles(Q)) return this.qk.progText(Q);
    return '';
  }

  // 대사 줄 앞의 "이름: "을 화자로
  sayLines(lines) {
    const m = lines[0].match(/^([^:]{1,8}):\s*/);
    const who = m ? { 분이: '약초꾼 분이', 청허: '떠돌이 도사 청허' }[m[1]] || m[1] : '';
    this.ui.dialog(who, lines.map((l) => l.replace(/^[^:]{1,8}:\s*/, '')));
  }

  startStep() {
    // 연출 장면이 진행 중이거나 곧 시작하면 끝난 뒤에 새 임무를 띄움
    if (this.cut || this.scenePending) { this.after(0.5, () => this.startStep()); return; }
    this.quest.prog = {};
    this.updateGates();
    const Q = this.curQuest();
    this.updateQuest();
    if (!Q) return;
    if (Q === DEMO_QUEST) { if (!this.flags.demoEnd) { this.flags.demoEnd = 1; this.save(false); this.playStory(DEMO_END_LINES); } return; }
    this.ui.banner('새 임무', Q.title, 2.2, '');
    if (this.qk.handles(Q)) this.qk.start(Q);
    if (Q.type === 'kill' || Q.type === 'collect') this.coach.tip('hunt', 4);
    this.audio.play('wave');
    // 다른 대화(달거울 조각 이야기 등)가 열려 있으면 닫힐 때까지 기다렸다가
    const say = () => { if (this.curQuest() !== Q || this.state !== 'play') return; if (this.ui.inDialog || this.story || this.cut || this.scenePending) return this.after(0.5, say); this.sayLines(Q.startLines); };
    if (Q.startLines && this.state === 'play') this.after(0.6, say);
    this.save(false);
  }

  completeStep() {
    const Q = this.curQuest();
    if (!Q) return;
    this.quest.step++;
    this.giveReward(Q.reward);
    this.shop.gain(40 + this.quest.step * 4, this.player.pos.clone().add(V(0, 2.8, 0)));
    this.ui.banner('임무 완료', Q.title, 2.2, 'win-banner');
    this.audio.play('victory');
    this.after(Q.type === 'wave' ? 4.2 : 2.4, () => this.startStep());
    this.updateGates();
    this.updateQuest();
    this.save(false);
  }

  giveReward(r) {
    if (!r) return;
    if (r.exp) { this.player.addExp(r.exp); this.fx.number(this.player.pos.clone().add(V(0, 2.4, 0)), `+${r.exp} EXP`, 'exp'); }
    if (r.item) {
      const id = r.item.startsWith('cls:') ? WEAPONS[this.player.cls][+r.item.slice(4)].id : r.item;
      this.after(1.2, () => this.pickup(id));
    }
  }

  // 퀘스트 단계에 맞춰 남문·일주문·뒷문을 열고 닫음 (gateAfter가 붙은 단계를 마치면 열림)
  updateGates(instant = false) {
    const NOTE = {
      south: ['drum', '남문이 열렸다! 남쪽으로 내려가면 죽림이다'],
      temple: ['bell', '금줄이 걷혔다! 일주문 너머 폐사찰로 들어갈 수 있다'],
      swamp: ['bell', '뒷문의 부적이 떨어졌다! 폐사찰 뒤편으로 가면 물안개 늪이다'],
      canyon: ['slam', '무너진 바위가 치워졌다! 늪 남동쪽 길로 가면 불가사리 협곡이다'],
      fortress: ['slam', '목책이 치워졌다! 협곡 남동쪽 산길로 가면 단풍 산성이다'],
      sea: ['bell', '금줄이 걷혔다! 산성 남서쪽 바위 사이 물길로 내려가면 용궁이다'],
      valley: ['bell', '대합이 입을 열었다! 용궁 남동쪽 샘물길로 올라가면 청류 계곡이다'],
      snowfield: ['slam', '넝쿨 바위가 치워졌다! 계곡 남서쪽 고원 길로 가면 백설 고원이다'],
      tomb: ['bell', '얼음 벽이 녹았다! 고원 남동쪽 고갯길로 내려가면 왕릉 고분이다'],
      market: ['slam', '무너진 돌담이 치워졌다! 고분 남서쪽 고개를 넘으면 도깨비 밤장터다'],
      tidal: ['slam', '궤짝이 치워졌다! 장터 남동쪽 갯바람 길로 가면 남해 갯벌 마을이다'],
      sky: ['bell', '바다 위로 무지개 다리가 놓였다! 갯벌 남서쪽 무지개를 건너면 천상 선계다'],
    };
    QUESTS.forEach((q, i) => {
      if (!q.gateAfter) return;
      const id = q.gateAfter, st = i + 1;
      if (DEMO && DEMO_LOCKED_GATES.has(id)) { this.world.setGate(id, false, instant); return; }
      this.world.setGate(id, this.quest.step >= st, instant);
      if (!instant && this.quest.step === st && !this.gateNotice?.[id]) {
        this.gateNotice = { ...(this.gateNotice || {}), [id]: true };
        const [snd, msg] = NOTE[id] || ['bell', '길이 열렸다!'];
        this.audio.play(snd);
        this.after(0.8, () => this.ui.toast(msg, 3.5));
      }
    });
  }

  questOnKill(e) {
    this.qk.onKill(e);
    const Q = this.curQuest();
    const pr = this.quest.prog;
    if (Q && Q.type === 'kill' && Q.need[e.type] && (pr[e.type] || 0) < Q.need[e.type]) {
      pr[e.type] = (pr[e.type] || 0) + 1;
      this.fx.number(V(e.pos.x, e.y + 2.6, e.pos.z), `${KILL_NAME[e.type]} ${pr[e.type]}/${Q.need[e.type]}`, 'exp');
      if (this.needMet(Q.need, pr)) this.completeStep();
      else this.updateQuest();
    }
    if (Q && Q.type === 'collect' && Q.from.includes(e.type) && Math.random() < Q.chance) {
      pr.n = (pr.n || 0) + 1;
      const c = e.center();
      this.fx.colorFire(c.x, c.y, c.z, 20, 0.4, '#ffe0a0', '#ff7a2a');
      this.fx.number(V(e.pos.x, e.y + 2.6, e.pos.z), `+${Q.item} ${pr.n}/${Q.n}`, 'exp');
      this.audio.play('coin');
      if (pr.n >= Q.n) this.completeStep(); else this.updateQuest();
    }
    const B = this.quest.bounty;
    if (B) {
      const need = BOUNTIES[B.i].need;
      if (need[e.type] && (B.prog[e.type] || 0) < need[e.type]) {
        B.prog[e.type] = (B.prog[e.type] || 0) + 1;
        if (this.needMet(need, B.prog)) { this.ui.toast('현상수배 완료! 수문장에게 돌아가자', 3); this.audio.play('levelup'); }
        this.updateQuest();
      }
    }
  }

  // 수문장의 현상수배 (메인 퀘스트 이후 반복)
  bountyTalk(n) {
    const B = this.quest.bounty;
    if (B && this.needMet(BOUNTIES[B.i].need, B.prog)) {
      this.ui.dialog(n.name, ['수고하셨소! 약속한 현상금이오.', '또 수배가 붙으면 알려 드리리다.'], () => {
        this.quest.bounty = null;
        this.giveReward({ exp: 150 + this.round * 30, item: rollDrop('boss', this.round, this.player.cls) });
        this.gainMats({ [['scrollW', 'scrollA', 'scrollG'][Math.floor(Math.random() * 3)]]: 2 });
        this.shop.gain(150 + this.round * 30);
        this.ui.banner('현상수배 완료', BOUNTIES[B.i].title, 2.2, 'win-banner');
        this.records.bounty();
        this.updateQuest(); this.save(false);
      });
    } else if (B) {
      this.ui.dialog(n.name, [`${BOUNTIES[B.i].title.replace('현상수배: ', '')} 일은 어찌 되었소? 아직 덜 잡은 것 같구려.`]);
    } else {
      const i = Math.floor(Math.random() * BOUNTIES.length);
      const need = Object.entries(BOUNTIES[i].need).map(([t, k]) => `${KILL_NAME[t]} ${k}마리`).join(', ');
      this.ui.dialog(n.name, [`마침 잘 오셨소. ${BOUNTIES[i].title}이 붙었소.`, `${need}을(를) 처치해 주시오. 현상금은 두둑이 드리리다.`], () => {
        this.quest.bounty = { i, prog: {} };
        this.ui.banner('현상수배', BOUNTIES[i].title, 2, '');
        this.updateQuest(); this.save(false);
      });
    }
  }

  litCount(Q) { return this.quest.lit.filter((i) => this.world.lanterns[i]?.region === (Q.region || 'temple')).length; }

  // 퀘스트 지역의 꺼진 석등에 불 밝히기
  lightLantern(idx) {
    const Q = this.curQuest();
    if (!Q || Q.type !== 'light' || this.quest.lit.includes(idx) || this.world.lanterns[idx].region !== (Q.region || 'temple')) return;
    this.quest.lit.push(idx);
    const L = this.world.lanterns[idx];
    this.addFlame(L);
    this.fx.colorFire(L.x, L.y, L.z, 30, 0.3, '#fff0c0', '#ff8a2a');
    this.fx.ring(V(L.x, this.world.heightAt(L.x, L.z), L.z), 2, '#ffd080', 0.4);
    this.audio.play('fire');
    if (this.litCount(Q) >= Q.n) this.completeStep(); else this.updateQuest();
    this.save(false);
  }

  addFlame(L) {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.14, 0), new THREE.MeshBasicMaterial({ color: '#ffd070' }));
    m.position.copy(L);
    m.userData.noOutline = true;
    this.scene.add(m);
    this.flames.push(m);
  }

  // 퀘스트 표시: 할 일이 있는 사람·물건 위에 느낌표, 멀리 있으면 발밑 화살표가 방향을 가리킴
  buildQuestMarkers() {
    const cv = document.createElement('canvas');
    cv.width = 8; cv.height = 16;
    const g = cv.getContext('2d');
    const px = (x, y, w, h, c) => { g.fillStyle = c; g.fillRect(x, y, w, h); };
    px(2, 0, 4, 11, '#1a1208'); px(2, 12, 4, 4, '#1a1208');
    px(3, 1, 2, 9, '#ffd040'); px(3, 13, 2, 2, '#ffd040');
    const tex = new THREE.CanvasTexture(cv);
    tex.magFilter = tex.minFilter = THREE.NearestFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    this.markers = [];
    for (let i = 0; i < 6; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      sp.scale.set(0.42, 0.84, 1);
      sp.userData.noOutline = true;
      sp.renderOrder = 40;
      sp.visible = false;
      this.scene.add(sp);
      this.markers.push(sp);
    }
    // 부탁이 있는 NPC: 푸른 느낌표
    const cv2 = document.createElement('canvas'); cv2.width = 8; cv2.height = 16;
    const g2 = cv2.getContext('2d');
    g2.fillStyle = '#081420'; g2.fillRect(2, 0, 4, 11); g2.fillRect(2, 12, 4, 4);
    g2.fillStyle = '#6ad8ff'; g2.fillRect(3, 1, 2, 9); g2.fillRect(3, 13, 2, 2);
    const tex2 = new THREE.CanvasTexture(cv2);
    tex2.magFilter = tex2.minFilter = THREE.NearestFilter;
    tex2.colorSpace = THREE.SRGBColorSpace;
    this.reqMarkers = [];
    for (let i = 0; i < 4; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex2, transparent: true, depthWrite: false }));
      sp.scale.set(0.42, 0.84, 1); sp.userData.noOutline = true; sp.renderOrder = 40; sp.visible = false;
      this.scene.add(sp); this.reqMarkers.push(sp);
    }
    // 바닥 화살표 (도트 꺾쇠 모양)
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.55); shape.lineTo(0.42, 0); shape.lineTo(0.2, 0); shape.lineTo(0.2, -0.45); shape.lineTo(-0.2, -0.45); shape.lineTo(-0.2, 0); shape.lineTo(-0.42, 0); shape.closePath();
    const arrow = new THREE.Mesh(new THREE.ShapeGeometry(shape), new THREE.MeshBasicMaterial({ color: '#ffd040', transparent: true, opacity: 0.85, depthWrite: false }));
    arrow.rotation.order = 'YXZ';
    arrow.userData.noOutline = true;
    arrow.renderOrder = 26;
    arrow.visible = false;
    arrow.scale.setScalar(1.5);
    this.scene.add(arrow);
    this.questArrow = arrow;
  }

  // 지금 퀘스트의 목표 지점들
  questTargets() {
    const Q = this.curQuest();
    const out = [];
    const npc = (k) => this.npcs.find((n) => n.kind === k);
    const regionCenter = (id) => { const R = this.world.regions.find((r) => r.id === id); return R.center ? V(R.center[0], 0, R.center[1]) : V(R.spawn[0], 0, R.spawn[2] + (id === 'temple' ? 8 : 6)); };
    if (!Q) {
      const B = this.quest.bounty;
      const g = npc('guard');
      if (!B || this.needMet(BOUNTIES[B.i].need, B.prog)) out.push({ pos: g.pos.clone().add(V(0, 2.5, 0)), mark: true });
      else out.push({ pos: regionCenter(BOUNTIES[B.i].region), area: BOUNTIES[B.i].region });
      return out;
    }
    if (this.qk.handles(Q)) return this.qk.targets(Q, regionCenter);
    if (Q.type === 'talk') { const n = npc(Q.npc); out.push({ pos: n.pos.clone().add(V(0, 2.5, 0)), mark: true }); }
    else if (Q.type === 'wave') { const d = this.world.drums.find((x) => x.region === Q.region); out.push({ pos: d.pos.clone().add(V(0, (d.promptY || 4) + 0.6, 0)), mark: !this.waveActive }); }
    else if (Q.type === 'light') this.world.lanterns.forEach((L, i) => { if (L.region === (Q.region || 'temple') && !this.quest.lit.includes(i)) out.push({ pos: L.clone().add(V(0, 1.1, 0)), mark: true }); });
    else if (Q.type === 'kill' || Q.type === 'collect') {
      const reg = Q.region || (Q.type === 'collect' || Q.need.fox ? 'bamboo' : 'temple');
      out.push({ pos: regionCenter(reg), area: reg });
    }
    return out;
  }

  updateQuestMarkers(dt) {
    const T = this.state === 'play' && !document.body.classList.contains('shot') ? this.questTargets() : [];
    const p = this.player.pos;
    let mi = 0;
    for (const t of T) {
      if (!t.mark || mi >= this.markers.length) continue;
      const m = this.markers[mi++];
      m.visible = true;
      m.position.copy(t.pos);
      m.position.y += Math.abs(Math.sin(this.time * 3)) * 0.25;
    }
    for (; mi < this.markers.length; mi++) this.markers[mi].visible = false;
    const RN = this.state === 'play' ? this.requests.markNpcs() : [];
    this.reqMarkers.forEach((m, i) => {
      const n = RN[i];
      m.visible = !!n && Math.hypot(n.pos.x - p.x, n.pos.z - p.z) < 40;
      if (m.visible) { m.position.copy(n.pos); m.position.y += 2.5 + Math.abs(Math.sin(this.time * 3 + 1)) * 0.25; }
    });
    // 가장 가까운 목표가 멀면 화살표
    let best = null, bd = Infinity;
    for (const t of T) {
      if (t.area && this.world.regionAt(p.x, p.z).id === t.area) continue;
      const d = Math.hypot(t.pos.x - p.x, t.pos.z - p.z);
      if (d < bd) { bd = d; best = t; }
    }
    const a = this.questArrow;
    a.visible = !!best && bd > 9 && !this.waveActive && !this.player.dead;
    if (a.visible) {
      const yaw = Math.atan2(best.pos.x - p.x, best.pos.z - p.z);
      a.position.set(p.x + Math.sin(yaw) * 2.1, this.player.y + 0.06, p.z + Math.cos(yaw) * 2.1);
      a.rotation.set(-Math.PI / 2, yaw + Math.PI, 0); // 꺾쇠 끝이 목표 쪽
      a.material.opacity = 0.55 + Math.sin(this.time * 5) * 0.25;
    }
  }
}
