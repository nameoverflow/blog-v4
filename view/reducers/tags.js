import {
    GET_TAGS_SUCCESS,
    GET_TAGS_FAILURE,

    GET_TAG_ARTICLE_SUCCESS,
    GET_TAG_ARTICLE_FAILURE,

    URL_API
} from '../constants'
import { combineReducers } from 'redux'

const tagArticle = (state = {}, action) => {
    const new_state = Object.assign({}, state)
    switch (action.type) {
        case GET_TAG_ARTICLE_SUCCESS:
            new_post[action.extra] = action.data
            return new_state
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
