"use strict"
import jade from 'jade'

function render(path, data = {}) {
    const fuck = jade.compileFile(`${this.getConf('view').path}${path}.jade`)
    data._conf = this.getConf('tpl_globals')
    const html = fuck(data)
    this.cache.set(this.url.path, html)
    return this.send('html', html)
}

export default conn => conn.render = render
