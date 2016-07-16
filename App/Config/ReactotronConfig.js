import Reactotron from 'reactotron'
import {Platform} from 'react-native'

Reactotron.connect({
  enabled: __DEV__,
  name: 'ignite App',
  server: '192.168.1.103',
  port: 3334,
  userAgent: Platform.OS
})
