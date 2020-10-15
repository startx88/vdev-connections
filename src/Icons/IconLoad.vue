<template>
  <div :class="{ spinner: true, fixed: isFixed }">
    <base-svg
      :size="size"
      :style="{
        width: size,
        height: size,
        animationDuration: speed,
        animationIterationCount: iteration,
      }"
      :viewBox="viewBox"
    >
      <circle v-bind="circleProps" />
    </base-svg>
  </div>
</template>

<script>
export default {
  name: "icon-loading",
  props: {
    isFixed: { type: Boolean, default: false },
    size: { type: Number, default: 40 },
    viewBox: { type: String, default: "0 0 40 40" },
    cx: { type: Number, default: 20 },
    cy: { type: Number, default: 20 },
    r: { type: Number, default: 15 },
    color: { type: String, default: "red" },
    strokWidth: { type: Number, default: 5 },
    strokeDasharray: { type: Number, default: 5 },
    speed: { type: String, default: "1s" },
    iteration: { type: String, default: "infinite" },
  },
  computed: {
    circleProps() {
      return {
        cx: this.cx,
        cy: this.cy,
        r: this.r,
        style: {
          stroke: this.color,
          strokeWidth: this.strokWidth,
          strokeDasharray: this.strokeDasharray,
          animationDuration: this.speed,
          animationIterationCount: this.iteration,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
  @-webkit-keyframes #{$name} {
    @content;
  }
  @-moz-keyframes #{$name} {
    @content;
  }
  @-ms-keyframes #{$name} {
    @content;
  }
}

.spinner {
  span {
    font-size: 14px;
    letter-spacing: 1pt;
    display: block;

    color: #03a9f4;
  }
  svg {
    animation-name: svgSpin;
  }
  circle {
    fill: transparent;
    stroke: #03a9f4;
    animation-name: spin;
  }

  @include keyframes(spin) {
    0% {
      stroke-dashoffset: 100;
    }
    100% {
      stroke-dashoffset: 100;
    }
  }

  @include keyframes(svgSpin) {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &.fixed {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>