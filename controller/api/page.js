"use strict"

import * as page from '../../model/page'

export function *singlePage(title) {
    const data = yield page.getBody(title)
    data ? this.send('json', data) : this.error('not found', 404)
}

export function *pageList() {
    const
        start = +this.query['start'] || 0,
        limit = +this.query['limit'] || 5,
        list = yield page.getList(start, limit, ['summary', 'break'])

    this.send('json', list)

}
