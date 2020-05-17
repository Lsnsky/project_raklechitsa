export const state = () => ({
  callbackOpened: false,
  questions: {
    0: 'Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории и разместить ее на сайте.',
    1: 'Как вас зовут?',
    2: 'Электронная почта',
    3: 'Телефон',
    4: 'Напишите, если есть предпочтительный способ связи и удобное время',
  },
  answers: {},
});

export const mutations = {
  toggleCallback(state) {
    return (state.callbackOpened = !state.callbackOpened);
  },
  saveAnswers(state, answers) {
    return (state.answers = answers);
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
