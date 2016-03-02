import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const loadDataOnEnter = (loadAction, getDataIdent, getState, isEmpty) =>
    (ComposedComponent) => {
        const stateToProp = (state, ownProps) => ({
            data: getState(state, getDataIdent(ownProps))
        })

        const dispToProp = dispatch => ({
            load(dataIdent) {
                dispatch(loadAction(dataIdent))
            }
        })
        @connect(stateToProp, dispToProp)
        @alignScrollTop
        class PageShell extends Component {
            constructor(props) {
                super(props)
            }
            componentWillMount() {
                if (isEmpty(this.props.data)) {
                    this.props.load(getDataIdent(this.props))
                }
            }
            render() {
                return <ComposedComponent { ...this.props }></ComposedComponent>
            }
            static fetchData(store, props) {
                console.log(getDataIdent(props))
                return store.dispatch(loadAction(getDataIdent(props)))
            }
        }
        return PageShell
    }

export const alignScrollTop = (ComposedComponent) => {
    class autoAlign extends Component {
        constructor(props) {
            super(props)
        }
        componentDidMount() {
            window.scroll(0, 0)
        }
        render() {
            return <ComposedComponent { ...this.props } />
        }
    }
    autoAlign.fetchData = ComposedComponent.fetchData
    return autoAlign
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
