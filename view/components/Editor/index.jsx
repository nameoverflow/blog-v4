import React, { Component, PropTypes } from 'react'

import ContentView from '../ContentView'

export default class Editor extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { title, bodySource, tags } = this.props.post
        const { handleChange } = this.props
        return (
            <div className="Editor">
                <section className="editor-wrapper">
                    <input
                        placeholder="Title"
                        onChange={ handleChange('title') }
                        value={ title }/>
                    <input
                        placeholder="Tags"
                        onChange={ handleChange('tags') }
                        value={ tags && tags.join(';') }/>
                    <textarea
                        onChange={ handleChange('bodySource') }
                        value={ bodySource }>{ bodySource }</textarea>
                </section>
                <section className="preview-wrapper">
                    <ContentView>{ this.props.post }</ContentView>
                </section>
            </div>
        )
    }
}