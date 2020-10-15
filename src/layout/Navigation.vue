<template>
  <nav class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <base-nav-item is-menu href="/user/posts">
        <icon-list />
      </base-nav-item>
      <base-nav-item is-menu href="/user/developers">
        <icon-bell />
      </base-nav-item>
      <base-nav-item is-menu href="/user/notification">
        <icon-users />
      </base-nav-item>
    </ul>
  </nav>
</template>

<script>
import { IconList, IconBell, IconUsers } from "../Icons";
export default {
  name: "app-nav",
  components: {
    IconList,
    IconBell,
    IconUsers,
  },
};
</script>

<style>
</style>