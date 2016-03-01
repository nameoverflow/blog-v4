import {
    GET_PAGE_SUCCESS,
    GET_PAGE_FAILURE,

    GET_PAGE_LIST_SUCCESS,
    GET_PAGE_LIST_FAILURE,

    URL_API
} from '../constants'
import { CALL_API } from '../middleware'

export const loadPage = title => {
    const url = `${URL_API}/page/${title}`
    return {
        [CALL_API]: {
            method: 'get',
            url: url,
            success: GET_PAGE_SUCCESS,
            fail: GET_PAGE_FAILURE,
            extra: {
                title
            }
        }
    }
}

export const loadPageList = (start, limit) => {
    const url = `${URL_API}/page?start=${start}&limit=${limit}`
    return {
        [CALL_API]: {
            method: 'get',
            url: url,
            success: GET_PAGE_LIST_SUCCESS,
            fail: GET_PAGE_LIST_FAILURE
        }
    }
}
