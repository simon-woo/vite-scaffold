import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/account/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { userInfo } = store.state.home
  if (!userInfo.token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
