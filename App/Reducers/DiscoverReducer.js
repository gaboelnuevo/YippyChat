import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  discovering: null ,
  error: null,
  channels: null,
  geolocation: null
})

const discover = (state, action) =>
  state.merge({
    discovering: true,
    error: null,
    geolocation: action.geolocation
  })

const discoverSuccess = (state, action) =>
    state.merge({
      discovering: false,
      channels: action.channels
    })

const discoverFailed = (state, action) =>
  state.merge({
    discovering: false,
    error: true
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.DISCOVER_CHANNELS]: discover,
  [Types.DISCOVER_CHANNELS_SUCCESS]:  discoverSuccess,
  [Types.DISCOVER_CHANNELS_FAILED]: discoverFailed
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
