"use strict"
import jade from 'jade'

function render(path, data = {}) {
    let fuck = jade.compileFile(`${this.getConf('view').path}${path}.jade`)
    data._conf = this.getConf('tpl_globals')
    return this.send('html', fuck(data))
}

export default conn => conn.render = render
