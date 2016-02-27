import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import HeaderDefault from '../components/Header/Default'
import HeaderMobile from '../components/Header/Mobile'

const navs = ['home', 'archives', 'lab', 'about']

if (typeof window !== 'undefined') {
    require('./Shell.sass')
}

export default ({ children }) => {
    return (
        <div className='Shell'>
            <HeaderDefault list={navs} />
            {//<HeaderMobile list={navs} />
        }
            <main className='container'>
                { children }
            </main>
        </div>
    )
}
