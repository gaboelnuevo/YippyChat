import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const attemptRegister = (username, password) =>
    ({ type: Types.REGISTER_ATTEMPT, username, password })

const registerSuccess = (username) =>
    ({ type: Types.REGISTER_SUCCESS, username })

const registerFailure = (errorCode) =>
    ({ type: Types.REGISTER_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const discoverChannels = (location) => ({ type: Types.DISCOVER_CHANNELS, location})
const discoverChannelsSuccess = (channels) => ({ type: Types.DISCOVER_CHANNELS_SUCCESS, channels})
const discoverChannelsFailed = () => ({ type: Types.DISCOVER_CHANNELS_FAILED })

/*const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })*/

/**
 Makes available all the action creators we've created.
 */

export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  registerSuccess,
  attemptRegister,
  registerFailure,
  discoverChannels,
  discoverChannelsSuccess,
  discoverChannelsFailed,
  logout,
  startup
}
