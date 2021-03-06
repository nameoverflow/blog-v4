"use strict"

import * as article from '../../model/article'

import {
    getList, getByTime, firstYear
} from '../../model/articleList'


/**
 * Controllers about article
 * @type {Object}
 */


/**
 * Get single article by `_id`
 */
export function *single(id) {
    const source = this.query && this.query.source
    const data = yield this.query && this.query.hasOwnProperty('source') ? article.getSource(id) : article.getBody(id)
    this.send('json', data)
}

/**
 * Get list with fields in query
 */
export function *list() {
    const
        start = +this.query['start'] || 0,
        limit = +this.query['limit'],

        fields = ['summary', 'break', 'body', 'bodySource'].filter(
                    v => this.query.hasOwnProperty(v)),

        list = yield getList(start, limit, fields)

    this.send('json', list)
}

// /**
//  * Get list with only title and time
//  */
// export function *titles() {
//     const
//         start = +this.query['start'] || 0,
//         limit = +this.query['limit'] || 5,
//         list = yield getList(start, limit)

//     this.send('json', list)
// }

/**
 * Get archive by time
 */
export function *archive(year) {
    // TODO: Get one year
    const start_time = new Date(+year, 0, 1).getTime()
    const end_time = new Date(+year + 1, 0, 1).getTime()
    const data = yield getByTime(start_time, end_time)
    this.send('json', data)
}
export function *years() {
    const first_year = yield firstYear()
    const cur = new Date().getFullYear()
    let list = []
    for (let i = cur; i >= first_year; i--) {
        list.push(i)
    }
    this.send('json', list)
}

export function *remove(id) {
    yield article.remove(id)
    this.send({
        status: 204 
    })
}
