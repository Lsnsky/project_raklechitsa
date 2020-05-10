<template>
  <div class="card-history">
    <nuxt-link class="card-history__path" to="/stories/_id">
      <img class="card-history__photo" :src="url" />
      <div class="card-history__title">{{ history_title }}</div>
      <div class="card-history__text">{{ history_text }}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['url', 'history_title', 'history_text'],
};
</script>

<style scoped>
.card-history__path {
  display: block;
  margin: 0;
  text-decoration: none;
  color: #000 !important;
}
.card-history {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}

.card-history__photo {
  /* border: 1px solid red; */
  min-width: 300px;
  min-height: 300px;
}

.card-history__title {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  width: 300px;
  margin-top: 20px;
}

.card-history__text {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  width: 250px;
  margin: 14px 0 70px;
  color: #666666;
}
</style>
