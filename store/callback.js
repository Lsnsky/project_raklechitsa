export const state = () => ({
  callbackOpened: false,
  questions: [
    {
      quest:
        'Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории и разместить ее на сайте.',
      key: '',
    },
    { quest: 'Как вас зовут?', key: 'full_name' },
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
  /*   saveAnswers(state, answers) {
    return (state.answers = answers);
  }, */
  closeCallback(state) {
    return (state.callbackOpened = false);
  },
};

export const actions = {
  async saveAnswers({ commit }, answers) {
    console.log(answers);
    await this.$axios
      .post(`${process.env.API_URL}/forms/contacts`, answers)
      .then(() => {
        commit('toggleCallback');
        console.log('ok');
      })
      .catch(error => {
        console.log(error.response);
      });
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
