<template>
  <iframe
    class="video__iframe"
    :src="url"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
.video__iframe {
  border: none;
  width: 100%;
  min-height: 450px;
}

@media screen and (max-width: 1280px) {
  .video__iframe {
    min-height: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .video__iframe {
    min-height: 314px;
  }
}

@media screen and (max-width: 899px) {
  .video__iframe {
    min-height: 300px;
  }
}

@media screen and (max-width: 525px) {
  .video__iframe {
    min-height: 150px;
  }
}
</style>
