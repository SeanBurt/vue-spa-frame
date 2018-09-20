// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'normalize.css'
import 'animate.css'
import '@/style/index.scss'
import './util/log'
import { Message, Loading, MessageBox } from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(VueI18n)
Vue.use(Loading.directive)

Vue.config.productionTip = false
Vue.config.lang = 'zh-cn'

Vue.locale('zh-cn', zhLocale)
Vue.locale('en', enLocale)
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
