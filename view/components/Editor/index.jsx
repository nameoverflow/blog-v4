import React, { Component, PropTypes } from 'react'

import ContentView from '../ContentView'
import FlexibleTextarea from '../FlexibleTextarea'

import './Editor.sass'
export default class Editor extends Component {
    render() {
        const { title, bodySource, tags } = this.props.post
        const { handleChange, isPage, handleSubmit } = this.props
        return (
            <div className="Editor">
                <section className="editor-wrapper">
                    <form onSubmit={ handleSubmit } id="editorForm">
                        <input
                            name="title"
                            placeholder="Title"
                            onChange={ handleChange('title') }
                            value={ title }/>
                        <input
                            name="tags"
                            placeholder="Tags"
                            onChange={ handleChange('tags') }
                            value={ tags && tags.join(';') }
                            style={{ display: isPage ? 'none' : 'block' }}/>
                        <FlexibleTextarea
                            name="body"
                            value={ bodySource }
                            onChange={ handleChange('bodySource') } />
                        <button type="submit">Submit</button>
                    </form>
                </section>
                <section className="preview-wrapper">
                    <ContentView {...{ isPage }}>{ this.props.post }</ContentView>
                </section>
            </div>
        )
    }
}