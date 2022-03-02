import axios from 'axios'

/**
 * 歌单详情
 * @param {number} id
 */
export const getPlaylistDetail = id => {
  return axios({
    url: '/api/playlist/detail',
    method: 'get',
    params: { id },
  })
}

/**
 * 歌单详情 patch，支持 limit 参数
 * @param {number} id
 * @param {Number} limit
 */
export const getPlaylistDetailPatch = ({ id, limit } = {}) => {
  return axios({
    url: '/patch/playlist/detail',
    method: 'get',
    params: { id, limit },
  })
}

/**
 * 歌单(网友精选碟)
 * @param {string} order
 * @param {string} cat
 * @param {number} limit
 * @param {number} offset
 */
export const getTopPlaylist = ({
  order = 'hot',
  cat = '全部',
  limit = 50,
  offset = 0,
} = {}) => {
  return axios({
    url: '/api/top/playlist',
    method: 'get',
    params: { order, cat, limit, offset },
  })
}

/**
 * 歌单分类
 */
export const getPlaylistCatlist = _ => {
  return axios({
    url: '/api/playlist/catlist',
    method: 'get',
  })
}

/**
 * 热门歌单分类
 */
export const getPlaylistHot = _ => {
  return axios({
    url: '/api/playlist/hot',
    method: 'get',
  })
}

/**
 * 精品歌单
 * @param {String} cat
 * @param {Number} limit
 * @param {Number} before 取上一页最后一个歌单的 updateTime 获取下一页数据
 */
export const getPlaylistHighquality = ({
  cat = '全部',
  limit = '50',
  before,
} = {}) => {
  return axios({
    url: '/api/top/playlist/highquality',
    method: 'get',
    params: { cat, limit, before },
  })
}

/**
 * 相关歌单推荐
 * @param {Number} id
 */
export const getRelatedPlaylist = id => {
  return axios({
    url: '/api/related/playlist',
    method: 'get',
    params: { id },
  })
}
