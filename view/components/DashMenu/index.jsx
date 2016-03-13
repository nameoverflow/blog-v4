import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

if (typeof window !== 'undefined') {
    require('./DashMenu.sass')
}
export default ({ children }) => {
    return (
        <div className='DashMenu'>
            <li><Link to='/admin/'>Articles</Link></li>
            <li><Link to='/admin/page'>Pages</Link></li>
            <li><a href='/'>Home</a></li>
        </div>
    )
}

