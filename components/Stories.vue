<template>
  <section class="cards-story">
    <panel class="card-story__panel">
      <div class="card-story__panel-text">
        И В ОТЛИЧИЕ ОТ РАКА,
        <span class="card-story__panel-hashtag">#ЭТОНЕЛЕЧИТСЯ</span>
      </div>
    </panel>
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
    <btnhistory class="cards-story__button" />
  </section>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
import Button_history from '@/components/ui/Button_history';
import Panel from '@/components/ui/Panel';
export default {
  components: {
    'card-story': CardStory,
    btnhistory: Button_history,
    panel: Panel,
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  computed: {
    stories() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          return this.$store.getters['storiesData/getStoriesData'].filter(
            (item, index) => index < 8
          );
        }
        if (window.innerWidth <= 320) {
          return this.$store.getters['storiesData/getStoriesData'].filter(
            (item, index) => index < 6
          );
        }
        if (window.innerWidth <= 768) {
          return this.$store.getters['storiesData/getStoriesData'].filter(
            (item, index) => index < 9
          );
        }
      }
    },
  },
};
</script>

<style scoped>
.cards-story {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 60px 0;
}

.card-story__panel {
  height: 86px;
  display: flex;
  justify-content: center;
}

.card-story__panel-text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
}

.card-story__panel-hashtag {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
}

.cards-story__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  margin: 100px 0 70px;
  width: 100%;
}

.cards-story__container {
  display: grid;
  grid-template-columns: repeat(4, minmax(265px, 300px));
  grid-template-rows: repeat(2, minmax(357px, 392px));
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  justify-content: center;
  grid-auto-flow: dense;
  margin: 0 auto;
}

.cards-story__button {
  margin: 60px auto 0;
  padding: 0;
  height: 78px;
}

@media screen and (max-width: 1280px) {
  .cards-story {
    padding: 0 50px 0;
  }
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(4, minmax(208px, 265px));
    grid-template-rows: repeat(2, minmax(305px, 357px));
    grid-column-gap: 40px;
    grid-row-gap: 60px;
    justify-content: center;
    margin: 0 auto;
  }

  .card-story__panel {
    max-width: 1320px;
    display: flex;
    justify-content: center;
  }
  .card-story__panel-text {
    font-size: 28px;
  }
  .cards-story__title {
    margin: 90px 0 60px;
  }
}
@media screen and (max-width: 1024px) {
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(4, minmax(160px, 208px));
    grid-template-rows: repeat(2, minmax(160px, 305px));
    grid-column-gap: 30px;
    grid-row-gap: 46px;
    justify-content: center;
    margin: 0 auto;
  }
  .cards-story {
    padding: 0 50px;
  }
  .cards-story__title {
    margin: 80px 0 46px;
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }

  .card-story__panel {
    height: 80px;
  }
  .card-story__panel-text {
    font-size: 24px;
    line-height: 40px;
    text-align: center;
  }

  .card-story__panel-hashtag {
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
  }
  .cards-story__button {
    margin: 46px auto 0;
    height: 50px;
  }
}
@media screen and (max-width: 768px) {
  .cards-story {
    padding: 0 40px 0;
  }
  .card-story__panel-text {
    font-size: 22px;
    line-height: 36px;
    max-width: 444px;
  }
  .card-story__panel-hashtag {
    font-weight: bold;
    font-size: 32px;
    line-height: 30px;
  }
  .cards-story__title {
    margin: 80px auto 60px;
    max-width: 380px;
    text-align: center;
  }
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(3, minmax(160px, 1fr));
    grid-template-rows: repeat(3, minmax(160px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    justify-content: center;
    margin: 0 auto;
  }
}

@media screen and (max-width: 525px) {
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(2, minmax(160px, 1fr));
    grid-template-rows: repeat(4, minmax(160px, 1fr));
    grid-row-gap: 30px;
    justify-content: center;
    margin: 0 auto;
  }
}

@media screen and (max-width: 320px) {
  .cards-story {
    padding: 0 15px 0;
  }
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(1, minmax(290px, 1fr));
    grid-template-rows: repeat(6, minmax(290px, 1fr));
    grid-row-gap: 30px;
    justify-content: center;
    margin: 0 auto;
  }
  .card-story__panel-text {
    font-size: 16px;
    line-height: 18px;
    max-width: 220px;
    text-align: center;
  }
  .card-story__panel-hashtag {
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
  }
  .cards-story__title {
    margin: 50px auto 40px;
    max-width: 380px;
    text-align: center;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .cards-story__button {
    margin: 40px auto 0;
  }
}
</style>
