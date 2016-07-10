function fakeLogin(credentials){
  if (credentials.password === '') {
    return {
      ok: false,
      data: null
    }
  }
  return {
    ok: true,
    data: {
      token: 'FAKE'
    }
  }
}

function fakeRegister(credentials){
  return {
    ok: true,
    data: null
  }
}


export default {
  //FAKE LOGIN
  userLogin: (credentials)  => {
    return fakeLogin(credentials)
  },
  userRegister: (credentials)  => {
    return fakeRegister(credentials)
  }
}
