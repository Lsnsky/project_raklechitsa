export const state = () => ({
  statistics_api: [],
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
};
