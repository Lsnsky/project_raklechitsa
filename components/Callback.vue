<template>
  <popup
    :popDisplay="getCallbackState"
    titleText="Оставьте контакт для связи"
    titlePosition="left"
    class="callback"
    :isItForm="true"
    @closeClick="toggleCallback"
    @formSubmit="saveAnswers"
    formName="Callback"
  >
    <question class="callback__main-quest">
      {{ getQuestions[0].quest }}
    </question>
    <question class="callback__quest">{{ getQuestions[1].quest }}</question>
    <div class="callback__input-wrapper">
      <main-input
        class="callback__input"
        placeholder="Напишите тут"
        type="text"
        :hasData="this.validity[0]"
        pattern="[ёЁА-Яа-яA-Za-z -]{1,}"
        v-model="answers[getQuestions[1].key]"
        :bordered="false"
        :required="true"
        @input="checkValidity(0)"
      />
      <p class="callback__error-massage">{{ this.errors[0] }}</p>
      <!-- Решили вынести валидационные ошибки под инпуты,
      чтобы сохранить плэйсхолдеры, для более ясного понимания пользователем
      формата вводимых данных, а также для возможности отображения
      ошибок формата вводимых данных -->
    </div>
    <div class="callback__container">
      <div class="callback__wrapper">
        <question class="callback__small-quest">
          {{ getQuestions[2].quest }}
        </question>
        <div class="callback__input-wrapper">
          <main-input
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            class="callback__small-input"
            placeholder="pochta@example.com"
            type="email"
            :hasData="this.validity[1]"
            v-model="answers[getQuestions[2].key]"
            :bordered="false"
            :required="true"
            @input="checkValidity(1)"
          />
          <p
            class="callback__error-massage callback__error-massage_input_small"
          >
            {{ this.errors[1] }}
          </p>
        </div>
      </div>
      <div class="callback__wrapper">
        <question class="callback__small-quest">
          {{ getQuestions[3].quest }}
        </question>
        <div class="callback__input-wrapper">
          <main-input
            class="callback__small-input"
            placeholder="+7 000 000 00 00"
            type="text"
            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            v-model="answers[getQuestions[3].key]"
            :hasData="this.validity[2]"
            :bordered="false"
            :required="true"
            @input="checkValidity(2)"
          />
          <p
            class="callback__error-massage callback__error-massage_input_small"
          >
            {{ this.errors[2] }}
          </p>
        </div>
      </div>
    </div>

    <question class="callback__quest">{{ getQuestions[4].quest }}</question>
    <div class="callback__input-wrapper">
      <main-input
        class="callback__input"
        placeholder="Телефон / почта и удобное время"
        type="text"
        v-model="answers[getQuestions[4].key]"
        :hasData="this.validity[3]"
        :bordered="false"
        :required="true"
        @input="checkValidity(3)"
      />
      <p class="callback__error-massage">{{ this.errors[3] }}</p>
    </div>
    <div class="callback__container">
      <main-button
        class="callback__button"
        color="purple"
        :disabled="hasInvalidInput()"
        type="submit"
        @buttonClick="saveAnswers"
        >Отправить</main-button
      >
      <policy class="callback__policy"></policy>
    </div>
    <p class="callback__form-error" v-if="hasInvalidInput() || this.postError">
      {{ globalErrorMessage }}
    </p>
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
    checkValidity(input) {
      const inputs = Array.from(
        document.forms.Callback.querySelectorAll('input')
      );
      inputs.forEach((item, i) => {
        this.validity[i] = item.validity.valid;
      });
      this.errors[input] = inputs[input].validationMessage;
    },
    hasInvalidInput() {
      return !this.validity.reduce((summ, item) => {
        return item && summ;
      }, true);
    },
    toggleCallback() {
      this.$store.commit('callback/toggleCallback');
      this.answers = {};
      this.setDefault();
    },
    setDefault() {
      this.errors = [
        'Введите имя.',
        'Введите почту.',
        'Введите номер телефона.',
        'Введите контакты для связи и удобное время.',
      ];
      this.globalErrorMessage = 'Заполните все поля.';
      Array.from(document.forms.Callback.querySelectorAll('input')).forEach(
        (item, i) => {
          this.validity[i] = false;
        }
      );
    },
    saveAnswers() {
      this.$store
        .dispatch('callback/saveAnswers', Object.assign({}, this.answers))
        .then(item => {
          this.globalErrorMessage = item;
          this.postError = false;
          if (item) {
            this.postError = true;
          } else {
            this.answers = {};
            this.setDefault();
          }
        });
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
  mounted() {
    this.setDefault();
  },
  data() {
    return {
      answers: {},
      validity: [],
      errors: [],
      globalErrorMessage: '',
      postError: false,
    };
  },
};
</script>

<style scoped>
.callback /deep/ .popup__container {
  display: flex;
  flex-direction: column;
}

.callback__form-error {
  width: 100%;
  margin: 0;
  padding: 16px 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ff0000;
  background: #f0f0f0;
}

.callback__error-massage {
  margin: 0;
  color: red;
  position: absolute;
  top: 42px;
  left: 40px;
  font-size: 12px;
  max-height: 30px;
  overflow: hidden;
}

.callback__error-massage_input_small {
  left: 0;
}

.callback__input-wrapper {
  width: 100%;
  position: relative;
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
  width: calc(100% - 80px);
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
  .callback__form-error {
    width: calc(100% - 50px);
    font-size: 11px;
    line-height: 13px;
    padding: 18px 25px;
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

  .callback__error-massage {
    font-size: 10px;
    line-height: 10px;
    top: 33px;
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
    width: calc(100% - 30px);
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
  .callback__error-massage {
    top: 31px;
    left: 15px;
  }
}

@media screen and (max-height: 778px) and (min-width: 1280px) {
  .callback /deep/ .popup__container {
    overflow: auto;
    height: 100%;
  }
}

@media screen and (max-height: 760px) and (max-width: 1280px) and (min-width: 600px) {
  .callback /deep/ .popup__container {
    overflow: auto;
    height: 100%;
  }
}
@media screen and (max-height: 748px) and (max-width: 600px) {
  .callback /deep/ .popup__container {
    overflow: auto;
    height: 100%;
  }
}
</style>
