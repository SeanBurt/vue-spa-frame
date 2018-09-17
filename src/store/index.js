import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import { storage } from '../utils'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import common from './modules/common'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  test: 'hello',
  currentProject: JSON.parse(storage.getLocalStore('PROJECT')) || {
    name: '',
    id: ''
  },
  errorLogs: [],
  currentMenuIndex: '0'
}

export default new Vuex.Store({
  state: state,
  getters,
  mutations,
  actions,
  modules: {
    common
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
