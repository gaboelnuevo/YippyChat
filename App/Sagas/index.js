import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import { watchStartup } from './StartupSaga'
import loginUser from './LoginSaga'
import registerUser from './RegisterSaga'
import discoverChannels from './DiscoverSaga'

import DebugSettings from '../Config/DebugSettings'

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

// start the daemons
export default function * root () {
  yield fork(watchStartup)
  yield fork(loginUser(api).watchLoginAttempt)
  yield fork(loginUser(api).watchReceiveToken)
  yield fork(registerUser(api).watchRegisterAttempt)
  yield fork(registerUser(api).watchRegisterAttempt)
  yield fork(discoverChannels(api).watcher)
}
