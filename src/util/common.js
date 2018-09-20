function getHashUrlQuery (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&#]*)(&|#|$)', 'i')
  let url = window.location.href
  let r = url.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  } else {
    return ''
  }
}

function getUrlQuery (name, Url) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURI(r[2])
  } else {
    return ''
  }
}

function getDevice () {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return 'wx'
  } else if (/iphone|ipad|ipod/.test(ua)) {
    return 'ios'
  } else if (/android/.test(ua)) {
    return 'android'
  }
}

function checkMobile (mobile) {
  var strPhone = /^1[0-9]{10}$/
  if (mobile && mobile.length === 11 && strPhone.test(mobile)) {
    return true
  }
  return false
}

function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function isType (type, val) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}

function numFormat (val, count) {
  if (isType('String', val)) {
    if (val.indexOf('E') !== -1) {
      let ary = []
      ary = val.split('E')
      val = +ary[0]
      val = val.toFixed(count)
      val = val + 'E' + ary[1]
    } else {
      val = +val
      val = val.toFixed(count)
    }
  }
  if (isType('Number', val)) {
    val = val.toFixed(count)
  }
  if (!val && +val !== 0) {
    val = ''
  }
  return val
}

function dateFormat (fmt, val) {
  if (!val) {
    return ''
  }
  let self = void 0
  if (isNumeric(val)) {
    self = new Date(val * 1000)
  } else {
    self = new Date(val.replace(new RegExp(/-/gm), '/'))
  }
  if (self.toString() === 'Invalid Date' || !self) {
    return val
  }
  let o = {
    'M+': self.getMonth() + 1,
    'd+': self.getDate(),
    'h+': self.getHours(),
    'm+': self.getMinutes(),
    's+': self.getSeconds(),
    'q+': Math.floor((self.getMonth() + 3) / 3),
    'S': self.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (self.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

function getDateDiff (startTime, endTime) {
  let isEndTime = endTime
  let times = 0
  let tags = {
    day: 1000 * 3600 * 24,
    hour: 1000 * 3600,
    minute: 1000 * 60,
    second: 1000
  }

  if (!startTime) {
    return `0时0分0秒`
  }
  if (!isEndTime) {
    endTime = new Date()
    // 后端timestamp返回的是秒级，getTime()返回的是毫秒级
    if (isNumeric(+startTime)) {
      times = parseInt(endTime.getTime() - startTime * 1000)
    } else {
      times = parseInt(endTime.getTime() - new Date(startTime).getTime())
    }
  }
  if (isEndTime) {
    if (isNumeric(+startTime)) {
      times = parseInt(endTime - startTime) * 1000
    } else {
      startTime = startTime.replace(/-/g, '/')
      endTime = endTime.replace(/-/g, '/')
      times = parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())
    }
  }
  return `${parseInt(times / tags.hour)}时${parseInt(times % tags.hour / tags.minute)}分${parseInt(times % tags.minute / tags.second)}秒`
}

function guid () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

function cartesian (...lists) {
  return lists
    .map(list => list.map(item => [item]))
    .reduce((listsA, listsB) =>
      listsA.reduce((list, listA) =>
        list.concat(
          listsB.map(listB => listA.concat(listB))
        ), []
      )
    )
}

function copyToClipboard (val) {
  const input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', val)
  document.body.appendChild(input)
  input.focus()
  input.setSelectionRange(0, 9999)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
  }
  document.body.removeChild(input)
}

function syntaxHighlight (json) {
  if (typeof json !== 'string') {
    json = JSON.stringify(json, undefined, 2)
  }
  json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
    let cls = 'number'
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key'
      } else {
        cls = 'string'
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean'
    } else if (/null/.test(match)) {
      cls = 'null'
    }
    return '<span class="' + cls + '">' + match + '</span>'
  })
}

function replaceAll (val, str, replaceStr) {
  let regx = new RegExp(`${str}`, 'g')
  return val.replace(regx, replaceStr)
}

class WoodenBarrel {
  constructor (opts) {
    this.containerWidth = opts.containerWidth || document.body.clientWidth
    this.imgs = opts.imgs
    this.rowBaseHeight = opts.rowBaseHeight || 200
    this.rowTotalWidth = 0
    this.rowList = []
    this.calculate()
  }
  calculate () {
    if (!this.imgs || !this.imgs.length) {
      return
    }
    let rows = []
    this.imgs.forEach(img => {
      img.formatWidth = img.orginWidth * this.rowBaseHeight / img.originHeight
      if (this.rowTotalWidth + img.formatWidth <= this.containerWidth) {
        rows.push(img)
        this.rowTotalWidth += img.formatWidth
      } else {
        let rowHeight = this.containerWidth * this.rowBaseHeight / img.rowTotalWidth
        this.rowList.push({
          rowHeight: rowHeight,
          items: rows
        })
        rows = [img]
        this.rowTotalWidth = img.formatWidth
      }
    })
  }
}

export default {
  getHashUrlQuery: getHashUrlQuery,
  getUrlQuery: getUrlQuery,
  getDevice: getDevice,
  checkMobile: checkMobile,
  numFormat: numFormat,
  dateFormat: dateFormat,
  getDateDiff: getDateDiff,
  guid: guid,
  isNumeric: isNumeric,
  isType: isType,
  cartesian: cartesian,
  copyToClipboard: copyToClipboard,
  syntaxHighlight: syntaxHighlight,
  replaceAll: replaceAll,
  WoodenBarrel: WoodenBarrel
}
