import { StyleSheet } from 'react-native'
import { Colors, Metrics, CommonStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContainer: {
    marginTop: Metrics.navBarHeight * 2,
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 20,
    width: 100,
    marginTop: 20,
    marginBottom: 30,
    resizeMode: 'contain'
  },
  textBig: {
    fontSize: 48,
    color: '#5F5F5F'
  },
  textNormal: {
    fontSize: 36,
    color: '#5F5F5F'
  },
  comment: {
    fontSize: 16,
    color: '#D4D4D4',
    marginTop: 6
  },
  inputContainer: {
  	paddingTop:50,
	paddingBottom:10,
    flexDirection:'row',
    borderBottomWidth: 1,
	borderBottomColor: '#979797',
  },
  textareaContainer: {
  	paddingTop:60,
	paddingBottom:10,
    flexDirection:'row',
    borderBottomWidth: 1,
	borderBottomColor: '#979797',
  },
  input: {
  	color:'#737373',
	textAlign:'left',
	fontWeight:'bold',
    flex:1,
    height: 30,
    padding: 5,
  },
  textarea: {
  	color:'#737373',
	textAlign:'left',
	fontWeight:'bold',
	height: 70,
    flex:1
  },
  next: {
  	width: 60,
  	height: 30,
  	color:'#737373',
  	textAlign:'center',
  	fontSize: 20
  },
  nextTextarea: {
  	width: 60,
  	marginTop: 46,
  	color:'#737373',
  	textAlign:'center',
  	fontSize: 20
  },
  lists:{
  	justifyContent: 'flex-start',
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  	marginTop: 20
  },
  listItem:{
  	width: 50,
  	height: 50,
  	margin: 12
  },
  listItemColor:{
  	width: 30,
  	height: 30,
  	borderRadius: 3,
  	margin: 12
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
