<template>
  <popup
    :popDisplay="isCallbackActive()"
    titleText="Оставьте контакт для связи"
    titlePosition="left"
    class="callback"
    @closeClick="toggleCallback"
  >
    <question class="callback__main-quest">{{ getQuestions[0] }}</question>
    <question class="callback__quest">{{ getQuestions[1] }}</question>
    <main-input
      class="callback__input"
      placeholder="Напишите тут"
      type="text"
      :hasData="
        typeof answers[getQuestions[1]] === 'undefined' ||
        answers[getQuestions[1]].length === 0
          ? false
          : true
      "
      v-model="answers[getQuestions[1]]"
      :bordered="false"
    />
    <div class="callback__container">
      <div class="callback__wrapper">
        <question class="callback__small-quest">{{ getQuestions[2] }}</question>
        <main-input
          class="callback__small-input"
          placeholder="pochta@example.com"
          type="email"
          :hasData="
            typeof answers[getQuestions[2]] === 'undefined' ||
            answers[getQuestions[2]].length === 0
              ? false
              : true
          "
          v-model="answers[getQuestions[2]]"
          :bordered="false"
        />
      </div>
      <div class="callback__wrapper">
        <question class="callback__small-quest">{{ getQuestions[3] }}</question>
        <main-input
          class="callback__small-input"
          placeholder="+7 000 000 00 00"
          type="text"
          v-model="answers[getQuestions[3]]"
          :hasData="
            typeof answers[getQuestions[3]] === 'undefined' ||
            answers[getQuestions[3]].length === 0
              ? false
              : true
          "
          :bordered="false"
        />
      </div>
    </div>

    <question class="callback__quest">{{ getQuestions[4] }}</question>
    <main-input
      class="callback__input"
      placeholder="Телефон / почта и удобное время"
      type="text"
      v-model="answers[getQuestions[4]]"
      :hasData="
        typeof answers[getQuestions[4]] === 'undefined' ||
        answers[getQuestions[4]].length === 0
          ? false
          : true
      "
      :bordered="false"
    />
    <div class="callback__container">
      <main-button
        class="callback__button"
        color="purple"
        :disabled="hasInvalidInput()"
        @buttonClick="saveAnswers"
      >
        Отправить
      </main-button>
      <policy class="callback__policy"> </policy>
    </div>
  </popup>
</template>

<script>
import Popup from '@/components/Popup';
import mainInput from '@/components/ui/mainInput';
import Button from '@/components/ui/Button';
import Question from '@/components/ui/Question';
import Policy_text from '@/components/ui/Policy_text';
export default {
  components: {
    popup: Popup,
    'main-input': mainInput,
    'main-button': Button,
    question: Question,
    policy: Policy_text,
  },
  methods: {
    hasInvalidInput() {
      let validity = [];
      let invalid = true;
      for (let i = 0; i <= 3; i++) {
        validity[i] = !(
          typeof this.answers[this.getQuestions[i + 1]] === 'undefined' ||
          this.answers[this.getQuestions[i + 1]].length === 0
        );
      }
      invalid = !validity.reduce((summ, item) => {
        return item && summ;
      });
      return invalid;
    },
    isCallbackActive() {
      return this.getCallbackState ? 'visible' : 'invisible';
    },
    toggleCallback() {
      this.$store.commit('callback/toggleCallback');
    },
    saveAnswers() {
      this.$store.commit('callback/saveAnswers', this.answers);
      this.toggleCallback();
    },
  },
  computed: {
    getCallbackState() {
      return this.$store.getters['callback/getCallbackState'];
    },
    getQuestions() {
      return this.$store.getters['callback/getQuestions'];
    },
  },
  data() {
    return {
      answers: {},
    };
  },
};
</script>

<style scoped>
.callback /deep/ .popup__container {
  display: flex;
  flex-direction: column;
}

.callback__main-quest {
  margin: 40px 40px 50px;
  max-width: 840px;
}

.callback__quest {
  margin: 0 40px 40px;
}

.callback__input {
  margin: 0 40px 40px;
  padding-bottom: 10px;
}

.callback__container {
  display: flex;
  margin: 0 0 38px;
  width: 100%;
}

.callback__wrapper {
  width: calc(50% - 60px);
  margin: 0 0 0 40px;
}

.callback__small-quest {
  margin: 0 0 40px;
  width: 100%;
}
.callback__small-input {
  margin: 40px 0 0;
  width: calc(100%);
  padding-bottom: 10px;
}
.callback__button {
  width: 226px;
  height: 52px;
  margin: 6px 30px 0 40px;
}
.callback__policy {
  margin: 15px 0 0;
}

@media screen and (max-width: 1280px) {
  .callback /deep/ .popup__container {
    overflow: auto;
    max-width: 800px;
  }

  .callback /deep/ .popup__title {
    font-size: 28px;
    line-height: 32px;
  }
  .callback__input {
    margin-bottom: 36px;
  }
}

@media screen and (max-width: 820px) {
  .callback /deep/ .popup__container {
    max-width: 580px;
  }

  .callback__input {
    margin: 0 40px 37px;
    font-size: 15px;
    line-height: 19px;
    max-height: 19px;
  }

  .callback__main-quest {
    margin: 50px 40px 39px;
  }
  .callback__container {
    margin-bottom: 37px;
  }
  .callback__small-input {
    font-size: 15px;
    line-height: 19px;
    max-height: 19px;
  }
  .callback__button {
    width: 200px;
    height: 46px;
    margin: 10px 30px 0 40px;
  }
  .callback__policy {
    font-size: 11px;
    line-height: 13px;
    max-width: 270px;
    margin: 23px 0 0;
  }
}

@media screen and (max-width: 600px) {
  .callback /deep/ .popup__container {
    max-width: 290px;
  }

  .callback /deep/ .popup__title {
    font-size: 18px;
    line-height: 21px;
    max-width: 185px;
  }
  .callback__input {
    margin: 0 15px 30px;
    font-size: 13px;
    line-height: 16px;
  }

  .callback__main-quest {
    margin: 35px 15px 30px;
  }
  .callback__container {
    margin: 0;
    flex-direction: column;
  }
  .callback__small-input {
    font-size: 13px;
    line-height: 16px;
    margin: 20px 0 0;
  }
  .callback__button {
    width: 260px;
    height: 40px;
    margin: 5px 15px 0;
  }
  .callback__policy {
    max-width: 260px;
    margin: 10px 15px 15px;
  }

  .callback__wrapper {
    width: calc(100% - 30px);
    margin: 0 15px 30px;
  }

  .callback__quest {
    margin: 0 15px 20px;
  }
}

@media screen and (max-height: 728px) and (min-width: 1280px) {
  .callback /deep/ .popup__container {
    overflow: auto;
    height: 100%;
  }
}

@media screen and (max-height: 710px) and (max-width: 1280px) and (min-width: 600px) {
  .callback /deep/ .popup__container {
    overflow: auto;
    height: 100%;
  }
}
@media screen and (max-height: 698px) and (max-width: 600px) {
  .callback /deep/ .popup__container {
    overflow: auto;
    height: 100%;
  }
}
</style>
