import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

if (typeof window !== 'undefined') {
    require('../../assert/normalize.css')
    require('./Dashboard.sass')
    require('../../assert/github.css')
}

import DashMenu from '../../components/DashMenu'

export default ({ children }) =>
    <div className="Dashboard">
        <DashMenu />
        <main className='container'>
            { children }
        </main>
    </div>
