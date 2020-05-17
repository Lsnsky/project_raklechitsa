<template>
  <span class="mainquestion"><slot></slot></span>
</template>

<script>
export default {};
</script>

<style scoped>
.mainquestion {
  font-weight: bold;
  color: #000;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}
@media screen and (max-width: 1280px) {
  .mainquestion {
    font-size: 16px;
    line-height: 22px;
  }
}

@media screen and (max-width: 900px) {
  .mainquestion {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 650px) {
  .mainquestion {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
