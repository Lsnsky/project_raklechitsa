<template>
  <popup
    :popDisplay="getShareState"
    titleText="Поделитесь"
    titlePosition="center"
    class="share"
    @closeClick="closeShare"
  >
    <div class="share__icon-container">
      <icon
        v-for="network in getSharePopupData"
        :key="network.name"
        :network="network.name"
        :url="network.url"
      />
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
    closeShare() {
      this.$store.commit('share-popup/closeSharePopup');
    },
  },
  computed: {
    getShareState() {
      return this.$store.getters['share-popup/getSharePopupState'];
    },
    getSharePopupData() {
      return this.$store.getters['share-popup/getSharePopupData'];
    },
  },
};
</script>

<style scoped>
.share /deep/ .popup__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.share__icon-container {
  display: flex;
  margin: 100px 266px;
}

@media screen and (max-width: 1280px) {
  .share__icon-container {
    margin: 100px 206px;
  }
}

@media screen and (max-width: 900px) {
  .share__icon-container {
    margin: 100px 96px 100px;
  }
}

@media screen and (max-width: 600px) {
  .share__icon-container {
    margin: 60px 4px;
  }
}
</style>
