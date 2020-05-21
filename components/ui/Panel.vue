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
  border: 1px solid red;
  background: #613a93;
  border: 1px solid #000000;

  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1280px) {
  .panel {
    border: 1px solid red;
    background: #613a93;
    border: 1px solid #000000;

    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .panel {
    border: 1px solid red;
    background: #613a93;
    border: 1px solid #000000;

    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
