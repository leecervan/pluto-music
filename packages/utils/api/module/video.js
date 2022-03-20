import request from '../../request'

/**
 * 获取 video 的相关视频
 * @param {*} param0
 * @returns
 */
export const getRelatedVideo = ({ id }) =>
  request({
    url: '/api/related/allvideo',
    method: 'get',
    params: { id },
  })
