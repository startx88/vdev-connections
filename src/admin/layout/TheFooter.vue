<template>
  <footer class="admin-footer">
    <base-container>
      <p>
        &copy; - {{ new Date().getFullYear() }}, Dev-connections, Powered by
        <base-nav-item :href="link" target="blank">Learnui.com</base-nav-item>
      </p>
    </base-container>
  </footer>
</template>

<script>
export default {
  name: "admin-footer",
  data() {
    return {
      link: "https://www.learnui.com",
    };
  },
};
</script>

<style>
</style>