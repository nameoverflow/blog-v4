import post from './postModel'
import makePromise from '../lib/makePromise'

export const getBody = (title) =>
    post.findOne({ title: title }).exec()

export const getList = (start, limit = 0) =>
    post.fetchList(start, limit, [], {
        type: 'page'
    })
