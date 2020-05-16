<template>
  <section class="cards">
    <div class="cards__title">Статистика по онкозаболеваниям</div>
    <div class="cards__container">
      <div class="card">
        <card-title :title="cards[0].title" />
        <progressbar :value="cards[0].value" :maxValue="cards[0].maxValue" />
        <card-content :content="cards[0].content" />
        <card-source :source="cards[0].source" />
      </div>
      <div class="card">
        <card-title :title="cards[1].title" />
        <progressbar :value="cards[1].value" :maxValue="cards[1].maxValue" />
        <card-content :content="cards[1].content" />
        <card-source :source="cards[1].source" />
      </div>
      <div class="card">
        <card-title :title="cards[2].title" />
        <card-diagram
          :valueEmpty="cards[2].valueEmpty"
          :maxValueEmpty="cards[2].maxValueEmpty"
          :valueFill="cards[2].valueFill"
          :maxValueFill="cards[2].maxValueFill"
        />
        <card-content :content="cards[2].content" />
        <card-source :source="cards[2].source" />
      </div>
      <div class="card">
        <card-title :title="cards[3].title" />
        <card-diagram
          :valueEmpty="cards[3].valueEmpty"
          :maxValueEmpty="cards[3].maxValueEmpty"
          :valueFill="cards[3].valueFill"
          :maxValueFill="cards[3].maxValueFill"
        />
        <card-content :content="cards[3].content" />
        <card-source :source="cards[3].source" />
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
  data() {
    return {
      cards: [
        {
          id: '1',
          title:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          image: '/images/__item-6.jpg',
          content: '1 из 3',
          source: 'Левада-Центр 2018',
          value: 1,
          maxValue: 3,
        },
        {
          id: '2',
          title: '2,6% Россиян имеют онкозаболевания.',
          image: '/images/__item-6.jpg',
          content: '3 700 000',
          source: 'Росстат 2018',
          value: 2.6,
          maxValue: 100,
        },
        {
          id: '3',
          title:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          image: '/images/__item-6.jpg',
          content: '↑28%',
          source: 'МНИОИ Герцена 2018',
          valueEmpty: 61.5,
          maxValueEmpty: 100,
          valueFill: 80,
          maxValueFill: 100,
        },
        {
          id: '4',
          title:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          image: '/images/__item-6.jpg',
          content: '↓25%',
          source: 'МНИОИ Герцена 2018',
          valueEmpty: 73,
          maxValueEmpty: 100,
          valueFill: 54.6,
          maxValueFill: 100,
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 1281px) {
  .cards {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 1320px;
    margin: 0 auto 100px;
  }
  .cards__title {
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
  }
  .card {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    height: 300px;
    background: #ffffff;
    border: 1px solid #efefef;
    box-sizing: border-box;
  }
}

@media (max-width: 1280px) {
  .cards {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 1180px;
    margin: 0 auto 100px;
  }
  .cards__title {
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
  }
  .card {
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 922px;
    margin: 0 auto 100px;
  }
  .cards__title {
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
  }
  .card {
    /* border: 1px solid red; */
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
