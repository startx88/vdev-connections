<template>
  <base-nav-item class="navbar-brand" :to="href">
    <base-image :src="require('@/assets/logo.png')" alt="image" />
    {{ brandName }}
  </base-nav-item>
</template>

<script>
export default {
  name: "app-logo",
  props: {
    href: {
      type: String,
      default: "/",
    },
    brandName: {
      type: String,
      default: "DC",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>