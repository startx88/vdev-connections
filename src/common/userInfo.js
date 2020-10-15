import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex"

export default () => {
  const store = useStore();
  const route = useRoute();

  // logout
  function logout() {
    store.dispatch('logout');
  }


  //load
  const load = computed(() => store.getters.userInfoLoading);

  return {
    user: store.getters.user,
    userId: store.getters.userId,
    userShortname: store.getters.userShortName,
    userFullname: store.getters.userFullname,
    activeRoute: route.meta.layout,
    loading: load,
    logout
  }
}