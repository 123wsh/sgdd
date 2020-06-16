import Vue from 'vue'
import VueRouter from 'vue-router'

import shouye from '../views/shouye.vue'
import fenlei from '../views/fenlei.vue'
import tuan from '../views/tuan.vue'
import cart from '../views/cart.vue'
import Home from '../views/home.vue'

//解决底部菜单栏重复时的报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}





Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: shouye,
  },
  {
    path: '/fenlei',
    component: fenlei
  },
  {
    path: '/tuan',
    component: tuan
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})

export default router
