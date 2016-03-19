"use strict"
import jade from 'jade'
import path from 'path'

function render(fn, data = {}) {
    const p = path.resolve(this.getConf('view').path, `${fn}.jade`)
    const fuck = jade.compileFile(p)
    data._conf = this.getConf('tpl_globals')
    const html = fuck(data)
    this.cache.set(this.url.path, html)
    return this.send('html', html)
}

export default conn => conn.render = render
