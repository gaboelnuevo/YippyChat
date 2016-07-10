import React, {PropTypes} from 'react'
import { TouchableOpacity, ListView, ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
//import I18n from '../I18n/I18n.js'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    var chats = [
    {
      id:10,
      people:99,
      name:"#AngelHack",
      location:{
        lat:1.23,
        lng:40.2
      },
      icon:'search',
      description:'swgg',
      color:'black'
    },{
      id:14,
      people:234,
      name:"#BarceloVrsRealma",
      location:{
        lat:1.23,
        lng:40.2
      },
      icon:'search',
      description:'swgg',
      color:'black'
    },{
      id:10,
      people:99,
      name:"#AngelHack",
      location:{
        lat:1.23,
        lng:40.2
      },
      icon:'search',
      description:'swgg',
      color:'black'
    },{
      id:10,
      people:99,
      name:"#AngelHack",
      location:{
        lat:1.23,
        lng:40.2
      },
      icon:'search',
      description:'swgg',
      color:'black'
    },{
      id:10,
      people:99,
      name:"#AngelHack",
      location:{
        lat:1.23,
        lng:40.2
      },
      icon:'search',
      description:'swgg',
      color:'black'
    }]

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    this.state = {
      username:'gadiel',
      iconDataSource: ds.cloneWithRows(chats),
    }
  
  }

  renderItem(rowData){

    return(
      <TouchableOpacity onPress={()=>this.setIcon(rowData)}>
        
      </TouchableOpacity>
    );
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  render () {
    return (
      <View style={styles.container}>

        <View style={{flexDirection:'row',alignItems:'center',height:50, backgroundColor:'#4F96DB'}}>
          
          <View style={{height:60, width:65}}/>
          <Text style={{flex:10,color:'white',fontSize:20}}>{this.state.username}</Text>
          <Image source={Images.new_channel} style={{marginRight:10,width:40, height:40}}/>
        </View>
        <View style={{justifyContent:'center',position:'absolute',top:0,backgroundColor:'#83C893',height:60, width:60, borderRadius:200, borderWidth:2, borderColor:'#4F96DB'}}>
          <Text style={{textAlign:'center', fontSize:25, color:'white'}}>IM</Text>
        </View>

        <ListView 
          renderRow={this.renderItem.bind(this)}
          dataSource={this.state.iconDataSource}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={true}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(PresentationScreen)
