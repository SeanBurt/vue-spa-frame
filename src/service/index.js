import { ajax } from '../utils'
import { SG } from './config'

/**
 * 获取项目列表
 */
export const GetProject = (params, suc, fail) => {
  ajax.get(SG['GetProject'], params, suc, fail)
}
