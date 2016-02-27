import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadIndex } from '../actions/article'
import ListView from '../components/ListView'

@connect(
    state => ({ loaded: state.index }),
    dispatch => ({
        load(start) {
            dispatch(loadIndex(start))
        }
    })
)
class Index extends Component {
    constructor(props) {
        super(props)
        this.handleLoadMore = this.handleLoadMore.bind(this)
    }
    componentWillMount() {
        const { loaded, load } = this.props
        if (!loaded.length) {
            load(0)
        }
    }
    handleLoadMore() {
        this.props.load(this.props.loaded.length + 1)
    }
    render() {
        const list = this.props.loaded

        const view = list.length ? list.map(v => (
            <li key={ v._id }>
                <ArticleView>
                    { v }
                </ArticleView>
            </li>
        )) : <li> LOADING </li>

        const tail = <li onClick={this.handleLoadMore}>LOAD MORE</li>
        return (
            <ul>
                { view }
                { list.length && tail }
            </ul>
        )
    }
    static fetchData(store) {
        return store.dispatch(loadIndex(0))
    }
}
Index.propTypes = {
    loaded: PropTypes.array.isRequired,
    load: PropTypes.func.isRequired
}
export default Index