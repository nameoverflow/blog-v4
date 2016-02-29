import React from 'react'

export default tags =>
    tags.map(tag =>
        <span className="meta-text" key={tag}>
            {' { '}
            <a href="#">{ tag }</a>
            {' } '}
        </span>)
