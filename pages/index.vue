<template>
  <main>
    <main-video />
    <histories />
    <photos />
    <statistics />
  </main>
</template>

<script>
import Video from '@/components/Video';
import Histories from '@/components/Histories';
import Statistics from '@/components/Statistics';
import Photos from '@/components/Photos';

export default {
  components: {
    statistics: Statistics,
    photos: Photos,
    'main-video': Video,
    histories: Histories,
  },
};
</script>

<style scoped></style>
