<template>
  <div
    @keydown.esc="closeAll"
    :class="[
      {
        body__noscroll_type_callback: getCallbackState,
        body__noscroll_type_quest: getQuestionnaireState,
      },
    ]"
  >
    <main-header />
    <questionnaire />
    <nuxt />
    <main-footer />
    <share />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Questionnaire from '@/components/Questionnaire';
import Share_popup from '@/components/Share_popup';
export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    questionnaire: Questionnaire,
    share: Share_popup,
  },
  methods: {
    closeAll() {
      this.$store.commit('questionnaire/closeQuestionnaire');
      this.$store.commit('callback/closeCallback');
      this.$store.commit('share-popup/closeSharePopup');
    },
  },
  computed: {
    getCallbackState() {
      return this.$store.getters['callback/getCallbackState'];
    },
    getQuestionnaireState() {
      return this.$store.getters['questionnaire/getQuestionnaireState'];
    },
  },
  async middleware({ store }) {
    await store.dispatch('video/fetchVideos');
    await store.dispatch('blocks/fetchBlocks');
    await store.dispatch('statisticsData/fetchStatistic');
    await store.dispatch('storiesData/fetchStories');
    await store.dispatch('instagram/fetchPhotos');
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
}

@media screen and (max-height: 728px) and (min-width: 1280px) {
  .body__noscroll_type_callback {
    overflow: hidden;
    height: 100vh;
  }
}
@media screen and (max-height: 710px) and (max-width: 1280px) and (min-width: 600px) {
  .body__noscroll_type_callback {
    overflow: hidden;
    height: 100vh;
  }
}
@media screen and (max-height: 698px) and (max-width: 600px) {
  .body__noscroll_type_callback {
    overflow: hidden;
    height: 100vh;
  }
}

@media screen and (max-height: 520px) and (min-width: 1280px) {
  .body__noscroll_type_quest {
    overflow: hidden;
    height: 100vh;
  }
}

@media screen and (max-height: 604px) and (max-width: 1280px) {
  .body__noscroll_type_quest {
    overflow: hidden;
    height: 100vh;
  }
}
</style>
