<template>
  <popup :popDisplay="isQuestionnaireActive()">
    <h2 v-if="id < 12" class="questionnaire__title">
      Шаг {{ question.id }} из 12
    </h2>
    <h2
      v-if="id === 12"
      class="questionnaire__title questionnaire__title_step_last"
    >
      Спасибо что приняли участие!
    </h2>
    <p v-if="id < 12" class="questionnaire__question">
      <span class="questionnaire__mainquestion">{{ question.mainQest }} </span
      >{{ question.qest }}
    </p>
    <input
      v-if="id < 12"
      autofocus
      class="questionnaire__input"
      placeholder="Напишите тут"
      required
      v-model="answers[id]"
    />
    <button
      v-if="id < 12"
      type="button"
      class="questionnaire__back"
      @click="previousQuestion"
    >
      Назад
    </button>
    <button v-if="id < 11" class="questionnaire__further" @click="nextQuestion">
      Далее
    </button>
    <button
      v-if="id === 11"
      class="questionnaire__further"
      @click="saveAnswers"
    >
      Отправить
    </button>
    <button
      v-if="this.id === 12"
      type="submit"
      class="questionnaire__further questionnaire__further_step_last"
      @click="closeQuestionnaire"
    >
      Закрыть
    </button>
    <p v-if="id === 11" class="questionnaire__politica">
      Нажимая на кнопку «отправить», вы даете согласие на
      <nuxt-link to="/policy" class="questionnaire__link" target="_blank"
        >обработку персональных данных</nuxt-link
      >
    </p>
    <button
      type="button"
      class="questionnaire__close"
      @click="closeQuestionnaire"
    ></button>
  </popup>
</template>

<script>
import popup from '@/components/popup';
export default {
  components: {
    popup: popup,
  },
  methods: {
    isQuestionnaireActive() {
      return this.getQuestionnaireState ? 'visible' : 'invisible';
    },
    previousQuestion() {
      this.$store.commit('questionnaire/previousQuestion');
    },
    nextQuestion() {
      this.$store.commit('questionnaire/nextQuestion');
    },
    saveAnswers() {
      this.$store.commit('questionnaire/saveAnswer', this.answers);
      this.nextQuestion();
      this.answers = ['', '', '', '', '', '', '', '', '', '', '', ''];
    },
    closeQuestionnaire() {
      this.$store.commit('questionnaire/closeQuestionnaire');
      this.$store.commit('questionnaire/resetQuestionnaire');
    },
  },
  computed: {
    question() {
      return this.$store.getters['questionnaire/getQuestion'];
    },
    answer() {
      return this.$store.getters['questionnaire/getAnswer'];
    },
    id() {
      return this.$store.getters['questionnaire/getId'];
    },
    getQuestionnaireState() {
      return this.$store.getters['questionnaire/getQuestionnaireState'];
    },
  },
  data() {
    return {
      answers: ['', '', '', '', '', '', '', '', '', '', '', ''],
    };
  },
};
</script>

<style scoped>
.questionnaire__politica {
  display: block;
  position: absolute;
  bottom: 49px;
  left: 374px;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  max-width: 378px;
  color: #666666;
  margin: 0;
}

.questionnaire__link {
  color: inherit;
}

.questionnaire__link:hover {
  opacity: 0.8;
}

.questionnaire_display_visible {
  visibility: visible;
  opacity: 1;
}

.questionnaire__further {
  border: none;
  background-color: #714dbd;
  outline: none;
  position: absolute;
  bottom: 40px;
  left: 118px;
  padding: 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: 226px;
  height: 52px;
  color: #fff;
  cursor: pointer;
  transition: all linear 0.1s;
}

.questionnaire__further:hover {
  opacity: 0.9;
}

.questionnaire__further_step_last {
  left: 347px;
}

.questionnaire__back {
  border: none;
  background-color: #fff;
  outline: none;
  position: absolute;
  bottom: 56px;
  left: 40px;
  padding: 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: 48px;
  height: 20px;
  cursor: pointer;
  transition: all linear 0.1s;
}

.questionnaire__back:hover {
  opacity: 0.8;
}

.questionnaire__input {
  display: block;
  width: 91%;
  margin: 0 40px;
  min-height: 24px;
  height: 24px;
  border: none;
  outline: none;
  padding: 0 0 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  position: absolute;
  top: 274px;
  left: 0;
  border-bottom: 1px solid #eee;
  max-height: 200px;
  max-width: 840px;
}

.questionnaire__mainquestion {
  font-weight: bold;
  color: #000;
}

.questionnaire__question {
  margin: 40px 0 0 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  width: 91%;
}

.questionnaire__close {
  background-position: center;
  background-image: url('../static/images/hider-open.svg');
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: none;
  outline: none;
  position: absolute;
  top: 36px;
  right: 36px;
  cursor: pointer;
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
