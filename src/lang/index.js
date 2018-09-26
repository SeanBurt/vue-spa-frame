import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import messages from './lang'

Vue.use(VueI18n)

// 从localStorage中拿到用户的语言选择，如果没有，那默认中文
const i18n = new VueI18n({
  locale: 'cn',
  messages
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n
