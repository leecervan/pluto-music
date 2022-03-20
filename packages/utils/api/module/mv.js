import request from '../../request'

/**
 * 获取 MV 详情
 * @param {*} param0
 * @returns
 */
export const getMvDetail = ({ mvid }) =>
  request({
    url: '/api/mv/detail',
    method: 'get',
    params: { mvid },
  })

/**
 * 获取 MV 地址
 * @param {*} param0
 * @returns
 */
export const getMvUrl = ({ id, r = 1080 } = {}) =>
  request({
    url: '/api/mv/url',
    method: 'get',
    params: { id, r },
  })
