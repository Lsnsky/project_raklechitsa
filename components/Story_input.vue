<template>
  <section class="story-input">
    <div class="content">
      <div class="content__about">
        <h2 class="content__about_title">Расскажите свою историю</h2>
        <p class="content__about_paragraph">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </p>
      </div>
      <div class="content__columns">
        <div id="app" class="content__columns_descriotion">
          <p
            @click="clickOn"
            class="content__columns_link-1"
            :class="{ noActive: isNoActive }"
          >
            1-й вариант
          </p>
          <p
            @click="clickOff"
            class="content__columns_link-2"
            :class="{ active: isActive }"
          >
            2-й вариант
          </p>
        </div>
        <div class="content__columns_main-text">
          <p v-if="defaultStatus" class="content__columns_text">
            Заполнить подробную форму прямо на сайте и мы опубликуем вашу
            историю после проверки. Пожалуйста, заполняйте все пункты корректно,
            если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
          </p>
          <p v-else-if="toogle" class="content__columns_text-2">
            Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
            зададим вопросы, уточним детали вашей истории.
          </p>
          <story-button
            @QuestionnaireOpen="QuestionnaireOpen"
            class="button-search"
            :class="{ buttonPosition: isActive }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button_search from '@/components/ui/Button_search';

export default {
  components: {
    'story-button': Button_search,
  },
  data() {
    return {
      defaultStatus: true,
      toogle: false,
      isActive: false,
      isNoActive: false,
    };
  },
  methods: {
    clickOn() {
      this.defaultStatus = true;
      this.toogle = false;
      this.isNoActive = false;
      this.isActive = false;
    },
    clickOff() {
      this.defaultStatus = false;
      this.toogle = true;
      this.isNoActive = true;
      this.isActive = true;
    },
    QuestionnaireOpen() {
      this.$store.commit('questionnaire/openQuestionnaire');
    },
  },
};
</script>

<style scoped>
.story-input {
  max-width: 1440px;
  height: 522px;
  background-color: #f7f7f7;
  margin: 0px auto 100px;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  margin-left: 60px;
  margin-right: 60px;
}
.content__about {
  display: flex;
  flex-direction: column;
}
.content__about_title {
  width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  margin-top: 100px;
  margin-bottom: 32px;
  margin-right: 73px;
}
.content__about_paragraph {
  width: 340px;
  height: 66px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
.content__columns_descriotion {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.content__columns {
  display: flex;
  margin-top: 204px;
  margin-left: 0;
}
.content__columns_link-1 {
  width: 106px;
  height: 22px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
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

.content__columns_main-text {
  max-width: 655px;
  height: 242px;
  color: #666666;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-left: 40px;
}
.content__columns_text {
  margin: 0;
}
.content__columns_text-2 {
  margin: 0;
}
.button-search {
  margin-top: 78px;
}

@media screen and (max-width: 1280px) {
  .story-input {
    max-width: 100%;
    height: 626px;
  }
  .content {
    margin-left: 50px;
    margin-right: 50px;
  }

  .content__about_title {
    width: 367px;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 30px;
    margin-right: 49px;
  }
  .content__about_paragraph {
    margin-top: 0;
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
  .content__columns_main-text {
    max-width: 570px;
  }
}
@media screen and (max-width: 1184px) {
  .story-input {
    height: 571px;
  }
  .content__about_title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
    margin-right: 49px;
    width: 288px;
  }
  .content__about_paragraph {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
  .content__columns_main-text {
    max-width: 447px;
    font-size: 15px;
    line-height: 19px;
    margin-left: 30px;
  }
  .content__columns_brief {
    font-size: 15px;
    line-height: 19px;
    width: 89px;
  }
  .content__columns_paragraph {
    font-size: 15px;
    line-height: 19px;
    width: 90px;
  }
}
@media screen and (max-width: 960px) {
  .story-input {
    width: 100%;
    height: 660px;
  }
  .content__columns {
    flex-direction: column;
    margin: 0 auto 0;
  }
  .content {
    flex-direction: column;
  }
  .content__columns_brief {
    margin: 0 0 30px;
    margin-right: 30px;
  }
  .content__columns_paragraph {
    margin: 0 0 33px;
  }
  .content__about_title {
    width: 380px;

    margin: 0 auto 26px;
    text-align: center;
  }
  .content__about {
    margin: 80px auto 80px;
  }
  .content__columns_descriotion {
    flex-direction: row;
  }
  .content__columns_main-text {
    max-width: 380px;
    margin: 0 auto 0;
  }
  .content__about_paragraph {
    max-width: 380px;
    margin-bottom: 0;
  }
  .content__columns_text {
    margin-bottom: 93px;
  }
}
@media screen and (max-width: 768px) {
  .story-input {
    width: 768px;
  }

  .active {
    color: #000000;
  }
  .noActive {
    color: #a2a2a2;
  }
  .buttonPosition {
    margin-top: 122px;
  }
}
</style>
