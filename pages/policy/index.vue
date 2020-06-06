<template>
  <main>
    <policy />
  </main>
</template>

<script>
import Policy from '@/components/Policy';
export default {
  components: {
    policy: Policy,
  },
  data() {
    return {
      metas: {
        title: 'Политика конфиденциальности - РАКЛЕЧИТСЯ.РФ',
        description: 'Политика в отношении обработки персональных данных',
        og_image: '/images/Pozner_1920_1080.jpg',
        keywords: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
      },
    };
  },
  // head() {
  //   return {
  //     title: `Политика конфиденциальности`,
  //   };
  // },
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
