"use strict"
import * as article from '../../model/article'
import { getList, getTime } from '../../model/articleList'
import marked from 'marked'

/**
 * Controllers about article
 * @type {Object}
 */


/**
 * Get single article by `_id`
 */
export function *singleArticle(id) {
    const data = yield article.getBody(id)
    this.send('json', data)
}

/**
 * Get index with summary
 */
export function *index() {
    const
        start = +this.query['start'] || 0,
        limit = +this.query['limit'] || 5,
        list = yield getList(start, limit, ['summary', 'break'])

    this.send('json', list)
}

/**
 * Get list with only title and time
 */
export function *titles() {
    const
        start = +this.query['start'] || 0,
        limit = +this.query['limit'] || 5,
        list = yield getList(start, limit)

    this.send('json', list)
}

/**
 * Get archive by time
 */
export function  *archive() {
    const
        start = +this.query['start'],
        end = +this.query['end'],
        list = yield getTime(start, end)

    this.send('json', list)
}

/**
 * Edit or create new article
 */
export function  *edit(id, child) {
    const session = yield this.session()
    if (!session.data.auth) {
        return this.redirect('/login')
    }
    const
        form_data = yield this.getBody(),
        marked_string = yield getMarked(form_data.body),
        paras = marked_string.split('<!--more-->')

    let new_post = {
        title: form_data.title,
        body: marked_string,
        bodySource: form_data.body,
        summary: paras[0],
        break: !!paras[1]
    }

    if (form_data.type) { 
        new_post.type = form_data.type
    }

    if (form_data.tags) {
        if (form_data.tags.slice(-1) === ';') {
            new_post.tags = form_data.tags.slice(0, -1)
                            .split(';').map(s => s.trim())
        }
    }
    try {
        if (id && child) {
            yield article.update(id, new_post)
        } else {
            yield article.create(new_post)
        }
    } catch(e) {
        console.log(e)
        return this.error(e, 500)
    }

    this.send({
        status:201,
        headers: {
            Location: '/admin'
        }
    })
}

function getMarked(string) {
    return new Promise((res, rej) => {
        marked(string,
            (err, data) => err ? rej(err) : res(data))
    })
}