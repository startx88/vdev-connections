import { AUTH_LOADING, AUTH_VERIFIED, AUTH_LOGOUT, AUTH_REDIRECT_URL, AUTH_SUCCESS } from './constants';
import api from '@/instance';
import router from '../../router';


let timer;

export default {

  // auth redirect
  authRedirect({ commit }, user) {
    if (user.verify && user.role === 'admin') {
      router.replace('/admin');
      commit(AUTH_REDIRECT_URL, '/admin');
    } else if (user.verify && user.role === 'user') {
      router.replace('/user');
      commit(AUTH_REDIRECT_URL, '/user')
    } else {
      router.replace(`/auth/verification`);
      commit(AUTH_REDIRECT_URL, '/auth/verification')
    }
  },

  // logout
  logout({ commit }) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('authExpireTime');
    localStorage.removeItem('userId');
    commit(AUTH_LOGOUT, { user: null, token: null, userId: null, isAuth: false, redirectUrl: '/auth' });
    clearTimeout(timer);
  },

  // auto logout
  async checkAuthTimeout({ dispatch }, time) {
    timer = setTimeout(() => {
      dispatch('logout');
    }, time * 1000)
  },

  // set auth redirect
  setAuthRedirect({ commit }, payload) {
    commit(AUTH_REDIRECT_URL, payload)
  },

  // check is user atuehtnicated or not
  checkUserIsLoggedIn({ commit, dispatch }) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = localStorage.getItem('userId');
    const expireDate = new Date(localStorage.getItem('authExpireTime'));
    if (!token || expireDate < new Date()) {
      dispatch('logout');
    } else {
      if (user.role === 'user') {
        dispatch('setAuthRedirect', '/user')
      }
      if (user.role === 'admin' || user.role === 'superadmin') {
        dispatch('setAuthRedirect', '/admin')
      }
      commit(AUTH_SUCCESS, { data: user, token, userId });
      dispatch('checkAuthTimeout', (expireDate.getTime() - new Date().getTime()) / 1000);
    }
  },

  // user login
  async login({ commit, dispatch }, request) {
    try {
      commit(AUTH_LOADING, true);
      const response = await api.post('/auth', request);
      const { data, token, expireIn } = await response.data;
      const authExpireTime = new Date(new Date().getTime() + expireIn * 1000);
      if (response.status === 200) {
        setTimeout(() => { commit(AUTH_LOADING, false); }, 1000) // set timeout
        commit(AUTH_SUCCESS, { data, token, userId: data._id });
        // set localstorage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', data._id);
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('authExpireTime', authExpireTime);
        dispatch('authRedirect', data);
        dispatch('checkAuthTimeout', expireIn);
      }
    } catch (err) {
      const { message } = err.response.data.errors[0];
      commit(AUTH_LOADING, false);
      dispatch('showAlert', {
        message: message,
        type: 'danger'
      });
    }
  },

  // reset verification mail
  async resendEmail({ commit, dispatch, state }) {
    try {
      console.log(state)
      const response = await api.post(`/auth/resend-verification-email`);
      if (response.status === 200) {
        const { message, data, token } = await response.data;
        commit(AUTH_VERIFIED, { data, token, userId: data._id });
        localStorage.setItem('token', token);
        localStorage.setItem('userId', data._id);
        localStorage.setItem('user', JSON.stringify(data));
        dispatch('showAlert', {
          message: message,
          type: 'success'
        });
      }
    } catch (err) {
      const { message } = err.response.data.errors[0];
      commit(AUTH_LOADING, false);
      dispatch('showAlert', {
        message: message,
        type: 'danger'
      });
    }
  }
}
