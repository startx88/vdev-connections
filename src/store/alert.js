
export const ALERT_HIDE = "ALERT_HIDE";
export const ALERT_SHOW = "ALERT_SHOW";

// alert
const alert = {
  state() {
    return {
      type: 'success',
      show: false,
      message: 'Hello World!'
    }
  },
  mutations: {
    [ALERT_HIDE](state) {
      state.show = false;
      state.message = '';
      state.type = 'success';
    },
    [ALERT_SHOW](state, payload) {
      state.show = true;
      state.message = payload.message;
      state.type = payload.type;
    }
  },
  actions: {
    hideAlert({ commit }) {
      commit(ALERT_HIDE);
    },
    showAlert({ commit }, alertInfo) {
      commit(ALERT_SHOW, { type: alertInfo.type, message: alertInfo.message });
      setTimeout(() => {
        commit(ALERT_HIDE)
      }, 10000)
    }
  }
}

// export alert
export { alert };