import post from './postModel'
import makePromise from '../lib/makePromise'

export const tagList = () =>
    post.distinct('tags', {}).exec()

export const tagArticle = tag =>
    post.find({ tags: { "$in" : [tag] }}).sort({ createDate: -1 }).exec()
