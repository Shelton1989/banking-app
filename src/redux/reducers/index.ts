import userReducer from './userReducer'

import {
    combineReducers
} from 'redux'

const index = combineReducers({
    user: userReducer
})

export default index