import { post } from './db'

export function getBody(title) {
    return new Promise((res, rej) => {
        post.findOne({ title: title },
            (err, data) => err ? rej(err) : res(data))
    })
}

export function getList(start, limit) {
    return post.fetchList(start, limit, [], {
        type: 'page'
    })
}
