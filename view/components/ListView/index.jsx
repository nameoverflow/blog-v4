import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import TagList from '../TagList'
import Time from '../Time'

if (typeof window !== 'undefined') {
    require('./ListView.sass')
}

const Meta = ({ tags, createDate }) =>
    <div className='ListMeta'>
        <Time {...{ createDate }} />
        { tags && tags[0] ? [' |', ...TagList(tags)] : [] }
    </div>



export default ({ children: entity }) => {
    const {
        _id, title, body, createDate, tags, summary
    } = entity
    return (
        <article className='ListView'>
            <header className='title'>
                <h1>
                    <Link to={`/article/${_id}`}>
                        { title }
                    </Link>
                </h1>
                <Meta {...{ tags, createDate }} />
            </header>
            <main dangerouslySetInnerHTML={{ __html: summary || body }} />
            <div className="more-link" style={{
                'display': entity.break ? 'block' : 'none'
            }}>
                <Link to={`/article/${_id}`}>
                    ReadOn »
                </Link>
            </div>
        </article>
    )
}
