import {
  COLLAPSE_MUTATION,
  ADD_ERROR_LOG_MUTATION,
  CHANGE_MENU_INDEX_MUTATION
} from './mutation-types'

export default {
  [COLLAPSE_MUTATION] (state) {
    state.isCollapse = !state.isCollapse
  },
  [ADD_ERROR_LOG_MUTATION] (state, payload) {
    state.errorLogs.push(payload)
  },
  [CHANGE_MENU_INDEX_MUTATION] (state, payload) {
    state.currentMenuIndex = payload
  }
}
