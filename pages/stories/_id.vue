<template>
  <story />
</template>

<script>
import Story from '@/components/Story';

export default {
  components: {
    story: Story,
  },
  async fetch({ store, params }) {
    await store.commit('storiesData/setId', params.id);
  },
};
</script>

<style scoped></style>
