import { take, put, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
//import R from 'ramda'

// process STARTUP actions
export function * watchStartup () {
  while (true) {
    yield take(Types.STARTUP)
    const accessToken = yield select((state) => state.login.accessToken)
    if(accessToken){
      yield put(Actions.receiveToken(accessToken))
    }
  }
}
