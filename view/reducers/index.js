import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import { index, single } from './article'
import { page, pageList } from './page'
import archive from './archive'
import tags from './tags'

export default combineReducers({
    index,
    single,
    archive,
    page,
    pageList,
    tags,
    routing
})
