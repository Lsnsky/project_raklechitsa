<template>
  <div class="card">
    <div class="card__title">{{ title }}</div>
    <div class="progress-bar">
      <div class="progress-bar__fill" :style="style"></div>
    </div>
    <div class="card__content">{{ content }}</div>
    <div class="card__source">{{ source }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'source', 'value', 'maxValue'],
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  /* border: 1px solid red; */
  position: relative;
  width: 260px;
  height: 40px;
  background: #f4f4f4;
  margin: auto;
  margin-bottom: 20px;
}
.progress-bar__fill {
  /* border: 1px solid red; */
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #613a93;
}

.card {
  border: 1px solid red;
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
  border: 1px solid red;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  margin: 20px 20px 0px;
}
/* .card__image {
  border: 1px solid red;
  width: 260px;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
} */
.card__content {
  border: 1px solid red;
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
  border: 1px solid red;
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
