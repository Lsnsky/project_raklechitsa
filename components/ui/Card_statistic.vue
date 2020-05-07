<template>
  <div class="card">
    <div class="card__title">{{ title }}</div>
    <img class="card__image" :src="url" />
    <div class="card__content">{{ content }}</div>
    <div class="card__source">{{ source }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'url', 'content', 'source'],
};
</script>

<style scoped>
.card {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
}
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
.card__image {
  /* border: 1px solid red; */
  width: 260px;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
}
.card__content {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  /* identical to box height, or 105% */
  text-align: right;
  margin: 0px 20px 20px;
}
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
</style>
