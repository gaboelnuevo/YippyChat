// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT

  REGISTER_ATTEMPT
  REGISTER_SUCCESS
  REGISTER_FAILURE

  DISCOVER_CHANNELS
  DISCOVER_CHANNELS_SUCCESS
  DISCOVER_CHANNELS_FAILED

  STARTUP
`)
