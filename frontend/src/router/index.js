import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Feed from '../views/Feed.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'feed',
    meta: { layout: 'feed' },
    component: Feed,
    beforeEnter(to, from, next) {
      if (!store.state.account.user) return next('/login')
      return next()
    },
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'auth' },
    component: Register,
    beforeEnter(to, from, next) {
      if (store.state.account.user) return next('/')
      return next()
    },
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: Login,
    beforeEnter(to, from, next) {
      if (store.state.account.user) return next('/')
      return next()
    },
  },
  // {
  //   path: '/feed',
  //   name: 'feed',
  //   meta: { layout: 'feed' },
  //   component: Feed,
  //   beforeEnter(to, from, next) {
  //     if (!store.state.account.user) return next('/login')
  //     return next()
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
