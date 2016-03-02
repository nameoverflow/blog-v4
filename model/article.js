import { post } from './db'
import makePromise from '../lib/makePromise'

export const getBody = (id) =>
    makePromise(post.findById(id, '-bodySource -summary'))

export const getSource = (id) =>
    makePromise(post.findById(id))


