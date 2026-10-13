document.querySelector('#year').textContent = new Date().getFullYear();
const links = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      links.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }
}, { rootMargin: '-15% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
