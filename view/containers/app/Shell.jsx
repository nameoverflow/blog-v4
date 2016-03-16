import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

if (typeof window !== 'undefined') {
    require('../../assets/normalize.css')
    require('./Shell.sass')
    require('../../assets/github.css')
}

import Sidebar from '../../components/Sidebar'

export default ({ children, location }) => {
    return (
        <div className='Shell'>
            <Sidebar/>
                <ReactCSSTransitionGroup
                    component="main"
                    className="container"
                    transitionName="route-trans"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}
                >
                    <div key={ location.pathname }>
                        { children }
                        <footer>
                            <div>© 2016 - Hcyue</div>
                            <div>
                            {'Powered by '}
                            <a href="https://github.com/nameoverflow/eliter">eliter</a>
                            {', all rights reserved'}
                            </div>
                        </footer>
                    </div>
                </ReactCSSTransitionGroup>
        </div>
    )
}
