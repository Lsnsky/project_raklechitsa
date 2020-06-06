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
  // head() {
  //   return {
  //     title: `${this.story.author} - РАКЛЕЧИТСЯ.РФ`,
  //   };
  // },
  data() {
    return {
      metas: {
        title: `${this.story.author} - РАКЛЕЧИТСЯ.РФ`,
        description: `${this.story.author}. РАКЛЕЧИТСЯ.РФ — проект Фонда Хабенского.`,
        og_image: '?????git',
        keywords: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
      },
    };
  },
  head() {
    if (this.metas) {
      return {
        title: this.metas.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.metas.description || '',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.metas.keywords || '',
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.metas.title || '',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.metas.description || '',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.metas.og_image || '',
          },
        ],
      };
    }
  },
};
</script>

<style scoped></style>
