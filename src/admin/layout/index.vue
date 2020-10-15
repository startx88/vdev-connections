<template>
  <the-header />
  <the-sidebar />
  <main class="admin-content-wrap">
    <div class="admin-content">
      <base-title
        :level="3"
        :tagline="'Welcome to the ' + activeRoute"
        class="admin-title"
      >
      </base-title>
      <hr />
      <slot></slot>
    </div>
    <the-footer />
  </main>
</template>

<script>
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";
import TheSidebar from "./TheSidebar";
export default {
  name: "admin-layout",
  components: {
    TheHeader,
    TheFooter,
    TheSidebar,
  },
  computed: {
    activeRoute() {
      const route = this.$route.fullPath.split("/");
      const path = route[route.length - 1];
      return path;
    },
  },
};
</script>

<style>
</style>