// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'
import 'animate.css'
import '@/style/index.scss'
import './util/log'
import i18n from './lang'
import { Message, Loading, MessageBox } from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(Loading.directive)

Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
