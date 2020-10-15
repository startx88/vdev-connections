<template>
  <button :disabled="disabled" :type="type" :class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    variant: String,
    size: String,
    disabled: Boolean,
  },
  computed: {
    btn() {
      return [
        "btn",
        this.variant && `btn-${this.variant}`,
        this.size && `btn-${this.size}`,
      ];
    },
  },
};
</script>

<style></style>
