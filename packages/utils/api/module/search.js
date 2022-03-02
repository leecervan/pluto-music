import axios from 'axios'

const SEARCH_TYPE = {
  SONG: 1,
  ALBUM: 10,
  ARTIST: 100,
  PLAYLIST: 1000,
  USER: 1002,
  MV: 1004,
  LYRIC: 1006,
  DJ: 1009,
  VIDEO: 1014,
  ALL: 1018,
}

/**
 * 获取默认搜索关键字
 */
export const getSearchDefault = _ => {
  return axios({
    url: '/api/search/default',
    method: 'get',
  })
}

/**
 * 获取热搜(详细)
 */
export const getSearchHotDetail = _ => {
  return axios({
    url: '/api/search/hot/detail',
    method: 'get',
  })
}

/**
 * 获取搜索建议
 * @param {String} keywords
 * @param {String} type
 */
export const getSearchSuggest = (keywords, type = 'mobile') => {
  return axios({
    url: '/api/search/suggest',
    method: 'get',
    params: { keywords, type },
  })
}

/**
 * 获取搜索结果
 * type: 1(单曲), 10(专辑), 100(歌手), 1000(歌单), 1002(用户)
 *       1004(MV), 1006(歌词), 1009(电台), 1014(视频), 1018(综合)
 * @param {String} keywords
 * @param {Number} limit
 * @param {Number} offset
 * @param {Number} type
 */
export const getSearch = ({
  keywords,
  limit = 30,
  offset = 0,
  type = 'ALL',
} = {}) => {
  /* const params = type === 1018
    ? { keywords, type }
    : { keywords, limit, offset, type } */
  return axios({
    url: '/api/search',
    method: 'get',
    params: {
      keywords,
      type: SEARCH_TYPE[type],
      limit,
      offset,
    },
  })
}

/**
 * 获取搜索多重匹配
 * @param {String} keywords
 */
export const getSearchMultimatch = keywords => {
  return axios({
    url: '/api/search/multimatch',
    method: 'get',
    params: { keywords },
  })
}
