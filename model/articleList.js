import { post } from './db'

export function getList(start, limit, fields) {
    return post.fetchList(start, limit, fields)
}

export function getTime(start, end) {
    const
        conditions = {
            type: 'article',
            createDate: {
                $gte: start,
                $lte: end
            }
        }
    return new Promise((res, rej) => {
        post.find(conditions,
            '_id title createDate tags',
            (err, data) => err ? rej(err) : res(data))
    })
}
