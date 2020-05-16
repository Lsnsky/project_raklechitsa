<template>
  <popup :popDisplay="isShareActive()" class="share" @closeClick="toggleShare">
    <h3 class="share__title">Поделитесь</h3>
    <div class="share__icon-container">
      <icon network="facebook" />
      <icon network="twitter" />
      <icon network="vkontakte" />
      <icon network="odnoklasniki" />
      <icon network="instagram" />
      <icon network="youtube" />
    </div>
  </popup>
</template>

<script>
import Popup from '@/components/Popup';
import Social_icon from '@/components/ui/Social_icon';
export default {
  components: {
    popup: Popup,
    icon: Social_icon,
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
