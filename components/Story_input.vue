<template>
  <section class="story-input">
    <container>
      <div class="content">
        <div class="content__about">
          <h2 class="content__about-title">Расскажите свою историю</h2>
          <p class="content__about-paragraph">
            Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
            поделиться своей историей неизлечимых привычек, навязчивых идей и
            болезненных привязанностей.
          </p>
        </div>
        <div class="content__columns">
          <div id="app" class="content__columns-description">
            <p
              @click="clickOn"
              class="content__columns_link-1"
              :class="{ noActive: isActive, active: !isActive }"
            >
              1-й вариант
            </p>
            <p
              @click="clickOff"
              class="content__columns_link-2"
              :class="{ active: isActive, noActive: !isActive }"
            >
              2-й вариант
            </p>
          </div>
          <div class="content__columns-main-text">
            <div class="text-container">
              <p v-if="!isActive" class="content__columns-text">
                Заполнить подробную форму прямо на сайте и мы опубликуем вашу
                историю после проверки. Пожалуйста, заполняйте все пункты
                корректно, если вы испытаете какие-то сложности, воспользуйтесь
                2-м вариантом.
              </p>
              <p v-else-if="isActive" class="content__columns-text-2">
                Оставить контакт (почту или номер телефона) и мы свяжемся с
                вами, зададим вопросы, уточним детали вашей истории.
              </p>
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
      </div>
    </container>
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
.story-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  background-color: #f7f7f7;
  padding: 0 60px;
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
  transition: all linear 0.1s;
}
.content {
  display: flex;
  padding-bottom: 100px;
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
.content__columns_link-1 {
  width: 106px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  margin-top: 0;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
}
.content__columns_link-1:hover {
  opacity: 0.7;
}

.content__columns_link-2 {
  width: 108px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
  color: #a2a2a2;
  cursor: pointer;
}
.content__columns_link-2:hover {
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
    padding: 50px;
    padding-top: 0;
    padding-bottom: 0;
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
@media screen and (max-width: 1024px) {
  .content__about-title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
    margin-right: 49px;
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
  .content__columns_link-1 {
    font-size: 15px;
    line-height: 19px;
    width: 89px;
  }
  .content__columns_link-2 {
    font-size: 15px;
    line-height: 19px;
    width: 90px;
  }

  .story-button {
    width: 230px;
    height: 46px;
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
  .content__columns_link-1 {
    margin: 0 0 30px;
    margin-right: 30px;
  }
  .content__columns_link-2 {
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
  }
  .content__columns-text {
    margin-bottom: 50px;
  }
  .content__columns-text-2 {
    margin-bottom: 88px;
  }
  .content__about-paragraph {
    padding-bottom: 0;
  }
}
@media screen and (max-width: 512px) {
  .story-input {
    margin: 0;
    padding: 0;
    margin-bottom: 50px;
  }
  .story-button {
    width: 290px;
    height: 40px;
  }
  .content {
    padding: 0 15px 50px;
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
  .content__columns_link-1 {
    width: 77px;
    font-size: 13px;
    line-height: 19px;
    margin: 0 0 20px;
    margin-right: 16px;
  }
  .content__columns_link-2 {
    width: 78px;
    font-size: 13px;
    line-height: 19px;
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
