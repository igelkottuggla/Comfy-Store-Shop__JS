import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const products = getElement('.products-container');

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.valeu = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;

  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, products, true);
    if (newStore.length < 1) {
      products.innerHTML = `<h3 class='filter-error'>sorry, no products match your search</h3>`;
    }
  });
};

export default setupPrice;
