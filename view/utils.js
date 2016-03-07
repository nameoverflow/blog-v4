import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import { connect } from 'react-redux'

export const loadDataOnEnter = (loadAction, getDataIdent, getState, isEmpty) =>
    ComposedComponent => {
        const stateToProp = (state, ownProps) => ({
            data: getState(state, getDataIdent(ownProps))
        })

        const dispToProp = dispatch => ({
            load(dataIdent, ...args) {
                return dispatch(loadAction(dataIdent, ...args))
            }
        })
        @connect(stateToProp, dispToProp)
        @alignScrollTop
        class PageShell extends Component {
            componentWillMount() {
                if (isEmpty(this.props.data)) {
                    this.props.load(getDataIdent(this.props))
                }
            }
            render() {
                return <ComposedComponent { ...this.props } />
            }
            static fetchData(store, props) {
                return store.dispatch(loadAction(getDataIdent(props)))
            }
        }
        PageShell.scrollLoad = ComposedComponent.scrollLoad
        return PageShell
    }

export const alignScrollTop = ComposedComponent => {
    class autoAlign extends Component {
        constructor(props) {
            super(props)
        }
        componentDidMount() {
            findDOMNode(this).scrollIntoView()
        }
        render() {
            return <ComposedComponent { ...this.props } />
        }
    }
    autoAlign.fetchData = ComposedComponent.fetchData
    autoAlign.scrollLoad = ComposedComponent.scrollLoad
    return autoAlign
}

export const scrollLoaderBundle = {
    bind(handler, dis_to_bottom = 300) {
        if (this.__scHandler) {
            this.remove()
        }
        const d = document
        const dd = d.documentElement
        const db = d.body
        const getScrollTop = () => dd && dd.scrollTop ? dd.scrollTop : db.scrollTop
        const getClientHeight = () => {
            if (db.clientHeight && dd.clientHeight) {
                return Math.min(db.clientHeight, dd.clientHeight)
            } else {
                return db.clientHeight || dd.clientHeight
            }
        }
        this.__scHandler = function (e) {
            const scrollTop = getScrollTop()
            const clientHeight = getClientHeight()
            const scrollHeight = Math.max(db.scrollHeight, dd.scrollHeight)
            if (scrollTop + clientHeight + dis_to_bottom > scrollHeight
                && !this.isActive) {
                this.isActive = true
                handler().then(() => this.isActive = false)
            }
        }
        window.addEventListener('scroll', this.__scHandler)
    },
    remove() {
        window.removeEventListener('scroll', this.__scHandler)
    }
}

export const formatTime = (function() {
    const days = [
        "Sun.", "Mon.", "Tues.", "Wed.",
        "Thurs.", "Fri.", "Sat."
    ]
    const month_names = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sept",
        "Oct", "Nov", "Dec"
    ]
    function format(datetime) {
        const cur = new Date(datetime)
        return `${days[cur.getDay()]} ${month_names[cur.getMonth()]} ${cur.getDate()} ${cur.getFullYear()}`

    }

    return format
})()
