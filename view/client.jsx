import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'
import { apiFactory } from './middleware'

import Root from './containers/Root'
import routes from './routes'

import { scrollLoaderBundle } from './utils'

const makeRequest = (url, opt) => {
    const { origin } = window.location
    const real_url = origin + url
    return fetch(url, opt)
        .then(res => 
                res.ok ? res.json()
                    : {
                        err: res.statusText,
                        code: res.status,
                        url: res.url
                    })
}

const
    initial_state = window.__INITIAL_STATE__,
    middleware = applyMiddleware(apiFactory(makeRequest)),
    store = createStore(reducer, initial_state, middleware),
    history = syncHistoryWithStore(browserHistory, store)

match({ history, routes }, (error, redirectLocation, renderProps) => {
    renderProps.components
        .filter(c => c.scrollLoad)
        .map(c => {
            console.log('binded', c.scrollLoad)
            scrollLoaderBundle.bind(() => c.scrollLoad(store))
        })
    render(
        <Root {...{ store, renderProps }} />,
        document.getElementById('client')
    )
})
// render(
//     <Root {...{ store, history }}>
//         { routes }
//     </Root>,
//     document.getElementById('client')
// )
