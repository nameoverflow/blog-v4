import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import TagList from '../TagList'
import Time from '../Time'

if (typeof window !== 'undefined') {
    require('./TimeSection.sass')
}

const Title = ({ tags, title, _id, createDate }) =>
    <li>
        <h2> { title } </h2>
        <div className='ListMeta'>
            <Time {...{ createDate }} />
            { tags && tags[0] ? [' |', ...TagList(tags)] : [] }
        </div>
    </li>

export default class TimeSection extends Component {
    constructor(props) {
        super(props)
        this.styles = ['none', 'block']
    }
    getHeight() {
        const { theSection } = this.refs
        theSection.style.height = 'auto'
        return window.getComputedStyle(theSection).height
    }

    transHeight(origin) {
        const { theSection } = this.refs
        requestAnimationFrame(() => {
            const target = this.getHeight()
            theSection.style.height = origin
            requestAnimationFrame(() => {
                theSection.style.height = target
            })
        })
    }
    handleClick(e) {
        const { display, toggle, data, load, time } = this.props
        const { theSection } = this.refs
        if (!(data && data.length)) {
            load(time).then(() => {
                const height = this.getHeight()
                this.transHeight(height)
            })
        }
        const height = this.getHeight()
        theSection.style.height = height
        toggle(time)
        this.transHeight(height)
    }
    render() {
        const { display, toggle, data, load, time } = this.props
        return (
            <section className='TimeSection' ref='theSection'>
                <h1 onClick={ (e) => this.handleClick(e) }>
                    { time }
                </h1>
                <ul ref='theList' style={{ display: this.styles[+display] }}>
                    { data ? data.map(entity => 
                                <Title { ...entity } key={entity._id}/>) 
                            : <li> Loading...</li> }
                </ul>
            </section>
        )
    }
}

