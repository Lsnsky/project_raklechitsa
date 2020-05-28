<template>
  <section class="photos">
    <container class="photos__container">
      <panel class="photos__panel-container">
        <div class="photos__panel-text">
          {{ secondPanelData.title }}
        </div>
        <div class="photos__panel-hashtag">{{ secondPanelData.hashtag }}</div>
      </panel>
      <div class="photos__content">
        <div class="photos__info">
          <a
            href="https://www.instagram.com/raklechitsa/"
            target="_blank"
            class="photos__title"
            >{{ instagramData.title }}</a
          >
          <div class="photos__text-wrapper" v-html="instagramData.text"></div>
        </div>
        <ul class="photos__cards">
          <li
            class="photos__card-item"
            v-for="photo in instagram"
            :key="photo.id"
          >
            <photo :href="photo.url" :src="photo.display_url" />
          </li>
        </ul>
      </div>
    </container>
  </section>
</template>

<script>
import Panel from '@/components/ui/Panel';
import Photo from '@/components/ui/Photo';
import Container from '@/components/ui/Container';
export default {
  components: {
    panel: Panel,
    photo: Photo,
    container: Container,
  },
  computed: {
    photos() {
      return this.$store.getters['photoData/getPhotosData'];
    },
    secondPanelData() {
      return this.$store.getters['blocks/getSecondPanelBlock'];
    },
    instagramData() {
      return this.$store.getters['blocks/getInstagramBlock'];
    },
    instagram() {
      return this.$store.getters['instagram/getPhotos'];
    },
  },
  mounted() {
    document
      .querySelector('.photos__text-wrapper')
      .querySelector('p')
      .classList.add('photos__text');
  },
};
</script>

<style scoped>
.photos {
  display: flex;
  margin: 100px 0;
  padding: 0;
}

.photos__container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.photos__info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
}
.photos__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  margin: 0px;
  display: block;
}
.photos__text-wrapper >>> .photos__text {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  max-width: 340px;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 0px;
  margin-right: 110px;
}
.photos__content {
  display: flex;
  justify-content: space-between;
  margin: 100px 0 0;
  width: 100%;
}
.photos__cards {
  margin: 0 0 0 10px;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-rows: repeat(2, minmax(171px, 195px));
  grid-template-columns: repeat(4, minmax(171px, 195px));
  grid-gap: 30px;
}
.photos__card-item {
  position: relative;
  width: 100%;
  height: 100%;
}

.photos__panel-container {
  width: 100%;
  height: 129px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.photos__panel-text {
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  color: #fff;
}
.photos__panel-hashtag {
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  color: #fff;
}

@media screen and (max-width: 1280px) {
  .photos {
    margin: 90px 0;
  }
  .photos__cards {
    grid-template-rows: repeat(2, minmax(136px, 1fr));
    grid-template-columns: repeat(4, minmax(136px, 1fr));
    grid-gap: 27px;
  }
  .photos__title {
    font-size: 28px;
    line-height: 32px;
  }
  .photos__text-wrapper >>> .photos__text {
    font-size: 16px;
    line-height: 20px;
    max-width: 305px;
  }
  .photos__panel-text {
    font-size: 28px;
    line-height: 46px;
  }
  .photos__panel-hashtag {
    line-height: 40px;
  }
}

@media screen and (max-width: 1024px) {
  .photos__cards {
    grid-gap: 20px;
  }
  .photos__title {
    font-size: 24px;
    line-height: 28px;
  }
  .photos__text-wrapper >>> .photos__text {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
    margin-top: 20px;
    margin-right: 60px;
  }
  .photos__panel-text {
    font-size: 24px;
    line-height: 40px;
  }
  .photos__panel-hashtag {
    font-size: 36px;
  }
  .photos__panel-container {
    height: 117px;
  }
  .photos__content {
    margin: 60px 0 0;
  }
  .photos {
    margin: 80px 0;
  }
}

@media screen and (max-width: 880px) {
  .photos__cards {
    grid-template-rows: repeat(2, minmax(120px, 1fr));
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    margin: 0 auto;
  }
  .photos__content {
    flex-direction: column;
    margin: 80px 0 0;
  }
  .photos__info {
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .photos__text-wrapper >>> .photos__text {
    max-width: 380px;
    margin: 26px auto 60px;
  }
  .photos__panel-container {
    height: 100px;
  }
}
@media screen and (max-width: 700px) {
  .photos__panel-text {
    font-size: 20px;
    line-height: 36px;
    width: 100%;
  }
  .photos__panel-hashtag {
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (max-width: 625px) {
  .photos {
    margin: 50px 0;
  }
  .photos__cards {
    grid-template-rows: repeat(4, minmax(140px, 1fr));
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    grid-gap: 15px;
  }
}
@media screen and (max-width: 400px) {
  .photos {
    margin: 50px 0;
  }

  .photos >>> .container {
    padding: 0px 15px;
  }
  .photos__cards {
    grid-template-rows: repeat(4, 140px);
    grid-template-columns: repeat(2, 140px);
    grid-gap: 10px;
    margin: 0 auto;
  }
  .photos__panel-text {
    font-size: 16px;
    line-height: 18px;
    max-width: 220px;
  }
  .photos__panel-hashtag {
    font-size: 22px;
    line-height: 24px;
  }

  .photos__panel-container {
    height: 80px;
  }
  .photos__content {
    margin: 50px auto 0px;
  }
  .photos__text-wrapper >>> .photos__text {
    margin: 16px auto 40px;
  }
  .photos__title {
    font-size: 18px;
    line-height: 21px;
    max-width: 290px;
    width: 100%;
  }
}
</style>
