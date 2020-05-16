<template>
  <section class="cover">
    <h2 class="cover__title">#РАКЛЕЧИТСЯ</h2>
    <div class="cover__button">
      <a href="#video"> <button-down /></a>
    </div>
  </section>
</template>

<script>
import Button_down from '@/components/ui/Button_down';
export default {
  components: {
    'button-down': Button_down,
  },
};
</script>

<style scoped>
.cover {
  max-width: 1440px;
  height: 689px;
  background-color: #613a93;
  margin: auto;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
}
.cover__title {
  color: #ffffff;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  margin: 290px auto 0px;
}
.cover__button {
  width: 36px;
  height: 12px;
  margin-top: auto;
  margin-bottom: 40px;
  margin-right: auto;
  margin-left: auto;
}
@media screen and (max-width: 1280px) {
  .cover {
    max-width: 100%;
    height: 620px;
  }
  .cover__title {
    font-size: 78px;
    line-height: 94px;
    margin-top: 263px;
  }
}
@media screen and (max-width: 1024px) {
  .cover {
    height: 540px;
  }
  .cover__title {
    margin-top: 223px;
  }
}
@media screen and (max-width: 899px) {
  .cover {
    height: 780px;
  }
  .cover__title {
    margin-top: 351px;
  }
}
</style>
