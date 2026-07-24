const sections = ['about', 'stack', 'projects', 'contact'];

function checkReveal() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el || el.classList.contains('in')) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.88 && rect.bottom > 0) el.classList.add('in');
  });

  let active = null;
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.5 && rect.bottom > vh * 0.35) active = id;
  });

  document.querySelectorAll('.navlink').forEach((link) => {
    const id = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', id === active);
  });
}

window.addEventListener('scroll', checkReveal, { passive: true });
window.addEventListener('resize', checkReveal);
checkReveal();

const hero = document.getElementById('hero');
const cube = document.querySelector('.cube');
if (hero && cube) {
  hero.addEventListener('mousemove', (ev) => {
    const r = hero.getBoundingClientRect();
    const mx = (ev.clientX - r.left) / r.width - 0.5;
    const my = (ev.clientY - r.top) / r.height - 0.5;
    cube.style.transform = `rotateX(${-20 - my * 14}deg) rotateY(${-34 + mx * 14}deg)`;
  });
}
