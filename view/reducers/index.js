import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import { index, single } from './article'
import { page, pageList } from './page'
import archive from './archive'

export default combineReducers({
    index,
    single,
    archive,
    page,
    pageList,
    routing
})
