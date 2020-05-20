<template>
  <div class="card" @click="$emit('cardClick')">
    <div class="wrapper">
      <img class="card__photo" :src="url" />
    </div>
    <div class="card__title">{{ history_title }}</div>
    <div class="card__text">{{ history_text }}</div>
  </div>
</template>

<script>
export default {
  props: ['url', 'history_title', 'history_text'],
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.wrapper {
  position: relative;
  padding-top: 100%;
}

.card__photo {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
}

.card__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-top: 20px;
}

.card__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin: 14px 0 0;
  color: #666;
}
@media screen and (max-width: 1024px) {
  .card__title {
    font-size: 18px;
    line-height: 22px;
    margin: 16px 0 0;
  }

  .card__text {
    font-size: 13px;
    line-height: 16px;
    margin: 16px 0 0;
  }
}
</style>
