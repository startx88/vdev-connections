<template>
  <ul class="breadcrumb">
    <template v-for="route of routes" :key="route">
      <base-nav-item is-menu v-if="route !== activeRoute" :to="'/' + route">
        {{ route }}
      </base-nav-item>
    </template>
    <li class="nav-item">
      <span class="nav-link">{{ activeRoute }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "base-breadcrumbs",
  props: { activeRoute: String },
  computed: {
    routes() {
      const route = this.$route.path.split("/").filter((path) => path !== "");
      return route;
    },
  },
};
</script>

<style>
</style>