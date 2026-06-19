class DCLogic {
  constructor() { this.state = {}; this._c = null; this._t = null; }
  setState(patch) { Object.assign(this.state, patch); this._dc_render(); }
  now() {
    return new Date().toLocaleTimeString('en-AU', {
      timeZone: 'Australia/Sydney', hour: '2-digit',
      minute: '2-digit', second: '2-digit', hour12: false
    });
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hoist <helmet> children into <head>
  const helmet = document.querySelector('helmet');
  if (helmet) {
    while (helmet.firstChild) document.head.appendChild(helmet.firstChild);
    helmet.remove();
  }

  // 2. Eval the DC script block, extract Component class, instantiate
  const scriptEl = document.querySelector('script[type="text/x-dc"][data-dc-script]');
  const Comp = eval(`(function(){\n${scriptEl.textContent}\nreturn Component;\n})()`);
  const inst = new Comp();
  window._dcInstance = inst;

  // 3. Wire style-hover: parse, store, apply on enter, restore on leave
  document.querySelectorAll('[style-hover]').forEach(el => {
    const raw = el.getAttribute('style-hover');
    el.removeAttribute('style-hover');
    const pairs = {};
    raw.split(';').forEach(s => {
      const [k, ...v] = s.split(':');
      if (k && v.length) {
        const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        pairs[key] = v.join(':').trim();
      }
    });
    el.addEventListener('mouseenter', () => {
      el._hoverSaved = {};
      for (const k in pairs) { el._hoverSaved[k] = el.style[k]; el.style[k] = pairs[k]; }
    });
    el.addEventListener('mouseleave', () => {
      for (const k in (el._hoverSaved || {})) el.style[k] = el._hoverSaved[k];
    });
  });

  // 4. Cache text nodes that contain {{ }} template expressions
  const TPL = /\{\{\s*(\w+)\s*\}\}/g;
  const textCache = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    if (n.textContent.includes('{{')) textCache.push({ node: n, tpl: n.textContent });
  }

  // 5. Render: substitute {{ key }} in cached text nodes from renderVals()
  inst._dc_render = () => {
    const vals = inst.renderVals();
    for (const { node, tpl } of textCache) {
      node.textContent = tpl.replace(TPL, (_, k) =>
        typeof vals[k] === 'function' ? '' : (vals[k] ?? '')
      );
    }
  };

  // 6. Initial render
  inst._dc_render();

  // 7. Wire onClick="{{ methodName }}" to real addEventListener, then strip attribute
  document.querySelectorAll('[onClick]').forEach(el => {
    const m = el.getAttribute('onClick').match(/\{\{\s*(\w+)\s*\}\}/);
    if (m) {
      const fn = inst.renderVals()[m[1]];
      if (typeof fn === 'function') el.addEventListener('click', fn);
    }
    el.removeAttribute('onClick');
  });

  // 8. Lifecycle mount
  inst.componentDidMount();
});
