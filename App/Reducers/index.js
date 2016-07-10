import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import RegisterReducer from './RegisterReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login, register']
