<template>
  <nuxt-link to="/stories" class="cards-history-link" href="#"
    >Больше статей</nuxt-link
  >
</template>

<script>
export default {};
</script>

<style scoped>
.cards-history-link {
  display: block;
  text-decoration: none;
  color: #000000;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  background-color: #fbfbfb;

  height: 100%;
  /* padding: 31px 0; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-style: normal;
  transition: all linear 0.1s;
}
.cards-history-link:hover {
  background-color: #f8f8f8;
}
@media screen and (max-width: 320px) {
  .cards-history-link {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>
