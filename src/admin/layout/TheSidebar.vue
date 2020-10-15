<template>
  <aside class="sidebar sidebar-admin">
    <user-sidebar-control />
    <hr class="sidebar-divider" />

    <ul class="menu">
      <base-nav-item
        is-menu
        :href="'/admin' + menu.path"
        v-for="menu of menus"
        :key="menu.name"
      >
        <hr v-if="menu.path === '/settings'" />
        <component :is="menu.icon" />
        {{ menu.name }}</base-nav-item
      >
    </ul>

    <div class="sidebar-bottom">
      <p>
        Dev connections
        <small>Version: 0.0.1</small>
        <small>Powered by startx.com</small>
        <time>{{ new Date().toISOString() }}</time>
      </p>
    </div>
  </aside>
</template>

<script>
import { ref } from "vue";
import { UserSidebarControl } from "../../widget";
import { SIDEBAR_MENU } from "./menu";
import { IconTh, IconLongArrow, IconGear } from "../../Icons";
export default {
  components: {
    UserSidebarControl,
    IconTh,
    IconLongArrow,
    IconGear,
  },
  setup() {
    const menus = ref(SIDEBAR_MENU);
    return {
      menus,
    };
  },
};
</script>

<style>
</style>