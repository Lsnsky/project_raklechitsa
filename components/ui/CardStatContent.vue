<template>
  <div>
    <div class="card__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: ['content'],
};
</script>

<style scoped>
.card__content {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin: 0px 20px 20px;
}

@media screen and (max-width: 1166px) {
  .card__content {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (max-width: 1024px) {
  .card__content {
    margin: 0px 10px 10px;
  }
}
</style>
