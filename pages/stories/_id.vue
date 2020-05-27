<template>
  <main>
    <story />
    <bottom-cards />
  </main>
</template>

<script>
import Story from '@/components/Story';
import BottomCards from '@/components/BottomCards';
export default {
  components: {
    story: Story,
    'bottom-cards': BottomCards,
  },
  async fetch({ store, params }) {
    await store.commit('storiesData/setId', params.id);
  },
};
</script>

<style scoped></style>
