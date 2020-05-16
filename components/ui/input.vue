<template>
  <input class="input" :placeholder="placeholder" :type="type" />
</template>

<script>
export default {
  props: ['placeholder', 'type'],
};
</script>

<style scoped>
.input {
  display: block;
  width: 91%;
  margin: 0 40px;
  min-height: 24px;
  height: 24px;
  border: none;
  outline: none;
  padding: 0 0 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  position: absolute;
  top: 274px;
  left: 0;
  border-bottom: 1px solid #eee;
  max-height: 200px;
  max-width: 840px;
}
</style>
