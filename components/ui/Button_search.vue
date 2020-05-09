<template>
  <div>
    <button @click="$emit('shareClick')" class="button_search">
      Заполнить форму
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button_search {
  width: 280px;
  height: 52px;
  background-color: #613a93;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
}
</style>
