<template>
  <div class="wrapper">
    <container>
      <card-container :stories="this.stories" />
      <btnhistory class="button" />
    </container>
  </div>
</template>

<script>
import Container from '@/components/ui/Container';
import Button_history from '@/components/ui/Button_history';
import CardContainer from '@/components/CardContainer';
export default {
  components: {
    container: Container,
    btnhistory: Button_history,
    'card-container': CardContainer,
  },
  computed: {
    stories() {
      return this.$store.getters['storiesData/getRandomStories'];
    },
  },
  async beforeMount() {
    if (process.browser) {
      if (window.innerWidth > 1000) {
        await this.$store.dispatch('storiesData/setRandomStories', 4);
      }
      if (window.innerWidth <= 1000) {
        await this.$store.dispatch('storiesData/setRandomStories', 3);
      }
      if (window.innerWidth <= 500) {
        await this.$store.dispatch('storiesData/setRandomStories', 2);
      }
    }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.button {
  margin: 70px auto 100px;
  height: 82px;
}

@media screen and (max-width: 1280px) {
  .button {
    margin: 60px auto 90px;
    height: 78px;
  }
}

@media screen and (max-width: 1024px) {
  .button {
    margin: 46px auto 80px;
    height: 50px;
  }
}
@media screen and (max-width: 768px) {
  .button {
    margin: 40px auto 80px;
    height: 50px;
  }
}

@media screen and (max-width: 320px) {
  .button {
    margin: 40px auto 50px;
    height: 50px;
  }
}
</style>
