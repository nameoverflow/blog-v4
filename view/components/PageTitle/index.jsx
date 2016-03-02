import React from 'react'

if (typeof window !== 'undefined') {
    require('./PageTitle.sass')
}
export default ({ isPage, children }) =>
    <header className='PageTitle'>
        <h1>{
            isPage ? children.toUpperCase()
                    : children
        }</h1>
    </header>
