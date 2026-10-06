// 소리: 녹음된 음원 파일(audio/)을 우선 쓰고, 못 불러오면 WebAudio 합성음으로 대신함
//  - 배경음악: 장소·상황별 곡을 2초 동안 겹쳐 바꿈, 이음매 없는 반복
//  - 환경음: 지역마다 바람·새·귀뚜라미·댓잎·풍경 소리를 깔아 둠
//  - 효과음: 자주 나는 소리는 여러 벌을 번갈아, 높낮이도 살짝 흔들어 기계적인 반복을 줄임
//  음원은 tools/audio/*.py 로 만들며, 같은 이름의 파일로 바꿔 넣으면 그대로 쓰임
const BASE = 'audio/';
const NO_DETUNE = new Set(['talk', 'levelup', 'victory', 'bigbell', 'coin', 'bell']);
const DEFAULT_VOL = { master: 0.7, music: 0.55, amb: 0.6, sfx: 0.95 };

// 창술사 소리 → 음원이 없을 때 대신 낼 합성음
const PROC_ALIAS = { thrust: 'swing', spearbeam: 'skill', leap: 'dash', spearslam: 'impact', spearfall: 'arrowhit', spinspear: 'tornado', talisman: 'cast', talisman3: 'cast', talismanhit: 'fire', fall: 'dash', rumble: 'slam', gather: 'charge' };
// 음원이 아직 없을 때 대신 내지 않는 소리 (발소리는 합성음으로 대신하면 시끄러움)
const NO_PROC = new Set(['step_grass', 'step_stone', 'step_snow', 'step_water', 'step_wood', 'step_sand']);

export class Audio {
  constructor() {
    this.ctx = null;
    this.musicOn = true;
    this.mood = 'day';
    this.nextNote = 0;
    this.step = 0;
    this.buffers = new Map();   // 경로 → AudioBuffer (불러오는 중이면 Promise)
    this.sfxMan = null;         // 효과음 이름 → 벌 수
    this.musicMan = null;       // 곡 이름 → { samples, rate }
    this.fallback = false;      // 음원을 못 쓰면 합성 음악
    this.wantMusic = null; this.wantAmb = null;
    this.layers = { music: null, amb: null };
    this.lastPlay = new Map();
    this.lastVar = new Map();
    this.vol = { ...DEFAULT_VOL };
  }

