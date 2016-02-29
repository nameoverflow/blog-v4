import React, { Component, PropTypes } from 'react'

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
