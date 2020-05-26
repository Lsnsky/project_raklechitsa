<template>
  <section class="photos">
    <panel class="photos__panel-container">
      <div class="photos__panel-text">{{ secondPanelData.title }}</div>
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
        <p class="photos__text" v-html="instagramData.text"></p>
      </div>
      <div class="photos__cards">
        <img
          :src="photo.url"
          class="photos__item"
          v-for="photo in photos"
          :key="photo.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Panel from '@/components/ui/Panel';
// import Photo from '@/components/ui/Photo';
export default {
  components: {
    panel: Panel,
    // photo: Photo,
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
  },
};
</script>

<style scoped>
.photos {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px auto;
  padding: 0px 60px;
  max-width: 1320px;
}
.photos__info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
}
.photos__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  margin: 0px;
  display: block;
}
.photos__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* or 122% */
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
  margin: 100px auto 0px;
  width: 100%;
}
.photos__cards {
  display: grid;
  grid-template-rows: repeat(2, minmax(171px, 195px));
  grid-template-columns: repeat(4, minmax(171px, 195px));
  grid-gap: 30px;
}
.photos__item {
  border: 1px solid red;
  width: 100%;
  height: 100%;
  background: #ededed;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
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
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  /* identical to box height, or 153% */
  text-align: center;
  color: #fff;
}
.photos__panel-hashtag {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  /* identical to box height, or 153% */
  text-align: center;
  color: #fff;
}

@media screen and (max-width: 1280px) {
  .photos {
    padding: 0px 50px;
    margin: 90px 0 90px;
  }
  .photos__cards {
    display: grid;
    grid-template-rows: repeat(2, minmax(136px, 1fr));
    grid-template-columns: repeat(4, minmax(136px, 1fr));
    grid-gap: 27px;
  }
  .photos__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    margin: 0px;
  }
  .photos__text {
    font-size: 16px;
    line-height: 20px;
    color: #666;
    max-width: 305px;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 0px;
  }
  .photos__panel-text {
    font-size: 28px;
    line-height: 46px;
    text-align: center;
    color: #fff;
  }
  .photos__panel-hashtag {
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
}

@media screen and (max-width: 1024px) {
  .photos__cards {
    display: grid;
    grid-template-rows: repeat(2, minmax(136px, 1fr));
    grid-template-columns: repeat(4, minmax(136px, 1fr));
    grid-gap: 20px;
  }
  .photos__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000;
    margin: 0px;
  }
  .photos__text {
    font-size: 13px;
    line-height: 16px;
    color: #666;
    max-width: 260px;
    width: 100%;

    margin-top: 20px;
    margin-right: 60px;
  }
  .photos__panel-text {
    font-size: 24px;
    line-height: 40px;

    text-align: center;
    color: #fff;
  }
  .photos__panel-hashtag {
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #fff;
  }
  .photos__panel-container {
    height: 117px;
  }
  .photos__content {
    margin: 60px auto 0px;
  }
  .photos {
    margin: 80px auto;
  }
}

@media screen and (max-width: 880px) {
  .photos {
    padding: 0 40px;
  }
  .photos__cards {
    display: grid;
    grid-template-rows: repeat(2, minmax(120px, 1fr));
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    grid-gap: 20px;
    margin: 0 auto;
  }
  .photos__content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 80px auto 0px;
    width: 100%;
  }
  .photos__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .photos__text {
    font-size: 13px;
    line-height: 16px;
    /* or 122% */
    color: #666;
    max-width: 380px;
    width: 100%;
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
    text-align: center;
    color: #fff;

    width: 100%;
  }
  .photos__panel-hashtag {
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #fff;
  }
}
@media screen and (max-width: 625px) {
  .photos {
    padding: 0 15px;
    margin: 50px auto;
  }
  .photos__cards {
    display: grid;
    grid-template-rows: repeat(4, minmax(140px, 1fr));
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    grid-gap: 15px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 320px) {
  .photos {
    padding: 0 15px;
    margin: 50px auto;
  }
  .photos__cards {
    display: grid;
    grid-template-rows: repeat(4, 140px);
    grid-template-columns: repeat(2, 140px);
    grid-gap: 10px;
    margin: 0 auto;
  }
  .photos__panel-text {
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    max-width: 220px;
    width: 100%;
  }
  .photos__panel-hashtag {
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    text-align: center;
    color: #fff;
  }

  .photos__panel-container {
    height: 80px;
  }
  .photos__content {
    margin: 50px auto 0px;
  }
  .photos__text {
    font-size: 13px;
    line-height: 16px;
    color: #666;
    max-width: 380px;
    width: 100%;
    margin: 16px auto 40px;
  }
  .photos__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #000;
    margin: 0px;
    display: block;
    max-width: 290px;
    width: 100%;
  }
}
</style>
