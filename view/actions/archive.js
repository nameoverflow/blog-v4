import {
    GET_YEARS_SUCCESS,
    GET_YEARS_FAILURE,
    GET_ARCHIVE_SUCCESS,
    GET_ARCHIVE_FAILURE,
    TOGGLE_TIME_SECTION,
    URL_API
} from '../constants'
import { CALL_API } from '../middleware'

export const loadYears = () => {
    const url = `${URL_API}/time`
    return {
        [CALL_API]: {
            method: 'get',
            url: url,
            success: GET_YEARS_SUCCESS,
            fail: GET_YEARS_FAILURE
        }
    }
}

export const loadArchive = time => ({
    [CALL_API]: {
        method: 'get',
        url: `${URL_API}/archive/${time}`,
        success: GET_ARCHIVE_SUCCESS,
        fail: GET_ARCHIVE_FAILURE,
        extra: time
    }
})

export const toggleTimeSect = time => ({
    type: TOGGLE_TIME_SECTION,
    selection: time
})
