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
        v-for="network in this.socialNetworks"
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
    toggleShare() {
      this.$store.commit('share-popup/toggleSharePopup');
    },
  },
  computed: {
    getShareState() {
      return this.$store.getters['share-popup/getSharePopupState'];
    },
  },
  mounted() {
    console.log(window.location.href);
    this.socialNetworks.forEach(element => {
      if (element.name === 'facebook') {
        element.url = `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
          window.location.href
        )}&title=${document.querySelector('title').innerText}`;
      }
      if (element.name === 'twitter') {
        element.url = `https://twitter.com/intent/tweet?text=${
          document.querySelector('title').innerText
        }&url=${encodeURI(window.location.href)}`;
      }
      if (element.name === 'vkontakte') {
        element.url = `https://vk.com/share.php?url=${encodeURI(
          window.location.href
        )}&title=${document.querySelector('title').innerText}`;
      }
      if (element.name === 'odnoklasniki') {
        element.url = `https://connect.ok.ru/offer?url=${encodeURI(
          window.location.href
        )}&amp;title=${document.querySelector('title').innerText}`;
      }
    });
    console.log(this.socialNetworks);
  },
  data() {
    return {
      socialNetworks: [
        {
          name: 'facebook',
          url: '',
        },
        {
          name: 'twitter',
          url: '',
        },
        {
          name: 'vkontakte',
          url: '',
        },
        {
          name: 'odnoklasniki',
          url: '',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/raklechitsa/',
        },
        {
          name: 'youtube',
          url:
            'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
        },
      ],
    };
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
