<template>
  <div>
    <div class="card__source">{{ source }}</div>
  </div>
</template>

<script>
export default {
  props: ['source'],
};
</script>

<style scoped>
@media (min-width: 1025px) {
  .card__source {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */
    text-align: right;
    color: #666666;
    margin: 0px 20px 20px;
  }
}
@media (max-width: 1280px) {
  .card__source {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height, or 133% */
    text-align: right;
    color: #666666;
    margin: 0px 20px 20px;
  }
}
</style>
