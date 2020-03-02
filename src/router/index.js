import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/Home'
  },
  {
    path: '/',
    name: 'User',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../components/User/UserHome.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../components/User/News.vue')
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
