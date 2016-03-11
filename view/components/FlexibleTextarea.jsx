import React, { Component, PropTypes } from 'react'

export default class FlexibleTextarea extends Component {
    constructor(props) {
        super(props)
    }
    componentDidUpdate() {
        const { ta } = this.refs
        ta.style.height = '1px'
        ta.style.height = ta.scrollHeight + 'px'
    }

    render() {
        return (
            <textarea
                ref='ta'
                { ...this.props } />
        )
    }
}

FlexibleTextarea.PropTypes = {

}
