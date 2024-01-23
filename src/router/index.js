import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: () => import('../views/CalculatorView.vue')
    },
    {
      path: '/unitconverter',
      name: 'unitconverter',
      component: () => import('../views/UnitConverterView.vue')
    },
    {
      path: '/currencyconverter',
      name: 'currencyconverter',
      component: () => import('../views/CurrencyConverterView.vue')
    },
  ]
})

export default router
