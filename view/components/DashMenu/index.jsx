import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default ({ children }) => {
    return (
        <div className='DashMenu'>
            <li><Link to='/admin/'>Profile</Link></li>
            <li><a href='/'>Home</a></li>
        </div>
    )
}

