import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/jrb-web/table/list',
    method: 'get',
    params
  })
}
