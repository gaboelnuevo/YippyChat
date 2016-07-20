import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username, userId) =>
  ({ type: Types.LOGIN_SUCCESS, username, userId})

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const receiveToken = (accessToken) =>
    ({ type: Types.RECEIVE_TOKEN, accessToken })

const attemptRegister = (username, password) =>
    ({ type: Types.REGISTER_ATTEMPT, username, password })

const registerSuccess = (username) =>
    ({ type: Types.REGISTER_SUCCESS, username })

const registerFailure = (errorCode) =>
    ({ type: Types.REGISTER_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const discoverChannels = (geolocation) => ({ type: Types.DISCOVER_CHANNELS, geolocation})
const discoverChannelsSuccess = (channels) => ({ type: Types.DISCOVER_CHANNELS_SUCCESS, channels})
const discoverChannelsFailed = () => ({ type: Types.DISCOVER_CHANNELS_FAILED })

const receiveEntities = (response) =>  ({ type: Types.RECEIVE_ENTITIES })

/**
 Makes available all the action creators we've created.
 */

export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  receiveToken,
  receiveEntities,
  registerSuccess,
  attemptRegister,
  registerFailure,
  discoverChannels,
  discoverChannelsSuccess,
  discoverChannelsFailed,
  logout,
  startup
}
