import {take, call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from '../I18n/I18n.js'
import { channelSchema } from '../Entities'

// This style of Saga is a common pattern.  It has a
// worker and a watcher.
//
// The watcher listens for the signal, and the worker
// does the job.

// We use a factory function will close over the scope of
// our watcher saga.  This ensures the API is passed in
// (hurray objects being composed).
export default (api) => {
  // ----------
  // The Worker
  // ----------
  // This is our worker.  It does the job.
  function * fetchChannel (id) {
    // make the call to the api
    const response = yield call(api.getChannel, id)
    // success?
    if (response.ok) {
      const normalized =  yield call(normalizer, response.data, channelSchema)
      yield put(Actions.receiveEntities(normalized))
      yield put(Actions.fetchChannelSuccess())
      return respose.data
    } else {
      yield put(Actions.receiveRoomFailure())
    }
  }

  function * worker (id) {
    // make the call to the api
    const response =  call(fetchChannel, id)
    if (response) {
      yield put(Actions.loadRoomSuccess(respose))
    }else{
      yield put(Actions.loadRoomFailed())
    }
  }

  // -----------
  // The Watcher
  // -----------
  // Make a watcher.  It's daemon.  It runs on startup and does
  // a few things:
  //
  // 1.  Goes into a loop to ensure it stays alive.
  // 2.  Listens for ROOM_REQUEST redux events
  // 3.  Unpacks the action.
  // 4.  Calls the worker (above) to do the job.
  function * watcher () {
    while (true) {
      const action = yield take(Types.OPEN_CHANNEL)
      const { id } = action
      yield call(worker, id)
    }
  }

  // Expose both functions.  Now, technically, we're only
  // needing to return the watcher.  If we return both, we
  // gain 2 important properties:
  //
  // 1.  We can test the worker directly without need to
  // mock the watcher taking.
  //
  // 2.  We can call the worker from other sagas which is
  // often required in some flow control cases.
  return {
    watcher,
    worker
  }
}
