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

