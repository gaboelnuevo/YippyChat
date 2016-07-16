import React, {PropTypes} from 'react'
import { TouchableOpacity, ListView, ScrollView, Text, Image, View, Alert } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'
//import I18n from '../I18n/I18n.js'
import Actions from '../Actions/Creators'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      username: this.props.username,
      dataSource: ds.cloneWithRows(this.props.channels)
    }

    this.ds = ds;
    this.discover = this.discover.bind(this)
  }

  createChannelScreen(){
  	this.props.navigator.push(Routes.NewChannelRoom);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
       dataSource: this.ds.cloneWithRows(nextProps.channels),
       username: nextProps.username
    });
  }


  discover(){
    const { dispatch } = this.props;

    /*navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(Actions.discoverChannels({lat:position.latitude, lng:position.longitude}));
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
    );*/

    // for test
    dispatch(Actions.discoverChannels({lat:0, lng:0}));
  }

  componentWillMount(){
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }

  }

  componentDidMount(){
    this.discover();
  }

  clickedRoom(roomData){
    this.props.navigator.push(Routes.ChatRoom(roomData));
  }

  renderItem(roomDetails){

    return(
      <TouchableOpacity onPress={()=>this.clickedRoom(roomDetails)}>
        <View style={{marginHorizontal:15,height:60, flexDirection:'row', alignItems:'center', borderBottomWidth:0.5, }}>
          <View style={{marginRight:10,height:40, width:40,justifyContent:'center',backgroundColor:'red', alignItems:'center', borderRadius:100}}>
            <Icon name={roomDetails.icon} size={22} color={roomDetails.color} style={{alignSelf:'center'}}/>
          </View>
          <View style={{flex:8}}>
            <Text style={{fontSize:13}}> {roomDetails.name} </Text>
            <Text style={{fontSize:10}}> {roomDetails.description} </Text>
          </View>
          <View style={{marginRight:10,flexDirection:'row',alignItems:'center', justifyContent:'center',flex:1,padding:7, borderRadius:30, backgroundColor:'#E7E7E7'}} >
            <View style={{borderRadius:30,height:5, width:5,marginRight:4, backgroundColor:'green'}}/>
            <Text>{roomDetails.id}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render () {
    return (
      <View style={styles.container}>

        <View style={styles.toolbarChannels}>

          <View style={{height:60, width:65}}/>
          <Text style={{flex:10,color:'white',fontSize:20}}>{this.state.username}</Text>
          <TouchableOpacity onPress={()=>this.props.navigator.push(Routes.NewChannelScreen)}>
          	<Image source={Images.new_channel} style={{marginRight:10,width:40, height:40}}/>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',position:'absolute',top:0,backgroundColor:'#83C893',height:60, width:60, borderRadius:200, borderWidth:2, borderColor:'#4F96DB'}}>
          <Text style={{textAlign:'center', fontSize:25, color:'white'}}>IM</Text>
        </View>

        <ListView
          renderRow={this.renderItem.bind(this)}
          dataSource={this.state.dataSource}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={true}/>
        <View style={{marginLeft:10,height:40}}>
          <Text style={{fontSize:20}} >VIEW CHANNELS AROUND 5kms</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.discover.channels || [],
    username: state.login.username || ''
  }
}

export default connect(mapStateToProps)(PresentationScreen)
