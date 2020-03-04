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
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../components/User/About.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../components/User/Products.vue')
      },
      {
        path: '/product/:productId',
        name: 'Product',
        component: () => import('../components/User/Product.vue')
      },
      {
        path: 'know',
        name: 'Know',
        component: () => import('../components/User/Know.vue')
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../components/User/Coupon.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../components/User/Order.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'Checkout',
        component: () => import('../components/User/Checkout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
