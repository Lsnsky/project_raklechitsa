<template>
  <main>
    <main-video />
  <section>
    <statistics />
  </section>
  </main>
</template>

<script>
import Video from '@/components/Video';
import Statistics from '@/components/Statistics';
export default {
  components: {
    statistics: Statistics,
    'main-video': Video,
  },
};
</script>

<style scoped>
</style>
