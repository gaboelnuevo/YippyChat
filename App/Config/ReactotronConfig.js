import Reactotron from 'reactotron'
import {Platform} from 'react-native'

Reactotron.connect({
  enabled: __DEV__,
  name: 'ignite App',
  server: '192.178.1.205',
  port: 3334,
  userAgent: Platform.OS
})
