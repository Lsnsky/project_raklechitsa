<template>
  <button
    :class="[`button button_position_${position} button_type_${type}`]"
    :disabled="disabled"
    @click="$emit('buttonClick')"
  ></button>
</template>

<script>
export default {
  props: {
    position: String,
    type: String,
    disabled: Boolean,
  },
};
</script>

<style scoped>
.button {
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background: center no-repeat url('../../static/images/button-switch.svg');
}

.button_type_inactive {
  opacity: 0.5;
  cursor: not-allowed;
}

.button_position_left {
  transform: rotate(180deg);
}
</style>
