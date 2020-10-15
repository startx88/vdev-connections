<template>
  <div :class="{ 'form-group': true, error: isError, 'text-center': isCenter }">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <div v-if="isError" class="errors">
      <span v-for="(error, index) of errors" :key="index">
        <template v-if="error.$validator === 'required'">
          {{ error.$property }} is required
        </template>
        <template v-else-if="error.$validator === 'email'">
          {{ error.$property }} is not valid email id
        </template>
        <template v-else-if="error.$validator === 'matchPassword'">
          {{ error.$property }} must be one uppercase, one lowercase, one digit.
          and one symbol.
        </template>
        <template v-else-if="error.$validator === 'matchMobile'">
          {{ error.$property }} must be valid mobile. and one symbol.
        </template>
        <template v-else-if="error.$validator === 'sameAsPassword'">
          {{ error.$property }} must be equal to password.
        </template>
        <template v-else>
          {{ error.$message }}
        </template>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    isError: Boolean,
    errors: Array,
    isCenter: Boolean,
  },
};
</script>

<style></style>
