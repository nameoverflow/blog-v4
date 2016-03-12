import { post } from './db'

export default function (id, data) {
    if (data) {
        return new Promise((res, rej) => {
            post.update({ _id: id }, data,
                (err) => err ? rej(err) : res())
        })
    } else {
        data = id
        data['editDate'] = Date.now()
        return new Promise((res, rej) => {
            const cur = new post(data)
            cur.save((err) => err ? rej(err) : res())
        })
    }
}
