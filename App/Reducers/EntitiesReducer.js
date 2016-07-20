import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import merge from 'lodash/merge'

export const INITIAL_STATE = Immutable({
  users: {},
  channels: {},
  messages: {}
})

function mergeEntities(state, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }
  return state;
}

const receive = (state, action) => mergeEntities(state, action);

const ACTION_HANDLERS = {
  [Types.ENTITIES_RECEIVE]: receive
}


export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
