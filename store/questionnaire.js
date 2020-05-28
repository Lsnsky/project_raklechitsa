export const state = () => ({
  isQuestionnaireOpened: false,
  id: 0,
  answers: {},
  questions: [
    {
      id: '1',
      mainQest: 'Как вас зовут?',
      qest: '',
      key: 'name',
    },
    {
      id: '2',
      mainQest: 'Было ли у вас онкологическое заболевание?',
      qest:
        'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится',
      key: 'cancerStory',
    },
    {
      id: '3',
      mainQest: 'Какие занятия приносят Вам наибольшее удовольствие?',
      qest:
        'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
      key: 'pleasureActivities',
    },
    {
      id: '4',
      mainQest: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
      qest: '',
      key: 'commonActivities',
    },
    {
      id: '5',
      mainQest: 'Какие сильные увлечения у Вас есть?',
      qest:
        'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
      key: 'hobbies',
    },
    {
      id: '6',
      mainQest:
        'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
      qest: '',
      key: 'habits',
    },
    {
      id: '7',
      mainQest:
        'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
      qest: 'Кроме необходимых, таких, как чистка зубов.',
      key: 'regularActivities',
    },
    {
      id: '8',
      mainQest:
        'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      qest: '',
      key: 'aloneActivities',
    },
    {
      id: '9',
      mainQest: 'Что Вас успокаивает/умиротворяет лучше всего?',
      qest: '',
      key: 'calmDownActivities',
    },
    {
      id: '10',
      mainQest:
        'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
      qest: '',
      key: 'events',
    },
    {
      id: '11',
      mainQest: 'Как вы обычно проводите выходные?',
      qest: '',
      key: 'weekend',
    },
    {
      id: '12',
      mainQest: 'Телефон для связи.',
      qest: '',
      key: 'phone',
    },
    {
      id: '13',
      mainQest: ' Почта.',
      qest:
        ' После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте. ',
      key: 'email',
    },
  ],
});

export const mutations = {
  openQuestionnaire(state) {
    return (state.isQuestionnaireOpened = true);
  },
  closeQuestionnaire(state) {
    return (state.isQuestionnaireOpened = false);
  },
  resetQuestionnaire(state) {
    return (state.id = 0);
  },
  previousId(state) {
    return (state.id = state.id === 0 ? 0 : state.id - 1);
  },
  nextId(state) {
    return (state.id = state.id + 1);
  },
  saveAnswer(state, answer) {
    return (state.answers[state.questions[state.id].key] = answer);
  },
};

export const actions = {
  async previousQuestion({ commit, getters }) {
    await commit('previousId');
    return getters.getCurrentAnswer;
  },
  async nextQuestion({ commit, getters }, answer) {
    await commit('saveAnswer', answer);
    commit('nextId');
    if (getters.getId < 13) {
      return getters.getCurrentAnswer;
    }
  },
  async closeQuestionnaire({ commit, getters }) {
    await commit('closeQuestionnaire');
    if (getters.getId === 13) {
      await new Promise(resolve => setTimeout(resolve, 200));
      await commit('resetQuestionnaire');
    }
    return getters.getCurrentAnswer;
  },
};

export const getters = {
  getQuestionnaireState(state) {
    return state.isQuestionnaireOpened;
  },
  getQuestion(state) {
    return state.questions[state.id];
  },
  getId(state) {
    return state.id;
  },
  getCurrentAnswer(state) {
    return state.answers[state.questions[state.id].key];
  },
  getAnswers(state) {
    return state.answers;
  },
};
