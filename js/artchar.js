'use strict';
// Illustration field characters (test): the class standing art is drawn on the field and brought to
// life with code — walk bounce/lean/sway, facing flip, attack lunges, a sword arc, casting lift,
// hit flash and falling over on death. Monsters and NPCs keep their sprites.
const ArtChar = (() => {
  const H = 104; // on-field height in world units
  const SS = 3;  // pre-scaled supersampling so per-frame draws stay cheap and sharp
  // which way each illustration naturally faces (+1 right, -1 left) and where its weapon hand sits
  // (fractions of width/height from the feet, in the art's own orientation)
  const INFO = {
    'assets/art/knight.webp': { face: 1, hand: [0.12, 0.62], kind: 'sword' },
    'assets/art/elf.webp': { face: 1, hand: [0.32, 0.55], kind: 'bow' },
    'assets/art/mage.webp': { face: -1, hand: [-0.38, 0.8], kind: 'staff' },
  };
  const cache = {};

  function build(src) {
    let c = cache[src];
    if (!c) c = cache[src] = { img: UI.artImg(src), cv: null };
    if (c.cv || !c.img.complete || !c.img.naturalWidth) return c.cv ? c : null;
    const h = H * SS, w = Math.round(h * c.img.width / c.img.height), pad = 3 * SS;
    // body with a soft dark outline so it reads against any ground
    const sil = document.createElement('canvas'); sil.width = w + pad * 2; sil.height = h + pad * 2;
    const sg = sil.getContext('2d'); sg.imageSmoothingQuality = 'high';
    sg.drawImage(c.img, pad, pad, w, h);
    sg.globalCompositeOperation = 'source-in'; sg.fillStyle = 'rgba(20,12,18,0.85)'; sg.fillRect(0, 0, sil.width, sil.height);
    const cv = document.createElement('canvas'); cv.width = sil.width; cv.height = sil.height;
    const g = cv.getContext('2d'); g.imageSmoothingQuality = 'high';
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; g.drawImage(sil, Math.cos(a) * 1.6 * SS, Math.sin(a) * 1.6 * SS); }
    g.drawImage(c.img, pad, pad, w, h);
    // white silhouette for the hit flash
    const fl = document.createElement('canvas'); fl.width = cv.width; fl.height = cv.height;
    const fg = fl.getContext('2d'); fg.drawImage(cv, 0, 0); fg.globalCompositeOperation = 'source-in'; fg.fillStyle = '#fff'; fg.fillRect(0, 0, fl.width, fl.height);
    Object.assign(c, { cv, fl, w: cv.width / SS, h: cv.height / SS, pad: pad / SS, info: INFO[src] || { face: 1, hand: [0.2, 0.6], kind: 'sword' } });
    return c;
  }
  // which illustration an entity should use (null = keep the sprite)
  function srcFor(e) {
    if (!Game.gfx.art || !e.cls) return null;
    if (e === Game.player && e.s.card) { const cd = D.CARD_BY_ID[e.s.card]; return cd && cd.art ? cd.art : null; }
    return D.CLASSES[e.cls] && D.CLASSES[e.cls].art;
  }
  const on = (e) => { const s = srcFor(e); return !!(s && build(s)); };

  // body transform for the current state
  function pose(e, c, now) {
    const P = { dx: 0, dy: 0, rot: 0, sx: 1, sy: 1, lie: 0 };
    if (e.dir === 1) e.artFace = -1; else if (e.dir === 3) e.artFace = 1;
    const face = e.artFace || c.info.face;
    P.face = face;
    if (e.dead) { P.lie = Math.min(1, e.deadT / 0.35); return P; }
    const ac = e.action;
    if (ac && !ac.idle) {
      const k = Math.min(1, ac.t / ac.dur), hit = ac.hitAt || 0.5;
      if (ac.anim === 'slash' || ac.anim === 'thrust' && c.info.kind === 'sword') {
        if (k < hit) { const u = k / hit; P.rot = -face * 0.14 * u; P.dx = -face * 3 * u; P.sy = 1 + 0.03 * u; }
        else { const u = (k - hit) / (1 - hit); P.rot = face * 0.16 * (1 - u); P.dx = face * 12 * (1 - u * 0.7); P.sy = 0.97; P.sx = 1.03; }
      } else if (ac.anim === 'shoot') {
        if (k < hit) { const u = k / hit; P.rot = -face * 0.06 * u; P.sx = 1 - 0.03 * u; }
        else { const u = (k - hit) / (1 - hit); P.dx = -face * 6 * (1 - u); P.rot = -face * 0.04 * (1 - u); }
      } else {
        const u = Math.sin(Math.PI * k);
        P.dy = -6 * u; P.sy = 1 + 0.04 * u; P.rot = face * 0.05 * u;
      }
      return P;
    }
    if (e.moving) {
      const ph = (e.walkT || 0) * 11;
      P.dy = -Math.abs(Math.sin(ph)) * 5;
      P.rot = Math.sin(ph) * 0.045 + face * 0.05;
      const land = 1 - Math.abs(Math.sin(ph));
      P.sy = 1 - land * 0.035; P.sx = 1 + land * 0.025;
      return P;
    }
    const b = Math.sin(now * 2.2);
    P.sy = 1 + b * 0.012; P.sx = 1 - b * 0.006;
    if (ac && ac.idle) { const k = Math.min(1, ac.t / ac.dur); P.dy = -Math.sin(Math.PI * k) * 8; P.rot = Math.sin(k * Math.PI * 2) * 0.05; }
    return P;
  }
  function blit(g, c, P, flash) {
    const flip = P.face * c.info.face;
    g.save();
    g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
    g.rotate(P.lie * P.face * Math.PI / 2 * 0.95);
    g.rotate(P.rot);
    g.scale(P.sx * flip, P.sy);
    const x = -c.w / 2, y = -c.h + c.pad;
    g.drawImage(c.cv, x, y, c.w, c.h);
    if (flash > 0) { g.globalCompositeOperation = 'lighter'; g.globalAlpha *= Math.min(1, flash * 5) * 0.55; g.drawImage(c.fl, x, y, c.w, c.h); }
    g.restore();
  }
  // draw on the field at the entity's feet; returns the weapon point (screen space) like drawComposite
  function draw(ctx, cam, e, alpha = 1) {
    const c = build(srcFor(e));
    const now = performance.now() / 1000;
    const P = pose(e, c, now);
    const x = e.x - cam.x, y = e.y - cam.y;
    ctx.save();
    ctx.globalAlpha = alpha * 0.32; ctx.fillStyle = '#000';
    ctx.beginPath(); ctx.ellipse(x, y, 22 * (1 - P.lie * 0.2) + P.lie * 26, 7, 0, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = alpha;
    ctx.translate(Math.round(x + P.dx), Math.round(y + P.dy));
    blit(ctx, c, P, e.flash);
    ctx.restore();
    // weapon point for trails, motes and projectile glow
    const flip = P.face * c.info.face;
    const hx = x + P.dx + c.info.hand[0] * c.w * flip, hy = y + P.dy - c.info.hand[1] * H;
    let tx = hx, ty = hy;
    const ac = e.action;
    if (c.info.kind === 'sword' && ac && !ac.idle && !e.dead) {
      const k = Math.min(1, ac.t / ac.dur), a = -2.3 + k * 2.9, r = 62;
      tx = x + P.dx + Math.cos(a) * r * P.face; ty = y - 56 + Math.sin(a) * r;
    }
    return { cx: hx, cy: hy, tx, ty };
  }
  // rider on a mount: feet placed so the hips line up with the mount's saddle crop
  function riderFn(e, face) {
    const c = build(srcFor(e));
    return (g, fx, fy) => {
      const P = { dx: 0, dy: 0, rot: 0, sx: 1, sy: 1, lie: 0, face };
      g.save(); g.translate(fx, fy + H * 0.42 - 10); blit(g, c, P, e.flash); g.restore();
    };
  }
  return { H, on, draw, riderFn };
})();
