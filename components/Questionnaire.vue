<template>
  <popup
    :popDisplay="isQuestionnaireActive()"
    class="questionnaire"
    @closeClick="closeQuestionnaire"
    :titleText="title()"
    :titlePosition="position()"
  >
    <p v-if="id < 12" class="questionnaire__question">
      <span class="questionnaire__mainquestion">{{ question.mainQest }} </span
      >{{ question.qest }}
    </p>
    <main-input
      v-if="id < 12"
      placeholder="Напишите тут"
      type="text"
      :hasData="hasData()"
      v-model="answer"
      bordered="flase"
      class="questionnaire__input"
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
      @click="nextQuestion"
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
  </popup>
</template>

<script>
import Popup from '@/components/Popup';
import Input from '@/components/ui/Input';
export default {
  components: {
    popup: Popup,
    'main-input': Input,
  },
  methods: {
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
