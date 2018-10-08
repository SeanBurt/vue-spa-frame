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
import { MessageBox } from 'element-ui'

Vue.config.productionTip = false

Vue.prototype.$confirm = MessageBox.confirm

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
