import { Transitions } from '../Themes/'
import { Images } from '../Themes'
// I18n
import I18n from '../I18n/I18n.js'

export default new class Routes {

	// Here are the "Containers" in our app (e.g. Screens).
	//
	// These routes are implemented as getter functions
	// because I like the simple calling notation, but
	// they're lazily evaluated to prevent recursion
	// when the screens themselves use this Routes file.


	// get PresentationScreen () {
	//   return {
	//     title: I18n.t('welcome'),
	//     component: require('../Containers/PresentationScreen').default,
	//     leftButton: 'HAMBURGER'
	//   }
	// }

	// get LoginScreen () {
	//   return {
	//     title: I18n.t('login'),
	//     component: require('../Containers/LoginScreen').default,
	//     customConfiguration: Transitions.modal,
	//     leftButton: 'BACK'
	//   }
	// }

	get IntroScreen () {
		return {
			title: '',
			component: require('../Containers/IntroScreen').default,
			hideNavbar: true
		}
	}

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

	get NewDescriptionScreen () {
		return {
			title: '',
			component: require('../Containers/NewDescriptionScreen').default,
			hideNavbar: true
			// customConfiguration: Transitions.modal
		}
	}

	get NewIconScreen () {
		return {
			title: '',
			component: require('../Containers/NewIconScreen').default,
			hideNavbar: true
			// customConfiguration: Transitions.modal
		}
	}

	get NewColorScreen () {
		return {
			title: '',
			component: require('../Containers/NewColorScreen').default,
			hideNavbar: true
			// customConfiguration: Transitions.modal
		}
	}

  // Here are the "Containers" in our app (e.g. Screens).
  //
  // These routes are implemented as getter functions
  // because I like the simple calling notation, but
  // they're lazily evaluated to prevent recursion
  // when the screens themselves use this Routes file.

  get IntroScreen () {
    return {
      title: '',
      component: require('../Containers/IntroScreen').default,
      hideNavbar: true
    }
  }

  get PresentationScreen () {
    return {
      title: I18n.t('welcome'),
      component: require('../Containers/PresentationScreen').default,
      leftButton: 'HAMBURGER',
      customConfiguration: Transitions.fade,
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
