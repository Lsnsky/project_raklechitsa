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
  width: 100%;
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
}
</style>
