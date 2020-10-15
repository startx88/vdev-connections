<template>
  <thead>
    <tr>
      <td v-for="key of keys" :key="key">
        {{ key }}
      </td>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "table-header",
  props: {
    keys: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style>
</style>