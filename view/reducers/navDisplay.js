import {
    TOGGLE_NAV
} from '../constants'

export default (state = false, action) => {
    switch(action.type) {
        case TOGGLE_NAV:
            return !state
        default:
            return state
    }
}
