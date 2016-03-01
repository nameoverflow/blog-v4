import marked from 'marked'

/**
 * Edit or create new article
 */
export default function *parseEdit() {
    const session = yield this.session()
    if (!session.data.auth) {
        return null
    }
    const
        form_data = yield this.getBody(),
        marked_string = yield getMarked(form_data.body),
        paras = marked_string.split('<!--more-->')

    let new_post = {
        title: form_data.title,
        body: marked_string,
        bodySource: form_data.body,
        summary: paras[0],
        break: !!paras[1]
    }

    if (form_data.type) { 
        new_post.type = form_data.type
    }

    if (form_data.tags) {
        if (form_data.tags.slice(-1) === ';') {
            new_post.tags = form_data.tags.slice(0, -1)
                            .split(';').map(s => s.trim())
        }
    }

    return new_post
}

function getMarked(string) {
    return new Promise((res, rej) => {
        marked(string,
            (err, data) => err ? rej(err) : res(data))
    })
}
