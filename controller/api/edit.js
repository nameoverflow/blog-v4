import marked from 'marked'
import formidable from 'formidable'
import update from '../../model/updatePost'

function getMarked(src) {
    return new Promise((res, rej) => {
        marked(src,
            (err, data) => err ? rej(err) : res(data))
    })
}
const parseForm = req =>
    new Promise((res, rej) => {
        const form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error(err.message)
                this.error()
            } else {
                res({ fields, files })
            }
        })
    })
/**
 * Edit or create new article
 */
function *parseEdit() {
    const session = yield this.session()
    if (!session.data.auth) {
        return null
    }

    const
        { fields } = yield parseForm(this._req),
        marked_string = yield getMarked(fields.body),
        paras = marked_string.split('<!--more-->')

    let new_post = {
        title: fields.title,
        body: marked_string,
        bodySource: fields.body,
        summary: paras[0],
        break: !!paras[1]
    }

    if (fields.type) { 
        new_post.type = fields.type
    }

    if (fields.tags) {
        if (fields.tags.slice(-1) === ';') {
            fields.tags = fields.tags.slice(0, -1)
        }
        new_post.tags = fields.tags.split(';').map(s => s.trim())
    }

    return new_post
}

function *finishEdit(id, child, data) {
    console.log(arguments)
    try {
        if (child) {
            yield update(id, data)
        } else {
            yield update(data)
        }
        this.send({
            status:201
        })
    } catch(e) {
        console.log(e.stack)
        this.error(e, 500)
    }
}

export default type => function *(id, child) {
    const new_post = yield* parseEdit.call(this)
    if (type) {
        new_post.type = type
    }
    yield* finishEdit.call(this, id, child, new_post)
}
