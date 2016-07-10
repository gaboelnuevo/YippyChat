import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import I18n from '../I18n/I18n.js'

// Styles
import styles from './Styles/NewChannelStyle'

export default class NewChannelScreen extends React.Component {

  constructor (props) {
	super(props)
	this.state = {}
	// this.handlePressLogin = this.handlePressLogin.bind(this)
	this.props.isLogged = false;
  }

  static propTypes = {
	navigator: PropTypes.object.isRequired,
	isLogged: PropTypes.bool
  }

  toNextScreen(){
  	const { navigator } = this.props;
  	const route = Routes.NewDescriptionScreen({ name: this.state.name });
  	navigator.push(route);
  }

  render () {
	return (
	  <View style={styles.container}>
		  <Image source={Images.logo} style={styles.logo} />
		  <Text style={styles.textBig}>
		  CREATE
		  </Text>
		  <Text style={styles.textNormal}>
		  A NEW
		  </Text>
		  <Text style={styles.textBig}>
		  CHANNEL
		  </Text>
		  <View style={styles.inputContainer}>
		  	<TextInput onChangeText={(name) => this.setState({name})} editable={true} maxLength={30} placeholder='Type the name' underlineColorAndroid='#fff' style={styles.input}/>
		  	<TouchableOpacity onPress={this.toNextScreen.bind(this)}>
				<Text style={styles.next}>
					NEXT
				</Text>
			</TouchableOpacity>
		  </View>
		  <Text style={styles.comment}>minimal 30 characters</Text>
	  </View>
	)
  }
}

const mapStateToProps = (state) => {
  return {
	isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps)(NewChannelScreen)
