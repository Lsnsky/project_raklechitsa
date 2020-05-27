<template>
  <section class="cover">
    <h2 class="cover__title">{{ coverData.hashtag }}</h2>
    <div class="cover__button">
      <a href="#video" @click.prevent="$emit('scrollClick')">
        <button-down
      /></a>
    </div>
  </section>
</template>

<script>
import Button_down from '@/components/ui/Button_down';
export default {
  components: {
    'button-down': Button_down,
  },
  computed: {
    coverData() {
      return this.$store.getters['blocks/getCoverBlock'];
    },
  },
};
</script>

<style scoped>
.cover {
  min-height: calc(100vh - 76px);
  background-color: #613a93;
  margin: auto;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.cover__title {
  color: #fff;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
}
.cover__button {
  width: 36px;
  height: 12px;
  position: absolute;
  bottom: 40px;
}
@media screen and (max-width: 1280px) {
  .cover {
    min-height: calc(100vh - 72px);
  }
  .cover__title {
    font-size: 78px;
  }
}

@media screen and (max-width: 899px) {
  .cover__title {
    font-size: 64px;
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
  }
}
</style>
