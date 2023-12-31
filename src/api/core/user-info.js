import request from '@/utils/request'

export default {
    getPageList(page, limit, searchObj) {
        return request({
            url: `/admin/core/userInfo/list/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },

    lock(id, status) {
        return request({
            url: `/admin/core/userInfo/lock/${id}/${status}`,
            method: 'put'
        })
    },

    getuserLoginRecordTop(userId) {
        return request({
            url: `/admin/core/userLoginRecord/listTop/${userId}`,
            method: 'get'
        })
    }


}