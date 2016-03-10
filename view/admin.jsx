import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom'
import {
    match,
    Route,
    Router,
    IndexRoute,
    browserHistory
} from 'react-router'

import Dashboard from './containers/admin/Dashboard'
import Profile from './containers/admin/Profile'
import Edit from './containers/admin/Edit'
import Login from './containers/admin/Login'
import Root from './containers/Root'


const routes = (
    <Route path="/admin" component={Dashboard}>
        <IndexRoute component={Profile} name='profile'/>
        <Route path="page" component={Profile} name="page"/>
        <Route path="new" component={Edit} name='new'/>
        <Route path="edit/:id" component={Edit} name="edit"/>
        <Route path="login" component={Login} name="Login"/>
    </Route>
)


render(<Router history={ browserHistory } routes={ routes } />
    , document.getElementById('client'))

