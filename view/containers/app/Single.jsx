import React, { Component, PropTypes } from 'react'

import { loadSingle } from '../../actions/article'
import ContentView from '../../components/ContentView'
import Comment from '../../components/Comment'

import { loadDataOnEnter } from '../../utils'


@loadDataOnEnter(
    loadSingle,
    props => props.params.id,
    (state, ident) => state.single[ident],
    data => !data)
export default class Page extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <ContentView>{ data }</ContentView>
                <Comment />
            </div>
        )
    }
}
