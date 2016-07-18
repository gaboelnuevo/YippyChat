import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  username: null,
  errorCode: null,
  attempting: false,
  isLogged: false,
  accessToken: null,
})

// login attempts
const attempt = (state, action) =>
  state.merge({ attempting: true, isLogged: false })

// successful logins
const success = (state, action) =>
  state.merge({ attempting: false, errorCode: null, username: action.username, userId: action.userId, isLogged: true })

const receiveToken = (state, action) =>
    state.merge({ accessToken: action.accessToken })

// login failure
const failure = (state, action) =>
  state.merge({ attempting: false, errorCode: action.errorCode })

// logout
const logout = (state, action) =>
  state.merge({ username: null, isLogged: false })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_ATTEMPT]: attempt,
  [Types.RECEIVE_TOKEN]: receiveToken,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
