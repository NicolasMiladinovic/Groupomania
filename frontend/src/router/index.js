import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/post/:id',
    name: 'OnePost',
    component: () => import('../views/OnePost.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
