import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

if (typeof window !== 'undefined') {
    require('../../assets/normalize.css')
    require('./Dashboard.sass')
    require('../../assets/github.css')
}

import DashMenu from '../../components/DashMenu'

export default ({ children }) =>
    <div className="Dashboard">
        <DashMenu />
        <main className='container'>
            { children }
        </main>
    </div>
