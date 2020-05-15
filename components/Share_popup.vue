<template>
  <popup :popDisplay="isShareActive()" class="share">
    <h3 class="share__title">Поделитесь</h3>
    <div class="share__icon-container">
      <button class="share__icon share__icon_social_facebook"></button>
      <button class="share__icon share__icon_social_twitter"></button>
      <button class="share__icon share__icon_social_vkontakte"></button>
      <button class="share__icon share__icon_social_odnoklasniki"></button>
      <button class="share__icon share__icon_social_instagram"></button>
      <button class="share__icon share__icon_social_youtube"></button>
      <button type="button" class="share__close" @click="toggleShare"></button>
    </div>
  </popup>
</template>

<script>
import popup from '@/components/popup';
export default {
  components: {
    popup: popup,
  },
  methods: {
    isShareActive() {
      return this.getShareState ? 'visible' : 'invisible';
    },
    toggleShare() {
      this.$store.commit('share-popup/toggleSharePopup');
    },
  },
  computed: {
    getShareState() {
      return this.$store.getters['share-popup/getSharePopupState'];
    },
  },
};
</script>

<style scoped>
.share /deep/ .popup__container {
  width: 920px;
  height: 324px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.share__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin: 40px;
}

.share__icon-container {
  display: flex;
  margin: 60px 0 0;
}

.share__icon {
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
.share__icon_social_facebook {
  background-image: url('../static/images/facebook.svg');
}

.share__icon_social_twitter {
  background-image: url('../static/images/twitter.svg');
}

.share__icon_social_vkontakte {
  background-image: url('../static/images/VK.svg');
}

.share__icon_social_odnoklasniki {
  background-image: url('../static/images/OK.svg');
}

.share__icon_social_instagram {
  background-image: url('../static/images/instagram.svg');
}

.share__icon_social_youtube {
  background-image: url('../static/images/youtube.svg');
}

.share__close {
  background-position: center;
  background-size: contain;
  background-image: url('../static/images/hider-open.svg');
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: none;
  outline: none;
  position: absolute;
  top: 36px;
  right: 36px;
  cursor: pointer;
}
</style>
