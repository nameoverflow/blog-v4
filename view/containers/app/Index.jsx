import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadIndex } from '../../actions/article'
import ListView from '../../components/ListView'
import ListTail from '../../components/ListTail'

import { alignScrollTop, scrollLoaderBundle } from '../../utils'
@connect(
    state => ({ loaded: state.index }),
    dispatch => ({
        load(start, limit) {
            return dispatch(loadIndex(start, limit))
        }
    })
)
@alignScrollTop
class Index extends Component {
    constructor(props) {
        super(props)
        this.handleLoadMore = this.handleLoadMore.bind(this)
    }
    componentWillMount() {
        const { loaded, load } = this.props
        if (!loaded.list.length) {
            load(0, 10)
        }
    }
    componentDidMount() {
        scrollLoaderBundle.bind(this.handleLoadMore)
    }
    componentWillReceiveProps(nextProps) {
        const { end } = nextProps.loaded
        if (end) {
            scrollLoaderBundle.remove()
        }
    }
    componentWillUnmount() {
        scrollLoaderBundle.remove()
    }
    handleLoadMore() {
        return this.props.load(this.props.loaded.list.length)
    }
    render() {
        const { list, end } = this.props.loaded

        const view = list.length ? list.map(v => (
            <li key={ v._id }>
                <ListView>
                    { v }
                </ListView>
            </li>
        )) : <li> LOADING </li>

        const tail = <li onClick={this.handleLoadMore}
                        style={{ textAlign: 'center' }}>LOAD MORE</li>
        return (
            <ul className='Index'>
                { view }
                <ListTail text={ end ? 'End' : 'LOADING' } />
            </ul>
        )
    }
    static fetchData(store) {
        return store.dispatch(loadIndex(0, 10))
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