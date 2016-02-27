import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { formatTime } from '../../utils'

if (typeof window !== 'undefined') {
    require('./ListView.sass')
}

const Meta = ({ tags, createDate }) =>
    <div className='ListMeta'>
        <time>
            { formatTime(createDate) }
        </time>
        {tags && tags[0] ? ' |' : ''}
        {
            tags && tags.map(tag =>
                <span className="meta-text" key={tag}>
                    {' { '}
                    <a href="#">{ tag }</a>
                    {' } '}
                </span>)
        }

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
                <Link to={`/article/${_id}`} className="no-ani">
                    ReadOn »
                </Link>
            </div>
        </article>
    )
}
