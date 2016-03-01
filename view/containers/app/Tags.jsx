import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { loadTags } from '../../actions/tags'

import { alignScrollTop } from '../../utils'

const stateToProp = (state, ownProps) => ({
    data: state.tags.list
})

const dispToProp = dispatch => ({
    load() {
        dispatch(loadTags())
    }
})

@connect(stateToProp, dispToProp)
@alignScrollTop
export default class Tags extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        const { data, load } = this.props
        if (!data) {
            load()
        }
    }
    render() {
        const { data } = this.props
        return (
            !data ? <div> Loading... </div> :
            <ul>
                { data.map(tag =>
                    <Link to={`/tags/${tag}`}>
                        <li>
                            { `{ ${tag} }`}
                        </li>
                    </Link>) }
            </ul>
        )
    }
    static fetchData(store, props) {
        return store.dispatch(loadTags())
    }
}
