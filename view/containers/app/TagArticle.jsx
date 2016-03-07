import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ListView from '../../components/ListView'
import ListTail from '../../components/ListTail'

import { loadTagArticle } from '../../actions/tags'

import { scrollLoaderBundle, loadDataOnEnter } from '../../utils'



@loadDataOnEnter(
    loadTagArticle,
    props => props.params.tag,
    (state, ident) => state.tags.article[ident],
    data => !data || !data.list.length)
export default class TagArticle extends Component {
    componentWillReceiveProps(nextProps) {
        const { end } = nextProps.data
        if (end) {
            scrollLoaderBundle.remove()
        }
    }
    componentDidMount() {
        scrollLoaderBundle.bind(() => this.handleLoadMore())
    }
    handleLoadMore() {
        this.props.load(this.props.params.tag, this.props.data.length)
    }
    componentWillUnmount() {
        scrollLoaderBundle.remove()
    }
    render() {
        const data = this.props.data || {}
        const { list, end } = data
        const view = list && list.map(v => 
            <li key={ v._id }>
                <ListView>
                    { v }
                </ListView>
            </li>
        )

        return (
            <ul className='TagArticle'>
                { view }
                <ListTail isEnd={ end } />
            </ul>
        )
    }
    static scrollLoad(store, props) {
        const data = store.getState().tags.article[props.params.tag]
        const start = data.list && data.list.length
        return store.dispatch(loadTagArticle(props.params.tag, start))
    }
}
