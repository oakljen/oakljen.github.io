const fs   = require('fs');
const path = require('path');

// Target: 8 Aug 2026 midnight AEST (UTC+10)
const target = new Date('2026-08-08T00:00:00+10:00');
const now    = new Date();
const diff   = Math.max(0, target - now);

const days  = Math.floor(diff / 86400000);
const hours = Math.floor((diff % 86400000) / 3600000);
const mins  = Math.floor((diff % 3600000)  / 60000);

// &#10; = newline — Discord renders this as a line break in embeds
const desc =
  `⏳ ${days}d · ${hours}h · ${mins}m remaining` +
  `&#10;🦸 Sydney, NSW  →  🥝 Auckland, NZ` +
  `&#10;📅 Saturday 8 August 2026 · Tap for the live countdown!`;

const filePath = path.join(__dirname, '..', 'countdown.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace og:description
html = html.replace(
  /<meta property="og:description"\s+content="[^"]*"\/>/,
  `<meta property="og:description"       content="${desc}"/>`
);
// Replace twitter:description
html = html.replace(
  /<meta name="twitter:description"\s+content="[^"]*"\/>/,
  `<meta name="twitter:description"      content="${desc}"/>`
);

fs.writeFileSync(filePath, html, 'utf8');
console.log(`✅  Embed updated: ${days}d ${hours}h ${mins}m remaining`);
