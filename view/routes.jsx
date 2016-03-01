import React from 'react'
import {
    Route,
    Router,
    IndexRoute,
    browserHistory
} from 'react-router'

import Shell from './containers/app/Shell'
import Single from './containers/app/Single'
import Index from './containers/app/Index'
import Archives from './containers/app/Archives'
import Page from './containers/app/Page'
// import Lab from './containers/Lab'


export const routes = (
    <Route component={Shell} path='/'>
        <IndexRoute component={Index} name='home' />
        {
        // <Route path="lab" component={Lab} name='lab'/>
        }
        <Route path="archives" component={Archives} name='archives'/>
        <Route path="article/:id" component={Single} name='article'/>
        <Route path=":title" component={Page} name='page'/>
    </Route>
)

export default routes
