<template>
  <div :class="full">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isFull: {
      type: Boolean,
    },
  },
  computed: {
    full() {
      return this.isFull ? "container-fluid" : "container";
    },
  },
};
</script>

<style>
</style>
