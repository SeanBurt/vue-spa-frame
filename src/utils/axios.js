import auth from './auth'
const axios = require('axios')

function formatData (data) {
  if (!data) return null
  let arr = []
  for (let name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }
  return arr.join('&')
}

function formatDataJson (data) {
  if (!data) return null
  return JSON.stringify(data)
}

function initOptions (method, url, data, success, failure) {
  let opts = {
    method: method,
    url: url,
    data: data,
    success: success,
    failure: failure
  }
  return opts
}

/**
 * 封装axios
 * @param {String} method    请求的类型，默认post
 * @param {String} url    请求地址（在config.js里配置）
 * @param {Object} data    请求参数
 * @param {Object} headers    自定义请求headers
 * @param {Int} timeout    超时时间
 * @param {Function} success    请求成功后，这里会有一个参数,服务器返回数据 data
 * @param {Function} failure    请求失败处理函数
 * @param {Boolean} withCredentials    跨域请求时是否传递cookie(默认true：传递)
 * @param {Boolean} noIdentity    是否验证身份（默认false:验证身份）
 * @param {Boolean} rsaData    是否加密参数（默认false:不加密）
 * @param return
 */
async function apiAxios (opt = {}) {
  let opts = opt
  let url = opts.url
  if (!url) {
    console.error('request url must not empty!')
    return
  }
  let data = opts.data || {}
  let method = opts.method || 'POST'
  method = method.toUpperCase()

  let rsaData = !!opts.rsaData
  // 进行参数加密处理
  if (rsaData) {
  }

  let noIdentity = !!opts.noIdentity
  // 进行身份处理
  if (!noIdentity) {
  }

  return axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' || method === 'DELETE' ? data : null,
    params: method === 'GET' ? data : null,
    transformRequest: [
      function (data) {
        if (
          opts.headers &&
          opts.headers['Content-Type'] === 'application/json'
        ) {
          return formatDataJson(data)
        } else return formatData(data)
      }
    ],
    paramsSerializer: function (params) {
      return formatData(params)
    },
    headers: opts.headers || {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Prophet-Token': auth.identity
    },
    timeout: opts.time || 120 * 1000,
    responseType: opts.dataType || 'json',
    withCredentials: opts.withCredentials !== false,
    cache: false
  })
    .then(function (res) {
      let ret = res.data
      if (res.status >= 200 && res.status < 300) {
        if (opts.success) {
          if (ret.context.status === 0) {
            opts.success(ret.data)
          } else {
            opts.failure(ret.context.message)
          }
        }
      } else if (opts.failure) {
        opts.failure(ret)
      }
    })
    .catch(function (err) {
      if (!err) return
      try {
        if (opts.failure) {
          opts.failure(err.message)
        }
      } catch (e) {
        console.error(e)
      }
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, data, success, failure) {
    let opts = initOptions('GET', url, data, success, failure)
    return apiAxios(opts)
  },
  post: function (url, data, success, failure) {
    let opts = initOptions('POST', url, data, success, failure)
    return apiAxios(opts)
  },
  put: function (url, data, success, failure) {
    let opts = initOptions('PUT', url, data, success, failure)
    return apiAxios(opts)
  },
  delete: function (url, data, success, failure) {
    let opts = initOptions('DELETE', url, data, success, failure)
    return apiAxios(opts)
  },
  ajax: function (opt) {
    return apiAxios(opt)
  }
}
