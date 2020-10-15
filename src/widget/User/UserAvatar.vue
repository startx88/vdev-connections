<template>
  <base-image is-class :src="avatar" />
</template>

<script>
export default {
  name: "user-avatar",
  props: {
    src: String,
  },
  computed: {
    avatar() {
      return typeof this.src !== "undefined"
        ? this.src
        : require("@/assets/avatar.jpg");
    },
  },
};
</script>

<style>
</style>