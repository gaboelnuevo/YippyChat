import { StyleSheet } from 'react-native'
import { Colors, Metrics, CommonStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContainer: {
    marginTop: Metrics.navBarHeight * 2,
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 36,
    width: 180,
    resizeMode: 'contain'
  },
  next: {
  	borderRadius: 8, 
  	backgroundColor: '#7ED321', 
  	// color: '#FFF',
  	paddingLeft: 40,
  	paddingRight: 40,
  	paddingTop: 12,
  	paddingBottom: 12,
  	marginTop: 16,
  	marginBottom: 5
  },
  messageContainer: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#5F5F5F'
  },
  link: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    color: '#4A90E2'
  },
  link_white: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    color: '#FFF'
  },
  or: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#5F5F5F'
  },
  input: {
  	height: 40, 
  	borderRadius: 8, 
  	backgroundColor: '#E8E8E8', 
  	padding: 6,
  	marginBottom: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginBox: {
    padding: 25,
    marginBottom: 50
  },
  loginButton: {
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  }
})
