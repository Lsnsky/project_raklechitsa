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
</style>
