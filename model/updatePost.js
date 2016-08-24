import post from './postModel'
import makePromise from '../lib/makePromise'

export default function (id, data) {
    if (data) {
        return post.update({ _id: id }, data).exec()
    } else {
        data = id
        data['editDate'] = Date.now()
        return new post(data).save()
    }
}
