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
  head() {
    return {
      title: `Политика конфиденциальности`,
    };
  },
};
</script>

<style scoped></style>
