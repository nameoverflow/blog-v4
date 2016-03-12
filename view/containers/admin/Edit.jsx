import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import marked from 'marked'
import { browserHistory } from 'react-router'

import Editor from '../../components/Editor'
export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                title: '',
                createDate: new Date().getTime()
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
    handleSubmit(e) {
        e.preventDefault()
        const f = e.target
        const formData = new FormData(f)
        console.log(f, formData)
        const { id } = this.props.params
        const isPage =
            this.props.route.name === 'newPage'
            || (this.state.post.type === 'page')
        const url = `${window.location.origin}/api/edit/${id || (isPage ? 'page' : 'article')}`
        fetch(url, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        }).then(res => {
            browserHistory.pushState(null, '/admin')
        })
    }

    load(id) {
        const url = `${window.location.origin}/api/article/${id}?source`
        fetch(url, { method: 'get' })
            .then(res => res.json())
            .then(res => this.setState({ post: res }))
    }
    render() {
        const isPage =
            this.props.route.name === 'newPage'
            || (this.state.post.type === 'page')
        return (
            <Editor
                post={ this.state.post }
                handleChange={ this.handleChange }
                handleSubmit={ this.handleSubmit }
                isPage={ isPage } />
        )
    }
}
