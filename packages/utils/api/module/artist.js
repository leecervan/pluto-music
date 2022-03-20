import request from '../../request'

/**
 * 获取歌手分类
 * @param {*} param0
 * @returns
 */
export const getArtistCate = function ({
  cat = 1001,
  initial = '',
  type = -1, // -1全部 1男歌手 2女歌手 3乐队
  area = -1, // -1全部 7华语 96欧美 8日本 16韩国 0其他
  limit = 100,
  offset = 0,
} = {}) {
  return request({
    url: '/api/artist/list',
    method: 'get',
    params: { cat, initial, type, area, limit, offset },
  })
}

/**
 * 获取歌手详情
 * @param {*} param0
 * @returns
 */
export const getArtistDetail = ({ id }) =>
  request({
    url: '/api/artists/detail',
    method: 'get',
    params: { id },
  })

/**
 * 获取歌手专辑
 * @param {*} param0
 * @returns
 */
export const getArtistAlbum = params =>
  request({
    url: '/api/artist/album',
    method: 'get',
    params: { limit: 12, offset: 0, ...params },
  })

/**
 * 获取歌手 MV
 * @param {*} params
 * @returns
 */
export const getArtistMv = params =>
  request({
    url: '/api/artist/mv',
    method: 'get',
    params: { limit: 12, offset: 0, ...params },
  })

/**
 * 获取歌手简介
 * @param {*} param0
 * @returns
 */
export const getArtistDesc = ({ id }) =>
  request({
    url: '/api/artist/desc',
    method: 'get',
    params: { id },
  })

/**
 * 获取热门歌手
 * @param {*} param0
 * @returns
 */
export const getTopArtist = ({ offset = 0, limit = 9 } = {}) =>
  request({
    url: '/api/top/artists',
    method: 'get',
    params: { offset, limit },
  })

export default {}
