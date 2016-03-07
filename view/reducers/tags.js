import {
    GET_TAGS_SUCCESS,
    GET_TAGS_FAILURE,

    GET_TAG_ARTICLE_SUCCESS,
    GET_TAG_ARTICLE_FAILURE,

    URL_API
} from '../constants'
import { combineReducers } from 'redux'

const tagArticle = (state = {}, action) => {
    switch (action.type) {
        case GET_TAG_ARTICLE_SUCCESS:
            const ns = Object.assign({}, state)
            const ident = action.extra.tagName
            ns[ident] = ns[ident] || { list: [], end: false }
            ns[ident].list = [...ns[ident].list, ...action.data]
            ns[ident].end = action.data.length < action.extra.expCount
            return ns
        default:
            return state
    }
}

const tags = (state = [], action) => {
    switch (action.type) {
        case GET_TAGS_SUCCESS:
            return [...state, ...action.data]
        default:
            return state
    }
}

export default combineReducers({
    list: tags,
    article: tagArticle
})
