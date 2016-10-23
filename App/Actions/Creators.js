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

const createChannel = (data) => ({ type: Types.CREATE_CHANNEL, data})
const createChannelSuccess = (id) => ({ type: Types.CREATE_CHANNEL_SUCCESS, id})
const createChannelFailed = (error) => ({ type: Types.CREATE_CHANNEL_FAILED, error })

const joinChannel = (id) => ({ type: Types.JOIN_CHANNEL, id})
const joinChannelSuccess = (id) => ({ type: Types.JOIN_CHANNEL_SUCCESS, id})
const joinChannelFailed = (error) => ({ type: Types.JOIN_CHANNEL_FAILED, error })

const fetchChannel = (id) => ({ type: Types.FETCH_CHANNEL, id})
const fetchChannelSuccess = () => ({ type: Types.FETCH_CHANNEL_SUCCESS})
const fetchChannelFailed = (error) => ({ type: Types.FETCH_CHANNEL_FAILED, error })

const openChannel = (id) => ({ type: Types.OPEN_CHANNEL, id})

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
  createChannel,
  createChannelSuccess,
  createChannelFailed,
  joinChannel,
  joinChannelFailed,
  joinChannelSuccess,
  logout,
  startup
}
