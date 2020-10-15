<template>
  <input
    v-if="!isCheck"
    v-bind="$attrs"
    :class="classes"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="onTouch"
  />
  <div class="checkbox" v-if="isCheck">
    <label>
      <input
        type="checkbox"
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="onTouch"
      />

      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: String,
    type: { type: String, default: "text" },
    isCheck: { type: Boolean, default: false },
    isError: { type: Boolean, default: false },
    isValid: { type: Boolean, default: false },
    password: { type: Object },
  },
  emits: ["update:modelValue", "blur"],
  computed: {
    classes() {
      return {
        "form-control": true,
        "is-invalid": this.isError,
        "is-valid": this.isValid,
      };
    },
  },
  methods: {
    onTouch() {
      this.$emit("blur", true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
