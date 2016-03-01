import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadSingle, clearSingle } from '../../actions/article'
import ArticleView from '../../components/ArticleView'
import Comment from '../../components/Comment'

import { alignScrollTop } from '../../utils'

const stateToProp = (state, ownProps) => ({
    data: state.single[ownProps.params.id],
    id: ownProps.params.id
})

const dispToProp = dispatch => ({
    load(id) {
        dispatch(loadSingle(id))
    },
    clear() {
        dispatch(clearSingle())
    }
})

@connect(stateToProp, dispToProp)
@alignScrollTop
class Single extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        if (!this.props.data) {
            this.props.load(this.props.id)
        }
    }
    render() {
        const { data } = this.props
        const view = data ? <ArticleView>{ data }</ArticleView>
                            : <div>Loading</div>

        return (
            <div>
                { view }
                <Comment />
            </div>
        )
    }
    static fetchData(store, props) {
        return store.dispatch(loadSingle(props.params.id))
    }
}
Single.propTypes = {
    id: PropTypes.string,
    load: PropTypes.func,
    clear: PropTypes.func,
    data: PropTypes.object
}

export default Single