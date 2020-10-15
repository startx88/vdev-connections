<template>
  <svg
    :id="name"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    :aria-labelledby="name"
    xml:space="preserve"
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    :style="{ transform: `rotate(${angle})` }"
  >
    <title :id="name" lang="en">{{ name }}</title>
    <g :fill="fill">
      <slot></slot>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    angle: { type: String },
    viewBox: { type: String, default: "0 0 32 32" },
    name: { type: String, default: "" },
    size: { type: [Number, String], default: 14 },
    fill: { type: String, default: "currentColor" },
  },
};
</script>

<style></style>
