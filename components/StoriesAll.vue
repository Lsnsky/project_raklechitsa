<template>
  <div class="cards-history__container">
    <card-story
      v-for="card in stories"
      :key="card.id"
      :url="card.history_photo"
      :history_title="card.history_title"
      :history_text="card.history_text"
    ></card-story>
  </div>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
export default {
  components: {
    'card-story': CardStory,
  },
  computed: {
    stories() {
      return this.$store.getters['storiesData/getStoriesData'];
    },
  },
};
</script>

<style scoped>
.cards-history__container {
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(4, minmax(265px, 300px));
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 40px;
  justify-content: center;
  grid-auto-flow: dense;
  margin: 0 auto;
}
.cards-history {
  /* border: 1px solid red; */
  padding-bottom: 30px;
  width: 1320px;
  margin: 0 auto;
}
.section-title {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.cards-history__section-title {
  /* border: 1px solid red; */
  width: 413px;
  margin-bottom: 70px;
}
</style>
