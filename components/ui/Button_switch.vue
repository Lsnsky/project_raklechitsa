<template>
  <button
    :class="[
      `button`,
      {
        button_type_inactive: disabled,
        button_position_left: left,
      },
      ,
    ]"
    :disabled="disabled"
    @click="$emit('buttonClick')"
  ></button>
</template>

<script>
export default {
  props: {
    left: { type: Boolean, default: false },
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
  transition: all linear 0.3s;
}

.button_type_inactive {
  cursor: not-allowed;
  background: center no-repeat url('/images/button-switch_inactive.svg');
}
.button_position_left {
  transform: rotate(180deg);
}
@media screen and (min-width: 651px) {
  .button:hover {
    background-color: #fff;
    border: 1px solid #613a93;
    background-image: url('/images/button-swith_purple.svg');
  }

  .button_type_inactive:hover {
    opacity: 0.8;
    background-color: #613a93;
    border: none;
    background-image: url('/images/button-switch_inactive.svg');
  }
}
</style>
