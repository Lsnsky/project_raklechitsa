<template>
  <div class="cards">
    <div class="cards__title">Статистика по онкозаболеваниям</div>
    <div class="cards__container">
      <card />
      <card />
      <card />
      <card />
    </div>
  </div>
</template>

<script>
import Card_statistic from '@/components/ui/Card_statistic';
export default {
  components: {
    card: Card_statistic,
  },
};
</script>

<style scoped>
.cards {
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1320px;
  margin: 0 auto 100px;
}
.cards__title {
  border: 1px solid red;
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
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
}
</style>
