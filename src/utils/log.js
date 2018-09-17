import Vue from 'vue'
import store from '../store'

Vue.config.errorHandler = function (err, vm, info) {
  store.dispatch('ADD_ERROR_LOG_MUTATION', {
    message: err.message,
    stack: err.stack,
    info: info,
    url: window.location.href
  })
  console.error(err, info)
  Vue.prototype.$message.error('FE ERROR: ' + err.message)
}

Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
  // 忽略v-for key的警告
  if (msg.indexOf('Duplicate keys detected') === -1) {
    console.warn(msg, trace)
  }
}
