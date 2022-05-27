import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log('router::beforeEach', { to, from })
  // let routeMiddleware = to.meta?.middleware ?? false
  // if (routeMiddleware && typeof routeMiddleware === 'function') {
  //   routeMiddleware = [routeMiddleware]
  // } else routeMiddleware = []

  // let middleware = [global, ...routeMiddleware]

  // for (let i = 0; i < middleware.length; i++) {
  //   const result = middleware[i]({ from, router, to })
  //   if (typeof result === 'string') {
  //     return next(result)
  //   }
  // }
  next()
})

export default router
