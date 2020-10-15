<template>
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted, onUnmounted } from "vue";
let el;
export default {
  name: "auth",
  setup() {
    const store = useStore();
    const router = useRouter();

    // move to routes
    if (store.getters.isAdmin) {
      console.log("admin");
      router.replace("/admin");
    } else if (store.getters.isUser) {
      console.log("user");
      router.replace("/user");
    } else if (store.getters.userVerification) {
      console.log("verification");
      router.replace("/auth/verification");
    }

    // mounted
    onMounted(() => {
      el = document.querySelector("#app");
      el.classList.add("auth");
      el.classList.add("landing-bg");
    });

    // unmounted
    onUnmounted(() => {
      el.classList.remove("auth");
      el.classList.remove("landing-bg");
    });
  },
};
</script>

<style>
</style>