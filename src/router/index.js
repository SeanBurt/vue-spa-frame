import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { auth, constant } from '../utils'
// progress bar
import NProgress from 'nprogress'
// progress bar style
import 'nprogress/nprogress.css'

// 懒加载
const Demo = () => import('@/view/HelloWorld')
const NotFound = () => import('@/view/NotFound')
const Welcome = () => import('@/view/Welcome')
const Auth = () => import('@/view/Auth')
const Login = () => import('@/view/Login')
const Index = () => import('@/view/Index')

Vue.use(Router)

const routes = [
  { path: '/demo', name: 'Demo', component: Demo, meta: { requireAuth: false } },
  { path: '*', component: NotFound, meta: { requireAuth: false } },
  { path: '/Login', name: 'Login', component: Login, meta: { requireAuth: false } },
  { path: '/Welcome', name: 'Welcome', component: Welcome, meta: { requireAuth: false } },
  { path: '/Auth', name: 'Auth', component: Auth, meta: { requireAuth: true } },
  { path: '/', name: 'Index', component: Index, meta: { requireAuth: true } }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

// NProgress Configuration
NProgress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 1000
})

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes
})

router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()
  if (to.meta.requireAuth) {
    let isLogin = auth.checkLogin()
    if (isLogin) {
      constant.MAIN_MENU[to.name] && store.dispatch('CHANGE_MENU_INDEX_MUTATION', constant.MAIN_MENU[to.name])
      next()
    }
    if (!isLogin) {
      next('/Login')
      // if current page is login will not trigger afterEach hook, so manually handle it
      NProgress.done()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
  setTimeout(() => {
    (function () {
      // 每次执行前，先移除上次插入的代码
      // document.getElementById('_tj') && document.getElementById('_tj').remove()
      // var hm = document.createElement('script')
      // hm.src = '//'
      // hm.id = '_tj'
      // var s = document.getElementsByTagName('script')[0]
      // s.parentNode.insertBefore(hm, s)
    })()
  }, 0)
})

export default router
