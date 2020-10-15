import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default () => {
  const store = useStore();
  const router = useRouter();

  // redirect
  const redirect = computed(() => store.state.auth.redirectUrl)

  if (store.getters.isAuth) {
    router.replace(redirect.value);
  }



}