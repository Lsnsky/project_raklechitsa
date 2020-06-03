<template>
  <div class="card-source">>{{ source }}</div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
    },
  },
};
</script>

<style scoped>
.card-source {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  margin: 0px 20px 20px;
  color: #666;
}

@media screen and (max-width: 1024px) {
  .card-source {
    font-size: 10px;
    line-height: 14px;
    margin: 0px 10px 10px;
  }
}
</style>
