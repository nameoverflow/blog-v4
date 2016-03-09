import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

import Title from '../../components/Title'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentWillMount() {
        const type = this.props || 'article'
        const url = `${window.location.origin}/api/${type}?limit=0`
        fetch(url, { method: 'get' })
            .then(res => res.json())
            .then(res => this.setState({ list: res }))
    }
    render() {
        const viewList = this.props.list.map(v => <Title { ...v } key={ v.id } />)
        return (
            <div className="Profile">
                <ul>
                    { viewList }
                </ul>
            </div>
        )
    }
}
