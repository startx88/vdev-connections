<template>
  <header class="navbar navbar-expand-lg" :class="classes">
    <base-container>
      <app-logo brand-name="Dev Connections" />
      <app-nav />
      <user-navbar-control />
    </base-container>
  </header>
</template>

<script>
import AppLogo from "../components/AppLogo";
import AppNav from "./Navigation";
import { UserNavbarControl } from "../widget";
export default {
  name: "app-header",
  props: { type: String },
  components: {
    AppLogo,
    AppNav,
    UserNavbarControl,
  },
  computed: {
    classes() {
      return this.type === "user" ? "navbar-user" : "navbar-auth";
    },
  },
};
</script>

<style>
</style>