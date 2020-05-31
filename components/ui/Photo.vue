<template>
  <a :href="href" class="photo" target="_blank">
    <img class="photo__image" :src="src" />
  </a>
</template>

<script>
export default {
  props: { href: { type: String }, src: { type: String } },
};
</script>

<style scoped>
.photo__image {
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
.photo {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  display: block;
  transition: transform 0.15s linear;
}
.photo:hover {
  transform: scale(1.04);
}
</style>
