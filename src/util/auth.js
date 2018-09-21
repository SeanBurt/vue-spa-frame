import storage from './storage'
import common from './common'

const IDENTITY_KEY = 'user_id'
const NODE_SERVER_URL = `//${window.location.hostname}:8360/`
const identity = storage.readCookie(IDENTITY_KEY) || ''

function checkLogin () {
  return !!identity
}

function uuapLogin () {
  let redirect = common.getUrlQuery('redirect') || `//${window.location.host}`
  window.location.href = `${NODE_SERVER_URL}?login_via_uuap=1&redirect=${redirect}&auth=//${window.location.host}/Auth`
}

function logout () {
}

export default {
  checkLogin: checkLogin,
  uuapLogin: uuapLogin,
  logout: logout,
  identity: identity
}
