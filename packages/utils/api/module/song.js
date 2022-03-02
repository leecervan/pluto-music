import axios from 'axios'

/**
 * 新歌速递
 * @param {number} type
 */
export const getTopSong = (type = 7) => {
  return axios({
    url: '/api/top/song',
    method: 'get',
    params: { type },
  })
}

/**
 * 新歌速递 patch，支持 limit 参数
 * @param {number} type
 */
export const getTopSongPatch = ({ type = 7, limit } = {}) => {
  return axios({
    url: '/patch/top/song',
    method: 'get',
    params: { type, limit },
  })
}

/**
 * 获取歌曲详情，支持同时获取多个
 * @param {number | array} id
 */
export const getSongDetail = id => {
  const ids = Array.isArray(id) ? id.join(',') : id
  return axios({
    url: '/api/song/detail',
    method: 'get',
    params: { ids },
  })
}

/**
 * 获取歌曲 URL 地址
 * @param {number | string} id
 */
export const getSongUrl = id => {
  return axios({
    url: '/api/song/url',
    method: 'get',
    params: { id },
  })
}

/**
 * 获取歌词
 * @param {Number} id
 */
export const getLyric = id => {
  return axios({
    url: '/api/lyric',
    method: 'get',
    params: { id },
  })
}
