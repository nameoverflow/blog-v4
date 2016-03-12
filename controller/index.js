import * as article from './api/article'
import * as page from './api/page'
import * as login from './login'

import { tagList, tagArticle } from '../model/tags'

import handleEdit from './api/edit'
import app from './app'


/**
 * Add routes to server
 */
export default function addRoutes(server) {

    const
        api = server.route('/api'),
        admin = server.route('/admin', function* (child) {
            const session = yield this.session()
            if (!session.data.auth) {
                this.redirect('/login')
            } else {
                yield* child
            }
        })

    server.route('/*').get(app)
    server.route('/login')
        .get(login.get)
        .post(login.post)
    admin.route('/*').get(function* () {
        this.render('admin')
    })

    api.route('/article')
        .get(article.list)

    api.route('/article/::')
        .get(article.single)

    api.route('/archive/::')
        .get(article.archive)

    api.route('/time')
        .get(article.years)

    /**
     * /api/page?start={}&limit={}
     */
    api.route('/page')
        .get(page.pageList)
    api.route('/page/::')
        .get(page.singlePage)

    api.route('/tags')
        .get(function* () {
            this.send('json', yield tagList())
        })
    api.route('/tags/::')
        .get(function* (tag) {
            this.send('json', yield tagArticle(decodeURI(tag)))
        })

    const edit = api.route('/edit', function* (child) {
        if (this.method !== 'get') {
            const session = yield this.session()
            console.log('edit: ', session.data)
            if (!session.data.auth) {
                return this.error('auth required', 403)
            }
            this.cache.clear()
        }
        yield* child
    })
    edit.route('/article')
        .post(handleEdit('article'))
    edit.route('/page')
        .post(handleEdit('page'))
    edit.route('/::')
        .post(handleEdit())
        .delete(article.remove)
}

