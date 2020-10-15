<template>
  <base-panel class="panel-white">
    <base-loading v-if="loading" />
    <data-table
      v-else
      :data="response"
      :item-per-page="10"
      :hide-columns="['_id']"
    />
  </base-panel>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { DataTable } from "../../widget";
export default {
  name: "admin-category",
  components: {
    DataTable,
  },
  setup() {
    const store = useStore();
    const loading = computed(() => store.getters["category/loading"]);
    const response = computed(() => store.getters["category/categories"]);

    onMounted(() => {
      store.dispatch("category/getCategories");
    });

    console.log(store.state.category.loading);
    return {
      loading,
      response,
    };
  },
};
</script>

<style>
</style>