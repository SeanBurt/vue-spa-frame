import {
  TEST_MUTATION,
  ADD_ERROR_LOG_MUTATION,
  CHANGE_MENU_INDEX_MUTATION
} from './mutation-types'

export default {
  [TEST_MUTATION] (context) {
    context.commit(TEST_MUTATION)
  },
  [ADD_ERROR_LOG_MUTATION] ({ commit }, payload) {
    commit('ADD_ERROR_LOG_MUTATION', payload)
  },
  [CHANGE_MENU_INDEX_MUTATION] ({ commit }, payload) {
    commit('CHANGE_MENU_INDEX_MUTATION', payload)
  }
}
