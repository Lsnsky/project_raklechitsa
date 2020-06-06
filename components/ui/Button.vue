<template>
  <button
    :class="[
      {
        button_disabled: disabled,
        button: !header,
        buttonHeder: header,
      },
      `button_color_${color}`,
    ]"
    :disabled="disabled"
    @click.prevent="$emit('buttonClick')"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'none' },
    disabled: { type: Boolean, default: true },
    type: { type: String, default: 'button' },
    header: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.button {
  border: none;
  padding: 0;
  outline: none;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: all linear 0.1s;
}
.buttonHeder {
  border: none;
  outline: none;
  font-weight: normal;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: all linear 0.1s;
}

.button:hover {
  opacity: 0.9;
}

.button_color_purple {
  background-color: #613a93;
}

.button_color_none {
  background-color: #fff;
  color: #000;
}
.button_disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.button_disabled:hover {
  opacity: 0.3;
}
</style>
