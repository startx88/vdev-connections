import { AUTH_FAILED, AUTH_VERIFIED, AUTH_LOADING, AUTH_LOGOUT, AUTH_REDIRECT_URL, AUTH_SUCCESS } from './constants'

export default {
  [AUTH_LOADING](state, payload) {
    state.loading = payload;
  },
  [AUTH_FAILED](state, payload) {
    state.loading = payload
  },

  [AUTH_SUCCESS || AUTH_VERIFIED](state, payload) {
    state.user = payload.data;
    state.token = payload.token;
    state.userId = payload.userId;
    state.isAuth = !!payload.token;
  },
  [AUTH_REDIRECT_URL](state, payload) {
    state.redirectUrl = payload;
  },
  [AUTH_LOGOUT](state, info) {
    state.user = info.user;
    state.token = info.token;
    state.userId = info.userId;
    state.isAuth = info.isAuth;
    state.redirectUrl = info.redirectUrl;
  }
}