<template>
  <div v-if="isClass">
    <img :src="src" :alt="alt" />
  </div>
  <img :src="src" :alt="alt" v-else />
</template>

<script>
export default {
  name: "base-image",
  props: {
    src: String,
    alt: String,
    href: String,
    target: String,
    isClass: Boolean,
  },
};
</script>

<style>
</style>