import Vue from 'vue'
import VueRouter from 'vue-router'



const home = () => import("views/home/Home.vue")
const category = () => import("views/category/Category.vue")
const cart = () => import("views/cart/Cart.vue")
const profile = () => import("views/profile/Profile.vue")
const detail = ()=>import("views/detail/Detail.vue")

// 安装插件
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/detail',
    component: detail
  },
]
// 创建路由对象
const router = new VueRouter({
  routes,
  mode: "history"
})
// 导出
export default router

