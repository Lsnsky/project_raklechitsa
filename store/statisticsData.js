export const state = () => ({
  statistics_api: [],
  cards: [
    {
      id: '5',
      description:
        'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
      image: '/images/__item-6.jpg',
      summary: '↑28%',
      source: 'МНИОИ Герцена 2018',
      valueEmpty: 160,
      maxValueEmpty: 260,
      valueFill: 208,
      maxValueFill: 260,
    },
    {
      id: '6',
      description:
        'На 25% снизилась смертность в течение первого года после постановки диагноза.',
      image: '/images/__item-6.jpg',
      summary: '↓25%',
      source: 'МНИОИ Герцена 2018',
      valueEmpty: 190,
      maxValueEmpty: 260,
      valueFill: 142,
      maxValueFill: 260,
    },
  ],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};
export const actions = {
  async fetchStatistic(state) {
    return this.$axios
      .$get(`${process.env.API_URL}/statistics`)
      .then(response => {
        state.commit('setState', {
          name: 'statistics_api',
          value: response,
        });
      });
  },
};

export const getters = {
  getStatistics(state) {
    return state.statistics_api;
  },
  getFakeData(state) {
    return state.cards;
  },
};
