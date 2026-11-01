(() => {
  'use strict';
  const menuButton = document.getElementById('menu-button');
  const nav = document.getElementById('site-navigation');
  const year = document.getElementById('footer-year');
  if (year) year.textContent = String(new Date().getFullYear());
  if (!menuButton || !nav) return;

  const setMenu = (isOpen) => {
    nav.classList.toggle('nav-open', isOpen);
    menuButton.classList.toggle('is-active', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Chiudi il menu di navigazione' : 'Apri il menu di navigazione');
  };

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });
})();
