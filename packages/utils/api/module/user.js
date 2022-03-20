import request from '../../request'

const pre = path => `/api/user${path}`

/**
 * 获取用户详情
 * @param {*} param0
 * @returns
 */
export const getUserDetail = ({ uid }) =>
  request({
    url: pre`/detail`,
    method: 'get',
    params: { uid },
  })

/**
 * 获取用户歌单
 * @param {*} param0
 * @returns
 */
export const getUserPlaylist = ({ uid }) =>
  request({
    url: pre`/playlist`,
    method: 'get',
    params: { uid },
  })

/**
 * 获取用户动态
 * @param {*} param0
 * @returns
 */
export const getUserEvent = ({ uid, limit = 20, lasttime } = {}) =>
  request({
    url: pre`/event`,
    method: 'get',
    params: { uid, limit, lasttime },
  })

/**
 * 获取用户关注列表
 * @param {*} param0
 * @returns
 */
export const getUserFollows = ({ uid, limit = 20, offset = 0 } = {}) =>
  request({
    url: pre`/follows`,
    method: 'get',
    params: { uid, limit, offset },
  })

/**
 * 获取用户粉丝列表
 * @param {*} param0
 * @returns
 */
export const getUserFolloweds = ({ uid, limit = 20, offset = 0 } = {}) =>
  request({
    url: pre`/followeds`,
    method: 'get',
    params: { uid, limit, offset },
  })
