<template>
  <section class="cards-story">
    <h2 class="cards-story__title">Истории неизлечимых привычек</h2>
    <div class="cards-story__search">
      <input-search class="cards-story__search-input" :bordered="true" />
      <button-search
        :color="'purple'"
        :disabled="false"
        class="cards-story__search-button"
        >Поиск</button-search
      >
    </div>
    <div class="cards-story__container">
      <card-story
        v-for="card in storiesToRender"
        :key="card.id"
        :url="card.history_photo"
        :history_title="card.history_title"
        :history_text="card.history_text"
        @cardClick="goToDetail(card.id)"
      ></card-story>
    </div>
    <pagination
      :totalItems="this.$store.state.storiesData.stories.length"
      :itemsPerPage="itemsPerPage"
      @onPageChanged="changeStartIndex"
    />
  </section>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
import Button from '@/components/ui/Button';
import mainInput from '@/components/ui/mainInput';
import Pagination from '@/components/Pagination';
export default {
  components: {
    'card-story': CardStory,
    'input-search': mainInput,
    'button-search': Button,
    pagination: Pagination,
  },
  data() {
    return {
      storiesName: '',
      itemsPerPage: 16,
      startIndex: 0,
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
  },
  computed: {
    storiesToRender() {
      const { storiesData } = this.$store.state;
      return storiesData.stories.filter(
        (item, idx) =>
          idx >= this.startIndex &&
          idx <= this.startIndex + this.itemsPerPage - 1
      );
    },
  },
};
</script>

<style scoped>
.cards-story {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1320px;
  margin: auto;
}
.cards-story__container {
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(4, minmax(265px, 300px));
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 60px;
  justify-content: center;
  grid-auto-flow: dense;
  margin: 0 auto;
}

.cards-story__title {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 100px 0 auto 0;
  max-width: 413px;
}
.cards-story__search {
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 60px auto 70px;
  width: 100%;
}
.cards-story__search-input {
  /* border: 1px solid red; */
  /* background: #e5e5e5; */
  width: calc(100% - 228px);
  padding: 0;
  margin: 0 20px 0 0;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  overflow: hidden;
}
.cards-story__search-button {
  /* border: 1px solid red; */
  width: 208px;
  height: 46px;
}
</style>
