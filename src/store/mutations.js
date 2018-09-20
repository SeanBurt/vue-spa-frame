import { storage } from '../util'
import {
  TEST_MUTATION,
  SET_PROJECT_MUTATION,
  ADD_ERROR_LOG_MUTATION,
  CHANGE_MENU_INDEX_MUTATION
} from './mutation-types'

export default {
  [TEST_MUTATION] (state) {
    state.test += ' world'
  },
  [SET_PROJECT_MUTATION] (state, payload) {
    state.currentProject = payload
    storage.setLocalStore('PROJECT', JSON.stringify(payload))
  },
  [ADD_ERROR_LOG_MUTATION] (state, payload) {
    state.errorLogs.push(payload)
  },
  [CHANGE_MENU_INDEX_MUTATION] (state, payload) {
    state.currentMenuIndex = payload
  }
}
