export const state = () => ({
  stories: [],
  id: 0,
  currentPage: 1,
  itemsPerPage: 16,
  pageStories: [],
  randomStories: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
  setId(state, id) {
    return (state.id = id);
  },
  setPage(state, page) {
    return (state.currentPage = page);
  },
  setPageStories(state, stories) {
    return (state.pageStories = stories);
  },
  setItemsPerPage(state, items) {
    return (state.itemsPerPage = items);
  },
  setRandomStories(state, stories) {
    return (state.randomStories = stories);
  },
};
export const actions = {
  async fetchStories(state) {
    return this.$axios.$get(`${process.env.API_URL}/stories`).then(response => {
      state.commit('setState', {
        name: 'stories',
        value: response,
      });
    });
  },
  async getCurrentStory({ commit, getters }, id) {
    await commit('setId', id);
    return getters.getCurrentStory;
  },
  async setCurrentPage({ commit, getters }) {
    let currentStories = [];
    for (
      let i =
        getters.getItemsPerPage * getters.getCurrentPage -
        getters.getItemsPerPage;
      i < getters.getItemsPerPage * getters.getCurrentPage;
      i++
    ) {
      if (getters.getStoriesData[i]) {
        currentStories.push(getters.getStoriesData[i]);
      }
    }
    await commit('setPageStories', currentStories);
  },
  async getSerch({ commit, getters }, search) {
    let currentStories = [];
    await getters.getStoriesData.forEach(el => {
      if (el.author.toLowerCase().includes(search)) {
        currentStories.push(el);
      }
    });
    await commit('setPageStories', currentStories);
  },
  async setRandomStories({ commit, getters }, count) {
    let randomStories = [];
    for (let i = 0; i < count; i++) {
      do {
        randomStories[i] =
          getters.getStoriesData[
            Math.floor(Math.random() * getters.getStoriesData.length)
          ];
      } while (
        randomStories.some((item, index) => {
          return index === i ? false : item === randomStories[i];
        })
      );
    }
    await commit('setRandomStories', randomStories);
  },
};

export const getters = {
  getStoriesData(state) {
    return state.stories;
  },
  getStoriesAPI(state) {
    return state.stories;
  },
  getCurrentStory(state) {
    return state.stories.find(el => {
      return el.id === Number(state.id);
    });
  },
  getCurrentPage(state) {
    return state.currentPage;
  },
  getItemsPerPage(state) {
    return state.itemsPerPage;
  },
  getPageStories(state) {
    return state.pageStories;
  },
  getTotalItems(state) {
    return state.stories.length;
  },
  getRandomStories(state) {
    return state.randomStories;
  },
};
