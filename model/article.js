import { marked } from 'marked'
import { post } from './db'


export function getBody(id) {
    return new Promise((res, rej) => {
        post.findById(id, '-bodySource -summary',
            (err, data) => err ? rej(err) : res(data))
    })
}

export function  getSource(id) {
    return new Promise((res, rej) => {
        post.findById(id,
            (err, data) => err ? rej(err) : res(data))
    })
}

export function  create(data) {
    data.type = 'article'
    return new Promise((res, rej) => {
        cur = new post(data)
        data.save((err) => err ? rej(err) : res())
    })
}

export function update(id, data) {
    data['editDate'] = Date.now()
    return new Promise((res, rej) => {
        post.update({ _id: id }, data,
            (err) => err ? rej(err) : res())
    })
}
