import {
    GET_INDEX_SUCCESS,
    GET_INDEX_FAILURE,

    GET_SINGLE_SUCCESS,
    GET_SINGLE_FAILURE,

    ENTITIES_PER_PAGE,

    CLEAR_SINGLE,

    URL_ARTICLE
} from '../constants'
import { CALL_API } from '../middleware'

export const loadIndex = (start, limit) => {
    const url = `${URL_ARTICLE}?start=${start}&limit=${limit}&summary&break`
    return {
        [CALL_API]: {
            method: 'get',
            url: url,
            success: GET_INDEX_SUCCESS,
            fail: GET_INDEX_FAILURE
        }
    }
}


export const loadSingle = id => {
    const url = `${URL_ARTICLE}/${id}`
    return {
        [CALL_API]: {
            method: 'get',
            url: url,
            success: GET_SINGLE_SUCCESS,
            fail: GET_SINGLE_FAILURE
        }
    }
}


export const clearSingle = () => ({
    type: CLEAR_SINGLE
})