  // 설정 메뉴의 음량 (0~1)
  setVolumes(v) {
    Object.assign(this.vol, v);
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.vol.master, t, 0.03);
    this.sfx.gain.setTargetAtTime(this.vol.sfx, t, 0.03);
    this.amb.gain.setTargetAtTime(this.vol.amb, t, 0.03);
    this.music.gain.setTargetAtTime(this.musicOn ? this.vol.music : 0, t, 0.03);
  }

  get ext() {
    if (this._ext) return this._ext;
    const a = document.createElement('audio');
    this._ext = a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"') ? 'ogg' : 'mp3';
    return this._ext;
  }

  async loadManifests() {
    try {
      const [m, f] = await Promise.all([fetch(BASE + 'music/manifest.json').then((r) => r.json()), fetch(BASE + 'sfx/manifest.json').then((r) => r.json())]);
      this.musicMan = m; this.sfxMan = f;
      // 효과음은 작으니 한꺼번에 미리 불러둠
      for (const [name, n] of Object.entries(f)) for (let v = 0; v < n; v++) this.load(`sfx/${name}_${v}`).catch(() => {});
      this.applyScene(true);
    } catch (e) {
      this.fallback = true;
    }
  }

  load(path) {
    const key = path;
    const have = this.buffers.get(key);
    if (have) return have instanceof Promise ? have : Promise.resolve(have);
    const p = fetch(BASE + path + '.' + this.ext)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
      .then((ab) => new Promise((res, rej) => this.ctx.decodeAudioData(ab, res, rej)))
      .then((buf) => { this.buffers.set(key, buf); return buf; })
      .catch((e) => { this.buffers.delete(key); throw e; });
    this.buffers.set(key, p);
    return p;
  }

  ready(path) {
    const b = this.buffers.get(path);
    return b && !(b instanceof Promise) ? b : null;
  }

  // ---- 배경음악·환경음 ----
  // 게임이 매 프레임 지금 어울리는 곡과 환경음을 알려줌
  setScene(music, amb) {
    if (music === this.wantMusic && amb === this.wantAmb) return;
    this.wantMusic = music; this.wantAmb = amb;
    this.applyScene();
  }

  applyScene() {
    if (!this.ctx || !this.musicMan) return;
    this.switchLayer('music', this.musicOn ? this.wantMusic : null);
    this.switchLayer('amb', this.wantAmb);
  }

  switchLayer(kind, name) {
    const L = this.layers[kind];
    if ((L?.name || null) === (name || null)) return;
    const ctx = this.ctx, now = ctx.currentTime;
    const fadeOut = kind === 'music' && name === 'boss' ? 0.6 : 2.0;
    if (L) {
      L.gain.gain.cancelScheduledValues(now);
      L.gain.gain.setValueAtTime(L.gain.gain.value, now);
      L.gain.gain.linearRampToValueAtTime(0, now + fadeOut);
      try { L.src?.stop(now + fadeOut + 0.05); } catch (e) { /* 아직 시작 전 */ }
      L.dead = true;
    }
    this.layers[kind] = null;
    if (!name || !this.musicMan[name]) return;
    const layer = { name, gain: ctx.createGain(), src: null, dead: false };
    layer.gain.gain.value = 0;
    layer.gain.connect(kind === 'music' ? this.music : this.amb);
    this.layers[kind] = layer;
    this.load('music/' + name).then((buf) => {
      if (layer.dead) return;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      // mp3는 앞에 빈 구간(인코더 지연)이 붙을 수 있음 → 원래 길이와 비교해 반복 구간을 맞춤 (ogg는 끝에만 몇 샘플)
      const info = this.musicMan[name];
      const want = info.samples * (buf.sampleRate / info.rate);
      const extra = buf.length - want;
      const lead = this.ext === 'mp3' && extra > 1000 ? Math.min(extra, 1105 * (buf.sampleRate / info.rate)) : 0;
      src.loopStart = lead / buf.sampleRate;
      src.loopEnd = (lead + Math.min(want, buf.length - lead)) / buf.sampleRate;
      src.connect(layer.gain);
      const t = ctx.currentTime;
      src.start(t, src.loopStart);
      layer.src = src;
      layer.gain.gain.setValueAtTime(0, t);
      layer.gain.gain.linearRampToValueAtTime(1, t + (name === 'boss' ? 0.4 : 1.8));
    }).catch(() => { if (kind === 'music') { this.fallback = true; this.layers.music = null; } });
  }

  // ---- 효과음 ----
  play(name) {
    if (!this.ctx) return;
    const n = this.sfxMan?.[name];
    if (n) {
      const now = this.ctx.currentTime;
      // 한 프레임에 같은 소리가 여러 번 겹치면 귀가 아프니 걸러냄
      if (now - (this.lastPlay.get(name) ?? -1) < 0.03) return;
      let v = Math.floor(Math.random() * n);
      if (n > 1 && v === this.lastVar.get(name)) v = (v + 1) % n;
      const buf = this.ready(`sfx/${name}_${v}`);
      if (buf) {
        this.lastPlay.set(name, now);
        this.lastVar.set(name, v);
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        if (!NO_DETUNE.has(name)) src.playbackRate.value = 1 + (Math.random() - 0.5) * 0.07;
        src.connect(this.sfx);
        src.start(now);
        return;
      }
    }
    // 음원을 아직 못 불러왔을 때: 새 소리는 비슷한 기존 합성음으로
    if (NO_PROC.has(name)) return;
    this.playProc(PROC_ALIAS[name] || name);
  }

  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = this.vol.master;
    this.master.connect(ctx.destination);
    this.sfx = ctx.createGain();
    this.sfx.gain.value = this.vol.sfx;
    this.sfx.connect(this.master);
    this.amb = ctx.createGain();
    this.amb.gain.value = this.vol.amb;
    this.amb.connect(this.master);
    this.music = ctx.createGain();
    this.music.gain.value = this.musicOn ? this.vol.music : 0;
    // 합성 음악(대체용)은 따로 묶어 잔향을 걸고 음량을 맞춤
    this.procMusic = ctx.createGain();
    this.procMusic.gain.value = 0.32 / DEFAULT_VOL.music;
    this.procMusic.connect(this.music);
    // 음악에 살짝 잔향 (딜레이)
    const delay = ctx.createDelay();
    delay.delayTime.value = 0.28;
    const fb = ctx.createGain();
    fb.gain.value = 0.3;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 2200;
    this.music.connect(this.master);
    this.procMusic.connect(delay);
    delay.connect(lp); lp.connect(fb); fb.connect(delay);
    lp.connect(this.master);
    const len = ctx.sampleRate;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.nextNote = ctx.currentTime + 0.3;
    this.loadManifests();
  }

  noise(dur, { type = 'bandpass', f0 = 1000, f1 = 1000, q = 1, gain = 0.3, attack = 0.005, dest } = {}) {
    const ctx = this.ctx; if (!ctx) return;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 0.7 + Math.random() * 0.6;
    const f = ctx.createBiquadFilter();
    f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(dest || this.sfx);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.05);
  }

  tone(dur, { type = 'sine', f0 = 440, f1 = null, gain = 0.3, attack = 0.005, at = 0, dest } = {}) {
    const ctx = this.ctx; if (!ctx) return;
    const t = ctx.currentTime + at;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || this.sfx);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  // 합성 효과음 (음원이 없거나 아직 못 불러왔을 때)
  playProc(name) {
    if (!this.ctx) return;
    switch (name) {
      case 'swing': this.noise(0.16, { f0: 700, f1: 3200, q: 2.5, gain: 0.22 }); break;
      case 'swing3': this.noise(0.22, { f0: 500, f1: 3800, q: 2.2, gain: 0.3 }); this.tone(0.2, { type: 'triangle', f0: 900, f1: 1800, gain: 0.05 }); break;
      case 'hit':
        this.tone(0.14, { f0: 160, f1: 50, gain: 0.5 });
        this.noise(0.08, { type: 'highpass', f0: 2500, f1: 1500, gain: 0.25 });
        break;
      case 'crit':
        this.tone(0.2, { f0: 200, f1: 45, gain: 0.6 });
        this.noise(0.12, { type: 'highpass', f0: 3000, f1: 1200, gain: 0.3 });
        this.tone(0.18, { type: 'square', f0: 1320, f1: 1760, gain: 0.04, at: 0.02 });
        break;
      case 'drum':
        this.tone(1.1, { f0: 95, f1: 38, gain: 0.95, attack: 0.004 });
        this.tone(0.6, { f0: 180, f1: 70, gain: 0.3 });
        this.noise(0.35, { type: 'lowpass', f0: 900, f1: 120, gain: 0.5 });
        break;
      case 'draw': // 칼 뽑는 소리: 쇳소리 "스릉"
        this.noise(0.22, { type: 'highpass', f0: 2500, f1: 6000, gain: 0.22, attack: 0.01 });
        this.tone(0.25, { type: 'triangle', f0: 2600, f1: 3400, gain: 0.05 });
        this.noise(0.18, { f0: 900, f1: 3500, q: 2.5, gain: 0.25, attack: 0.02 });
        break;
      case 'sheathe': // 칼 넣는 소리: "착"
        this.tone(0.05, { type: 'square', f0: 2200, f1: 1400, gain: 0.06 });
        this.noise(0.06, { type: 'highpass', f0: 3000, f1: 2000, gain: 0.2 });
        this.tone(0.08, { type: 'square', f0: 1300, f1: 900, gain: 0.04, at: 0.04 });
        break;
      case 'bowdraw': // 시위 당기는 소리
        this.noise(0.22, { f0: 300, f1: 900, q: 6, gain: 0.08, attack: 0.08 });
        break;
      case 'bow': // 활 쏘는 소리 "팅"
        this.tone(0.18, { type: 'triangle', f0: 420, f1: 180, gain: 0.18 });
        this.noise(0.12, { f0: 2500, f1: 800, q: 1.5, gain: 0.2 });
        break;
      case 'bowskill':
        for (let i = 0; i < 4; i++) this.tone(0.16, { type: 'triangle', f0: 460 - i * 30, f1: 200, gain: 0.12, at: i * 0.04 });
        this.noise(0.6, { f0: 400, f1: 4000, q: 1.2, gain: 0.25, attack: 0.03 });
        break;
      case 'arrowhit':
        this.noise(0.06, { type: 'highpass', f0: 3000, f1: 1500, gain: 0.18 });
        this.tone(0.07, { f0: 260, f1: 120, gain: 0.25 });
        break;
      case 'cast': // 부적 던지기
        this.noise(0.18, { f0: 800, f1: 2400, q: 2, gain: 0.15 });
        this.tone(0.25, { type: 'sine', f0: 880, f1: 1320, gain: 0.06 });
        break;
      case 'fire': // 부적 폭발
        this.noise(0.4, { type: 'lowpass', f0: 2400, f1: 200, gain: 0.35, attack: 0.005 });
        this.tone(0.2, { f0: 140, f1: 60, gain: 0.3 });
        break;
      case 'chant': // 낙뢰 주문
        [523, 659, 784].forEach((f, i) => this.tone(0.35, { type: 'sine', f0: f, gain: 0.06, at: i * 0.08 }));
        break;
      case 'charge':
        this.noise(0.4, { f0: 200, f1: 3000, q: 4, gain: 0.12, attack: 0.3 });
        break;
      case 'thunder': // 낙뢰: 날카로운 균열음 + 낮은 우르릉
        this.noise(0.12, { type: 'highpass', f0: 5000, f1: 2000, gain: 0.4, attack: 0.002 });
        this.noise(1.2, { type: 'lowpass', f0: 900, f1: 60, gain: 0.6, attack: 0.01 });
        this.tone(0.9, { f0: 80, f1: 30, gain: 0.5 });
        break;
      case 'blink': // 축지법
        this.tone(0.25, { type: 'sine', f0: 1600, f1: 400, gain: 0.08 });
        this.noise(0.25, { f0: 3000, f1: 600, q: 3, gain: 0.15 });
        break;
      case 'freeze': // 빙결: 맑게 부서지는 소리
        [1568, 2093, 2637, 3136].forEach((f, i) => this.tone(0.4, { type: 'triangle', f0: f, f1: f * 0.98, gain: 0.05, at: i * 0.05 }));
        this.noise(0.5, { type: 'highpass', f0: 4000, f1: 6000, gain: 0.18, attack: 0.01 });
        this.tone(0.4, { f0: 160, f1: 60, gain: 0.3 });
        break;
      case 'tornado': // 회오리: 휘몰아치는 바람
        this.noise(1.6, { f0: 300, f1: 1600, q: 2.5, gain: 0.3, attack: 0.2 });
        this.noise(1.4, { type: 'lowpass', f0: 600, f1: 200, gain: 0.25, attack: 0.3 });
        break;
      case 'levelup':
        [523, 659, 784, 1046, 1318].forEach((f, i) => this.tone(0.45, { type: 'triangle', f0: f, gain: 0.1, at: i * 0.07 }));
        this.noise(0.8, { f0: 2000, f1: 6000, q: 1, gain: 0.12, attack: 0.1 });
        break;
      case 'howl': // 여우 울음
        this.tone(0.7, { type: 'sawtooth', f0: 500, f1: 1100, gain: 0.04, attack: 0.15 });
        this.tone(0.6, { type: 'triangle', f0: 900, f1: 600, gain: 0.05, at: 0.3 });
        break;
      case 'wail': // 귀신 곡소리
        this.tone(1.0, { type: 'sine', f0: 620, f1: 380, gain: 0.07, attack: 0.25 });
        this.tone(1.0, { type: 'sine', f0: 640, f1: 395, gain: 0.05, attack: 0.3 });
        this.noise(0.9, { f0: 600, f1: 300, q: 6, gain: 0.08, attack: 0.3 });
        break;
      case 'bell': // 서낭당 방울
        [1760, 2217, 2637].forEach((f, i) => this.tone(0.9, { type: 'sine', f0: f, gain: 0.08, at: i * 0.05 }));
        [1760, 2217].forEach((f, i) => this.tone(0.6, { type: 'sine', f0: f * 1.01, gain: 0.05, at: 0.25 + i * 0.05 }));
        break;
      case 'bigbell': // 범종: 낮고 길게 울림
        this.tone(3.2, { type: 'sine', f0: 98, gain: 0.7, attack: 0.01 });
        this.tone(3.0, { type: 'sine', f0: 196.5, gain: 0.25, attack: 0.01 });
        this.tone(2.4, { type: 'sine', f0: 263, gain: 0.12, attack: 0.02 });
        this.noise(0.25, { type: 'lowpass', f0: 800, f1: 150, gain: 0.4 });
        break;
      case 'portal':
        this.tone(1.0, { type: 'sine', f0: 300, f1: 1200, gain: 0.1, attack: 0.2 });
        this.noise(1.0, { f0: 400, f1: 3000, q: 2, gain: 0.15, attack: 0.3 });
        break;
      case 'denied':
        this.tone(0.07, { type: 'square', f0: 180, gain: 0.05 });
        this.tone(0.07, { type: 'square', f0: 140, gain: 0.05, at: 0.07 });
        break;
      case 'skill':
        this.noise(0.5, { f0: 300, f1: 5000, q: 1.8, gain: 0.32, attack: 0.02 });
        this.tone(0.45, { type: 'sawtooth', f0: 220, f1: 1760, gain: 0.05, attack: 0.02 });
        this.tone(0.6, { type: 'triangle', f0: 1320, f1: 2640, gain: 0.07, at: 0.05 });
        this.tone(0.3, { f0: 120, f1: 50, gain: 0.4 });
        break;
      case 'skillhit':
        this.tone(0.25, { type: 'square', f0: 1800, f1: 600, gain: 0.05 });
        this.noise(0.18, { type: 'highpass', f0: 4000, f1: 1500, gain: 0.25 });
        break;
      case 'burst':
        this.noise(0.5, { type: 'lowpass', f0: 3000, f1: 200, gain: 0.25 });
        this.tone(0.4, { type: 'triangle', f0: 1760, f1: 440, gain: 0.05 });
        break;
      case 'impact':
        this.tone(0.3, { f0: 110, f1: 40, gain: 0.45 });
        this.noise(0.2, { type: 'lowpass', f0: 1200, f1: 150, gain: 0.3 });
        break;
      case 'dash': this.noise(0.25, { type: 'lowpass', f0: 2400, f1: 300, gain: 0.25, attack: 0.03 }); break;
      case 'wave':
        this.noise(0.45, { f0: 400, f1: 4000, q: 1.2, gain: 0.25, attack: 0.05 });
        this.tone(0.4, { type: 'triangle', f0: 600, f1: 1400, gain: 0.08 });
        break;
      case 'hurt':
        this.tone(0.2, { type: 'square', f0: 260, f1: 90, gain: 0.12 });
        this.noise(0.12, { f0: 1200, f1: 400, gain: 0.25 });
        break;
      case 'poof':
        this.noise(0.4, { type: 'lowpass', f0: 1800, f1: 200, gain: 0.35, attack: 0.01 });
        this.tone(0.25, { type: 'triangle', f0: 500, f1: 1500, gain: 0.08 });
        break;
      case 'spawn':
        this.tone(0.5, { type: 'sine', f0: 300, f1: 900, gain: 0.08, attack: 0.1 });
        this.noise(0.5, { f0: 300, f1: 1500, q: 3, gain: 0.12, attack: 0.15 });
        break;
      case 'laugh': // 도깨비 웃음 "히히히"
        for (let i = 0; i < 3; i++) this.tone(0.09, { type: 'square', f0: 760 - i * 40, f1: 620 - i * 40, gain: 0.04, at: i * 0.11 });
        break;
      case 'slam':
        this.tone(0.8, { f0: 70, f1: 28, gain: 0.9 });
        this.noise(0.6, { type: 'lowpass', f0: 600, f1: 80, gain: 0.6 });
        break;
      case 'orb': this.tone(0.25, { type: 'sine', f0: 900, f1: 400, gain: 0.08 }); break;
      case 'talk': this.tone(0.04, { type: 'square', f0: 520 + Math.random() * 80, gain: 0.025 }); break;
      case 'coin': this.tone(0.08, { type: 'square', f0: 1320, gain: 0.04 }); this.tone(0.15, { type: 'square', f0: 1760, gain: 0.04, at: 0.07 }); break;
      case 'victory':
        [523, 659, 784, 1046].forEach((f, i) => this.tone(0.5, { type: 'triangle', f0: f, gain: 0.12, at: i * 0.12, dest: this.sfx }));
        break;
      case 'block': this.tone(0.06, { type: 'square', f0: 1800, f1: 1200, gain: 0.05 }); break;
    }
  }

  // 가야금 같은 퉁김: 삼각파 + 빠른 감쇠 + 살짝 음 내리기(농현)
  pluck(freq, t, gain = 0.18) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(freq * 1.01, t);
    o.frequency.exponentialRampToValueAtTime(freq, t + 0.08);
    if (Math.random() < 0.3) { // 농현
      o.frequency.setValueAtTime(freq, t + 0.25);
      o.frequency.linearRampToValueAtTime(freq * 1.06, t + 0.4);
      o.frequency.linearRampToValueAtTime(freq, t + 0.6);
    }
    const o2 = ctx.createOscillator();
    o2.type = 'sine';
    o2.frequency.value = freq * 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    const g2 = ctx.createGain();
    g2.gain.value = 0.25;
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(this.procMusic);
    o.start(t); o2.start(t); o.stop(t + 1.2); o2.stop(t + 1.2);
  }

  janggu(t, kind) {
    const ctx = this.ctx;
    if (kind === 'deong') { // 덩: 낮은 북 + 채
      const o = ctx.createOscillator(); o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(55, t + 0.2);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.35, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      o.connect(g); g.connect(this.procMusic); o.start(t); o.stop(t + 0.35);
    }
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = kind === 'kung' ? 400 : 2400; f.Q.value = 1.5;
    const g = ctx.createGain(); g.gain.setValueAtTime(kind === 'kung' ? 0.3 : 0.18, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    src.connect(f); f.connect(g); g.connect(this.procMusic); src.start(t, Math.random()); src.stop(t + 0.1);
  }

  update() {
    const ctx = this.ctx;
    if (!ctx || !this.musicOn) return;
    if (!this.fallback) return; // 음원 음악이 돌고 있음
    this.mood = this.wantMusic === 'battle' || this.wantMusic === 'boss' ? 'battle' : 'day';
    // 평조 (솔라도레미) 기반
    const base = this.mood === 'battle' ? 146.83 : 196;
    const scale = [0, 2, 5, 7, 9, 12, 14, 17, 19];
    const beat = this.mood === 'battle' ? 0.22 : 0.42;
    while (this.nextNote < ctx.currentTime + 0.25) {
      const t = this.nextNote;
      const s = this.step;
      // 굿거리/세마치 느낌의 장구 패턴
      const pat = this.mood === 'battle' ? ['deong', 0, 'tta', 'kung', 'deong', 0, 'tta', 'tta'] : ['deong', 0, 0, 'kung', 0, 'tta', 0, 0, 'kung', 0, 'tta', 0];
      const pk = pat[s % pat.length];
      if (pk) this.janggu(t, pk);
      // 선율: 느린 무작위 보행
      const every = this.mood === 'battle' ? 1 : 2;
      if (s % every === 0 && Math.random() < (this.mood === 'battle' ? 0.75 : 0.6)) {
        this.melIdx = Math.max(0, Math.min(scale.length - 1, (this.melIdx ?? 4) + Math.floor(Math.random() * 5) - 2));
        const f = base * Math.pow(2, scale[this.melIdx] / 12);
        this.pluck(f, t, this.mood === 'battle' ? 0.13 : 0.16);
        if (Math.random() < 0.25) this.pluck(f / 2, t, 0.1);
      }
      if (s % 16 === 0) this.pluck(base / 2, t, 0.12);
      this.step++;
      this.nextNote += beat;
    }
  }

  toggleMusic() {
    this.musicOn = !this.musicOn;
    if (this.music) this.music.gain.value = this.musicOn ? this.vol.music : 0;
    this.applyScene();
    return this.musicOn;
  }
}
