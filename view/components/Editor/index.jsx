import React, { Component, PropTypes } from 'react'

import ContentView from '../ContentView'
import FlexibleTextarea from '../FlexibleTextarea'

import './Editor.sass'
export default class Editor extends Component {
    handleSubmit(e) {
        e.preventDefault()
    }
    render() {
        const { title, bodySource, tags } = this.props.post
        const { handleChange } = this.props
        return (
            <div className="Editor">
                <section className="editor-wrapper">
                    <form onSubmit={ e => this.handleSubmit(e) }>
                        <input
                            placeholder="Title"
                            onChange={ handleChange('title') }
                            value={ title }/>
                        <input
                            placeholder="Tags"
                            onChange={ handleChange('tags') }
                            value={ tags && tags.join(';') }/>
                        <FlexibleTextarea
                            value={ bodySource }
                            onChange={ handleChange('bodySource') } />
                        <button>Submit</button>
                    </form>
                </section>
                <section className="preview-wrapper">
                    <ContentView>{ this.props.post }</ContentView>
                </section>
            </div>
        )
    }
}