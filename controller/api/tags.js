"use strict"

import M from '../../model/db'

const fetchTagList = () =>
    new Promise((res, rej) => {
        M.distinct('tags', {}, (err, doc) =>
            err ? rej(err) : res(doc))
    })

export function* tagList() {

}
