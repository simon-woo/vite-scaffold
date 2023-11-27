import request from '@/plugins/request'

const getAccountDetail = (params) => request.get('/api/v1/account', { params })

export {
  getAccountDetail,
}
