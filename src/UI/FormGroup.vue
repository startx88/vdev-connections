<template>
  <div :class="classes">
    <label v-if="label">{{ label }}</label>hi {{isError}}
    <slot></slot>
    <div v-if="isError" class="errors">
      <span v-for="(error, index) of errors" :key="index">
        {{ error.$message }}
      </span>
    </div>
    {{classes}}
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    isError: Boolean,
    errors: Array,
  },
  computed:{
    classes(){
      console.log('hi', this.isError)
      return {
        'form-group':true,
        'error':this.isError
      }
    }
  }
};
</script>

<style></style>
