<template>
  <div @keydown.esc="closeQuestionnaire">
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
    closeQuestionnaire() {
      this.$store.commit('questionnaire/closeQuestionnaire');
    },
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
}
</style>
