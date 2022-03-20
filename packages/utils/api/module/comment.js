import request from '../../request'

/**
 * 获取歌曲评论
 * @param {*} param0
 * @returns
 */
export const getMusicComment = ({ id, limit = 20, offset = 0 }) => {
  return request({
    url: '/api/comment/music',
    method: 'get',
    params: { id, limit, offset },
  })
}

/**
 * 获取 MV 评论
 * @param {*} param0
 * @returns
 */
export const getMvComment = ({
  id,
  limit = 20,
  offset = 0,
  before = '',
} = {}) =>
  request({
    url: '/api/comment/mv',
    method: 'get',
    params: { id, limit, offset, before },
  })

/**
 * 新版评论接口（好像有问题？）
 * @param {object} param
 * @param {number} param.id 歌曲 id
 * @param {number} param.type 0-歌曲 1-mv 2-歌单 3-专辑 4-电台 5-视频 6-动态
 * @param {number} param.pageNo 分页参数,第 N 页,默认为 1
 * @param {number} param.pageSize 分页参数,每页多少条数据,默认 20
 * @param {number} param.sortType 排序方式, 1:按推荐排序, 2:按热度排序, 3:按时间排序
 * @param {number} param.cursor 当 sortType 为 3 时且 pageNo 不是 1 时需传入,值为上一条数据的 time
 * @returns
 */
export const getComment = ({
  id,
  type,
  pageNo = 1,
  pageSize = 20,
  sortType = 2,
  cursor,
}) => {
  return request({
    url: '/api/comment/new',
    method: 'get',
    params: { id, type, pageNo, pageSize, sortType, cursor },
  })
}
