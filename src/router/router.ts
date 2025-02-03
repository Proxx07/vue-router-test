import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../pages/MainPage.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutPage.vue')
  },

  {
    path: '/big-data',
    name: 'big-data',
    component: () => import('../pages/BigDataPage.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});