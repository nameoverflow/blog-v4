import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Sidebar from '../components/Sidebar'

if (typeof window !== 'undefined') {
    require('./normalize.css')
    require('./Shell.sass')
    require('./github.css')
}


export default ({ children, location }) => {
    return (
        <div className='Shell'>
            <Sidebar/>
            <main className='container'>
                <ReactCSSTransitionGroup
                  component="div"
                  transitionName="route-trans"
                  transitionEnterTimeout={800}
                  transitionLeaveTimeout={800}
                >
                    {React.cloneElement(children, {
                        key: location.pathname
                    })}
                </ReactCSSTransitionGroup>
            {/* children */}
            </main>
        </div>
    )
}
