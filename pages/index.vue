<template>
  <main>
    <cover />
    <main-video />
    <stories />
    <photos />
    <story-input />
    <statistics />
    <cover-about />
    <callback />
  </main>
</template>

<script>
import Video from '@/components/Video';
import Stories from '@/components/Stories';
import Statistics from '@/components/Statistics';
import Photos from '@/components/Photos';
import Cover from '@/components/Cover';
import Cover_about from '@/components/Cover_about';
import Story_input from '@/components/Story_input';
import Callback from '@/components/Callback';

export default {
  components: {
    statistics: Statistics,
    photos: Photos,
    'main-video': Video,
    stories: Stories,
    cover: Cover,
    'cover-about': Cover_about,
    'story-input': Story_input,
    callback: Callback,
  },

  async beforeMount() {
    await this.$store.dispatch('instagram/fetchPhotos');
  },
  data() {
    return {
      metas: {
        title:
          'РАКЛЕЧИТСЯ.РФ — истории людей, победивших рак, но не свои привычки',
        description:
          'Информационный проект Фонда Хабенского. Есть вещи, которые не лечатся. В отличие от рака. #раклечится Вместе мы изменим отношение людей!  Какая привычка или фобия не лечится у вас? #этонелечится',
        og_image: '/images/Pozner_1920_1080.jpg',
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
