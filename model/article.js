import { post } from './db'
import makePromise from '../lib/makePromise'

export const getBody = (id) =>
    makePromise(post.findById(id, '-bodySource -summary -break -type'))

export const getSource = (id) =>
    makePromise(post.findById(id))

export const remove = id =>
    makePromise(post.findOneAndRemove({ _id: id }))
