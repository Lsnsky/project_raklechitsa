<template>
  <section class="cards-story">
    <div class="cards-story__search-panel"></div>
    <h2 class="cards-story__title">Истории неизлечимых привычек</h2>
    <div class="cards-story__container">
      <card-story
        v-for="card in stories"
        :key="card.id"
        :url="card.history_photo"
        :history_title="card.history_title"
        :history_text="card.history_text"
        @cardClick="goToDetail(card.id)"
      ></card-story>
    </div>
  </section>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
import Button from '@/components/ui/Button';
import input from '@/components/ui/input';
export default {
  components: {
    'card-story': CardStory,
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  computed: {
    stories() {
      return this.$store.getters['storiesData/getStoriesData'];
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
  margin-top: 100px;
  max-width: 413px;
  margin-bottom: 70px;
}
</style>
