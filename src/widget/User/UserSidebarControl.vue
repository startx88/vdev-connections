<template>
  <div class="sidebar-user-info text-center">
    <base-loading v-if="loading" />
    <template v-else>
      <base-nav-item :href="'/' + activeRoute + '/profile'">
        <user-avatar :src="src" class="avatar lg avatar-sidebar" />
      </base-nav-item>
      <div class="detail mt-4">
        <h6>
          {{ userFullname }}
          <small>{{ designation }}</small>
        </h6>
        <span><icon-mobile :size="14" />{{ user.mobile }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import UserAvatar from "./UserAvatar";
import { IconMobile } from "../../Icons";
import userInfo from "../../common/userInfo";

export default {
  name: "user-sidebar",
  props: {
    fullName: String,
    mobile: String,
    src: String,
    status: String,
  },
  components: {
    UserAvatar,
    IconMobile,
  },
  setup() {
    const { loading, user, userFullname, logout, activeRoute } = userInfo();
    const designation = "Senior Developer";
    return {
      loading,
      designation,
      user,
      userFullname,
      logout,
      activeRoute,
    };
  },
};
</script>

<style>
</style>