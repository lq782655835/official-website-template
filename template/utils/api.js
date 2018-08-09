import http from '~/utils/http.js'

/**
 * 合作咨询
 */
export const sendEmail = data =>
    http({
        url: `/topics`,
        method: 'get',
        data
    })
