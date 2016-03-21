import { post } from './db'

export function getList(start, limit, fields) {
    return post.fetchList(+start, +limit, fields)
}

export function getByTime(start, end) {
    const conditions = {
            type: 'article',
            createDate: {
                $gte: start,
                $lte: end
            }
        }
    return new Promise((res, rej) => {
        post.find(conditions,
            '_id title createDate tags')
            .sort({ createDate: -1 })
            .exec((err, data) => err ? rej(err) : res(data))
    })
}

export function firstYear() {
    return new Promise((res, rej) => {
        post.find({ type: 'article' })
            .sort({ createDate: 1 })
            .select('createDate')
            .limit(1)
            .exec((err, data) =>
                err ? rej(err) : res(new Date(data[0].createDate)
                                        .getFullYear()))
    })
}
