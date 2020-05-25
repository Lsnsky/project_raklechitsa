<template>
  <popup
    :popDisplay="isQuestionnaireActive()"
    class="questionnaire"
    @closeClick="closeQuestionnaire"
    :titleText="title()"
    :titlePosition="position()"
  >
    <p v-if="id < 12" class="questionnaire__question">
      <question class="questionnaire__mainquestion">{{
        question.mainQest
      }}</question
      ><span class="questionnaire__subquestion">{{ question.qest }}</span>
    </p>
    <main-input
      v-if="id < 12"
      placeholder="Напишите тут"
      type="text"
      :hasData="hasData()"
      v-model="answer"
      :bordered="false"
      class="questionnaire__input"
    />
    <main-button
      v-if="id < 12"
      class="questionnaire__back"
      color="none"
      :disabled="this.id === 0"
      @buttonClick="previousQuestion"
    >
      Назад
    </main-button>
    <main-button
      v-if="this.id < 12"
      class="questionnaire__further"
      color="purple"
      :disabled="!hasData()"
      @buttonClick="nextQuestion"
    >
      {{ buttonNext() }}
    </main-button>
    <main-button
      v-else
      class="questionnaire__further questionnaire__further_step_last"
      color="purple"
      :disabled="false"
      @buttonClick="closeQuestionnaire"
    >
      Закрыть
    </main-button>
    <policy v-if="id === 11" class="questionnaire__politica"> </policy>
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
      return this.id < 11 ? 'Далее' : 'Отправить';
    },
    hasData() {
      return !(this.answer.length === 0);
    },
    title() {
      return this.id === 12
        ? 'Спасибо что приняли участие!'
        : `Шаг ${this.question.id} из 12`;
    },
    position() {
      return this.id === 12 ? 'center' : 'left';
    },
    isQuestionnaireActive() {
      return this.getQuestionnaireState ? 'visible' : 'invisible';
    },
    previousQuestion() {
      this.$store.dispatch('questionnaire/previousQuestion').then(item => {
        this.answer = typeof item === 'undefined' ? '' : item;
      });
    },
    nextQuestion() {
      this.$store
        .dispatch('questionnaire/nextQuestion', this.answer)
        .then(item => {
          this.answer = typeof item === 'undefined' ? '' : item;
        });
    },
    closeQuestionnaire() {
      this.$store.dispatch('questionnaire/closeQuestionnaire').then(item => {
        this.answer = typeof item === 'undefined' ? '' : item;
      });
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
  },
  data() {
    return {
      answer: this.getCurrentAnswer || '',
    };
  },
};
</script>

<style scoped>
.questionnaire /deep/ .popup__container {
  width: 920px;
  height: 600px;
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

.questionnaire__further:hover {
  opacity: 0.9;
}

.questionnaire__further_step_last {
  left: calc(50% - 100px);
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
  }

  .questionnaire__input {
    height: 20px;
    top: 232px;
    font-size: 16px;
    line-height: 22px;
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
    height: 520px;
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
  .questionnaire__politica {
    bottom: 40px;
    left: 325px;
  }
}

@media screen and (max-width: 650px) {
  .questionnaire /deep/ .popup__container {
    width: 290px;
    height: 520px;
  }

  .questionnaire__input {
    top: 245px;
    font-size: 15px;
    line-height: 19px;
    width: calc(100% - 30px);
    margin: 0 15px;
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
    margin: 0 15px;
  }

  .questionnaire__question {
    margin: 30px 15px 0;
    width: calc(100% - 30px);
  }

  .questionnaire__mainquestion {
    width: 100%;
  }

  .questionnaire__politica {
    bottom: 65px;
    left: 15px;
  }
}
</style>
