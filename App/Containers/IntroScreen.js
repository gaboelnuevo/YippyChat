import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import I18n from '../I18n/I18n.js'

// Styles
import styles from './Styles/IntroScreenStyle'

export default class PresentationScreen extends React.Component {

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

  goToChannelsList(){
  	const { navigator } = this.props;
  	const route = Routes.ChannelsListScreen;
  	navigator.push(route);
  }

  render () {
	return (
	  <View style={styles.container}>
		  <View style={styles.messageContainer}>
		  	<Image source={Images.logo} style={styles.logo} />
			<Text style={styles.welcome}>
			  { I18n.t('login_fast_login') }
			</Text>
			<TextInput style={styles.input}/>
			<Text style={styles.or}>
			  { I18n.t('login_or') }
			</Text>
			<Text style={styles.welcome}>
			  { I18n.t('login_register') }
			</Text>
			<TextInput style={styles.input}/>
			<TextInput style={styles.input}/>
			<Text style={styles.welcome}>
			  { I18n.t('login_sign_text') }
			</Text>
			<TouchableOpacity>
				<Text style={styles.link}>{ I18n.t('login_signup') }</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={this.goToChannelsList.bind(this)} style={styles.next}>
				<Text style={styles.link_white}>{ I18n.t('login_next') }</Text>
			</TouchableOpacity>
		  </View>
	  </View>
	)
  }
}

const mapStateToProps = (state) => {
  return {
	isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps)(PresentationScreen)
