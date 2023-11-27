import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
})

service.interceptors.request.use(
  // 根据具体业务逻辑调整
  (config) => {
    const userInfo = localStorage.getItem('userInfo')
    let token = ''
    if (userInfo) {
      token = JSON.parse(userInfo).token
    }
    config.headers.Authorization = token;
    return config
  },
  (error) => Promise.reject(error)
)

service.interceptors.response.use(
  // 根据具体业务逻辑调整
  (response) => response?.data,
  (error) => Promise.reject(error)
)

export default service
