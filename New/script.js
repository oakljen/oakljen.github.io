const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Typewriter ──
function typewriter(el, text, delay = 600) {
  if (prefersReducedMotion) { el.textContent = text; return; }
  let i = 0;
  setTimeout(() => {
    const id = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(id);
    }, 55);
  }, delay);
}

// ── Skeleton reveal ──
function revealSkeletons() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.skeleton').forEach(el => {
      el.classList.remove('skeleton');
      el.classList.add('loaded');
    });
    return;
  }
  setTimeout(() => {
    document.querySelectorAll('.skeleton').forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove('skeleton');
        el.classList.add('loaded');
      }, i * 60);
    });
  }, 800);
}

// ── Scroll reveal (cards + sections) ──
function initScrollReveal() {
  if (prefersReducedMotion) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// ── Skill chips cascade ──
function initSkillCascade() {
  const chips = document.querySelectorAll('#skills-grid .skill-chip');
  if (prefersReducedMotion) {
    chips.forEach(c => c.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        chips.forEach((chip, i) => {
          setTimeout(() => chip.classList.add('visible'), i * 80);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const grid = document.getElementById('skills-grid');
  if (grid) observer.observe(grid);
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  typewriter(document.getElementById('hero-tagline'), 'Developer & Tinkerer · Sydney, AU');
  revealSkeletons();
  initScrollReveal();
  initSkillCascade();
});
