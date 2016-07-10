import React, {PropTypes} from 'react'
import { TouchableOpacity, Navigator, Platform, Dimensions,Linking, ListView, ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'
//import I18n from '../I18n/I18n.js'
var GiftedMessenger = require('react-native-gifted-messenger');


var STATUS_BAR_HEIGHT = 50;


export default class ChatRoom extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this._messages = [{
      text: 'Are you building a chat app?',
      name: 'React-Bot',
      image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
      position: 'left',
      date: new Date(2016, 3, 14, 13, 0),
      uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
    },
    {
      text: "Yes, and I use Gifted Messenger!",
      name: 'Awesome Developer',
      image: null,
      position: 'right',
      date: new Date(2016, 3, 14, 13, 1),
      uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
    }]

    this.state = {
      username:'gadiel',
      messages: this._messages,
    }
  
  }

  setMessages(messages) {
    this._messages = messages;

    this.setState({
      messages: messages,
    });
  }

  handleReceive(message = {}) {
    this.setMessages(this._messages.concat(message));
  }

  handleSend(message = {}) {

    message.uniqueId = Math.round(Math.random() * 10000); // simulating server-side unique id generation
    this.setMessages(this._messages.concat(message));

    }

  render () {
    return (
      <GiftedMessenger
        ref={(c) => this._GiftedMessenger = c}

        styles={{
          textLeft:{
            color:'#4F96DB'
          },
          bubbleLeft: {
            backgroundColor: '#CFEEF8',
          },
          textRight:{
            color:'#4F921C'
          },
          bubbleRight: {
            backgroundColor: '#C1EC95',
          },
        }}

        messages={this.state.messages}
        handleSend={this.handleSend.bind(this)}
        maxHeight={Dimensions.get('window').height - Navigator.NavigationBar.Styles.General.NavBarHeight - STATUS_BAR_HEIGHT}

        senderName='Awesome Developer'
        senderImage={null}
        displayNames={true}

        isLoadingEarlierMessages={this.state.isLoadingEarlierMessages}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ChatRoom)
