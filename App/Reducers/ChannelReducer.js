import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  creating: false,
  fetching: false,
  error: null,
  activeId: null
})

const create = (state, action) => state.merge({
  creating: true,
  error: null
})

const createSuccess = (state, action) => state.merge({
  creating: false
})

const createFailed = (state, action) =>
state.merge({
  creating: false,
  error: action.error;
})

const fetch = (state, action) => state.merge({
  fetching: true,
  error: null
})

const fetchSuccess = (state, action) => state.merge({
  fetching: false
})

const fetchFailed = (state, action) => state.merge({
  fetching: false,
  error: action.error
})

const join = (state, action) => state.merge({
  fetching: true,
  error: null
})

const joinSuccess = (state, action) => state.merge({
  fetching: false
})

const joinFailed = (state, action) => state.merge({
  fetching: false,
  error: action.error
})

const open = (state, action) => state.merge({
  activeId: action.id
})

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.CREATE_CHANNEL]: create,
  [Types.CREATE_CHANNEL_SUCCESS]:  createSuccess,
  [Types.CREATE_CHANNEL_FAILED]: createFailed,
  [Types.FETCH_CHANNEL]: fetch,
  [Types.FETCH_CHANNEL_SUCCESS]:  fetchSuccess,
  [Types.FETCH_CHANNEL_FAILED]: fetchFailed,
  [Types.JOIN_CHANNEL]: join,
  [Types.JOIN_CHANNEL_SUCCESS]:  joinSuccess,
  [Types.JOIN_CHANNEL_FAILED]: joinFailed,
  [Types.OPEN_CHANNEL]: open
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
