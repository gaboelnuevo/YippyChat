import { Schema } from 'normalizr'

export const userSchema = new Schema('users', {
  idAttribute: 'id'
})

export const channelSchema = new Schema('channels', {
  idAttribute: 'id'
})
