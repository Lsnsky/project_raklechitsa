<template>
  <popup
    :popDisplay="isQuestionnaireActive()"
    class="questionnaire"
    @closeClick="closeQuestionnaire"
    :titleText="title()"
    :titlePosition="position()"
  >
    <p v-if="id < 12" class="questionnaire__question">
      <question class="questionnaire__mainquestion"
        >{{ question.mainQest }}
      </question>
      <span class="questionnaire__subquestion">{{ question.qest }}</span>
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
      return this.answer.length === 0 ? false : true;
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
      this.$store.dispatch('questionnaire/closeQuestionnaire');
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
      answer: '',
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
  left: 347px;
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
  width: 91%;
  margin: 0 40px;
  height: 24px;
  padding: 0 0 10px;
  position: absolute;
  top: 274px;
  left: 0;
  max-height: 200px;
  max-width: 840px;
}

.questionnaire__question {
  margin: 40px 0 0 40px;
  width: 91%;
}

.questionnaire__subquestion {
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  width: 91%;
}

.questionnaire__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 40px 0 0 40px;
}

.questionnaire__title_step_last {
  text-align: center;
}
</style>
