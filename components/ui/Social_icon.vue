<template>
  <button :class="`social-icon social-icon_${network}`"></button>
</template>

<script>
export default {
  props: ['network'],
};
</script>

<style scoped>
.social-icon {
  margin: 0;
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
.social-icon_facebook {
  background-image: url('../../static/images/facebook.svg');
}

.social-icon_twitter {
  background-image: url('../../static/images/twitter.svg');
}

.social-icon_vkontakte {
  background-image: url('../../static/images/VK.svg');
}

.social-icon_odnoklasniki {
  background-image: url('../../static/images/OK.svg');
}

.social-icon_instagram {
  background-image: url('../../static/images/instagram.svg');
}

.social-icon_youtube {
  background-image: url('../../static/images/youtube.svg');
}
</style>
