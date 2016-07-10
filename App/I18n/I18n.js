import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// All translations for the app go here:
I18n.translations = {
  en: {
    signIn: 'NEXT',
    logOut: 'Log Out',
    forgotPassword: 'Forgot Password',
    username: 'username',
    password: 'password',
    cancel: 'Cancel',
    welcome: 'Welcome',
    login: 'Login'
  },
  es: {
    signIn: 'SIGUIENTE',
    logOut: 'Salir',
    forgotPassword: 'Recordar Contraseña',
    username: 'usuario',
    password: 'password',
    cancel: 'Cancelar',
    welcome: 'Bienvenido',
    login: 'Entrar'
  },
}

export default I18n
