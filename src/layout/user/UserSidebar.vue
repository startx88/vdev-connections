<template>
  <aside class="sidebar sidebar-user">
    <user-sidebar-control />
    <div class="sidebar-social">
      <base-nav-item href="/">
        <icon-calendar />
      </base-nav-item>
      <base-nav-item href="/">
        <icon-envelope />
      </base-nav-item>
      <base-nav-item href="/">
        <icon-comment />
      </base-nav-item>
      <base-nav-item href="/">
        <icon-power-off />
      </base-nav-item>
    </div>
    <hr class="sidebar-divider" />
    <ul class="menu">
      <base-nav-item is-menu href="/user"
        ><icon-th />
        Dashboard
      </base-nav-item>
      <base-nav-item is-menu href="/user/posts"
        ><icon-long-arrow /> Posts
      </base-nav-item>
      <base-nav-item is-menu href="/user/projects"
        ><icon-long-arrow /> Projects
      </base-nav-item>
      <base-nav-item is-menu href="/user/profile"
        ><icon-long-arrow /> Profile
      </base-nav-item>
      <hr class="sidebar-divider" />
      <base-nav-item is-menu href="/user/settings"
        ><icon-gear /> Settings
      </base-nav-item>
    </ul>
    <div class="sidebar-bottom">
      <p>
        &copy; {{ new Date().getFullYear() }}
        <strong> - Dev Connections</strong>
      </p>
    </div>
  </aside>
</template>

<script>
import { UserSidebarControl } from "@/widget";
import {
  IconLongArrow,
  IconTh,
  IconGear,
  IconCalendar,
  IconComment,
  IconEnvelope,
  IconPowerOff,
} from "../../Icons";
export default {
  name: "user-sidebar",
  components: {
    UserSidebarControl,
    IconLongArrow,
    IconTh,
    IconGear,
    IconCalendar,
    IconComment,
    IconEnvelope,
    IconPowerOff,
  },
};
</script>

<style>
</style>