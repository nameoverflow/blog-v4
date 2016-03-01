import * as article from './api/article'
import * as page from './api/page'

import update from '../model/updatePost'

import parseEdit from './api/edit'
import app from './app'

function *finishEdit(id, child, data) {
    try {
        if (child) {
            yield update(id, data)
        } else {
            yield update(new_post)
        }
        this.send({
            status:201,
            headers: {
                Location: '/admin'
            }
        })
    } catch(e) {
        console.log(e)
        this.error(e, 500)
    }
}

const edit = type => function *(id, child) {
    const new_post = yield* parseEdit.call(this)
    new_post.type = type
    yield* finishEdit.call(this, id, child, new_post)
}

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

    server.route('/static/*').get(function* () {
        const path = this.url.pathname.split('/static/')[1]
    })

    api.route('/article')
        .get(article.index)
        .post(edit('article'))

    api.route('/article/::')
        .get(article.singleArticle)
        .post(edit('article'))

    api.route('/archive/::')
        .get(article.archive)

    api.route('/time')
        .get(article.years)


    api.route('/page')
        .get(page.pageList)
        .post(edit('page'))

    api.route('/page/::')
        .get(page.singlePage)
        .post(edit('page'))
}

