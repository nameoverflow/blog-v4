import React, { Component, PropTypes } from 'react'

import TagList from '../TagList'
import Time from '../Time'

if (typeof window !== 'undefined') {
    require('./ArticleView.sass')
}

const Meta = ({ tags, createDate }) =>
    <section className='ArticleMeta'>
        <div>发布于&nbsp; <Time {...{ createDate }} /> </div>

        { tags && tags.length ? <div>tags:{ TagList(tags) }</div> : [] }

    </section>

export default ({ isPage, children: { _id, title, body, createDate, tags } }) => 
    <article className='ArticleView'>
        <header className='title'>
            <h1>{ isPage ? title.toUpperCase() : title }</h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: body }} />
        { isPage || <Meta {...{ tags, createDate }} /> }
    </article>

