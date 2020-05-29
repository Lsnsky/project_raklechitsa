<template>
  <iframe
    class="video-iframe"
    :src="url"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
  },
};
</script>

<style scoped>
.video-iframe {
  border: none;
  width: 100%;
  min-height: 450px;
  position: relative;
}

@media screen and (max-width: 1280px) {
  .video-iframe {
    min-height: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .video-iframe {
    min-height: 314px;
  }
}

@media screen and (max-width: 899px) {
  .video-iframe {
    min-height: 300px;
  }
}

@media screen and (max-width: 525px) {
  .video-iframe {
    min-height: 225px;
  }
}

@media screen and (max-width: 350px) {
  .video-iframe {
    min-height: 150px;
  }
}
</style>
