import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.snow,
    flex:1,
    alignItems:'center',
  },
  form: {
    backgroundColor: Colors.background,
    margin: 10,
    borderRadius: 4
  },
  row: {
    paddingHorizontal: 5,
    marginHorizontal:20,
    marginVertical:5,
    backgroundColor:"#E2E2E2", 
    borderRadius: 8
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {height: 40,  backgroundColor: '#E2E2E2'
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flex:1,
  },
  loginButtonWrapper: {
    flex: 2
  },
  loginButton: {
    flex: 1,
    borderRadius:9,
    marginTop:10,
    backgroundColor: Colors.greenMasiso,
    padding: 10
  },
  loginText: {
    textAlign: 'center',
    fontSize:20,
    color: Colors.silver
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
  }
})
