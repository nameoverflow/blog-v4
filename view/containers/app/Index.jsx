import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadIndex } from '../../actions/article'
import ListView from '../../components/ListView'
import ListTail from '../../components/ListTail'

import { alignScrollTop, scrollLoaderBundle, loadDataOnEnter } from '../../utils'

@loadDataOnEnter(
    loadIndex,
    () => 0,
    state => state.index,
    data => !data.list.length)
class Index extends Component {
    componentDidMount() {
        scrollLoaderBundle.bind(() => this.handleLoadMore())
    }
    componentWillReceiveProps(nextProps) {
        const { end } = nextProps.data
        if (end) {
            scrollLoaderBundle.remove()
        }
    }
    componentWillUnmount() {
        scrollLoaderBundle.remove()
    }
    handleLoadMore() {
        return this.props.load(this.props.data.list.length)
    }
    render() {
        const { list, end } = this.props.data

        const view = list.length ? list.map(v =>
            <li key={ v._id }>
                <ListView>
                    { v }
                </ListView>
            </li>
        ) : []

        return (
            <ul className='Index'>
                { view }
                <ListTail isEnd={ end } />
            </ul>
        )
    }
    static scrollLoad(store) {
        const start = store.getState().index.length
        return store.dispatch(loadIndex(start, 10))
    }
}

Index.propTypes = {
    loaded: PropTypes.array,
    load: PropTypes.func
}
export default Index
