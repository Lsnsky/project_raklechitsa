<template>
  <a
    :class="`social-icon social-icon_${network}`"
    :href="url"
    target="_blank"
  ></a>
</template>

<script>
export default {
  props: ['network', 'url'],
};
</script>

<style scoped>
.social-icon {
  display: block;
  margin: 0 20px 0 0;
  padding: 0;
  border: none;
  outline: none;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;

  height: 48px;
  width: 48px;
}

.social-icon:last-child {
  margin: 0;
}
.social-icon_facebook {
  background-image: url('/images/facebook.svg');
}

.social-icon_twitter {
  background-image: url('/images/twitter.svg');
}

.social-icon_vkontakte {
  background-image: url('/images/VK.svg');
}

.social-icon_odnoklasniki {
  background-image: url('/images/OK.svg');
}

.social-icon_instagram {
  background-image: url('/images/instagram.svg');
}

.social-icon_youtube {
  background-image: url('/images/youtube.svg');
}

@media screen and (max-width: 600px) {
  .social-icon {
    width: 35px;
    height: 35px;
    margin: 0 15px 0 0;
  }
}
</style>
