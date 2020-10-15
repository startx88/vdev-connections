<template>
  <header class="navbar navbar-admin">
    <app-logo href="/admin" />
    <div class="navbar-right">
      <user-navbar-control />
    </div>
  </header>
</template>

<script>
import AppLogo from "../../components/AppLogo";
import { UserNavbarControl } from "../../widget";
export default {
  name: "admin-header",
  components: {
    AppLogo,
    UserNavbarControl,
  },
};
</script>

<style>
</style>