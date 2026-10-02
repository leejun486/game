// WebAudio 절차적 효과음 + 국악풍(평조 오음계) 배경음
export class Audio {
  constructor() {
    this.ctx = null;
    this.musicOn = true;
    this.mood = 'day';
    this.nextNote = 0;
    this.step = 0;
  }

  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = 0.55;
    this.master.connect(ctx.destination);
    this.sfx = ctx.createGain();
    this.sfx.gain.value = 0.9;
    this.sfx.connect(this.master);
    this.music = ctx.createGain();
    this.music.gain.value = 0.32;
    // 음악에 살짝 잔향 (딜레이)
    const delay = ctx.createDelay();
    delay.delayTime.value = 0.28;
    const fb = ctx.createGain();
    fb.gain.value = 0.3;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 2200;
    this.music.connect(this.master);
    this.music.connect(delay);
    delay.connect(lp); lp.connect(fb); fb.connect(delay);
    lp.connect(this.master);
    const len = ctx.sampleRate;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.nextNote = ctx.currentTime + 0.3;
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

  play(name) {
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
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(this.music);
    o.start(t); o2.start(t); o.stop(t + 1.2); o2.stop(t + 1.2);
  }

  janggu(t, kind) {
    const ctx = this.ctx;
    if (kind === 'deong') { // 덩: 낮은 북 + 채
      const o = ctx.createOscillator(); o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(55, t + 0.2);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.35, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      o.connect(g); g.connect(this.music); o.start(t); o.stop(t + 0.35);
    }
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = kind === 'kung' ? 400 : 2400; f.Q.value = 1.5;
    const g = ctx.createGain(); g.gain.setValueAtTime(kind === 'kung' ? 0.3 : 0.18, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    src.connect(f); f.connect(g); g.connect(this.music); src.start(t, Math.random()); src.stop(t + 0.1);
  }

  update() {
    const ctx = this.ctx;
    if (!ctx || !this.musicOn) return;
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
    if (this.music) this.music.gain.value = this.musicOn ? 0.32 : 0;
    return this.musicOn;
  }
}
