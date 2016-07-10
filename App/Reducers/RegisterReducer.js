import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  username: null,
  errorCode: null,
  attempting: false,
  success: null
})

// register attempts
const attempt = (state, action) =>
  state.merge({ attempting: true })

// successful register
const success = (state, action) =>
  state.merge({ attempting: false, errorCode: null, username: action.username, success: true})

// register failure
const failure = (state, action) =>
  state.merge({ attempting: false, errorCode: action.errorCode })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.REGISTER_ATTEMPT]: attempt,
  [Types.REGISTER_SUCCESS]: success,
  [Types.REGISTER_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
