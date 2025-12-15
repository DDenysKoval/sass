// Commect styles
import '../scss/main.scss';

import * as bodyScrollLock from 'body-scroll-lock';

// Sidebar menu
const refsMenu = {
  openMenuBtn: document.querySelector('.js-menu-open'),
  closeMenuBtn: document.querySelector('.js-menu-close'),
  overlayMenu: document.querySelector('.js-menu'),
};

if (!refsMenu.openMenuBtn || !refsMenu.closeMenuBtn || !refsMenu.overlayMenu) {
  console.warn('Menu elements not found on this page');
} else {
  const toggleMenu = () => {
    const isMenuOpen =
      refsMenu.openMenuBtn.getAttribute('aria-expanded') === 'true';

    refsMenu.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refsMenu.overlayMenu.classList.toggle('is-open');

    const method = isMenuOpen ? 'enableBodyScroll' : 'disableBodyScroll';

    bodyScrollLock[method](document.body);
  };

  refsMenu.openMenuBtn.addEventListener('click', toggleMenu);
  refsMenu.closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;

    refsMenu.overlayMenu.classList.remove('is-open');
    refsMenu.openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
}
