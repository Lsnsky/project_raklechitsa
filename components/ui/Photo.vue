<template>
  <a :href="href" class="photo-wrapper" target="_blank">
    <img class="photo" :src="src" />
  </a>
</template>

<script>
export default {
  props: { href: { type: String }, src: { type: String } },
};
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
  display: block;
}
</style>
