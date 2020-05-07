<template>
  <main>
    <main-video />
    <photos />
    <statistics />
  </main>
</template>

<script>
import Video from '@/components/Video';
import Statistics from '@/components/Statistics';
import Photos from '@/components/Photos';
export default {
  components: {
    statistics: Statistics,
    photos: Photos,
    'main-video': Video,
  },
};
</script>

<style scoped></style>
