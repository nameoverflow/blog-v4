import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'

import Editor from '../../components/Editor'
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
        const url = `${window.location.origin}/api/article/${id}`
        fetch(url, { method: 'get' })
            .then(res => res.json())
            .then(res => this.setState({ post: res }))
    }
    render() {
        return (
            <Editor post={ this.state.post } />
        )
    }
}
