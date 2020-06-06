<template>
  <section class="cover" ref="section">
    <h2 class="cover__title">{{ coverData.hashtag }}</h2>
    <main-button :disabled="false" color="none" class="cover__main-button">
      Рассказать историю</main-button
    >
    <div class="cover__button">
      <a @click.prevent="scroll"> <button-down class="cover__button-down"/></a>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
import Button_down from '@/components/ui/Button_down';
export default {
  components: {
    'button-down': Button_down,
    'main-button': Button,
  },
  computed: {
    coverData() {
      return this.$store.getters['blocks/getCoverBlock'];
    },
  },
  methods: {
    scroll() {
      this.$refs.section.nextElementSibling.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
  },
};
</script>

<style scoped>
.cover__button-down:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: transform 0.7s ease-in-out;
}
.cover {
  min-height: calc(100vh - 76px);
  background-color: #613a93;
  margin: auto;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
}
.cover__title {
  color: #fff;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  margin-bottom: 0;
}
.cover__button {
  width: 36px;
  height: 12px;
  position: absolute;
  bottom: 40px;
  transition: 0.7s ease;
}
.cover__main-button {
  width: 334px;
  height: 60px;
  margin-top: 30px;
  color: #fff;
  border: #fff 2px solid;
  background-color: #613a93;
  box-sizing: border-box;
  border-radius: 60px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}
@media screen and (max-width: 1280px) {
  .cover {
    min-height: calc(100vh - 72px);
  }
  .cover__title {
    font-size: 78px;
  }
  .cover__main-button {
    width: 314px;
    height: 58px;
    font-size: 22px;
  }
}
@media screen and (max-width: 1024px) {
  .cover__main-button {
    width: 294px;
    height: 56px;
    font-size: 20px;
    margin-top: 20px;
  }
}
@media screen and (max-width: 899px) {
  .cover__title {
    font-size: 64px;
  }
  .cover__main-button {
    margin-top: 30px;
  }
}
@media screen and (max-width: 530px) {
  .cover {
    min-height: calc(100vh - 64px);
  }
  .cover__title {
    font-size: 36px;
  }
  .cover__button {
    bottom: 30px;
  }
  .cover__main-button {
    width: 224px;
    height: 44px;
    margin-top: 18px;
  }
}
</style>
