<template>
  <popup
    :popDisplay="getQuestionnaireState"
    class="questionnaire"
    @closeClick="closeQuestionnaire"
    :titleText="title()"
    :titlePosition="position()"
    :isItForm="true"
    @formSubmit="nextQuestion"
    formName="Questionnaire"
    :noValidate="true"
    :closeButton="this.id !== 13"
  >
    <p v-if="id < 13" class="questionnaire__question">
      <question class="questionnaire__mainquestion">{{
        question.mainQest
      }}</question>
      <span class="questionnaire__subquestion">{{ question.qest }}</span>
    </p>
    <main-input
      v-if="id < 11"
      required="required"
      placeholder="Напишите тут"
      :type="id === 12 ? 'email' : 'text'"
      :hasData="this.validity"
      v-model="answer"
      :bordered="false"
      class="questionnaire__input"
      @input="checkValidity"
    />
    <main-input
      v-if="id === 11"
      required="required"
      pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
      placeholder="Напишите тут"
      type="text"
      :hasData="this.validity"
      v-model="answer"
      :bordered="false"
      class="questionnaire__input"
      @input="checkValidity"
    />
    <main-input
      v-if="id === 12"
      required="required"
      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      placeholder="Напишите тут"
      type="email"
      :hasData="this.validity"
      v-model="answer"
      :bordered="false"
      class="questionnaire__input"
      @input="checkValidity"
    />
    <p class="questionnaire__error-massage">{{ this.error }}</p>
    <main-button
      v-if="id < 13"
      class="questionnaire__back"
      color="none"
      type="button"
      :disabled="this.id === 0"
      @buttonClick="previousQuestion"
      >Назад</main-button
    >
    <main-button
      v-if="this.id < 13"
      class="questionnaire__further"
      color="purple"
      type="submit"
      :disabled="!this.validity"
      @buttonClick="nextQuestion"
      >{{ buttonNext() }}</main-button
    >

    <main-button
      v-else
      class="questionnaire__further questionnaire__further_step_last"
      color="purple"
      :disabled="false"
      @buttonClick="closeQuestionnaire"
      >Закрыть</main-button
    >
    <p class="qusetionnaire__global-error" v-if="this.errorMessage">
      {{ this.errorMessage }}
    </p>
    <policy
      v-if="id === 12"
      :class="[
        'questionnaire__politica',
        {
          questionnaire__politica_lower: this.errorMessage,
        },
      ]"
    ></policy>
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
    buttonNext() {
      return this.id < 12 ? 'Далее' : 'Отправить';
    },
    title() {
      return this.id === 13
        ? 'Спасибо что приняли участие!'
        : `Шаг ${this.question.id} из 13`;
    },
    position() {
      return this.id === 13 ? 'center' : 'left';
    },
    async previousQuestion() {
      await this.$store.commit('questionnaire/previousId');
      this.answer = this.getCurrentAnswer || '';
      this.setDefault();
      this.errorMessage = '';
    },
    async nextQuestion() {
      let notError = true;
      if (this.id === 12) {
        notError = false;
      }
      await this.$store
        .dispatch('questionnaire/nextQuestion', this.answer)
        .then(item => {
          this.errorMessage = item;
          if (notError) {
            this.answer = this.getCurrentAnswer || '';
          }
        });

      this.setDefault();
    },
    async closeQuestionnaire() {
      await this.$store.dispatch('questionnaire/closeQuestionnaire');
      this.answer = '';
      this.errorMessage = '';
      this.setDefault();
    },
    setDefault() {
      if (this.answer) {
        this.validity = true;
        this.error = '';
      } else {
        this.validity = false;
        this.error = '';
      }
    },
    checkValidity() {
      const input = document.forms.Questionnaire.querySelector('input');
      this.validity = input.validity.valid;
      this.error = input.validationMessage;
    },
  },

  computed: {
    question() {
      return this.$store.getters['questionnaire/getQuestion'];
    },
    id() {
      return this.$store.getters['questionnaire/getId'];
    },
    getQuestionnaireState() {
      return this.$store.getters['questionnaire/getQuestionnaireState'];
    },
    getCurrentAnswer() {
      return this.$store.getters['questionnaire/getCurrentAnswer'];
    },
    getAnswers() {
      return this.$store.getters['questionnaire/getAnswers'];
    },
  },
  data() {
    return {
      answer: this.getCurrentAnswer || '',
      error: '',
      validity: false,
      errorMessage: '',
    };
  },
  mounted() {
    this.validity = document.forms.Questionnaire.querySelector(
      'input'
    ).validity.valid;
  },
};
</script>

<style scoped>
.questionnaire__error-massage {
  margin: 0 40px;
  width: calc(100% - 80px);
  color: red;
  position: absolute;
  font-size: 14px;
  max-height: 35px;
  overflow: hidden;
  top: 315px;
  left: 0;
}
.questionnaire /deep/ .popup__container {
  width: 920px;
  height: 600px;
}

