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

