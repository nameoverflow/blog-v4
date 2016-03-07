import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom'

import { Router, browserHistory, match } from 'react-router'

import Dashboard from './containers/admin/Dashboard'
import Profile from './containers/admin/Profile'
import Edit from './containers/admin/Edit'
import Login from './containers/admin/Login'

const routes = (
    <Route path="/admin" component={Dashboard}>
        <IndexRoute component={Profile} name='profile'/>
        <Route path="page" component={Profile} name="page"/>
        <Route path="new" component={Edit} name='new'/>
        <Route path="edit/:id" component={Edit} name="edit"/>
        <Route path="login" component={Login} name="Login"/>
    </Route>
)


render(<Root {...{
    store,
    renderProps: {
        history: browserHistory,
        routes
    }}}/>
    , document.getElementById('client'))

