<template>
  <li class="nav-item" v-if="isMenu">
    <router-link :to="href" class="nav-link" v-bind="$attrs">
      <slot></slot>
    </router-link>
  </li>
  <router-link v-else :to="href" v-bind="$attrs">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    isMenu: Boolean,
    href: String,
  },
};
</script>

<style>
</style>