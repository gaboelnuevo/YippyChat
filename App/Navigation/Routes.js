import { Transitions } from '../Themes/'
import { Images } from '../Themes'
// I18n
import I18n from '../I18n/I18n.js'

export default new class Routes {

	get ChannelsListScreen () {
		return {
			title: 'nickname',
			component: require('../Containers/ChannelsListScreen').default,
			leftButton: 'BACK'
			// customConfiguration: Transitions.modal
		}
	}

	get NewChannelScreen () {
		return {
			title: '',
			component: require('../Containers/NewChannelScreen').default,
			hideNavbar: true
			// customConfiguration: Transitions.modal
		}
	}

	NewDescriptionScreen (data) {
		return {
			title: '',
			component: require('../Containers/NewDescriptionScreen').default,
			hideNavbar: true,
			passProps: data
			// customConfiguration: Transitions.modal
		}
	}

	NewIconScreen (data) {
		return {
			title: '',
			component: require('../Containers/NewIconScreen').default,
			hideNavbar: true,
			passProps: data
			// customConfiguration: Transitions.modal
		}
	}

	NewColorScreen (data) {
		return {
			title: '',
			component: require('../Containers/NewColorScreen').default,
			hideNavbar: true,
			passProps: data
			// customConfiguration: Transitions.modal
		}
	}

  get IntroScreen () {
    return {
      title: '',
      component: require('../Containers/IntroScreen').default,
      hideNavbar: true
    }
  }

  ChatRoom (data) {

    return {
      title: data.name,
      component: require('../Containers/ChatRoom.js').default,
      leftButton: 'BACK',
      customConfiguration: Transitions.fade,
      hideNavbar: true,
    }
  }

  get PresentationScreen () {
    return {
      title: I18n.t('welcome'),
      component: require('../Containers/PresentationScreen').default,
      leftButton: 'HAMBURGER',
      customConfiguration: Transitions.fade,
      hideNavbar: true,
    }
  }

  get LoginScreen () {
    return {
      title: I18n.t('login'),
      component: require('../Containers/LoginScreen').default,
      customConfiguration: Transitions.modal,
      leftButton: 'BACK',
      hideNavbar: true,
    }
  }

}
