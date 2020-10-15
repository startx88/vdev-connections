<template>
  <div
    class="navbar-user-control dropdown"
    :class="{ show: isOpen }"
    @click="toggler"
  >
    <base-loading v-if="loading" />
    <template v-else>
      <user-avatar class="avatar sm mr" />
      <user-name :name="userShortname" />
    </template>

    <div
      class="dropdown-menu"
      :class="{ show: isOpen }"
      aria-labelledby="dropdownMenuButton"
    >
      <base-nav-item
        class="dropdown-item"
        :href="'/' + activeRoute + '/profile'"
        >Profile</base-nav-item
      >
      <base-nav-item
        class="dropdown-item"
        :href="'/' + activeRoute + '/reset-password'"
        >Reset Password</base-nav-item
      >
      <base-nav-item @click="logout" class="dropdown-item" href="#"
        >Logout</base-nav-item
      >
    </div>
  </div>
</template>

<script>
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import Toggle from "@/common/toggle";
import userInfo from "@/common/userInfo";

export default {
  name: "user-navbar-control",
  components: {
    UserAvatar,
    UserName,
  },
  setup() {
    const { isOpen, toggler } = Toggle();
    const { userShortname, logout, activeRoute, loading } = userInfo();

    return {
      isOpen,
      toggler,
      logout,
      activeRoute,
      userShortname,
      loading,
    };
  },
};
</script>

<style>
</style>