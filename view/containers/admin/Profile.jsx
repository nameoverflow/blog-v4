import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentWillMount() {

    }
    render() {
        return (
            <div className="Profile"></div>
        )
    }
}