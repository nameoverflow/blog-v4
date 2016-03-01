import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleView from '../../components/ArticleView'

import { loadPage } from '../../actions/page'

import { alignScrollTop } from '../../utils'

const stateToProp = (state, ownProps) => ({
    data: state.page[ownProps.params.title],
    title: ownProps.params.title
})

const dispToProp = dispatch => ({
    load(title) {
        dispatch(loadPage(title))
    }
})

@connect(stateToProp, dispToProp)
@alignScrollTop
export default class Page extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        const { data, title, load } = this.props
        if (!data) {
            load(title)
        }
    }
    render() {
        const data = this.props.data
        const view = data ?
                        <ArticleView isPage={ true }>{ data }</ArticleView>
                        : <div>Loading</div>
        return (
            !data ? <div> Loading... </div> :
            <div>
                { view }
            </div>
        )
    }
    static fetchData(store, props) {
        return store.dispatch(loadPage(props.params.title))
    }
}
