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
        <div class="content__columns_descriotion">
          <p @click="clickOn" class="content__columns_brief">1-й вариант</p>
          <p @click="clickOff" class="content__columns_paragraph">
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
          <story-button class="button-search" />
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
  methods: {
    clickOn() {
      this.defaultStatus = true;
      this.toogle = false;
    },
    clickOff() {
      this.defaultStatus = false;
      this.toogle = true;
    },
  },
  data() {
    return {
      defaultStatus: true,
      toogle: false,
    };
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
.content__columns_brief {
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
}

.content__columns_paragraph {
  width: 108px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
  color: #a2a2a2;
  cursor: pointer;
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
  margin-top: 0;
}
.content__columns_text-2 {
  margin-top: 0;
}
.button-search {
  margin-top: 78px;
}
</style>
