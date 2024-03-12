import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProductListView from './views/ProductListView.vue';
import ProductDetailsView from './views/ProductDetailsView.vue';
import ShoppingCartView from './views/ShoppingCartView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductListView },
  { path: '/product/:id', component: ProductDetailsView },
  { path: '/cart', component: ShoppingCartView },
  { path: '/product/:id', component: ProductDetailsView },
  { path: '/cart', component: ShoppingCartView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
