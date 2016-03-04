import React, { Component, PropTypes } from 'react'

import TagList from '../TagList'
import Time from '../Time'
import Title from '../PageTitle'
if (typeof window !== 'undefined') {
    require('./ContentView.sass')
}

const Meta = ({ tags, createDate }) =>
    <section className='ArticleMeta'>
        <div>发布于&nbsp; <Time {...{ createDate }} /> </div>

        { tags && tags.length ? <div>tags:{ TagList(tags) }</div> : [] }

    </section>

export default ({ isPage, children }) => {
    if (!children) {
        return <div>Loading</div>
    }
    const { title, body, createDate, tags } = children
    return (
        <article className='ContentView'>
            <Title {...{ isPage }}>{ title }</Title>
            <section dangerouslySetInnerHTML={{ __html: body }} />
            { isPage || <Meta {...{ tags, createDate }} /> }
        </article>
    )
}