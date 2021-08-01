import { getElement } from './utils.js';

const nav = getElement('.nav-center');

if (nav) {
  const toggleNav = getElement('.toggle-nav');
  const sidebarOverlay = getElement('.sidebar-overlay');
  const closeBtn = getElement('.sidebar-close');

  toggleNav.addEventListener('click', () => {
    sidebarOverlay.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show');
  });
}
