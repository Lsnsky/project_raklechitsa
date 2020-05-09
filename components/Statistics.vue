<template>
  <section class="cards">
    <div class="cards__title">Статистика по онкозаболеваниям</div>
    <div class="cards__container">
      <card
        :title="cards[0].title"
        :content="cards[0].content"
        :source="cards[0].source"
        :value="cards[0].v"
        :maxValue="cards[0].m"
      />
      <card
        :title="cards[1].title"
        :content="cards[1].content"
        :source="cards[1].source"
        :value="cards[1].v"
        :maxValue="cards[1].m"
      />
      <card
        :title="cards[2].title"
        :content="cards[2].content"
        :source="cards[2].source"
        :value="cards[2].v"
        :maxValue="cards[2].m"
      />
      <card
        :title="cards[3].title"
        :content="cards[3].content"
        :source="cards[3].source"
        :value="cards[3].v"
        :maxValue="cards[3].m"
      />
    </div>
  </section>
</template>

<script>
import Card_statistic from '@/components/ui/Card_statistic';
export default {
  components: {
    card: Card_statistic,
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
          v: 1,
          m: 3,
        },
        {
          id: '2',
          title: '2,6% Россиян имеют онкозаболевания.',
          image: '/images/__item-6.jpg',
          content: '3 700 000',
          source: 'Росстат 2018',
          v: 2.6,
          m: 100,
        },
        {
          id: '3',
          title:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          image: '/images/__item-6.jpg',
          content: '↑28%',
          source: 'МНИОИ Герцена 2018',
          v: 1,
          m: 3,
        },
        {
          id: '4',
          title:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          image: '/images/__item-6.jpg',
          content: '↓25%',
          source: 'МНИОИ Герцена 2018',
          v: 1,
          m: 3,
        },
      ],
    };
  },
};
</script>

<style scoped>
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
</style>
