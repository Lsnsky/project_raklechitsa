<template>
  <div>
    <photos />
    <statistics />
  </div>
</template>

<script>
import Statistics from '@/components/Statistics';
import Photos from '@/components/Photos';
export default {
  components: {
    statistics: Statistics,
    photos: Photos,
  },
};
</script>

<style scoped></style>
