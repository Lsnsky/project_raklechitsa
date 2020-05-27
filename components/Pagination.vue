<template>
  <div class="pagination">
    <div
      v-for="index in pageCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        { pagination__item_active: index === active },
      ]"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /*     totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    }, */
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    itemsPerPage() {
      return this.$store.getters['storiesData/getItemsPerPage'];
    },
    totalItems() {
      return this.$store.getters['storiesData/getTotalItems'];
    },
  },
  methods: {
    async setActive(index) {
      this.active = index;
      await this.$store.commit('storiesData/setPage', index);
      this.$emit('onPageChanged', index);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 110px 0 80px;
}
.pagination__item {
  width: 58px;
  height: 58px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #fbfbfb;
  user-select: none;
  justify-content: center;
  margin-left: 10px;
  transition: background 0.3s;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #181818;
}
.pagination__item:last-child {
  margin-right: 0px;
}
.pagination__item_active,
.pagination__item:hover {
  background: #f4f4f4;
}
</style>
