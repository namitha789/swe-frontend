import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/all-data',
      name: 'all-data',
      component: () => import('../views/PollutionView.vue'),
    },
    {
      path: '/pm25',
      name: 'pm25',
      component: () => import('../views/PM25View.vue'),
    },
    {
      path: '/ozone',
      name: 'ozone',
      component: () => import('../views/OzoneView.vue'),
    },
    {
      path: '/pollutants',
      name: 'pollutants',
      component: () => import('../views/PollutantsView.vue'),
    },
    {
      path: '/co2',
      name: 'co2',
      component: () => import('../views/CO2View.vue'),
    },
  ],
})

export default router
