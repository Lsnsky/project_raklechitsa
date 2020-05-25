export const state = () => ({
  blocks: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};
export const actions = {
  async fetchBlocks(state) {
    return this.$axios.$get(`${process.env.API_URL}/blocks`).then(response => {
      state.commit('setState', {
        name: 'blocks',
        value: response,
      });
    });
  },
};

export const getters = {
  getBlocks(state) {
    return state.blocks;
  },
};
