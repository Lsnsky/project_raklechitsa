<template>
  <section>
    <stories-all />
  </section>
</template>

<script>
import StoriesAll from '@/components/StoriesAll';
export default {
  components: {
    'stories-all': StoriesAll,
  },
  data() {
    return {
      metas: {
        title: 'РАКЛЕЧИТСЯ.РФ',
        description:
          'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
        og_image: '/images/bg-2.png',
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
