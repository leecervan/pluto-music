import axios from 'axios'
import * as get from './module/get'
import * as song from './module/song'
import * as album from './module/album'
import * as playlist from './module/playlist'
import * as rank from './module/rank'
import * as dj from './module/dj'
import * as artist from './module/artist'
import * as search from './module/search'
import * as comment from './module/comment'
import * as video from './module/video'
import * as mv from './module/mv'
import * as user from './module/user'

if (process.env.NODE_ENV === 'production') {
  // 构建时
  axios.defaults.baseURL = 'https://api.music.lizhiwen.online'
}

export default {
  ...get,
  ...song,
  ...album,
  ...playlist,
  ...rank,
  ...dj,
  ...artist,
  ...search,
  ...comment,
  ...video,
  ...mv,
  ...user,
}
