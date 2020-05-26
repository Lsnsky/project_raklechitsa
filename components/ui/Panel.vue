<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.panel {
  background: #613a93;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1280px) {
  .panel {
    background: #613a93;
    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .panel {
    background: #613a93;
    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
