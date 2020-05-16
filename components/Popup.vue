<template>
  <div :class="`popup popup_display_${popDisplay}`">
    <div class="popup__container">
      <h2 :class="`popup__title popup__title_position_${titlePosition}`">
        {{ titleText }}
      </h2>
      <slot></slot>
      <button
        type="button"
        class="popup__close"
        @click="$emit('closeClick')"
      ></button>
    </div>
    <div class="popup__overlay"></div>
  </div>
</template>

<script>
export default {
  props: ['popDisplay', 'titleText', 'titlePosition'],
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

.popup__close {
  background-position: center;
  background-size: contain;
  background-image: url('../static/images/hider-open.svg');
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: none;
  outline: none;
  position: absolute;
  top: 36px;
  right: 36px;
  cursor: pointer;
}

.popup__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 40px 0 0 40px;
  width: calc(100%-40px);
}

.popup__title_position_center {
  text-align: center;
  margin: 40px 0 0;
}
</style>
