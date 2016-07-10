import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, ListView, TouchableOpacity, TextInput } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'
import I18n from '../I18n/I18n.js'

// Styles
import styles from './Styles/NewChannelStyle'

export default class NewColorScreen extends React.Component {
  
  constructor (props) {
	super(props)

	var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	this.state = {
		dataSource: ds.cloneWithRows(colors),
		initialPosition: 'unknown',
		lastPosition: 'unknown'
	}

	this.watchID = (null: ?number);
	// this.setIcon = this.setIcon.bind(this)
	this.props.isLogged = false;
  }

  static propTypes = {
	navigator: PropTypes.object.isRequired,
	isLogged: PropTypes.bool
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  toNextScreen(){
  	const { navigator } = this.props;
  	const route = Routes.NewChannelScreen;
  	navigator.push(route);
  }

  setColor(colorName){
  	var data = {
  		name: this.props.passProps.name, 
  		description: this.props.passProps.description,
  		icon: this.props.passProps.icon,
  		color: colorName,
  		location: {
  			lat: this.state.lastPosition.latitude,
  			lng : this.state.lastPosition.longitude
  		}
  	};

  	this.toNextScreen();
  }

  renderItem(rowData){
  	return(
  		<TouchableOpacity onPress={()=>this.setColor(rowData)}>
			<Text style={{ width: 40, height: 40, margin: 10, backgroundColor: rowData }}></Text>
		</TouchableOpacity>
  	);
  }

  render () {
	return (
	  <View style={styles.container}>
		  <Image source={Images.logo} style={styles.logo} />
		  <Text style={styles.textBig}>
		  CHOSE A
		  </Text>
		  <Text style={styles.textNormal}>
		  COLOR
		  </Text>
		  <ListView pageSize={30} contentContainerStyle={styles.lists} renderRow={this.renderItem.bind(this)} dataSource={this.state.dataSource}/>
	  </View>
	)
  }
}

const mapStateToProps = (state) => {
  return {
	isLogged: state.login.isLogged
  }
}

const colors = [
	'#e74c3c',
	'#e67e22',
	'#ffcd02',
	'#f0deb4',
	'#34495e',
	'#2b2b2b',
	'#9b59b6',
	'#3a6f81',
	'#3498db',
	'#2ecc71',
	'#1abc9c',
	'#95a5a6',
	'#345f41',
	'#745ec5',
	'#5e4534',
	'#ef717a',
	'#a5c63b',
	'#f47cc3',
	'#79302a',
	'#a38671',
	'#b8c9f1',
	'#5065a1'
];

export default connect(mapStateToProps)(NewColorScreen)
