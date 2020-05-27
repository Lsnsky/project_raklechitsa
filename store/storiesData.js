export const state = () => ({
  stories: [],
  id: 0,
  currentPage: 1,
  itemsPerPage: 16,
  page_stories: [],
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
    return (state.page_stories = stories);
  },
  setItemsPerPage(state, items) {
    return (state.itemsPerPage = items);
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
    return state.page_stories;
  },
  getTotalItems(state) {
    return state.stories.length;
  },
};
