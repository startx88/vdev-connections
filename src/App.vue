<template>
  <base-alert />
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || "auth";
    },
  },
  created() {
    this.$store.dispatch("checkUserIsLoggedIn");
  },
};
</script>

<style lang="scss">
</style>
