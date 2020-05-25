<template>
  <popup
    :popDisplay="getShareState"
    titleText="Поделитесь"
    titlePosition="center"
    class="share"
    @closeClick="toggleShare"
  >
    <div class="share__icon-container">
      <icon
        network="facebook"
        url="
          https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2\
        "
      />
      <icon
        network="twitter"
        url="
          https://twitter.com/intent/tweet?text=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2
        "
      />
      <icon
        network="vkontakte"
        url="
          https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2
        "
      />
      <icon
        network="odnoklasniki"
        url="
          https://connect.ok.ru/offer?url=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2
        "
      />
      <icon network="instagram" url="https://www.instagram.com/raklechitsa/" />
      <icon
        network="youtube"
        url="https://www.youtube.com/results?search_query=%23этонелечится"
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
