// 自动分析域名后缀
export const domain = (domain => {
  var ares = domain.split(':')[0].split('.')
  ares.shift()
  ares.unshift('')
  return ares.join('.')
})(document.domain)

let prophet = ''
let origin = window.location.origin
if (origin.indexOf('mazc') !== -1) {
  prophet = 'a'
} else if (origin.indexOf('sunxd') !== -1) {
  prophet = 'b'
} else {
  prophet = 'c'
}
export const PROPHET = prophet
