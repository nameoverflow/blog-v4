import React from 'react'
import {
    Route,
    Router,
    IndexRoute,
    browserHistory
} from 'react-router'

import Shell from './containers/Shell'
import Single from './containers/Single'
import Index from './containers/Index'
// import Archives from './containers/Archives'
// import Page from './containers/Page'
// import Lab from './containers/Lab'


export const routes = (
    <Route component={Shell} path='/'>
        <IndexRoute component={Index} name='home' />
        {
        // <Route path="lab" component={Lab} name='lab'/>
        // <Route path=":title" component={Page} name='page'/>
        // <Route path="archives" component={Archives} name='archives'/>
        }
        <Route path="article/:id" component={Single} name='article'/>
    </Route>
)

export default routes
