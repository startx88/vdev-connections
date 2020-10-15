import { createStore, createLogger } from 'vuex'
import { auth } from './auth';
import { alert } from './alert';
import { category } from './category'

// create store
const store = createStore({
  modules: {
    alert,
    auth,
    category
  },
  state() {
    return {
      count: 0
    }
  },
  plugins: [createLogger()]
});

// export store
export default store;