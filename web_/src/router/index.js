import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'
import Home from '../views/__Home.vue'
import Dashboard from '../views/app/__Dashboard.vue'

Vue.use(VueRouter)

// component: () => import('../views/Component.vue')
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/app',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      store.dispatch('checkToken')
        .then(r => { next() })
        .catch(e => { next('/login') })
    },
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
