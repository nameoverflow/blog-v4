import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import { index, single } from './article'
import { page, pageList } from './page'
import archive from './archive'
import tags from './tags'

// const scroll = (state = null, action) => {
//     switch (action.type) {
//         case CHANGE_SCROLL_BEHAVIOR:
//             return action.handler
//         default:
//             return state
//     }
// }

export default combineReducers({
    index,
    single,
    archive,
    page,
    pageList,
    tags,
    // scroll,
    routing
})
