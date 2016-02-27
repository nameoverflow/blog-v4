import {
    GET_INDEX_SUCCESS,
    GET_INDEX_FAILURE,

    GET_SINGLE_SUCCESS,
    GET_SINGLE_FAILURE,

    CLEAR_SINGLE,

} from '../constants'

export const index = (state = [], action) => {
    switch (action.type) {
        case GET_INDEX_SUCCESS:
            return state.concat(action.data)
        case GET_INDEX_FAILURE:
            return state.concat(action.err)
        default:
            return state
    }
}

export const single = (state = {}, action) => {
    switch (action.type) {
        case GET_SINGLE_SUCCESS:
            return action.data
        case CLEAR_SINGLE:
            return {}
        case GET_SINGLE_FAILURE:
            return action.err
        default:
            return state
    }
}