/* B2 preview — scroll choreography, hotspots, lights. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const ease = t => 1 - Math.pow(1 - t, 3);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ── blur-in text: split into characters ─────────────────
  $$('.split').forEach(el => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          for (const ch of n.textContent) {
            const s = document.createElement('span');
            s.className = 'ch'; s.style.setProperty('--i', i++); s.textContent = ch;
            s.setAttribute('aria-hidden', 'true');
            frag.append(s);
          }
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
      });
    };
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    walk(el);
  });
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.4 });
  $$('.split').forEach(el => io.observe(el));

  // ── hero window shape ───────────────────────────────────
  // A softened, slightly irregular octagon, like a porthole pressed into foam.
  const frame = $('.hero-frame');
  let blob = { cx: 0, cy: 0 };
  function blobPath(cx, cy, a, b) {
    const N = 32, pts = [];
    for (let k = 0; k < N; k++) {
      const t = (k / N) * Math.PI * 2;
      const c = Math.cos(t), s = Math.sin(t);
      // superellipse (n=3) → squarish, then octagonal facets + a wobble
      const se = Math.pow(Math.pow(Math.abs(c), 3) + Math.pow(Math.abs(s), 3), -1 / 3);
      const r = se * (1 - 0.05 * Math.pow(Math.cos(4 * t), 2)) * (1 + 0.025 * Math.sin(3 * t + 0.6));
      pts.push([cx + c * r * a, cy + s * r * b]);
    }
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let k = 0; k < N; k++) {
      const p0 = pts[(k - 1 + N) % N], p1 = pts[k], p2 = pts[(k + 1) % N], p3 = pts[(k + 2) % N];
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += `C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d + 'Z';
  }
  function layoutFrame() {
    const w = innerWidth, h = innerHeight;
    const narrow = w < 700;
    const a = narrow ? w * 0.44 : Math.min(w * 0.28, h * 0.44);
    const b = narrow ? h * 0.36 : h * 0.4;
    blob = { cx: w / 2, cy: h * 0.53 };
    frame.setAttribute('viewBox', `0 0 ${w} ${h}`);
    const d = blobPath(blob.cx, blob.cy, a, b);
    $('.frame-fill', frame).setAttribute('d', `M-${w},-${h}H${w * 2}V${h * 2}H-${w}Z ${d}`);
    $$('.rim, .rim-glow, .rim-inner', frame).forEach(p => p.setAttribute('d', d));
    $('.rim-inner', frame).setAttribute('transform', `translate(${blob.cx} ${blob.cy}) scale(0.985) translate(${-blob.cx} ${-blob.cy})`);
    frame.style.transformOrigin = `${blob.cx}px ${blob.cy}px`;
    $('.hero-bg').style.transformOrigin = `${blob.cx}px ${blob.cy}px`;
  }

  // ── scroll choreography ─────────────────────────────────
  const hero = $('.hero'), heroBg = $('.hero-bg');
  const finale = $('.finale'), stack = $('.stack'), meadow = $('#img-meadow');
  const progress = el => {
    const r = el.getBoundingClientRect();
    return clamp(-r.top / (r.height - innerHeight));
  };
  function onScroll() {
    // hero: foreground frame ×1 → ×3.2, background ×0.95 → ×1.2
    const p = progress(hero);
    const e = reduced ? p : ease(p);
    frame.style.setProperty('--fr-s', (1 + e * 2.2).toFixed(4));
    frame.style.opacity = clamp(1 - (p - 0.75) / 0.2).toFixed(3);
    heroBg.style.setProperty('--bg-s', (0.95 + e * 0.25).toFixed(4));
    const hc = $('.hero-stick');
    hc.style.setProperty('--copy-o', clamp(1 - p * 2.6).toFixed(3));
    hc.style.setProperty('--copy-y', `${(-p * 120).toFixed(1)}px`);

    // finale: cards rise through the centre column
    const f = progress(finale);
    const total = stack.offsetHeight;
    const start = innerHeight * 0.62, end = innerHeight * 0.18 - total + innerHeight * 0.5;
    stack.style.setProperty('--stack-y', `${(start + (end - start) * f).toFixed(1)}px`);
    meadow.style.setProperty('--m-s', (1.12 - f * 0.08).toFixed(4));
    $('.finale .capsule').style.setProperty('--cap-y', `${(-f * innerHeight * 0.6).toFixed(1)}px`);
  }
  let ticking = false;
  const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; onScroll(); }); } };
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', () => { layoutFrame(); placeHotspots(); queue(); });
  layoutFrame();
  onScroll();

  // ── hotspots: map image coords → object-fit:cover coords ─
  let marks;
  function placeHotspots() {
    const img = $('#img-hillside');
    if (!marks || !img.naturalWidth) return;
    const box = img.getBoundingClientRect();
    const s = Math.max(box.width / img.naturalWidth, box.height / img.naturalHeight);
    const dw = img.naturalWidth * s, dh = img.naturalHeight * s;
    const ox = (box.width - dw) / 2, oy = (box.height - dh) / 2;
    $$('.hotspot').forEach(h => {
      const [fx, fy] = marks[h.dataset.mark];
      const x = clamp(ox + fx * dw, 70, box.width - 70);
      const y = clamp(oy + fy * dh, 150, box.height - 60);
      h.style.left = `${x}px`; h.style.top = `${y}px`;
      h.classList.add('placed');
    });
  }
  $$('.hotspot').forEach(h => {
    const peek = $('.peek', h);
    h.addEventListener('pointermove', e => {
      if (reduced || e.pointerType !== 'mouse') return;
      const r = h.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      peek.style.setProperty('--ry', `${(dx * 28).toFixed(1)}deg`);
      peek.style.setProperty('--rx', `${(-dy * 22).toFixed(1)}deg`);
    });
    h.addEventListener('pointerleave', () => { peek.style.setProperty('--rx', '0deg'); peek.style.setProperty('--ry', '0deg'); });
    // touch: tap a tag to open its card, tap elsewhere to close
    $('.tag', h).addEventListener('click', () => {
      if (fine) return;
      const open = !h.classList.contains('open');
      $$('.hotspot.open').forEach(o => o.classList.remove('open'));
      h.classList.toggle('open', open);
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.hotspot')) $$('.hotspot.open').forEach(o => o.classList.remove('open'));
  });

  // ── lights ──────────────────────────────────────────────
  const sw = $('.switch'), inside = $('#inside');
  const setLights = on => { sw.setAttribute('aria-checked', String(on)); inside.classList.toggle('lit', on); };
  sw.addEventListener('click', () => setLights(sw.getAttribute('aria-checked') !== 'true'));
  // click anywhere in the room too, like the reference's "tap the scene"
  inside.addEventListener('click', e => {
    if (!e.target.closest('.switch, a, button')) setLights(sw.getAttribute('aria-checked') !== 'true');
  });

  // ── images: baked from tools/scenes.js (see tools/bake.html) ─
  // Hotspot anchors in hillside.jpg, as fractions of the image. Re-copy from bake.html's log after a re-bake.
  marks = { tree: [0.24, 0.2], pod: [0.496, 0.598], grass: [0.78, 0.36] };
  $$('.scene-img, .hero-bg img').forEach(img => {
    const ready = () => { img.classList.add('ready'); if (img.id === 'img-hillside') placeHotspots(); };
    if (img.complete && img.naturalWidth) ready(); else img.addEventListener('load', ready, { once: true });
  });
})();
