import { post } from './db'
module.exports = {
    getBody(title) {
        return new Promise((res, rej) => {
            post.findOne({title: title},
                (err, data) => err ? rej(err) : res(data))
        })
    },

    getList(start, limit) {
        return post.fetchList(start, limit, [], {
            type: 'page'
        })
    },

    create(data) {
        data.type = 'page'
        return new Promise((res, rej) => {
            cur = new post(data)
            data.save(() => err ? rej(err) : res())
        })
    }
}