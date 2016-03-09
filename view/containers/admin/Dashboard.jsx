import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import DashMenu from '../../components/DashMenu'

export default ({ children }) =>
    <div className="Dashboard">
        <DashMenu />
        <main className='container'>
            { children }
        </main>
    </div>
