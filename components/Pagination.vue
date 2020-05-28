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
      v-for="index in pages"
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
      buttonsCount: 5,
      pageCount: 0,
      pages: [],
      allPages: [],
    };
  },
  beforeMount() {
    if (process.browser) {
      if (window.innerWidth <= 1000) {
        this.buttonsCount = 4;
      }
      if (window.innerWidth <= 500) {
        this.buttonsCount = 3;
      }
    }
    this.pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    for (let i = 1; i <= this.pageCount; i++) {
      this.allPages.push(i);
    }
    this.pages = this.allPages.slice(0, this.buttonsCount);
    this.active = this.currentPage;
  },
  computed: {
    itemsPerPage() {
      return this.$store.getters['storiesData/getItemsPerPage'];
    },
    totalItems() {
      return this.$store.getters['storiesData/getTotalItems'];
    },
    currentPage() {
      return this.$store.getters['storiesData/getCurrentPage'];
    },
  },
  methods: {
    async setActive(index) {
      await this.$store.commit('storiesData/setPage', index);
      this.$emit('onPageChanged', index);
      this.active = this.currentPage;
    },
    async first() {
      await this.$store.commit('storiesData/setPage', 1);
      this.$emit('onPageChanged', 1);
      this.sliceButtons('first');
      this.active = this.currentPage;
    },
    async last() {
      await this.$store.commit('storiesData/setPage', this.pageCount);
      this.$emit('onPageChanged', this.pageCount);
      this.sliceButtons('last');
      this.active = this.currentPage;
    },
    async scrollRight() {
      console.log(this.active);
      if (this.active < this.pageCount) {
        await this.$store.commit('storiesData/setPage', this.active + 1);
        this.$emit('onPageChanged', this.active);
        this.sliceButtons();
        this.active = this.currentPage;
      }
    },
    async scrollLeft() {
      if (this.active !== 1) {
        await this.$store.commit('storiesData/setPage', this.active - 1);
        this.$emit('onPageChanged', this.active);
        this.sliceButtons();
        this.active = this.currentPage;
      }
    },
    sliceButtons(item) {
      if (this.buttonsCount < this.pageCount) {
        if (item === 'first') {
          this.pages = this.allPages.slice(0, this.buttonsCount);
          return;
        }
        if (item === 'last') {
          this.pages = this.allPages.slice(
            this.pageCount - this.buttonsCount,
            this.allPages.length
          );
          return;
        }
        if (this.buttonsCount === 5) {
          if (this.active > 2 && this.active < this.pageCount - 1) {
            this.pages = this.allPages.slice(this.active - 3, this.active + 2);
          }
          return;
        }
        if (this.buttonsCount === 4) {
          if (this.active > 2 && this.active < this.pageCount) {
            this.pages = this.allPages.slice(this.active - 3, this.active + 1);
          }
          return;
        }
        if (this.buttonsCount === 3) {
          if (this.active > 1 && this.active < this.pageCount) {
            this.pages = this.allPages.slice(this.active - 2, this.active + 1);
          }
          return;
        }
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
  height: 50px;
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
  width: 45px;
  background: center no-repeat url(/images/Polygon11.svg);
}

.pagination__item_left {
  transform: rotate(180deg);
}
.pagination__item_type_page {
  width: 50px;
  background-color: #fbfbfb;
}
.pagination__item:last-child {
  margin-right: 0px;
}
.pagination__item_active,
.pagination__item_type_page:hover {
  background: #f4f4f4;
}

@media screen and (max-width: 1000px) {
  .pagination__item {
    font-size: 15px;
    line-height: 18px;
  }
}
@media screen and (max-width: 500px) {
  .pagination {
    flex-wrap: wrap;
    max-width: 320px;
    margin: 0 auto;
    justify-content: space-between;
  }

  .pagination__item_type_direct {
    order: 999;
  }
}
@media screen and (max-width: 376px) {
  .pagination__item_type_scroll {
    width: 35px;
  }
  .pagination__item_type_page {
    width: 35px;
  }
}
@media screen and (max-width: 320px) {
  .pagination__item_type_scroll {
    width: 45px;
  }
  .pagination__item_type_page {
    width: 50px;
  }
}
</style>
