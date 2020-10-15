<template>
  <base-nav-item class="user-name" href="#"> {{ name }} </base-nav-item>
</template>

<script>
export default {
  name: "user-name-control",
  props: {
    name: String,
  },
};
</script>

<style>
</style>