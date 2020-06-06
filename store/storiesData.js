export const state = () => ({
  stories: [],
  id: 0,
  currentPage: 1,
  itemsPerPage: 16,
  pageStories: [],
  randomStories: [],
  mainStories: [],
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
    commit('setState', {
      name: 'pageStories',
      value: currentStories,
    });
  },
  async getSerch({ commit, getters }, search) {
    let currentStories = [];
    await getters.getStoriesData.forEach(el => {
      if (el.author.toLowerCase().includes(search.toLowerCase())) {
        currentStories.push(el);
      }
    });
    commit('setState', {
      name: 'pageStories',
      value: currentStories,
    });
  },
  async setRandomStories({ commit, getters }, { count, noSelebrity }) {
    let randomStories = [];
    for (let i = 0; i < count; i++) {
      do {
        randomStories[i] =
          getters.getStoriesData[
            Math.floor(Math.random() * getters.getStoriesData.length)
          ];
      } while (
        randomStories.some((item, index) => {
          if (noSelebrity) {
            if (item.celebrity) {
              return true;
            }
          }
          return index === i
            ? false
            : item === randomStories[i] ||
                item ===
                  getters.getStoriesData.find(el => {
                    return el.id === Number(getters.getId);
                  });
        })
      );
    }
    commit('setState', {
      name: 'randomStories',
      value: randomStories,
    });
  },
  async setMainStories({ commit, getters }) {
    let stories = [];
    getters.getStoriesData.forEach(item => {
      if (item.celebrity) {
        stories.push(item);
      }
    });
    commit('setState', {
      name: 'mainStories',
      value: stories,
    });
  },
};

export const getters = {
  getStoriesData(state) {
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
  getMainStories(state) {
    return state.mainStories;
  },
  getId(state) {
    return state.id;
  },
};
