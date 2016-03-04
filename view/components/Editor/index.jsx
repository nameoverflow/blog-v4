import React, { Component, PropTypes } from 'react'

import marked from 'marked'

import ContentView from '../ContentView'

export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state.post = Object.assign({}, this.props.post)
    }
    handleChange(field) {
        return function (e) {
            const post = Object.assign({}, this.state.post)
            post[field] = event.target.value
            if (field === 'bodySource') {
                post.body = marked(post.bodySource)
            } else if (field === 'tags') {
                if (post.tags.slice(-1) === ';') {
                    post.tags = post.tags.slice(0, -1)
                }
                post.tags = post.tags.split(';').map(s => s.trim())
            }
            this.setState({
                post
            })
        }
    }
    render() {
        const { title, bodySource, tags } = this.state.post
        return (
            <div className="Editor">
                <section className="editor-wrapper">
                    <input
                        placeholder="Title"
                        onChange={ this.handleChange('title') }
                        value={ title }/>
                    <input
                        placeholder="Tags"
                        onChange={ this.handleChange('tags') }
                        value={ tags && tags.join(';') }/>
                    <textarea
                        onChange={ this.handleChange('bodySource') }
                        value={ bodySource }>{ bodySource }</textarea>
                </section>
                <section className="preview-wrapper">
                    <ContentView>{ this.state.post }</ContentView>
                </section>
            </div>
        )
    }
}