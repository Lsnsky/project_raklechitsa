export const state = () => ({
  callbackOpened: false,
  questions: [
    {
      quest:
        'Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории и разместить ее на сайте.',
      key: '',
    },
    { quest: 'Как вас зовут?', key: 'fullName' },
    { quest: 'Электронная почта', key: 'email' },
    { quest: 'Телефон', key: 'phone' },
    {
      quest:
        'Напишите, если есть предпочтительный способ связи и удобное время',
      key: 'preferred',
    },
  ],
  answers: {},
});

export const mutations = {
  toggleCallback(state) {
    return (state.callbackOpened = !state.callbackOpened);
  },
  saveAnswers(state, answers) {
    return (state.answers = answers);
  },
  closeCallback(state) {
    return (state.callbackOpened = false);
  },
};

export const getters = {
  getCallbackState(state) {
    return state.callbackOpened;
  },
  getQuestions(state) {
    return state.questions;
  },
};
