// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Reactotron from 'reactotron'

// our "constructor"
const create = (baseURL = 'https://yippychat.herokuapp.com/api') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,

    // 10 second timeout...
    // ...however, it doesn't work on React Native because the `timeout`
    // property of `XMLHttpRequest` hasn't been implemented.  It is
    // arriving in RN 0.25 though!
    timeout: 10000
  })

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.
  const addMonitor = api.addMonitor((response) => {
    // Monitors are called passively after every request.
    Reactotron.apiLog(response)
    console.log(response)
  })

  const setToken = (token) => api.setHeader('Authorization', token)

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const userLogin = (credentials) => api.post('/users/login', credentials)

  const userRegister = (data) => api.post('/users', data)

  const discoverChannels = (geolocation) => api.post('/channels/nearby', {here: geolocation})

  const countChannelUsers = (id) => api.get(`/channels/${id}/users/count`)

  const countChannelMessages = (id) => api.get(`/channels/${id}/messages/count`)

  const getChannelData = (id) => api.get(`/channels/${id}`)

  const getMessages = (id) => api.get(`/channels/${id}/messages`)

  const sendMessage = (data) => api.post('/messages/sendmessage', data)

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    userLogin,
    userRegister,
    discoverChannels,
    countChannelUsers,
    countChannelMessages,
    getChannelData,
    getMessages,
    sendMessage,
    // additional utilities
    addMonitor,
    setToken
  }
}

// let's return back our create method as the default.
export default {
  create
}
