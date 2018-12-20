import { ajax } from '../util'
import { SG } from './config'

/**
 * 获取项目列表
 */
export const GetProject = (params) => {
  ajax.get(SG['GetProject'], {
    params: params
  })
}
