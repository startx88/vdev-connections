<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
  },
  setup(props) {
    const classes = computed(() =>
      [
        props.xs && "col-xs-" + props.xs,
        props.sm && "col-sm-" + props.sm,
        props.md && "col-md-" + props.md,
        props.lg && "col-lg-" + props.lg,
        props.xl && "col-xl-" + props.xl,
      ]
        .filter((item) => item)
        .join(" ")
    );
    return { classes };
  },
};
</script>

<style></style>
