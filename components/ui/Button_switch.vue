<template>
  <button
    :class="[`button button_position_${position} button_type_${type}`]"
    @click="$emit('buttonClick')"
  ></button>
</template>

<script>
export default {
  props: ['position', 'type'],
};
</script>

<style scoped>
.button {
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  background: center no-repeat
    url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17L9 9L1 1' stroke='black'/%3E%3C/svg%3E%0A");
}

.button_type_unactive {
  opacity: 0.5;
}

.button_position_left {
  transform: rotate(180deg);
}
</style>
