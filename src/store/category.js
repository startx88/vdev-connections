import api from '@/instance';

export const CATEGORY_LOADING = 'CATEGORY_LOADING';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DELETE = 'CATEGORY_DELETE';
export const CATEGORY_FETCH_ALL = 'CATEGORY_FETCH_ALL';


// category
const category = {
  namespaced: true,
  state() {
    return {
      loading: false,
      categories: []
    }
  },
  getters: {
    loading(state) {
      return state.loading
    },
    categories(state) {
      return state.categories;
    }
  },
  mutations: {
    [CATEGORY_LOADING](state, payload) {
      state.loading = payload
    },
    [CATEGORY_ADD](state, payload) {
      state.loading = payload
    },
    [CATEGORY_UPDATE](state, payload) {
      state.loading = payload
    },
    [CATEGORY_DELETE](state, payload) {
      state.loading = payload
    },
    [CATEGORY_FETCH_ALL](state, payload) {
      state.categories = payload
    }
  },
  actions: {
    async getCategories({ commit, dispatch }) {
      try {
        commit(CATEGORY_LOADING, true)
        const response = await api.get('/category');
        if (response.status === 200) {
          setTimeout(() => commit(CATEGORY_LOADING, false), 2000);
          const { data } = await response.data;
          commit(CATEGORY_FETCH_ALL, data)
        }
      } catch (err) {
        const { message } = err.response.data.errors[0];
        commit(CATEGORY_LOADING, false);
        dispatch('showAlert', {
          message: message,
          type: 'danger'
        });
      }
    },
    async addUpdateCategory({ commit, dispatch }) {
      try {
        console.log('add /update')
      } catch (err) {
        const { message } = err.response.data.errors[0];
        commit(CATEGORY_LOADING, false);
        dispatch('showAlert', {
          message: message,
          type: 'danger'
        });
      }
    },
    async deleteCategory({ commit, dispatch }) {
      try {
        console.log('delete')
      } catch (err) {
        const { message } = err.response.data.errors[0];
        commit(CATEGORY_LOADING, false);
        dispatch('showAlert', {
          message: message,
          type: 'danger'
        });
      }
    },
  }
}


// export
export { category }