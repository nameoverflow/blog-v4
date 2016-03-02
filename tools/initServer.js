"use strict"
import eliter from 'eliter'
import pygment from 'pygmentize-bundled'
import marked from 'marked'
import config from '../config.json'
import addRoutes from '../controller'
import render from '../lib/render'

const server = new eliter(config)

server.decor(render)

marked.setOptions({
    highlight(code, lang, callback) {
        pygment({
            lang: lang,
            format: 'html',
            options: {
                encoding: 'utf-8'
            }
        }, code, (err, res) =>
            callback(err, res && res.toString()))
    }
})

addRoutes(server)

export default server
