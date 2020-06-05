<template>
  <div class="diagram">
    <div class="diagram__empty" :style="styleEmpty"></div>
    <div class="diagram__fill" :style="styleFill"></div>
  </div>
</template>

<script>
export default {
  props: {
    valueEmpty: {
      type: Number,
      default: 0,
    },
    maxValueEmpty: {
      type: Number,
      default: 0,
    },
    valueFill: {
      type: Number,
      default: 0,
    },
    maxValueFill: {
      type: Number,
      default: 0,
    },
  },
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
.diagram {
  max-width: 260px;
  width: 100%;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
}
.diagram__empty {
  width: 260px;
  height: 20px;
  background: #f4f4f4;
  margin: 0;
}
.diagram__fill {
  width: 260px;
  height: 20px;
  background: #613a93;
}

@media screen and (max-width: 1280px) {
  .diagram {
    width: 229px;
    height: 36px;
  }
  .diagram__empty {
    width: 229px;
    height: 18px;
    margin: auto;
    margin-left: 0px;
  }
  .diagram__fill {
    width: 229px;
    height: 18px;
    margin-left: 0px;
  }
}
@media screen and (max-width: 1166px) {
  .diagram {
    width: 188px;
    height: 28px;
  }
  .diagram__empty {
    width: 188px;
    height: 14px;
  }
  .diagram__fill {
    width: 188px;
    height: 14px;
  }
}
@media screen and (max-width: 1024px) {
  .diagram {
    margin-bottom: 10px;
  }
}
</style>
