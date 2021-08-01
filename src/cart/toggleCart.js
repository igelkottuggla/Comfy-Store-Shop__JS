import { getElement } from '../utils.js';

const nav = getElement('.nav-center');

if (nav) {
  const openCartBtn = getElement('.toggle-cart');
  const closeCartBtn = getElement('.cart-close');
  const cartOverlay = getElement('.cart-overlay');

  openCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('show');
  });

  closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.remove('show');
  });
}

export const openCart = () => {
  cartOverlay.classList.add('show');
};
