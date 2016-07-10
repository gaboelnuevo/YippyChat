import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// All translations for the app go here:
I18n.translations = {
  en: {
    signIn: 'Sign In',
    logOut: 'Log Out',
    forgotPassword: 'Forgot Password',
    username: 'Username',
    password: 'Password',
    cancel: 'Cancel',
    welcome: 'Welcome',
    login: 'Login',
    login_fast_login: 'use a fast nickname',
    login_or: '- OR -',
    login_register: 'create a account',
    login_sign_text: 'already have a account? ',
    login_signup: 'sign up here',
    login_next: 'NEXT'
  },
  es: {
    signIn: 'Entrar',
    logOut: 'Salir',
    forgotPassword: 'Recordar Contraseña',
    username: 'Usuario',
    password: 'Password',
    cancel: 'Cancelar',
    welcome: 'Bienvenido',
    login: 'Entrar',
    login_fast_login: 'use un apodo de forma rapida',
    login_or: '- O -',
    login_register: 'crear una cuenta',
    login_sign_text: 'already have a account? ',
    login_signup: 'sign up here',
    login_next: 'NEXT'
  },
}

export default I18n
