import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ListView from '../../components/ListView'

import { loadTagArticle } from '../../actions/tags'

import { alignScrollTop } from '../../utils'

const stateToProp = (state, ownProps) => ({
    data: state.tags.article[ownProps.params.tag],
    tag: ownProps.params.tag
})

const dispToProp = dispatch => ({
    load(tag) {
        dispatch(loadTagArticle(tag))
    }
})

@connect(stateToProp, dispToProp)
@alignScrollTop
export default class TagArticle extends Component {
    constructor(props) {
        super(props)
        this.handleLoadMore = this.handleLoadMore.bind(this)
    }
    componentWillMount() {
        const { data, load } = this.props
        if (!data || !data.length) {
            load(this.props.tag)
        }
    }
    handleLoadMore() {
        this.props.load(this.props.tag, this.props.data.length + 1)
    }
    render() {
        const list = this.props.data
        console.log(list && list.length)
        const view = list && list.length ? list.map(v => (
            <li key={ v._id }>
                <ListView>
                    { v }
                </ListView>
            </li>
        )) : <li> LOADING </li>

        const tail = <li onClick={this.handleLoadMore}
                        style={{ textAlign: 'center' }}>LOAD MORE</li>
        return (
            <ul className='TagArticle'>
                { view }
                { list && tail }
            </ul>
        )
    }
    static fetchData(store) {
        return store.dispatch(loadTagArticle(0, 10))
    }
}
