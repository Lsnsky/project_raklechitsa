export const state = () => ({
  leftStatus: 'inactive',
  rightStatus: 'active',
  id: 0,
  videos: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
  nextId(state) {
    return (state.id = state.id + 1);
  },
  priviousId(state) {
    return (state.id = state.id - 1);
  },
  setLeftInactive(state) {
    return (state.leftStatus = 'inactive');
  },
  setLeftActive(state) {
    return (state.leftStatus = 'active');
  },
  setRightInactive(state) {
    return (state.rightStatus = 'inactive');
  },
  setRightActive(state) {
    return (state.rightStatus = 'active');
  },
};
export const actions = {
  async fetchVideos(state) {
    return this.$axios.$get(`${process.env.API_URL}/videos`).then(response => {
      state.commit('setState', {
        name: 'videos',
        value: response,
      });
    });
  },
  async nextVideo({ commit, getters }) {
    if (getters.getId < getters.getVideosLength - 1) {
      await commit('nextId');
      if (getters.getId === getters.getVideosLength - 1) {
        await commit('setRightInactive');
      }
      await commit('setLeftActive');
    }
  },
  async priviousVideo({ commit, getters }) {
    if (getters.getId !== 0) {
      await commit('priviousId');
      if (getters.getId === 0) {
        await commit('setLeftInactive');
      }
      await commit('setRightActive');
    }
  },
};

export const getters = {
  getVideosLength(state) {
    return state.videos.length;
  },
  getVideos(state) {
    return state.videos;
  },
  getId(state) {
    return state.id;
  },
  getCurrentVideo(state) {
    return state.videos[state.id]['url'];
  },
  getLeftStatus(state) {
    return state.leftStatus;
  },
  getRightStatus(state) {
    return state.rightStatus;
  },
};
