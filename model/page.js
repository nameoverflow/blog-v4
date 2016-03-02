import { post } from './db'
import makePromise from '../lib/makePromise'

export const getBody = (title) =>
    makePromise(post.findOne({ title: title }))

export function getList(start, limit) {
    return post.fetchList(start, limit, [], {
        type: 'page'
    })
}
