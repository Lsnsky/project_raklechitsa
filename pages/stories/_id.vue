<template>
  <main>
    <story />
    <bottom-cards />
  </main>
</template>

<script>
import Story from '@/components/Story';
import BottomCards from '@/components/BottomCards';
export default {
  components: {
    story: Story,
    'bottom-cards': BottomCards,
  },
  validate({ params, store }) {
    return store.getters['storiesData/getStoriesData'].some(item => {
      return Number(item.id) === Number(params.id);
    });
  },
  async fetch({ store, params }) {
    await store.commit('storiesData/setId', params.id);
  },
  computed: {
    story() {
      return this.$store.getters['storiesData/getCurrentStory'];
    },
  },
  head() {
    return {
      title: `${this.story.author} - РАКЛЕЧИТСЯ.РФ`,
    };
  },
};
</script>

<style scoped></style>
