import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadSingle, clearSingle } from '../actions/article'
import ArticleView from '../components/ArticleView'
import Comment from '../components/Comment'

const stateToProp = (state, ownProps) => ({
    data: state.single,
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
class Single extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        if (this.props.params.id !== this.props.data._id) {
            this.props.clear()
            this.props.load(this.props.id)
        }
    }
    render() {
        return (
            <div>
                <ArticleView>
                    { this.props.data }
                </ArticleView>
                <Comment/>
            </div>
        )
    }
    static fetchData(store, props) {
        return store.dispatch(loadSingle(props.params.id))
    }
}
Single.propTypes = {
    id: PropTypes.string.isRequired,
    load: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

export default Single