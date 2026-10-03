import * as THREE from 'three';
import { PixelRenderer } from './pixel.js';
import { World } from './world.js';
import { FX } from './fx.js';
import { Audio } from './audio.js';
import { UI } from './ui.js';
import { Player, Enemy, NPC, Bird } from './entities.js';
import { shared } from './materials.js';
import { loadSave, writeSave, clearSave, exportSave, importSave } from './save.js';
import { loadSettings, saveSettings, ACTIONS, keyOf, bindMap, keyName, DEFAULTS } from './settings.js';
import { CLASSES, CLASS_ORDER } from './classes.js';
import { ClassPreview } from './preview.js';
import { GFX, setGfx } from './gfx.js';
import { EVOS, branchOf, rankOf, freePoints, rankMul, rankCd, RANK_NAME } from './evolve.js';
import { QUESTS, BOUNTIES, KILL_NAME } from './quests.js';
import { makeGear, rollGearTier, gearScore, salvageExp, BAG_MAX, GEAR_SLOTS, slotKind, rarityOf, makeSetPiece, setFor, SETS } from './gear.js';
import { item, rollDrop, bossDrop, RARITY, itemDesc, WEAPONS, OUTFITS, ULTS } from './items.js';
import { expNeed, SKILL_LEVEL } from './entities.js';
import { MAPS, BOSS_TYPES, BOSS_NAME, WIN_LINE } from './maps.js';
import { clamp, lerp, rand, angleDiff, damp } from './util.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// 시련탑 안에서 저장하면 협곡(저승 문 앞)에서 이어지게
function _noTower(g) { return g.tower?.active ? { mapId: 'canyon' } : {}; }

