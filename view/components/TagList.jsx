import React from 'react'
import { Link } from 'react-router'

export default tags =>
    tags.map(tag =>
        <span className="meta-text" key={tag}>
            {' { '}
            <Link to={`/tags/${tag}`}>{ tag }</Link>
            {' } '}
        </span>)
