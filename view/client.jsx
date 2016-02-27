import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'
import { apiFactory } from './middleware'

import Root from './containers/Root'
import routes from './routes'


const makeRequest = (url, opt) => {
    const { origin } = window.location
    const real_url = origin + url
    return fetch(url, opt)
        .then(res => res.json())
}

const
    initial_state = window.__INITIAL_STATE__,
    middleware = applyMiddleware(apiFactory(makeRequest)),
    store = createStore(reducer, initial_state, middleware),
    history = syncHistoryWithStore(browserHistory, store)


render(
  <Root {...{ store, history }}>
      { routes }
  </Root>,
  document.getElementById('client')
)

