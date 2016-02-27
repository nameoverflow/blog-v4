import React, { Component, PropTypes } from 'react'

import { formatTime } from '../../utils'
if (typeof window !== 'undefined') {
    require('./ArticleView.sass')
}

const Meta = ({ tags, createDate }) =>
    <section className='ArticleMeta'>
        <div>发布于<time>&nbsp;{ formatTime(createDate) }</time></div>
        <div>tags:{
            tags && tags.map(tag =>
                <span className="meta-text" key={tag}>
                    {' { '}
                    <a href="#">{ tag }</a>
                    {' } '}
                </span>)
        }</div>
    </section>

export default ({ children: { _id, title, body, createDate, tags } }) => 
    <article className='ArticleView'>
        <header className='title'>
            <h1>{ title }</h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: body }} />
        <Meta {...{ tags, createDate }} />
    </article>

