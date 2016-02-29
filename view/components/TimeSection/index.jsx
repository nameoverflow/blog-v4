import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import TagList from '../TagList'
import Time from '../Time'

if (typeof window !== 'undefined') {
    require('./TimeSection.sass')
}

const Title = ({ tags, title, _id, createDate }) =>
    <li>
        <Link to={`/article/${_id}`}>
            <h2> { title } </h2>
        </Link>
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
        const { theSection, theList } = this.refs
        return new Promise(res => {
            requestAnimationFrame(() => {
                const target = this.getHeight()
                theSection.style.height = origin
                theList.style.opacity = 0
                requestAnimationFrame(() => {
                    theSection.style.transition = 'height 800ms ease'
                    theSection.style.height = target
                    theList.style.opacity = 1
                    const callback = () => {
                        theSection.removeEventListener('transitionend', callback)
                        res()
                    }
                    theSection.addEventListener('transitionend', callback)
                })
            })
        }).then(() => {
            theSection.style.transition = ''
            theSection.style.height = 'auto'
        })
    }
    handleClick(e) {
        const { display, toggle, data, load, time } = this.props
        const { theSection } = this.refs
        if (display) {
            toggle(time)
            return
        }
        if (!(data && data.length)) {
            toggle(time)
            const height = this.getHeight()
            load(time).then(() => {
                this.transHeight(height)
            })
        } else {
            const height = this.getHeight()
            theSection.style.height = height
            toggle(time)
            this.transHeight(height)
        }
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
                                <Title { ...entity } key={ entity._id }/>) 
                            : <li> Loading... </li> }
                </ul>
            </section>
        )
    }
}

