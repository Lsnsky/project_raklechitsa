<template>
  <button
    :class="[
      `button button_position_${position}`,
      {
        button_type_inactive: disabled,
      },
    ]"
    :disabled="disabled"
    @click="$emit('buttonClick')"
  ></button>
</template>

<script>
export default {
  props: {
    position: { type: String, required: true },
    disabled: { type: Boolean, default: false },
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
  background: center no-repeat url('/images/button-switch.svg');
}

.button_type_inactive {
  opacity: 0.5;
  cursor: not-allowed;
}

.button_position_left {
  transform: rotate(180deg);
}
</style>
