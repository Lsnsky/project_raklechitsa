<template>
  <section class="cover-about">
    <h2 class="cover-about__title">{{ aboutData.hashtag }}</h2>
    <div class="content">
      <container class="container">
        <div class="content__about">
          <h3 class="content__about-title">{{ aboutData.title }}</h3>
          <div class="content__about-paragraph" v-html="aboutData.text"></div>
          <main-button
            class="content__about-button-1"
            :disabled="false"
            color="none"
            @buttonClick="QuestionnaireOpen"
          >
            Рассказать историю</main-button
          >
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
            <p
              v-if="!isActive"
              class="content__columns-text"
              v-html="aboutData.extraTexts[0].text"
            ></p>

            <p
              v-else-if="isActive"
              class="content__columns-text-2"
              v-html="aboutData.extraTexts[1].text"
            ></p>
            <main-button
              class="content__about-button-2"
              :disabled="false"
              color="none"
              @buttonClick="QuestionnaireOpen"
            >
              Рассказать историю</main-button
            >
          </div>
        </div>
      </container>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
export default {
  components: {
    container: Container,
    'main-button': Button,
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
    QuestionnaireOpen() {
      this.$store.commit('questionnaire/openQuestionnaire');
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
.content__columns-text >>> p {
  margin: 0;
}
.content__columns-text-2 >>> p {
  margin: 0;
}
.content__about-paragraph >>> p {
  margin: 0;
}
.cover-about {
  background-color: #613a93;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.container {
  display: flex;
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
  padding: 0;
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
  margin-bottom: 188px;
}
.content__columns-text {
  margin-bottom: 100px;
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
.content__about-button-1 {
  width: 218px;
  height: 44px;
  margin-top: 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.content__about-button-2 {
  display: none;
}
@media screen and (max-width: 1280px) {
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
    margin-bottom: 210px;
  }
  .content__columns-text:last-child {
    margin-bottom: 90px;
  }
  .content__about-button-1 {
    width: 211px;
    height: 42px;
    margin-top: 30px;
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
    margin-bottom: 156px;
  }
  .content__columns-text {
    margin-bottom: 80px;
  }
  .content__about-button-1 {
    width: 201px;
    height: 38px;
    margin-top: 30px;
    font-size: 15px;
    line-height: 18px;
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
  .container {
    flex-direction: column;
    padding: 0;
  }
  .content {
    flex-direction: column;
  }
  .columns__link-1 {
    margin: 0 0 30px;
    margin-right: 30px;
    padding-bottom: 6px;
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
    margin: 0 auto;
  }

  .content__about-paragraph {
    max-width: 380px;
    margin-bottom: 0;
  }
  .content__columns-text-2 {
    padding-bottom: 114px;
    margin-bottom: 0;
  }
  .content__columns-text {
    margin-bottom: 0;
  }
  .content__about-button-1 {
    display: none;
  }
  .content__about-button-2 {
    display: flex;
    margin: 80px auto 80px;
    width: 200px;
    height: 38px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 512px) {
  .cover-about {
    margin: 0;
  }
  .content__about-button-2 {
    margin: 50px auto 50px;
    width: 146px;
    height: 31px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    justify-content: center;
    align-items: center;
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
    padding-bottom: 152px;
    max-width: 295px;
  }
  .content__columns-text:last-child {
    padding-bottom: 50px;
  }
}
</style>
