"use strict"

import { post } from './db'
import makePromise from '../lib/makePromise'

export const tagList = () =>
    makePromise(post.distinct('tags', {}))

export const tagArticle = tag =>
    makePromise(post.find({ tags: { "$in" : [tag] }}).sort({ createDate: -1 }))
