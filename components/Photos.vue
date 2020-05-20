<template>
  <section class="photos">
    <panel class="photos__panel-container">
      <div class="photos__panel-text">
        РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ
      </div>
      <div class="photos__panel-hashtag">#ЭТОНЕЛЕЧИТСЯ</div>
    </panel>
    <div class="photos__content">
      <div class="photos__info">
        <a
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
          class="photos__title"
          >Инстаграм</a
        >
        <p class="photos__text">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="photos__cards">
        <photo v-for="photo in photos" :key="photo.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Panel from '@/components/ui/Panel';
import Photo from '@/components/ui/Photo';
export default {
  components: {
    panel: Panel,
    photo: Photo,
  },
  computed: {
    photos() {
      return this.$store.getters['photoData/getPhotosData'];
    },
  },
};
</script>

<style scoped>
.photos {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px auto;
  padding: 0px 60px;
  max-width: 1320px;
}
.photos__info {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
}
.photos__title {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  /* identical to box height, or 112% */
  color: #000;
  margin: 0px;
  display: block;
}
.photos__text {
  /* border: 1px solid red; */
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
}
.photos__content {
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  margin: 100px auto 0px;
  width: 100%;
}
.photos__cards {
  /* border: 1px solid red; */
  display: grid;
  grid-template-rows: repeat(2, 195px);
  grid-template-columns: repeat(4, 195px);
  grid-gap: 30px;
}
.photos__panel-container {
  /* border: 1px solid red; */
  width: 100%;
  height: 129px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.photos__panel-text {
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
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
    margin: 90px 0 0;
  }
  .photos__cards {
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: repeat(2, 171px);
    grid-template-columns: repeat(4, 171px);
    grid-gap: 27px;
  }
  .photos__title {
    /* border: 1px solid red; */
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    /* identical to box height, or 112% */
    margin: 0px;
  }
  .photos__text {
    /* border: 1px solid red; */
    font-size: 16px;
    line-height: 20px;
    /* or 122% */
    color: #666;
    max-width: 305px;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 0px;
  }
  .photos__panel-text {
    /* border: 1px solid red; */
    font-size: 28px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #fff;
  }
  .photos__panel-hashtag {
    /* border: 1px solid red; */
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #fff;
  }
}

@media screen and (max-width: 1024px) {
  .photos__cards {
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: repeat(2, 136px);
    grid-template-columns: repeat(4, 136px);
    grid-gap: 20px;
  }
  .photos__title {
    /* border: 1px solid red; */
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height, or 112% */
    color: #000;
    margin: 0px;
  }
  .photos__text {
    /* border: 1px solid red; */
    font-size: 13px;
    line-height: 16px;
    /* or 122% */
    color: #666;
    max-width: 260px;
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }
  .photos__panel-text {
    /* border: 1px solid red; */
    font-size: 24px;
    line-height: 40px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #fff;
  }
  .photos__panel-hashtag {
    /* border: 1px solid red; */
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #fff;
  }
  .photos__panel-container {
    /* border: 1px solid red; */
    height: 117px;
  }
  .photos__content {
    /* border: 1px solid red; */
    margin: 60px auto 0px;
  }
  .photos {
    margin: 80px auto;
  }
}

@media screen and (max-width: 768px) {
  .photos {
    padding: 0 40px;
  }
  .photos__cards {
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: repeat(2, 157px);
    grid-template-columns: repeat(4, 157px);
    grid-gap: 20px;
    margin: 0 auto;
  }
  .photos__content {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 80px auto 0px;
    width: 100%;
  }
  .photos__info {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .photos__text {
    /* border: 1px solid red; */
    font-size: 13px;
    line-height: 16px;
    /* or 122% */
    color: #666;
    max-width: 380px;
    width: 100%;
    margin: 26px auto 60px;
  }
  .photos__panel-container {
    /* border: 1px solid red; */
    height: 100px;
  }
}
@media screen and (max-width: 425px) {
  .photos {
    padding: 0 15px;
    margin: 50px auto;
  }
  .photos__cards {
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: repeat(4, 180px);
    grid-template-columns: repeat(2, 180px);
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
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: repeat(4, 140px);
    grid-template-columns: repeat(2, 140px);
    grid-gap: 10px;
    margin: 0 auto;
  }
  .photos__panel-text {
    /* border: 1px solid red; */
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    max-width: 220px;
    width: 100%;
  }
  .photos__panel-hashtag {
    /* border: 1px solid red; */
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    text-align: center;
    color: #fff;
  }
  .photos__panel-container {
    /* border: 1px solid red; */
    height: 80px;
  }
  .photos__content {
    /* border: 1px solid red; */
    margin: 50px auto 0px;
  }
  .photos__text {
    /* border: 1px solid red; */
    font-size: 13px;
    line-height: 16px;
    color: #666;
    max-width: 380px;
    width: 100%;
    margin: 16px auto 40px;
  }
  .photos__title {
    /* border: 1px solid red; */
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
