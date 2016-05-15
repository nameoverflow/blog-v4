import mongo, { Schema } from 'mongoose'

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

let post = mongo.model('Post', postSchema)

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
    return cur.exec()
}

export default post