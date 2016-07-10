import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import I18n from '../I18n/I18n.js'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class ChannelsListScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  toNewChannel(){
  	const { navigator } = this.props;
  	const route = Routes.NewChannelScreen;
  	navigator.push(route);
  }

  render () {
    return (
      <ScrollView style={styles.container}>
      	<TouchableOpacity onPress={this.toNewChannel.bind(this)}>
        <Text style={styles.section} >
		New
        </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ChannelsListScreen)
