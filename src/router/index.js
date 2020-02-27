import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
