<template>
  <div>
    <div class="card__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: ['content'],
};
</script>

<style scoped>
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
</style>
