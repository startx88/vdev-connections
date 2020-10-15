<template>
  <div
    v-if="alert.show"
    :class="{
      alert: true,
      [`alert-${alert.type}`]: alert.type,
    }"
  >
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="closeAlert"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    {{ alert.message }}
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "base-alert",
  props: {
    left: String,
    right: String,
    top: String,
    bottom: String,
    timeout: Number,
    distance: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  setup() {
    const store = useStore();

    const alert = computed(() => store.state.alert);
    // close alert
    function closeAlert() {
      store.dispatch("hideAlert");
    }

    return {
      alert,
      closeAlert,
    };
  },
};
</script>

<style>
</style>