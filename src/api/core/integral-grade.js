import request from '@/utils/request'

export default {
    list() {
        return request({
            url: '/admin/core/integralGrade/list',
            method: 'get'
        })
    }
}