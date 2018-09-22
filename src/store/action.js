import {
  COLLAPSE_MUTATION,
  ADD_ERROR_LOG_MUTATION,
  CHANGE_MENU_INDEX_MUTATION
} from './mutation-types'

export default {
  [COLLAPSE_MUTATION] (context) {
    context.commit(COLLAPSE_MUTATION)
  },
  [ADD_ERROR_LOG_MUTATION] ({ commit }, payload) {
    commit('ADD_ERROR_LOG_MUTATION', payload)
  },
  [CHANGE_MENU_INDEX_MUTATION] ({ commit }, payload) {
    commit('CHANGE_MENU_INDEX_MUTATION', payload)
  }
}
