import request from '@/plugins/request'

const getHomeList = (params) => request.get('/api/v1/home', { params })

export {
  getHomeList,
}
