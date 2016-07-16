import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {
  // attempts to login
  function * attemptLogin (username, password) {
    const response = yield call(api.userLogin, {
      username: username,
      password: password
    })
    if (response.ok) {
      yield call(setToken, response.data.id);
      yield put(Actions.loginSuccess(username, response.data.userId));
    }else{
      // dispatch failure
      yield put(Actions.loginFailure('WRONG'))
    }
  }

  function * setToken (accessToken){
    if(api.setToken){
      yield call(api.setToken, accessToken)
    }
  }

  // a daemonized version which waits for LOGIN_ATTEMPT signals
  function * watchLoginAttempt () {
    // daemonize
    while (true) {
      // wait for LOGIN_ATTEMPT actions to arrive
      const { username, password } = yield take(Types.LOGIN_ATTEMPT)
      // call attemptLogin to perform the actual work
      yield call(attemptLogin, username, password)
    }
  }

  function * watchReceiveToken () {
    // daemonize
    while (true) {
      const { accessToken } = yield take(Types.RECEIVE_TOKEN)
      yield call(setToken, accessToken)
    }
  }

  return {
    attemptLogin,
    watchLoginAttempt,
    watchReceiveToken
  }
}