// 보스 등장 연출의 별칭 / 단계 전환 대사
const BOSS_EPITHET = { boss: '도깨비들의 왕', gumiho: '천 년을 산 여우', reaper: '명부를 든 저승의 사자', imugi: '용이 되지 못한 뱀', bulgasari: '쇠를 먹고 자라는 괴물', yeomra: '저승을 다스리는 왕' };
const BOSS_PHASE_LINE = {
  boss: ['"금 나와라, 뚝딱! 금덩이 맛 좀 봐라!"', '"이놈! 혼쭐을 내주마!" — 쉬지 않고 뛰어내린다'],
  gumiho: ['"내 아이들아, 나와라" — 분신이 나타났다', '아홉 꼬리에서 여우불이 사방으로 쏟아진다'],
  reaper: ['명부에 이름이 적히면 낙인이 따라붙는다', '사방이 어둠에 잠긴다…'],
  imugi: ['늪 곳곳에서 물기둥이 솟는다', '"용이 되지 못할 바엔!" — 꼬리를 휘두른다'],
  bulgasari: ['쇠바늘이 달아올라 지나간 자리가 불탄다', '세 번 연달아 들이받는다!'],
  yeomra: ['"판관들아, 나와라" — 판결이 다섯 번 내려친다', '지옥의 불이 사방으로 터져 나간다'],
};

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
    this.rains = [];
    this.tornados = [];
    this.storms = [];   // 뇌운
    this.fires = [];    // 폭염룡이 남긴 불길
    this.orbits = [];   // 검무 결계 칼날
    this.marks = [];    // 낙인섬 낙인
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
    this.settings = loadSettings();
    this.applySettings();
    this.ui = new UI(this);
    // 직업별 레벨·경험치·착용 장비, 공용 가방
    this.progress = {};
    this.inv = new Set(['sw0', 'mg0', 'bw0', 'ot0']);
    this.gear = [];    // 방어구·장신구 (무작위 옵션이 붙은 낱개). 착용 여부는 직업별 progress.eq
    this.drops = [];
    this.target = null;
    this.paused = false;
    this.player = new Player(this);
    this.buildTargetMarker();

    // 오픈월드: 지금 서 있는 지역(싸우는 동안엔 싸움이 시작된 지역으로 고정)
    this.mapId = 'palace';
    this.map = MAPS.palace;
    this.cleared = {};
    this.regionBanner = {};
    // 퀘스트 진행: step = QUESTS 순번, prog = 이 단계 진행도, lit = 밝힌 석등, bounty = 현상수배
    this.quest = { step: 0, prog: {}, lit: [], bounty: null };
    this.flames = [];
    this.fieldT = 0;
    this.themeCur = this.cloneTheme(MAPS.palace.theme);
    this.npcs = [];
    this.birds = [];
    this.createActors();
    this.buildQuestMarkers();

    this.world.buildNav();
    this.flowT = 0;
    this.setupInput();
    this.setupPause();
    this.bestCombo = 0;
    this.saveT = 15;
    this.selectedCls = 'sword';
    this.setupClassSelect();
    this.applySave(loadSave());
    this.preview = new ClassPreview(this);
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
    const smap = GFX.hd ? { high: 4096, mid: 2048, low: 1024 }[this.settings?.quality || 'high'] : 2048;
    sun.shadow.mapSize.set(smap, smap);
    if (GFX.hd) sun.shadow.radius = 3;
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
    this.blendTheme(dt);
    const th = this.themeCur;
    const c = (pair) => _e.copy(pair[0]).lerp(pair[1], n);
    this.sun.color.copy(c(th.sun));
    // 고화질은 하늘빛을 줄여 그림자 대비를 살림
    this.sun.intensity = lerp(th.sunI[0], th.sunI[1], n) * (GFX.hd ? 0.95 : 1);
    this.hemi.color.copy(c(th.sky));
    this.hemi.groundColor.copy(c(th.ground));
    this.hemi.intensity = lerp(th.hemiI[0], th.hemiI[1], n) * (GFX.hd ? 0.62 : 1);
    this.scene.background.copy(c(th.bg));
    this.world.setNight(n);

    // 그림자 카메라를 초점에 맞추되 섀도 텍셀 단위로 스냅 (그림자 지글거림 방지)
    const f = this.focus;
    const dir = _a.copy(this.sunOffset).normalize();
    const right = _b.crossVectors(_c.set(0, 1, 0), dir).normalize();
    const up = _c.crossVectors(dir, right).normalize();
    const texel = 60 / (GFX.hd ? 4096 : 2048);
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
      const hl = f.z < 12 ? this.world.hallLightPos : null; // 정전 창호 불빛은 궁궐 안에서만
      for (let i = 0; i < 8; i++) {
        const src = hl && i >= 6 ? hl[i - 6] : L[i];
        if (src) this.points[i].position.copy(src); else this.points[i].position.set(0, -50, 0);
      }
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
      if (e.code === 'Tab') e.preventDefault();
      // 설정에서 키를 바꾸는 중: 다음에 누른 키를 그 동작에 배정
      if (this.rebind) { e.preventDefault(); this.finishRebind(e.code); return; }
      if (e.repeat) { this.keys.add(e.code); return; }
      this.keys.add(e.code);
      const act = this.binds[e.code];
      this.onKey(act || e.code, e);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    const stage = document.getElementById('app');
    stage.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; this.mouse.t = this.time; });
    stage.addEventListener('mousedown', (e) => {
      this.mouse.x = e.clientX; this.mouse.y = e.clientY; this.mouse.t = this.time;
      // 선택 화면: 카드를 누르면 고르기만 함 (시작은 아래 버튼으로)
      if (this.state === 'title') { const c = e.target.closest && e.target.closest('.cls'); if (c && c.dataset.cls !== this.selectedCls) { this.selectClass(c.dataset.cls); this.audio.unlock(); this.audio.play('talk'); } return; }
      this.audio.unlock();
      if (this.paused) return;
    if (this.ui.inDialog) { this.ui.advance(); return; }
      if (this.state !== 'play') return;
      if (e.button === 0) this.player.startAttack(this.readInput());
      if (e.button === 2 && !this.cdCheck('skill', this.player.skillCd)) this.player.startSkill(this.readInput());
    });
    stage.addEventListener('contextmenu', (e) => e.preventDefault());
    // 가방 버튼·창: 클릭이 공격으로 새지 않게
    for (const id of ['bag-btn', 'bag', 'evo-btn', 'skills', 'hunt-btn', 'quest', 'pause', 'menu-btn']) {
      const el = document.getElementById(id);
      el.addEventListener('mousedown', (e) => e.stopPropagation());
      el.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
    }
    document.getElementById('bag-btn').addEventListener('click', () => { if (this.state === 'play') this.toggleBag(); });
    document.getElementById('bag-close').addEventListener('click', () => this.toggleBag(false));
    document.querySelectorAll('.bag-tabs button').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); this.ui.tab(b.dataset.tab); }));
    document.getElementById('salvage-low').addEventListener('click', (e) => {
      e.stopPropagation();
      this.salvageGear(this.gear.filter((g) => g.tier <= 1).map((g) => g.uid));
    });
    document.getElementById('evo-btn').addEventListener('click', () => { if (this.state === 'play') this.toggleSkills(); });
    document.getElementById('hunt-btn').addEventListener('click', () => { if (this.state === 'play') this.setAutoHunt(!this.autoHunt); });
    document.getElementById('quest').addEventListener('click', () => { if (this.state === 'play') this.toggleAutoMove(); });
    document.getElementById('skills-close').addEventListener('click', () => this.toggleSkills(false));
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
      if (this.state === 'title') return;
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
      b.addEventListener('touchstart', (e) => { e.preventDefault(); if (this.state !== 'title') this.onKey(b.dataset.k); }, { passive: false });
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
    if (this.padMove && (this.padMove.x || this.padMove.z)) { x = this.padMove.x; z = this.padMove.z; this.mouse.t = -10; }
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
      card.querySelector('.role').textContent = C.role;
    }
    const btn = (id, fn) => { const b = document.getElementById(id); b.addEventListener('click', (e) => { e.stopPropagation(); fn(); }); b.addEventListener('mousedown', (e) => e.stopPropagation()); };
    btn('btn-cont', () => { if (this.hasSave) this.start(); });
    btn('btn-new', () => this.newGame(false));
    btn('cf-yes', () => this.newGame(true));
    btn('cf-no', () => this.showConfirm(false));
    btn('btn-gfx', () => this.toggleGfx());
    document.getElementById('btn-gfx').textContent = `그래픽: ${GFX.hd ? '고화질' : '도트'} (G)`;
    document.getElementById('confirm').addEventListener('mousedown', (e) => e.stopPropagation());
    this.selectClass(this.selectedCls);
  }

  selectClass(id) {
    if (!CLASSES[id]) return;
    this.selectedCls = id;
    for (const card of document.querySelectorAll('#classes .cls')) card.classList.toggle('sel', card.dataset.cls === id);
    if (this.state === 'title' || !this.state) this.refreshTitle?.();
    // 타이틀 뒤 장면에서도 고른 직업 모습이 보이도록
    if (this.player.cls !== id) { this.player.setClass(id); this.ui.setClass(this.player.cfg); }
  }

  // 지역 색감: 지금 카메라가 있는 지역의 하늘·햇빛 색으로 천천히 바뀜
  cloneTheme(t) {
    const pair = (a) => [new THREE.Color(a[0]), new THREE.Color(a[1])];
    return { sun: pair(t.sun), sky: pair(t.sky), ground: pair(t.ground), bg: pair(t.bg), sunI: [...t.sunI], hemiI: [...t.hemiI], ambient: t.ambient };
  }

  blendTheme(dt, snap = false) {
    const tgt = MAPS[this.world.regionAt(this.focus.x, this.focus.z).id].theme;
    const cur = this.themeCur;
    const k = snap ? 1 : 1 - Math.exp(-dt * 1.4);
    for (const key of ['sun', 'sky', 'ground', 'bg']) for (let i = 0; i < 2; i++) cur[key][i].lerp(_e.set(tgt[key][i]), k);
    for (const key of ['sunI', 'hemiI']) for (let i = 0; i < 2; i++) cur[key][i] = lerp(cur[key][i], tgt[key][i], k);
    cur.ambient = tgt.ambient;
  }

  // 궁궐의 수문장·나인·참새, 죽림 입구의 약초꾼, 폐사찰 입구의 떠돌이 도사
  createActors() {
    this.npcs = [
      new NPC(this, 'guard', -12.4, 6.4, 0.6, '수문장 박돌쇠', []),
      new NPC(this, 'lady', 19.2, 7.5, -0.9, '나인 연이', [
        '어머, 검객님. 이 궁은 밤만 되면 도깨비불이 떠다녀요.',
        '도깨비들은 장난이 심하지만, 혼쭐을 내주면 금방 달아난답니다.',
        '푸른 불덩이를 쏘는 녀석은 검으로 쳐내면 튕겨낼 수 있대요!',
        '남문 밖으로 쭉 내려가면 대숲이에요. 더 가면 눈 덮인 옛 절터가 있고요.',
        '(N 키로 낮과 밤을 바꿔 볼 수 있어요. 싸우는 중엔 안 돼요.)',
      ]),
      new NPC(this, 'herb', 4.2, 35.5, -2.4, '약초꾼 분이', [
        '어머나, 궁에서 내려오셨어요? 여기서부턴 죽림이에요.',
        '숲속엔 여우들이 어슬렁거려요. 가까이 가면 달려드니 조심하세요.',
        '숲 한가운데 서낭당 나무가 있는데, 거기 방울을 흔들면 여우 떼가 몰려온대요.',
        '그 끝엔 천년 묵은 구미호가… 아이고, 생각만 해도 무서워라.',
      ]),
      new NPC(this, 'smith', 9.5, 179.5, 2.8, '대장장이 쇠돌이', [
        '여기가 옛 대장간 터요. 불가사리란 놈이 쇠붙이란 쇠붙이는 죄다 먹어 치웠지.',
        '바닥의 분화구가 벌겋게 달아오르면 곧 터지니 얼른 비키시오.',
        '돌장승은 칼이 잘 안 먹히오. 얼리거나 기술로 몰아치시오.',
      ]),
      new NPC(this, 'ferry', -12.5, 135.5, 2.4, '사공 영감', [
        '이 늪은 물이 얕아도 발이 푹푹 빠지오. 나무 다리를 따라 다니시오.',
        '물귀신은 물속에서 빨라지고, 두꺼비 요괴의 독침을 맞으면 몸이 무거워지오.',
        '남쪽 용왕 제단의 징을 치면 천년 묵은 이무기가 깨어난다는 전설이 있소…',
      ]),
      new NPC(this, 'hermit', -4.4, 75.4, 2.6, '떠돌이 도사 청허', [
        '허허, 대숲을 지나 여기까지 왔는가. 이곳은 버려진 옛 절터일세.',
        '눈밭엔 강시와 원귀가 떠돈다네. 강시는 뛰어오를 때 피하게.',
        '절 안쪽 종각의 범종을 울리면 망자들이 깨어나고, 저승사자가 명부를 들고 오지.',
        '자네라면 해낼 걸세. 기술을 갈고닦게나 — 수련이 쌓이면 기술이 달라진다네.',
      ]),
    ];
    this.birds = [];
    for (const [x, z] of [[-6, 6], [-5.4, 6.6], [6.5, 15], [7, 14.3], [-15, 9], [14, -0.5], [0.5, -9.5], [-6, 40], [5.5, 47], [-3, 70]]) {
      this.birds.push(new Bird(this, V(x, this.world.heightAt(x, z), z)));
    }
  }

  // 플레이어가 다른 지역으로 걸어 들어가면 이름을 띄우고 임무·색감을 바꿈 (싸우는 중엔 고정)
  updateRegion(force = false) {
    if (this.waveActive && !force) return;
    const R = this.world.regionAt(this.player.pos.x, this.player.pos.z);
    if (R.id === this.mapId && !force) return;
    this.mapId = R.id;
    this.map = MAPS[R.id];
    const logo = document.getElementById('logo');
    if (logo) logo.innerHTML = `<span class="han">${this.map.han}</span><span class="sub">${this.map.sub}</span>`;
    if (!force && this.state === 'play' && this.time - (this.regionBanner[R.id] ?? -99) > 10) {
      this.regionBanner[R.id] = this.time;
      this.ui.banner(this.map.name, this.map.sub, 2.4, 'title-banner');
    }
    this.updateQuest();
  }

  // 필드 몬스터: 죽림·폐사찰을 돌아다니면 주변에 무리가 생겨남. 멀리 떨어지면 사라짐
  updateField(dt) {
    this.fieldT -= dt;
    if (this.fieldT > 0) return;
    this.fieldT = 1.2;
    const p = this.player;
    let removed = false;
    for (const e of this.enemies) {
      if (e.field && !e.dead && Math.hypot(e.pos.x - p.pos.x, e.pos.z - p.pos.z) > 40) { e.dispose(); e.removed = true; removed = true; if (this.target === e) this.target = null; }
    }
    if (removed) this.enemies = this.enemies.filter((e) => !e.removed);
    if (this.state !== 'play' || p.dead || this.waveActive) return;
    const R = this.world.regionAt(p.pos.x, p.pos.z);
    const F = MAPS[R.id].field;
    if (!F) return;
    if (this.enemies.filter((e) => e.field && !e.dead).length >= F.cap) return;
    const at = this.world.randomWalkable(p.pos.x, p.pos.z, 13, 22);
    if (!at || this.world.regionAt(at.x, at.z) !== R) return;
    let roll = Math.random() * F.types.reduce((a, t) => a + t[1], 0), type = F.types[0][0];
    for (const [t, w] of F.types) { roll -= w; if (roll <= 0) { type = t; break; } }
    const n = Math.min(1 + Math.floor(Math.random() * F.pack), F.cap - this.enemies.filter((e) => e.field && !e.dead).length);
    const lv = 1 + MAPS[R.id].lvl + Math.floor((p.level - 1) / 3);
    for (let i = 0; i < n; i++) {
      const pos = (i && this.world.randomWalkable(at.x, at.z, 0.8, 2.5)) || at;
      this.enemies.push(new Enemy(this, type, pos, lv, { field: true }));
    }
  }

  progressOf(cls) {
    if (!this.progress[cls]) this.progress[cls] = { level: 1, exp: 0, weapon: WEAPONS[cls][0].id, outfit: 'ot0' };
    return this.progress[cls];
  }

  // ---------- 자동 타겟 ----------
  buildTargetMarker() {
    const g = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({ color: '#ff5a3a', transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 24, 1), ringMat);
    ring.rotation.x = -Math.PI / 2;
    // 네 귀퉁이 꺾쇠
    const tick = new THREE.MeshBasicMaterial({ color: '#ffe0a0', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const ticks = new THREE.Group();
    for (let k = 0; k < 4; k++) {
      const t = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.1), tick);
      const a = (k / 4) * Math.PI * 2;
      t.position.set(Math.cos(a) * 1.15, 0, Math.sin(a) * 1.15);
      t.rotation.set(-Math.PI / 2, 0, -a + Math.PI / 2);
      ticks.add(t);
    }
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.48, 4), new THREE.MeshBasicMaterial({ color: '#ff6a3a' }));
    arrow.rotation.x = Math.PI;
    arrow.userData.noOutline = true;
    g.add(ring, ticks, arrow);
    g.visible = false;
    this.scene.add(g);
    this.marker = { g, ring, ticks, arrow };
  }

  targetRange() { return this.player.cls === 'sword' ? 7 : 12; }

  validTarget(e) {
    if (!e || e.dead || e.spawning) return false;
    const p = this.player.pos;
    return Math.hypot(e.pos.x - p.x, e.pos.z - p.z) < this.targetRange() + 2;
  }

  // 가장 가까운 적을 자동으로 잡음 (Tab: 다음 적으로)
  updateTarget(cycle = false) {
    const p = this.player.pos;
    const cands = this.enemies.filter((e) => !e.dead && !e.spawning)
      .map((e) => ({ e, d: Math.hypot(e.pos.x - p.x, e.pos.z - p.z) }))
      .filter((c) => c.d < this.targetRange())
      .sort((a, b) => a.d - b.d);
    if (cycle && cands.length) {
      const i = cands.findIndex((c) => c.e === this.target);
      this.target = cands[(i + 1) % cands.length].e;
      this.audio.play('talk');
      return;
    }
    if (this.validTarget(this.target)) {
      // 지금 목표보다 훨씬 가까운 적이 붙으면 바꿈
      const cur = Math.hypot(this.target.pos.x - p.x, this.target.pos.z - p.z);
      if (cands.length && cands[0].e !== this.target && cands[0].d < cur - 2.5) this.target = cands[0].e;
      return;
    }
    this.target = cands.length ? cands[0].e : null;
  }

  updateMarker(dt) {
    const M = this.marker, t = this.target;
    M.g.visible = !!t && this.state === 'play';
    if (!M.g.visible) return;
    const r = t.isBoss ? 1.6 : t.isWisp ? 0.7 : 0.8;
    M.g.position.set(t.pos.x, t.y + 0.05, t.pos.z);
    const pulse = 1 + Math.sin(this.time * 8) * 0.06;
    M.ring.scale.setScalar(r * pulse);
    M.ticks.scale.setScalar(r * (1.05 + Math.sin(this.time * 8) * 0.1));
    M.ticks.rotation.y += dt * 1.5;
    const top = t.isBoss ? 4.4 : t.isWisp ? 2.3 : 2.2;
    M.arrow.position.set(0, top + Math.abs(Math.sin(this.time * 5)) * 0.25, 0);
  }

  // ---------- 성장 ----------
  onLevelUp(pl, n) {
    const p = V(pl.pos.x, pl.y, pl.pos.z);
    this.audio.play('levelup');
    this.ui.flash('#ffd060', 0.35);
    this.ui.banner('LEVEL UP', `${pl.cfg.title} ${pl.cfg.name} · Lv.${pl.level}`, 2.4, 'win-banner');
    this.fx.circle(p, 2.2, '#ffd060', 1.4, 2);
    this.fx.ring(p, 3, '#fff2c0', 0.5);
    for (let i = 0; i < 70; i++) {
      const a = Math.random() * Math.PI * 2, r = rand(0.2, 0.9);
      this.fx.add.emit({ x: p.x + Math.cos(a) * r, y: p.y + rand(0, 0.5), z: p.z + Math.sin(a) * r, vy: rand(2, 7), drag: 1, life: rand(0.6, 1.3), size: rand(2, 4), endSize: 1, color: '#fff6c0', color2: '#ffa020' });
    }
    for (const slot of [2, 3]) {
      if (pl.level - n < SKILL_LEVEL[slot] && pl.level >= SKILL_LEVEL[slot]) {
        const name = pl.cfg.labels['skill' + slot];
        setTimeout(() => this.ui.toast(`새 스킬 해금: ${name} (${slot === 2 ? 'L' : 'I'})`, 3), 900);
      }
    }
    // 수련점이 생겼으니 기술 창 버튼에 알림
    const E1 = Object.values(EVOS[pl.cls]).filter((E) => E.lv.some((lv) => pl.level - n < lv && pl.level >= lv));
    if (E1.length) setTimeout(() => this.ui.toast(`새 수련 단계: ${E1.map((E) => E.base).join(', ')} (T 키)`, 4), 1800);
    document.getElementById('evo-dot').classList.remove('hidden');
    this.ui.setClass(pl.cfg, pl);
    this.save(false);
  }

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
        this.scene.remove(d.g);
        this.drops.splice(i, 1);
        this.pickup(d.id);
      }
    }
  }

  pickup(id) {
    if (typeof id === 'object') { this.pickupGear(id); return; }
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
    const r = rarityOf(g);
    const p = this.player;
    this.audio.play('coin');
    this.fx.spark(p.pos.x, p.y + 1, p.pos.z, 14, r.color, 4);
    if (this.gear.filter((x) => !this.isEquipped(x)).length >= BAG_MAX) {
      // 가방이 꽉 차면 바로 분해
      const ex = salvageExp(g);
      p.addExp(ex);
      this.ui.toast(`가방이 가득 차서 ${g.name}을(를) 분해 → 경험치 +${ex}`, 2.4);
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
    let ex = 0, n = 0;
    for (const uid of uids) {
      const g = this.gearByUid(uid);
      if (!g || this.isEquipped(g) || CLASS_ORDER.some((c) => this.isEquipped(g, c))) continue;
      ex += salvageExp(g); n++;
      this.gear.splice(this.gear.indexOf(g), 1);
    }
    if (!n) return;
    this.player.addExp(ex);
    this.audio.play('crit');
    this.ui.toast(`${n}개 분해 → 경험치 +${ex}`, 2);
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

  // ---------- 가방 ----------
  toggleBag(open = !this.ui.bagOpen) {
    if (open) this.toggleSkills(false);
    this.ui.bagOpen = open;
    this.paused = open || !!this.ui.skillsOpen;
    this.ui.showBag(open);
    if (open) this.ui.newItem = false;
  }

  // ---------- 기술 수련 ----------
  toggleSkills(open = !this.ui.skillsOpen) {
    if (open && this.ui.bagOpen) this.toggleBag(false);
    this.ui.skillsOpen = open;
    this.paused = open || !!this.ui.bagOpen;
    this.ui.showSkills(open);
    if (open) document.getElementById('evo-dot').classList.add('hidden');
  }

  // 갈래 고르기: 처음이면 Ⅰ단계로 수련(수련점 1), 이미 수련했으면 단계는 그대로 두고 갈래만 바꿈
  chooseEvo(slot, b) {
    const p = this.player;
    const E = EVOS[p.cls][slot];
    if (p.level < E.lv[0]) return;
    const pr = this.progressOf(p.cls);
    const r = pr.rank?.[slot] || (pr.evo?.[slot] ? 1 : 0);
    if (!r && freePoints(pr, p.level) <= 0) { this.ui.toast('수련점이 부족해요', 1.6); this.audio.play('denied'); return; }
    if (pr.evo?.[slot] === b) return;
    pr.evo = { ...(pr.evo || {}), [slot]: b };
    pr.rank = { ...(pr.rank || {}), [slot]: Math.max(1, r) };
    this.audio.play('levelup');
    this.ui.toast(r ? `${E.base} 갈래를 ${E[b].name}(으)로 바꿈` : `${E.base} → ${E[b].name} 수련!`, 2);
    this.ui.setClass(p.cfg, p);
    this.ui.refreshSkills();
    this.save(false);
  }

  trainEvo(slot) {
    const p = this.player;
    const E = EVOS[p.cls][slot];
    const pr = this.progressOf(p.cls);
    const r = pr.rank?.[slot] || (pr.evo?.[slot] ? 1 : 0);
    if (!pr.evo?.[slot] || r >= 5 || p.level < E.lv[r] || freePoints(pr, p.level) <= 0) return;
    pr.rank = { ...(pr.rank || {}), [slot]: r + 1 };
    const nm = E[pr.evo[slot]].name;
    this.audio.play('levelup');
    this.ui.banner(r + 1 === 5 ? '각성!' : '수련', `${nm} ${RANK_NAME[r + 1]}단계`, 2, 'win-banner');
    const at = V(p.pos.x, p.y, p.pos.z);
    this.fx.circle(at, 2, r + 1 === 5 ? '#ffd040' : '#bfe8ff', 1.2, 3);
    this.ui.setClass(p.cfg, p);
    this.ui.refreshSkills();
    this.save(false);
  }

  // 파생 기술 갈래와 단계 (수련 안 했거나 레벨이 모자라면 null / 0)
  branch(pl, slot) {
    return branchOf(this.progressOf(pl.cls), pl.cls, pl.level, slot);
  }

  rank(pl, slot) {
    return rankOf(this.progressOf(pl.cls), pl.cls, pl.level, slot);
  }

  // 단계에 따른 재사용 대기 배수 (플레이어가 스킬을 쓸 때)
  skillCdMul(pl, slot) { return rankCd(this.rank(pl, slot)) * (1 - (pl.gear?.cdr || 0)); }

  equipItem(id) {
    const p = this.player;
    const it = item(id);
    if (!it || !this.inv.has(id)) return;
    if (it.kind === 'weapon' && it.cls !== p.cls) { this.ui.toast('다른 직업의 무기예요'); this.audio.play('denied'); return; }
    p.equip(id);
    this.audio.play(it.kind === 'weapon' ? 'draw' : 'coin');
    const pos = V(p.pos.x, p.y, p.pos.z);
    this.fx.ring(pos, 1.6, RARITY[it.tier].color, 0.4);
    for (let i = 0; i < 30; i++) this.fx.add.emit({ x: pos.x + rand(-0.4, 0.4), y: pos.y + rand(0, 1.6), z: pos.z + rand(-0.4, 0.4), vy: rand(0.5, 2), life: rand(0.4, 0.8), size: 2, color: '#ffffff', color2: RARITY[it.tier].color });
    this.ui.setClass(p.cfg, p);
    this.ui.refreshBag();
    this.save(false);
  }

  // ---------- 자동 저장 ----------
  applySave(d) {
    const info = document.getElementById('title-save');
    this.hasSave = !!d;
    if (!d) { if (info) info.textContent = ''; this.refreshTitle(); return; }
    this.kills = d.kills | 0;
    this.round = d.round | 0;
    this.bestCombo = d.bestCombo | 0;
    // 싸우던 중에 저장됐다면 북을 울리기 전 상태로
    this.stage = this.round > 0 ? 3 : Math.min(1, d.stage | 0);
    if (d.music === false && this.audio.musicOn) this.audio.toggleMusic();
    if (d.outline === 0) this.pixel.compMat.uniforms.outline.value = 0;
    if (typeof d.zoom === 'number' && d.zoom !== this.pixel.userZoom) { this.pixel.userZoom = d.zoom; this.pixel.resize(); }
    if (d.night) { this.nightTarget = 1; this.night = 1; }
    if (d.progress) for (const k of Object.keys(CLASSES)) if (d.progress[k]) Object.assign(this.progressOf(k), d.progress[k]);
    if (Array.isArray(d.inv)) for (const id of d.inv) if (item(id)) this.inv.add(id);
    if (Array.isArray(d.gear)) this.gear = d.gear.filter((g) => g && g.uid && g.stats);
    this.towerBest = d.towerBest | 0;
    if (d.cleared) this.cleared = { ...d.cleared };
    else if (d.round > 0) this.cleared = { palace: true };
    // 퀘스트: 예전 기록은 평정한 지역으로 진행 단계를 짐작
    if (d.quest && typeof d.quest.step === 'number') this.quest = { step: d.quest.step, prog: d.quest.prog || {}, lit: d.quest.lit || [], bounty: d.quest.bounty || null };
    else {
      const c = this.cleared;
      this.quest.step = c.temple ? 11 : c.bamboo ? 7 : c.palace ? 2 : (d.stage | 0) >= 1 ? 1 : 0;
    }
    this.quest.lit.forEach((i) => this.world.lanterns[i] && this.addFlame(this.world.lanterns[i]));
    this.updateGates(true);
    // 마지막 위치에서 이어서 (예전 기록은 그 지역 입구에서)
    let at = null;
    if (Array.isArray(d.pos) && this.world.inside(d.pos[0], d.pos[1], 0.4) && !this.world.isBlocked(d.pos[0], d.pos[1], 0.4, this.world.heightAt(d.pos[0], d.pos[1]))) at = d.pos;
    else if (d.mapId && d.mapId !== 'palace') { const R = this.world.regions.find((r) => r.id === d.mapId); if (R) at = [R.spawn[0], R.spawn[2]]; }
    if (at) {
      this.player.pos.set(at[0], this.world.heightAt(at[0], at[1]), at[1]);
      this.player.y = this.player.pos.y;
      this.startPos = this.player.pos.clone();
    }
    const cls = d.cls && CLASSES[d.cls] ? d.cls : this.player.cls;
    this.player.cls = null; // 강제로 다시 만들기
    this.selectClass(cls);
    if (info) {
      const when = new Date(d.savedAt || Date.now());
      const pad = (n) => String(n).padStart(2, '0');
      info.innerHTML = `이어하기 · ${this.player.cfg.title} <b>Lv.${this.player.level}</b> · <b>${this.round + 1}회차</b> · 퇴치 <b>${this.kills}</b> · 최고 연속 <b>${this.bestCombo}</b>` +
        `<small>${when.getMonth() + 1}/${when.getDate()} ${pad(when.getHours())}:${pad(when.getMinutes())} 자동 저장 · Delete 키: 기록 지우기</small>`;
    }
    this.refreshTitle();
  }

  save(show = true) {
    // 선택 화면에서 한 번도 시작하지 않았으면 빈 기록을 만들지 않음
    if (this.state === 'title' && !this.hasSave) return;
    if (this.noSave) return; // 저장 파일을 불러와 새로고침하는 중엔 덮어쓰지 않음
    this.hasSave = true;
    const ok = writeSave({
      kills: this.kills,
      round: this.round,
      stage: this.stage === 2 ? (this.round > 0 ? 3 : 1) : this.stage,
      bestCombo: this.bestCombo,
      cls: this.player.cls,
      progress: this.progress,
      mapId: this.mapId,
      pos: this.tower?.active ? [this.towerReturn.x, this.towerReturn.z] : [+this.player.pos.x.toFixed(2), +this.player.pos.z.toFixed(2)],
      ..._noTower(this),
      quest: this.quest,
      cleared: this.cleared,
      towerBest: this.towerBest || 0,
      inv: [...this.inv],
      gear: this.gear,
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
      if (document.getElementById('confirm').classList.contains('show')) {
        if (code === 'Escape') this.showConfirm(false);
        else if (code === 'Enter') this.newGame(true);
        return;
      }
      if (code === 'KeyG') { this.toggleGfx(); return; }
      if (code === 'Delete' || code === 'Backspace') {
        if (!this.hasSave) return;
        this.resetProgress();
        const info = document.getElementById('title-save');
        if (info) info.textContent = '기록을 지웠습니다. 처음부터 시작합니다.';
        return;
      }
      if (this.pauseOpen) { if (code === 'Escape' || code === 'pause') this.togglePause(false); return; }
      const i = CLASS_ORDER.indexOf(this.selectedCls);
      if (code === 'ArrowLeft' || code === 'KeyA') { this.selectClass(CLASS_ORDER[(i + 2) % 3]); this.audio.unlock(); this.audio.play('talk'); return; }
      if (code === 'ArrowRight' || code === 'KeyD') { this.selectClass(CLASS_ORDER[(i + 1) % 3]); this.audio.unlock(); this.audio.play('talk'); return; }
      if (code === 'Digit1' || code === 'Digit2' || code === 'Digit3') { this.selectClass(CLASS_ORDER[+code.slice(-1) - 1]); return; }
      // Enter: 기록이 있으면 이어하기, 없으면 새로 시작
      if (code === 'Enter' || code === 'Space') { if (this.hasSave) this.start(); else this.newGame(true); }
      return;
    }
    this.audio.unlock();
    if (code === 'KeyG') { this.toggleGfx(); return; }
    if (code === 'KeyM') { const on = this.audio.toggleMusic(); this.ui.toast(on ? '음악 켜짐' : '음악 꺼짐'); this.save(false); return; }
    if (code === 'Equal' || code === 'NumpadAdd') { this.pixel.zoom(1); return; }
    if (code === 'Minus' || code === 'NumpadSubtract') { this.pixel.zoom(-1); return; }
    if (code === 'KeyO') {
      this.pixel.compMat.uniforms.outline.value = this.pixel.compMat.uniforms.outline.value ? 0 : 1;
      this.ui.toast(this.pixel.compMat.uniforms.outline.value ? '외곽선 켜짐' : '외곽선 꺼짐');
      this.save(false);
      return;
    }
    if (this.pauseOpen) {
      if (code === 'Escape' || code === 'KeyP' || code === 'pause') this.togglePause(false);
      return;
    }
    if (this.paused) {
      // 가방·기술 창이 열려 있는 동안
      if (code === 'KeyB' || code === 'bag') this.toggleBag();
      else if (code === 'KeyT' || code === 'skills') this.toggleSkills();
      else if (code === 'Escape' || code === 'Tab') { this.toggleBag(false); this.toggleSkills(false); }
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
      case 'Space': case 'ShiftLeft': case 'ShiftRight': case 'dash': if (!this.cdCheck('dash', this.player.dashCd)) this.player.startDash(inp); break;
      case 'KeyL': case 'KeyQ': case 'skill2': if (!this.lockCheck(2) && !this.cdCheck('skill2', this.player.cd2)) this.player.startExtraSkill(inp, 2); break;
      case 'KeyI': case 'KeyR': case 'skill3': if (!this.lockCheck(3) && !this.cdCheck('skill3', this.player.cd3)) this.player.startExtraSkill(inp, 3); break;
      case 'bag': this.toggleBag(); break;
      case 'KeyU': case 'ult':
        if (!this.player.ult) { this.ui.toast('고유 기술은 보스 무기를 들어야 쓸 수 있어요', 1.8); this.audio.play('denied'); break; }
        if (!this.cdCheck('ult', this.player.ultCd)) this.player.startUlt(inp);
        break;
      case 'KeyK': case 'KeyX': case 'skill': if (!this.cdCheck('skill', this.player.skillCd)) this.player.startSkill(inp); break;
      case 'KeyE': case 'Enter': case 'act': this.interact(); break;
      case 'KeyN':
        if (this.waveActive) { this.ui.toast('도깨비가 날뛰는 중엔 시간을 바꿀 수 없어요'); break; }
        this.nightTarget = this.nightTarget > 0.5 ? 0 : 1;
        this.ui.toast(this.nightTarget ? '밤이 찾아옵니다…' : '날이 밝아옵니다');
        break;
      case 'Tab': this.updateTarget(true); break;
      case 'KeyB': this.toggleBag(); break;
      case 'KeyT': case 'skills': this.toggleSkills(); break;
      case 'KeyF': case 'auto': this.toggleAutoMove(); break;
      case 'Escape': case 'KeyP': case 'pause': this.togglePause(true); break;
      case 'KeyH': case 'hunt': this.setAutoHunt(!this.autoHunt); break;
      case 'KeyG': this.godMode = !this.godMode; this.ui.toast(this.godMode ? '무적 (디버그)' : '무적 해제'); break;
    }
  }

  // 아직 레벨이 모자라 잠긴 스킬
  lockCheck(slot) {
    if (this.player.level >= SKILL_LEVEL[slot]) return false;
    this.ui.denied('skill' + slot);
    this.audio.play('denied');
    this.ui.toast(`${this.player.cfg.labels['skill' + slot]}: Lv.${SKILL_LEVEL[slot]}에 열립니다`, 1.6);
    return true;
  }

  // 쿨타임이면 칸을 흔들고 짧은 소리. 반환: 쿨타임 중인지
  cdCheck(key, remain) {
    if (!(remain > 0.05) || this.player.dead) return false;
    this.ui.denied(key);
    this.audio.play('denied');
    return true;
  }

  // 기록을 모두 지우고 처음 상태로 (선택 화면에서)
  resetProgress() {
    clearSave();
    this.kills = 0; this.round = 0; this.stage = 0; this.bestCombo = 0;
    this.progress = {}; this.inv = new Set(['sw0', 'mg0', 'bw0', 'ot0']); this.gear = [];
    this.cleared = {};
    this.quest = { step: 0, prog: {}, lit: [], bounty: null };
    for (const f of this.flames) this.scene.remove(f);
    this.flames = [];
    this.updateGates(true);
    this.player.pos.copy(this.world.spawn); this.player.y = this.player.pos.y;
    this.startPos = null;
    for (const e of this.enemies) e.dispose();
    this.enemies = [];
    this.updateRegion(true);
    this.stage = 0;
    const c0 = this.selectedCls; this.player.cls = null; this.selectClass(c0);
    this.applySave(null);
    this.updateQuest();
    this.preview.rebuild();
  }

  // 새로 시작: 기록이 있으면 먼저 확인
  newGame(confirmed = false) {
    this.audio.unlock();
    if (this.hasSave && !confirmed) { this.showConfirm(true); return; }
    this.showConfirm(false);
    if (this.hasSave) this.resetProgress();
    this.start();
  }

  // 고화질 ↔ 도트 (재질을 다시 만들어야 해서 저장 후 새로고침)
  // ---------- 게임패드 ----------
  // 표준 배치: A 공격 · B 피하기 · X 기술1 · Y 기술2 · RB 기술3 · RT 고유 기술 · LB 대화 · LT 타겟 · Back 가방 · Start 일시정지
  pollPad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let gp = null;
    for (const p of pads) if (p && p.connected) { gp = p; break; }
    if (!gp) { if (this.padMove) this.padMove.x = this.padMove.z = 0; return; }
    if (!this.padPrev) { this.padPrev = []; this.padIdx = 0; this.ui.toast('게임패드가 연결되었어요', 2); document.body.classList.add('pad'); }
    const dz = (v) => (Math.abs(v) < 0.22 ? 0 : (v - Math.sign(v) * 0.22) / 0.78);
    const menu = this.padMenu();
    this.padMove = menu ? { x: 0, z: 0 } : { x: dz(gp.axes[0] || 0), z: dz(gp.axes[1] || 0) };
    const pressed = gp.buttons.map((b) => b.pressed || b.value > 0.5);
    // 메뉴에서는 스틱도 십자키처럼 (한 번씩)
    const sy = gp.axes[1] || 0, sx = gp.axes[0] || 0;
    pressed[100] = sy < -0.6; pressed[101] = sy > 0.6; pressed[102] = sx < -0.6; pressed[103] = sx > 0.6;
    for (let i = 0; i < pressed.length; i++) if (pressed[i] && !this.padPrev[i]) this.padButton(i, menu);
    this.padPrev = pressed;
  }

  // 지금 게임패드로 조작할 창
  padMenu() {
    if (this.pauseOpen) return document.getElementById('pause');
    if (document.getElementById('confirm').classList.contains('show')) return document.getElementById('confirm');
    if (this.ui.bagOpen) return document.getElementById('bag');
    if (this.ui.skillsOpen) return document.getElementById('skills');
    return null;
  }

  padButton(i, menu) {
    this.audio.unlock();
    const dir = { 12: -1, 100: -1, 13: 1, 101: 1, 14: -1, 102: -1, 15: 1, 103: 1 }[i];
    if (menu) {
      const els = [...menu.querySelectorAll('button:not([disabled]), input[type=range], .it, .eqs, .evo-opt, .evo-train')].filter((e) => e.offsetParent !== null && getComputedStyle(e).visibility !== 'hidden');
      for (const e of menu.querySelectorAll('.pad-focus')) e.classList.remove('pad-focus');
      if (!els.length) { if (i === 1 || i === 9) this.onKey('Escape'); return; }
      this.padIdx = Math.max(0, Math.min(els.length - 1, this.padIdx || 0));
      let cur = els[this.padIdx];
      if (dir !== undefined) {
        // 슬라이더에서 좌우는 값 조절
        if (cur.type === 'range' && (i === 14 || i === 15 || i === 102 || i === 103)) { cur.value = +cur.value + dir * 5; cur.dispatchEvent(new Event('input')); }
        else { this.padIdx = (this.padIdx + dir + els.length) % els.length; cur = els[this.padIdx]; this.audio.play('talk'); }
      } else if (i === 0) { cur.click(); this.padIdx = Math.min(this.padIdx, els.length - 1); }
      else if (i === 1 || i === 9) { if (this.pauseOpen) this.togglePause(false); else if (menu.id === 'confirm') this.showConfirm(false); else this.onKey('Escape'); }
      else if (i === 8 && menu.id === 'bag') this.toggleBag(false);
      requestAnimationFrame(() => {
        const list = [...menu.querySelectorAll('button:not([disabled]), input[type=range], .it, .eqs, .evo-opt, .evo-train')].filter((e) => e.offsetParent !== null);
        const el = list[Math.min(this.padIdx, list.length - 1)];
        if (el) { el.classList.add('pad-focus'); el.scrollIntoView?.({ block: 'nearest' }); }
      });
      return;
    }
    if (this.state === 'title') {
      if (i === 0) this.onKey('Enter');
      else if (i === 2) document.getElementById('btn-new').click();
      else if (i === 9) this.togglePause(true);
      else if (i === 14 || i === 102) this.onKey('ArrowLeft');
      else if (i === 15 || i === 103) this.onKey('ArrowRight');
      return;
    }
    if (this.state === 'dead') { if (i === 0 || i === 9) this.onKey('act'); return; }
    const MAP = { 0: 'atk', 1: 'dash', 2: 'skill', 3: 'skill2', 5: 'skill3', 7: 'ult', 4: 'act', 6: 'Tab', 8: 'bag', 9: 'pause', 12: 'auto', 13: 'hunt', 14: 'skills' };
    const act = MAP[i];
    if (act) this.onKey(act);
  }

  // ---------- 설정 · 일시정지 ----------
  applySettings() {
    const S = this.settings;
    this.binds = bindMap(S);
    this.audio.setVolumes(S.vol);
    document.body.classList.toggle('no-dmg', !S.numbers);
  }

  setSetting(fn) {
    fn(this.settings);
    saveSettings(this.settings);
    this.applySettings();
  }

  togglePause(open = !this.pauseOpen) {
    if (open && this.state === 'play') { if (this.ui.bagOpen) this.toggleBag(false); if (this.ui.skillsOpen) this.toggleSkills(false); if (this.autoMove) this.stopAutoMove(); }
    this.pauseOpen = open;
    this.rebind = null;
    if (this.state === 'play') this.paused = open;
    document.getElementById('pause').classList.toggle('show', open);
    // 선택 화면에서 열면 '선택 화면으로'는 감춤
    document.querySelector('#pause [data-p="title"]').style.display = this.state === 'title' ? 'none' : '';
    document.querySelector('#pause [data-p="resume"]').textContent = this.state === 'title' ? '닫기' : '계속하기';
    if (open) this.pausePane(this.state === 'title' ? 'sound' : 'sound');
    this.audio.play('talk');
  }

  pausePane(tab) {
    this.pzTab = tab;
    for (const b of document.querySelectorAll('#pause .pz-menu button')) b.classList.toggle('on', b.dataset.p === tab);
    const el = document.getElementById('pz-pane');
    const S = this.settings;
    if (tab === 'sound') {
      const row = (k, name) => `<div class="pz-row"><label>${name}</label><input type="range" min="0" max="100" value="${Math.round(S.vol[k] * 100)}" data-v="${k}"><span class="val">${Math.round(S.vol[k] * 100)}</span></div>`;
      el.innerHTML = `<h3>소리</h3>${row('master', '전체')}${row('music', '배경음악')}${row('sfx', '효과음')}${row('amb', '환경음')}
        <div class="pz-row"><label>음악</label><div class="pz-seg"><button data-m="1" class="${this.audio.musicOn ? 'on' : ''}">켜기</button><button data-m="0" class="${this.audio.musicOn ? '' : 'on'}">끄기</button></div></div>`;
      for (const r of el.querySelectorAll('input[type=range]')) r.addEventListener('input', () => {
        r.nextElementSibling.textContent = r.value;
        this.setSetting((s) => { s.vol[r.dataset.v] = r.value / 100; });
      });
      for (const b of el.querySelectorAll('[data-m]')) b.addEventListener('click', () => { if ((b.dataset.m === '1') !== this.audio.musicOn) this.audio.toggleMusic(); this.save(false); this.pausePane('sound'); });
    } else if (tab === 'screen') {
      const seg = (key, opts, cur) => `<div class="pz-seg">${opts.map(([v, n]) => `<button data-k="${key}" data-val="${v}" class="${String(cur) === String(v) ? 'on' : ''}">${n}</button>`).join('')}</div>`;
      el.innerHTML = `<h3>화면</h3>
        <div class="pz-row"><label>그래픽 모드</label>${seg('gfx', [['hd', '고화질'], ['pixel', '도트']], GFX.hd ? 'hd' : 'pixel')}</div>
        <div class="pz-row"><label>화질</label>${seg('quality', [['high', '높음'], ['mid', '보통'], ['low', '낮음']], S.quality)}</div>
        <div class="pz-row"><label>화면 흔들림</label>${seg('shake', [[1, '보통'], [0.5, '약하게'], [0, '끔']], S.shake)}</div>
        <div class="pz-row"><label>데미지 숫자</label>${seg('numbers', [[1, '보이기'], [0, '숨기기']], S.numbers ? 1 : 0)}</div>
        ${GFX.hd ? '' : `<div class="pz-row"><label>외곽선</label>${seg('outline', [[1, '켜기'], [0, '끄기']], this.pixel.compMat.uniforms.outline.value ? 1 : 0)}</div>`}
        <div class="pz-note">화질 '낮음'은 해상도를 줄이고 그늘(AO)·계단 현상 제거·그림자 해상도를 낮춰 저사양 노트북·휴대폰에서 부드럽게 돌아가요. 그래픽 모드와 그림자 해상도는 새로고침해야 바뀝니다.</div>`;
      for (const b of el.querySelectorAll('[data-k]')) b.addEventListener('click', () => {
        const k = b.dataset.k, v = b.dataset.val;
        if (k === 'gfx') { if ((v === 'hd') !== GFX.hd) { this.save(false); setGfx(v); } return; }
        if (k === 'quality') { this.setSetting((s) => { s.quality = v; }); this.pixel.setQuality(v); }
        if (k === 'shake') this.setSetting((s) => { s.shake = +v; });
        if (k === 'numbers') this.setSetting((s) => { s.numbers = v === '1'; });
        if (k === 'outline') { this.pixel.compMat.uniforms.outline.value = +v; this.save(false); }
        this.pausePane('screen');
      });
    } else if (tab === 'keys') {
      el.innerHTML = `<h3>조작 · 키 바꾸기</h3>${ACTIONS.map(([a, n]) => `<div class="pz-row"><label>${n}</label><button class="pz-key${this.rebind === a ? ' wait' : ''}" data-a="${a}">${this.rebind === a ? '키를 누르세요…' : keyName(keyOf(S, a))}</button></div>`).join('')}
        <div class="pz-row"><button class="pz-btn" id="pz-keyreset">기본 키로 되돌리기</button></div>
        <div class="pz-note">이동은 WASD·방향키 고정. 원래 키(J/Z, Space/Shift, K/X, L/Q, I/R 등)도 계속 쓸 수 있어요.<br>
        <b>게임패드</b> — 왼쪽 스틱 이동 · A 공격 · B 피하기 · X 기술1 · Y 기술2 · RB 기술3 · RT 고유 기술 · LB 대화 · LT 타겟 변경 · Back 가방 · Start 일시정지 · 십자키 ↑ 자동 이동 / ↓ 자동 사냥 / ← 기술 수련. 메뉴에서는 십자키로 고르고 A로 누르고 B로 닫아요.</div>`;
      for (const b of el.querySelectorAll('[data-a]')) b.addEventListener('click', () => { this.rebind = b.dataset.a; this.pausePane('keys'); });
      el.querySelector('#pz-keyreset').addEventListener('click', () => { this.setSetting((s) => { s.binds = {}; }); this.pausePane('keys'); });
    } else if (tab === 'data') {
      const has = !!exportSave();
      el.innerHTML = `<h3>저장 파일</h3>
        <div class="pz-note" style="margin-top:0">진행은 자동 저장되지만 브라우저 기록·캐시를 지우면 함께 사라질 수 있어요. 가끔 <b>저장 파일로 내보내 두면</b> 다른 기기·브라우저에서도 이어 할 수 있어요.</div>
        <div class="pz-row"><button class="pz-btn main" id="pz-export" ${has ? '' : 'disabled'}>저장 파일 내보내기 (.json)</button></div>
        <div class="pz-row"><button class="pz-btn" id="pz-import">저장 파일 불러오기</button></div>
        <div class="pz-row"><button class="pz-btn" id="pz-backup">5분 전 예비 기록으로 되돌리기</button></div>
        <div class="pz-note" id="pz-msg"></div>`;
      const msg = (t) => { el.querySelector('#pz-msg').textContent = t; };
      el.querySelector('#pz-export').addEventListener('click', () => {
        if (this.state === 'play') this.save(false);
        const json = exportSave();
        if (!json) return msg('아직 저장된 기록이 없어요');
        const d = new Date(), pad = (n) => String(n).padStart(2, '0');
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
        a.download = `월하궁-저장-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.json`;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
        msg('저장 파일을 내려받았어요.');
      });
      el.querySelector('#pz-import').addEventListener('click', () => document.getElementById('save-file').click());
      el.querySelector('#pz-backup').addEventListener('click', () => {
        let b = null;
        try { b = localStorage.getItem('dot3d-palace-save-v1-backup'); } catch { /* 무시 */ }
        if (!b) return msg('예비 기록이 없어요');
        try { importSave(b); this.noSave = true; msg('예비 기록으로 되돌렸어요. 다시 불러옵니다…'); setTimeout(() => location.reload(), 900); } catch (e) { msg(e.message); }
      });
    }
  }

  finishRebind(code) {
    const a = this.rebind;
    this.rebind = null;
    if (code !== 'Escape' && !['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      this.setSetting((s) => {
        for (const k of Object.keys(s.binds)) if (s.binds[k] === code) delete s.binds[k]; // 같은 키는 하나에만
        s.binds[a] = code;
      });
    }
    this.pausePane('keys');
  }

  setupPause() {
    for (const b of document.querySelectorAll('#pause .pz-menu button')) b.addEventListener('click', () => {
      const p = b.dataset.p;
      if (p === 'resume') this.togglePause(false);
      else if (p === 'title') { this.save(false); location.reload(); }
      else this.pausePane(p);
    });
    document.getElementById('menu-btn').addEventListener('click', () => { if (this.state === 'play' && !this.player.dead) this.togglePause(true); });
    document.getElementById('btn-settings').addEventListener('click', (e) => { e.stopPropagation(); this.audio.unlock(); this.togglePause(true); });
    document.getElementById('save-file').addEventListener('change', (e) => {
      const f = e.target.files[0];
      e.target.value = '';
      if (!f) return;
      f.text().then((t) => {
        try {
          const d = importSave(t);
          this.noSave = true;
          const m = document.getElementById('pz-msg');
          if (m) m.textContent = `불러왔어요 (${new Date(d.savedAt || Date.now()).toLocaleString()} 기록). 다시 시작합니다…`;
          setTimeout(() => location.reload(), 1000);
        } catch (err) {
          const m = document.getElementById('pz-msg');
          if (m) m.textContent = '불러오지 못했어요: ' + (err.message || '파일이 깨졌어요');
        }
      });
    });
  }

  toggleGfx() {
    if (this.state !== 'title') this.save(false);
    this.ui.toast(`그래픽을 ${GFX.hd ? '도트' : '고화질'}(으)로 바꿉니다…`, 2);
    setTimeout(() => setGfx(GFX.hd ? 'pixel' : 'hd'), 300);
  }

  showConfirm(v) { document.getElementById('confirm').classList.toggle('show', v); }

  // 선택 화면 오른쪽: 고른 캐릭터의 설명·능력치 막대·스킬·장비
  refreshTitle() {
    const C = CLASSES[this.selectedCls];
    const pr = this.progress[C.id];
    const lv = pr?.level || 1;
    const q = (sel) => document.querySelector(sel);
    q('.cd-name').innerHTML = `${C.title}<b>${C.name}</b>` + (this.hasSave && pr ? `<em>Lv.${lv}</em>` : '');
    q('.cd-role').textContent = C.role;
    q('.cd-desc').textContent = C.desc;
    q('.cd-bars').innerHTML = Object.entries(C.bars).map(([k, v]) => `<span>${k}</span><span class="pips5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= v ? 'on' : ''}"></i>`).join('')}</span>`).join('');
    const keys = { 1: ['K', 'skill'], 2: ['L', 'skill2'], 3: ['I', 'skill3'] };
    q('.cd-skills').innerHTML = [1, 2, 3].map((slot) => {
      const br = pr ? branchOf(pr, C.id, lv, slot) : null;
      const r = pr ? rankOf(pr, C.id, lv, slot) : 0;
      const name = br ? `${EVOS[C.id][slot][br].name} ${RANK_NAME[r]}` : C.labels[keys[slot][1]];
      return `<div><span class="k">${keys[slot][0]}</span>${name}${br ? ` <small>(${EVOS[C.id][slot].base} 파생)</small>` : ''}</div>`;
    }).join('');
    const w = item(pr?.weapon || WEAPONS[C.id][0].id), o = item(pr?.outfit || 'ot0');
    const eqN = pr?.eq ? Object.values(pr.eq).filter(Boolean).length : 0;
    q('.cd-gear').innerHTML = `무기 <span style="color:${RARITY[w.tier].color}">${w.name}</span> · 갑옷 <span style="color:${RARITY[o.tier].color}">${o.name}</span>` + (eqN ? ` · 방어구·장신구 ${eqN}개` : '');
    for (const card of document.querySelectorAll('#classes .cls')) {
      const p2 = this.progress[card.dataset.cls];
      card.querySelector('.lvb').textContent = this.hasSave && p2 ? `Lv.${p2.level}` : '';
    }
    const cont = document.getElementById('btn-cont');
    cont.disabled = !this.hasSave;
    cont.classList.toggle('main', !!this.hasSave);
    document.getElementById('btn-new').classList.toggle('main', !this.hasSave);
  }

  start() {
    this.audio.unlock();
    if (this.state !== 'title') return;
    this.showConfirm(false);
    this.state = 'play';
    if (this.player.cls !== this.selectedCls) this.player.setClass(this.selectedCls);
    this.ui.setClass(this.player.cfg);
    this.player.hp = this.player.maxHp;
    this.save(false);
    document.getElementById('title').classList.add('hide');
    this.ui.showHud(true);
    this.ui.banner('월하궁', '도깨비 야행', 2.8, 'title-banner');
  }

  // ---------- 상호작용 ----------
  findInteract() {
    const p = this.player.pos;
    let best = null, bd = 2.4;
    for (const n of this.npcs) {
      const d = Math.hypot(n.pos.x - p.x, n.pos.z - p.z);
      if (d < bd) { bd = d; best = { kind: 'npc', npc: n, label: '대화', promptPos: n.pos.clone().add(V(0, 2.1, 0)) }; }
    }
    const Q = this.curQuest();
    if (Q && Q.type === 'light') {
      this.world.lanterns.forEach((L, idx) => {
        if (L.region !== (Q.region || 'temple') || this.quest.lit.includes(idx)) return;
        const d = Math.hypot(L.x - p.x, L.z - p.z);
        if (d < 2.2 && d < bd) { bd = d; best = { kind: 'lantern', idx, label: '석등 밝히기', promptPos: L.clone().add(V(0, 1.2, 0)) }; }
      });
    }
    for (const P of this.world.portals) {
      if (P.kind === 'next' && !(this.tower?.active && this.tower.cleared)) continue;
      const d = Math.hypot(P.x - p.x, P.z - p.z);
      if (d < 2.4 && d < bd) { bd = d; best = { kind: 'portal', portal: P, label: P.kind === 'next' ? `${this.tower.floor + 1}층으로` : P.label, promptPos: V(P.x, (P.promptY || 3), P.z) }; }
    }
    for (const dr of this.world.drums) {
      const d = Math.hypot(dr.pos.x - p.x, dr.pos.z - p.z);
      if (d < (dr.reach || 2.9) && d - 0.5 < bd) { bd = d - 0.5; best = { kind: 'drum', drum: dr, label: `${dr.label || '북'} 울리기`, promptPos: dr.pos.clone().add(V(0, dr.promptY || 4.0, 0)) }; }
    }
    return best;
  }

  interact() {
    const it = this.nearInteract;
    if (!it) return;
    if (it.kind === 'npc') {
      const n = it.npc;
      const Q = this.curQuest();
      if (Q && Q.type === 'talk' && Q.npc === n.kind) {
        this.ui.dialog(n.name, Q.lines(this), () => { if (n.kind === 'guard' && this.stage === 0) this.stage = 1; this.completeStep(); });
        return;
      }
      if (n.kind === 'guard' && !Q) { this.bountyTalk(n); return; }
      let lines = n.lines;
      if (n.kind === 'guard') lines = this.guardLines();
      else if (Q) lines = [...n.lines.slice(0, 2), `(지금 할 일: ${Q.title} — ${Q.desc.replace(/<[^>]+>/g, '')})`];
      this.ui.dialog(n.name, lines);
    } else if (it.kind === 'portal') {
      this.usePortal(it.portal);
    } else if (it.kind === 'lantern') {
      this.lightLantern(it.idx);
    } else if (it.kind === 'drum') {
      this.player.yaw = Math.atan2(it.drum.pos.x - this.player.pos.x, it.drum.pos.z - this.player.pos.z);
      this.player.startAttack({ moveLen: 0, mx: 0, mz: 0 });
      this.drumHit(it.drum, true);
    }
  }

  guardLines() {
    if (this.quest.step === 0) return [
      `어이, 거기 젊은 ${this.player.cfg.title}! 마침 잘 왔소.`,
      '해만 지면 이 궁궐 마당에 도깨비 놈들이 떼로 몰려와 난장판을 친다오.',
      '저기 저 큰 북이 보이시오? 북을 둥— 하고 울리면 숨어 있던 놈들이 죄다 튀어나올 게요.',
      '놈들을 모조리 혼쭐내 주시오! 마지막엔 도깨비 대왕이 나온다는 소문이 있으니 조심하고.',
      '(북 앞에서 E 키, 혹은 검으로 북을 베어 울리세요)',
    ];
    if (this.waveActive) return ['지금 한가하게 이야기할 때가 아니오! 도깨비들이 몰려오고 있소!'];
    const Q = this.curQuest();
    if (Q && Q.type !== 'talk') return [`${Q.title} 일은 어찌 되어 가오? ${Q.desc.replace(/<[^>]+>/g, '')}.`];
    if (this.round >= 1) return [
      `허허, 대왕까지 쫓아내다니! 벌써 ${this.kills}마리나 혼쭐을 냈구려.`,
      '북을 다시 울리면 더 사나운 놈들이 올 거요. 각오가 되었다면 언제든.',
      '참, 남문 밖으로 쭉 내려가면 대숲이오. 여우들이 들끓는다니 가 보시겠소?',
    ];
    return ['북은 저기 있소. 둥— 하고 울려 보시오!'];
  }

  updateQuest() {
    const ui = this.ui, M = this.map;
    if (this.tower?.active) {
      const T = this.tower;
      const left = this.enemies.filter((e) => !e.dead && !e.field).length + this.spawnQueue.length;
      ui.setQuest(`저승 시련탑 · ${T.floor}층`, T.cleared ? `돌파! 가운데 <b>문</b>으로 다음 층, 남쪽 <b>홍살문</b>으로 나가기<br>최고 기록 <b>${T.best}층</b>` : `남은 적 <b>${left}</b> · 최고 기록 <b>${T.best}층</b>`);
      return;
    }
    if (this.stage === 2) {
      const left = this.enemies.filter((e) => !e.dead && !e.field).length + this.spawnQueue.length;
      ui.setQuest(`${M.night[0]} · 제 ${this.wave} 파`, `남은 ${M.foe} <b>${left}</b>`);
      return;
    }
    const Q = this.curQuest();
    const B = this.quest.bounty;
    if (Q) {
      ui.setQuest(`${this.quest.step + 1}. ${Q.title}`, Q.desc + this.progText(Q, this.quest.prog));
    } else if (B) {
      const done = this.needMet(BOUNTIES[B.i].need, B.prog);
      ui.setQuest(BOUNTIES[B.i].title, done ? '<b>수문장</b>에게 돌아가 보상을 받자' : this.progText({ type: 'kill', need: BOUNTIES[B.i].need }, B.prog));
    } else {
      ui.setQuest('모든 지역 평정', '<b>수문장</b>에게 현상수배를 받거나, 북·방울·범종을 다시 울려 <b>' + (this.round + 1) + '회차</b>에 도전하자');
    }
  }

  // ---------- 자동 이동 · 자동 사냥 ----------
  toggleAutoMove() {
    if (this.autoMove) { this.stopAutoMove('자동 이동을 멈췄어요'); return; }
    this.startAutoMove();
  }

  startAutoMove() {
    if (this.waveActive) { this.ui.toast('싸우는 중에는 자동 이동을 할 수 없어요', 2); return; }
    const T = this.questTargets();
    const p = this.player.pos;
    if (!T.length) { this.ui.toast('지금은 갈 곳이 없어요', 2); return; }
    let best = null, bd = Infinity;
    for (const t of T) {
      // 사냥 지역 안에 이미 있으면 바로 자동 사냥
      if (t.area && this.world.regionAt(p.x, p.z).id === t.area) { this.setAutoHunt(true); return; }
      const d = Math.hypot(t.pos.x - p.x, t.pos.z - p.z);
      if (d < bd) { bd = d; best = t; }
    }
    this.autoMove = { pos: V(best.pos.x, 0, best.pos.z), area: best.area, stuck: 0, last: p.clone() };
    this.world.updateFlow(best.pos.x, best.pos.z, 0, 2, 4000);
    if (bd > 3 && !this.world.navDir(p, 0, 2)) { this.autoMove = null; this.ui.toast('길이 막혀 있어요 (닫힌 문이 있나 봐요)', 2.4); return; }
    document.getElementById('quest').classList.add('moving');
    this.ui.toast(`자동 이동: ${this.curQuest()?.title || '현상수배'}`, 1.8);
  }

  stopAutoMove(msg) {
    this.autoMove = null;
    document.getElementById('quest').classList.remove('moving');
    if (msg) this.ui.toast(msg, 1.6);
  }

  setAutoHunt(on) {
    this.autoHunt = on;
    document.getElementById('hunt-btn').classList.toggle('on', on);
    this.ui.toast(on ? '자동 사냥 켜짐 — 가까운 적을 찾아 싸워요 (H로 끄기)' : '자동 사냥 꺼짐', 2);
  }

  // 손으로 움직이면 자동 이동은 멈추고, 자동 사냥은 손을 놓을 때까지 잠시 쉼
  autoControl(inp, dt) {
    if (inp.moveLen > 0.1) { if (this.autoMove) this.stopAutoMove('자동 이동을 멈췄어요'); return inp; }
    if (this.ui.inDialog || this.player.dead) return inp;
    if (this.autoMove) return this.autoMoveStep(inp, dt);
    if (this.autoHunt) return this.autoHuntStep(inp, dt);
    return inp;
  }

  // 길찾기 흐름장을 따라 한 걸음 (가까우면 곧장)
  steerTo(inp, tx, tz, slot = 2, maxD = 4000) {
    const p = this.player.pos;
    const dx = tx - p.x, dz = tz - p.z, d = Math.hypot(dx, dz) || 1;
    let mx = dx / d, mz = dz / d;
    if (!(d < 7 && this.world.clearLine(p.x, p.z, tx, tz, 0.4))) {
      this.world.updateFlow(tx, tz, 0, slot, maxD);
      const nd = this.world.navDir(p, 0, slot);
      if (nd) { mx = nd.x; mz = nd.z; }
    }
    inp.mx = mx; inp.mz = mz; inp.moveLen = 1; inp.mouseRecent = false; inp.mouseWorld = null;
    return inp;
  }

  autoMoveStep(inp, dt) {
    const A = this.autoMove, p = this.player;
    const d = Math.hypot(A.pos.x - p.pos.x, A.pos.z - p.pos.z);
    // 자동 사냥 중이면 덤벼드는 적부터 처리
    if (this.autoHunt && this.nearestEnemy(6, true)) return this.autoHuntStep(inp, dt);
    if (d < (A.area ? 3.5 : 1.9)) {
      this.stopAutoMove();
      if (A.area) { if (!this.autoHunt) this.setAutoHunt(true); return inp; }
      // 도착: 퀘스트 대상(사람·석등·북)과 바로 상호작용 (옆의 다른 물건 말고)
      const Q = this.curQuest();
      const pp = p.pos;
      let it = null;
      if (!Q) { const n = this.npcs.find((x) => x.kind === 'guard'); it = { kind: 'npc', npc: n }; }
      else if (Q.type === 'talk') it = { kind: 'npc', npc: this.npcs.find((x) => x.kind === Q.npc) };
      else if (Q.type === 'wave') it = { kind: 'drum', drum: this.world.drums.find((x) => x.region === Q.region) };
      else if (Q.type === 'light') {
        let bi = -1, bd2 = 3;
        this.world.lanterns.forEach((L, i) => { const k = Math.hypot(L.x - pp.x, L.z - pp.z); if (L.region === (Q.region || 'temple') && !this.quest.lit.includes(i) && k < bd2) { bd2 = k; bi = i; } });
        if (bi >= 0) it = { kind: 'lantern', idx: bi };
      }
      if (it) { this.nearInteract = it; this.interact(); }
      // 석등은 여러 개라 남은 것이 있으면 계속
      if (Q && Q.type === 'light' && this.curQuest() === Q) this.after(0.4, () => this.startAutoMove());
      return inp;
    }
    // 오래 제자리면 포기
    A.stuck = Math.hypot(p.pos.x - A.last.x, p.pos.z - A.last.z) < dt * 0.6 ? A.stuck + dt : 0;
    A.last.copy(p.pos);
    if (A.stuck > 2.5) { this.stopAutoMove('길을 찾지 못했어요'); return inp; }
    return this.steerTo(inp, A.pos.x, A.pos.z);
  }

  nearestEnemy(R, aggroOnly = false) {
    const p = this.player.pos;
    let best = null, bd = R;
    for (const e of this.enemies) {
      if (e.dead || e.spawning || (aggroOnly && e.field && !e.aggro)) continue;
      const d = Math.hypot(e.pos.x - p.x, e.pos.z - p.z);
      if (d < bd && Math.abs(e.pos.y - p.y) < 1.6) { bd = d; best = e; }
    }
    return best;
  }

  // 자동 사냥: 가까운 적에게 다가가 공격, 쓸 수 있는 스킬은 바로, 적이 없으면 떨어진 장비 줍기
  autoHuntStep(inp, dt) {
    const p = this.player;
    const range = { sword: 1.6, mage: 6.5, elf: 7.5 }[p.cls];
    const t = this.validTarget(this.target) && Math.hypot(this.target.pos.x - p.pos.x, this.target.pos.z - p.pos.z) < 24 ? this.target : this.nearestEnemy(24);
    if (!t) {
      let dr = null, dd = 14;
      for (const d of this.drops) { const k = Math.hypot(d.g.position.x - p.pos.x, d.g.position.z - p.pos.z); if (k < dd) { dd = k; dr = d; } }
      if (dr && dd > 1.2) return this.steerTo(inp, dr.g.position.x, dr.g.position.z, 2, 60);
      return inp;
    }
    this.target = t;
    const d = Math.hypot(t.pos.x - p.pos.x, t.pos.z - p.pos.z);
    if (d > range) return this.steerTo(inp, t.pos.x, t.pos.z, 2, 80);
    // 사거리 안: 바라보고 공격
    p.yaw = Math.atan2(t.pos.x - p.pos.x, t.pos.z - p.pos.z);
    const crowd = this.enemiesIn(p.pos, 5).length;
    const lv = p.level;
    if (p.ult && p.ultCd <= 0 && (crowd >= 3 || t.isBoss)) p.startUlt(inp);
    else if (p.skillCd <= 0) p.startSkill(inp);
    else if (lv >= SKILL_LEVEL[2] && (p.cd2 || 0) <= 0 && (crowd >= 2 || t.isBoss)) p.startExtraSkill(inp, 2);
    else if (lv >= SKILL_LEVEL[3] && (p.cd3 || 0) <= 0 && (crowd >= 3 || t.isBoss)) p.startExtraSkill(inp, 3);
    else p.startAttack(inp);
    return inp;
  }

  // ---------- 퀘스트 ----------
  curQuest() { return QUESTS[this.quest.step] || null; }

  needMet(need, prog) { return Object.entries(need).every(([t, n]) => (prog[t] || 0) >= n); }

  progText(Q, prog) {
    if (Q.type === 'kill') return '<br>' + Object.entries(Q.need).map(([t, n]) => `${KILL_NAME[t]} <b>${Math.min(n, prog[t] || 0)}</b>/${n}`).join(' · ');
    if (Q.type === 'collect') return `<br>${Q.item} <b>${prog.n || 0}</b>/${Q.n}`;
    if (Q.type === 'light') return `<br>석등 <b>${this.litCount(Q)}</b>/${Q.n}`;
    return '';
  }

  // 대사 줄 앞의 "이름: "을 화자로
  sayLines(lines) {
    const m = lines[0].match(/^([^:]{1,8}):\s*/);
    const who = m ? { 분이: '약초꾼 분이', 청허: '떠돌이 도사 청허' }[m[1]] || m[1] : '';
    this.ui.dialog(who, lines.map((l) => l.replace(/^[^:]{1,8}:\s*/, '')));
  }

  startStep() {
    this.quest.prog = {};
    this.updateGates();
    const Q = this.curQuest();
    this.updateQuest();
    if (!Q) return;
    this.ui.banner('새 임무', Q.title, 2.2, '');
    this.audio.play('wave');
    if (Q.startLines && this.state === 'play') this.after(0.6, () => { if (!this.ui.inDialog) this.sayLines(Q.startLines); });
    this.save(false);
  }

  completeStep() {
    const Q = this.curQuest();
    if (!Q) return;
    this.quest.step++;
    this.giveReward(Q.reward);
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
    };
    QUESTS.forEach((q, i) => {
      if (!q.gateAfter) return;
      const id = q.gateAfter, st = i + 1;
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
        this.ui.banner('현상수배 완료', BOUNTIES[B.i].title, 2.2, 'win-banner');
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
    const T = this.state === 'play' ? this.questTargets() : [];
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

  // ---------- 보스 연출 · 단계 ----------
  // 등장 연출: 화면 위아래 검은 띠, 카메라가 보스를 비추고 이름이 크게 뜸. 다른 적·투사체는 멈춤
  bossIntro(e) {
    if (this.cine) return;
    this.seenBoss = this.seenBoss || {};
    const first = !this.seenBoss[e.type];
    this.seenBoss[e.type] = true;
    const dur = first ? 2.8 : 1.7;
    this.cine = { e, t: 0, dur };
    e.introRoar = true;
    for (const q of this.spawnQueue) q.at += dur;
    if (this.autoMove) this.stopAutoMove();
    const el = document.getElementById('cine');
    el.querySelector('.cine-sub').textContent = BOSS_EPITHET[e.type] || '';
    el.querySelector('.cine-name').textContent = e.T.name;
    el.className = 'show' + (first ? ' first' : '');
    document.getElementById('app').classList.add('cine-on');
    this.audio.play('gong');
  }

  updateCine(dt) {
    const C = this.cine;
    C.t += dt;
    this.player.invuln = Math.max(this.player.invuln, 0.4);
    if (C.t >= C.dur || C.e.dead) {
      this.cine = null;
      document.getElementById('cine').className = '';
      document.getElementById('app').classList.remove('cine-on');
    }
  }

  // 단계 전환: 포효하며 무적, 플레이어를 밀쳐내고 새 기술을 꺼냄
  bossPhase(e, n) {
    e.clearTele();
    e.state = 'roar'; e.st = 0; e.jumpY = 0; e.root.visible = true; e.root.scale.setScalar(1);
    const p = this.player;
    const at = V(e.pos.x, e.y, e.pos.z);
    this.audio.play(e.T.pal.fire[0] === '#9ff0ff' ? 'laugh' : e.T.boss === 'gumiho' ? 'howl' : 'wail');
    this.audio.play('gong');
    this.shake(0.9);
    this.ui.flash(n === 3 ? '#ff3a3a' : '#ffffff', 0.5);
    this.hitstop = Math.max(this.hitstop, 0.15);
    for (let r = 0; r < 3; r++) this.fx.ring(at, 3 + r * 2.2, n === 3 ? '#ff6a5a' : e.T.pal.fire[0], 0.4 + r * 0.15);
    const dx = p.pos.x - at.x, dz = p.pos.z - at.z, d = Math.hypot(dx, dz) || 1;
    if (d < 7) p.vel.add(V((dx / d) * 14, 0, (dz / d) * 14));
    const line = (BOSS_PHASE_LINE[e.type] || [])[n - 2];
    this.ui.banner(`${n}단계`, line || '', 2.2, 'boss-banner');
    this.ui.setBoss(e, true);
    // 단계마다 붙는 것들
    if (e.type === 'gumiho' && n === 2) {
      for (const s of [-1, 1]) {
        const x = e.pos.x + s * 3.5, z = e.pos.z;
        const pos = this.world.randomWalkable(x, z, 0, 2) || V(e.pos.x, e.y, e.pos.z);
        this.enemies.push(new Enemy(this, 'foxclone', pos, e.lvl));
      }
      this.ui.toast('구미호가 분신을 만들었다! 분신은 금방 쓰러진다', 2.4);
    }
    if (e.type === 'yeomra' && n === 2) for (let i = 0; i < 2; i++) this.spawnQueue.push({ type: i ? 'ghost' : 'jiangshi', elite: true, at: this.time + 1 + i * 0.4 });
    if (e.type === 'reaper' && n === 3) this.ui.toast('사방이 어두워진다… 저승사자의 영역이다', 2.4);
  }

  // 화면 어둠 (저승사자 3단계) / 붉은 테 (염라대왕 3단계): 플레이어 주변만 밝게
  updateDarkness() {
    const el = this.darkEl || (this.darkEl = document.getElementById('darkness'));
    let mode = null;
    for (const e of this.enemies) if (!e.dead && e.phase === 3) { if (e.type === 'reaper') mode = 'dark'; else if (e.type === 'yeomra' && !mode) mode = 'red'; }
    if (!mode || this.state === 'title') { if (el.className) el.className = ''; return; }
    const sp = this.pixel.project(V(this.player.pos.x, this.player.y + 0.8, this.player.pos.z));
    const c = mode === 'dark' ? 'rgba(4, 2, 10, 0.88)' : 'rgba(80, 0, 10, 0.55)';
    el.className = 'on';
    el.style.background = `radial-gradient(circle at ${sp.x.toFixed(0)}px ${sp.y.toFixed(0)}px, transparent ${mode === 'dark' ? 150 : 260}px, ${c} ${mode === 'dark' ? 330 : 560}px)`;
  }

  // 위험 지대: 예고 원을 보여 준 뒤 터짐 (여러 보스가 함께 씀)
  hazards(spots, { r = 1.4, delay = 1.0, color = '#ff6a2a', dmg = 20, step = 0.08, onHit, boom } = {}) {
    const p = this.player;
    spots.forEach((at, i) => {
      this.fx.circle(at, r, color, delay + i * step, 3);
      this.after(delay + i * step, () => {
        boom ? boom(at) : (this.fx.spark(at.x, at.y + 0.3, at.z, 14, color, 6), this.fx.ring(at, r, color, 0.3));
        this.audio.play('impact');
        if (!p.dead && Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < r + p.radius && p.damage(dmg, at) && onHit) onHit();
      });
    });
  }

  aroundPlayer(n, rMin, rMax, includeSelf = true) {
    const p = this.player, out = includeSelf ? [V(p.pos.x, p.y, p.pos.z)] : [];
    while (out.length < n) {
      const a = Math.random() * Math.PI * 2, d = rand(rMin, rMax);
      const x = p.pos.x + Math.cos(a) * d, z = p.pos.z + Math.sin(a) * d;
      out.push(V(x, this.world.heightAt(x, z), z));
    }
    return out;
  }

  // 두억시니: "금 나와라 뚝딱!" 금덩이가 쏟아져 터짐
  goldRain(w) {
    this.hazards(this.aroundPlayer(w.phase === 3 ? 9 : 6, 1.5, 5), {
      r: 1.5, delay: 1.0, color: '#ffd040', dmg: Math.round(w.dmg * 0.7),
      boom: (at) => { this.fx.coins(at.x, at.y + 0.5, at.z, 10); this.fx.colorFire(at.x, at.y + 0.2, at.z, 20, 0.6, '#fff0a0', '#ffa000'); this.fx.ring(at, 1.6, '#ffe080', 0.3); },
    });
  }

  // 사방으로 퍼지는 구슬 고리
  orbRing(w, n, rot = 0) {
    for (let i = 0; i < n; i++) this.spawnOrb(w, rot + (i / n) * Math.PI * 2);
  }

  // 이무기 2단계: 주위에서 물기둥이 솟음 (맞으면 느려짐)
  geysers(w) {
    const p = this.player;
    this.hazards(this.aroundPlayer(5, 2, 6), {
      r: 1.3, delay: 1.1, color: '#2affd0', dmg: Math.round(w.dmg * 0.6), step: 0.12, onHit: () => p.slowFor(1.4, '물기둥에 휩쓸렸다!'),
      boom: (at) => { for (let k = 0; k < 30; k++) this.fx.add.emit({ x: at.x + rand(-0.5, 0.5), y: at.y + 0.2, z: at.z + rand(-0.5, 0.5), vx: rand(-0.6, 0.6), vy: rand(6, 11), vz: rand(-0.6, 0.6), g: 14, life: 0.8, size: rand(3, 5), endSize: 1, color: '#e8fff8', color2: '#2a9aaa' }); },
    });
  }

  // 저승사자 2단계: 명부 낙인이 플레이어를 쫓아 네 번 찍힘
  markChase(w) {
    const p = this.player;
    for (let i = 0; i < 4; i++) this.after(0.3 + i * 0.45, () => {
      if (w.dead) return;
      this.hazards([V(p.pos.x, p.y, p.pos.z)], { r: 1.6, delay: 0.75, color: '#c84aff', dmg: Math.round(w.dmg * 0.6),
        boom: (at) => { this.fx.cross(V(at.x, at.y + 1, at.z), '#c890ff', 3, 0.35); this.fx.colorFire(at.x, at.y + 0.2, at.z, 18, 0.5, '#e0c8ff', '#4a0a8a'); } });
    });
  }

  // 불타는 땅 (불가사리 2단계 돌진 자국): 밟으면 불이 붙음
  addBurnZone(x, z, r, t) {
    this.burnZones = this.burnZones || [];
    if (this.burnZones.length > 40) this.burnZones.shift();
    this.burnZones.push({ x, z, r, t });
    this.fx.scorch(V(x, this.world.heightAt(x, z), z), r, '#2a0a04', t);
  }

  updateBurnZones(dt) {
    if (!this.burnZones?.length) return;
    const p = this.player;
    for (const b of this.burnZones) {
      b.t -= dt;
      if (Math.random() < dt * 6) this.fx.add.emit({ x: b.x + rand(-b.r, b.r) * 0.7, y: 0.1, z: b.z + rand(-b.r, b.r) * 0.7, vy: rand(1, 2), life: 0.5, size: 3, endSize: 1, color: '#ffc060', color2: '#ff2a00' });
      if (!p.dead && p.dashT <= 0 && Math.hypot(p.pos.x - b.x, p.pos.z - b.z) < b.r) p.burnFor(1.5);
    }
    this.burnZones = this.burnZones.filter((b) => b.t > 0);
  }

  // 완벽한 회피: 시간이 느려지고, 쿨타임이 줄고, 다음 한 방이 반격(확정 치명타)
  perfectDodge(from) {
    if (this.time - (this.lastDodge || -9) < 1.2) return;
    this.lastDodge = this.time;
    const p = this.player;
    this.slowmoT = 0.9;
    this.counterT = this.time + 2.5;
    p.dashCd = 0;
    p.skillCd = Math.max(0, p.skillCd - 1.5);
    p.cd2 = Math.max(0, (p.cd2 || 0) - 1.5);
    p.cd3 = Math.max(0, (p.cd3 || 0) - 1.5);
    p.ultCd = Math.max(0, (p.ultCd || 0) - 3);
    this.fx.ghost(p.rig, '#9ff0ff', 0.5);
    this.fx.ring(V(p.pos.x, p.y, p.pos.z), 2.4, '#bff4ff', 0.4);
    this.fx.number(p.pos.clone().add(V(0, 2.2, 0)), '완벽한 회피!', 'alert');
    this.ui.flash('#8ad8ff', 0.3);
    this.audio.play('blink');
    this.audio.play('skillhit');
  }

  // ---------- 저승 시련탑 (엔드게임) ----------
  // 층마다 섞인 적 무리, 5층마다 지역 보스, 10층마다 염라대왕. 5층 단위로 이어서 도전
  towerUnlocked() { return !!this.cleared.canyon; }

  usePortal(P) {
    if (P.kind === 'enter') {
      if (!this.towerUnlocked()) { this.ui.toast('저승 문이 굳게 닫혀 있다 — 불가사리를 물리치면 열린다', 3); this.audio.play('denied'); return; }
      if (this.waveActive) { this.ui.toast('싸우는 중에는 들어갈 수 없어요', 2); return; }
      this.enterTower();
    } else if (P.kind === 'exit') this.leaveTower();
    else if (P.kind === 'next' && this.tower?.active && this.tower.cleared) this.startTowerFloor(this.tower.floor + 1);
  }

  enterTower() {
    const best = this.towerBest || 0;
    const start = Math.floor(best / 5) * 5; // 5층 단위 이어하기
    const P = this.world.portals.find((x) => x.kind === 'enter');
    this.towerReturn = V(P.x, 0, P.z - 1.6);
    this.tower = { active: true, floor: start, best, cleared: true };
    this.teleport(0, 270);
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
      const bosses = ['boss', 'gumiho', 'reaper', 'imugi', 'bulgasari'];
      const b = bosses[(n / 5 - 1) % bosses.length];
      out.push({ type: b });
      const adds = { boss: ['red', 'blue'], gumiho: ['fox', 'foxfire'], reaper: ['ghost', 'jiangshi'], imugi: ['waterghost', 'toad'], bulgasari: ['firedok', 'stonegolem'] }[b];
      for (let i = 0; i < 3; i++) out.push({ type: adds[i % 2] });
      return out;
    }
    const tiers = [['blue', 'red', 'wisp'], ['fox', 'foxfire'], ['jiangshi', 'ghost'], ['waterghost', 'toad'], ['firedok', 'stonegolem']];
    const avail = tiers.slice(0, Math.min(tiers.length, 1 + Math.floor(n / 3))).flat();
    const count = Math.min(14, 5 + Math.floor(n * 0.5));
    const elites = n >= 3 ? Math.min(4, Math.floor(n / 4) + 1) : 0;
    for (let i = 0; i < count; i++) out.push({ type: avail[Math.floor(Math.random() * avail.length)], elite: i < elites });
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
    this.ui.banner(`${n}층`, boss ? `${{ boss: '도깨비 대왕', gumiho: '천년 구미호', reaper: '저승사자', imugi: '천년 이무기', bulgasari: '불가사리', yeomra: '염라대왕' }[list[0].type]} 출현!` : `적 ${list.length}마리${list.some((q) => q.elite) ? ' · 정예 포함' : ''}`, 2.4, boss ? 'boss-banner' : '');
    this.audio.play(boss ? 'gong' : 'wave');
    let delay = 1.0;
    for (const q of list) {
      this.spawnQueue.push({ ...q, at: this.time + delay });
      delay += BOSS_TYPES.has(q.type) ? 1.2 : rand(0.25, 0.5);
    }
    this.updateQuest();
  }

  updateTower() {
    const T = this.tower;
    if (!T?.active || T.cleared || this.player.dead) return;
    if (this.spawnQueue.length || this.enemies.some((e) => !e.dead)) return;
    T.cleared = true;
    const n = T.floor;
    const first = n > T.best;
    T.best = Math.max(T.best, n);
    this.towerBest = Math.max(this.towerBest || 0, n);
    const exp = Math.round((60 + n * 30) * (first ? 1.5 : 1));
    this.player.addExp(exp);
    this.fx.number(this.player.pos.clone().add(V(0, 2.4, 0)), `+${exp} EXP`, 'exp');
    // 보상: 층이 높을수록 좋은 장비, 처음 돌파하면 하나 더. 5층마다 세트 조각
    const lv = 1 + n + Math.floor((this.player.level - 1) / 3);
    const center = V(0, 0, 262);
    const k = 1 + (first ? 1 : 0) + (n % 5 === 0 ? 1 : 0);
    for (let i = 0; i < k; i++) this.spawnDrop(V(center.x + rand(-1.5, 1.5), 0, center.z + 2 + rand(-1, 1)), makeGear(lv, rollGearTier(0.3 + n * 0.03, n / 5)));
    if (n % 5 === 0) {
      const sets = Object.keys(SETS);
      this.spawnDrop(V(center.x, 0, center.z + 3), makeSetPiece(sets[Math.floor(Math.random() * sets.length)], lv));
    }
    const next = this.world.portals.find((x) => x.kind === 'next');
    if (next.mesh) next.mesh.visible = true;
    this.audio.play('victory');
    this.ui.banner(`${n}층 돌파!`, first ? `최고 기록 갱신 · 경험치 +${exp}` : `경험치 +${exp}`, 3, 'win-banner');
    this.updateQuest();
    this.save(false);
  }

  leaveTower(died = false) {
    const T = this.tower;
    if (!T) return;
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
    this.ui.banner('저승 시련탑', died ? `${T.floor}층에서 쓰러졌다… 최고 기록 ${T.best}층` : `최고 기록 ${T.best}층`, 3, '');
    this.tower = null;
    this.updateQuest();
    this.save(false);
  }

  // 염라대왕의 판결: 플레이어 자리에 붉은 벼락이 연달아 떨어짐 (2단계부터 다섯 번)
  verdict(w, n = 3) {
    const p = this.player;
    for (let i = 0; i < n; i++) this.after(i * (n > 3 ? 0.42 : 0.55), () => {
      if (w.dead) return;
      const at = V(p.pos.x + p.vel.x * 0.25, p.y, p.pos.z + p.vel.z * 0.25);
      this.fx.circle(at, 2.2, '#ff3a4a', 0.9, 3);
      this.after(0.9, () => {
        this.fx.bolt(at, 1.6);
        this.fx.ring(at, 2.4, '#ff8a9a', 0.35);
        this.audio.play('thunder');
        this.shake(0.4);
        if (Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < 2.2 + p.radius) p.damage(Math.round(w.dmg * 0.8), at);
      });
    });
  }

  // ---------- 전투 ----------
  drumHit(drum, byHand = false) {
    drum.shake = 1;
    this.audio.play(drum.sound || 'drum');
    this.shake(0.35);
    this.alarm = 3;
    this.fx.ring(V(drum.pos.x, 0, drum.pos.z), 5, '#fff2c0', 0.6);
    this.fx.spark(drum.pos.x, 2.2, drum.pos.z, 14, '#fff2c0', 5);
    const Q = this.curQuest();
    const reg = drum.region || 'palace';
    if (!this.waveActive && this.stage !== 2 && !this.cleared[reg] && !(Q && Q.type === 'wave' && Q.region === reg)) {
      if (this.time - (this.drumDenyT || -9) > 3) { this.drumDenyT = this.time; this.ui.toast(Q ? `아직 울릴 때가 아니다 — ${Q.title}: ${Q.desc.replace(/<[^>]+>/g, '')}` : '아직 울릴 때가 아니다', 3); }
      return;
    }
    // 이미 평정한 곳을 다시 울리는 건 E 키로만 (싸우다 실수로 회차가 오르지 않게)
    if (!byHand && this.cleared[reg] && !(Q && Q.type === 'wave' && Q.region === reg)) return;
    if (!this.waveActive && this.stage !== 2) {
      // 그 북(방울·범종)이 있는 지역의 싸움을 시작
      if (drum.region && drum.region !== this.mapId) { this.mapId = drum.region; this.map = MAPS[drum.region]; }
      this.startNight();
    }
  }

  startNight() {
    this.waveActive = true;
    this.stage = 2;
    this.wave = 0;
    this.nightTarget = 1;
    this.audio.mood = 'battle';
    const [t1, t2] = this.map.night;
    this.ui.banner(t1, this.round > 0 ? `${this.round + 1}회차 — 더 사나운 놈들이 온다` : t2, 3, 'night-banner');
    this.after(3.2, () => this.nextWave());
  }

  waveDef(n) {
    const list = [];
    for (const [t, c] of this.map.waves(n, this.round)) for (let i = 0; i < c; i++) list.push(t);
    return list;
  }

  nextWave() {
    if (this.state === 'dead') return;
    if (this.wave > 0) this.save();
    this.wave++;
    const list = this.waveDef(this.wave);
    const boss = this.wave === 3;
    const bossName = BOSS_NAME[this.mapId];
    this.ui.banner(`제${this.wave}파`, boss ? `${bossName} 출현!` : `${this.map.foe} ${list.length}마리`, 2.4, boss ? 'boss-banner' : '');
    this.audio.play(boss ? 'drum' : 'wave');
    let delay = 0.6;
    for (const t of list) {
      this.spawnQueue.push({ type: t, at: this.time + delay });
      delay += BOSS_TYPES.has(t) ? 1.2 : rand(0.3, 0.6);
    }
    this.updateQuest();
  }

  spawnEnemy(type, opt = {}) {
    const p = this.player.pos;
    const isBoss = BOSS_TYPES.has(type);
    let pos = isBoss ? this.world.randomWalkable(p.x, p.z, 6, 9) : this.world.randomWalkable(p.x, p.z, 5, 10);
    if (!pos) pos = this.world.randomWalkable(p.x, p.z, 2, 14) || V(this.world.spawn.x, 0, this.world.spawn.z - 6);
    // 시련탑은 층수가 곧 강함 (회차와 무관)
    const lv = this.tower?.active ? 1 + this.tower.floor + Math.floor((this.player.level - 1) / 3) : 1 + this.round + this.map.lvl + Math.floor((this.player.level - 1) / 3);
    const e = new Enemy(this, type, pos, lv, { elite: opt.elite });
    if (isBoss) { e.name = this.tower?.active ? `${e.T.name} · ${this.tower.floor}층` : this.round > 0 ? `${e.T.name} +${this.round}` : e.T.name; this.ui.setBoss(e); this.shake(0.5); this.bossIntro(e); }
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
      const ey = e.isWisp ? e.y + 1.3 : e.y;
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
      if (pr.owner !== 'enemy' || pr.dead || pr.kind !== 'orb') continue;
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
    const perks = pl.perks;
    const base = dmg;
    let mul = pl.atkMul || 1;
    if (perks?.has('rage') && pl.hp < pl.maxHp * 0.4) mul *= 1.35;
    if (perks?.has('verdict') && (e.isBoss || e.elite)) mul *= 1.3;
    const exec = perks?.has('execute') && e.hp < e.maxHp * 0.35;
    if (exec) mul *= 1.6;
    // 장비 옵션: 치명타 확률·치명타 피해
    const G = pl.gear || {};
    // 완벽한 회피 뒤 반격: 다음 한 방은 반드시 치명타 + 40%
    if (this.counterT > this.time) { this.counterT = 0; if (!crit) { crit = true; mul *= 1.8; } mul *= 1.4; this.fx.number(e.center().clone().add(V(0, 1.2, 0)), '반격!', 'alert'); }
    if (!crit && G.crit && Math.random() < G.crit) { crit = true; mul *= 1.8; }
    if (crit && G.critDmg) mul *= 1 + G.critDmg;
    dmg = Math.max(1, Math.round(dmg * mul));
    // 돌장승 같은 단단한 적: 얼어 있지 않으면 피해가 줄고 쇳소리
    if (e.T.armor && !(e.frozenT > 0)) {
      dmg = Math.max(1, Math.round(dmg * (1 - e.T.armor)));
      if (this.time - (e.clankT || 0) > 0.25) { e.clankT = this.time; this.audio.play('block'); const cc = e.center(); this.fx.spark(cc.x, cc.y, cc.z, 8, '#ffe0a0', 5); }
    }
    const dir = V(e.pos.x - pl.pos.x, 0, e.pos.z - pl.pos.z).normalize();
    if (!e.hit(dmg, dir, knock, stun)) return;
    const c = e.center().clone();
    if (perks?.size) this.weaponPerks(e, c, base, dmg, exec);
    // 장비 옵션: 흡혈
    if (G.ls && !pl.dead && pl.hp < pl.maxHp) {
      pl.lsAcc = (pl.lsAcc || 0) + dmg * G.ls;
      if (pl.lsAcc >= 1) { const h = Math.floor(pl.lsAcc); pl.lsAcc -= h; pl.hp = Math.min(pl.maxHp, pl.hp + h); }
    }
    this.fx.spark(c.x, c.y, c.z, crit ? 18 : 10, crit ? '#fff07a' : '#ffffff', crit ? 8 : 6);
    this.fx.number(c.clone().add(V(0, 0.5 * (e.isBoss ? 2 : 1), 0)), dmg, crit ? 'crit' : 'normal');
    this.audio.play(crit ? 'crit' : 'hit');
    this.hitstop = Math.max(this.hitstop, crit ? 0.085 : 0.05);
    this.hitCombo = this.time - this.lastHitTime < 2 ? this.hitCombo + 1 : 1;
    this.lastHitTime = this.time;
    if (this.hitCombo > this.bestCombo) this.bestCombo = this.hitCombo;
    pl.lastCombat = this.time;
    // 보스 체력에 따른 졸개 소환
    if (e.isBoss && !e.dead) {
      const k = e.hp / e.maxHp;
      if ((k < 0.6 && e.summoned === 0) || (k < 0.3 && e.summoned === 1)) {
        e.summoned++;
        this.audio.play(e.T.boss === 'dokkaebi' ? 'laugh' : e.T.boss === 'gumiho' ? 'howl' : 'wail');
        this.ui.toast(this.map.summonLine, 2.4);
        const [s1, s2] = e.T.summon;
        for (let i = 0; i < 2 + this.round; i++) this.spawnQueue.push({ type: i === 0 ? s1 : s2, at: this.time + 0.3 + i * 0.3 });
      }
    }
  }

  // 검기: 발밑 충격파 + 칼끝 섬광 → 3겹 초승달 검기가 잔상·빛가루·바닥 서리를 남기며 날아감
  // 검객 K: 검기 / 삼연 검기 / 천열참 (단계가 오르면 줄기 수·불길·크기가 늘어남)
  skillSword1(pl) {
    const br = this.branch(pl, 1), r = this.rank(pl, 1), M = rankMul(r);
    if (br === 'a') {
      const n = r >= 5 ? 7 : r >= 3 ? 5 : 3, sp = n === 3 ? 0.34 : n === 5 ? 0.26 : 0.2;
      const gold = r >= 5 ? ['#ffa020', '#ffe8a0', '#ffffff'] : undefined;
      for (let i = 0; i < n; i++) this.spawnSwordWave(pl, { yawOff: (i - (n - 1) / 2) * sp, dmgMul: 0.72 * M, scale: 0.85, quiet: i !== (n - 1) / 2, color: gold });
    } else if (br === 'b') {
      for (const off of r >= 5 ? [-0.45, 0, 0.45] : [0]) this.spawnSwordWave(pl, { yawOff: off, scale: 1.75, dmgMul: 2.0 * M, speed: 11, life: 0.9, knock: 13, stun: 0.6, color: ['#ff7a2a', '#ffd08a', '#ffffff'], burn: r >= 3, quiet: off !== 0 });
      const feet = V(pl.pos.x, pl.y, pl.pos.z);
      this.fx.ring(feet, 4.2, '#ffb060', 0.5);
      this.fx.scorch(feet.clone().add(V(Math.sin(pl.yaw) * 1.5, 0, Math.cos(pl.yaw) * 1.5)), 1.4, '#2a1a10', 2);
      this.ui.flash('#ffa040', 0.3);
      this.shake(0.45);
    } else this.spawnSwordWave(pl);
  }

  // 큰 폭발 한 번 (각성 효과에서 씀)
  boomAt(at, R, dmg, color = '#ffffff') {
    this.fx.ring(at, R, color, 0.4);
    this.fx.ring(at, R * 0.5, '#ffffff', 0.25);
    this.fx.scorch(at, R * 0.6, '#1a1420', 2);
    this.fx.spark(at.x, at.y + 0.4, at.z, 26, color, 8);
    for (let i = 0; i < 30; i++) { const a = Math.random() * Math.PI * 2, sp = rand(2, 7); this.fx.add.emit({ x: at.x, y: at.y + 0.3, z: at.z, vx: Math.cos(a) * sp, vy: rand(1, 5), vz: Math.sin(a) * sp, g: 6, drag: 2, life: rand(0.3, 0.7), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: color }); }
    for (const e of this.enemiesIn(at, R)) { const crit = Math.random() < 0.2; this.damageEnemy(e, Math.round(dmg * (crit ? 1.8 : 1)), crit, 7, 0.4); }
    this.audio.play('crit');
    this.shake(0.45);
    this.hitstop = Math.max(this.hitstop, 0.06);
  }

  spawnSwordWave(pl, o = {}) {
    const yaw = pl.yaw + (o.yawOff || 0);
    const sc = o.scale || 1;
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const feet = V(pl.pos.x, pl.y, pl.pos.z);
    const pos = V(pl.pos.x, pl.y + 0.75, pl.pos.z).addScaledVector(dir, 0.6);
    const pr = { owner: 'player', kind: 'wave', pos, dir, yaw, speed: o.speed || 16, life: o.life || 0.6, dmg: Math.round(34 * (o.dmgMul || 1)), hitSet: new Set(), radius: 1.3 * sc, trailT: 0, scale: sc, knock: o.knock, stun: o.stun, cols: o.color, burn: o.burn, burnT: 0, mul: o.dmgMul || 1 };
    const follow = (a) => a.g.position.copy(pr.pos);
    const [c1, c2, c3] = o.color || ['#2f7dff', '#8fe4ff', '#ffffff'];
    const dur = pr.life;
    pr.vis = [
      this.fx.slash(pos, yaw, 0, { inner: 0.25, outer: 2.0, len: 2.4, dur, color: c1, static: true, move: follow, scale: sc }),
      this.fx.slash(pos, yaw, 0, { inner: 0.9, outer: 1.85, len: 2.2, dur, color: c2, static: true, move: follow, scale: sc }),
      this.fx.slash(pos, yaw, 0, { inner: 1.55, outer: 1.8, len: 2.0, dur, color: c3, static: true, move: follow, scale: sc }),
    ];
    this.projectiles.push(pr);
    if (o.quiet) return;
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
    // 천열참 Ⅲ: 갈라진 땅에 불길
    if (pr.burn) { pr.burnT -= dt; if (pr.burnT <= 0) { pr.burnT = 0.09; this.fires.push({ pos: V(pr.pos.x, this.world.heightAt(pr.pos.x, pr.pos.z), pr.pos.z), t: 0, dur: 2.6, tick: 0, mul: pr.mul * 0.6 }); } }
    pr.trailT -= dt;
    if (pr.trailT <= 0) {
      pr.trailT = 0.03;
      fx.slash(pr.pos.clone(), pr.yaw, 0, { inner: 0.6, outer: 1.95, len: 2.3, dur: 0.18, color: pr.cols ? pr.cols[0] : '#2a5cff', static: true, fadeAll: true, scale: pr.scale || 1 });
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
    const br = this.branch(pl, 1), r = this.rank(pl, 1), M = rankMul(r);
    if (pl.cls === 'mage') {
      if (br === 'a') this.castLightning(pl, { mul: M, storm: { dur: r >= 3 ? 6 : 4.2, tick: r >= 3 ? 0.38 : 0.55, hits: r >= 5 ? 2 : 1, R: r >= 5 ? 6 : 4.6 } });
      else if (br === 'b') this.castLightning(pl, { R: 3.9, mult: 1.9, mul: M, stun: 1.3, big: true, after: r >= 3, chain: r >= 5 });
      else this.castLightning(pl);
    } else if (pl.cls === 'elf') {
      if (br === 'a') {
        // 폭풍 연사: 여러 번 연달아
        const vol = r >= 5 ? 5 : r >= 3 ? 4 : 3, n = r >= 5 ? 9 : 7;
        for (let k = 0; k < vol; k++) this.after(k * 0.16, () => { if (!pl.dead) this.windArrows(pl, { n, spread: 0.11, dmg: 17 * M, quiet: k > 0 }); });
      } else if (br === 'b') this.bigArrow(pl, { n: r >= 3 ? 3 : 1, boom: r >= 5, mul: M });
      else this.windArrows(pl);
    }
  }

  // 요정 관통 극궁: 거대한 빛의 화살 한 대
  bigArrow(pl, o = {}) {
    const offs = o.n === 3 ? [-0.22, 0, 0.22] : [0];
    for (const off of offs) {
      this.spawnArrow(pl, pl.yaw + off, { dmg: Math.round(140 * (o.mul || 1)), pierce: true, glow: true, speed: 30, life: 0.95, big: true });
      const pr = this.projectiles[this.projectiles.length - 1];
      pr.boom = o.boom; pr.mul = o.mul || 1;
    }
    const feet = V(pl.pos.x, pl.y, pl.pos.z);
    const hp = this.handPos(pl);
    this.fx.circle(feet, 2.4, '#d8ffb0', 0.8, -3);
    for (let k = 0; k < 4; k++) this.after(k * 0.05, () => this.fx.ring(hp.clone().add(V(Math.sin(pl.yaw) * k * 0.9, 0, Math.cos(pl.yaw) * k * 0.9)), 1.0 + k * 0.5, k ? '#e8ffc8' : '#ffffff', 0.3));
    this.fx.spark(hp.x, hp.y, hp.z, 24, '#f0ffd8', 8);
    this.audio.play('bowskill');
    this.audio.play('thunder');
    this.ui.flash('#c8ff9a', 0.3);
    this.shake(0.45);
    this.hitstop = Math.max(this.hitstop, 0.06);
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

  spawnArrow(pl, yaw, { dmg = 16, pierce = false, glow = false, speed = 26, life = 0.55, big = false } = {}) {
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const pos = this.handPos(pl);
    const g = this.makeArrowMesh(glow);
    g.position.copy(pos);
    g.rotation.y = yaw;
    if (big) g.scale.set(3, 3, 2.6);
    this.scene.add(g);
    this.projectiles.push({ owner: 'player', kind: 'arrow', pos, dir, yaw, speed, life, dmg, mesh: g, radius: big ? 1.2 : 0.4, hitSet: new Set(), pierce, glow, big, knock: big ? 10 : pierce ? 5 : 3, stun: big ? 0.6 : pierce ? 0.3 : 0.18 });
  }

  makeArrowMesh(glow) {
    const g = new THREE.Group();
    const shaftM = new THREE.MeshBasicMaterial({ color: glow ? '#c8ff9a' : '#9a7a52' });
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.78), shaftM);
    const head = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 4), new THREE.MeshBasicMaterial({ color: glow ? '#ffffff' : '#d8dde4' }));
    head.rotation.x = Math.PI / 2;
    head.position.z = 0.44;
    const fl = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.14), new THREE.MeshBasicMaterial({ color: glow ? '#8aff6a' : '#f0ece0' }));
    fl.position.z = -0.32;
    g.add(shaft, head, fl);
    return g;
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
      if (pr.big) {
        for (let k = 0; k < 8; k++) fx.add.emit({ x: pr.pos.x + rand(-0.3, 0.3), y: pr.pos.y + rand(-0.3, 0.3), z: pr.pos.z + rand(-0.3, 0.3), vx: -pr.dir.x * 4 + rand(-1, 1), vy: rand(-0.5, 1), vz: -pr.dir.z * 4 + rand(-1, 1), life: rand(0.3, 0.6), size: rand(3, 5), endSize: 1, color: '#ffffff', color2: '#7aff5a' });
      } else if (pr.glow) {
        for (let k = 0; k < 2; k++) fx.add.emit({ x: pr.pos.x + rand(-0.08, 0.08), y: pr.pos.y + rand(-0.08, 0.08), z: pr.pos.z + rand(-0.08, 0.08), vx: -pr.dir.x * 3, vy: rand(0, 0.6), vz: -pr.dir.z * 3, life: rand(0.2, 0.4), size: rand(2, 3), endSize: 1, color: '#e8ffc8', color2: '#3aa83a' });
      } else if (Math.random() < 0.6) {
        fx.add.emit({ x: pr.pos.x, y: pr.pos.y, z: pr.pos.z, life: 0.12, size: 2, color: '#fff8e0', alpha: 0.6 });
      }
    }
    // 벽·높은 바닥에 부딪히면 끝
    const h = this.world.heightAt(pr.pos.x, pr.pos.z);
    if (h > pr.pos.y - 0.3) pr.life = 0;
  }

  // 앞쪽 가까운 적 (없으면 n걸음 앞 지점)
  aimPoint(pl, ahead = 5, range = 11) {
    if (this.validTarget(this.target)) { const t = this.target; return V(t.pos.x, this.world.heightAt(t.pos.x, t.pos.z), t.pos.z); }
    let target = null, bd = range;
    for (const e of this.enemies) {
      if (e.dead || e.spawning) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < bd && Math.abs(angleDiff(pl.yaw, Math.atan2(dx, dz))) < 1.0) { bd = d; target = e; }
    }
    const c = target ? V(target.pos.x, 0, target.pos.z) : V(pl.pos.x + Math.sin(pl.yaw) * ahead, 0, pl.pos.z + Math.cos(pl.yaw) * ahead);
    c.y = this.world.heightAt(c.x, c.z);
    return c;
  }

  // 원 안의 살아 있는 적
  enemiesIn(c, R) {
    return this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < R + e.radius);
  }

  // 도사 낙뢰: 팔괘 마법진이 펼쳐지고 빛이 모여듦 → 번개 다발이 연달아 내리꽂히며 전기 사슬이 적들을 잇고, 바닥에 그을음
  castLightning(pl, o = {}) {
    const c = this.aimPoint(pl);
    const R = o.R || 2.9;
    this.fx.circle(c, R * 1.15, '#b89aff', 1.3, 2.2);
    this.fx.circle(V(pl.pos.x, pl.y, pl.pos.z), 1.3, '#d8c8ff', 0.7, -3);
    const tele = this.fx.ring(c, R, '#b89aff', 1, 1);
    // 빛이 원 가장자리에서 가운데로 모여듦
    for (let i = 0; i < 46; i++) {
      const a = Math.random() * Math.PI * 2, r = R * rand(0.8, 1.1);
      this.fx.add.emit({ x: c.x + Math.cos(a) * r, y: c.y + rand(0.1, 1.6), z: c.z + Math.sin(a) * r, vx: -Math.cos(a) * r / 0.42, vy: rand(-0.5, 1), vz: -Math.sin(a) * r / 0.42, life: 0.42, size: rand(2, 3), color: '#e8e0ff', color2: '#6a4aff' });
    }
    this.audio.play('charge');
    this.shake(0.12);
    this.timers.push({ at: this.time + 0.42, fn: () => {
      this.fx.removeRing(tele);
      this.fx.bolt(c, o.big ? 3.2 : 1.7);
      if (o.big) { this.fx.bolt(V(c.x + 0.4, c.y, c.z - 0.3), 1.6); this.fx.ring(c, R * 1.7, '#ffffff', 0.6); this.ui.flash('#ffffff', 0.8); this.shake(1.0); }
      if (o.storm) this.storms.push({ c: c.clone(), R: o.storm.R, t: 0, dur: o.storm.dur, every: o.storm.tick, tick: 0.3, hits: o.storm.hits, mul: o.mul || 1 });
      this.audio.play('thunder');
      this.ui.flash('#e8e0ff', 0.6);
      this.shake(0.7);
      this.hitstop = Math.max(this.hitstop, 0.09);
      this.fx.ring(c, R * 1.3, '#d8c8ff', 0.45);
      this.fx.ring(c, R * 0.6, '#ffffff', 0.25);
      this.fx.scorch(c, R * 0.75, '#1c1230', 3);
      for (let i = 0; i < 60; i++) {
        const a = Math.random() * Math.PI * 2, s = rand(2, 9);
        this.fx.add.emit({ x: c.x, y: c.y + 0.3, z: c.z, vx: Math.cos(a) * s, vy: rand(1, 7), vz: Math.sin(a) * s, g: 10, drag: 2, life: rand(0.3, 0.8), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: '#7a5aff' });
      }
      // 남은 불티
      for (let i = 0; i < 30; i++) {
        const a = Math.random() * Math.PI * 2, r = rand(0.3, R);
        this.fx.add.emit({ x: c.x + Math.cos(a) * r, y: c.y + 0.06, z: c.z + Math.sin(a) * r, vy: rand(0, 0.4), life: rand(0.8, 1.6), size: 2, color: '#d8c8ff', alpha: 0.8, flicker: 0.7 });
      }
      // 피해 + 전기 사슬
      const hit = this.enemiesIn(c, R);
      let prev = V(c.x, c.y + 1.2, c.z);
      for (const e of hit) {
        const crit = Math.random() < 0.2;
        this.damageEnemy(e, Math.round(rand(44, 54) * (o.mult || 1) * (o.mul || 1) * (crit ? 1.8 : 1)), crit, o.big ? 6 : 3, o.stun || 0.7);
        const ec = e.center().clone();
        this.fx.arc(prev, ec, '#c8b0ff', 0.8);
        this.fx.spark(ec.x, ec.y, ec.z, 10, '#e8e0ff', 6);
        prev = ec;
      }
      // 천뢰 Ⅴ: 근처의 다른 적 둘에게도 하늘의 벼락
      if (o.chain) {
        const others = this.enemies.filter((e) => !e.dead && !e.spawning && !hit.includes(e) && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 12)
          .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z)).slice(0, 2);
        others.forEach((e, k) => this.after(0.25 + k * 0.2, () => {
          if (e.dead) return;
          const at = V(e.pos.x, e.y, e.pos.z);
          this.fx.bolt(at, 2.6);
          this.fx.ring(at, 3, '#ffffff', 0.4);
          this.audio.play('thunder');
          this.shake(0.6);
          for (const v of this.enemiesIn(at, 2.6)) this.damageEnemy(v, Math.round(rand(44, 54) * 1.5 * (o.mul || 1)), true, 5, 1.0);
        }));
      }
      // 뒤따르는 번개 세 줄기
      for (let k = 1; k <= 3; k++) {
        this.timers.push({ at: this.time + k * 0.07, fn: () => {
          const p = V(c.x + rand(-2, 2), c.y, c.z + rand(-2, 2));
          this.fx.bolt(p, o.after ? 1.3 : 0.9);
          this.fx.spark(p.x, p.y + 0.2, p.z, 8, '#e8e0ff', 5);
          this.shake(0.25);
          // 천뢰 Ⅲ: 뒤따르는 번개도 피해
          if (o.after) for (const e of this.enemiesIn(p, 1.6)) this.damageEnemy(e, Math.round(22 * (o.mul || 1)), false, 2, 0.3);
        } });
      }
    } });
  }

  // 요정 바람화살: 발밑 마법진 + 소용돌이 고리 → 빛나는 관통 화살 9발
  windArrows(pl, o = {}) {
    const n = o.n || 9, sp = o.spread || 0.13;
    for (let i = 0; i < n; i++) this.spawnArrow(pl, pl.yaw + (i - (n - 1) / 2) * sp, { dmg: o.dmg || 22, pierce: true, glow: true, speed: 24, life: 0.6 });
    this.audio.play('bowskill');
    if (o.quiet) { this.fx.ring(this.handPos(pl), 1.2, '#c8ffb0', 0.22); return; }
    const feet = V(pl.pos.x, pl.y, pl.pos.z);
    this.fx.circle(feet, 2.2, '#8aff7a', 0.7, 3);
    const hp = this.handPos(pl);
    for (let k = 0; k < 3; k++) {
      this.timers.push({ at: this.time + k * 0.05, fn: () => {
        const p = hp.clone().add(V(Math.sin(pl.yaw) * k * 0.6, 0, Math.cos(pl.yaw) * k * 0.6));
        this.fx.ring(p, 0.8 + k * 0.4, k ? '#c8ffb0' : '#ffffff', 0.25);
      } });
    }
    for (let i = 0; i < 36; i++) {
      const a = pl.yaw + rand(-0.8, 0.8);
      this.fx.norm.emit({ x: feet.x, y: feet.y + rand(0.3, 1.2), z: feet.z, vx: Math.sin(a) * rand(3, 9), vy: rand(0, 1.5), vz: Math.cos(a) * rand(3, 9), drag: 2, wob: 1.5, life: rand(0.5, 1.1), size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
    }
    // 바람이 휘감는 나선
    for (let i = 0; i < 30; i++) {
      const a = (i / 30) * Math.PI * 4, r = 0.3 + i * 0.03;
      this.fx.add.emit({ x: feet.x + Math.cos(a) * r, y: feet.y + i * 0.05, z: feet.z + Math.sin(a) * r, vx: -Math.sin(a) * 3, vy: 1, vz: Math.cos(a) * 3, life: 0.4, size: 2, color: '#e8ffd8', color2: '#3aa83a' });
    }
    this.ui.flash('#6aff7a', 0.18);
    this.shake(0.2);
  }

  // ================= 보스 무기 고유 기술 (U) =================
  castUlt(pl) {
    const U = ULTS[pl.ult];
    const feet = () => V(pl.pos.x, pl.y, pl.pos.z);
    this.ui.toast(`고유 기술 — ${U.name}!`, 1.2);
    this.audio.play('skill');
    if (pl.ult === 'thunder') {
      // 도깨비 천둥: 세 번 내려쳐 점점 넓어지는 벼락 충격파
      this.audio.play('charge');
      this.fx.circle(feet(), 6.6, '#9ad8ff', 1.4, 2.4);
      for (let i = 0; i < 3; i++) this.after(0.25 + i * 0.38, () => {
        if (pl.dead) return;
        const c = feet(), R = 3 + i * 1.7;
        this.audio.play('thunder');
        this.shake(0.5 + i * 0.25);
        this.ui.flash('#cfeaff', 0.35 + i * 0.15);
        this.hitstop = Math.max(this.hitstop, 0.07);
        this.fx.ring(c, R, '#bfe8ff', 0.45);
        this.fx.ring(c, R * 0.55, '#ffffff', 0.3);
        this.fx.scorch(c, R * 0.45, '#101830', 2.5);
        for (let k = 0; k < 3 + i * 2; k++) {
          const a = Math.random() * Math.PI * 2, r = rand(1, R);
          this.fx.bolt(V(c.x + Math.cos(a) * r, c.y, c.z + Math.sin(a) * r), 1 + i * 0.3);
        }
        for (let k = 0; k < 40; k++) {
          const a = Math.random() * Math.PI * 2, sp = rand(4, 10);
          this.fx.add.emit({ x: c.x, y: c.y + 0.3, z: c.z, vx: Math.cos(a) * sp, vy: rand(1, 5), vz: Math.sin(a) * sp, g: 10, drag: 2, life: rand(0.3, 0.7), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: '#3ac8ff' });
        }
        let prev = V(c.x, c.y + 1.4, c.z);
        for (const e of this.enemiesIn(c, R)) {
          const crit = Math.random() < 0.25;
          this.damageEnemy(e, Math.round(rand(52, 62) * (1 + i * 0.25) * (crit ? 1.8 : 1)), crit, 6, 1 + i * 0.3);
          const ec = e.center().clone();
          this.fx.arc(prev, ec, '#9ad8ff', 0.8);
          prev = ec;
        }
      });
    } else if (pl.ult === 'foxtail') {
      // 아홉 꼬리 여우불: 가까운 적들을 번갈아 꿰뚫고 피해의 25% 회복
      this.audio.play('howl');
      this.fx.colorFire(pl.pos.x, pl.y + 0.8, pl.pos.z, 40, 0.8, '#ffe0a0', '#ff6a1a');
      let healed = 0;
      for (let i = 0; i < 9; i++) this.after(0.15 + i * 0.13, () => {
        if (pl.dead) return;
        const c = V(pl.pos.x, pl.y + 1.1, pl.pos.z);
        const near = this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 10)
          .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z));
        const a = (i / 9) * Math.PI * 2 + pl.yaw;
        if (!near.length) {
          this.fx.colorFire(c.x + Math.sin(a) * 1.4, c.y, c.z + Math.cos(a) * 1.4, 10, 0.3, '#ffe0a0', '#ff6a1a');
          return;
        }
        const e = near[i % Math.min(3, near.length)];
        const ec = e.center().clone();
        // 꼬리처럼 몸 둘레에서 휘어 나가는 불줄기
        const mid = V(c.x + Math.sin(a) * 1.6, c.y + 0.4, c.z + Math.cos(a) * 1.6);
        this.fx.streak(c, mid, '#ffb070', 0.3, 0.5);
        this.fx.streak(mid, ec, '#ff8a3a', 0.35, 0.55);
        // 여우불 꼬리: 휘어 나가는 길을 따라 불티
        for (let k = 0; k <= 16; k++) {
          const t = k / 16, u = 1 - t;
          const x = u * u * c.x + 2 * u * t * mid.x + t * t * ec.x, y = u * u * c.y + 2 * u * t * mid.y + t * t * ec.y, z = u * u * c.z + 2 * u * t * mid.z + t * t * ec.z;
          this.fx.add.emit({ x, y, z, vx: rand(-0.4, 0.4), vy: rand(0.5, 1.5), vz: rand(-0.4, 0.4), life: 0.25 + t * 0.3, size: 3 + t * 2, endSize: 1, color: '#fff0b0', color2: '#ff4a10' });
        }
        this.fx.colorFire(ec.x, ec.y, ec.z, 18, 0.4, '#ffe0a0', '#ff6a1a');
        this.audio.play('hit');
        const hp0 = e.hp;
        const crit = Math.random() < 0.2;
        this.damageEnemy(e, Math.round(rand(34, 42) * (crit ? 1.8 : 1)), crit, 3, 0.3);
        const h = Math.min(pl.maxHp - pl.hp, Math.round(Math.max(0, hp0 - Math.max(0, e.hp)) * 0.25));
        if (h > 0) { pl.hp += h; healed += h; }
        if (i === 8 && healed > 0) this.fx.number(pl.pos.clone().add(V(0, 2.1, 0)), `+${healed}`, 'heal');
      });
    } else if (pl.ult === 'hellfire') {
      // 지옥불: 붉은 불꽃 고리 세 겹이 몸 주위로 퍼짐
      this.audio.play('fire');
      this.ui.flash('#ff3a2a', 0.35);
      for (let i = 0; i < 3; i++) this.after(i * 0.32, () => {
        if (pl.dead) return;
        const c = feet(), R = 3.4 + i * 2;
        this.fx.ring(c, R, '#ff4a2a', 0.5);
        this.fx.ring(c, R * 0.92, '#ffd080', 0.35);
        this.fx.scorch(c, R * 0.5, '#2a0a08', 2);
        for (let k = 0; k < 60; k++) {
          const a = (k / 60) * Math.PI * 2;
          this.fx.add.emit({ x: c.x + Math.cos(a) * R, y: c.y + 0.2, z: c.z + Math.sin(a) * R, vx: Math.cos(a) * 2, vy: rand(2, 5), vz: Math.sin(a) * 2, life: rand(0.4, 0.8), size: rand(3, 5), endSize: 1, color: '#ffd070', color2: '#ff1a00' });
        }
        this.audio.play('burst');
        this.shake(0.3 + i * 0.1);
        for (const o of this.enemiesIn(c, R)) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(o, Math.round(rand(40, 48) * (o.isBoss ? 1.5 : 1) * (crit ? 1.8 : 1)), crit, 4, 0.3);
          if (!o.dead) o.burnFor(4, 12);
        }
      });
    } else if (pl.ult === 'meltdown') {
      // 쇳물 비: 앞쪽 넓은 곳에 녹은 쇳덩이가 쏟아지고 맞은 적은 불붙음
      const c = this.aimPoint(pl);
      this.audio.play('charge');
      this.fx.circle(c, 4.2, '#ff6a2a', 1.4, 2);
      for (let i = 0; i < 12; i++) this.after(0.25 + i * 0.09, () => {
        if (pl.dead) return;
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * 3.8;
        const at = V(c.x + Math.cos(a) * d, 0, c.z + Math.sin(a) * d);
        at.y = this.world.heightAt(at.x, at.z);
        this.fx.streak(V(at.x - 1.5, at.y + 7, at.z), V(at.x, at.y + 0.2, at.z), '#ffb060', 0.25, 0.45);
        this.fx.colorFire(at.x, at.y + 0.2, at.z, 18, 0.5, '#ffe080', '#ff2a00');
        this.fx.ring(at, 1.6, '#ff8a3a', 0.3);
        this.audio.play('impact');
        if (i % 3 === 0) this.shake(0.2);
        for (const o of this.enemiesIn(at, 1.6)) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(o, Math.round(rand(40, 48) * (crit ? 1.8 : 1)), crit, 3, 0.3);
          if (!o.dead) o.burnFor(3, 10);
        }
      });
    } else if (pl.ult === 'tidal') {
      // 물기둥: 가까운 적 다섯의 발밑에서 차례로 솟구침
      const c = feet();
      const tgt = this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 10)
        .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z)).slice(0, 5);
      this.audio.play('freeze');
      tgt.forEach((e, i) => {
        const at = V(e.pos.x, e.y, e.pos.z);
        this.fx.circle(at, 1.6, '#2affd0', 0.35 + i * 0.16, 3);
        this.after(0.3 + i * 0.16, () => {
          if (pl.dead) return;
          const h = this.world.heightAt(at.x, at.z);
          this.fx.ring(V(at.x, h, at.z), 2.2, '#bffff0', 0.4);
          for (let k = 0; k < 46; k++) {
            const a = Math.random() * Math.PI * 2, r = Math.random() * 0.8;
            this.fx.add.emit({ x: at.x + Math.cos(a) * r, y: h + rand(0, 0.5), z: at.z + Math.sin(a) * r, vx: Math.cos(a) * 0.6, vy: rand(6, 13), vz: Math.sin(a) * 0.6, g: 14, life: rand(0.5, 0.9), size: rand(3, 5), endSize: 1, color: '#e8fff8', color2: '#2a9aaa' });
          }
          this.audio.play('impact');
          this.shake(0.25);
          for (const o of this.enemiesIn(at, 1.9)) {
            const crit = Math.random() < 0.2;
            this.damageEnemy(o, Math.round(rand(66, 78) * (crit ? 1.8 : 1)), crit, 2, 0.6);
            if (!o.dead && !o.isBoss) o.freeze(1.2);
          }
        });
      });
    } else if (pl.ult === 'judgment') {
      // 명부 집행: 주변 적 여섯에게 낙인 → 1초 뒤 하늘에서 심판
      const c = feet();
      const marks = this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 10)
        .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z)).slice(0, 6);
      this.audio.play('wail');
      this.ui.flash('#3a1a5a', 0.4);
      this.fx.circle(c, 2.2, '#c890ff', 1.1, -3);
      for (const e of marks) {
        this.fx.circle(V(e.pos.x, e.y, e.pos.z), e.isBoss ? 2.4 : 1.2, '#c890ff', 1.1, 3);
        this.fx.cross(e.center().clone().add(V(0, 0.8, 0)), '#c890ff', 1.8, 0.5);
      }
      this.after(1.0, () => {
        this.audio.play('thunder');
        this.shake(0.7);
        this.ui.flash('#e0c8ff', 0.5);
        for (const e of marks) {
          if (e.dead) continue;
          const ec = e.center().clone();
          this.fx.arc(V(ec.x, ec.y + 7, ec.z), ec, '#e0c8ff', 1.2);
          this.fx.cross(ec, '#c890ff', e.isBoss ? 5 : 3.4, 0.45);
          this.fx.ring(V(e.pos.x, e.y, e.pos.z), e.isBoss ? 3 : 1.8, '#9a4aff', 0.4);
          this.damageEnemy(e, Math.round(rand(105, 125)), true, 4, 0.8);
          // 체력이 35% 아래로 떨어진 일반 몬스터는 즉사
          if (!e.dead && !e.isBoss && e.hp < e.maxHp * 0.35) {
            this.damageEnemy(e, e.hp * 20 + 100, true, 6, 0);
            this.fx.colorFire(ec.x, ec.y, ec.z, 24, 0.5, '#e0c8ff', '#5a1aaa');
          }
        }
      });
    }
  }

  // ================= 추가 스킬 =================
  castSkill(pl, slot) {
    const k = pl.cls + slot;
    const br = this.branch(pl, slot), r = this.rank(pl, slot), M = rankMul(r);
    if (k === 'sword2') {
      if (br === 'a') {
        // 연섬: 꿰뚫고 곧바로 돌아서며 거듭 벰 (Ⅲ 세 번, Ⅴ 네 번 + 십자 섬광)
        const n = r >= 5 ? 4 : r >= 3 ? 3 : 2;
        this.skillIssen(pl, { mult: M });
        for (let i = 1; i < n; i++) this.after(0.72 * i, () => { if (pl.dead) return; pl.yaw += Math.PI; this.skillIssen(pl, { mult: 0.9 * M, tint: '#ffd890' }); });
        if (r >= 5) this.after(0.72 * (n - 1) + 0.7, () => {
          if (pl.dead) return;
          const at = V(pl.pos.x, pl.y, pl.pos.z);
          this.fx.cross(at.clone().add(V(0, 1, 0)), '#fff2c0', 7, 0.5);
          this.ui.flash('#ffffff', 0.5);
          this.boomAt(at, 3.2, Math.round(70 * M), '#ffe8a0');
        });
      } else if (br === 'b') this.skillIssen(pl, { mark: true, mult: M, markR: r >= 3 ? 3 : 2, spread: r >= 3, twice: r >= 5, mul: M });
      else this.skillIssen(pl);
    } else if (k === 'sword3') {
      if (br === 'a') this.skillWhirl(pl, { spins: r >= 3 ? 7 : 5, R: r >= 3 ? 1.2 : 0.8, pull: true, mul: M, quake: r >= 5 });
      else { this.skillWhirl(pl, { mul: br ? M : 1 }); if (br === 'b') this.after(0.8, () => this.startBladeRing(pl, { n: r >= 5 ? 7 : r >= 3 ? 5 : 3, R: r >= 3 ? 2.4 : 2.0, dur: r >= 5 ? 8 : 5, shoot: r >= 5, mul: M })); }
    } else if (k === 'mage2') {
      if (br === 'a') {
        const n = r >= 5 ? 4 : r >= 3 ? 3 : 2;
        for (let i = 0; i < n; i++) this.skillDragon(pl, { phase: (i / n) * Math.PI * 2, dmg: (n > 2 ? 13 : 15) * M, gold: r >= 5 || i % 2 === 1 });
      } else this.skillDragon(pl, br === 'b' ? { trail: true, boom: 1.6, mul: M, hot: r >= 3, pillars: r >= 5 } : {});
    } else if (k === 'mage3') {
      if (br === 'a') this.skillFrost(pl, { shatter: true, mul: M, splash: r >= 3, renova: r >= 5 });
      else if (br === 'b') this.skillFrost(pl, r >= 5 ? { R: 8.8, freeze: 5, mult: 1.5 * M } : r >= 3 ? { R: 7.6, freeze: 4, mult: 1.25 * M } : { R: 6.4, freeze: 3.4, mult: 1.25 * M });
      else this.skillFrost(pl);
    } else if (k === 'elf2') {
      if (br === 'a') this.skillArrowRain(pl, { fire: true, mul: M, R: r >= 3 ? 3.8 : 3, dur: r >= 3 ? 2.0 : 1.4, burn: r >= 5 });
      else if (br === 'b') this.skillMeteor(pl, { n: r >= 5 ? 9 : r >= 3 ? 7 : 5, big: r >= 5, mul: M });
      else this.skillArrowRain(pl);
    } else if (k === 'elf3') {
      if (br === 'a') {
        const n = r >= 5 ? 4 : r >= 3 ? 3 : 2;
        for (let i = 0; i < n; i++) this.skillTornado(pl, { yawOff: (i - (n - 1) / 2) * (0.8 / Math.max(1, n - 1)) * 1.4, quiet: i > 0, dur: r >= 5 ? 4.5 : 3.2, mul: M });
      } else if (br === 'b') {
        const n = r >= 5 ? 3 : r >= 3 ? 2 : 1;
        for (let i = 0; i < n; i++) this.skillTornado(pl, { orbit: true, angOff: (i / n) * Math.PI * 2, quiet: i > 0, dur: r >= 5 ? 6 : 4.6, mul: M });
      } else this.skillTornado(pl);
    }
  }

  // 검객 일섬: 눈에 보이지 않을 만큼 빠르게 앞으로 돌진하며 지나간 자리에 빛줄기,
  // 칼을 칼집에 넣는 "착" 소리와 동시에 베인 적들이 한꺼번에 갈라짐
  skillIssen(pl, o = {}) {
    const dir = V(Math.sin(pl.yaw), 0, Math.cos(pl.yaw));
    const from = pl.pos.clone();
    this.fx.ghost(pl.rig, '#ffffff', 0.4);
    this.world.move(pl.pos, dir.x * 7, dir.z * 7, pl.moveR);
    pl.vel.set(0, 0, 0);
    pl.invuln = Math.max(pl.invuln, 0.6);
    const to = pl.pos.clone();
    const y = pl.y + 0.8;
    this.fx.streak(V(from.x, y, from.z), V(to.x, y, to.z), '#ffffff', 0.55, 0.5);
    this.fx.streak(V(from.x, y, from.z), V(to.x, y, to.z), o.mark ? '#ff4a3a' : o.tint || '#7fd8ff', 0.7, 1.2);
    for (let i = 1; i < 5; i++) {
      const t = i / 5;
      const gp = from.clone().lerp(to, t);
      this.fx.add.emit({ x: gp.x, y: y, z: gp.z, vx: rand(-1, 1), vy: rand(0, 1), vz: rand(-1, 1), life: 0.4, size: 3, endSize: 1, color: '#ffffff', color2: '#7fd8ff' });
    }
    this.fx.dust(from.x, from.y, from.z, 12);
    this.fx.ring(V(to.x, pl.y, to.z), 1.6, '#ffffff', 0.25);
    this.audio.play('dash');
    this.audio.play('swing3');
    this.shake(0.2);
    // 지나간 길 가까이에 있던 적
    const seg = to.clone().sub(from);
    const L2 = seg.lengthSq() || 1;
    const victims = this.enemies.filter((e) => {
      if (e.dead || e.spawning) return false;
      const t = Math.max(0, Math.min(1, ((e.pos.x - from.x) * seg.x + (e.pos.z - from.z) * seg.z) / L2));
      const px = from.x + seg.x * t, pz = from.z + seg.z * t;
      return Math.hypot(e.pos.x - px, e.pos.z - pz) < 1.3 + e.radius;
    });
    // 곧바로 칼을 넣게 하고, 넣는 순간 베임이 터짐
    pl.sinceAttack = 5;
    this.timers.push({ at: this.time + 0.62, fn: () => {
      this.audio.play('sheathe');
      if (!victims.length) return;
      this.audio.play('crit');
      this.ui.flash('#ffffff', 0.35);
      this.shake(0.5);
      this.hitstop = Math.max(this.hitstop, 0.1);
      for (const e of victims) {
        if (e.dead) continue;
        const crit = Math.random() < 0.3;
        this.damageEnemy(e, Math.round(rand(40, 48) * (o.mult || 1) * (crit ? 1.8 : 1)), crit, 5, 0.6);
        const c = e.center().clone();
        this.fx.cross(c, o.mark ? '#ff8a6a' : '#fff6d0', e.isBoss ? 6 : 4.2, 0.45);
        this.fx.spark(c.x, c.y, c.z, 16, '#fff6d0', 8);
        if (o.mark && !e.dead) this.markEnemy(e, o);
      }
    } });
  }

  // 검객 회오리베기: 세 바퀴 돌며 주변 전체를 벰 (마지막 바퀴가 가장 셈)
  skillWhirl(pl, opt = {}) {
    const spins = opt.spins || 3;
    if (spins > 3) pl.attack && (pl.attack.dur = 0.27 * spins + 0.1);
    for (let k = 0; k < spins; k++) {
      this.timers.push({ at: this.time + k * 0.27, fn: () => {
        if (pl.dead) return;
        const last = k === spins - 1;
        const R = (last ? 2.9 : 2.5) + (opt.R || 0);
        if (opt.pull) {
          for (const e of this.enemiesIn(pl.pos, R + 2.5)) {
            const dx = pl.pos.x - e.pos.x, dz = pl.pos.z - e.pos.z, d = Math.hypot(dx, dz) || 1;
            if (d > 1.2) this.world.move(e.pos, (dx / d) * Math.min(1.1, d - 1.1) * (e.isBoss ? 0.25 : 1), (dz / d) * Math.min(1.1, d - 1.1) * (e.isBoss ? 0.25 : 1), e.moveR ?? e.radius);
          }
          for (let i = 0; i < 14; i++) { const a = Math.random() * Math.PI * 2, r = R + 1.5; this.fx.add.emit({ x: pl.pos.x + Math.cos(a) * r, y: pl.y + rand(0.2, 1.5), z: pl.pos.z + Math.sin(a) * r, vx: -Math.cos(a) * 7 - Math.sin(a) * 4, vy: 0.5, vz: -Math.sin(a) * 7 + Math.cos(a) * 4, life: 0.3, size: 2, color: '#e0f4ff', color2: '#5aa8ff' }); }
        }
        const o = V(pl.pos.x, pl.y + 0.7, pl.pos.z);
        this.fx.slash(o, pl.yaw + k * 2.1, 0, { inner: 0.4, outer: R, len: 6.25, dur: 0.24, color: last ? '#fff6d0' : '#a8e4ff' });
        this.fx.slash(o, pl.yaw + k * 2.1, 0, { inner: R - 0.3, outer: R - 0.05, len: 6.25, dur: 0.24, color: '#ffffff' });
        this.fx.ring(V(pl.pos.x, pl.y, pl.pos.z), R, last ? '#fff2c0' : '#bfe8ff', 0.3);
        for (let i = 0; i < 16; i++) {
          const a = (i / 16) * Math.PI * 2;
          this.fx.norm.emit({ x: pl.pos.x + Math.cos(a) * 0.6, y: pl.y + 0.1, z: pl.pos.z + Math.sin(a) * 0.6, vx: Math.cos(a) * 4 - Math.sin(a) * 3, vy: rand(0.3, 1), vz: Math.sin(a) * 4 + Math.cos(a) * 3, drag: 3, life: 0.5, size: 3, endSize: 1, color: '#c8bca0', alpha: 0.7 });
        }
        this.audio.play(last ? 'swing3' : 'swing');
        let any = false;
        for (const e of this.enemiesIn(pl.pos, R)) {
          const crit = Math.random() < 0.15;
          this.damageEnemy(e, Math.round((last ? rand(22, 28) : rand(13, 17)) * (opt.mul || 1) * (crit ? 1.8 : 1)), crit, last ? 8 : 2.5, 0.3);
          any = true;
        }
        if (any) this.shake(last ? 0.35 : 0.15);
        // 태풍참 Ⅴ: 마지막 바퀴에 큰 충격파
        if (last && opt.quake) { this.ui.flash('#bfe8ff', 0.4); this.boomAt(V(pl.pos.x, pl.y, pl.pos.z), R + 3.5, Math.round(60 * (opt.mul || 1)), '#bfe8ff'); }
      } });
    }
  }

  // 도사 화룡부: 부적이 불뱀이 되어 꿈틀대며 날아감. 지나가는 적을 여러 번 태우고 끝에서 폭발
  skillDragon(pl, o = {}) {
    const dir = V(Math.sin(pl.yaw), 0, Math.cos(pl.yaw));
    const base = this.handPos(pl);
    const g = new THREE.Group();
    const segs = [];
    const N = 12;
    for (let i = 0; i < N; i++) {
      const k = i / (N - 1);
      const col = new THREE.Color(o.gold ? '#ffffff' : '#fff2a0').lerp(new THREE.Color(o.gold ? '#ffb020' : o.trail ? '#c81a0a' : '#e8401a'), k);
      const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.46 * (1 - k * 0.6), 1), new THREE.MeshBasicMaterial({ color: col }));
      g.add(s);
      segs.push(s);
    }
    // 머리: 뿔과 눈
    const head = segs[0];
    for (const sx of [-1, 1]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.35, 4), new THREE.MeshBasicMaterial({ color: '#ffd040' }));
      horn.position.set(sx * 0.16, 0.22, -0.12);
      horn.rotation.x = -0.8;
      head.add(horn);
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.05), new THREE.MeshBasicMaterial({ color: '#2a0a0a' }));
      eye.position.set(sx * 0.13, 0.08, 0.27);
      head.add(eye);
    }
    this.scene.add(g);
    const pr = { owner: 'fx', kind: 'dragon', pos: base.clone(), base: base.clone(), dir, yaw: pl.yaw, speed: 10, life: 1.6, t: 0, dmg: (o.dmg || 20) * (o.mul || 1), mesh: g, segs, hist: [], hitAt: new Map(), phase: o.phase || 0, trail: !!o.trail, boom: o.boom || 1, trailT: 0, mul: o.mul || 1, hot: o.hot, pillars: o.pillars };
    for (let i = 0; i < N * 3; i++) pr.hist.push(base.clone());
    this.projectiles.push(pr);
    this.audio.play('fire');
    this.audio.play('cast');
    this.fx.circle(V(pl.pos.x, pl.y, pl.pos.z), 1.6, '#ffa040', 0.6, 3);
    this.fx.ring(base, 1.4, '#ffd080', 0.3);
    this.ui.flash('#ff8a30', 0.18);
    this.shake(0.2);
  }

  dragonUpdate(pr, dt) {
    pr.t += dt;
    pr.base.addScaledVector(pr.dir, pr.speed * dt);
    const side = V(pr.dir.z, 0, -pr.dir.x);
    const wave = Math.sin(pr.t * 9 + pr.phase) * 0.9;
    // 폭염룡: 지나간 자리에 불길
    if (pr.trail) { pr.trailT -= dt; if (pr.trailT <= 0) { pr.trailT = 0.12; const gy = this.world.heightAt(pr.pos.x, pr.pos.z); this.fires.push({ pos: V(pr.pos.x, gy, pr.pos.z), t: 0, dur: pr.hot ? 4 : 2.6, tick: 0, mul: pr.mul * (pr.hot ? 1.5 : 1) }); } }
    pr.pos.copy(pr.base).addScaledVector(side, wave);
    pr.pos.y = pr.base.y + Math.sin(pr.t * 6) * 0.25;
    pr.hist.unshift(pr.pos.clone());
    pr.hist.length = pr.segs.length * 3;
    pr.segs.forEach((s, i) => {
      const h = pr.hist[Math.min(pr.hist.length - 1, i * 3)];
      s.position.copy(h);
    });
    const head = pr.segs[0];
    const nxt = pr.hist[2] || pr.pos;
    head.lookAt(pr.pos.clone().add(pr.pos.clone().sub(nxt)));
    // 불꽃
    for (let k = 0; k < 4; k++) {
      const h = pr.hist[Math.floor(Math.random() * pr.hist.length)];
      this.fx.add.emit({ x: h.x + rand(-0.15, 0.15), y: h.y + rand(-0.1, 0.2), z: h.z + rand(-0.15, 0.15), vx: rand(-0.6, 0.6), vy: rand(0.8, 2), vz: rand(-0.6, 0.6), life: rand(0.25, 0.5), size: rand(2, 5), endSize: 1, color: '#fff0a0', color2: '#ff2a00', flicker: 0.3 });
    }
    // 여러 번 태우기 (같은 적은 0.35초마다)
    for (const e of this.enemies) {
      if (e.dead || e.spawning) continue;
      if (Math.hypot(e.pos.x - pr.pos.x, e.pos.z - pr.pos.z) > 0.9 + e.radius) continue;
      const last = pr.hitAt.get(e) ?? -9;
      if (this.time - last < 0.35) continue;
      pr.hitAt.set(e, this.time);
      const crit = Math.random() < 0.2;
      this.damageEnemy(e, Math.round(pr.dmg * (crit ? 1.8 : 1) * rand(0.9, 1.1)), crit, 3, 0.3);
      const c = e.center();
      for (let i = 0; i < 12; i++) this.fx.add.emit({ x: c.x, y: c.y, z: c.z, vx: rand(-3, 3), vy: rand(1, 4), vz: rand(-3, 3), drag: 2, life: rand(0.3, 0.5), size: 3, endSize: 1, color: '#ffe080', color2: '#ff3010' });
    }
    if (pr.life <= 0 && !pr.exploded) {
      pr.exploded = true;
      const p = pr.pos;
      const gy = this.world.heightAt(p.x, p.z);
      this.audio.play('fire');
      const B = pr.boom;
      this.fx.ring(V(p.x, gy, p.z), 2.4 * B, '#ffb050', 0.35);
      if (B > 1) { this.fx.ring(V(p.x, gy, p.z), 1.4 * B, '#ffffff', 0.25); this.fx.circle(V(p.x, gy, p.z), 2 * B, '#ff6a2a', 0.8, 3); this.ui.flash('#ff7a30', 0.3); }
      this.fx.scorch(V(p.x, gy, p.z), 1.6 * B, '#2a140a', 2.5);
      for (let i = 0; i < 40; i++) {
        const a = Math.random() * Math.PI * 2, s = rand(2, 6);
        this.fx.add.emit({ x: p.x, y: p.y, z: p.z, vx: Math.cos(a) * s, vy: rand(0.5, 5), vz: Math.sin(a) * s, g: 4, drag: 2.5, life: rand(0.3, 0.7), size: rand(2, 5), endSize: 1, color: '#fff2a0', color2: '#ff2a00', flicker: 0.3 });
      }
      for (const e of this.enemiesIn(p, 2.2 * B)) this.damageEnemy(e, Math.round(rand(24, 30) * B * pr.mul), false, 6, 0.35);
      // 폭염룡 Ⅴ: 불기둥 여섯
      if (pr.pillars) for (let k = 0; k < 6; k++) this.after(0.1 + k * 0.08, () => {
        const a = (k / 6) * Math.PI * 2, at = V(p.x + Math.cos(a) * 2.6, 0, p.z + Math.sin(a) * 2.6);
        at.y = this.world.heightAt(at.x, at.z);
        for (let i = 0; i < 26; i++) this.fx.add.emit({ x: at.x + rand(-0.3, 0.3), y: at.y + rand(0, 0.5), z: at.z + rand(-0.3, 0.3), vx: rand(-0.4, 0.4), vy: rand(5, 10), vz: rand(-0.4, 0.4), life: rand(0.4, 0.7), size: rand(3, 6), endSize: 1, color: '#fff0a0', color2: '#ff2a00', flicker: 0.3 });
        this.fx.ring(at, 1.3, '#ffb050', 0.3);
        for (const e of this.enemiesIn(at, 1.4)) this.damageEnemy(e, Math.round(30 * pr.mul), false, 4, 0.3);
        this.fires.push({ pos: at, t: 0, dur: 3, tick: 0, mul: pr.mul, big: true });
      });
      this.shake(0.35 * B);
    }
  }

  // 도사 빙결진: 발밑에 얼음 마법진 → 세 겹의 얼음 가시가 퍼져 나가며 적을 얼림
  skillFrost(pl, o = {}) {
    const c = o.at ? o.at.clone() : V(pl.pos.x, pl.y, pl.pos.z);
    const R = o.R || 4.6;
    const sc = R / 4.6;
    this.fx.circle(c, R, '#8ad8ff', 1.6, 1.4);
    this.fx.scorch(c, R * 0.9, '#cfefff', 2.6);
    this.audio.play('freeze');
    this.ui.flash('#8ad8ff', 0.25);
    this.shake(0.35);
    [1.4 * sc, 2.8 * sc, 4.2 * sc].forEach((r, k) => {
      this.timers.push({ at: this.time + k * 0.09, fn: () => {
        const n = Math.round(r * 5);
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2 + k * 0.3;
          const x = c.x + Math.cos(a) * r, z = c.z + Math.sin(a) * r;
          const h = this.world.heightAt(x, z);
          if (Math.abs(h - c.y) > 1) continue;
          this.fx.iceSpike(V(x, h, z), rand(0.8, 1.5) * (1 - k * 0.15), 1.4 - k * 0.1);
        }
        this.fx.ring(c, r + 0.3, '#d8f4ff', 0.25);
        for (let i = 0; i < 20; i++) {
          const a = Math.random() * Math.PI * 2;
          this.fx.add.emit({ x: c.x + Math.cos(a) * r, y: c.y + 0.2, z: c.z + Math.sin(a) * r, vx: Math.cos(a) * 2, vy: rand(1, 3), vz: Math.sin(a) * 2, g: 6, life: rand(0.4, 0.8), size: 2, color: '#ffffff', color2: '#7ac8ff' });
        }
        this.shake(0.15);
      } });
    });
    const frozen = [];
    for (const e of this.enemiesIn(c, R)) {
      const crit = Math.random() < 0.15;
      this.damageEnemy(e, Math.round(rand(26, 32) * (o.mult || 1) * (o.mul || 1) * (crit ? 1.8 : 1)), crit, 1, 0.2);
      e.freeze(o.freeze || 1.8);
      frozen.push(e);
    }
    // 빙폭진: 얼어붙은 적이 얼음째 부서짐 (얼음에 면역인 보스도 마법진 안이면 피해)
    if (o.shatter) this.after(1.5, () => {
      let any = false;
      for (const e of frozen) {
        if (e.dead) continue;
        any = true;
        const ec = e.center().clone();
        this.damageEnemy(e, Math.round(rand(40, 48) * (o.mul || 1)), true, 4, 0.4);
        // 빙폭진 Ⅲ: 파편이 주변까지
        if (o.splash) for (const v of this.enemiesIn(e.pos, 2.2)) if (v !== e) this.damageEnemy(v, Math.round(20 * (o.mul || 1)), false, 3, 0.2);
        this.fx.cross(ec, '#e8f8ff', e.isBoss ? 5 : 3.4, 0.4);
        for (let i = 0; i < 24; i++) { const a = Math.random() * Math.PI * 2, s = rand(2, 6); this.fx.add.emit({ x: ec.x, y: ec.y, z: ec.z, vx: Math.cos(a) * s, vy: rand(1, 5), vz: Math.sin(a) * s, g: 12, life: rand(0.4, 0.8), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: '#6ac8ff' }); }
        this.fx.ring(V(e.pos.x, e.y, e.pos.z), 1.6, '#bfe8ff', 0.3);
      }
      if (any) { this.audio.play('freeze'); this.audio.play('crit'); this.shake(0.4); this.hitstop = Math.max(this.hitstop, 0.07); }
      // 빙폭진 Ⅴ: 다시 한 번 빙결진
      if (o.renova) this.after(0.35, () => this.skillFrost(pl, { at: c, mul: (o.mul || 1) * 0.8, freeze: 1.5 }));
    });
  }

  // 요정 화살비: 하늘로 쏜 화살이 조준한 곳에 비처럼 쏟아짐
  skillArrowRain(pl, o = {}) {
    const c = this.aimPoint(pl, 6);
    const R = o.R || 3;
    const col = o.fire ? '#ffb060' : '#9aff8a';
    this.fx.circle(c, R * 1.1, col, 1.7, 1.6);
    const tele = this.fx.ring(c, R, col, 1, 1);
    this.audio.play('bow');
    this.audio.play('bowskill');
    // 하늘로 솟는 화살
    for (let i = 0; i < 5; i++) this.fx.add.emit({ x: pl.pos.x + rand(-0.2, 0.2), y: pl.y + 1.4, z: pl.pos.z + rand(-0.2, 0.2), vx: rand(-0.5, 0.5), vy: 18, vz: rand(-0.5, 0.5), life: 0.4, size: 3, color: '#e8ffd8', color2: '#3aa83a' });
    this.rains.push({ c, R, t: -0.35, dur: o.dur || (o.fire ? 1.4 : 1.2), acc: 0, tele, fire: !!o.fire, mul: o.mul || 1, burn: o.burn });
  }

  // 요정 회오리 정령: 앞으로 나아가며 주변 적을 빨아들여 계속 상처를 입히는 바람 소용돌이
  skillTornado(pl, o = {}) {
    const yaw = pl.yaw + (o.yawOff || 0);
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const pos = V(pl.pos.x + dir.x * 1.5, pl.y, pl.pos.z + dir.z * 1.5);
    const rings = [];
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: i % 2 ? '#c8ffb0' : '#ffffff', transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
      const r = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 4, 20), mat);
      r.rotation.x = Math.PI / 2;
      this.scene.add(r);
      rings.push(r);
    }
    this.tornados.push({ pos, dir, t: 0, dur: o.dur || (o.orbit ? 4.6 : 3.2), tick: 0, rings, orbit: o.orbit ? pl : null, ang: yaw + (o.angOff || 0), mul: o.mul || 1 });
    if (o.quiet) return;
    this.audio.play('tornado');
    this.fx.circle(pos, 2, '#9aff8a', 0.8, 4);
    this.ui.flash('#9aff8a', 0.15);
  }

  updateSkills(dt) {
    this.updateSkillFx(dt);
    // 화살비
    for (let i = this.rains.length - 1; i >= 0; i--) {
      const r = this.rains[i];
      r.t += dt;
      if (r.t < 0) continue;
      r.acc += dt * 34;
      while (r.acc >= 1) {
        r.acc -= 1;
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * r.R;
        const tx = r.c.x + Math.cos(a) * d, tz = r.c.z + Math.sin(a) * d;
        const ty = this.world.heightAt(tx, tz);
        const from = V(tx + rand(-1, 1), ty + 9, tz + rand(-1, 1) - 1.5);
        const dir = V(tx, ty, tz).sub(from).normalize();
        const g = r.fire ? this.makeFireArrow() : this.makeArrowMesh(true);
        g.position.copy(from);
        g.lookAt(from.clone().add(dir));
        this.scene.add(g);
        this.projectiles.push({ owner: 'fx', kind: 'rainArrow', pos: from, dir, speed: 30, life: 1, mesh: g, groundY: ty, fire: r.fire, mul: r.mul, burn: r.burn });
      }
      if (r.t >= r.dur) { this.fx.removeRing(r.tele); this.rains.splice(i, 1); }
    }
    // 회오리 정령
    for (let i = this.tornados.length - 1; i >= 0; i--) {
      const T = this.tornados[i];
      T.t += dt;
      if (T.orbit) {
        // 태풍의 눈: 내 주위를 맴돎
        T.ang += dt * 2.3;
        const pp = T.orbit.pos, r = Math.min(2.6, 0.8 + T.t * 4);
        T.pos.set(pp.x + Math.sin(T.ang) * r, pp.y, pp.z + Math.cos(T.ang) * r);
      } else this.world.move(T.pos, T.dir.x * 3 * dt, T.dir.z * 3 * dt, 0.4);
      T.pos.y = this.world.heightAt(T.pos.x, T.pos.z);
      const fade = Math.min(1, T.t / 0.25) * Math.min(1, (T.dur - T.t) / 0.4);
      T.rings.forEach((ring, k) => {
        const h = 0.3 + k * 0.8;
        ring.position.set(T.pos.x + Math.sin(T.t * 7 + k) * 0.12, T.pos.y + h, T.pos.z + Math.cos(T.t * 7 + k) * 0.12);
        ring.scale.setScalar((0.5 + k * 0.45) * fade);
        ring.rotation.z += dt * (8 + k * 2);
        ring.material.opacity = 0.45 * fade;
      });
      // 나선으로 감도는 바람 입자와 잎사귀
      for (let k = 0; k < 10; k++) {
        const h = Math.random() * 3.2;
        const ang = T.t * 9 + h * 2.2 + Math.random() * 6.28;
        const rr = (0.25 + h * 0.4) * fade;
        this.fx.add.emit({ x: T.pos.x + Math.cos(ang) * rr, y: T.pos.y + h, z: T.pos.z + Math.sin(ang) * rr, vx: -Math.sin(ang) * 4, vy: 1.2, vz: Math.cos(ang) * 4, life: 0.25, size: 2, color: '#f0ffe8', color2: '#5ac84a', alpha: 0.9 });
      }
      if (Math.random() < 0.5) this.fx.norm.emit({ x: T.pos.x + rand(-1, 1), y: T.pos.y + rand(0.2, 2.5), z: T.pos.z + rand(-1, 1), vx: rand(-3, 3), vy: rand(1, 3), vz: rand(-3, 3), wob: 2, life: 0.8, size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
      if (Math.random() < 0.3) this.fx.dust(T.pos.x, T.pos.y, T.pos.z, 1);
      // 빨아들이기
      for (const e of this.enemiesIn(T.pos, 3)) {
        const dx = T.pos.x - e.pos.x, dz = T.pos.z - e.pos.z, d = Math.hypot(dx, dz) || 1;
        const pull = (e.isBoss ? 0.8 : 3.4) * dt;
        if (d > 0.4) this.world.move(e.pos, (dx / d) * pull, (dz / d) * pull, e.moveR ?? e.radius);
      }
      T.tick -= dt;
      if (T.tick <= 0) {
        T.tick = 0.25;
        for (const e of this.enemiesIn(T.pos, 1.7)) {
          this.damageEnemy(e, Math.round(rand(7, 10) * (T.mul || 1)), false, 0.5, 0.25);
          const c = e.center();
          this.fx.spark(c.x, c.y, c.z, 4, '#e8ffd8', 3);
        }
      }
      if (T.t >= T.dur) {
        for (const ring of T.rings) { this.scene.remove(ring); ring.geometry.dispose(); ring.material.dispose(); }
        for (let k = 0; k < 30; k++) this.fx.norm.emit({ x: T.pos.x, y: T.pos.y + rand(0.3, 2.5), z: T.pos.z, vx: rand(-5, 5), vy: rand(0, 3), vz: rand(-5, 5), wob: 2, drag: 2, life: rand(0.6, 1.1), size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
        this.fx.ring(T.pos, 2.2, '#c8ffb0', 0.35);
        this.tornados.splice(i, 1);
      }
    }
  }

  // ---------- 파생 기술 효과 ----------
  clearSkillFx() {
    for (const o of this.orbits) for (const b of o.blades) this.scene.remove(b);
    for (const m of this.marks) this.scene.remove(m.mesh);
    this.storms = []; this.fires = []; this.orbits = []; this.marks = [];
  }

  // 낙인섬: 붉은 낙인이 1초 뒤 터짐
  markEnemy(e, o = {}) {
    if (this.marks.some((m) => m.e === e)) return;
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.4, 4), new THREE.MeshBasicMaterial({ color: '#ff3a2a', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    mesh.userData.noOutline = true;
    this.scene.add(mesh);
    this.marks.push({ e, mesh, t: 0, dur: 1.0, R: o.markR || 2, mul: o.mul || 1, spread: o.spread && !o.child, twice: o.twice });
  }

  // 검무 결계: 빛나는 칼날 셋이 몸 주위를 돎
  startBladeRing(pl, o = {}) {
    if (pl.dead) return;
    const blades = [];
    for (let i = 0; i < (o.n || 3); i++) {
      const g = new THREE.Group();
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 1.1), new THREE.MeshBasicMaterial({ color: '#e8f8ff' }));
      const edge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.06, 1.0), new THREE.MeshBasicMaterial({ color: '#7fd8ff' }));
      edge.position.x = 0.04;
      g.add(blade, edge);
      this.scene.add(g);
      blades.push(g);
    }
    this.orbits.push({ pl, blades, t: 0, dur: o.dur || 5, tick: 0, ang: 0, R: o.R || 2.0, mul: o.mul || 1, shoot: o.shoot, shootT: 1 });
    this.audio.play('draw');
    this.fx.ring(V(pl.pos.x, pl.y, pl.pos.z), 2.4, '#bfe8ff', 0.35);
  }

  // 요정 유성시: 거대한 화살 다섯 대가 차례로 내리꽂힘
  skillMeteor(pl, o = {}) {
    const N = o.n || 5;
    const c = this.aimPoint(pl, 6);
    this.fx.circle(c, 3.4, '#d8ffb0', 2.0, 1.2);
    const tele = this.fx.ring(c, 3.0, '#d8ffb0', 1, 1);
    this.audio.play('bow');
    this.audio.play('bowskill');
    for (let i = 0; i < 4; i++) this.fx.add.emit({ x: pl.pos.x, y: pl.y + 1.4, z: pl.pos.z, vx: rand(-0.4, 0.4), vy: 20, vz: rand(-0.4, 0.4), life: 0.4, size: 4, color: '#ffffff', color2: '#7aff5a' });
    for (let k = 0; k < N; k++) {
      this.after(0.45 + k * 0.2, () => {
        const a = Math.random() * Math.PI * 2, d = k === 0 ? 0 : rand(0.8, 2.4);
        const tx = c.x + Math.cos(a) * d, tz = c.z + Math.sin(a) * d;
        const ty = this.world.heightAt(tx, tz);
        const from = V(tx + 1.2, ty + 12, tz - 2.5);
        const dir = V(tx, ty, tz).sub(from).normalize();
        const g = this.makeArrowMesh(true);
        g.scale.set(3.2, 3.2, 3);
        g.position.copy(from);
        g.lookAt(from.clone().add(dir));
        this.scene.add(g);
        if (o.big) g.scale.set(4.2, 4.2, 3.8);
        this.projectiles.push({ owner: 'fx', kind: 'rainArrow', pos: from, dir, speed: 34, life: 1.2, mesh: g, groundY: ty, big: true, mul: o.mul || 1, huge: o.big });
        if (k === N - 1) this.after(0.4, () => this.fx.removeRing(tele));
      });
    }
  }

  makeFireArrow() {
    const g = this.makeArrowMesh(false);
    g.children[0].material.color.set('#ff8a3a');
    g.children[1].material.color.set('#fff0a0');
    return g;
  }

  updateSkillFx(dt) {
    // 뇌운: 먹구름이 주변 적에게 번개를 떨어뜨림
    for (let i = this.storms.length - 1; i >= 0; i--) {
      const S = this.storms[i];
      S.t += dt;
      for (let k = 0; k < 3; k++) {
        const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * S.R;
        this.fx.norm.emit({ x: S.c.x + Math.cos(a) * r, y: S.c.y + 5 + rand(-0.4, 0.4), z: S.c.z + Math.sin(a) * r, vx: rand(-0.3, 0.3), vz: rand(-0.3, 0.3), life: 0.6, size: rand(4, 7), endSize: 3, color: Math.random() < 0.3 ? '#4a4060' : '#2a2438', alpha: 0.85 });
      }
      if (Math.random() < dt * 8) this.fx.add.emit({ x: S.c.x + rand(-S.R, S.R) * 0.8, y: S.c.y + 4.8, z: S.c.z + rand(-S.R, S.R) * 0.8, life: 0.08, size: 6, color: '#e8e0ff' });
      S.tick -= dt;
      if (S.tick <= 0) {
        S.tick = S.every || 0.55;
        const vs = this.enemiesIn(S.c, S.R).sort(() => Math.random() - 0.5);
        for (const e of vs.slice(0, S.hits || 1)) {
          const at = V(e.pos.x, e.y, e.pos.z);
          this.fx.bolt(at, 1.0);
          this.fx.ring(at, 1.4, '#d8c8ff', 0.25);
          this.damageEnemy(e, Math.round(rand(24, 30) * (S.mul || 1)), false, 2, 0.5);
          this.audio.play('thunder');
          this.shake(0.2);
        }
      }
      if (S.t >= S.dur) this.storms.splice(i, 1);
    }
    // 불길
    for (let i = this.fires.length - 1; i >= 0; i--) {
      const F = this.fires[i];
      F.t += dt;
      const k = 1 - F.t / F.dur;
      if (Math.random() < 0.8) this.fx.add.emit({ x: F.pos.x + rand(-0.35, 0.35), y: F.pos.y + 0.05, z: F.pos.z + rand(-0.35, 0.35), vx: rand(-0.2, 0.2), vy: rand(1, 2.4) * k * (F.big ? 2.2 : 1), vz: rand(-0.2, 0.2), life: rand(0.25, 0.5), size: rand(2, 4) * (0.5 + k * 0.5), endSize: 1, color: '#ffe080', color2: '#ff2a00', flicker: 0.3 });
      F.tick -= dt;
      if (F.tick <= 0) {
        F.tick = 0.3;
        for (const e of this.enemiesIn(F.pos, F.big ? 1.3 : 0.9)) this.damageEnemy(e, Math.round(rand(5, 7) * (F.mul || 1)), false, 0.2, 0.05);
      }
      if (F.t >= F.dur) this.fires.splice(i, 1);
    }
    // 검무 결계
    for (let i = this.orbits.length - 1; i >= 0; i--) {
      const O = this.orbits[i], pl = O.pl;
      O.t += dt;
      O.ang += dt * 6.5;
      const fade = Math.min(1, O.t / 0.2) * Math.min(1, (O.dur - O.t) / 0.3);
      O.blades.forEach((b, k) => {
        const a = O.ang + (k / O.blades.length) * Math.PI * 2;
        const r = O.R * fade;
        b.position.set(pl.pos.x + Math.sin(a) * r, pl.y + 0.8 + Math.sin(O.t * 5 + k) * 0.1, pl.pos.z + Math.cos(a) * r);
        b.rotation.y = a + Math.PI / 2;
        b.scale.setScalar(Math.max(0.01, fade));
        if (Math.random() < 0.6) this.fx.add.emit({ x: b.position.x, y: b.position.y, z: b.position.z, life: 0.18, size: 3, endSize: 1, color: '#ffffff', color2: '#5ab8ff' });
      });
      O.tick -= dt;
      if (O.tick <= 0) {
        O.tick = 0.3;
        for (const e of this.enemiesIn(pl.pos, O.R + 0.7)) {
          this.damageEnemy(e, Math.round(rand(9, 12) * O.mul), false, 1.5, 0.15);
          const c = e.center();
          this.fx.spark(c.x, c.y, c.z, 5, '#e8f8ff', 4);
        }
      }
      // 검무 결계 Ⅴ: 가끔 가까운 적에게 작은 검기
      if (O.shoot && !pl.dead) {
        O.shootT -= dt;
        const t = this.enemies.find((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - pl.pos.x, e.pos.z - pl.pos.z) < 9);
        if (O.shootT <= 0 && t) {
          O.shootT = 1;
          const y0 = pl.yaw;
          pl.yaw = Math.atan2(t.pos.x - pl.pos.x, t.pos.z - pl.pos.z);
          this.spawnSwordWave(pl, { scale: 0.6, dmgMul: 0.55 * O.mul, quiet: true });
          pl.yaw = y0;
          this.audio.play('swing');
        }
      }
      if (O.t >= O.dur || pl.dead) { for (const b of O.blades) this.scene.remove(b); this.orbits.splice(i, 1); }
    }
    // 낙인
    for (let i = this.marks.length - 1; i >= 0; i--) {
      const M = this.marks[i], e = M.e;
      M.t += dt;
      const c = e.center();
      M.mesh.position.set(c.x, c.y + (e.isBoss ? 2.4 : 1.2), c.z);
      M.mesh.rotation.z += dt * 5;
      M.mesh.lookAt(this.pixel.camera.position);
      M.mesh.scale.setScalar(1 + M.t * 0.6 + Math.sin(M.t * 30) * 0.08);
      if (M.t >= M.dur || e.dead) {
        this.scene.remove(M.mesh);
        this.marks.splice(i, 1);
        if (e.dead && M.t < M.dur * 0.5) continue;
        const at = V(e.pos.x, e.y, e.pos.z);
        this.fx.ring(at, 2.2, '#ff5a3a', 0.35);
        this.fx.cross(c.clone(), '#ff6a4a', e.isBoss ? 5.5 : 4, 0.4);
        this.fx.colorFire(at.x, at.y + 0.6, at.z, 30, 0.6, '#ffd0a0', '#ff2a10');
        if (!e.dead) this.damageEnemy(e, Math.round(rand(52, 60) * M.mul), true, 6, 0.5);
        for (const o of this.enemiesIn(at, M.R)) {
          if (o === e) continue;
          this.damageEnemy(o, Math.round(rand(24, 30) * M.mul), false, 5, 0.3);
          // 낙인섬 Ⅲ: 주변 적에게 낙인이 옮겨 붙음 (한 번만)
          if (M.spread && !o.dead) this.markEnemy(o, { markR: M.R, mul: M.mul * 0.7, child: true });
        }
        // 낙인섬 Ⅴ: 한 번 더 터짐
        if (M.twice && !e.dead) this.markEnemy(e, { markR: M.R, mul: M.mul * 0.8, child: true });
        this.audio.play('crit');
        this.shake(0.35);
      }
    }
  }

  // 떨어지는 화살비 화살
  rainArrowUpdate(pr) {
    pr.mesh.position.copy(pr.pos);
    if (pr.fire && Math.random() < 0.7) this.fx.add.emit({ x: pr.pos.x, y: pr.pos.y, z: pr.pos.z, vy: 1, life: 0.2, size: 3, endSize: 1, color: '#ffe080', color2: '#ff3010' });
    if (pr.big) {
      // 유성시: 꼬리 빛 + 땅에 닿으면 폭발
      for (let k = 0; k < 6; k++) this.fx.add.emit({ x: pr.pos.x + rand(-0.3, 0.3), y: pr.pos.y + rand(0, 1), z: pr.pos.z + rand(-0.3, 0.3), vx: rand(-0.5, 0.5), vy: 2, vz: rand(-0.5, 0.5), life: rand(0.3, 0.6), size: rand(3, 5), endSize: 1, color: '#ffffff', color2: '#7aff5a' });
      if (pr.pos.y <= pr.groundY + 0.05) {
        pr.life = 0;
        const at = V(pr.pos.x, pr.groundY, pr.pos.z);
        this.fx.ring(at, 2.6, '#e8ffc8', 0.4);
        this.fx.ring(at, 1.3, '#ffffff', 0.25);
        this.fx.scorch(at, 1.4, '#1a2a12', 2.2);
        this.fx.spark(at.x, at.y + 0.3, at.z, 24, '#f0ffd8', 9);
        for (let i = 0; i < 30; i++) { const a = Math.random() * Math.PI * 2, s = rand(2, 7); this.fx.norm.emit({ x: at.x, y: at.y + 0.2, z: at.z, vx: Math.cos(a) * s, vy: rand(2, 6), vz: Math.sin(a) * s, g: 14, life: rand(0.4, 0.8), size: 3, color: '#a89878', floor: at.y }); }
        const RR = pr.huge ? 3.1 : 2.3;
        if (pr.huge) this.fx.ring(at, RR + 0.6, '#ffffff', 0.4);
        for (const e of this.enemiesIn(at, RR)) { const crit = Math.random() < 0.2; this.damageEnemy(e, Math.round(rand(40, 48) * (pr.mul || 1) * (crit ? 1.8 : 1)), crit, 7, 0.5); }
        this.audio.play('thunder');
        this.shake(0.5);
        this.hitstop = Math.max(this.hitstop, 0.05);
      }
      return;
    }
    if (pr.pos.y <= pr.groundY + 0.05) {
      pr.life = 0;
      if (pr.fire) {
        // 불화살: 떨어진 곳에서 작게 터짐
        this.fx.ring(V(pr.pos.x, pr.groundY, pr.pos.z), 1.2, '#ffb050', 0.25);
        for (let i = 0; i < 8; i++) this.fx.add.emit({ x: pr.pos.x, y: pr.groundY + 0.1, z: pr.pos.z, vx: rand(-2, 2), vy: rand(1, 3), vz: rand(-2, 2), life: rand(0.3, 0.5), size: rand(2, 4), endSize: 1, color: '#ffe080', color2: '#ff3010' });
        for (const e of this.enemiesIn(pr.pos, 1.3)) this.damageEnemy(e, Math.round(rand(6, 8) * (pr.mul || 1)), false, 0.5, 0.1);
        if (pr.burn && Math.random() < 0.25) this.fires.push({ pos: V(pr.pos.x, pr.groundY, pr.pos.z), t: 0, dur: 2.5, tick: 0, mul: pr.mul || 1 });
      }
      this.fx.dust(pr.pos.x, pr.groundY, pr.pos.z, 2);
      this.fx.add.emit({ x: pr.pos.x, y: pr.groundY + 0.1, z: pr.pos.z, life: 0.2, size: 4, endSize: 1, color: '#e8ffd8' });
      for (const e of this.enemiesIn(pr.pos, 0.8)) {
        const crit = Math.random() < 0.15;
        this.damageEnemy(e, Math.round(rand(9, 12) * (pr.mul || 1) * (crit ? 1.8 : 1)), crit, 1, 0.15);
      }
      if (Math.random() < 0.3) this.audio.play('arrowhit');
    }
  }

  // 적이 쏘는 구슬 (도깨비불·여우불·원귀의 저주 구슬). off: 조준 각도 비틀기
  spawnOrb(w, off = 0, opt = {}) {
    const p = this.player;
    const P = w.T.pal;
    const pos = V(w.pos.x, w.y + (w.isBoss ? 2 : w.rig ? 1.1 : 1.3), w.pos.z);
    const target = V(p.pos.x + p.vel.x * 0.3, p.y + 0.7, p.pos.z + p.vel.z * 0.3);
    const dir = target.sub(pos).setY(0).normalize();
    if (off) dir.applyAxisAngle(V(0, 1, 0), off);
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(w.isBoss ? 0.28 : 0.2, 1), new THREE.MeshBasicMaterial({ color: P.orb }));
    mesh.position.copy(pos);
    this.scene.add(mesh);
    this.projectiles.push({ owner: 'enemy', kind: 'orb', pos, dir, speed: w.isBoss ? 7.5 : 5.5, life: 3.6, dmg: w.isBoss ? Math.round(w.dmg * 0.6) : w.dmg, mesh, radius: 0.45, hitSet: new Set(), y: pos.y, pal: P, slow: opt.slow || (w.T.poison ? 1.6 : 0) });
  }

  // 저승사자의 검은 초승달: 플레이어 쪽으로 세 줄기
  spawnDarkWaves(w) {
    const p = this.player;
    const base = Math.atan2(p.pos.x - w.pos.x, p.pos.z - w.pos.z);
    for (const off of [-0.35, 0, 0.35]) {
      const yaw = base + off;
      const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
      const pos = V(w.pos.x, w.y + 0.8, w.pos.z).addScaledVector(dir, 1.2);
      const pr = { owner: 'enemy', kind: 'darkwave', pos, dir, speed: 9, life: 1.3, dmg: Math.round(w.dmg * 0.8), radius: 1.0, hitSet: new Set() };
      pr.vis = [
        this.fx.slash(pos, yaw, 0, { inner: 0.3, outer: 1.6, len: 2.2, dur: 1.3, color: '#6a1aaa', static: true, move: (a) => a.g.position.copy(pr.pos) }),
        this.fx.slash(pos, yaw, 0, { inner: 1.25, outer: 1.55, len: 2.0, dur: 1.3, color: '#e0c8ff', static: true, move: (a) => a.g.position.copy(pr.pos) }),
      ];
      this.projectiles.push(pr);
    }
    this.audio.play('swing3');
    this.shake(0.2);
  }


  // 불가사리: 삼켰던 쇳조각을 뿜어 하늘에서 떨어뜨림 (떨어질 자리를 붉은 원으로 예고)
  ironRain(w) {
    const p = this.player;
    const spots = [V(p.pos.x, p.y, p.pos.z)];
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * Math.PI * 2, d = rand(1.8, 5);
      const x = p.pos.x + Math.cos(a) * d, z = p.pos.z + Math.sin(a) * d;
      spots.push(V(x, this.world.heightAt(x, z), z));
    }
    spots.forEach((at, i) => {
      this.fx.circle(at, 1.3, '#ff6a2a', 1.0 + i * 0.08, 3);
      this.after(1.0 + i * 0.08, () => {
        this.fx.streak(V(at.x, at.y + 7, at.z), V(at.x, at.y + 0.2, at.z), '#ffb060', 0.25, 0.3);
        this.fx.spark(at.x, at.y + 0.3, at.z, 16, '#ffd090', 7);
        this.fx.ring(at, 1.4, '#ff8a3a', 0.3);
        this.fx.dust(at.x, at.y, at.z, 6);
        this.audio.play('impact');
        if (Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < 1.3 + p.radius) p.damage(Math.round(w.dmg * 0.75), at);
      });
    });
  }

  // 협곡 용암 분화구: 몇 초마다 붉게 달아올랐다가 불기둥을 뿜음 (플레이어·적 모두 다침)
  updateVents(dt) {
    const p = this.player;
    if (this.mapId !== 'canyon' || !this.world.vents.length) return;
    for (const v of this.world.vents) {
      if (v.t === undefined) { v.t = Math.random() * 6; v.period = rand(6, 9); }
      v.t += dt;
      const warn = v.period - 1.3;
      if (v.t >= warn && !v.warned) {
        v.warned = true;
        if (Math.hypot(v.x - p.pos.x, v.z - p.pos.z) < 22) this.fx.circle(V(v.x, 0, v.z), 1.9, '#ff4a1a', 1.3, 4);
      }
      v.mat.emissiveIntensity = v.t >= warn ? 0.6 + (v.t - warn) * 2.4 : 0.4 + Math.sin(this.time * 2 + v.x) * 0.1;
      if (v.t >= v.period) {
        v.t = 0; v.warned = false; v.period = rand(6, 9);
        if (Math.hypot(v.x - p.pos.x, v.z - p.pos.z) > 26) continue;
        for (let i = 0; i < 40; i++) this.fx.add.emit({ x: v.x + rand(-0.4, 0.4), y: 0.2, z: v.z + rand(-0.4, 0.4), vx: rand(-1.2, 1.2), vy: rand(6, 12), vz: rand(-1.2, 1.2), g: 12, life: rand(0.6, 1.1), size: rand(3, 5), endSize: 1, color: '#ffe080', color2: '#ff2a00' });
        this.fx.ring(V(v.x, 0, v.z), 2, '#ff8a3a', 0.4);
        if (Math.hypot(v.x - p.pos.x, v.z - p.pos.z) < 12) { this.audio.play('fire'); this.shake(0.15); }
        if (Math.hypot(v.x - p.pos.x, v.z - p.pos.z) < 1.8 + p.radius && !p.dead) { if (p.damage(18 + this.round * 3, V(v.x, 0, v.z))) p.burnFor(2.5); }
        for (const e of this.enemies) {
          if (e.dead || e.spawning || e.isBoss) continue;
          if (Math.hypot(e.pos.x - v.x, e.pos.z - v.z) < 1.9) { e.hit(40, V(e.pos.x - v.x, 0, e.pos.z - v.z).normalize(), 6, 0.4); e.burnFor(2, 8); this.fx.number(e.center().clone().add(V(0, 0.5, 0)), 40, 'burn'); }
        }
      }
    }
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

  // 보스 장비 고유 효과 (맞힌 순간)
  weaponPerks(e, c, base, dmg, exec) {
    const pl = this.player;
    if (exec) {
      this.fx.colorFire(c.x, c.y, c.z, 10, 0.3, '#e0c8ff', '#6a2aff');
      if (Math.random() < 0.3) this.fx.cross(c, '#c890ff', 2.2, 0.3);
    }
    if (pl.perks.has('drain') && !pl.dead) {
      pl.drainAcc = (pl.drainAcc || 0) + dmg * 0.06;
      if (pl.drainAcc >= 1 && pl.hp < pl.maxHp) {
        const h = Math.min(Math.floor(pl.drainAcc), pl.maxHp - pl.hp);
        pl.hp += h;
        pl.drainAcc -= Math.floor(pl.drainAcc);
        if (this.time - (pl.drainShown || 0) > 0.5) {
          pl.drainShown = this.time;
          this.fx.number(pl.pos.clone().add(V(0, 1.9, 0)), `+${h}`, 'heal');
        }
        this.fx.norm.emit({ x: c.x, y: c.y, z: c.z, vx: (pl.pos.x - c.x) * 2, vy: 2, vz: (pl.pos.z - c.z) * 2, drag: 1, life: 0.5, size: 3, color: '#ffb070' });
      }
    }
    if (pl.perks.has('molten') && !e.dead && Math.random() < 0.22) {
      // 쇳물: 맞은 적에 불을 붙임
      e.burnFor(3, Math.max(6, base * 0.35));
      this.fx.colorFire(c.x, c.y, c.z, 10, 0.3, '#ffd070', '#ff2a00');
    }
    if (pl.perks.has('chill') && !e.dead && !e.isBoss && Math.random() < 0.15) {
      // 찬물결: 맞은 적을 잠깐 얼림
      e.freeze(1.0);
      this.fx.colorFire(c.x, c.y, c.z, 12, 0.3, '#e8fff8', '#2affd0');
    }
    if (pl.perks.has('quake') && !this.inQuake && Math.random() < 0.2) {
      // 도깨비 벼락: 맞은 적 자리에 벼락 + 주변 충격파
      this.inQuake = true;
      const at = V(e.pos.x, e.y, e.pos.z);
      this.fx.bolt(at, 0.8);
      this.fx.ring(at, 2.6, '#9ad8ff', 0.35);
      this.fx.spark(at.x, at.y + 0.5, at.z, 16, '#bfe8ff', 7);
      this.audio.play('thunder');
      for (const o of this.enemies) {
        if (o.dead || o.spawning) continue;
        if (Math.hypot(o.pos.x - at.x, o.pos.z - at.z) < 2.6) this.damageEnemy(o, Math.max(4, Math.round(base * 0.6)), false, 3, 0.25);
      }
      this.inQuake = false;
    }
  }

  onEnemyKilled(e) {
    this.kills++;
    const exp = Math.round(e.T.exp * (1 + this.round * 0.25) * (e.elite ? 3 : 1) * (this.tower?.active ? 1 + this.tower.floor * 0.06 : 1));
    this.player.addExp(exp);
    this.fx.number(V(e.pos.x, e.y + (e.isBoss ? 4 : 2.2), e.pos.z), `+${exp} EXP`, 'exp');
    const drop = rollDrop(e.type, this.round, this.player.cls);
    if (drop) this.spawnDrop(e.pos, drop);
    // 보스는 확률로 전용 장비(고유 기술 무기·옷)를 떨어뜨림
    if (e.isBoss) {
      const bd = bossDrop(e.type, this.player.cls, this.inv, this.round);
      for (const id of bd) this.spawnDrop(e.pos, id);
      if (!bd.some((id) => item(id).kind === 'weapon')) this.after(1.2, () => this.ui.toast('보스 무기는 나오지 않았어요… 다시 도전해 보세요', 2.4));
    }
    // 방어구·장신구: 일반 몬스터는 가끔, 보스는 두세 개 (등급이 높게)
    const gearN = e.isBoss ? 2 + (Math.random() < 0.5 ? 1 : 0) : Math.random() < (e.field ? 0.16 : 0.12) ? 1 : 0;
    for (let i = 0; i < gearN; i++) {
      const strong = e.isBoss ? 0.6 : e.T.hp > 60 ? 0.12 : 0;
      const lv = Math.max(1, e.lvl || 1) + this.round;
      // 가끔은 그 지역 세트의 조각 (보스는 자주)
      const sid = setFor(e.type);
      if (sid && Math.random() < (e.isBoss ? 0.4 : 0.09)) this.spawnDrop(e.pos, makeSetPiece(sid, lv));
      else this.spawnDrop(e.pos, makeGear(lv, rollGearTier(strong, this.round)));
    }
    const pl = this.player;
    if (pl.perks?.has('soul') && !pl.dead && pl.hp < pl.maxHp) {
      const h = Math.min(Math.ceil(pl.maxHp * 0.04), pl.maxHp - pl.hp);
      pl.hp += h;
      this.fx.number(pl.pos.clone().add(V(0, 2.1, 0)), `+${h}`, 'heal');
      const c = e.center();
      for (let i = 0; i < 8; i++) this.fx.add.emit({ x: c.x + rand(-0.3, 0.3), y: c.y + rand(0, 0.5), z: c.z + rand(-0.3, 0.3), vx: (pl.pos.x - c.x) * 1.6, vy: rand(1, 2.5), vz: (pl.pos.z - c.z) * 1.6, drag: 1, life: 0.6, size: 3, color: '#e0c8ff', color2: '#6a2aff' });
    }
    if (this.target === e) this.target = null;
    this.questOnKill(e);
    this.updateQuest();
    if (e.isBoss) {
      this.hitstop = 0.25;
      this.shake(1);
      this.ui.flash('#ffffff', 0.6);
    }
  }

  checkWave() {
    if (!this.waveActive || this.wave === 0 || this.spawnQueue.length) return;
    if (this.enemies.some((e) => !e.dead && !e.field)) return;
    if (this.waveClearing) return;
    this.waveClearing = true;
    if (this.wave >= 3) {
      this.after(1.5, () => this.victory());
    } else {
      this.ui.banner('격퇴!', `제${this.wave}파 완료 · 경험치 +${20 + this.round * 10}`, 1.8);
      this.player.addExp(20 + this.round * 10);
      this.after(2.6, () => { this.waveClearing = false; this.nextWave(); });
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
    const first = !this.cleared[this.mapId];
    this.cleared[this.mapId] = true;
    const Q = this.curQuest();
    if (Q && Q.type === 'wave' && Q.region === this.mapId) this.after(2.0, () => this.completeStep());
    this.after(0.1, () => this.updateRegion(true));
    this.ui.banner('승리', WIN_LINE[this.mapId], 4, 'win-banner');

    this.updateQuest();
    this.save();
  }

  onPlayerDeath() {
    this.state = 'dead';
    if (this.autoMove) this.stopAutoMove();
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
    for (const r of this.rains) this.fx.removeRing(r.tele);
    this.rains = [];
    for (const T of this.tornados) for (const ring of T.rings) this.scene.remove(ring);
    this.tornados = [];
    this.clearSkillFx();
    this.ui.setBoss(null);
    this.waveClearing = false;
    if (this.tower?.active) { this.leaveTower(true); return; }
    if (this.waveActive) {
      this.wave = Math.max(0, this.wave - 1);
      this.after(1.2, () => this.nextWave());
    }
  }

  shake(a) { a *= this.settings?.shake ?? 1; this.shakeAmt = Math.min(1.2, Math.max(this.shakeAmt, a)); }

  screenFlash(dur, color) { this.ui.flash(color, 0.35); }

  // ---------- 업데이트 ----------
  updateProjectiles(dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      // 완벽한 회피의 느린 시간·등장 연출 중엔 적 투사체도 느려짐
      const pdt = pr.owner === 'enemy' ? (this.cine ? 0 : this.slowmoT > 0 ? dt * 0.25 : dt) : dt;
      pr.life -= pdt;
      pr.pos.addScaledVector(pr.dir, pr.speed * pdt);
      if (pr.kind === 'orb') {
        pr.mesh.position.copy(pr.pos);
        const P = pr.pal || { orb: '#d8fbff', trail: '#8ff0ff', trail2: '#1a40ff' };
        pr.mesh.material.color.set(pr.owner === 'player' ? '#ffffff' : P.orb);
        if (Math.random() < 0.9) this.fx.add.emit({ x: pr.pos.x + rand(-0.1, 0.1), y: pr.pos.y + rand(-0.1, 0.1), z: pr.pos.z + rand(-0.1, 0.1), vx: rand(-0.3, 0.3), vy: rand(0.2, 0.8), vz: rand(-0.3, 0.3), life: rand(0.2, 0.45), size: 3, endSize: 1, color: P.trail, color2: P.trail2 });
        const h = this.world.heightAt(pr.pos.x, pr.pos.z);
        if (h > pr.pos.y - 0.4 || this.world.isBlocked(pr.pos.x, pr.pos.z, 0.05, h) && h > pr.pos.y - 1) pr.life = 0;
      } else if (pr.kind === 'wave') {
        this.swordWaveTrail(pr, dt);
      } else if (pr.kind === 'talisman' || pr.kind === 'arrow') {
        this.missileTrail(pr, dt);
      } else if (pr.kind === 'darkwave') {
        if (Math.random() < 0.8) this.fx.add.emit({ x: pr.pos.x + rand(-0.8, 0.8), y: pr.pos.y + rand(-0.2, 0.3), z: pr.pos.z + rand(-0.8, 0.8), vy: 0.4, life: 0.4, size: 3, endSize: 1, color: '#c8a0ff', color2: '#2a0a4a' });
      } else if (pr.kind === 'dragon') {
        this.dragonUpdate(pr, dt);
      } else if (pr.kind === 'rainArrow') {
        this.rainArrowUpdate(pr);
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
              this.fx.cross(c, '#9fe8ff', e.isBoss ? 5.5 : 3.8);
              this.fx.ring(V(e.pos.x, e.y, e.pos.z), e.isBoss ? 3 : 1.8, '#9fe8ff', 0.3);
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
              if (pr.pierce) {
                this.fx.cross(c.clone(), '#a8ff8a', e.isBoss ? 3.5 : 2.4, 0.25);
                for (let k = 0; k < 6; k++) this.fx.norm.emit({ x: c.x, y: c.y, z: c.z, vx: rand(-3, 3), vy: rand(1, 3), vz: rand(-3, 3), wob: 1.5, drag: 2, life: rand(0.4, 0.8), size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
              }
              if (!pr.pierce) { pr.life = 0; pr.stuck = true; }
            }
            if (pr.life <= 0) break;
          }
        }
      } else if (pr.owner === 'enemy') {
        const p = this.player;
        if (Math.hypot(p.pos.x - pr.pos.x, p.pos.z - pr.pos.z) < pr.radius + p.radius * 0.5) {
          if (p.damage(pr.dmg, pr.pos)) { pr.life = 0; if (pr.slow) p.slowFor(pr.slow, '독에 중독되어 몸이 무겁다!'); }
        }
      }
      if (pr.life <= 0) {
        if (pr.kind === 'wave') this.swordWaveEnd(pr);
        if (pr.kind === 'darkwave') for (const a of pr.vis) a.kill = true;
        if (pr.kind === 'talisman') this.talismanBurst(pr);
        if (pr.kind === 'arrow' && pr.boom) this.boomAt(V(pr.pos.x, this.world.heightAt(pr.pos.x, pr.pos.z), pr.pos.z), 2.6, Math.round(60 * (pr.mul || 1)), '#e8ffc8');
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
    const list = [this.player, ...this.enemies.filter((e) => !e.dead && !e.isWisp)];
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
      const d = Math.hypot(dx, dz), m = a.radius + b.radius;
      if (d < m && d > 0.0001) {
        const push = (m - d) * 0.5;
        const ux = dx / d, uz = dz / d;
        const wa = a === this.player ? 0.3 : (a.isBoss ? 0.1 : 1);
        const wb = b.isBoss ? 0.1 : 1;
        this.world.move(a.pos, -ux * push * wa, -uz * push * wa, a.moveR ?? a.radius);
        this.world.move(b.pos, ux * push * wb, uz * push * wb, b.moveR ?? b.radius);
      }
    }
  }

  ambient(dt) {
    const f = this.focus;
    const n = this.night;
    const amb = this.themeCur.ambient;
    if (amb === 'snow') {
      // 설원: 밤낮없이 눈이 내림
      for (let k = 0; k < 2; k++) if (Math.random() < dt * 30) this.fx.norm.emit({ x: f.x + rand(-20, 20), y: rand(6, 10), z: f.z + rand(-18, 12), vx: rand(-0.3, 0.6), vy: -1.2, vz: rand(-0.2, 0.2), wob: 0.8, life: 8, size: Math.random() < 0.3 ? 3 : 2, color: '#ffffff', floor: 0.02, alpha: 0.95 });
      return;
    }
    if (amb === 'ember') {
      // 협곡: 바닥에서 솟아오르는 불티와 재
      if (Math.random() < dt * 16) this.fx.add.emit({ x: f.x + rand(-20, 20), y: rand(0, 1), z: f.z + rand(-16, 12), vx: rand(-0.3, 0.3), vy: rand(0.6, 1.6), vz: rand(-0.3, 0.3), wob: 0.8, life: rand(2, 4), size: 2, color: '#ffc060', color2: '#ff3a00', flicker: 0.6 });
      if (Math.random() < dt * 5) this.fx.norm.emit({ x: f.x + rand(-20, 20), y: rand(5, 8), z: f.z + rand(-16, 10), vx: rand(0.2, 0.6), vy: -0.4, vz: rand(-0.2, 0.2), wob: 1, life: 8, size: 2, color: '#6a605a', floor: 0.02, alpha: 0.8 });
    }
    if (amb === 'soul') {
      // 시련탑: 허공에서 떠오르는 넋 (보랏빛 불티)
      if (Math.random() < dt * 14) this.fx.add.emit({ x: f.x + rand(-18, 18), y: rand(-2, 0.5), z: f.z + rand(-14, 12), vx: rand(-0.2, 0.2), vy: rand(0.4, 1.0), vz: rand(-0.2, 0.2), wob: 0.6, life: rand(3, 5), size: rand(2, 3), color: '#d8c0ff', color2: '#5a1aaa', flicker: 0.5 });
    }
    if (amb === 'mist') {
      // 늪: 낮게 깔려 흐르는 물안개
      if (Math.random() < dt * 9) this.fx.norm.emit({ x: f.x + rand(-20, 20), y: rand(0.2, 1.2), z: f.z + rand(-16, 12), vx: rand(0.2, 0.6), vy: 0.02, vz: rand(-0.1, 0.1), wob: 0.3, life: rand(5, 8), size: rand(10, 16), endSize: 18, color: '#e8f4ec', alpha: 0.16 });
    }
    if (amb === 'leaf' && Math.random() < dt * 7 * (1 - n)) {
      this.fx.norm.emit({ x: f.x + rand(-18, 18), y: rand(4, 7), z: f.z + rand(-16, 10), vx: rand(0.2, 0.8), vy: -0.7, vz: rand(-0.2, 0.3), wob: 1.6, life: 7, size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#c8e08a', floor: 0.02 });
    }
    // 낮: 흩날리는 꽃잎 / 밤: 반딧불
    if (amb === 'petal' && Math.random() < dt * 6 * (1 - n)) {
      this.fx.norm.emit({ x: f.x + rand(-18, 18), y: rand(4, 8), z: f.z + rand(-16, 10), vx: rand(0.4, 1.0), vy: -0.6, vz: rand(-0.2, 0.3), wob: 1.2, life: 7, size: 2, color: Math.random() < 0.6 ? '#f6c8d4' : '#fff4f0', floor: 0.02, alpha: 0.95 });
    }
    if (Math.random() < dt * 14 * n) {
      this.fx.add.emit({ x: f.x + rand(-18, 18), y: rand(0.4, 2.5), z: f.z + rand(-14, 10), vx: rand(-0.3, 0.3), vy: rand(-0.1, 0.2), vz: rand(-0.3, 0.3), wob: 0.8, life: rand(2.5, 5), size: 2, color: Math.random() < 0.3 ? '#9ff0ff' : '#d8ff8a', flicker: 0.8 });
    }
  }

  // 전투 시뮬레이션 한 단계 (플레이어, 적, 길찾기, 투사체, 웨이브)
  simulate(wdt, inp) {
    this.updateTarget();
    this.player.update(wdt, inp);
    this.updateDrops(wdt);
    this.updateRegion();
    this.updateVents(wdt);
    this.updateTower();
    this.updateField(wdt);
    this.updateQuestMarkers(wdt);
    // 길찾기 흐름장 (플레이어가 다른 칸으로 옮겼을 때만 실제로 다시 계산)
    this.flowT -= wdt;
    if (this.enemies.length && this.flowT <= 0) {
      this.flowT = 0.15;
      const pp = this.player.pos;
      this.world.updateFlow(pp.x, pp.z, 0);
      if (this.enemies.some((e) => e.isBoss && !e.dead)) this.world.updateFlow(pp.x, pp.z, 1);
    }
    const ek = this.slowmoT > 0 ? 0.25 : 1;
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      const edt = this.cine && e !== this.cine.e ? 0 : wdt * ek;
      if (!e.update(edt)) { e.dispose(); this.enemies.splice(i, 1); }
    }
    this.updateBurnZones(wdt);
    this.separate();
    this.updateProjectiles(wdt);
    this.updateSkills(wdt);
    if (this.timers.length) {
      const due = this.timers.filter((t) => t.at <= this.time);
      if (due.length) { this.timers = this.timers.filter((t) => t.at > this.time); for (const t of due) t.fn(); }
    }
    while (this.spawnQueue.length && this.spawnQueue[0].at <= this.time) { const q = this.spawnQueue.shift(); this.spawnEnemy(q.type, q); }
    this.spawnQueue.sort((a, b) => a.at - b.at);
    this.checkWave();
    if (this.enemies.length || this.spawnQueue.length) this.updateQuest();
  }

  // 게임 시간 기준 예약 (일시정지·지역 이동 시 함께 멈추거나 취소됨)
  after(sec, fn) { this.timers.push({ at: this.time + sec, fn }); }

  // 테스트·디버그용: 렌더링 없이 시간만 진행
  stepSim(dt) {
    this.time += dt;
    shared.time.value += dt;
    this.simulate(dt, { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null });
  }

  // 테스트·디버그용: 장비 하나 만들기
  testGear(kind, tier, lv = 5, set = null) { return set ? makeSetPiece(set, lv, kind) : makeGear(lv, tier, kind); }

  spawnEnemyAt(type, x, z) {
    const e = new Enemy(this, type, V(x, this.world.heightAt(x, z), z), 1 + this.round);
    this.enemies.push(e);
    return e;
  }

  // 지금 어울리는 배경음악·환경음: 보스 > 웨이브·필드 난전 > 지역(궁궐은 낮/밤)
  updateSoundScene(dt) {
    if (this.state === 'title') { this.audio.setScene('title', null); return; }
    const p = this.player;
    // 필드에서 덤벼드는 적이 셋 이상이면 전투곡 (잠깐 줄어도 몇 초는 유지)
    let aggro = 0;
    for (const e of this.enemies) if (!e.dead && !e.spawning && (!e.field || e.aggro) && Math.hypot(e.pos.x - p.pos.x, e.pos.z - p.pos.z) < 14) aggro++;
    this.combatHeat = aggro >= 3 ? 6 : Math.max(0, (this.combatHeat || 0) - dt);
    const boss = this.enemies.some((e) => e.isBoss && !e.dead);
    const id = this.mapId || 'palace';
    const night = this.night > 0.5;
    const region = id === 'palace' ? (night ? 'night' : 'palace') : id === 'tower' ? (this.tower?.active && !this.tower.cleared ? 'battle' : 'tower') : id;
    const music = boss ? 'boss' : this.waveActive || this.combatHeat > 0 ? 'battle' : region;
    const amb = id === 'palace' ? (night ? 'amb_night' : 'amb_day') : id === 'bamboo' ? (night ? 'amb_night' : 'amb_bamboo') : id === 'swamp' ? 'amb_swamp' : id === 'canyon' ? 'amb_canyon' : id === 'tower' ? 'amb_tower' : 'amb_temple';
    this.audio.setScene(music, amb);
  }

  loop(now) {
    requestAnimationFrame(this.loop);
    let dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.pollPad();
    this.audio.update();
    this.updateSoundScene(dt);
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

    let inp = this.readInput();
    if (this.state === 'play' && !this.paused) inp = this.autoControl(inp, wdt);
    if (this.cine) { inp = { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null }; this.updateCine(dt); }
    if (this.slowmoT > 0) this.slowmoT -= dt;
    if (this.state !== 'title' && !this.paused) this.simulate(wdt, inp);
    else this.player.update(wdt, inp);
    for (const n of this.npcs) n.update(wdt);
    for (const b of this.birds) b.update(wdt);
    this.world.update(wdt, this.time);
    this.ambient(wdt);
    this.fx.update(wdt);
    shared.player.value.copy(this.player.pos);
    this.nearInteract = this.state === 'play' ? this.findInteract() : null;
    this.updateMarker(dt);

    // 카메라
    let target;
    if (this.state === 'title') {
      this.preview.update(dt);
      const k = (Math.sin(this.time * 0.12) * 0.5 + 0.5);
      target = V(Math.sin(this.time * 0.07) * 4, 0.5, lerp(10, -6, k));
      this.focus.copy(target);
    } else {
      const p = this.player;
      this.lead.x = damp(this.lead.x, p.vel.x * 0.28, 3, dt);
      this.lead.z = damp(this.lead.z, p.vel.z * 0.28, 3, dt);
      target = V(p.pos.x + this.lead.x, p.y + 0.6, p.pos.z + this.lead.z - 0.8);
      if (this.cine) { const b = this.cine.e; target = V(lerp(p.pos.x, b.pos.x, 0.85), b.y + 1.2, lerp(p.pos.z, b.pos.z, 0.85) - 0.8); }
      this.focus.x = damp(this.focus.x, target.x, 7, dt);
      this.focus.y = damp(this.focus.y, target.y, 5, dt);
      this.focus.z = damp(this.focus.z, target.z, 7, dt);
    }
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.2);
    const sh = this.shakeAmt * this.shakeAmt * 0.45;
    const camFocus = this.focus.clone().add(V(rand(-sh, sh), 0, rand(-sh, sh) * 0.6));
    this.pixel.setFocus(camFocus);
    this.updateDarkness();
    this.updateLights(dt);
    this.ui.update(dt);
    this.pixel.render(this.scene);
  }
}

const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3();
const _e = new THREE.Color();

window.addEventListener('DOMContentLoaded', () => {
  try {
    window.game = new Game();
  } catch (err) {
    console.error(err);
    document.getElementById('title').innerHTML = `<div class="err">WebGL을 시작할 수 없습니다.<br><small>${err.message}</small></div>`;
  }
});
