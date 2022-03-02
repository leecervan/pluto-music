import axios from 'axios'

const service = axios.create({
  timeout: 5000,
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    // return response
    // 延迟返回数据，测试 loading 效果
    // console.log('Get response:', response)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response)
      }, 1000)
    })
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
