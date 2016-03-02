import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { loadTags } from '../../actions/tags'
import PageTitle from '../../components/PageTitle'

import { loadDataOnEnter } from '../../utils'

@loadDataOnEnter(
    loadTags,
    props => undefined,
    state => state.tags.list,
    data => !data.length)
export default class Tags extends Component {
    render() {
        const { data } = this.props
        return (
            !data ? <div> Loading... </div> :
            <ul className="Tags">
                <PageTitle>TAGS</PageTitle>
                { data.map(tag =>
                    <li key={ tag }>
                        <Link to={`/tags/${tag}`}>
                            { `{ ${tag} }`}
                        </Link>
                    </li>) }
            </ul>
        )
    }
}
