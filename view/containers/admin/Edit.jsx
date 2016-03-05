import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = { post: {} }
    }
    componentWillMount() {
        const { id } = this.props.params
        if (id) {
            this.load(id)
        }
    }
    load(id) {
        
    }
    render() {
        return (
            <div className="Edit"></div>
        )
    }
}