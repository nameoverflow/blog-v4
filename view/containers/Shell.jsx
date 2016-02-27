import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'


if (typeof window !== 'undefined') {
    require('./normalize.css')
    require('./Shell.sass')
    require('./github.css')
}

export default ({ children }) => {
    return (
        <div className='Shell'>
            <Sidebar/>
            {//<HeaderMobile list={navs} />
        }
            <main className='container'>
                { children }
            </main>
        </div>
    )
}
