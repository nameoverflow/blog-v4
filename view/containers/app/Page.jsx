import React, { Component, PropTypes } from 'react'

import ContentView from '../../components/ContentView'

import { loadPage } from '../../actions/page'

import { loadDataOnEnter } from '../../utils'


@loadDataOnEnter(
    loadPage,
    props => props.params.title,
    (state, ident) => state.page[ident],
    data => !data)
export default class Page extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <ContentView isPage={ true }>{ data }</ContentView>
            </div>
        )
    }
}
