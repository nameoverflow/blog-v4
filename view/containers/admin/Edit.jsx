import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import marked from 'marked'

import Editor from '../../components/Editor'
export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                createDate: new Date().getTime()
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount() {
        const { id } = this.props.params
        if (id) {
            this.load(id)
        }
    }
    handleChange(field) {
        return e => {
            const post = Object.assign({}, this.state.post)
            post[field] = e.target.value
            if (field === 'bodySource') {
                post.body = marked(post.bodySource)
            } else if (field === 'tags') {
                post.tags = post.tags.split(';').map(s => s.trim())
            }
            this.setState({
                post
            })
        }
    }
    load(id) {
        const url = `${window.location.origin}/api/article/${id}?source`
        fetch(url, { method: 'get' })
            .then(res => res.json())
            .then(res => this.setState({ post: res }))
    }
    render() {
        return (
            <Editor post={ this.state.post } handleChange={ this.handleChange }/>
        )
    }
}
