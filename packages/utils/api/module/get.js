import axios from 'axios'
import request from '../../request'

// axios.defaults.baseURL = 'http://47.113.104.231:8000'

/**
 * log res.data
 * @param {string} url
 */
export const log = url => {
  axios.get(url).then(res => {
    console.log(res.data)
  })
}

/**
 * 获取轮播图数据
 * @param {number} type
 * 0: pc
 * 1: android
 * 2: iphone
 * 3: ipad
 */
export const getBanner = (type = 1) => {
  return axios({
    url: '/api/banner',
    method: 'get',
    params: { type },
  })
}

// 首页新碟上架
export const getNewest = () => {
  return request({
    url: '/api/album/newest',
    method: 'get',
  })
}

// PC：首页推荐歌单
export const getPersonalized = limit => {
  return request({
    url: '/api/personalized',
    method: 'get',
    params: { limit },
  })
}
