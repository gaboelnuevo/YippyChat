import React, {PropTypes} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  DeviceEventEmitter,
  LayoutAnimation,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import Actions from '../Actions/Creators'
import {Images, Metrics} from '../Themes'

import Routes from '../Navigation/Routes'

// I18n
import I18n from '../I18n/I18n.js'

class LoginScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      username: 'username',
      password: 'password',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false

    // Bind before render
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handlePressLogin = this.handlePressLogin.bind(this)
    this.handlePressCancel = this.handlePressCancel.bind(this)
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate();
    const { navigator } = this.props;
    const route = Routes.PresentationScreen;

    if(newProps.isLogged){
      navigator.replace(route);
    }else{
      if (this.isAttempting && !newProps.attempting) {
        navigator.pop();
      }
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    DeviceEventEmitter.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    DeviceEventEmitter.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))

    // Configure the right nav button
    this.props.navigator.state.tapForgotPassword = this.tapForgotPassword.bind(this)
  }

  // Method that runs when you tap the right nav bar button
  tapForgotPassword () {
    Alert.alert(I18n.t('forgotPassword'))
  }

  componentWillUnmount () {
    DeviceEventEmitter.removeAllListeners('keyboardDidShow')
    DeviceEventEmitter.removeAllListeners('keyboardDidHide')
  }

  keyboardDidShow (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide (e) {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    })
  }

  handlePressLogin () {
    const { username, password } = this.state
    const { dispatch } = this.props
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    dispatch(Actions.attemptLogin(username, password))
  }

  handlePressCancel () {
    const { navigator } = this.props
    navigator.pop()
  }

  handleChangeUsername (text) {
    this.setState({ username: text })
  }

  handleChangePassword (text) {
    this.setState({ password: text })
  }

  render () {
    const { username, password } = this.state
    const { attempting } = this.props
    const editable = !attempting
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
      <View style={[Styles.container]}>
        <View style={{flex:1}}>
          <View style={{flex:1.2}}/>
          <View style={{flex:2}}>
            <Text style={{color:'#E2E2E2',textAlign:'center', fontSize:60}}>yippy<Text style={{fontWeight:'bold'}}>.chat</Text></Text>
          </View>
          <View style={{flex:1}}/>
        </View>
        <View style={{flex:1}}>
          
          <View style={Styles.form}>

            <Text style={{textAlign:'center', marginBottom:5}}>create an account</Text> 
            <View style={Styles.row}>
              <TextInput
                ref='username'
                style={textInputStyle}
                editable={editable}
                keyboardType='default'
                returnKeyType='search'
                onChangeText={this.handleChangeUsername}
                placeholder={I18n.t('username')} />
            </View>

            <View style={[Styles.row]}>
              <TextInput
                ref='password'
                style={textInputStyle}
                editable={editable}
                keyboardType='default'
                returnKeyType='search'
                secureTextEntry
                onChangeText={this.handleChangePassword}
                placeholder={I18n.t('password')} />
            </View>

            <View style={[Styles.loginRow]}>
              <View style={{flex:1}}></View>
              <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
                <View style={Styles.loginButton}>
                  <Text style={Styles.loginText}>{I18n.t('signIn')}</Text>
                </View>
              </TouchableOpacity>
              <View style={{flex:1}}/>
            </View>
            <View style={[Styles.loginRow]}>
              <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
                <Text style={{marginTop:10,textAlign: 'center',fontSize:15}}>already have an account? <Text style={{color:'#498DDE'}}>sign in here</Text></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex:1}}/>
      </View>
    )
  }

}

LoginScreen.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
  attempting: PropTypes.bool,
  isLogged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    attempting: state.login.attempting,
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps)(LoginScreen)
