import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import I18n from '../I18n/I18n.js'

// Styles
import styles from './Styles/NewChannelStyle'

export default class NewDescriptionScreen extends React.Component {

  constructor (props) {
	super(props)
	this.state = {
		description: ''
	}
	// this.handlePressLogin = this.handlePressLogin.bind(this)
	this.props.isLogged = false;
  }

  static propTypes = {
	navigator: PropTypes.object.isRequired,
	isLogged: PropTypes.bool
  }

  toNextScreen(){
  	const { navigator } = this.props;
  	const route = Routes.NewIconScreen({
  		name: this.props.passProps.name, 
  		description: this.state.description 
  	});

  	navigator.push(route);
  }

  render () {
	return (
	  <View style={styles.container}>
		  <Image source={Images.logo} style={styles.logo} />
		  <Text style={styles.textBig}>
		  ADD A
		  </Text>
		  <Text style={styles.textNormal}>
		  DESCRIPTION
		  </Text>
		  <View style={styles.textareaContainer}>
		  	<TextInput onChangeText={(description) => this.setState({description})} editable={true} maxLength={100} multiline={true} numberOfLines={4} underlineColorAndroid='#fff' placeholder='Type the name' style={styles.textarea}/>
		  	<TouchableOpacity onPress={this.toNextScreen.bind(this)}>
				<Text style={styles.nextTextarea}>
					NEXT
				</Text>
			</TouchableOpacity>
		  </View>
		  <Text style={styles.comment}>minimal 200 characters</Text>
	  </View>
	)
  }
}

const mapStateToProps = (state) => {
  return {
	isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps)(NewDescriptionScreen)
