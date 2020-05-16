<template>
  <main>
    <cover />
    <main-video />
    <stories />
    <photos />
    <story-input />
    <statistics />
    <cover-about />
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

export default {
  components: {
    statistics: Statistics,
    photos: Photos,
    'main-video': Video,
    stories: Stories,
    cover: Cover,
    'cover-about': Cover_about,
    'story-input': Story_input,
  },
};
</script>

<style scoped></style>
