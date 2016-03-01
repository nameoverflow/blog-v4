import {
    GET_PAGE_SUCCESS,
    GET_PAGE_FAILURE,

    GET_PAGE_LIST_SUCCESS,
    GET_PAGE_LIST_FAILURE
} from '../constants'


const makeError = action => ({
    title: action.err,
    body: `${action.code}: ${action.err}`
})
export const pageList = (state = [], action) => {
    switch (action.type) {
        case GET_PAGE_LIST_SUCCESS:
            return [...state, ...action.data]
        default:
            return state
    }
}

export const page = (state = {}, action) => {
    let new_state = Object.assign({}, state)
    switch (action.type) {
        case GET_PAGE_SUCCESS:
            new_state[action.extra.title] = action.data
            return new_state
        case GET_PAGE_FAILURE:
            new_state[action.extra.title] = makeError(action)
            return new_state
        default:
            return state
    }
}


