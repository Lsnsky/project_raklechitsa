<template>
  <div class="diagram">
    <div class="diagram__empty" :style="styleEmpty"></div>
    <div class="diagram__fill" :style="styleFill"></div>
  </div>
</template>

<script>
export default {
  props: ['valueEmpty', 'maxValueEmpty', 'valueFill', 'maxValueFill'],
  computed: {
    styleEmpty() {
      return `width: ${(this.valueEmpty / this.maxValueEmpty) * 100}%;`;
    },
    styleFill() {
      return `width: ${(this.valueFill / this.maxValueFill) * 100}%;`;
    },
  },
};
</script>

<style scoped>
@media (min-width: 1281px) {
  .diagram {
    /* border: 1px solid red; */
    width: 260px;
    height: 40px;
    margin: auto;
    margin-bottom: 20px;
  }
  .diagram__empty {
    /* border: 1px solid red; */
    width: 260px;
    height: 20px;
    background: #f4f4f4;
    margin: auto;
    margin-left: 0px;
  }
  .diagram__fill {
    /* border: 1px solid red; */
    width: 260px;
    height: 20px;
    background: #613a93;
    margin-left: 0px;
  }
}
@media (max-width: 1280px) {
  .diagram {
    /* border: 1px solid red; */
    width: 229px;
    height: 36px;
    margin: auto;
    margin-bottom: 20px;
  }
  .diagram__empty {
    /* border: 1px solid red; */
    width: 229px;
    height: 18px;
    background: #f4f4f4;
    margin: auto;
    margin-left: 0px;
  }
  .diagram__fill {
    /* border: 1px solid red; */
    width: 229px;
    height: 18px;
    background: #613a93;
    margin-left: 0px;
  }
}
@media (max-width: 1024px) {
  .diagram {
    /* border: 1px solid red; */
    width: 188px;
    height: 28px;
    margin: auto;
    margin-bottom: 20px;
  }
  .diagram__empty {
    /* border: 1px solid red; */
    width: 188px;
    height: 14px;
    background: #f4f4f4;
    margin: auto;
    margin-left: 0px;
  }
  .diagram__fill {
    /* border: 1px solid red; */
    width: 188px;
    height: 14px;
    background: #613a93;
    margin-left: 0px;
  }
}
</style>
