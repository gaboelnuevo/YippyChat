import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {
  // attempts to login
  function * attemptRegister (username, password) {
    const response = yield call(api.userRegister, {
      username: username,
      email: username + '@yippy.chat',
      password: password
    })
    if (response.ok) {
      //yield put(Actions.registerSuccess(username))
      yield put(Actions.attemptLogin(username, password))
    }else{
      // dispatch failure
      yield put(Actions.registerFailure('ERROR'))
    }
  }

  function * watchRegisterAttempt () {
    // daemonize
    while (true) {
      // wait for REGISTER_ATTEMPT actions to arrive
      const { username, password } = yield take(Types.REGISTER_ATTEMPT)
      // call attemptRegister to perform the actual work
      yield call(attemptRegister, username, password)
    }
  }

  return {
    attemptRegister,
    watchRegisterAttempt
  }
}
