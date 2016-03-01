import {
    GET_TAGS_SUCCESS,
    GET_TAGS_FAILURE,

    GET_TAG_ARTICLE_SUCCESS,
    GET_TAG_ARTICLE_FAILURE,

    URL_API
} from '../constants'
import { CALL_API } from '../middleware'

export const loadTags = () => {
    const url = `${URL_API}/tags`
    return {
        [CALL_API]: {
            method: 'get',
            url: url,
            success: GET_TAGS_SUCCESS,
            fail: GET_TAGS_FAILURE
        }
    }
}

export const loadTagArticle = tag => {
    const url = `${URL_API}/tags/${tag}`
    return {
        [CALL_API]: {
            method: 'get',
            url: url,
            success: GET_TAG_ARTICLE_SUCCESS,
            fail: GET_TAG_ARTICLE_FAILURE,
            extra: tag
        }
    }
}
