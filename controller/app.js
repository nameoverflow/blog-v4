import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../view/reducers'
import { apiFactory } from '../view/middleware'
import routes from '../view/routes'
import server from '../tools/initServer'
import request from 'supertest'

const getRendered = (store, state) =>
    renderToString(
        <Provider store={ store }>
            <RouterContext { ...state } />
        </Provider>
    )

const matchRouter = (location, routes) => {
    return new Promise((res, rej) => {
        match({
            location,
            routes
        }, (error, redirectLocation, renderProps) =>
            res({error, redirectLocation, renderProps}))
    })
}

const makeRequest = (url, { method }) => 
    new Promise((resolve, reject) => {
        request(server._server)[method](url)
        .end((err, res) => err ? reject(err) : resolve(res))
    }).then(res => !res.error ? res.body : {
        err: res.res.statusMessage,
        code: res.statusCode,
        url: res.res.url
    })

export default function* () {
    const {

        error,
        redirectLocation,
        renderProps

    } = yield matchRouter(this.url.path, routes)

    if (error) {

        this.error(error.message, 500)

    } else if (redirectLocation) {

        const { pathname, search } = redirectLocation
        this.redirect(pathname + search)

    } else {
        const cache = this.cache.get(this.url.path)
        if (cache) {
            this.send('html', cache)
            return
        }
        const
            midd = applyMiddleware(apiFactory(makeRequest)),
            store = createStore(reducer, midd)

        const components = renderProps.components.filter(c => c && c.fetchData)
        yield Promise.all(components.map(c =>
                            c.fetchData(store, renderProps)))
        const
            rendered = getRendered(store, renderProps),
            initial_state = JSON.stringify(store.getState())

        this.render('client', { rendered, initial_state })
    }
}