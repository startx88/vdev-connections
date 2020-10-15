import actions from './actions'
import getters from './getters'
import mutations from './mutiations'

// auth
const auth = {
  state() {
    return {
      user: null,
      token: null,
      userId: null,
      isAuth: false,
      loading: false,
      redirectUrl: ''
    }
  },
  mutations,
  actions,
  getters
}


// export  
export { auth };