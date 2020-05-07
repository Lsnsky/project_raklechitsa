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
  box-sizing: border-box;
  width: 1320px;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
