import axios from 'axios'
import request from '../../request'

/**
 * 最新专辑
 */
export const getAlbumNewest = () => {
  return axios({
    url: '/api/album/newest',
    method: 'get',
  })
}

/**
 * 新碟上架
 * @param {number} limit
 * @param {number} offset
 */
export const getTopAlbum = ({ limit = 50, offset = 0 } = {}) => {
  return axios({
    url: '/api/top/album',
    method: 'get',
    params: { limit, offset },
  })
}

export const getAlbumNew = params => {
  return request({
    url: '/api/album/new',
    method: 'get',
    params: {
      area: 'ALL',
      limit: 35,
      offset: 0,
      ...params,
    },
  })
}

/**
 * 专辑内容
 * @param {number} id
 */
export const getAlbumDetail = id => {
  return axios({
    url: '/api/album',
    method: 'get',
    params: { id },
  })
}
