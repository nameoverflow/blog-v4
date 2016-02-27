import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux';

export default ({ store, history, children }) =>
    <Provider store={store}>
        <Router history={history}>
            { children }
        </Router>
    </Provider>

