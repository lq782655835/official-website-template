import http from './http.js'

/**
 * 合作咨询
 */
export const sendEmail = data =>
    http({
        url: `/topics`,
        method: 'get',
        data
    })
