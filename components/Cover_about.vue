<template>
  <section class="cover-about">
    <container>
      <h2 class="cover-about__title">{{ aboutData.hashtag }}</h2>
      <div class="content">
        <div class="content__about">
          <h3 class="content__about-title">{{ aboutData.title }}</h3>
          <p class="content__about-paragraph">
            Этот проект был создан благотворительным фондом Константина
            Хабенского.
          </p>
          <!-- <p class="content__about-paragraph" v-html="aboutData.text"></p>  Должно быть так-->
        </div>
        <div class="content__columns">
          <div id="app" class="content__columns-description">
            <p
              @click="clickOn"
              class="columns__link-1"
              :class="{ noActive: isActive, active: !isActive }"
            >
              {{ aboutData.extraTexts[0].title }}
            </p>
            <p
              @click="clickOff"
              class="columns__link-2"
              :class="{ active: isActive, noActive: !isActive }"
            >
              {{ aboutData.extraTexts[1].title }}
            </p>
          </div>
          <div class="content__columns-main-text">
            <p v-if="!isActive" class="content__columns-text">
              Есть вещи, которые не лечатся. Особенности характера, страстные
              увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
              приобрели в детстве. Список можно продолжать до бесконечности, но
              одна болезнь в него точно не войдет. Эта болезнь — рак. Рак
              лечится, и лучшее доказательство — люди с их неизлечимыми
              особенностями, которые сумели победить рак.
            </p>
            <p v-if="!isActive" class="content__columns-text">
              Рак лечится — проект Благотворительного Фонда Константина
              Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
              изменить отношение людей к раку и заставить каждого поверить:
              онкологическое заболевание — это не приговор.
            </p>
            <!--      <p v-if="!isActive" class="content__columns-text" v-html="aboutData.extraTexts[0].text"></p>  Должно быть так-->
            <p v-else-if="isActive" class="content__columns-text-2">
              Благотворительный Фонд Константина Хабенского с 2008 года помогает
              детям с онкологическими и другими тяжелыми заболеваниями головного
              мозга. Фонд не только поддерживает семью заболевшего ребенка в
              самый сложный момент, оплачивая обследования, лечение и
              медицинские препараты, но и в целом меняет систему оказания помощи
              детям с опухолями мозга в России.
            </p>
            <!-- <p v-else-if="isActive" class="content__columns-text-2" v-html="aboutData.extraTexts[1].text"></p> Должно быть так-->
          </div>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import Container from '@/components/ui/Container';
export default {
  components: {
    container: Container,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    clickOn() {
      this.isActive = false;
    },
    clickOff() {
      this.isActive = true;
    },
  },
  computed: {
    aboutData() {
      return this.$store.getters['blocks/getAboutBlock'];
    },
  },
};
</script>

<style scoped>
.cover-about {
  background-color: #613a93;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
}
.cover-about__title {
  max-width: 720px;
  color: #fff;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  margin: 0 auto 70px;
  padding-top: 90px;
  text-align: center;
}
.content {
  display: flex;
}
.content__about {
  display: flex;
  flex-direction: column;
}
.content__about-title {
  width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: white;
  margin-top: 0;
  margin-bottom: 32px;
  margin-right: 73px;
}
.content__about-paragraph {
  width: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}
.content__columns-description {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.content__columns {
  display: flex;
  margin-top: 68px;
}
.columns__link-1 {
  width: 112px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  margin-top: 0;
  margin-bottom: 10px;
  cursor: pointer;
}
.columns__link-2 {
  width: 155px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
  color: #c9c9c9;
  cursor: pointer;
}
.content__columns-main-text {
  max-width: 655px;
  color: #dedede;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-left: 40px;
}
.content__columns-text {
  margin-top: 0;
}
.content__columns-text-2 {
  margin-top: 0;
  padding-bottom: 188px;
}
.content__columns-text:last-child {
  margin-bottom: 0;
  padding-bottom: 100px;
}
.active {
  color: #fff;
}
.columns__link-2:hover {
  opacity: 0.7;
}
.columns__link-1:hover {
  opacity: 0.7;
}
.noActive {
  color: #c9c9c9;
}
.buttonPosition {
  margin-top: 122px;
}
@media screen and (max-width: 1280px) {
  .cover-about {
    padding: 50px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .cover-about__title {
    font-size: 58px;
    line-height: 70px;
    margin: 0 auto 60px;
    max-width: 640px;
  }
  .content__about-title {
    width: 367px;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 30px;
    margin-right: 49px;
  }
  .content__about-paragraph {
    margin-top: 0;
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
  .content__columns-main-text {
    max-width: 570px;
  }
  .content__columns-text-2 {
    padding-bottom: 200px;
  }
  .content__columns-text:last-child {
    padding-bottom: 90px;
  }
}
@media screen and (max-width: 1024px) {
  .cover-about__title {
    font-size: 52px;
    line-height: 63px;
    margin-bottom: 46px;
  }
  .content__about-title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
    width: 288px;
  }
  .content__about-paragraph {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
  .content__columns-main-text {
    max-width: 447px;
    font-size: 15px;
    line-height: 19px;
    margin-left: 30px;
  }
  .columns__link-1 {
    font-size: 15px;
    line-height: 19px;
    width: 93px;
  }
  .columns__link-2 {
    font-size: 15px;
    line-height: 19px;
    width: 129px;
  }
  .content__columns-text-2 {
    padding-bottom: 175px;
  }
  .content__columns-text:last-child {
    padding-bottom: 80px;
  }
}
@media screen and (max-width: 984px) {
  .cover-about__title {
    display: none;
  }
  .active {
    border-bottom: #fff 2px solid;
  }
  .noActive {
    border-bottom: #613a93 2px solid;
  }
  .content__columns {
    flex-direction: column;
    margin: 0 auto 0;
  }
  .content {
    flex-direction: column;
  }
  .columns__link-1 {
    margin: 0 0 30px;
    margin-right: 30px;
    padding-bottom: 6px;
    /* border-bottom: #fff 1px solid; */
  }
  .columns__link-2 {
    margin: 0 0 30px;
    padding-bottom: 6px;
  }
  .content__about-title {
    width: 380px;
    margin: 0 auto 26px;
    text-align: center;
  }
  .content__about {
    margin: 0 auto 80px;
    padding-top: 80px;
  }
  .content__columns-description {
    flex-direction: row;
  }
  .content__columns-main-text {
    max-width: 380px;
    margin: 0 auto 0;
  }
  .content__about-paragraph {
    max-width: 380px;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 512px) {
  .cover-about {
    margin: 0;
    padding: 0;
  }

  .content {
    padding: 0 15px 0;
  }
  .content__about {
    padding: 0;
    margin: 0;
  }
  .content__about-title {
    max-width: 295px;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 16px;
    padding-top: 50px;
    text-align: left;
  }
  .content__about-paragraph {
    margin: 0 auto 40px;
    font-size: 13px;
    line-height: 16px;
    max-width: 295px;
  }

  .columns__link-1 {
    width: 81px;
    font-size: 13px;
    line-height: 19px;
    margin: 0 0 20px;
    margin-right: 16px;
    padding-bottom: 4px;
  }
  .columns__link-2 {
    width: 113px;
    font-size: 13px;
    line-height: 19px;
    margin: 0 0 20px;
    padding-bottom: 4px;
  }

  .content__columns-text {
    max-width: 295px;
    font-size: 15px;
    line-height: 19px;
  }
  .content__columns-text-2 {
    padding-bottom: 202px;
    max-width: 295px;
  }
  .content__columns-text:last-child {
    padding-bottom: 50px;
  }
}
</style>
