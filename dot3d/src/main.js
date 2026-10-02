import * as THREE from 'three';
import { PixelRenderer } from './pixel.js';
import { World } from './world.js';
import { FX } from './fx.js';
import { Audio } from './audio.js';
import { UI } from './ui.js';
import { Player, Enemy, NPC, Bird } from './entities.js';
import { shared } from './materials.js';
import { loadSave, writeSave, clearSave } from './save.js';
import { CLASSES, CLASS_ORDER } from './classes.js';
import { drawPortrait } from './ui.js';
import { clamp, lerp, rand, angleDiff, damp } from './util.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

class Game {
  constructor() {
    this.pixel = new PixelRenderer(document.getElementById('stage'));
    const scene = (this.scene = new THREE.Scene());
    scene.background = new THREE.Color('#3b4a3a');
    this.time = 0;
    this.state = 'title';
    this.night = 0;
    this.nightTarget = 0;
    this.hitstop = 0;
    this.shakeAmt = 0;
    this.kills = 0;
    this.hitCombo = 0;
    this.lastHitTime = -10;
    this.alarm = 0;
    this.enemies = [];
    this.projectiles = [];
    this.timers = [];
    this.spawnQueue = [];
    this.wave = 0;
    this.round = 0;
    this.stage = 0;
    this.waveActive = false;
    this.focus = V(0, 0, 10);
    this.lead = V();

    this.setupLights();
    this.world = new World(scene);
    this.fx = new FX(scene, this.pixel);
    this.audio = new Audio();
    this.ui = new UI(this);
    this.player = new Player(this);

    this.npcs = [
      new NPC(this, 'guard', -12.4, 6.4, 0.6, '수문장 박돌쇠', []),
      new NPC(this, 'lady', 19.2, 7.5, -0.9, '나인 연이', [
        '어머, 검객님. 이 궁은 밤만 되면 도깨비불이 떠다녀요.',
        '도깨비들은 장난이 심하지만, 혼쭐을 내주면 금방 달아난답니다.',
        '푸른 불덩이를 쏘는 녀석은 검으로 쳐내면 튕겨낼 수 있대요!',
        '(N 키로 낮과 밤을 바꿔 볼 수 있어요. 싸우는 중엔 안 돼요.)',
      ]),
    ];
    this.birds = [];
    for (const [x, z] of [[-6, 6], [-5.4, 6.6], [6.5, 15], [7, 14.3], [-15, 9], [14, -0.5], [0.5, -9.5]]) {
      this.birds.push(new Bird(this, V(x, this.world.heightAt(x, z), z)));
    }

    this.world.buildNav();
    this.flowT = 0;
    this.setupInput();
    this.bestCombo = 0;
    this.saveT = 15;
    this.selectedCls = 'sword';
    this.setupClassSelect();
    this.applySave(loadSave());
    this.ui.setClass(this.player.cfg);
    this.updateQuest();
    // 탭을 닫거나 숨길 때 저장
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.save(false); });
    window.addEventListener('pagehide', () => this.save(false));
    this.last = performance.now();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  // ---------- 조명 ----------
  setupLights() {
    const s = this.scene;
    this.hemi = new THREE.HemisphereLight('#dfe9ff', '#8a7c62', 1.15);
    s.add(this.hemi);
    const sun = (this.sun = new THREE.DirectionalLight('#fff0d6', 2.5));
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = -30; sc.right = 30; sc.top = 30; sc.bottom = -30; sc.near = 1; sc.far = 140;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.03;
    s.add(sun, sun.target);
    this.sunOffset = V(-16, 30, 14);
    this.points = [];
    for (let i = 0; i < 8; i++) {
      const l = new THREE.PointLight('#ffb35c', 0, 9, 1.4);
      s.add(l);
      this.points.push(l);
    }
    this.lightTimer = 0;
  }

  updateLights(dt) {
    const n = this.night;
    shared.night.value = n;
    const c = (a, b) => new THREE.Color(a).lerp(new THREE.Color(b), n);
    this.sun.color.copy(c('#fff0d6', '#8ea6ff'));
    this.sun.intensity = lerp(2.5, 0.9, n);
    this.hemi.color.copy(c('#dfe9ff', '#55669e'));
    this.hemi.groundColor.copy(c('#8a7c62', '#262438'));
    this.hemi.intensity = lerp(1.15, 0.95, n);
    this.scene.background.copy(c('#3b4a3a', '#0e1220'));
    this.world.setNight(n);

    // 그림자 카메라를 초점에 맞추되 섀도 텍셀 단위로 스냅 (그림자 지글거림 방지)
    const f = this.focus;
    const dir = _a.copy(this.sunOffset).normalize();
    const right = _b.crossVectors(_c.set(0, 1, 0), dir).normalize();
    const up = _c.crossVectors(dir, right).normalize();
    const texel = 60 / 2048;
    const rx = Math.round(f.dot(right) / texel) * texel;
    const uy = Math.round(f.dot(up) / texel) * texel;
    const dz = f.dot(dir);
    const snapped = _d.copy(right).multiplyScalar(rx).addScaledVector(up, uy).addScaledVector(dir, dz);
    this.sun.target.position.copy(snapped);
    this.sun.position.copy(snapped).add(this.sunOffset);
    this.sun.target.updateMatrixWorld();

    // 가까운 석등에 점광원 배정
    this.lightTimer -= dt;
    if (this.lightTimer <= 0) {
      this.lightTimer = 0.25;
      const L = [...this.world.lanterns].sort((a, b) => a.distanceToSquared(f) - b.distanceToSquared(f));
      for (let i = 0; i < 6; i++) this.points[i].position.copy(L[i]);
      this.points[6].position.copy(this.world.hallLightPos[0]);
      this.points[7].position.copy(this.world.hallLightPos[1]);
    }
    for (let i = 0; i < 8; i++) {
      const fl = 1 + Math.sin(this.time * 9 + i * 1.7) * 0.06 + Math.sin(this.time * 23 + i) * 0.04;
      this.points[i].intensity = n * (i < 6 ? 22 : 30) * fl;
      this.points[i].distance = i < 6 ? 8 : 11;
    }
  }

  // ---------- 입력 ----------
  setupInput() {
    this.keys = new Set();
    this.input = { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null };
    this.mouse = { x: 0, y: 0, t: -10 };
    window.addEventListener('keydown', (e) => {
      if (e.repeat) { this.keys.add(e.code); return; }
      this.keys.add(e.code);
      this.onKey(e.code, e);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    const stage = document.getElementById('app');
    stage.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; this.mouse.t = this.time; });
    stage.addEventListener('mousedown', (e) => {
      this.mouse.x = e.clientX; this.mouse.y = e.clientY; this.mouse.t = this.time;
      if (this.state === 'title') { const c = e.target.closest && e.target.closest('.cls'); if (c) this.selectClass(c.dataset.cls); this.start(); return; }
      this.audio.unlock();
      if (this.ui.inDialog) { this.ui.advance(); return; }
      if (this.state !== 'play') return;
      if (e.button === 0) this.player.startAttack(this.readInput());
      if (e.button === 2) this.player.startSkill(this.readInput());
    });
    stage.addEventListener('contextmenu', (e) => e.preventDefault());
    stage.addEventListener('wheel', (e) => { this.pixel.zoom(e.deltaY > 0 ? -1 : 1); this.saveT = Math.min(this.saveT, 2); }, { passive: true });
    this.setupTouch();
  }

  setupTouch() {
    const pad = document.getElementById('touch');
    if (!('ontouchstart' in window)) return;
    pad.classList.add('on');
    document.body.classList.add('touch');
    // 대화창을 탭하면 다음 대사
    document.getElementById('dialog').addEventListener('touchstart', (e) => { e.preventDefault(); this.ui.advance(); }, { passive: false });
    document.getElementById('gameover').addEventListener('touchstart', (e) => { e.preventDefault(); if (this.state === 'dead') this.retry(); }, { passive: false });
    const stick = document.getElementById('stick');
    const knob = stick.firstElementChild;
    this.touchMove = { x: 0, z: 0 };
    let id = null, ox = 0, oy = 0;
    const area = document.getElementById('stick-area');
    area.addEventListener('touchstart', (e) => {
      if (this.state === 'title') this.start();
      const t = e.changedTouches[0];
      id = t.identifier; ox = t.clientX; oy = t.clientY;
      stick.style.left = ox + 'px'; stick.style.top = oy + 'px';
      stick.classList.add('show');
      e.preventDefault();
    }, { passive: false });
    area.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) if (t.identifier === id) {
        let dx = t.clientX - ox, dy = t.clientY - oy;
        const l = Math.hypot(dx, dy), m = 50;
        if (l > m) { dx *= m / l; dy *= m / l; }
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
        this.touchMove.x = dx / m; this.touchMove.z = dy / m;
      }
      e.preventDefault();
    }, { passive: false });
    const end = (e) => {
      for (const t of e.changedTouches) if (t.identifier === id) {
        id = null; this.touchMove.x = 0; this.touchMove.z = 0;
        knob.style.transform = ''; stick.classList.remove('show');
      }
    };
    area.addEventListener('touchend', end);
    area.addEventListener('touchcancel', end);
    for (const b of document.querySelectorAll('#touch [data-k]')) {
      b.addEventListener('touchstart', (e) => { e.preventDefault(); if (this.state === 'title') this.start(); else this.onKey(b.dataset.k); }, { passive: false });
    }
  }

  readInput() {
    const k = this.keys;
    let x = 0, z = 0;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyW') || k.has('ArrowUp')) z -= 1;
    if (k.has('KeyS') || k.has('ArrowDown')) z += 1;
    if (this.touchMove && (this.touchMove.x || this.touchMove.z)) { x = this.touchMove.x; z = this.touchMove.z; }
    const l = Math.hypot(x, z);
    const inp = this.input;
    inp.moveLen = Math.min(1, l);
    inp.mx = l > 0 ? x / Math.max(1, l) : 0;
    inp.mz = l > 0 ? z / Math.max(1, l) : 0;
    if (l > 1) { inp.mx = x / l; inp.mz = z / l; }
    inp.mouseRecent = this.time - this.mouse.t < 3;
    inp.mouseWorld = inp.mouseRecent ? this.pixel.unproject(this.mouse.x, this.mouse.y, this.player.pos.y + 0.6) : null;
    if (this.ui.inDialog || this.state !== 'play') { inp.moveLen = 0; inp.mx = inp.mz = 0; }
    return inp;
  }

  // ---------- 직업 선택 ----------
  setupClassSelect() {
    for (const card of document.querySelectorAll('#classes .cls')) {
      const C = CLASSES[card.dataset.cls];
      drawPortrait(card.querySelector('canvas'), C.id);
      card.querySelector('.role').textContent = C.role;
      card.querySelector('.desc').textContent = C.desc;
    }
    this.selectClass(this.selectedCls);
  }

  selectClass(id) {
    if (!CLASSES[id]) return;
    this.selectedCls = id;
    for (const card of document.querySelectorAll('#classes .cls')) card.classList.toggle('sel', card.dataset.cls === id);
    // 타이틀 뒤 장면에서도 고른 직업 모습이 보이도록
    if (this.player.cls !== id) { this.player.setClass(id); this.ui.setClass(this.player.cfg); }
  }

  // ---------- 자동 저장 ----------
  applySave(d) {
    const info = document.getElementById('title-save');
    if (!d) { if (info) info.textContent = ''; return; }
    this.kills = d.kills | 0;
    this.round = d.round | 0;
    this.bestCombo = d.bestCombo | 0;
    // 싸우던 중에 저장됐다면 북을 울리기 전 상태로
    this.stage = this.round > 0 ? 3 : Math.min(1, d.stage | 0);
    if (d.music === false && this.audio.musicOn) this.audio.toggleMusic();
    if (d.outline === 0) this.pixel.compMat.uniforms.outline.value = 0;
    if (typeof d.zoom === 'number' && d.zoom !== this.pixel.userZoom) { this.pixel.userZoom = d.zoom; this.pixel.resize(); }
    if (d.night) { this.nightTarget = 1; this.night = 1; }
    if (d.cls && CLASSES[d.cls]) this.selectClass(d.cls);
    if (info) {
      const when = new Date(d.savedAt || Date.now());
      const pad = (n) => String(n).padStart(2, '0');
      info.innerHTML = `이어하기 · <b>${this.round + 1}회차</b> · 퇴치 <b>${this.kills}</b> · 최고 연속 <b>${this.bestCombo}</b>` +
        `<small>${when.getMonth() + 1}/${when.getDate()} ${pad(when.getHours())}:${pad(when.getMinutes())} 자동 저장 · Delete 키: 기록 지우기</small>`;
    }
  }

  save(show = true) {
    const ok = writeSave({
      kills: this.kills,
      round: this.round,
      stage: this.stage === 2 ? (this.round > 0 ? 3 : 1) : this.stage,
      bestCombo: this.bestCombo,
      cls: this.player.cls,
      music: this.audio.musicOn,
      outline: this.pixel.compMat.uniforms.outline.value,
      zoom: this.pixel.userZoom,
      night: !this.waveActive && this.nightTarget > 0.5,
    });
    if (ok && show) this.ui.saveMark();
    this.saveT = 15;
  }

  onKey(code) {
    if (this.state === 'title') {
      if (code === 'Delete' || code === 'Backspace') {
        clearSave();
        this.kills = 0; this.round = 0; this.stage = 0; this.bestCombo = 0;
        this.applySave(null);
        this.updateQuest();
        const info = document.getElementById('title-save');
        if (info) info.textContent = '기록을 지웠습니다. 처음부터 시작합니다.';
        return;
      }
      const i = CLASS_ORDER.indexOf(this.selectedCls);
      if (code === 'ArrowLeft' || code === 'KeyA') { this.selectClass(CLASS_ORDER[(i + 2) % 3]); this.audio.unlock(); this.audio.play('talk'); return; }
      if (code === 'ArrowRight' || code === 'KeyD') { this.selectClass(CLASS_ORDER[(i + 1) % 3]); this.audio.unlock(); this.audio.play('talk'); return; }
      if (code === 'Digit1' || code === 'Digit2' || code === 'Digit3') { this.selectClass(CLASS_ORDER[+code.slice(-1) - 1]); return; }
      this.start();
      return;
    }
    this.audio.unlock();
    if (code === 'KeyM') { const on = this.audio.toggleMusic(); this.ui.toast(on ? '음악 켜짐' : '음악 꺼짐'); this.save(false); return; }
    if (code === 'Equal' || code === 'NumpadAdd') { this.pixel.zoom(1); return; }
    if (code === 'Minus' || code === 'NumpadSubtract') { this.pixel.zoom(-1); return; }
    if (code === 'KeyO') {
      this.pixel.compMat.uniforms.outline.value = this.pixel.compMat.uniforms.outline.value ? 0 : 1;
      this.ui.toast(this.pixel.compMat.uniforms.outline.value ? '외곽선 켜짐' : '외곽선 꺼짐');
      this.save(false);
      return;
    }
    if (this.state === 'dead') { if (code === 'KeyR' || code === 'Enter' || code === 'act') this.retry(); return; }
    if (this.ui.inDialog) {
      if (['KeyE', 'Space', 'Enter', 'KeyJ', 'KeyZ', 'act', 'atk'].includes(code)) this.ui.advance();
      return;
    }
    const inp = this.readInput();
    switch (code) {
      case 'KeyJ': case 'KeyZ': case 'atk': this.player.startAttack(inp); break;
      case 'Space': case 'ShiftLeft': case 'ShiftRight': case 'KeyL': case 'dash': this.player.startDash(inp); break;
      case 'KeyK': case 'KeyX': case 'skill': this.player.startSkill(inp); break;
      case 'KeyE': case 'Enter': case 'act': this.interact(); break;
      case 'KeyN':
        if (this.waveActive) { this.ui.toast('도깨비가 날뛰는 중엔 시간을 바꿀 수 없어요'); break; }
        this.nightTarget = this.nightTarget > 0.5 ? 0 : 1;
        this.ui.toast(this.nightTarget ? '밤이 찾아옵니다…' : '날이 밝아옵니다');
        break;
      case 'KeyG': this.godMode = !this.godMode; this.ui.toast(this.godMode ? '무적 (디버그)' : '무적 해제'); break;
    }
  }

  start() {
    this.audio.unlock();
    this.state = 'play';
    if (this.player.cls !== this.selectedCls) this.player.setClass(this.selectedCls);
    this.ui.setClass(this.player.cfg);
    this.player.hp = this.player.maxHp;
    this.save(false);
    document.getElementById('title').classList.add('hide');
    this.ui.showHud(true);
    this.ui.banner('月下宮', '도깨비 야행', 2.8, 'title-banner');
  }

  // ---------- 상호작용 ----------
  findInteract() {
    const p = this.player.pos;
    let best = null, bd = 2.4;
    for (const n of this.npcs) {
      const d = Math.hypot(n.pos.x - p.x, n.pos.z - p.z);
      if (d < bd) { bd = d; best = { kind: 'npc', npc: n, label: '대화', promptPos: n.pos.clone().add(V(0, 2.1, 0)) }; }
    }
    for (const dr of this.world.drums) {
      const d = Math.hypot(dr.pos.x - p.x, dr.pos.z - p.z);
      if (d < 2.9 && d - 0.5 < bd) { bd = d - 0.5; best = { kind: 'drum', drum: dr, label: this.waveActive ? '북 치기' : '북 울리기', promptPos: dr.pos.clone().add(V(0, 4.0, 0)) }; }
    }
    return best;
  }

  interact() {
    const it = this.nearInteract;
    if (!it) return;
    if (it.kind === 'npc') {
      const n = it.npc;
      let lines = n.lines;
      if (n.name.startsWith('수문장')) lines = this.guardLines();
      this.ui.dialog(n.name, lines, () => {
        if (n.name.startsWith('수문장') && this.stage === 0) { this.stage = 1; this.updateQuest(); this.save(); }
      });
    } else if (it.kind === 'drum') {
      this.player.yaw = Math.atan2(it.drum.pos.x - this.player.pos.x, it.drum.pos.z - this.player.pos.z);
      this.player.startAttack({ moveLen: 0, mx: 0, mz: 0 });
      // 검객은 베기로 북을 침. 도사·요정은 바로 울림
      if (this.player.cls !== 'sword') this.drumHit(it.drum);
    }
  }

  guardLines() {
    if (this.stage === 0) return [
      `어이, 거기 젊은 ${this.player.cfg.title}! 마침 잘 왔소.`,
      '해만 지면 이 궁궐 마당에 도깨비 놈들이 떼로 몰려와 난장판을 친다오.',
      '저기 저 큰 북이 보이시오? 북을 둥— 하고 울리면 숨어 있던 놈들이 죄다 튀어나올 게요.',
      '놈들을 모조리 혼쭐내 주시오! 마지막엔 도깨비 대왕이 나온다는 소문이 있으니 조심하고.',
      '(북 앞에서 E 키, 혹은 검으로 북을 베어 울리세요)',
    ];
    if (this.waveActive) return ['지금 한가하게 이야기할 때가 아니오! 도깨비들이 몰려오고 있소!'];
    if (this.round >= 1) return [
      `허허, 대왕까지 쫓아내다니! 벌써 ${this.kills}마리나 혼쭐을 냈구려.`,
      '북을 다시 울리면 더 사나운 놈들이 올 거요. 각오가 되었다면 언제든.',
    ];
    return ['북은 저기 있소. 둥— 하고 울려 보시오!'];
  }

  updateQuest() {
    const ui = this.ui;
    if (this.stage === 0) ui.setQuest('임무', '왼쪽 북 옆의 <b>수문장</b>에게 말을 걸자');
    else if (this.stage === 1) ui.setQuest('임무', '<b>큰 북</b>을 울려 도깨비를 불러내자');
    else if (this.stage === 2) {
      const left = this.enemies.filter((e) => !e.dead).length + this.spawnQueue.length;
      ui.setQuest(`도깨비 야행 · 제 ${this.wave} 파`, `남은 도깨비 <b>${left}</b>`);
    } else ui.setQuest('자유 탐방', `북을 다시 울리면 <b>${this.round + 1}회차</b> 도깨비가 몰려온다`);
  }

  // ---------- 전투 ----------
  drumHit(drum) {
    drum.shake = 1;
    this.audio.play('drum');
    this.shake(0.35);
    this.alarm = 3;
    this.fx.ring(V(drum.pos.x, 0, drum.pos.z), 5, '#fff2c0', 0.6);
    this.fx.spark(drum.pos.x, 2.2, drum.pos.z, 14, '#fff2c0', 5);
    if (!this.waveActive && (this.stage === 1 || this.stage === 3 || this.stage === 0)) this.startNight();
  }

  startNight() {
    this.waveActive = true;
    this.stage = 2;
    this.wave = 0;
    this.nightTarget = 1;
    this.audio.mood = 'battle';
    this.ui.banner('도깨비 야행', this.round > 0 ? `${this.round + 1}회차 — 더 사나운 놈들이 온다` : '북소리에 도깨비들이 깨어난다…', 3, 'night-banner');
    setTimeout(() => this.nextWave(), 3200);
  }

  waveDef(n) {
    const r = this.round;
    const list = [];
    const add = (t, c) => { for (let i = 0; i < c; i++) list.push(t); };
    if (n === 1) { add('blue', 4 + r); add('red', r); }
    else if (n === 2) { add('blue', 3 + r); add('red', 2 + r); add('wisp', 2 + Math.floor(r / 2)); }
    else { add('boss', 1); add('red', 2 + r); add('wisp', r); }
    return list;
  }

  nextWave() {
    if (this.state === 'dead') return;
    if (this.wave > 0) this.save();
    this.wave++;
    const list = this.waveDef(this.wave);
    const boss = this.wave === 3;
    this.ui.banner(`제 ${['', '一', '二', '三'][this.wave]} 파`, boss ? '도깨비 대왕 두억시니 출현!' : `도깨비 ${list.length}마리`, 2.4, boss ? 'boss-banner' : '');
    this.audio.play(boss ? 'drum' : 'wave');
    let delay = 0.6;
    for (const t of list) {
      this.spawnQueue.push({ type: t, at: this.time + delay });
      delay += t === 'boss' ? 1.2 : rand(0.3, 0.6);
    }
    this.updateQuest();
  }

  spawnEnemy(type) {
    const p = this.player.pos;
    let pos = type === 'boss' ? this.world.randomWalkable(p.x, p.z, 6, 9) : this.world.randomWalkable(p.x, p.z, 5, 10);
    if (!pos) pos = V(0, 0.12, 5);
    const e = new Enemy(this, type, pos, 1 + this.round);
    if (type === 'boss') { e.name = this.round > 0 ? `도깨비 대왕 두억시니 +${this.round}` : '도깨비 대왕 두억시니'; this.ui.setBoss(e); this.shake(0.5); }
    this.enemies.push(e);
  }

  playerSwingHit(pl, kind) {
    const range = kind === 2 ? 2.45 : 2.2;
    const half = kind === 2 ? 0.95 : 1.35;
    const fxKind = kind === 3 ? 1 : kind; // 발도베기는 왼→오른 궤적
    const yaw = pl.yaw;
    const origin = V(pl.pos.x, pl.y + 0.72, pl.pos.z);
    this.fx.slash(origin, yaw, fxKind, { dur: kind === 3 ? 0.2 : 0.16, outer: range + (kind === 3 ? 0.25 : 0), len: kind === 3 ? 3.2 : 2.8, color: kind === 2 ? '#fff6d0' : kind === 3 ? '#d8f4ff' : '#a8e4ff' });
    // 칼날 궤적의 얇고 하얀 심
    this.fx.slash(origin, yaw, fxKind, { dur: kind === 3 ? 0.2 : 0.16, inner: range - 0.32, outer: range - 0.05 + (kind === 3 ? 0.25 : 0), len: kind === 3 ? 3.2 : 2.8, color: '#ffffff' });
    if (kind === 2) {
      // 내려찍기: 앞쪽 바닥 충격
      const f = V(pl.pos.x + Math.sin(yaw) * 1.4, pl.y, pl.pos.z + Math.cos(yaw) * 1.4);
      this.fx.ring(f, 1.9, '#fff2c0', 0.3);
      this.fx.dust(f.x, f.y, f.z, 10);
      for (let i = 0; i < 14; i++) this.fx.norm.emit({ x: f.x + rand(-0.4, 0.4), y: f.y + 0.1, z: f.z + rand(-0.4, 0.4), vx: rand(-2, 2), vy: rand(3, 6), vz: rand(-2, 2), g: 18, life: 0.8, size: 2, color: '#9a9284', floor: f.y });
      this.audio.play('impact');
    }
    let hitAny = false;
    for (const e of this.enemies) {
      if (e.dead || e.spawning) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z;
      const d = Math.hypot(dx, dz);
      const ey = e.type === 'wisp' ? e.y + 1.3 : e.y;
      if (Math.abs(ey - pl.y) > 2.2) continue;
      if (d > range + e.radius) continue;
      if (d > 0.6 && Math.abs(angleDiff(yaw, Math.atan2(dx, dz))) > half) continue;
      const crit = Math.random() < 0.15;
      let dmg = Math.round((kind === 2 ? rand(24, 30) : kind === 3 ? rand(18, 23) : rand(13, 17)) * (crit ? 1.8 : 1)); // 발도베기는 한 방이 강함
      this.damageEnemy(e, dmg, crit, kind === 2 ? 9 : 5.5, kind === 2 ? 0.4 : 0.25);
      hitAny = true;
    }
    // 푸른 불덩이 튕겨내기
    for (const pr of this.projectiles) {
      if (pr.owner !== 'enemy' || pr.dead) continue;
      const dx = pr.pos.x - pl.pos.x, dz = pr.pos.z - pl.pos.z;
      if (Math.hypot(dx, dz) < range + 0.3 && Math.abs(angleDiff(yaw, Math.atan2(dx, dz))) < half + 0.3) {
        pr.owner = 'player';
        pr.dir.set(Math.sin(yaw), 0, Math.cos(yaw));
        pr.speed *= 1.6;
        pr.dmg = 30;
        pr.life = 1.2;
        pr.hitSet = new Set();
        this.audio.play('block');
        this.fx.spark(pr.pos.x, pr.pos.y, pr.pos.z, 10, '#bff4ff', 5);
        this.ui.toast('튕겨내기!', 0.8);
        this.hitstop = Math.max(this.hitstop, 0.06);
      }
    }
    // 북 치기
    for (const dr of this.world.drums) {
      const dx = dr.pos.x - pl.pos.x, dz = dr.pos.z - pl.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < range + 1.3 && Math.abs(angleDiff(yaw, Math.atan2(dx, dz))) < half) { this.drumHit(dr); hitAny = true; }
    }
    if (hitAny) this.shake(kind === 2 ? 0.22 : 0.12);
  }

  damageEnemy(e, dmg, crit, knock, stun) {
    const pl = this.player;
    const dir = V(e.pos.x - pl.pos.x, 0, e.pos.z - pl.pos.z).normalize();
    if (!e.hit(dmg, dir, knock, stun)) return;
    const c = e.center().clone();
    this.fx.spark(c.x, c.y, c.z, crit ? 18 : 10, crit ? '#fff07a' : '#ffffff', crit ? 8 : 6);
    this.fx.number(c.clone().add(V(0, 0.5 * (e.type === 'boss' ? 2 : 1), 0)), dmg, crit ? 'crit' : 'normal');
    this.audio.play(crit ? 'crit' : 'hit');
    this.hitstop = Math.max(this.hitstop, crit ? 0.085 : 0.05);
    this.hitCombo = this.time - this.lastHitTime < 2 ? this.hitCombo + 1 : 1;
    this.lastHitTime = this.time;
    if (this.hitCombo > this.bestCombo) this.bestCombo = this.hitCombo;
    pl.lastCombat = this.time;
    // 보스 체력에 따른 졸개 소환
    if (e.type === 'boss' && !e.dead) {
      const k = e.hp / e.maxHp;
      if ((k < 0.6 && e.summoned === 0) || (k < 0.3 && e.summoned === 1)) {
        e.summoned++;
        this.audio.play('laugh');
        this.ui.toast('두억시니: "얘들아, 나와라 뚝딱!"', 2);
        for (let i = 0; i < 2 + this.round; i++) this.spawnQueue.push({ type: i === 0 ? 'red' : 'blue', at: this.time + 0.3 + i * 0.3 });
      }
    }
  }

  // 검기: 발밑 충격파 + 칼끝 섬광 → 3겹 초승달 검기가 잔상·빛가루·바닥 서리를 남기며 날아감
  spawnSwordWave(pl) {
    const dir = V(Math.sin(pl.yaw), 0, Math.cos(pl.yaw));
    const feet = V(pl.pos.x, pl.y, pl.pos.z);
    const pos = V(pl.pos.x, pl.y + 0.75, pl.pos.z).addScaledVector(dir, 0.6);
    const pr = { owner: 'player', kind: 'wave', pos, dir, yaw: pl.yaw, speed: 16, life: 0.6, dmg: 34, hitSet: new Set(), radius: 1.3, trailT: 0 };
    const follow = (a) => a.g.position.copy(pr.pos);
    pr.vis = [
      this.fx.slash(pos, pl.yaw, 0, { inner: 0.25, outer: 2.0, len: 2.4, dur: 0.6, color: '#2f7dff', static: true, move: follow }),
      this.fx.slash(pos, pl.yaw, 0, { inner: 0.9, outer: 1.85, len: 2.2, dur: 0.6, color: '#8fe4ff', static: true, move: follow }),
      this.fx.slash(pos, pl.yaw, 0, { inner: 1.55, outer: 1.8, len: 2.0, dur: 0.6, color: '#ffffff', static: true, move: follow }),
    ];
    this.projectiles.push(pr);
    // 시전 연출
    this.audio.play('skill');
    this.fx.ring(feet, 2.6, '#7fd8ff', 0.4);
    this.fx.ring(feet, 1.3, '#ffffff', 0.22);
    this.fx.spark(pos.x, pos.y, pos.z, 18, '#d8f6ff', 7);
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      this.fx.add.emit({ x: feet.x + Math.cos(a) * 0.4, y: feet.y + 0.08, z: feet.z + Math.sin(a) * 0.4, vx: Math.cos(a) * 5, vy: rand(0.2, 1.2), vz: Math.sin(a) * 5, drag: 4, life: rand(0.25, 0.45), size: 3, endSize: 1, color: '#bff4ff', color2: '#2050ff' });
    }
    this.ui.flash('#3a8cff', 0.18);
    this.hitstop = Math.max(this.hitstop, 0.05);
    this.shake(0.22);
  }

  // 검기 비행 중 연출
  swordWaveTrail(pr, dt) {
    const fx = this.fx;
    pr.trailT -= dt;
    if (pr.trailT <= 0) {
      pr.trailT = 0.03;
      fx.slash(pr.pos.clone(), pr.yaw, 0, { inner: 0.6, outer: 1.95, len: 2.3, dur: 0.18, color: '#2a5cff', static: true, fadeAll: true });
    }
    const side = V(pr.dir.z, 0, -pr.dir.x);
    for (let k = 0; k < 5; k++) {
      const a = rand(-1.1, 1.1);
      const r = rand(1.2, 1.9);
      const x = pr.pos.x + (pr.dir.x * Math.cos(a) + side.x * Math.sin(a)) * r;
      const z = pr.pos.z + (pr.dir.z * Math.cos(a) + side.z * Math.sin(a)) * r;
      fx.add.emit({ x, y: pr.pos.y + rand(-0.15, 0.25), z, vx: -pr.dir.x * rand(2, 5), vy: rand(0, 1.2), vz: -pr.dir.z * rand(2, 5), drag: 3, life: rand(0.25, 0.5), size: rand(2, 4), endSize: 1, color: '#e0faff', color2: '#2050ff' });
    }
    // 바닥에 남는 서리 자국
    const h = this.world.heightAt(pr.pos.x, pr.pos.z);
    for (let k = 0; k < 3; k++) {
      const l = rand(-1.3, 1.3);
      fx.add.emit({ x: pr.pos.x + side.x * l, y: h + 0.06, z: pr.pos.z + side.z * l, life: rand(0.5, 0.9), size: 2, color: '#7fd8ff', alpha: 0.8 });
    }
  }

  swordWaveEnd(pr) {
    const fx = this.fx;
    for (const a of pr.vis) a.kill = true;
    this.audio.play('burst');
    fx.ring(V(pr.pos.x, this.world.heightAt(pr.pos.x, pr.pos.z), pr.pos.z), 2.2, '#7fd8ff', 0.35);
    for (let i = 0; i < 36; i++) {
      const a = Math.random() * Math.PI * 2, e = rand(-0.3, 1);
      fx.add.emit({ x: pr.pos.x, y: pr.pos.y, z: pr.pos.z, vx: Math.cos(a) * rand(2, 6), vy: e * 4, vz: Math.sin(a) * rand(2, 6), g: 6, drag: 2.5, life: rand(0.3, 0.7), size: rand(2, 4), endSize: 1, color: '#e0faff', color2: '#1a40ff' });
    }
  }

  // ---------- 도사 · 요정 공격 ----------
  playerShoot(pl, kind) {
    const third = kind % 10 === 2;
    if (pl.cls === 'mage') {
      const yaws = third ? [-0.28, 0, 0.28] : [0];
      for (const o of yaws) this.spawnTalisman(pl, pl.yaw + o, third ? 15 : 19);
      this.audio.play('cast');
    } else {
      const yaws = third ? [-0.14, 0, 0.14] : [0];
      for (const o of yaws) this.spawnArrow(pl, pl.yaw + o, { dmg: third ? 14 : 16 });
      this.audio.play('bow');
    }
  }

  playerSkillHit(pl, a) {
    if (pl.cls === 'mage') this.castLightning(pl);
    else if (pl.cls === 'elf') this.windArrows(pl);
  }

  handPos(pl, out = V()) {
    return out.set(pl.pos.x + Math.sin(pl.yaw) * 0.5, pl.y + 0.95, pl.pos.z + Math.cos(pl.yaw) * 0.5);
  }

  spawnTalisman(pl, yaw, dmg) {
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const pos = this.handPos(pl);
    const g = new THREE.Group();
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.36), new THREE.MeshBasicMaterial({ color: '#f6d870', side: THREE.DoubleSide }));
    const ink = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.26), new THREE.MeshBasicMaterial({ color: '#c8302c', side: THREE.DoubleSide }));
    ink.position.z = 0.002;
    paper.add(ink);
    g.add(paper);
    g.position.copy(pos);
    this.scene.add(g);
    this.projectiles.push({ owner: 'player', kind: 'talisman', pos, dir, yaw, speed: 13, life: 0.8, dmg, mesh: g, paper, radius: 0.5, hitSet: new Set(), knock: 4, stun: 0.3 });
  }

  // 불부적 폭발: 맞은 적과 주변 적에게 불길
  talismanBurst(pr) {
    const fx = this.fx;
    const p = pr.pos;
    this.audio.play('fire');
    fx.ring(V(p.x, this.world.heightAt(p.x, p.z), p.z), 1.7, '#ffb050', 0.3);
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2, s = rand(1.5, 4.5);
      fx.add.emit({ x: p.x, y: p.y, z: p.z, vx: Math.cos(a) * s, vy: rand(0.5, 3.5), vz: Math.sin(a) * s, g: 3, drag: 3, life: rand(0.25, 0.55), size: rand(2, 5), endSize: 1, color: '#fff2a0', color2: '#ff3a10', flicker: 0.3 });
    }
    fx.smoke(p.x, p.y - 0.2, p.z, 5);
    for (const e of this.enemies) {
      if (e.dead || e.spawning || e === pr.hitEnemy) continue;
      if (Math.hypot(e.pos.x - p.x, e.pos.z - p.z) < 1.5 + e.radius) this.damageEnemy(e, Math.round(pr.dmg * 0.6), false, 3, 0.2);
    }
  }

  spawnArrow(pl, yaw, { dmg = 16, pierce = false, glow = false, speed = 26, life = 0.55 } = {}) {
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const pos = this.handPos(pl);
    const g = new THREE.Group();
    const shaftM = new THREE.MeshBasicMaterial({ color: glow ? '#c8ff9a' : '#9a7a52' });
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.78), shaftM);
    const head = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 4), new THREE.MeshBasicMaterial({ color: glow ? '#ffffff' : '#d8dde4' }));
    head.rotation.x = Math.PI / 2;
    head.position.z = 0.44;
    const fl = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.14), new THREE.MeshBasicMaterial({ color: glow ? '#8aff6a' : '#f0ece0' }));
    fl.position.z = -0.32;
    g.add(shaft, head, fl);
    g.position.copy(pos);
    g.rotation.y = yaw;
    this.scene.add(g);
    this.projectiles.push({ owner: 'player', kind: 'arrow', pos, dir, yaw, speed, life, dmg, mesh: g, radius: 0.4, hitSet: new Set(), pierce, glow, knock: pierce ? 5 : 3, stun: pierce ? 0.3 : 0.18 });
  }

  // 불부적·화살이 날아가는 동안
  missileTrail(pr, dt) {
    const fx = this.fx;
    if (pr.kind === 'talisman') {
      pr.paper.rotation.z += dt * 18;
      pr.paper.rotation.y = Math.sin(this.time * 20) * 0.5;
      pr.mesh.position.copy(pr.pos);
      for (let k = 0; k < 2; k++) fx.add.emit({ x: pr.pos.x + rand(-0.1, 0.1), y: pr.pos.y + rand(-0.1, 0.1), z: pr.pos.z + rand(-0.1, 0.1), vx: -pr.dir.x * 2 + rand(-0.4, 0.4), vy: rand(0.4, 1.4), vz: -pr.dir.z * 2 + rand(-0.4, 0.4), life: rand(0.2, 0.4), size: rand(2, 4), endSize: 1, color: '#ffe080', color2: '#ff3010', flicker: 0.3 });
    } else {
      pr.mesh.position.copy(pr.pos);
      if (pr.glow) {
        for (let k = 0; k < 2; k++) fx.add.emit({ x: pr.pos.x + rand(-0.08, 0.08), y: pr.pos.y + rand(-0.08, 0.08), z: pr.pos.z + rand(-0.08, 0.08), vx: -pr.dir.x * 3, vy: rand(0, 0.6), vz: -pr.dir.z * 3, life: rand(0.2, 0.4), size: rand(2, 3), endSize: 1, color: '#e8ffc8', color2: '#3aa83a' });
      } else if (Math.random() < 0.6) {
        fx.add.emit({ x: pr.pos.x, y: pr.pos.y, z: pr.pos.z, life: 0.12, size: 2, color: '#fff8e0', alpha: 0.6 });
      }
    }
    // 벽·높은 바닥에 부딪히면 끝
    const h = this.world.heightAt(pr.pos.x, pr.pos.z);
    if (h > pr.pos.y - 0.3) pr.life = 0;
  }

  // 도사 낙뢰: 조준한 지점에 경고 원 → 번개 다발이 내리쳐 광역 피해
  castLightning(pl) {
    // 바라보는 쪽 가까운 적, 없으면 5걸음 앞
    let target = null, bd = 11;
    for (const e of this.enemies) {
      if (e.dead || e.spawning) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < bd && Math.abs(angleDiff(pl.yaw, Math.atan2(dx, dz))) < 1.0) { bd = d; target = e; }
    }
    const c = target ? V(target.pos.x, 0, target.pos.z) : V(pl.pos.x + Math.sin(pl.yaw) * 5, 0, pl.pos.z + Math.cos(pl.yaw) * 5);
    c.y = this.world.heightAt(c.x, c.z);
    const R = 2.9;
    const tele = this.fx.ring(c, R, '#b89aff', 1, 1);
    this.fx.ring(this.handPos(pl), 1.2, '#d8c8ff', 0.3);
    this.audio.play('charge');
    this.shake(0.12);
    this.timers.push({ at: this.time + 0.42, fn: () => {
      this.fx.removeRing(tele);
      const pts = [c, ...[0, 1, 2].map(() => V(c.x + rand(-1.8, 1.8), c.y, c.z + rand(-1.8, 1.8)))];
      pts.forEach((p, i) => this.fx.bolt(p, i === 0 ? 1.4 : 0.9));
      this.audio.play('thunder');
      this.ui.flash('#e8e0ff', 0.55);
      this.shake(0.6);
      this.hitstop = Math.max(this.hitstop, 0.08);
      this.fx.ring(c, R * 1.25, '#d8c8ff', 0.4);
      this.fx.ring(c, R * 0.6, '#ffffff', 0.25);
      for (let i = 0; i < 50; i++) {
        const a = Math.random() * Math.PI * 2, s = rand(2, 8);
        this.fx.add.emit({ x: c.x, y: c.y + 0.3, z: c.z, vx: Math.cos(a) * s, vy: rand(1, 6), vz: Math.sin(a) * s, g: 10, drag: 2, life: rand(0.3, 0.7), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: '#7a5aff' });
      }
      for (let i = 0; i < 30; i++) {
        const a = (i / 30) * Math.PI * 2, r = rand(0.5, R);
        this.fx.add.emit({ x: c.x + Math.cos(a) * r, y: c.y + 0.06, z: c.z + Math.sin(a) * r, life: rand(0.6, 1.2), size: 2, color: '#b89aff', alpha: 0.8, flicker: 0.6 });
      }
      for (const e of this.enemies) {
        if (e.dead || e.spawning) continue;
        if (Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < R + e.radius) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(e, Math.round(rand(44, 54) * (crit ? 1.8 : 1)), crit, 3, 0.7);
          const ec = e.center();
          this.fx.spark(ec.x, ec.y, ec.z, 10, '#e8e0ff', 6);
        }
      }
    } });
  }

  // 요정 바람화살: 부채꼴로 9발, 관통
  windArrows(pl) {
    for (let i = 0; i < 9; i++) this.spawnArrow(pl, pl.yaw + (i - 4) * 0.13, { dmg: 22, pierce: true, glow: true, speed: 24, life: 0.6 });
    this.audio.play('bowskill');
    const feet = V(pl.pos.x, pl.y, pl.pos.z);
    this.fx.ring(feet, 2.4, '#a8ff8a', 0.4);
    this.fx.ring(this.handPos(pl), 1.4, '#ffffff', 0.25);
    for (let i = 0; i < 26; i++) {
      const a = pl.yaw + rand(-0.7, 0.7);
      this.fx.norm.emit({ x: feet.x, y: feet.y + rand(0.3, 1.2), z: feet.z, vx: Math.sin(a) * rand(3, 8), vy: rand(0, 1.5), vz: Math.cos(a) * rand(3, 8), drag: 2, wob: 1, life: rand(0.5, 1), size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
    }
    this.ui.flash('#6aff7a', 0.15);
    this.shake(0.18);
  }

  spawnOrb(w) {
    const p = this.player;
    const pos = V(w.pos.x, w.y + 1.3, w.pos.z);
    const target = V(p.pos.x + p.vel.x * 0.3, p.y + 0.7, p.pos.z + p.vel.z * 0.3);
    const dir = target.sub(pos).setY(0).normalize();
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), new THREE.MeshBasicMaterial({ color: '#d8fbff' }));
    mesh.position.copy(pos);
    this.scene.add(mesh);
    this.projectiles.push({ owner: 'enemy', kind: 'orb', pos, dir, speed: 7, life: 3, dmg: w.dmg, mesh, radius: 0.45, hitSet: new Set(), y: pos.y });
  }

  bossSlam(boss, at, radius, dmg, big = false) {
    this.audio.play('slam');
    this.shake(big ? 0.9 : 0.6);
    this.alarm = 2;
    this.fx.ring(at, radius * 1.15, '#ffd6a0', 0.45);
    this.fx.ring(at, radius * 0.7, '#ffffff', 0.3);
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      this.fx.norm.emit({ x: at.x + Math.cos(a) * radius * 0.6, y: at.y + 0.1, z: at.z + Math.sin(a) * radius * 0.6, vx: Math.cos(a) * 4, vy: rand(1, 3), vz: Math.sin(a) * 4, g: 6, drag: 3, life: rand(0.4, 0.8), size: 4, endSize: 1, color: '#c8bca0' });
    }
    for (let i = 0; i < 18; i++) this.fx.norm.emit({ x: at.x + rand(-1, 1), y: at.y + 0.2, z: at.z + rand(-1, 1), vx: rand(-3, 3), vy: rand(4, 8), vz: rand(-3, 3), g: 20, life: 1, size: 3, color: '#8a8478', floor: at.y });
    const p = this.player;
    if (Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < radius + p.radius && Math.abs(p.pos.y - at.y) < 1.2) p.damage(dmg, at);
  }

  onEnemyKilled(e) {
    this.kills++;
    this.updateQuest();
    if (e.type === 'boss') {
      this.hitstop = 0.25;
      this.shake(1);
      this.ui.flash('#ffffff', 0.6);
    }
  }

  checkWave() {
    if (!this.waveActive || this.wave === 0 || this.spawnQueue.length) return;
    if (this.enemies.some((e) => !e.dead)) return;
    if (this.waveClearing) return;
    this.waveClearing = true;
    if (this.wave >= 3) {
      setTimeout(() => this.victory(), 1500);
    } else {
      this.ui.banner('격퇴!', `제 ${['', '一', '二', '三'][this.wave]} 파 완료`, 1.8);
      setTimeout(() => { this.waveClearing = false; this.nextWave(); }, 2600);
    }
  }

  victory() {
    this.waveClearing = false;
    this.waveActive = false;
    this.round++;
    this.stage = 3;
    this.nightTarget = 0;
    this.audio.mood = 'day';
    this.audio.play('victory');
    this.player.hp = this.player.maxHp;
    this.ui.banner('승리', '도깨비들이 달아나고 동이 튼다', 4, 'win-banner');
    this.updateQuest();
    this.save();
  }

  onPlayerDeath() {
    this.state = 'dead';
    setTimeout(() => document.getElementById('gameover').classList.add('show'), 900);
  }

  retry() {
    document.getElementById('gameover').classList.remove('show');
    this.state = 'play';
    this.player.reset();
    for (const e of this.enemies) e.dispose();
    this.enemies = [];
    this.spawnQueue = [];
    for (const pr of this.projectiles) if (pr.mesh) this.scene.remove(pr.mesh);
    this.projectiles = [];
    this.timers = [];
    this.ui.setBoss(null);
    this.waveClearing = false;
    if (this.waveActive) {
      this.wave = Math.max(0, this.wave - 1);
      setTimeout(() => this.nextWave(), 1200);
    }
  }

  shake(a) { this.shakeAmt = Math.min(1.2, Math.max(this.shakeAmt, a)); }

  screenFlash(dur, color) { this.ui.flash(color, 0.35); }

  // ---------- 업데이트 ----------
  updateProjectiles(dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.life -= dt;
      pr.pos.addScaledVector(pr.dir, pr.speed * dt);
      if (pr.kind === 'orb') {
        pr.mesh.position.copy(pr.pos);
        pr.mesh.material.color.set(pr.owner === 'player' ? '#ffffff' : '#d8fbff');
        if (Math.random() < 0.9) this.fx.add.emit({ x: pr.pos.x + rand(-0.1, 0.1), y: pr.pos.y + rand(-0.1, 0.1), z: pr.pos.z + rand(-0.1, 0.1), vx: rand(-0.3, 0.3), vy: rand(0.2, 0.8), vz: rand(-0.3, 0.3), life: rand(0.2, 0.45), size: 3, endSize: 1, color: '#8ff0ff', color2: '#1a40ff' });
        const h = this.world.heightAt(pr.pos.x, pr.pos.z);
        if (h > pr.pos.y - 0.4 || this.world.isBlocked(pr.pos.x, pr.pos.z, 0.05, h) && h > pr.pos.y - 1) pr.life = 0;
      } else if (pr.kind === 'wave') {
        this.swordWaveTrail(pr, dt);
      } else if (pr.kind === 'talisman' || pr.kind === 'arrow') {
        this.missileTrail(pr, dt);
      }
      if (pr.owner === 'player' && (pr.kind === 'talisman' || pr.kind === 'arrow')) {
        // 부적·화살로 북을 맞혀도 울림
        for (const dr of this.world.drums) {
          if (Math.hypot(dr.pos.x - pr.pos.x, dr.pos.z - pr.pos.z) < 1.25) { this.drumHit(dr); pr.life = 0; }
        }
      }
      if (pr.owner === 'player') {
        for (const e of this.enemies) {
          if (e.dead || e.spawning || pr.hitSet.has(e)) continue;
          const d = Math.hypot(e.pos.x - pr.pos.x, e.pos.z - pr.pos.z);
          if (d < pr.radius + e.radius) {
            pr.hitSet.add(e);
            const crit = Math.random() < (pr.kind === 'arrow' ? 0.25 : 0.2);
            this.damageEnemy(e, Math.round(pr.dmg * (crit ? 1.8 : 1) * rand(0.9, 1.1)), crit, pr.knock ?? 7, pr.stun ?? 0.35);
            if (pr.kind === 'wave') {
              const c = e.center().clone();
              this.fx.cross(c, '#9fe8ff', e.type === 'boss' ? 5.5 : 3.8);
              this.fx.ring(V(e.pos.x, e.y, e.pos.z), e.type === 'boss' ? 3 : 1.8, '#9fe8ff', 0.3);
              this.fx.spark(c.x, c.y, c.z, 14, '#d8f6ff', 7);
              this.audio.play('skillhit');
              this.hitstop = Math.max(this.hitstop, 0.07);
            }
            if (pr.kind === 'orb') pr.life = 0;
            if (pr.kind === 'talisman') { pr.hitEnemy = e; pr.life = 0; }
            if (pr.kind === 'arrow') {
              this.audio.play('arrowhit');
              const c = e.center();
              this.fx.spark(c.x, c.y, c.z, pr.pierce ? 10 : 6, pr.pierce ? '#c8ff9a' : '#ffffff', 5);
              if (pr.pierce) this.fx.cross(c.clone(), '#a8ff8a', e.type === 'boss' ? 3.5 : 2.4, 0.25);
              if (!pr.pierce) { pr.life = 0; pr.stuck = true; }
            }
            if (pr.life <= 0) break;
          }
        }
      } else {
        const p = this.player;
        if (Math.hypot(p.pos.x - pr.pos.x, p.pos.z - pr.pos.z) < pr.radius + p.radius * 0.5 && p.dashT <= 0) {
          if (p.damage(pr.dmg, pr.pos)) pr.life = 0;
        }
      }
      if (pr.life <= 0) {
        if (pr.kind === 'wave') this.swordWaveEnd(pr);
        if (pr.kind === 'talisman') this.talismanBurst(pr);
        if (pr.mesh) {
          this.scene.remove(pr.mesh);
          if (pr.kind === 'orb') this.fx.blueFire(pr.pos.x, pr.pos.y - 0.2, pr.pos.z, 10, 0.2);
          if (pr.kind === 'arrow') this.fx.spark(pr.pos.x, pr.pos.y, pr.pos.z, 3, '#e8dcc0', 2);
        }
        this.projectiles.splice(i, 1);
      }
    }
  }

  separate() {
    const list = [this.player, ...this.enemies.filter((e) => !e.dead && e.type !== 'wisp')];
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
      const d = Math.hypot(dx, dz), m = a.radius + b.radius;
      if (d < m && d > 0.0001) {
        const push = (m - d) * 0.5;
        const ux = dx / d, uz = dz / d;
        const wa = a === this.player ? 0.3 : (a.type === 'boss' ? 0.1 : 1);
        const wb = b.type === 'boss' ? 0.1 : 1;
        this.world.move(a.pos, -ux * push * wa, -uz * push * wa, a.moveR ?? a.radius);
        this.world.move(b.pos, ux * push * wb, uz * push * wb, b.moveR ?? b.radius);
      }
    }
  }

  ambient(dt) {
    const f = this.focus;
    const n = this.night;
    // 낮: 흩날리는 꽃잎 / 밤: 반딧불
    if (Math.random() < dt * 6 * (1 - n)) {
      this.fx.norm.emit({ x: f.x + rand(-18, 18), y: rand(4, 8), z: f.z + rand(-16, 10), vx: rand(0.4, 1.0), vy: -0.6, vz: rand(-0.2, 0.3), wob: 1.2, life: 7, size: 2, color: Math.random() < 0.6 ? '#f6c8d4' : '#fff4f0', floor: 0.02, alpha: 0.95 });
    }
    if (Math.random() < dt * 14 * n) {
      this.fx.add.emit({ x: f.x + rand(-18, 18), y: rand(0.4, 2.5), z: f.z + rand(-14, 10), vx: rand(-0.3, 0.3), vy: rand(-0.1, 0.2), vz: rand(-0.3, 0.3), wob: 0.8, life: rand(2.5, 5), size: 2, color: Math.random() < 0.3 ? '#9ff0ff' : '#d8ff8a', flicker: 0.8 });
    }
  }

  // 전투 시뮬레이션 한 단계 (플레이어, 적, 길찾기, 투사체, 웨이브)
  simulate(wdt, inp) {
    this.player.update(wdt, inp);
    // 길찾기 흐름장 (플레이어가 다른 칸으로 옮겼을 때만 실제로 다시 계산)
    this.flowT -= wdt;
    if (this.enemies.length && this.flowT <= 0) {
      this.flowT = 0.15;
      const pp = this.player.pos;
      this.world.updateFlow(pp.x, pp.z, 0);
      if (this.enemies.some((e) => e.type === 'boss' && !e.dead)) this.world.updateFlow(pp.x, pp.z, 1);
    }
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (!e.update(wdt)) { e.dispose(); this.enemies.splice(i, 1); }
    }
    this.separate();
    this.updateProjectiles(wdt);
    for (let i = this.timers.length - 1; i >= 0; i--) if (this.timers[i].at <= this.time) { const t = this.timers[i]; this.timers.splice(i, 1); t.fn(); }
    while (this.spawnQueue.length && this.spawnQueue[0].at <= this.time) this.spawnEnemy(this.spawnQueue.shift().type);
    this.spawnQueue.sort((a, b) => a.at - b.at);
    this.checkWave();
    if (this.enemies.length || this.spawnQueue.length) this.updateQuest();
  }

  // 테스트·디버그용: 렌더링 없이 시간만 진행
  stepSim(dt) {
    this.time += dt;
    shared.time.value += dt;
    this.simulate(dt, { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null });
  }

  spawnEnemyAt(type, x, z) {
    const e = new Enemy(this, type, V(x, this.world.heightAt(x, z), z), 1 + this.round);
    this.enemies.push(e);
    return e;
  }

  loop(now) {
    requestAnimationFrame(this.loop);
    let dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.audio.update();
    // 15초마다 자동 저장
    if (this.state === 'play') { this.saveT -= dt; if (this.saveT <= 0) this.save(); }

    // 히트스톱: 월드 시간 멈춤
    let wdt = dt;
    if (this.hitstop > 0) { this.hitstop -= dt; wdt = dt * 0.05; }
    this.time += wdt;
    shared.time.value += wdt;

    this.night = damp(this.night, this.nightTarget, 1.2, dt);
    if (Math.abs(this.night - this.nightTarget) < 0.002) this.night = this.nightTarget;
    this.alarm = Math.max(0, this.alarm - dt);

    const inp = this.readInput();
    if (this.state !== 'title') this.simulate(wdt, inp);
    else this.player.update(wdt, inp);
    for (const n of this.npcs) n.update(wdt);
    for (const b of this.birds) b.update(wdt);
    this.world.update(wdt, this.time);
    this.ambient(wdt);
    this.fx.update(wdt);
    shared.player.value.copy(this.player.pos);
    this.nearInteract = this.state === 'play' ? this.findInteract() : null;

    // 카메라
    let target;
    if (this.state === 'title') {
      const k = (Math.sin(this.time * 0.12) * 0.5 + 0.5);
      target = V(Math.sin(this.time * 0.07) * 4, 0.5, lerp(10, -6, k));
      this.focus.copy(target);
    } else {
      const p = this.player;
      this.lead.x = damp(this.lead.x, p.vel.x * 0.28, 3, dt);
      this.lead.z = damp(this.lead.z, p.vel.z * 0.28, 3, dt);
      target = V(p.pos.x + this.lead.x, p.y + 0.6, p.pos.z + this.lead.z - 0.8);
      this.focus.x = damp(this.focus.x, target.x, 7, dt);
      this.focus.y = damp(this.focus.y, target.y, 5, dt);
      this.focus.z = damp(this.focus.z, target.z, 7, dt);
    }
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.2);
    const sh = this.shakeAmt * this.shakeAmt * 0.45;
    const camFocus = this.focus.clone().add(V(rand(-sh, sh), 0, rand(-sh, sh) * 0.6));
    this.pixel.setFocus(camFocus);
    this.updateLights(dt);
    this.ui.update(dt);
    this.pixel.render(this.scene);
  }
}

const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3();

window.addEventListener('DOMContentLoaded', () => {
  try {
    window.game = new Game();
  } catch (err) {
    console.error(err);
    document.getElementById('title').innerHTML = `<div class="err">WebGL을 시작할 수 없습니다.<br><small>${err.message}</small></div>`;
  }
});
