<template>
  <main>
    <cover />
    <main-video />
    <histories />
    <photos />
    <statistics />
    <cover-about />
  </main>
</template>

<script>
import Video from '@/components/Video';
import Histories from '@/components/Histories';
import Statistics from '@/components/Statistics';
import Photos from '@/components/Photos';
import Cover from '@/components/Cover';
import Cover_about from '@/components/Cover_about';
export default {
  components: {
    statistics: Statistics,
    photos: Photos,
    'main-video': Video,
    histories: Histories,
    cover: Cover,
    'cover-about': Cover_about,
  },
};
</script>

<style scoped></style>
