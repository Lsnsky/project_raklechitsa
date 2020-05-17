<template>
  <div class="card" @click="$emit('cardClick')">
    <img class="card__photo" :src="url" />
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
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.card__photo {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__title {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  width: 300px;
  margin-top: 20px;
}

.card__text {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  width: 250px;
  margin: 14px 0 0;
  color: #666;
}
</style>
