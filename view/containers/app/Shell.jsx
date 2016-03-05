import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

if (typeof window !== 'undefined') {
    require('../../assert/normalize.css')
    require('./Shell.sass')
    require('../../assert/github.css')
}

import Sidebar from '../../components/Sidebar'

export default ({ children, location }) => {
    return (
        <div className='Shell'>
            <Sidebar/>
            <main className='container'>
                <ReactCSSTransitionGroup
                    component="div"
                    className="wrapper"
                    transitionName="route-trans"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}
                >{
                    React.cloneElement(children, {
                        key: location.pathname
                    })
                }</ReactCSSTransitionGroup>
            {/* children */}
            </main>
        </div>
    )
}
