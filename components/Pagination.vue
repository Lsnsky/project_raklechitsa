<template>
  <div class="pagination">
    <button
      @click="first"
      :class="[
        'pagination__item',
        'pagination__item_type_direct',
        { pagination__item_inactive: this.active === 1 },
      ]"
    >
      Первая
    </button>
    <button
      @click="scrollLeft"
      class="pagination__item pagination__item_type_scroll pagination__item_left"
    ></button>
    <button
      v-for="index in pageCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item pagination__item_type_page',
        { pagination__item_active: index === active },
      ]"
    >
      {{ index }}
    </button>
    <button
      @click="scrollRight"
      class="pagination__item pagination__item_type_scroll"
    ></button>
    <button
      @click="last"
      :class="[
        'pagination__item',
        'pagination__item_type_direct',
        { pagination__item_inactive: this.active === this.pageCount },
      ]"
    >
      Последняя
    </button>
  </div>
</template>

<script>
export default {
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
    async first() {
      this.active = 1;
      await this.$store.commit('storiesData/setPage', 1);
      this.$emit('onPageChanged', 1);
    },
    async last() {
      this.active = this.pageCount;
      await this.$store.commit('storiesData/setPage', this.pageCount);
      this.$emit('onPageChanged', this.pageCount);
    },
    async scrollRight() {
      if (this.active < this.pageCount) {
        this.active = this.active + 1;
        await this.$store.commit('storiesData/setPage', this.active);
        this.$emit('onPageChanged', this.active);
      }
    },
    async scrollLeft() {
      if (this.active !== 1) {
        this.active = this.active - 1;
        await this.$store.commit('storiesData/setPage', this.active);
        this.$emit('onPageChanged', this.active);
      }
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
  cursor: pointer;
  outline: none;
  height: 58px;
  margin-left: 10px;
  transition: background 0.3s;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
  border: none;
}
.pagination__item_type_direct {
  background-color: #fff;
}
.pagination__item_inactive {
  color: #a2a2a2;
  cursor: not-allowed;
}
.pagination__item_type_scroll {
  width: 58px;
  background: center no-repeat url(/images/Polygon11.svg);
}

.pagination__item_left {
  transform: rotate(180deg);
}
.pagination__item_type_page {
  width: 58px;
  background-color: #fbfbfb;
}
.pagination__item:last-child {
  margin-right: 0px;
}
.pagination__item_active,
.pagination__item_type_page:hover {
  background: #f4f4f4;
}
</style>
