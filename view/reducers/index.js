import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import { index, single } from './article'
import navDisplay from './navDisplay'

export default combineReducers({
    index,
    single,
    navDisplay,
    routing
})
