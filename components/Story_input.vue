<template>
  <section class="story-input">
    <div class="content">
      <container class="container">
        <div class="content__about">
          <h2 class="content__about-title">{{ storyData.title }}</h2>
          <p class="content__about-paragraph" v-html="storyData.text"></p>
        </div>
        <div class="content__columns">
          <div id="app" class="content__columns-description">
            <p
              @click="clickOn"
              class="columns__link-1"
              :class="{ noActive: isActive, active: !isActive }"
            >
              {{ storyData.extraTexts[0].title }}
            </p>
            <p
              @click="clickOff"
              class="columns__link-2"
              :class="{ active: isActive, noActive: !isActive }"
            >
              {{ storyData.extraTexts[1].title }}
            </p>
          </div>
          <div class="content__columns-main-text">
            <div class="text-container">
              <p
                v-if="!isActive"
                class="content__columns-text"
                v-html="storyData.extraTexts[0].text"
              ></p>

              <p
                v-else-if="isActive"
                class="content__columns-text-2"
                v-html="storyData.extraTexts[1].text"
              ></p>
            </div>
            <story-button
              @buttonClick="popupOpen"
              class="story-button"
              :disabled="false"
              color="purple"
              >{{ buttonText() }}</story-button
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
    'story-button': Button,
    container: Container,
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    storyData() {
      return this.$store.getters['blocks/getStoryBlock'];
    },
  },
  methods: {
    buttonText() {
      return this.isActive ? 'Оставить контакт' : 'Заполнить форму';
    },
    clickOn() {
      this.isActive = false;
    },
    clickOff() {
      this.isActive = true;
    },
    popupOpen() {
      if (this.isActive) {
        this.$store.commit('callback/toggleCallback');
      } else {
        this.$store.commit('questionnaire/openQuestionnaire');
      }
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
.story-input {
  padding: 0;
  margin: 0;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}
.container {
  display: flex;
}
.text-container {
  max-width: 640px;
}
.story-button {
  width: 280px;
  height: 52px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  transition: all linear 0.3s;
}

.story-button:hover {
  background-color: #fff;
  color: #613a93;
  border: 1px solid #613a93;
}
.content {
  display: flex;
  padding-bottom: 100px;
}
.content__about {
  display: flex;
  flex-direction: column;
  margin-right: 60px;
}
.content__about-title {
  width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  margin-top: 100px;
  margin-bottom: 32px;
  margin-right: 73px;
}
.content__about-paragraph {
  width: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  padding-bottom: 108px;
  margin: 0;
}
.content__columns-description {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.content__columns {
  display: flex;
  margin-top: 204px;
}
.columns__link-1 {
  width: 106px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  margin-top: 0;
  cursor: pointer;
  display: block;
}
.columns__link-1:hover {
  opacity: 0.7;
}

.columns__link-2 {
  width: 108px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
  color: #a2a2a2;
  cursor: pointer;
}
.columns__link-2:hover {
  opacity: 0.7;
}

.content__columns-main-text {
  max-width: 655px;
  color: #666;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content__columns-text {
  margin: 0;
}
.content__columns-text-2 {
  margin: 0;
}

.active {
  color: #000;
}
.noActive {
  color: #a2a2a2;
}

@media screen and (max-width: 1280px) {
  .story-input {
    margin-bottom: 90px;
  }

  .content {
    padding-bottom: 90px;
  }
  .story-button {
    width: 230px;
    height: 46px;
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
}
@media screen and (max-width: 1090px) {
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
    width: 89px;
  }
  .columns__link-2 {
    font-size: 15px;
    line-height: 19px;
    width: 90px;
  }
  .story-input {
    margin-bottom: 80px;
  }
  .content__columns {
    margin-top: 186px;
  }
}
@media screen and (max-width: 960px) {
  .active {
    border-bottom: #000 2px solid;
  }
  .noActive {
    border-bottom: #f7f7f7 2px solid;
  }

  .content__columns {
    flex-direction: column;
    margin: 0 auto 0;
  }
  .content {
    flex-direction: column;
    padding-bottom: 80px;
  }
  .container {
    flex-direction: column;
    padding: 0;
  }
  .columns__link-1 {
    margin: 0 30px 30px 0;
  }
  .columns__link-2 {
    margin: 0 0 30px;
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
    padding-bottom: 0;
  }
  .content__columns-text {
    margin-bottom: 50px;
  }
  .content__columns-text-2 {
    margin-bottom: 88px;
  }
}
@media screen and (max-width: 512px) {
  .story-input {
    margin-bottom: 50px;
  }
  .story-button {
    width: 290px;
    height: 40px;
  }
  .content {
    padding: 0;
    padding-bottom: 50px;
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
    width: 77px;
    font-size: 13px;
    margin: 0 16px 20px 0;
  }
  .columns__link-2 {
    width: 78px;
    font-size: 13px;
    margin: 0 0 20px;
  }
  .content__columns-text {
    max-width: 295px;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 30px;
  }
  .content__columns-text-2 {
    max-width: 295px;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 87px;
  }
}
</style>
