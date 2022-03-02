import axios from 'axios'

/**
 * 电台排行榜
 * type = 'hot' 热门电台
 * type = 'new' 新晋电台
 * @param {string} type
 * @param {number} limit
 * @param {number} offset
 */
export const getToplistDj = ({ type = 'hot', limit = 10, offset = 0 } = {}) => {
  return axios({
    url: '/api/dj/toplist',
    method: 'get',
    params: { type, limit, offset },
  })
}
