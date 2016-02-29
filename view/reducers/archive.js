import { combineReducers } from 'redux'
import {
    GET_YEARS_SUCCESS,
    GET_YEARS_FAILURE,

    GET_SINGLE_SUCCESS,
    GET_SINGLE_FAILURE,

    TOGGLE_TIME_SECTION,
    GET_ARCHIVE_SUCCESS,
    
    CLEAR_SINGLE
} from '../constants'

const list = (state = [], action) => {
    switch (action.type) {
        case GET_YEARS_SUCCESS:
            return state.concat(action.data)
        case GET_YEARS_FAILURE:
            return state.concat(action.err)
        default:
            return state
    }
}

const display = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_TIME_SECTION:
            const new_state = Object.assign({}, state)
            new_state[action.selection] = !new_state[action.selection]
            return new_state
        default:
            return state
    }
}

const data = (state = {}, action) => {
    switch (action.type) {
        case GET_ARCHIVE_SUCCESS:
            const new_state = Object.assign({}, state)
            new_state[action.extra] = action.data
            return new_state
        default:
            return state
    }
}

export default combineReducers({
    list, display, data
})
