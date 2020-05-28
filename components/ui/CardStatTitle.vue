<template>
  <div class="card__title">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.card__title {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  margin: 20px 20px 0px;
}

@media screen and (max-width: 1024px) {
  .card__title {
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
