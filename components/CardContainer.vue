<template>
  <div class="cards-container">
    <nuxt-link
      class="cards-container__link"
      v-for="card in this.stories"
      :key="card.id"
      :to="`/stories/${card.id}`"
    >
      <card-story
        :url="`${baseUrl}${card.ImageUrl[0].url}`"
        :history_title="card.author"
        :history_text="card.title"
      ></card-story>
    </nuxt-link>
  </div>
</template>

<script>
import CardStory from '@/components/ui/CardStory';

export default {
  props: {
    stories: { type: Array },
  },
  components: {
    'card-story': CardStory,
  },
  data() {
    return {
      baseUrl: process.env.API_URL,
    };
  },
};
</script>

<style scoped>
.cards-container__link {
  text-decoration: none;
  color: #000;
}
.cards-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(206px, 300px));
  grid-column-gap: 40px;
  grid-row-gap: 60px;
}

@media screen and (max-width: 1050px) {
  .cards-container {
    grid-column-gap: 30px;
    grid-row-gap: 46px;
  }
}

@media screen and (max-width: 1000px) {
  .cards-container {
    grid-template-columns: repeat(3, minmax(200px, 300px));
    grid-column-gap: 20px;
    grid-row-gap: 40px;
  }
}

@media screen and (max-width: 760px) {
  .cards-container {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-row-gap: 30px;
  }
}
@media screen and (max-width: 500px) {
  .cards-container {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
}
</style>
