<template>
  <button
    :class="[
      `button`,
      {
        button_type_inactive: disabled,
      },
      `button_position_${position}`,
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
  cursor: not-allowed;
  background: center no-repeat url('/images/button-switch_inactive.svg');
}

.button_position_left {
  transform: rotate(180deg);
}
</style>
