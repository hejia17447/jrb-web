import request from '@/utils/request'

export default {
    list() {
        return request({
            url: '/admin/core/integralGrade/list',
            method: 'get'
        })
    },
    removeById(id) {
        return request({
            url: `/admin/core/integralGrade/remove/${id}`,
            method: 'delete'
        })
    }
}