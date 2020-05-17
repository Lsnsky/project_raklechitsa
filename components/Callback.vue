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
      let invalid = true;
      for (let i = 1; i <= 4; i++) {
        invalid =
          typeof this.answers[this.getQuestions[i]] === 'undefined' ||
          this.answers[this.getQuestions[i]].length === 0
            ? true
            : false;
      }
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
  width: 400px;
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
</style>
