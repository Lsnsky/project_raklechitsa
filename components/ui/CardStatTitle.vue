<template>
  <div>
    <div class="card__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
@media (min-width: 1025px) {
  .card__title {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    margin: 20px 20px 0px;
  }
}
@media (max-width: 1024px) {
  .card__title {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
    margin: 20px 20px 0px;
  }
}
</style>
