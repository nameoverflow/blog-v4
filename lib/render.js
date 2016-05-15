import jade from 'jade'
import path from 'path'

function render(fn, data = {}) {
    const p = path.resolve(this.getConf('view').path, `${fn}.jade`)
    const fuck = jade.compileFile(p)
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV !== 'production') {
        data._staticPath = ''
        data._assets = this.getConf('bundle')
    } else {
        data._staticPath = this.getConf('cdn')
        data._assets = require('./assets.json')
    }
    const html = fuck(data)
    this.cache.set(this.url.path, html)
    return this.send('html', html)
}

export default conn => conn.render = render
