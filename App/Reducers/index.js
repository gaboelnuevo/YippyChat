import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import RegisterReducer from './RegisterReducer'
import DiscoverReducer from './DiscoverReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  discover: DiscoverReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login, register']
