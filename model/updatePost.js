import { post } from './db'
import makePromise from '../lib/makePromise'

export default function (id, data) {
    if (data) {
        return makePromise(post.update({ _id: id }, data))
    } else {
        data = id
        data['editDate'] = Date.now()
        return new Promise((res, rej) => {
            const cur = new post(data)
            cur.save((err) => err ? rej(err) : res())
        })
    }
}
