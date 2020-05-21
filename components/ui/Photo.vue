<template>
  <div class="photo-wrapper">
    <img class="photo" src="/images/__item-6.jpg" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.photo {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  background: #ededed;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
}
.photo-wrapper {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
}
</style>
