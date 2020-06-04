<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  max-width: 260px;
  width: 100%;
  height: 40px;
  background: #f4f4f4;
  margin: auto;
  margin-bottom: 20px;
}
.progress-bar__fill {
  height: 100%;
  background: #613a93;
}

@media screen and(max-width: 1280px) {
  .progress-bar {
    max-width: 229px;
    height: 36px;
  }
}
@media screen and (max-width: 1166px) {
  .progress-bar {
    max-width: 188px;
    height: 28px;
  }
}
@media screen and(max-width: 1024px) {
  .progress-bar {
    margin-bottom: 10px;
  }
}
</style>
