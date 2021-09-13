import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

import { store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';

const loading = getElement('.page-loading');

display(store, getElement('.products-container'));

setupSearch(store);
setupCompanies(store);
setupPrice(store);
loading.style.display = 'none';
