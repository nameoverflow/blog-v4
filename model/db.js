"use strict"

import mongo, { Schema } from 'mongoose'
import _conf from '../config'
const { site: { db: conf } } = _conf

let db = mongo.connection

db.on('error', (err) => {
    throw new Error(`Mongoose connection error: ${err}`)
})

db.on('connnected', () => {
    console.log('Mongoose connected')
})

db.on('disconnnected', () => {
    console.log('Mongoose disconnected')
})


process.on('SIGINT', () => {
    mongo.connection.close(() => {
        console.log('Mongoose disconnected through app termination')
        process.exit(0)
    })
})

mongo.connect(conf.url)


const postSchema = new Schema({
    title: String,
    summary: String,
    body: String,
    bodySource: String,
    createDate: {
        type: Number,
        default: Date.now
    },
    editDate: {
        type: Number,
        default: Date.now
    },
    tags: {
        type: [String],
        default: []
    },
    type: {
        type: String,
        default: 'article'
    },
    break: {
        type: Boolean,
        default: false
    }
})

export let post = mongo.model('Post', postSchema)

post.fetchList = function (start, limit, field, conditions) {
    const
        cond = conditions || {
            type: 'article'
        },
        fields = ['_id', 'title', 'tags', 'createDate'].concat(field).join(' ')
    let cur = post.find(cond)
        .sort({ createDate: -1 })
        .select(fields)
        .skip(start)
    if (limit) {
        cur.limit(limit)
    }
    return new Promise((res, rej) => {
        cur.exec((err, data) => err ? rej(err) : res(data))
    })
}
