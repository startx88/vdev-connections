<template>
  <div class="data-table">
    <table class="table">
      <table-header :keys="keys" />
    </table>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import TableHeader from "./TableHeader";
export default {
  name: "data-table",
  components: {
    TableHeader,
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    itemPerPage: {
      type: Number,
      default: 10,
    },
    hideColumns: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    console.log(props.data);
    const page = ref(1);
    const perPage = ref(props.itemPerPage);
    const totalPage = ref(0);
    const totalLength = ref(0);

    const transformData = computed(() => {
      return (
        props.data &&
        props.data.map((row) => {
          return Object.keys(row)
            .map((key) =>
              props.hideColumns.includes(key) ? false : { [key]: row[key] }
            )
            .reduce((obj, next) => Object.assign(obj, next), {});
        })
      );
    });

    const updated = computed(() => {
      const updatedData = transformData;
      totalPage.value = Math.floor(updatedData.length / perPage.value);
      totalLength.value = updatedData.length;

      // pagination
      const start = (page.value - 1) * perPage.value;
      const end = page.value * perPage.value;

      return updatedData.value.slice(start, end);
    });

    console.log(updated);
    let keys = Object.keys(updated.value[0]);
    // if (updated.value != null) {
    //   keys = Object.keys(updated.value[0]);
    // }

    return {
      keys,
      transformData,
    };
  },
};
</script>

<style>
</style>