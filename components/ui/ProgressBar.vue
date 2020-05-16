<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: ['value', 'maxValue'],
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
@media (min-width: 1281px) {
  .progress-bar {
    /* border: 1px solid red; */
    width: 260px;
    height: 40px;
    background: #f4f4f4;
    margin: auto;
    margin-bottom: 20px;
  }
  .progress-bar__fill {
    /* border: 1px solid red; */
    height: 100%;
    background: #613a93;
  }
}
@media (max-width: 1280px) {
  .progress-bar {
    /* border: 1px solid red; */
    width: 229px;
    height: 36px;
    background: #f4f4f4;
    margin: auto;
    margin-bottom: 20px;
  }
  .progress-bar__fill {
    /* border: 1px solid red; */
    height: 100%;
    background: #613a93;
  }
}
@media (max-width: 1024px) {
  .progress-bar {
    /* border: 1px solid red; */
    width: 188px;
    height: 28px;
    background: #f4f4f4;
    margin: auto;
    margin-bottom: 20px;
  }
  .progress-bar__fill {
    /* border: 1px solid red; */
    height: 100%;
    background: #613a93;
  }
}
</style>
