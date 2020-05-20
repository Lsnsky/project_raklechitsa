<template>
  <section class="cards">
    <div class="cards__title">Статистика по онкозаболеваниям</div>
    <div class="cards__container">
      <div class="card" v-for="card in cardsWithProgressBar" :key="card.id">
        <card-title :title="card.title" />
        <progressbar :value="card.value" :maxValue="card.maxValue" />
        <card-content :content="card.content" />
        <card-source :source="card.source" />
      </div>
      <div class="card" v-for="card in cardsWithComparedInfo" :key="card.id">
        <card-title :title="card.title" />
        <card-diagram
          :valueEmpty="card.valueEmpty"
          :maxValueEmpty="card.maxValueEmpty"
          :valueFill="card.valueFill"
          :maxValueFill="card.maxValueFill"
        />
        <card-content :content="card.content" />
        <card-source :source="card.source" />
      </div>
    </div>
  </section>
</template>

<script>
import CardStatTitle from '@/components/ui/CardStatTitle';
import ProgressBar from '@/components/ui/ProgressBar';
import CardStatContent from '@/components/ui/CardStatContent';
import CardStatSource from '@/components/ui/CardStatSource';
import Diagram from '@/components/ui/Diagram';
export default {
  components: {
    'card-title': CardStatTitle,
    progressbar: ProgressBar,
    'card-content': CardStatContent,
    'card-source': CardStatSource,
    'card-diagram': Diagram,
  },
  computed: {
    cardsWithProgressBar() {
      return this.$store.getters['statisticsData/getStatistics'].slice(0, 2);
    },
    cardsWithComparedInfo() {
      return this.$store.getters['statisticsData/getStatistics'].slice(2);
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1320px;
  margin: 0 auto 100px;
}
.cards__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-left: 0px;
  margin-top: 0px;
  margin-bottom: 70px;
  max-width: 413px;
}
.cards__container {
  display: flex;
  justify-content: space-between;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  height: 300px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
}

@media screen and (max-width: 1280px) {
  .cards {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 1180px;
    margin: 0 auto 100px;
  }
  .cards__title {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 70px;
    max-width: 367px;
  }
  .cards__container {
    display: flex;
    justify-content: space-between;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 265px;
    height: 265px;
    background: #ffffff;
    border: 1px solid #efefef;
    box-sizing: border-box;
  }
}
@media (max-width: 1024px) {
  .cards {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 922px;
    margin: 0 auto 100px;
  }
  .cards__title {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 70px;
    max-width: 367px;
  }
  .cards__container {
    display: flex;
    justify-content: space-between;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 265px;
    height: 265px;
    background: #ffffff;
    border: 1px solid #efefef;
    box-sizing: border-box;
  }
}
</style>
