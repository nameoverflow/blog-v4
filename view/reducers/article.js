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
            return [...state, ...action.data]
        default:
            return state
    }
}

export const single = (state = {}, action) => {
    switch (action.type) {
        case GET_SINGLE_SUCCESS:
            const new_state = Object.assign({
                [action.data._id]: action.data
            }, state)
            return new_state
        default:
            return state
    }
}