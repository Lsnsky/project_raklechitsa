export const state = () => ({
  isQuestionnaireOpened: false,
  id: 0,
  answers: ['', '', '', '', '', '', '', '', '', '', '', ''],
  questions: [
    {
      id: '1',
      mainQest: 'Как вас зовут?',
      qest: '',
      name: 'first',
    },
    {
      id: '2',
      mainQest: 'Было ли у вас онкологическое заболевание?',
      qest:
        'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится',
    },
    {
      id: '3',
      mainQest: 'Какие занятия приносят Вам наибольшее удовольствие?',
      qest:
        'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
    },
    {
      id: '4',
      mainQest: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
      qest: '',
    },
    {
      id: '5',
      mainQest: 'Какие сильные увлечения у Вас есть?',
      qest:
        'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
    },
    {
      id: '6',
      mainQest:
        'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
      qest: '',
    },
    {
      id: '7',
      mainQest:
        'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
      qest: 'Кроме необходимых, таких, как чистка зубов.',
    },
    {
      id: '8',
      mainQest:
        'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      qest: '',
    },
    {
      id: '9',
      mainQest: 'Что Вас успокаивает/умиротворяет лучше всего?',
      qest: '',
    },
    {
      id: '10',
      mainQest:
        'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
      qest: '',
    },
    {
      id: '11',
      mainQest: 'Как вы обычно проводите выходные?',
      qest: '',
    },
    {
      id: '12',
      mainQest: 'Почта или телефон для связи. ',
      qest:
        'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
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
  previousQuestion(state) {
    return (state.id = state.id === 0 ? 0 : state.id - 1);
  },
  nextQuestion(state) {
    return (state.id = state.id + 1);
  },
  saveAnswer(state, answers) {
    return (state.answers = answers);
  },
};

export const getters = {
  getQuestionnaireState(state) {
    return state.isQuestionnaireOpened;
  },
  getQuestion(state) {
    return state.questions[state.id];
  },
  getAnswer(state) {
    return state.answers[state.id];
  },
  getId(state) {
    return state.id;
  },
};
