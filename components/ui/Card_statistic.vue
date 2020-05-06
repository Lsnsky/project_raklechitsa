<template>
  <div class="card">
    <div class="card__title">
      Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000
      человек.
    </div>
    <img class="card__image" src="../../static/images/__item-6.jpg" />
    <div class="card__content">1 из 3</div>
    <div class="card__source">Левада-Центр 2018</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 300px;
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
.card__image {
  border: 1px solid red;
  width: 260px;
  height: 40px;
  margin: 76px 20px 0px;
}
.card__content {
  border: 1px solid red;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  /* identical to box height, or 105% */
  text-align: right;
  margin: 20px 20px 0px;
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
  margin: 20px 20px;
}
</style>
