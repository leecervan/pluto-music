import axios from 'axios'

/**
 * 所有榜单简介(建议使用 getToplistDetail 代替)
 */
export const getAllRankDetail = () => {
  return axios({
    url: '/api/toplist',
    method: 'get',
  })
}

/**
 * 所有榜单详情(某些包含热门的前三首歌)
 */
export const getToplistDetail = () => {
  return axios({
    url: '/api/toplist/detail',
    method: 'get',
  })
}

/**
 * 获取指定榜单的详细信息
 * @param {number|string} id
 */
export const getRankList = id => {
  return axios({
    url: '/api/top/list',
    method: 'get',
    params: { id },
  })
}
