import axios from '~/.nuxt/axios';

export const state = () => ({
  videos: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};
export const actions = {
  async fetchVideos(state) {
    return await this.$axios
      .$get(`${process.env.API_URL}/videos`)
      .then(response => {
        state.commit('setState', {
          name: 'videos',
          value: response,
        });
      });
  },
};

export const getters = {
  getVideos(state) {
    return state.videos;
  },
};
