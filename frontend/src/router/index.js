import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import NotFound from '../components/NotFound'
import Feed from '../views/Feed.vue'
import Users from '../views/users'
import Jobs from '../views/jobs'
import Messages from '../views/messages'
import Notifications from '../views/notifications'

import Profile from '../views/profile'
import Settings from '../views/settings'

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
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/*',
    name: 'not-found',
    component: NotFound,
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
