import { PROPHET } from '../utils/env'

export const BASE = {
  ServerURI: PROPHET
}

export const SG = {
  // 获取项目列表
  GetProject: `${PROPHET}v1/project/projects`
}
