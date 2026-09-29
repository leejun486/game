'use strict';
// Elemental VFX: a lightweight particle system with pre-rendered textures.
// Fire = flames, embers, smoke, scorch marks. Ice = frost trails, crystal spikes, shards, snow.
const VFX = (() => {
  const parts = [], decals = [], spikes = [], flashes = [];
  const MAX = 900;

  // ---------------------------------------------------------------- textures
  const mk = (w, h, fn) => { const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h); return c; };
  const radial = (stops) => mk(64, 64, (g) => {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    stops.forEach(([o, c]) => gr.addColorStop(o, c));
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  });
  const TEX = {
    flame: mk(64, 96, (g) => {
      const gr = g.createRadialGradient(32, 62, 2, 32, 56, 34);
      gr.addColorStop(0, 'rgba(255,250,210,1)'); gr.addColorStop(0.25, 'rgba(255,200,70,0.95)');
      gr.addColorStop(0.55, 'rgba(255,90,20,0.75)'); gr.addColorStop(1, 'rgba(180,20,0,0)');
      g.fillStyle = gr;
      g.beginPath(); g.moveTo(32, 2); g.bezierCurveTo(54, 36, 62, 60, 50, 80); g.quadraticCurveTo(32, 96, 14, 80); g.bezierCurveTo(2, 60, 10, 36, 32, 2); g.fill();
    }),
    fireglow: radial([[0, 'rgba(255,230,150,0.9)'], [0.35, 'rgba(255,120,30,0.55)'], [1, 'rgba(255,40,0,0)']]),
    ember: radial([[0, 'rgba(255,255,220,1)'], [0.3, 'rgba(255,170,50,1)'], [1, 'rgba(255,60,0,0)']]),
    smoke: radial([[0, 'rgba(70,62,58,0.55)'], [0.6, 'rgba(50,45,42,0.25)'], [1, 'rgba(40,36,34,0)']]),
    frost: radial([[0, 'rgba(235,250,255,0.8)'], [0.4, 'rgba(150,220,255,0.45)'], [1, 'rgba(100,180,255,0)']]),
    spark: radial([[0, 'rgba(255,255,255,1)'], [0.25, 'rgba(210,240,255,0.9)'], [1, 'rgba(120,200,255,0)']]),
    arcane: radial([[0, 'rgba(255,240,255,1)'], [0.3, 'rgba(200,140,255,0.85)'], [1, 'rgba(120,60,255,0)']]),
    zap: radial([[0, 'rgba(255,255,255,1)'], [0.3, 'rgba(190,230,255,0.9)'], [1, 'rgba(90,160,255,0)']]),
    poison: radial([[0, 'rgba(230,255,200,1)'], [0.35, 'rgba(120,230,80,0.8)'], [1, 'rgba(40,160,30,0)']]),
    snow: mk(24, 24, (g) => {
      g.strokeStyle = 'rgba(255,255,255,0.95)'; g.lineWidth = 2; g.lineCap = 'round';
      for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI; g.beginPath(); g.moveTo(12 - Math.cos(a) * 9, 12 - Math.sin(a) * 9); g.lineTo(12 + Math.cos(a) * 9, 12 + Math.sin(a) * 9); g.stroke(); }
      g.fillStyle = '#fff'; g.beginPath(); g.arc(12, 12, 2, 0, 7); g.fill();
    }),
    shard: mk(20, 36, (g) => {
      const gr = g.createLinearGradient(0, 0, 20, 36); gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.5, '#aee8ff'); gr.addColorStop(1, '#3f8fd8');
      g.fillStyle = gr; g.strokeStyle = 'rgba(30,80,140,0.8)'; g.lineWidth = 1;
      g.beginPath(); g.moveTo(10, 0); g.lineTo(19, 14); g.lineTo(10, 36); g.lineTo(1, 14); g.closePath(); g.fill(); g.stroke();
      g.fillStyle = 'rgba(255,255,255,0.8)'; g.beginPath(); g.moveTo(10, 3); g.lineTo(13, 14); g.lineTo(10, 26); g.closePath(); g.fill();
    }),
    rock: mk(16, 16, (g) => { g.fillStyle = '#3a2a22'; g.beginPath(); g.moveTo(3, 6); g.lineTo(9, 1); g.lineTo(15, 7); g.lineTo(11, 15); g.lineTo(2, 13); g.fill(); g.fillStyle = '#ff7a2a'; g.fillRect(7, 7, 3, 3); }),
    bubble: mk(16, 16, (g) => { g.strokeStyle = 'rgba(170,255,120,0.9)'; g.lineWidth = 1.5; g.beginPath(); g.arc(8, 8, 5, 0, 7); g.stroke(); g.fillStyle = 'rgba(120,230,80,0.35)'; g.fill(); }),
  };

  // ---------------------------------------------------------------- particles
  function add(p) {
    if (parts.length >= MAX) parts.shift();
    parts.push(Object.assign({ t: 0, z: 0, vx: 0, vy: 0, vz: 0, g: 0, drag: 0, rot: 0, vr: 0, s0: 16, s1: 0, a: 1, add: true, fadeIn: 0 }, p));
  }
  const R = (a, b) => a + Math.random() * (b - a);

  // ---------------------------------------------------------------- emitters
  function trail(el, x, y, dt, big) {
    const n = Math.max(1, Math.round(dt * 60 * (big ? 3 : 2)));
    for (let i = 0; i < n; i++) {
      if (el === 'fire') {
        add({ tex: TEX.flame, x: x + R(-4, 4), y: y + R(-3, 3) + 30, z: 30, vx: R(-15, 15), vy: 0, vz: R(20, 60), life: R(0.25, 0.45), s0: big ? 26 : 16, s1: 4, rot: R(-0.3, 0.3) });
        if (Math.random() < 0.3) add({ tex: TEX.ember, x, y: y + 30, z: 30, vx: R(-40, 40), vz: R(30, 90), g: -60, life: R(0.4, 0.8), s0: 6, s1: 2 });
        if (Math.random() < 0.15) add({ tex: TEX.smoke, x, y: y + 30, z: 36, vx: R(-10, 10), vz: R(20, 40), life: R(0.6, 1), s0: 14, s1: 34, a: 0.8, add: false });
      } else if (el === 'ice') {
        add({ tex: TEX.frost, x: x + R(-3, 3), y: y + 30, z: 30 + R(-3, 3), vx: R(-10, 10), vz: R(-10, 10), life: R(0.3, 0.5), s0: big ? 22 : 14, s1: 4, a: 0.9 });
        if (Math.random() < 0.35) add({ tex: TEX.snow, x, y: y + 30, z: 30, vx: R(-30, 30), vz: R(-20, 20), g: 40, life: R(0.5, 0.8), s0: 9, s1: 4, vr: R(-6, 6), add: false });
      } else if (el === 'arcane') {
        add({ tex: TEX.arcane, x: x + R(-3, 3), y: y + 30, z: 30 + R(-3, 3), vx: R(-20, 20), vz: R(-20, 20), life: R(0.2, 0.4), s0: 12, s1: 2 });
      } else if (el === 'lightning') {
        add({ tex: TEX.zap, x, y: y + 30, z: 30, vx: R(-80, 80), vz: R(-80, 80), life: 0.2, s0: 8, s1: 1 });
      }
    }
  }
  function flash(x, y, r, color, dur = 0.35) { flashes.push({ x, y, r, color, t: 0, dur }); }

  function fireBurst(x, y, r = 90, strength = 1) {
    const n = Math.round(26 * strength + r * 0.2);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = R(40, 180) * (r / 90);
      add({ tex: TEX.flame, x, y, z: R(4, 20), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.55, vz: R(40, 140), drag: 2.2, life: R(0.35, 0.7), s0: R(26, 44) * strength, s1: 6, rot: R(-0.4, 0.4) });
    }
    for (let i = 0; i < 18 * strength; i++) {
      const a = Math.random() * Math.PI * 2, sp = R(80, 260);
      add({ tex: TEX.ember, x, y, z: 10, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.55, vz: R(80, 260), g: 420, life: R(0.6, 1.2), s0: 7, s1: 3 });
    }
    for (let i = 0; i < 8 * strength; i++) add({ tex: TEX.smoke, x: x + R(-r, r) * 0.5, y: y + R(-r, r) * 0.3, z: R(20, 40), vx: R(-20, 20), vz: R(25, 55), life: R(1, 1.8), s0: 24, s1: 70, a: 0.75, add: false, fadeIn: 0.15 });
    add({ tex: TEX.fireglow, x, y, z: 20, life: 0.35, s0: r * 2.2, s1: r * 2.8, a: 0.9 });
    decal('scorch', x, y, r * 0.75, 4);
    flash(x, y, r * 2.2, '#ff8a2a', 0.5);
  }
  function iceBurst(x, y, r = 70, strength = 1) {
    const n = Math.round(5 + r / 18);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + R(-0.2, 0.2), d = i === 0 ? 0 : R(0.25, 0.8) * r;
      spikes.push({ x: x + Math.cos(a) * d, y: y + Math.sin(a) * d * 0.55, h: R(30, 56) * (i === 0 ? 1.3 : 1) * strength, w: R(9, 14), lean: R(-0.35, 0.35), t: 0, dur: R(0.7, 1.0), delay: d / r * 0.12 });
    }
    for (let i = 0; i < 14 * strength; i++) {
      const a = Math.random() * Math.PI * 2, sp = R(60, 200);
      add({ tex: TEX.shard, x, y, z: R(10, 40), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.55, vz: R(60, 200), g: 500, life: R(0.5, 0.9), s0: R(8, 14), s1: 6, rot: R(0, 6), vr: R(-12, 12), add: false });
    }
    for (let i = 0; i < 12; i++) add({ tex: TEX.frost, x: x + R(-r, r) * 0.6, y: y + R(-r, r) * 0.35, z: R(5, 30), vz: R(10, 30), life: R(0.6, 1.1), s0: 30, s1: 60, a: 0.55 });
    for (let i = 0; i < 10; i++) add({ tex: TEX.snow, x, y, z: 30, vx: R(-90, 90), vy: R(-40, 40), vz: R(20, 120), g: 120, life: R(0.6, 1.2), s0: 10, s1: 4, vr: R(-6, 6), add: false });
    decal('frost', x, y, r * 0.9, 4);
    flash(x, y, r * 1.8, '#9fdcff', 0.4);
  }
  function sparkBurst(x, y, color = 'zap', n = 12) {
    for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, sp = R(80, 240); add({ tex: TEX[color] || TEX.zap, x, y, z: 30, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.6, vz: R(-60, 80), drag: 3, life: R(0.2, 0.4), s0: 10, s1: 1 }); }
    flash(x, y, 120, '#aee6ff', 0.2);
  }
  function debris(x, y, n = 10) {
    for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, sp = R(80, 220); add({ tex: TEX.rock, x, y, z: 8, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.55, vz: R(120, 280), g: 700, life: R(0.6, 1), s0: R(7, 12), s1: 6, rot: R(0, 6), vr: R(-10, 10), add: false }); }
  }
  // continuous emission for ground hazards (called every frame by Skills)
  function hazard(h, dt) {
    const k = h.t < h.dur ? 1 : 0;
    if (!k) return;
    const area = h.r / 60;
    const rnd = () => { const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * h.r; return [h.x + Math.cos(a) * d, h.y + Math.sin(a) * d * 0.55]; };
    if (h.kind === 'fire') {
      if (!h.decaled) { h.decaled = true; decal('scorch', h.x, h.y, h.r, h.dur + 1); }
      for (let i = 0; i < Math.ceil(dt * 34 * area); i++) {
        const [x, y] = rnd();
        add({ tex: TEX.flame, x, y, z: 0, vx: R(-8, 8), vz: R(50, 110), life: R(0.4, 0.8), s0: R(26, 42), s1: 6, rot: R(-0.2, 0.2) });
      }
      if (Math.random() < dt * 3) add({ tex: TEX.fireglow, x: h.x, y: h.y, z: 10, life: 0.6, s0: h.r * 2, s1: h.r * 2.2, a: 0.35 });
      if (Math.random() < dt * 14 * area) { const [x, y] = rnd(); add({ tex: TEX.ember, x, y, vx: R(-20, 20), vz: R(60, 140), g: 60, life: R(0.8, 1.3), s0: 6, s1: 2 }); }
      if (Math.random() < dt * 4 * area) { const [x, y] = rnd(); add({ tex: TEX.smoke, x, y, z: 30, vx: R(-10, 10), vz: R(20, 40), life: R(1.2, 1.8), s0: 22, s1: 60, a: 0.5, add: false, fadeIn: 0.2 }); }
    } else if (h.kind === 'ice') {
      if (!h.decaled) {
        h.decaled = true; decal('frost', h.x, h.y, h.r, h.dur + 1);
        for (let i = 0; i < 4 + area * 3; i++) { const [x, y] = rnd(); spikes.push({ x, y, h: R(18, 34), w: R(7, 11), lean: R(-0.4, 0.4), t: 0, dur: h.dur, delay: R(0, 0.3) }); }
      }
      if (Math.random() < dt * 10 * area) { const [x, y] = rnd(); add({ tex: TEX.frost, x, y, z: 4, vz: R(8, 20), life: R(0.8, 1.4), s0: 26, s1: 50, a: 0.45 }); }
      if (Math.random() < dt * 8 * area) { const [x, y] = rnd(); add({ tex: TEX.spark, x, y, z: R(4, 30), life: 0.4, s0: 10, s1: 0 }); }
    } else if (h.kind === 'blizzard') {
      if (!h.decaled) { h.decaled = true; decal('frost', h.x, h.y, h.r * 1.05, h.dur + 1); }
      for (let i = 0; i < Math.ceil(dt * 70 * area); i++) {
        const [x, y] = rnd();
        add({ tex: TEX.snow, x: x - 40, y, z: R(90, 160), vx: R(60, 110), vz: R(-170, -120), life: R(0.8, 1.1), s0: R(6, 11), s1: 5, vr: R(-5, 5), add: false, fadeIn: 0.1 });
      }
      if (Math.random() < dt * 5 * area) {
        const [x, y] = rnd();
        add({ tex: TEX.shard, x: x - 30, y, z: 150, vx: 40, vz: -380, life: 0.4, s0: 16, s1: 14, rot: 2.7, add: false, onEnd: (p) => { for (let i = 0; i < 5; i++) add({ tex: TEX.shard, x: p.x, y: p.y, z: 2, vx: R(-90, 90), vy: R(-30, 30), vz: R(60, 150), g: 500, life: 0.5, s0: 6, s1: 3, rot: R(0, 6), vr: R(-10, 10), add: false }); } });
      }
      if (Math.random() < dt * 6 * area) { const [x, y] = rnd(); add({ tex: TEX.frost, x, y, z: R(10, 60), vx: R(40, 80), life: R(0.8, 1.2), s0: 40, s1: 70, a: 0.35 }); }
    } else if (h.kind === 'bleed') {
      if (Math.random() < dt * 12 * area) { const [x, y] = rnd(); add({ tex: TEX.ember, x, y, z: 2, vz: R(20, 50), life: 0.8, s0: 7, s1: 2, a: 0.8 }); }
    }
  }
  // status visuals on monsters (called from Skills for DoTs)
  function burning(mon, dt) {
    if (Math.random() < dt * 22) add({ tex: TEX.flame, x: mon.x + R(-10, 10) * mon.scale, y: mon.y, z: R(10, 40) * mon.scale, vx: R(-8, 8), vz: R(40, 80), life: R(0.3, 0.5), s0: 16 * mon.scale, s1: 3 });
  }
  function poisoned(mon, dt) {
    if (Math.random() < dt * 8) add({ tex: TEX.bubble, x: mon.x + R(-12, 12), y: mon.y, z: R(20, 50) * mon.scale, vz: R(20, 40), life: 0.8, s0: 8, s1: 12, add: false });
  }
  function decal(kind, x, y, r, dur) { decals.push({ kind, x, y, r, t: 0, dur, seed: Math.random() * 100 }); if (decals.length > 40) decals.shift(); }

  // ---------------------------------------------------------------- update / draw
  function update(dt) {
    for (const p of parts) {
      p.t += dt;
      const dr = p.drag ? Math.max(0, 1 - p.drag * dt) : 1;
      p.vx *= dr; p.vy *= dr; p.vz *= dr;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.vz -= p.g * dt; p.rot += p.vr * dt;
      if (p.g > 0 && p.z < 0) { p.z = 0; p.vz = -p.vz * 0.3; p.vx *= 0.6; p.vy *= 0.6; }
      if (p.t >= p.life && p.onEnd) { p.onEnd(p); p.onEnd = null; }
    }
    for (let i = parts.length - 1; i >= 0; i--) if (parts[i].t >= parts[i].life) parts.splice(i, 1);
    for (const s of spikes) s.t += dt;
    for (let i = spikes.length - 1; i >= 0; i--) {
      const s = spikes[i];
      if (s.t >= s.dur + s.delay) {
        for (let j = 0; j < 4; j++) add({ tex: TEX.shard, x: s.x, y: s.y, z: s.h * 0.5, vx: R(-80, 80), vy: R(-30, 30), vz: R(40, 160), g: 500, life: R(0.4, 0.7), s0: 7, s1: 4, rot: R(0, 6), vr: R(-12, 12), add: false });
        spikes.splice(i, 1);
      }
    }
    for (const d of decals) d.t += dt;
    for (let i = decals.length - 1; i >= 0; i--) if (decals[i].t > decals[i].dur) decals.splice(i, 1);
    for (const f of flashes) f.t += dt;
    for (let i = flashes.length - 1; i >= 0; i--) if (flashes[i].t > flashes[i].dur) flashes.splice(i, 1);
  }
  // scorch / frost marks under everything
  function drawGround(ctx, cam) {
    for (const d of decals) {
      const x = d.x - cam.x, y = d.y - cam.y;
      const k = Math.min(1, d.t * 6) * Math.min(1, (d.dur - d.t) / 1);
      ctx.save(); ctx.translate(x, y); ctx.scale(1, 0.55);
      if (d.kind === 'scorch') {
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, d.r);
        g.addColorStop(0, `rgba(20,10,5,${0.55 * k})`); g.addColorStop(0.7, `rgba(40,20,10,${0.35 * k})`); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, d.r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = `rgba(255,110,30,${0.5 * k * (0.7 + Math.sin(d.t * 6 + d.seed) * 0.3)})`; ctx.lineWidth = 2;
        for (let i = 0; i < 7; i++) {
          const a = d.seed + i * 0.9; ctx.beginPath(); ctx.moveTo(Math.cos(a) * d.r * 0.15, Math.sin(a) * d.r * 0.15);
          ctx.lineTo(Math.cos(a + 0.2) * d.r * 0.5, Math.sin(a + 0.2) * d.r * 0.5); ctx.lineTo(Math.cos(a - 0.1) * d.r * 0.85, Math.sin(a - 0.1) * d.r * 0.85); ctx.stroke();
        }
      } else {
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, d.r);
        g.addColorStop(0, `rgba(230,248,255,${0.55 * k})`); g.addColorStop(0.7, `rgba(160,215,255,${0.35 * k})`); g.addColorStop(1, 'rgba(120,190,255,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, d.r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = `rgba(255,255,255,${0.6 * k})`; ctx.lineWidth = 1.5;
        for (let i = 0; i < 9; i++) {
          const a = d.seed + i * 0.7, r1 = d.r * (0.3 + ((i * 37) % 10) / 16);
          ctx.beginPath(); ctx.moveTo(Math.cos(a) * r1 * 0.3, Math.sin(a) * r1 * 0.3); ctx.lineTo(Math.cos(a) * r1, Math.sin(a) * r1);
          ctx.lineTo(Math.cos(a + 0.3) * r1 * 0.8, Math.sin(a + 0.3) * r1 * 0.8); ctx.stroke();
        }
      }
      ctx.restore();
    }
  }
  function drawSpike(ctx, s, x, y) {
    const lt = s.t - s.delay;
    if (lt < 0) return;
    const grow = Math.min(1, lt / 0.12), fade = Math.min(1, (s.dur - lt) / 0.15);
    const h = s.h * grow, w = s.w;
    ctx.save(); ctx.translate(x, y); ctx.rotate(s.lean); ctx.globalAlpha = Math.max(0, fade);
    const g = ctx.createLinearGradient(-w, -h, w, 0);
    g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(0.45, 'rgba(160,225,255,0.9)'); g.addColorStop(1, 'rgba(60,140,220,0.85)');
    ctx.fillStyle = g; ctx.strokeStyle = 'rgba(30,90,160,0.9)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, -h); ctx.lineTo(w * 0.55, -h * 0.35); ctx.lineTo(w * 0.35, 0); ctx.lineTo(-w * 0.35, 0); ctx.lineTo(-w * 0.55, -h * 0.35); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.beginPath(); ctx.moveTo(0, -h); ctx.lineTo(-w * 0.2, -h * 0.3); ctx.lineTo(0, -h * 0.05); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function draw(ctx, cam) {
    // flashes (additive glow pools)
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (const f of flashes) {
      const k = 1 - f.t / f.dur, x = f.x - cam.x, y = f.y - cam.y;
      const g = ctx.createRadialGradient(x, y - 20, 0, x, y - 20, f.r);
      g.addColorStop(0, Looks.hexA(f.color, 0.45 * k)); g.addColorStop(1, Looks.hexA(f.color, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y - 20, f.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
    // spikes sorted by y
    spikes.sort((a, b) => a.y - b.y);
    for (const s of spikes) drawSpike(ctx, s, s.x - cam.x, s.y - cam.y);
    // particles: normal blend first (smoke, shards), then additive (fire, frost)
    for (const pass of [false, true]) {
      ctx.save();
      ctx.globalCompositeOperation = pass ? 'lighter' : 'source-over';
      for (const p of parts) {
        if (p.add !== pass) continue;
        const k = p.t / p.life;
        const size = p.s0 + (p.s1 - p.s0) * k;
        let a = p.a * (1 - k);
        if (p.fadeIn) a *= Math.min(1, p.t / p.fadeIn);
        if (a <= 0.01 || size <= 0.5) continue;
        const x = p.x - cam.x, y = p.y - p.z - cam.y;
        const tex = p.tex, asp = tex.height / tex.width;
        ctx.globalAlpha = a;
        if (p.rot) { ctx.save(); ctx.translate(x, y); ctx.rotate(p.rot); ctx.drawImage(tex, -size / 2, -size * asp / 2, size, size * asp); ctx.restore(); }
        else ctx.drawImage(tex, x - size / 2, y - size * asp / 2, size, size * asp);
      }
      ctx.restore();
    }
  }
  // frozen / chilled overlays on monsters
  function status(ctx, cam, m) {
    const x = m.x - cam.x, y = m.y - cam.y, s = m.scale;
    if (m.frozenT > 0) {
      const w = 22 * s, h = 58 * s;
      ctx.save();
      const g = ctx.createLinearGradient(x - w, y - h, x + w, y);
      g.addColorStop(0, 'rgba(240,252,255,0.65)'); g.addColorStop(0.5, 'rgba(150,215,255,0.45)'); g.addColorStop(1, 'rgba(80,160,230,0.55)');
      ctx.fillStyle = g; ctx.strokeStyle = 'rgba(220,245,255,0.9)'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x - w, y); ctx.lineTo(x - w * 1.1, y - h * 0.55); ctx.lineTo(x - w * 0.5, y - h); ctx.lineTo(x + w * 0.6, y - h * 0.95);
      ctx.lineTo(x + w * 1.1, y - h * 0.5); ctx.lineTo(x + w, y); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.beginPath(); ctx.moveTo(x - w * 0.6, y - h * 0.8); ctx.lineTo(x - w * 0.2, y - h * 0.3); ctx.stroke();
      ctx.restore();
    } else if (m.chillT > 0) {
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(x, y - 28 * s, 0, x, y - 28 * s, 30 * s);
      g.addColorStop(0, 'rgba(120,200,255,0.35)'); g.addColorStop(1, 'rgba(120,200,255,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y - 28 * s, 30 * s, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      if (Math.random() < 0.08) add({ tex: TEX.snow, x: m.x + R(-12, 12), y: m.y, z: R(20, 50) * s, vz: -20, life: 0.7, s0: 7, s1: 4, add: false });
    }
  }
  function lights() {
    const out = [];
    for (const f of flashes) out.push([f.x, f.y - 20, f.r * 0.8]);
    return out;
  }
  // ---------------------------------------------------------------- projectile looks
  function drawFireball(ctx, x, y, a, big) {
    const r = big ? 18 : 11, t = performance.now() / 1000;
    ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(TEX.fireglow, -r * 3, -r * 3, r * 6, r * 6);
    for (let i = 0; i < 4; i++) {
      ctx.save(); ctx.rotate(-Math.PI / 2 + Math.sin(t * 20 + i) * 0.25); ctx.globalAlpha = 0.8;
      const s = r * (2.4 - i * 0.3); ctx.drawImage(TEX.flame, -s / 2, -s * 0.2, s, s * 1.5); ctx.restore();
    }
    ctx.drawImage(TEX.ember, -r, -r, r * 2, r * 2);
    ctx.restore();
  }
  function drawIceLance(ctx, x, y, a, big) {
    const L = big ? 44 : 32, W = big ? 9 : 7;
    ctx.save(); ctx.translate(x, y); ctx.rotate(a);
    ctx.globalCompositeOperation = 'lighter'; ctx.drawImage(TEX.frost, -L, -L * 0.6, L * 2, L * 1.2);
    ctx.globalCompositeOperation = 'source-over';
    const g = ctx.createLinearGradient(-L, 0, L * 0.6, 0); g.addColorStop(0, 'rgba(120,200,255,0.2)'); g.addColorStop(0.6, '#bfeaff'); g.addColorStop(1, '#ffffff');
    ctx.fillStyle = g; ctx.strokeStyle = 'rgba(40,110,190,0.9)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(L * 0.6, 0); ctx.lineTo(0, -W); ctx.lineTo(-L, 0); ctx.lineTo(0, W); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.beginPath(); ctx.moveTo(L * 0.55, 0); ctx.lineTo(0, -W * 0.45); ctx.lineTo(-L * 0.5, 0); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function drawFrostArrow(ctx, x, y, a) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(a);
    ctx.globalCompositeOperation = 'lighter'; ctx.drawImage(TEX.frost, -26, -14, 40, 28);
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = '#cfeeff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-18, 0); ctx.lineTo(8, 0); ctx.stroke();
    ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.moveTo(14, 0); ctx.lineTo(5, -4.5); ctx.lineTo(5, 4.5); ctx.fill();
    ctx.fillStyle = '#7fd4ff'; ctx.fillRect(-18, -3, 5, 6);
    ctx.restore();
  }
  function drawFireArrow(ctx, x, y, a) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(a);
    ctx.globalCompositeOperation = 'lighter'; ctx.drawImage(TEX.fireglow, -26, -14, 40, 28);
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = '#6b3a1a'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-18, 0); ctx.lineTo(8, 0); ctx.stroke();
    ctx.fillStyle = '#ffd24a'; ctx.beginPath(); ctx.moveTo(14, 0); ctx.lineTo(5, -4.5); ctx.lineTo(5, 4.5); ctx.fill();
    ctx.restore();
  }

  return { trail, fireBurst, iceBurst, sparkBurst, debris, hazard, burning, poisoned, decal, flash, update, drawGround, draw, status, lights, drawFireball, drawIceLance, drawFrostArrow, drawFireArrow, get count() { return parts.length; } };
})();
