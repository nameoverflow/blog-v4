import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {
    loadYears, loadArchive, toggleTimeSect
} from '../actions/archive'

import TimeSection from '../components/TimeSection'

@connect(
    state => state.archive,
    dispatch => ({
        loadYears() {
            return dispatch(loadYears())
        },
        loadArchive(time) {
            return dispatch(loadArchive(time))
        },
        toggleTimeSect(time) {
            return dispatch(toggleTimeSect(time))
        }
    })
)
export default class Archives extends Component {
    componentWillMount() {
        this.props.list.length || this.props.loadYears()
    }
    render() {
        const props = this.props
        const list = props.list.map(
            time => <TimeSection
                key = { time }
                time = { time }
                load = { props.loadArchive }
                data = { props.data[time] }
                display = { props.display[time] || false }
                toggle = { props.toggleTimeSect } /> )

        return <div> { list } </div>
    }

    static fetchData(store) {
        return store.dispatch(loadYears())
    }
}