.qusetionnaire__global-error {
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  display: block;
  margin: 0;
  padding: 16px 25px;
  width: calc(100% - 50px);
  color: #ff0000;
  background: #f0f0f0;
  position: absolute;
  bottom: -48px;
  left: 0;
}

.questionnaire__politica {
  position: absolute;
  bottom: 49px;
  left: 374px;
}

.questionnaire_display_visible {
  visibility: visible;
  opacity: 1;
}

.questionnaire__further {
  position: absolute;
  bottom: 40px;
  left: 118px;
  padding: 0;
  width: 226px;
  height: 52px;
}

.questionnaire__further_step_last {
  left: calc(50% - 105px);
}

.questionnaire__back {
  position: absolute;
  bottom: 56px;
  left: 40px;
  width: 48px;
  height: 20px;
}

.questionnaire__back:hover {
  opacity: 0.8;
}

.questionnaire__input {
  width: calc(100% - 80px);
  margin: 0 40px;
  height: 24px;
  padding: 0 0 10px;
  position: absolute;
  top: 274px;
  left: 0;
  max-width: 840px;
}

.questionnaire__mainquestion {
  width: calc(100% - 80px);
}

.questionnaire__question {
  margin: 40px 40px 0;
  width: calc(100% - 80px);
}

.questionnaire__subquestion {
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  width: calc(100% - 80px);
}

.questionnaire__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 40px 0 0 40px;
}

.questionnaire__title_step_last {
  text-align: center;
  left: calc(50% - 100px);
}

@media screen and (max-width: 1280px) {
  .questionnaire /deep/ .popup__container {
    width: 800px;
    height: 520px;
    min-height: 520px;
  }

  .questionnaire__input {
    height: 20px;
    top: 232px;
    font-size: 16px;
    line-height: 22px;
  }

  .questionnaire__error-massage {
    top: 270px;
  }

  .questionnaire__further {
    width: 200px;
    height: 48px;
  }
  .questionnaire__back {
    bottom: 54px;
    left: 40px;
    width: 48px;
    height: 20px;
  }

  .questionnaire__subquestion {
    font-size: 16px;
    line-height: 22px;
  }

  .questionnaire__politica {
    bottom: 45px;
    left: 335px;
  }
}

@media screen and (max-width: 900px) {
  .questionnaire /deep/ .popup__container {
    width: 580px;
  }

  .questionnaire__input {
    top: 230px;
    font-size: 15px;
    line-height: 19px;
  }

  .questionnaire__further {
    height: 46px;
  }
  .questionnaire__back {
    bottom: 53px;
  }

  .questionnaire__subquestion {
    font-size: 15px;
    line-height: 19px;
  }

  .qusetionnaire__global-error {
    bottom: -44px;
    font-size: 11px;
    line-height: 13px;
  }
  .questionnaire__politica {
    bottom: -59px;
    left: 0;
    max-width: 100%;
    padding: 25px 40px;
    background-color: #ededed;
  }
  .questionnaire__politica_lower {
    bottom: -127px;
  }
}

@media screen and (max-width: 600px) {
  .questionnaire /deep/ .popup__container {
    width: 290px;
  }

  .questionnaire__input {
    top: 245px;
    width: calc(100% - 30px);
    margin: 0 15px;
  }
  .questionnaire__error-massage {
    width: calc(100% - 30px);
    margin: 0 15px;
    font-size: 9px;
    top: 285px;
  }
  .questionnaire__further {
    height: 40px;
    width: 206;
    left: 69px;
    bottom: 15px;
  }

  .questionnaire__back {
    width: 39px;
    height: 16px;
    bottom: 27px;
    left: 15px;
  }

  .questionnaire__subquestion {
    font-size: 13px;
    line-height: 16px;
    width: 100%;
  }

  .questionnaire__question {
    margin: 30px 15px 0;
    width: calc(100% - 30px);
  }

  .questionnaire__mainquestion {
    width: 100%;
  }

  .questionnaire__politica {
    bottom: -60px;
    padding: 17px 15px;
    left: 0;
    font-size: 11px;
    line-height: 13px;
  }
  .qusetionnaire__global-error {
    bottom: -45px;
    font-size: 11px;
    line-height: 13px;
    width: calc(100% - 30px);
    padding: 12px 15px;
  }

  .questionnaire__politica_lower {
    bottom: -104px;
  }
  .questionnaire__further_step_last {
    left: calc(50% - 100px);
  }
}

@media screen and (max-height: 520px) and (min-width: 1280px) {
  .questionnaire /deep/ .popup__container {
    overflow: auto;
    height: 100%;
  }
}

@media screen and (max-height: 654px) and (max-width: 1280px) {
  .questionnaire /deep/ .popup__container {
    overflow: scroll;
    height: 100%;
  }
}
@media screen and (max-height: 704px) and (max-width: 900px) {
  .questionnaire /deep/ .popup__container {
    overflow: scroll;
    height: 100%;
  }
}
</style>
