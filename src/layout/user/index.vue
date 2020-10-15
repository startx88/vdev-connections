<template>
  <app-header type="user" />
  <base-container class="mt-5">
    <base-row>
      <base-col :lg="3">
        <user-sidebar />
      </base-col>
      <base-col :lg="9">
        <slot></slot>
      </base-col>
    </base-row>
  </base-container>
  <app-footer />
</template>

<script>
import AppHeader from "../Header";
import AppFooter from "../Footer";
import UserSidebar from "./UserSidebar";
import { onMounted, onUnmounted } from "vue";
let el;
export default {
  name: "user-layout",
  components: {
    AppHeader,
    AppFooter,
    UserSidebar,
  },
  setup() {
    // mounted
    onMounted(() => {
      el = document.querySelector("#app");
      el.classList.add("user-wrap");
    });
    // unmounted
    onUnmounted(() => {
      el.classList.remove("user-wrap");
    });
  },
};
</script>

<style>
</style>