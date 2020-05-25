<template>
  <div class="overlay" @click="$emit('overlayClick')"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: #000;
  width: 100%;
  height: 100%;
}
</style>
