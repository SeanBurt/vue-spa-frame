import { domain } from './env'

function readCookie (name) {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return ''
  }
}

function createCookie (name, value, expires) {
  let exp = new Date()
  exp.setTime(exp.getTime() + Number(expires) * 1000)
  document.cookie = `${name}=${value};expires=${exp.toGMTString()};domain=${domain};path=/`
}

function eraseCookie (name) {
  createCookie(name, '', -1)
}

/**
 * 存储localStorage
 */
function setLocalStore (name, content) {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
function getLocalStore (name) {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
function removeLocalStore (name) {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 存储sessionStorage
 */
function setSessionStore (name, content) {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取sessionStorage
 */
function getSessionStore (name) {
  if (!name) return
  return window.sessionStorage.getItem(name)
}

/**
 * 删除sessionStorage
 */
function removeSessionStore (name) {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

export default {
  readCookie: readCookie,
  createCookie: createCookie,
  eraseCookie: eraseCookie,
  setLocalStore: setLocalStore,
  getLocalStore: getLocalStore,
  removeLocalStore: removeLocalStore,
  setSessionStore: setSessionStore,
  getSessionStore: getSessionStore,
  removeSessionStore: removeSessionStore
}
