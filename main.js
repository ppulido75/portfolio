document.documentElement.classList.add('js');

const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = `${(i % 4) * 90}ms`;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

const dots = [...document.querySelectorAll('#dots li')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      dots.forEach((d) => d.classList.toggle('on', d.dataset.t === e.target.id));
      document.body.classList.toggle('on-dark', e.target.classList.contains('dark'));
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.screen').forEach((s) => spy.observe(s));
dots.forEach((d) => d.addEventListener('click', () => {
  document.getElementById(d.dataset.t).scrollIntoView({ behavior: 'smooth' });
}));
