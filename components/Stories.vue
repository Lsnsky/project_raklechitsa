<template>
  <section class="cards-story">
    <container class="cards-story__container">
      <panel class="card-story__panel">
        <div class="card-story__panel-text">
          {{ firstPanelData.title }}
          <span class="card-story__panel-hashtag">{{
            firstPanelData.hashtag
          }}</span>
        </div>
      </panel>
      <h2 class="cards-story__title">{{ storiesData.title }}</h2>
      <cards class="card-story__grid" :stories="this.stories" />
      <btnhistory class="cards-story__button" />
    </container>
  </section>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
import Button_history from '@/components/ui/Button_history';
import Panel from '@/components/ui/Panel';
import CardContainer from '@/components/CardContainer';
import Container from '@/components/ui/Container';
export default {
  components: {
    'card-story': CardStory,
    btnhistory: Button_history,
    panel: Panel,
    cards: CardContainer,
    container: Container,
  },
  async beforeMount() {
    if (process.browser) {
      if (window.innerWidth > 1000) {
        await this.$store.dispatch('storiesData/setRandomStories', 8);
      }
      if (window.innerWidth <= 1000) {
        await this.$store.dispatch('storiesData/setRandomStories', 9);
        this.count = 9;
      }
      if (window.innerWidth <= 500) {
        await this.$store.dispatch('storiesData/setRandomStories', 6);
        this.count = 6;
      }
    }
  },
  computed: {
    storiesData() {
      return this.$store.getters['blocks/getStoriesBlock'];
    },
    firstPanelData() {
      return this.$store.getters['blocks/getFirstPanelBlock'];
    },
    stories() {
      return this.$store.getters['storiesData/getRandomStories'];
    },
  },
};
</script>

<style scoped>
.card-story__grid {
  justify-self: center;
}
.cards-story {
  display: flex;
}

.cards-story__container {
  display: flex;
  flex-direction: column;
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

.cards-story__button {
  width: 100%;
  margin: 60px auto 0;
  padding: 0;
  height: 78px;
}

@media screen and (max-width: 1280px) {
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
}

@media screen and (max-width: 320px) {
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
