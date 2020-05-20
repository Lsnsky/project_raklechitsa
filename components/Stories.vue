<template>
  <section class="cards-story">
    <panel class="card-story__panel">
      <div class="card-story__panel_text">
        И В ОТЛИЧИЕ ОТ РАКА,
        <span class="card-story__panel_hashtag">#ЭТОНЕЛЕЧИТСЯ</span>
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
      return this.$store.getters['storiesData/getStoriesData'].filter(
        (item, index) => index < 8
      );
    },
  },
};
</script>

<style scoped>
.cards-story__button {
  margin: 60px auto 0;
  padding: 0;
  height: 78px;
}

.cards-story {
  /* border: 1px solid red; */
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px 0;
}

.card-story__panel {
  /* border: 1px solid red; */
  width: 100%;
  height: 86px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
}
.card-story__panel_text {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
  margin-right: 10px;
}

.card-story__panel_hashtag {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
}

.cards-story__title {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  margin: 100px 0 70px;
}

.cards-story__container {
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  grid-template-rows: repeat(2, minmax(300px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  justify-content: center;
  grid-auto-flow: dense;
  margin: 0 auto;
}
@media screen and (max-width: 1280px) {
  .cards-story {
    padding: 0 50px 0;
  }
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(4, minmax(265px, 1fr));
    grid-template-rows: repeat(2, minmax(265px, 1fr));
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
  .card-story__panel_text {
    font-size: 28px;
  }
  .cards-story__title {
    margin: 90px 0 60px;
  }
}
@media screen and (max-width: 1024px) {
  .cards-story__container {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: repeat(4, minmax(208px, 1fr));
    grid-template-rows: repeat(2, minmax(208px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 46px;
    justify-content: center;
    margin: 0 auto;
  }
  .cards-story {
    /* border: 1px solid red; */
    padding-bottom: 30px;
    max-width: 924px;
    margin: 0 auto;
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
  .card-story__panel_text {
    font-size: 24px;
    line-height: 40px;
    text-align: center;
  }

  .card-story__panel_hashtag {
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
  }
  .cards-story__button {
    margin: 46px auto 0;
    height: 50px;
  }
}
@media (max-width: 768px) {
  .cards-story__container {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: repeat(3, minmax(208px, 1fr));
    grid-template-rows: repeat(3, minmax(208px, 1fr));
    grid-gap: 30px;
    justify-content: center;
    grid-auto-flow: dense;
    margin: 0 auto;
  }
  .cards-story {
    /* border: 1px solid red; */
    padding-bottom: 30px;
    max-width: 924px;
    margin: 0 auto;
  }
  .section-title {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
  }
  .cards-story__section-title {
    /* border: 1px solid red; */
    width: 413px;
    margin-bottom: 70px;
  }
  .card-story__panel {
    /* border: 1px solid red; */
    max-width: 1320px;
    height: 129px;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
  }
  .card-story__panel_text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
    margin-right: 10px;
  }

  .card-story__panel_hashtag {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }
}
</style>
