<template>
  <div
    :class="[
      'popup',
      {
        popup_display_visible: popDisplay,
      },
    ]"
  >
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
    <overlay @overlayClick="$emit('closeClick')" />
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
export default {
  props: {
    popDisplay: { type: Boolean, default: false },
    titleText: String,
    titlePosition: { type: String, default: 'left' },
  },
  components: {
    overlay: Overlay,
  },
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
  min-width: 320px;
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
  background-image: url('/images/hider-open.svg');
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
  margin: 40px 40px 0;
  width: calc(100% - 80px);
}

.popup__title_position_center {
  text-align: center;
  margin: 40px auto 0;
}

@media screen and (max-width: 600px) {
  .popup__title {
    font-size: 18px;
    line-height: 21px;
    margin: 15px 15px 0;
    width: calc(100% - 30px);
  }
  .popup__title_position_center {
    margin: 15px auto 0;
  }
  .popup__close {
    top: 19px;
    right: 18px;
  }
}
</style>
