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
});

export const mutations = {
  toggleCallback(state) {
    return (state.callbackOpened = !state.callbackOpened);
  },
  closeCallback(state) {
    return (state.callbackOpened = false);
  },
};

export const actions = {
  async saveAnswers({ commit }, answers) {
    const errors = {
      'Member Exists':
        'Ошибка отправки данных, данный email уже используется, попробуйте ввести другой.',
      'Invalid Resource':
        'Ошибка отправки данных, пожалуйста, проверьте корректность введенных данных.',
    };
    let errorMessage =
      'Ошибка отправки данных, пожалуйста, попробуйте еще раз.';
    await this.$axios
      .post(`${process.env.API_URL}/forms/contacts`, answers)
      .then(() => {
        commit('toggleCallback');
        errorMessage = '';
      })
      .catch(error => {
        if (typeof error.response !== 'undefined') {
          errorMessage = errors[error.response.data.title];
        } else {
        }
      });
    console.log(errorMessage);
    return errorMessage;
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
