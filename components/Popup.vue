<template>
  <div :class="`popup popup_display_${popDisplay}`">
    <div class="popup__container">
      <slot></slot>
    </div>
    <div class="popup__overlay"></div>
  </div>
</template>

<script>
export default {
  props: ['popDisplay'],
};
</script>

<style scoped>
.popup {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: all linear 0.1s;
}

.popup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: #000;
  width: 100%;
  height: 100%;
}

.popup_display_visible {
  visibility: visible;
  opacity: 1;
}

.popup__container {
  position: relative;
  display: block;
  background: #fff;
  z-index: 1;
}
</style>
