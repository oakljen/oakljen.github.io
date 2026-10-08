/* B2 preview — procedural scene painter.
   Every image on the page is painted here at load: no photos, no external assets.
   Each painter returns a canvas; app.js turns them into object URLs. */

const Scenes = (() => {
  // ── deterministic randomness ───────────────────────────────
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function noise1(seed) {
    const r = rng(seed), N = 1024, v = new Float32Array(N);
    for (let i = 0; i < N; i++) v[i] = r();
    return x => {
      const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
      const a = v[((i % N) + N) % N], b = v[(((i + 1) % N) + N) % N];
      return a + (b - a) * u;
    };
  }

  function noise2(seed) {
    const r = rng(seed), N = 256, v = new Float32Array(N * N);
    for (let i = 0; i < v.length; i++) v[i] = r();
    const at = (x, y) => v[(((y % N) + N) % N) * N + (((x % N) + N) % N)];
    return (x, y) => {
      const xi = Math.floor(x), yi = Math.floor(y);
      const fx = x - xi, fy = y - yi;
      const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
      const a = at(xi, yi), b = at(xi + 1, yi), c = at(xi, yi + 1), d = at(xi + 1, yi + 1);
      return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
    };
  }

  const fbm1 = (n, x, oct = 5) => {
    let s = 0, a = 0.5, f = 1, t = 0;
    for (let o = 0; o < oct; o++) { s += a * n(x * f); t += a; a *= 0.5; f *= 2.03; }
    return s / t;
  };
  const fbm2 = (n, x, y, oct = 4) => {
    let s = 0, a = 0.5, f = 1, t = 0;
    for (let o = 0; o < oct; o++) { s += a * n(x * f, y * f); t += a; a *= 0.5; f *= 2.03; }
    return s / t;
  };

  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const mix = (c1, c2, t) => [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)];
  const rgb = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;

  function canvas(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return c;
  }

  // ── sky ────────────────────────────────────────────────────
  function sky(ctx, W, H, horizon) {
    const g = ctx.createLinearGradient(0, 0, 0, horizon);
    g.addColorStop(0, '#9fb0c4');
    g.addColorStop(0.45, '#d9d3d3');
    g.addColorStop(1, '#f1ddd0');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, horizon + 40);
    // low warm sun haze
    const s = ctx.createRadialGradient(W * 0.72, horizon * 0.85, 0, W * 0.72, horizon * 0.85, W * 0.6);
    s.addColorStop(0, 'rgba(255,226,200,0.55)');
    s.addColorStop(1, 'rgba(255,226,200,0)');
    ctx.fillStyle = s;
    ctx.fillRect(0, 0, W, horizon + 40);
  }

  // ── mountain range, per-pixel: rock gullies, snow, haze ────
  function mountains(ctx, W, H, o) {
    const n = noise1(o.seed), n2 = noise2(o.seed + 7);
    const ridge = new Float32Array(W);
    for (let x = 0; x < W; x++) {
      let h = 0;
      for (const p of o.peaks) {
        const d = (x - p.x * W) / (p.w * W);
        h += p.h * H * Math.exp(-d * d);
      }
      const detail = (fbm1(n, x / W * 9, 6) - 0.5) * o.rough * H;
      ridge[x] = o.base * H - h - detail * clamp(h / (H * 0.12));
    }
    const top = Math.max(0, Math.floor(Math.min(...ridge)) - 2);
    const bottom = Math.ceil(o.base * H + 4);
    const img = ctx.getImageData(0, top, W, bottom - top);
    const D = img.data;
    const rockDark = o.rockDark, rockLight = o.rockLight, snow = [244, 239, 236], haze = o.haze;
    for (let x = 0; x < W; x++) {
      const r0 = ridge[x];
      const sw = Math.round(W / 120);
      const slope = (ridge[Math.min(W - 1, x + sw)] - ridge[Math.max(0, x - sw)]) / (2 * sw);
      for (let y = Math.max(top, Math.floor(r0)); y < bottom; y++) {
        const depth = y - r0;
        const g = fbm2(n2, (x + (y - r0) * 0.55) / 14, (y - x * 0.25) / 26, 4);
        const g2 = n2(x / 60, y / 90);
        let lit = clamp(0.5 - Math.tanh(slope * 1.4) * 0.35 + (g - 0.5) * 1.4 + (g2 - 0.5) * 0.5);
        let c = mix(rockDark, rockLight, lit);
        const snowLine = o.snowLine * H + (fbm2(n2, x / 60, 3, 3) - 0.5) * 120;
        if (y < snowLine && g > 0.5 - (snowLine - y) / 180) {
          c = mix(c, mix([150, 140, 150], snow, clamp(lit + 0.25)), clamp((snowLine - y) / 40) * 0.95);
        }
        const hz = clamp(Math.pow((y - top) / (bottom - top), 1.6) * o.hazeAmt + o.hazeBase);
        c = mix(c, haze, hz);
        const edge = clamp(depth); // antialias the ridge
        const i = ((y - top) * W + x) * 4;
        D[i] = lerp(D[i], c[0], edge); D[i + 1] = lerp(D[i + 1], c[1], edge); D[i + 2] = lerp(D[i + 2], c[2], edge);
      }
    }
    ctx.putImageData(img, 0, top);
  }

  function fog(ctx, W, H, y, spread, amt, seed) {
    const r = rng(seed);
    for (let i = 0; i < 26; i++) {
      const x = r() * W, yy = y + (r() - 0.5) * spread, rx = W * (0.08 + r() * 0.18);
      ctx.save();
      ctx.translate(x, yy);
      ctx.scale(1, 0.22 + r() * 0.12);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
      g.addColorStop(0, `rgba(246,236,232,${amt * (0.5 + r() * 0.5)})`);
      g.addColorStop(1, 'rgba(246,236,232,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(0, 0, rx, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }

  // ── rolling grass hills, painted with batched strokes ──────
  const GRASS_BUCKETS = 28;
  function hills(ctx, W, H, layers, o) {
    const r = rng(o.seed);
    const clumps = noise2(o.seed + 3);
    layers.forEach((L, li) => {
      const n = noise1(o.seed + li * 17);
      const ridge = x => L.y * H
        - L.amp * H * (0.5 + 0.5 * Math.sin(x / W * Math.PI * L.freq + L.phase))
        - (fbm1(n, x / W * 4, 4) - 0.5) * L.rough * H;
      const path = new Path2D();
      path.moveTo(-10, H + 10);
      for (let x = -10; x <= W + 10; x += 6) path.lineTo(x, ridge(x));
      path.lineTo(W + 10, H + 10);
      path.closePath();

      const depth = L.depth; // 0 far … 1 near
      const crest = L.y * H - L.amp * H;
      const g = ctx.createLinearGradient(0, crest, 0, crest + L.shade * H);
      const base = mix(o.far, o.near, depth);
      g.addColorStop(0, rgb(mix(base, [235, 120, 70], 0.35)));
      g.addColorStop(0.35, rgb(base));
      g.addColorStop(1, rgb(mix(base, [25, 4, 4], 0.55)));
      ctx.save();
      ctx.clip(path);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // grass strokes: bucket by colour so we stroke ~28 paths, not 80k
      const buckets = Array.from({ length: GRASS_BUCKETS }, () => new Path2D());
      const len = lerp(1.5, 9, depth) * (W / 1600);
      const count = Math.floor(W * H * L.density * lerp(0.012, 0.03, depth));
      for (let i = 0; i < count; i++) {
        const x = r() * W, y = crest - 10 + r() * (H - crest + 10);
        const ry = ridge(x);
        if (y < ry) continue;
        const dc = (y - ry) / (H * 0.25);
        const cl = fbm2(clumps, x / 34, y / 22, 3);
        let k = clamp(0.62 - dc * 0.55 + (cl - 0.5) * 0.7 + (r() - 0.5) * 0.45);
        const b = Math.min(GRASS_BUCKETS - 1, Math.floor(k * GRASS_BUCKETS));
        const l = len * (0.6 + r() * 0.8);
        const lean = (r() - 0.5) * 0.9;
        buckets[b].moveTo(x, y);
        buckets[b].lineTo(x + lean * l, y - l);
      }
      ctx.lineWidth = lerp(0.8, 2.2, depth) * (W / 1600);
      ctx.lineCap = 'round';
      const fogTint = 1 - depth;
      buckets.forEach((p, b) => {
        const t = b / (GRASS_BUCKETS - 1);
        // dark wine → crimson → hot orange → gold tips
        let c = t < 0.4 ? mix([45, 6, 6], [140, 20, 14], t / 0.4)
          : t < 0.8 ? mix([140, 20, 14], [214, 62, 30], (t - 0.4) / 0.4)
          : mix([214, 62, 30], [240, 150, 70], (t - 0.8) / 0.2);
        c = mix(c, o.fogColor, fogTint * 0.55);
        ctx.strokeStyle = rgb(c, 0.85);
        ctx.stroke(p);
      });
      ctx.restore();
      if (L.after) L.after(ridge);
    });
  }

  // ── red acacia tree ────────────────────────────────────────
  function tree(ctx, x, y, s, seed) {
    const r = rng(seed);
    ctx.save();
    ctx.strokeStyle = '#2a0b08';
    ctx.lineCap = 'round';
    ctx.lineWidth = s * 0.05;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + s * 0.02, y - s * 0.3, x - s * 0.02, y - s * 0.5);
    ctx.stroke();
    ctx.lineWidth = s * 0.025;
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i - 2) * 0.45;
      ctx.beginPath();
      ctx.moveTo(x - s * 0.02, y - s * 0.45);
      ctx.lineTo(x + Math.cos(a) * s * 0.42, y - s * 0.5 + Math.sin(a) * s * 0.22);
      ctx.stroke();
    }
    // canopy: flattened cloud of dots
    for (let i = 0; i < 900; i++) {
      const a = r() * Math.PI * 2, rr = Math.sqrt(r());
      const px = x + Math.cos(a) * rr * s * 0.5;
      const py = y - s * 0.66 + Math.sin(a) * rr * s * 0.17;
      const t = clamp(0.75 - (py - (y - s * 0.66)) / (s * 0.2) + (r() - 0.5) * 0.6);
      ctx.fillStyle = rgb(mix([70, 6, 8], [225, 48, 38], t));
      ctx.beginPath(); ctx.arc(px, py, s * (0.012 + r() * 0.018), 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }

  // ── the B2 pod ─────────────────────────────────────────────
  function pod(ctx, cx, cy, s, glow = 1) {
    const rx = s / 2, ry = s * 0.37, flat = cy + ry * 0.62;
    ctx.save();
    // ground shadow + contact
    const sh = ctx.createRadialGradient(cx, flat, 0, cx, flat, rx * 1.35);
    sh.addColorStop(0, 'rgba(20,2,2,0.65)');
    sh.addColorStop(1, 'rgba(20,2,2,0)');
    ctx.save(); ctx.translate(cx, flat); ctx.scale(1, 0.2); ctx.translate(-cx, -flat);
    ctx.fillStyle = sh; ctx.beginPath(); ctx.arc(cx, flat, rx * 1.35, 0, Math.PI * 2); ctx.fill();
    ctx.restore();

    const body = new Path2D();
    body.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.beginPath();
    ctx.rect(cx - rx - 2, cy - ry - 2, s + 4, flat - (cy - ry) + 2);
    ctx.clip();
    ctx.clip(body);
    const g = ctx.createRadialGradient(cx - rx * 0.35, cy - ry * 0.6, s * 0.02, cx - rx * 0.1, cy - ry * 0.1, s * 0.62);
    g.addColorStop(0, '#ffffff');
    g.addColorStop(0.45, '#eceae8');
    g.addColorStop(0.8, '#a9a6a8');
    g.addColorStop(1, '#6e6a6e');
    ctx.fillStyle = g;
    ctx.fillRect(cx - rx, cy - ry, s, ry * 2);
    // red bounce light from the grass
    const b = ctx.createLinearGradient(0, cy, 0, flat);
    b.addColorStop(0, 'rgba(190,40,20,0)');
    b.addColorStop(1, 'rgba(190,40,20,0.35)');
    ctx.fillStyle = b;
    ctx.fillRect(cx - rx, cy, s, flat - cy);
    // panel seams
    ctx.strokeStyle = 'rgba(40,36,40,0.22)';
    ctx.lineWidth = Math.max(1, s * 0.006);
    for (const k of [0.25, 0.55, 0.82]) {
      ctx.beginPath(); ctx.ellipse(cx + rx * 0.15, cy, rx * k, ry * 1.02, 0, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.beginPath(); ctx.ellipse(cx, cy - ry * 0.15, rx * 1.02, ry * 0.35, 0, Math.PI, Math.PI * 2); ctx.stroke();
    // window band, front-left
    const wx = cx - rx * 0.62, wy = cy + ry * 0.05;
    ctx.save();
    ctx.beginPath(); ctx.ellipse(wx, wy, rx * 0.36, ry * 0.3, -0.12, 0, Math.PI * 2);
    const wg = ctx.createRadialGradient(wx + rx * 0.1, wy, 0, wx, wy, rx * 0.4);
    wg.addColorStop(0, `rgba(255,170,80,${0.95 * glow})`);
    wg.addColorStop(0.45, `rgba(170,70,25,${0.9 * glow + 0.1})`);
    wg.addColorStop(1, '#170d0b');
    ctx.fillStyle = wg; ctx.fill();
    ctx.lineWidth = s * 0.018; ctx.strokeStyle = '#2b2627'; ctx.stroke();
    ctx.restore();
    // specular
    const sp = ctx.createRadialGradient(cx - rx * 0.3, cy - ry * 0.7, 0, cx - rx * 0.3, cy - ry * 0.7, rx * 0.5);
    sp.addColorStop(0, 'rgba(255,255,255,0.7)');
    sp.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = sp; ctx.fillRect(cx - rx, cy - ry, s, ry);
    ctx.restore();
    // door steps
    ctx.fillStyle = '#d9d7d6';
    ctx.fillRect(cx + rx * 0.35, flat - s * 0.01, s * 0.07, s * 0.035);
    ctx.fillStyle = '#5a6f8a';
    ctx.fillRect(cx + rx * 0.37, flat - s * 0.07, s * 0.012, s * 0.06);
  }

  // ── dirt path winding toward the pod ───────────────────────
  function trail(ctx, pts, w0, w1) {
    ctx.save();
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < pts.length - 1; i++) {
        const t = i / (pts.length - 1);
        ctx.strokeStyle = pass ? 'rgba(170,120,95,0.55)' : 'rgba(60,25,18,0.6)';
        ctx.lineWidth = lerp(w0, w1, t) * (pass ? 0.55 : 1);
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(...pts[i]); ctx.lineTo(...pts[i + 1]); ctx.stroke();
      }
    }
    ctx.restore();
  }
  function curvePts(a, b, c, d, n = 60) {
    const out = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n, u = 1 - t;
      out.push([
        u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0],
        u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1],
      ]);
    }
    return out;
  }

  function grain(ctx, W, H, amt, seed) {
    const r = rng(seed);
    const img = ctx.getImageData(0, 0, W, H), D = img.data;
    for (let i = 0; i < D.length; i += 4) {
      const v = (r() - 0.5) * amt;
      D[i] += v; D[i + 1] += v; D[i + 2] += v;
    }
    ctx.putImageData(img, 0, 0);
  }

  function vignette(ctx, W, H, a) {
    const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.75);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, `rgba(10,0,0,${a})`);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }

  const MOUNTAIN = {
    rockDark: [52, 30, 34], rockLight: [168, 112, 100], haze: [232, 214, 210],
    hazeAmt: 0.7, hazeBase: 0.05,
  };

  // ── Scene A: valley with mountains (hero, interior window) ─
  function valley(W = 1920, H = 1200) {
    const c = canvas(W, H), ctx = c.getContext('2d');
    const horizon = H * 0.5;
    sky(ctx, W, H, horizon);
    mountains(ctx, W, H, { ...MOUNTAIN, seed: 11, base: 0.5, rough: 0.05, snowLine: 0.27,
      rockDark: [110, 92, 104], rockLight: [190, 170, 175], hazeAmt: 0.55, hazeBase: 0.3,
      peaks: [{ x: 0.82, w: 0.12, h: 0.16 }, { x: 0.95, w: 0.08, h: 0.11 }, { x: 0.12, w: 0.1, h: 0.08 }] });
    mountains(ctx, W, H, { ...MOUNTAIN, seed: 5, base: 0.52, rough: 0.07, snowLine: 0.25,
      peaks: [{ x: 0.42, w: 0.07, h: 0.38 }, { x: 0.33, w: 0.07, h: 0.24 }, { x: 0.52, w: 0.06, h: 0.26 },
        { x: 0.6, w: 0.05, h: 0.14 }, { x: 0.22, w: 0.06, h: 0.12 }] });
    // soften the range (distance) and close the gap down to the hills
    ctx.save(); ctx.filter = 'blur(1.2px)'; ctx.drawImage(c, 0, 0); ctx.restore();
    const hz = ctx.createLinearGradient(0, H * 0.42, 0, H * 0.6);
    hz.addColorStop(0, 'rgba(236,222,216,0)');
    hz.addColorStop(0.55, 'rgba(236,222,216,0.9)');
    hz.addColorStop(1, 'rgba(226,196,188,1)');
    ctx.fillStyle = hz; ctx.fillRect(0, H * 0.42, W, H * 0.2);
    fog(ctx, W, H, H * 0.5, H * 0.08, 0.85, 3);
    fog(ctx, W, H, H * 0.38, H * 0.12, 0.4, 9);
    const far = [196, 96, 80], near = [150, 22, 16], fogColor = [226, 196, 188];
    let podAt;
    hills(ctx, W, H, [
      { y: 0.56, amp: 0.03, freq: 3, phase: 0.4, rough: 0.03, depth: 0.0, shade: 0.12, density: 0.5 },
      { y: 0.6, amp: 0.035, freq: 2.2, phase: 2.1, rough: 0.04, depth: 0.2, shade: 0.12, density: 0.6,
        after: rid => { tree(ctx, W * 0.2, rid(W * 0.2) + 6, H * 0.06, 4); tree(ctx, W * 0.86, rid(W * 0.86) + 6, H * 0.045, 8); } },
      { y: 0.68, amp: 0.05, freq: 1.6, phase: 4.0, rough: 0.05, depth: 0.4, shade: 0.2, density: 0.8,
        after: rid => { podAt = [W * 0.64, rid(W * 0.64)]; } },
      { y: 0.8, amp: 0.07, freq: 1.2, phase: 0.9, rough: 0.05, depth: 0.7, shade: 0.25, density: 1 },
      { y: 0.98, amp: 0.1, freq: 0.9, phase: 2.6, rough: 0.05, depth: 1, shade: 0.3, density: 1 },
    ], { seed: 21, far, near, fogColor });
    const ps = W * 0.085;
    trail(ctx, curvePts([W * 0.5, H + 20], [W * 0.38, H * 0.9], [W * 0.66, H * 0.86], [podAt[0] + ps * 0.25, podAt[1] + ps * 0.32]), W * 0.06, W * 0.006);
    pod(ctx, podAt[0], podAt[1] + ps * 0.12, ps);
    vignette(ctx, W, H, 0.25);
    grain(ctx, W, H, 10, 2);
    return c;
  }

  // ── Scene B: close-up hillside with the pod (explore) ──────
  function hillside(W = 1920, H = 1200) {
    const c = canvas(W, H), ctx = c.getContext('2d');
    ctx.fillStyle = '#2a0706';
    ctx.fillRect(0, 0, W, H);
    const far = [120, 20, 16], near = [168, 26, 18], fogColor = [90, 20, 18];
    const marks = {};
    hills(ctx, W, H, [
      { y: 0.06, amp: 0.12, freq: 1.7, phase: 0.8, rough: 0.05, depth: 0.15, shade: 0.3, density: 0.8 },
      { y: 0.2, amp: 0.2, freq: 1.3, phase: 3.6, rough: 0.06, depth: 0.35, shade: 0.4, density: 0.9 },
      { y: 0.42, amp: 0.22, freq: 1.1, phase: 5.2, rough: 0.06, depth: 0.55, shade: 0.4, density: 1,
        after: rid => { marks.tree = [W * 0.24, rid(W * 0.24) + H * 0.06]; } },
      { y: 0.72, amp: 0.2, freq: 0.8, phase: 1.2, rough: 0.05, depth: 0.8, shade: 0.45, density: 1,
        after: rid => { marks.pod = [W * 0.54, rid(W * 0.54)]; } },
      { y: 1.05, amp: 0.12, freq: 1.1, phase: 4.4, rough: 0.05, depth: 1, shade: 0.4, density: 1 },
    ], { seed: 33, far, near, fogColor });
    tree(ctx, marks.tree[0], marks.tree[1], H * 0.24, 12);
    const ps = W * 0.22;
    pod(ctx, marks.pod[0], marks.pod[1] + ps * 0.15, ps, 0.9);
    // light from upper-right
    const l = ctx.createLinearGradient(W, 0, W * 0.3, H);
    l.addColorStop(0, 'rgba(255,170,90,0.22)');
    l.addColorStop(1, 'rgba(255,170,90,0)');
    ctx.fillStyle = l; ctx.fillRect(0, 0, W, H);
    vignette(ctx, W, H, 0.5);
    grain(ctx, W, H, 10, 5);
    c.marks = {
      tree: [marks.tree[0] / W, (marks.tree[1] - H * 0.2) / H],
      pod: [(marks.pod[0] - ps * 0.2) / W, (marks.pod[1] + ps * 0.12) / H],
      grass: [0.78, 0.36],
    };
    return c;
  }

  // ── Scene C: meadow with tall grass (finale) ───────────────
  function meadow(W = 1920, H = 1200) {
    const c = valley(W, H), ctx = c.getContext('2d');
    const r = rng(77);
    // tall foreground blades on their own layer, blurred like a shallow depth of field
    const fg = canvas(W, H), f = fg.getContext('2d');
    for (let i = 0; i < 900; i++) {
      const x = r() * W, base = H + 20, h = H * (0.06 + Math.pow(r(), 1.6) * 0.26);
      const lean = (r() - 0.5) * h * 0.6, w = W * (0.0015 + r() * 0.004);
      const g = f.createLinearGradient(0, base - h, 0, base);
      const tip = r() < 0.3 ? [236, 176, 84] : [226, 84, 44];
      g.addColorStop(0, rgb(tip, 0.9));
      g.addColorStop(0.45, rgb([176, 28, 18], 0.9));
      g.addColorStop(1, rgb([50, 5, 5], 1));
      f.fillStyle = g;
      f.beginPath();
      f.moveTo(x - w, base);
      f.quadraticCurveTo(x - w * 0.4 + lean * 0.4, base - h * 0.6, x + lean, base - h);
      f.quadraticCurveTo(x + w * 0.4 + lean * 0.4, base - h * 0.6, x + w, base);
      f.fill();
    }
    ctx.save(); ctx.filter = 'blur(2.5px)'; ctx.drawImage(fg, 0, 0); ctx.restore();
    vignette(ctx, W, H, 0.3);
    return c;
  }

  // ── Interior: padded tunnel, round window, bed ─────────────
  function interior(view, on, W = 1600, H = 1000) {
    const c = canvas(W, H), ctx = c.getContext('2d');
    const wx = W * 0.6, wy = H * 0.4, wr = H * 0.22;
    const pal = on
      ? { outer: [48, 20, 8], inner: [236, 160, 90], seam: 'rgba(40,12,0,0.55)' }
      : { outer: [28, 26, 26], inner: [182, 172, 162], seam: 'rgba(0,0,0,0.45)' };
    ctx.fillStyle = rgb(pal.outer);
    ctx.fillRect(0, 0, W, H);
    const N = 8;
    for (let k = 0; k < N; k++) {
      const t = k / (N - 1);
      const cx = lerp(W * 0.48, wx, t), cy = lerp(H * 0.5, wy, Math.pow(t, 0.8));
      const hw = lerp(W * 0.7, wr * 1.45, Math.pow(t, 0.75));
      const hh = lerp(H * 0.62, wr * 1.45, Math.pow(t, 0.75));
      const arch = new Path2D();
      arch.moveTo(cx - hw, H + 60);
      arch.lineTo(cx - hw, cy);
      arch.ellipse(cx, cy, hw, hh, 0, Math.PI, Math.PI * 2);
      arch.lineTo(cx + hw, H + 60);
      arch.closePath();
      const g = ctx.createRadialGradient(wx, wy, wr * 0.5, cx, cy, hw * 1.05);
      g.addColorStop(0, rgb(mix(pal.inner, [255, 240, 220], on ? 0.1 : 0.2)));
      g.addColorStop(0.7, rgb(mix(pal.outer, pal.inner, 0.25 + t * 0.7)));
      g.addColorStop(1, rgb(mix(pal.outer, pal.inner, 0.05 + t * 0.4)));
      ctx.save();
      ctx.shadowColor = pal.seam;
      ctx.shadowBlur = 40;
      ctx.shadowOffsetY = 6;
      ctx.fillStyle = g;
      ctx.fill(arch);
      ctx.restore();
      // cushion puff highlight along the inner lip
      ctx.save();
      ctx.clip(arch);
      ctx.strokeStyle = on ? 'rgba(255,215,160,0.18)' : 'rgba(255,255,255,0.1)';
      ctx.lineWidth = hw * 0.06;
      ctx.beginPath();
      ctx.ellipse(cx, cy, hw * 0.97, hh * 0.97, 0, Math.PI * 1.02, Math.PI * 1.98);
      ctx.stroke();
      ctx.restore();
      if (on && k === N - 3) {
        ctx.save();
        ctx.shadowColor = '#ff9a3d'; ctx.shadowBlur = 50;
        ctx.strokeStyle = 'rgba(255,190,110,0.95)'; ctx.lineWidth = 8;
        ctx.beginPath(); ctx.ellipse(cx, cy, hw * 0.9, hh * 0.9, 0, Math.PI * 1.05, Math.PI * 1.95); ctx.stroke();
        ctx.restore();
      }
    }
    // window rim + view
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 30;
    ctx.fillStyle = on ? '#e8b37a' : '#c9c1b8';
    ctx.beginPath(); ctx.arc(wx, wy, wr * 1.18, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.beginPath(); ctx.arc(wx, wy, wr, 0, Math.PI * 2); ctx.clip();
    const vs = (wr * 2.6) / view.height;
    ctx.drawImage(view, wx - view.width * vs * 0.5, wy - view.height * vs * 0.55, view.width * vs, view.height * vs);
    const gl = ctx.createLinearGradient(wx - wr, wy - wr, wx + wr, wy + wr);
    gl.addColorStop(0, 'rgba(255,255,255,0.18)');
    gl.addColorStop(0.4, 'rgba(255,255,255,0)');
    ctx.fillStyle = gl; ctx.fillRect(wx - wr, wy - wr, wr * 2, wr * 2);
    ctx.restore();
    ctx.strokeStyle = 'rgba(30,20,15,0.6)'; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(wx, wy, wr, 0, Math.PI * 2); ctx.stroke();
    // wall screen
    ctx.fillStyle = '#121416';
    roundRect(ctx, wx + wr * 1.45, wy - wr * 0.12, wr * 0.32, wr * 0.22, 10); ctx.fill();
    ctx.fillStyle = on ? '#7fd0ff' : '#3b6c88';
    ctx.fillRect(wx + wr * 1.52, wy - wr * 0.04, wr * 0.04, wr * 0.04);
    ctx.fillRect(wx + wr * 1.6, wy - wr * 0.04, wr * 0.1, wr * 0.04);

    // bed
    const bedTop = H * 0.7;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 50;
    const sheet = ctx.createLinearGradient(0, bedTop, 0, H);
    sheet.addColorStop(0, on ? '#f6dcc0' : '#dcd6d0');
    sheet.addColorStop(1, on ? '#b07a52' : '#8f8984');
    ctx.fillStyle = sheet;
    ctx.beginPath();
    ctx.moveTo(W * 0.04, H + 10);
    ctx.bezierCurveTo(W * 0.06, bedTop + 30, W * 0.12, bedTop, W * 0.3, bedTop - 6);
    ctx.lineTo(W * 0.82, bedTop - 10);
    ctx.bezierCurveTo(W * 0.95, bedTop - 6, W * 1.02, bedTop + 40, W * 1.02, H + 10);
    ctx.closePath(); ctx.fill();
    ctx.restore();
    // pillows
    for (const [px, py, pw] of [[0.2, 0.72, 0.11], [0.31, 0.71, 0.1]]) {
      const pg = ctx.createRadialGradient(W * px - 20, H * py - 20, 5, W * px, H * py, W * pw);
      pg.addColorStop(0, on ? '#fff1de' : '#f0ece8');
      pg.addColorStop(1, on ? '#c99a72' : '#a9a29c');
      ctx.fillStyle = pg;
      ctx.beginPath(); ctx.ellipse(W * px, H * py, W * pw, H * 0.06, -0.08, 0, Math.PI * 2); ctx.fill();
    }
    // blanket
    const bl = ctx.createLinearGradient(W * 0.45, bedTop, W, H);
    bl.addColorStop(0, on ? '#e2652a' : '#a5583a');
    bl.addColorStop(1, on ? '#7a220c' : '#4b2418');
    ctx.fillStyle = bl;
    ctx.beginPath();
    ctx.moveTo(W * 0.42, H + 10);
    ctx.bezierCurveTo(W * 0.46, bedTop + 60, W * 0.55, bedTop + 10, W * 0.7, bedTop + 20);
    ctx.bezierCurveTo(W * 0.85, bedTop + 30, W * 0.98, bedTop + 50, W * 1.02, bedTop + 80);
    ctx.lineTo(W * 1.02, H + 10);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(40,8,0,0.35)'; ctx.lineWidth = 4;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(W * (0.5 + i * 0.08), bedTop + 60 + i * 6);
      ctx.quadraticCurveTo(W * (0.55 + i * 0.08), bedTop + 120, W * (0.52 + i * 0.09), H);
      ctx.stroke();
    }
    // bedside lamp
    if (on) {
      const lg = ctx.createRadialGradient(W * 0.06, H * 0.86, 0, W * 0.06, H * 0.86, W * 0.12);
      lg.addColorStop(0, 'rgba(255,200,120,0.9)');
      lg.addColorStop(1, 'rgba(255,140,50,0)');
      ctx.fillStyle = lg; ctx.fillRect(0, H * 0.7, W * 0.2, H * 0.3);
    }
    ctx.fillStyle = on ? '#ffe2b0' : '#5a5450';
    ctx.beginPath(); ctx.ellipse(W * 0.06, H * 0.86, W * 0.018, H * 0.014, 0, 0, Math.PI * 2); ctx.fill();

    if (on) {
      ctx.globalCompositeOperation = 'soft-light';
      ctx.fillStyle = 'rgba(255,140,40,0.35)';
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';
    }
    vignette(ctx, W, H, 0.55);
    grain(ctx, W, H, 8, on ? 3 : 4);
    return c;
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // ── small card images ──────────────────────────────────────
  function bokeh(ctx, W, H, seed, cols) {
    const r = rng(seed);
    for (let i = 0; i < 40; i++) {
      const x = r() * W, y = r() * H, rad = W * (0.05 + r() * 0.25);
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      const c = cols[Math.floor(r() * cols.length)];
      g.addColorStop(0, rgb(c, 0.35 + r() * 0.3));
      g.addColorStop(1, rgb(c, 0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
  }

  function bird(W = 480, H = 600) {
    const c = canvas(W, H), ctx = c.getContext('2d');
    ctx.fillStyle = '#7a0d08'; ctx.fillRect(0, 0, W, H);
    bokeh(ctx, W, H, 41, [[230, 40, 25], [250, 110, 40], [120, 8, 8]]);
    // branch
    ctx.strokeStyle = '#2a0c08'; ctx.lineWidth = W * 0.035; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-10, H * 0.76); ctx.quadraticCurveTo(W * 0.5, H * 0.7, W + 10, H * 0.8); ctx.stroke();
    const cx = W * 0.5, cy = H * 0.52;
    // tail
    ctx.fillStyle = '#3b1610';
    ctx.beginPath(); ctx.moveTo(cx + W * 0.1, cy + H * 0.02); ctx.lineTo(cx + W * 0.42, cy + H * 0.17); ctx.lineTo(cx + W * 0.36, cy + H * 0.22); ctx.lineTo(cx + W * 0.08, cy + H * 0.1); ctx.closePath(); ctx.fill();
    // body
    const bg = ctx.createRadialGradient(cx - W * 0.1, cy - H * 0.05, 5, cx, cy, W * 0.3);
    bg.addColorStop(0, '#ffb066'); bg.addColorStop(0.5, '#e8582a'); bg.addColorStop(1, '#7c2210');
    ctx.fillStyle = bg;
    ctx.beginPath(); ctx.ellipse(cx, cy, W * 0.24, H * 0.14, -0.3, 0, Math.PI * 2); ctx.fill();
    // wing
    const wg = ctx.createLinearGradient(cx, cy - H * 0.1, cx + W * 0.2, cy + H * 0.1);
    wg.addColorStop(0, '#6b3a22'); wg.addColorStop(1, '#2d130c');
    ctx.fillStyle = wg;
    ctx.beginPath(); ctx.ellipse(cx + W * 0.06, cy - H * 0.01, W * 0.17, H * 0.08, -0.35, 0, Math.PI * 2); ctx.fill();
    // head
    const hg = ctx.createRadialGradient(cx - W * 0.2, cy - H * 0.14, 3, cx - W * 0.17, cy - H * 0.1, W * 0.13);
    hg.addColorStop(0, '#ffc07a'); hg.addColorStop(1, '#a93a16');
    ctx.fillStyle = hg;
    ctx.beginPath(); ctx.arc(cx - W * 0.17, cy - H * 0.1, W * 0.11, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#20140f';
    ctx.beginPath(); ctx.moveTo(cx - W * 0.27, cy - H * 0.11); ctx.lineTo(cx - W * 0.36, cy - H * 0.09); ctx.lineTo(cx - W * 0.27, cy - H * 0.075); ctx.fill();
    ctx.beginPath(); ctx.arc(cx - W * 0.2, cy - H * 0.115, W * 0.018, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath(); ctx.arc(cx - W * 0.205, cy - H * 0.12, W * 0.006, 0, Math.PI * 2); ctx.fill();
    // legs
    ctx.strokeStyle = '#2a120c'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(cx - W * 0.02, cy + H * 0.13); ctx.lineTo(cx - W * 0.03, H * 0.73); ctx.moveTo(cx + W * 0.05, cy + H * 0.12); ctx.lineTo(cx + W * 0.05, H * 0.73); ctx.stroke();
    vignette(ctx, W, H, 0.5);
    grain(ctx, W, H, 12, 9);
    return c;
  }

  function flora(W = 480, H = 600) {
    const c = canvas(W, H), ctx = c.getContext('2d');
    ctx.fillStyle = '#5a0a07'; ctx.fillRect(0, 0, W, H);
    bokeh(ctx, W, H, 52, [[240, 70, 30], [255, 150, 60], [140, 12, 10]]);
    const r = rng(53);
    // spiky thistle head
    const cx = W * 0.5, cy = H * 0.42;
    for (let i = 0; i < 260; i++) {
      const a = r() * Math.PI * 2, len = W * (0.08 + r() * 0.2);
      const t = r();
      ctx.strokeStyle = rgb(mix([150, 10, 10], [255, 120, 60], t), 0.9);
      ctx.lineWidth = 1 + r() * 2.5;
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len * 0.8 - len * 0.2);
      ctx.stroke();
      ctx.fillStyle = rgb([255, 190, 110], 0.8);
      ctx.beginPath(); ctx.arc(cx + Math.cos(a) * len, cy + Math.sin(a) * len * 0.8 - len * 0.2, 1.5, 0, Math.PI * 2); ctx.fill();
    }
    ctx.strokeStyle = '#3a0805'; ctx.lineWidth = W * 0.03;
    ctx.beginPath(); ctx.moveTo(cx, cy + H * 0.05); ctx.quadraticCurveTo(cx + W * 0.04, H * 0.75, cx - W * 0.02, H + 10); ctx.stroke();
    vignette(ctx, W, H, 0.55);
    grain(ctx, W, H, 12, 10);
    return c;
  }

  function crop(src, fx, fy, fw, W = 480, H = 600) {
    const c = canvas(W, H), ctx = c.getContext('2d');
    const sw = src.width * fw, sh = sw * (H / W);
    ctx.drawImage(src, src.width * fx - sw / 2, src.height * fy - sh / 2, sw, sh, 0, 0, W, H);
    return c;
  }

  return { valley, hillside, meadow, interior, bird, flora, crop };
})();
