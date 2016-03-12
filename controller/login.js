import { parse } from 'querystring'

import config from '../config'

export function* get() {
    const { data: { auth }} = yield this.session()
    if (auth) {
        this.redirect('/admin')
    }
    this.render('login')
}

export function* post() {
    const { username, passwd } = parse(yield this.getBody())
    if (username === config.admin.name && passwd === config.admin.pass) {
        const session = yield this.session()
        yield session.set({
            auth: true
        })
        this.send({
            status: 303,
            headers: {
                Location: '/admin'
            }
        })
    } else {
        this.render('login', {
            message: 'Wrong username or passwd'
        })
    }
}
