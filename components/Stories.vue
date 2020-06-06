<template>
  <section class="cards-story">
    <container class="cards-story__container">
      <panel class="card-story__panel">
        <div class="card-story__panel-text">
          {{ firstPanelData.title }}
          <span class="card-story__panel-hashtag">
            {{ firstPanelData.hashtag }}
          </span>
        </div>
      </panel>
      <cards class="card-story__main-grid" :stories="this.mainStories" />
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
    await this.$store.dispatch(
      'storiesData/setMainStories',
      this.mainStoriesIds
    );
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
    mainStories() {
      return this.$store.getters['storiesData/getMainStories'];
    },
  },
  data() {
    return {
      mainStoriesIds: [5, 6, 7, 8],
    };
  },
};
</script>

<style scoped>
.card-story__main-grid {
  justify-content: center;
}
.card-story__grid {
  justify-content: center;
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
  margin: 0 0 100px;
}

.card-story__panel-text {
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
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  margin: 70px 0;
  width: 100%;
}

.cards-story__button {
  width: 100%;
  margin: 70px auto 0;
  padding: 0;
  height: 78px;
}

@media screen and (max-width: 1280px) {
  .card-story__panel {
    max-width: 1320px;
    display: flex;
    justify-content: center;
    margin: 0 0 90px;
  }
  .card-story__panel-text {
    font-size: 28px;
  }
  .cards-story__title {
    margin: 60px 0;
  }
  .cards-story__button {
    margin: 60px auto 0;
  }
}
@media screen and (max-width: 1024px) {
  .cards-story__title {
    margin: 46px 0;
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }

  .card-story__panel {
    height: 80px;
    margin: 0 0 80px;
  }
  .card-story__panel-text {
    font-size: 24px;
    line-height: 40px;
  }

  .card-story__panel-hashtag {
    font-size: 32px;
  }
  .cards-story__button {
    margin: 46px auto 0;
    height: 50px;
  }
}
@media screen and (max-width: 1000px) {
  .card-story__main-grid {
    grid-template-columns: repeat(2, minmax(200px, 303px));
    width: calc(100% - 236px);
    margin: 0 118px;
  }
  .cards-story__title {
    margin: 60px auto;
    max-width: 380px;
    text-align: center;
  }
}
@media screen and (max-width: 768px) {
  .card-story__panel-text {
    font-size: 22px;
    line-height: 36px;
    max-width: 444px;
  }
  .card-story__panel-hashtag {
    line-height: 30px;
  }

  .cards-story__button {
    margin: 40px auto 0;
  }
}
@media screen and (max-width: 760px) {
  .card-story__main-grid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    width: 100%;
    margin: 0;
  }
}
@media screen and (max-width: 500px) {
  .card-story__main-grid {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
  .card-story__panel {
    margin: 0 0 50px;
  }
  .card-story__panel-text {
    font-size: 16px;
    line-height: 18px;
    max-width: 220px;
  }
  .card-story__panel-hashtag {
    font-size: 22px;
  }
  .cards-story__title {
    margin: 50px auto;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }
  .cards-story >>> .container {
    padding: 0px 15px;
  }
}
</style>
