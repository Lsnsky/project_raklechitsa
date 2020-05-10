<template>
  <iframe
    class="video__iframe"
    src="https://www.youtube.com/embed/coOppM34GtI"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
</template>

<script>
export default {};
</script>

<style scoped>
.video__iframe {
  border: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
