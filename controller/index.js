import * as article from './api/article'
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

    server.route('/static/*').get(function* () {
        const path = this.url.pathname.split('/static/')[1]
    })

    api.route('/article')
        .get(article.index)
        .post(article.edit)

    api.route('/article/::')
        .get(article.singleArticle)
        .post(article.edit)

    api.route('/archive/::')
        .get(article.archive)

    api.route('/time')
        .get(article.years)


    api.route('/page')

    api.route('/page/::')
        .get()
        .post()

}

