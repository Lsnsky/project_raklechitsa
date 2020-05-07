<template>
  <<<<<<< HEAD
  <div>
    <photos />
    <statistics />
  </div>
  =======
  <main>
    <main-video />
    <section>
      <statistics />
    </section>
  </main>
  >>>>>>> 4d0322fa00dc36b1870dbc627a4f7a4116302972
</template>

<script>
import Video from '@/components/Video';
import Statistics from '@/components/Statistics';
import Photos from '@/components/Photos';
export default {
  components: {
    statistics: Statistics,
<<<<<<< HEAD
    photos: Photos,
=======
    'main-video': Video,
>>>>>>> 4d0322fa00dc36b1870dbc627a4f7a4116302972
  },
};
</script>

<style scoped></style>
