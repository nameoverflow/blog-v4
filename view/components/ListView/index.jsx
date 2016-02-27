import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';

const Meta = ({ tags, createDate }) =>
    <div>
        <time>
            创建于&nbsp;{ new Date(createDate).toDateString() }
        </time>
        {tags && tags[0] ? ' |' : ''}
        {
            tags && tags.map(tag =>
                <a href="#" key={tag}>
                    {' { '}
                    <span className="meta-text">{ tag }</span>
                    {' } '}
                </a>)
        }

    </div>



export default ({ children: { _id, title, body, createDate, tags, summary } }) => 
    <article>
        <header>
            <Link to={`/article/${_id}`}>
                <h1>{ title }</h1>
            </Link>
        </header>
        <Meta {...{ tags, time: createDate }} />
        <main dangerouslySetInnerHTML={{ __html: body || summary }} />
    </article>
