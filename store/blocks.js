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
  getVideoBlock(state) {
    return state.blocks.find(el => el.block === 'videos');
  },
  getCoverBlock(state) {
    return state.blocks.find(el => el.block === 'cover');
  },
  getFirstPanelBlock(state) {
    return state.blocks.find(el => el.block === 'note-1');
  },
  getSecondPanelBlock(state) {
    return state.blocks.find(el => el.block === 'note-2');
  },
  getStoriesBlock(state) {
    return state.blocks.find(el => el.block === 'stories');
  },
  getInstagramBlock(state) {
    return state.blocks.find(el => el.block === 'instagram');
  },
  getStatisticsBlock(state) {
    return state.blocks.find(el => el.block === 'statistics');
  },
  getFooterBlock(state) {
    return state.blocks.find(el => el.block === 'footer');
  },
  getHeaderBlock(state) {
    return state.blocks.find(el => el.block === 'header');
  },
  getStoryBlock(state) {
    return state.blocks.find(el => el.block === 'story');
  },
  getAboutBlock(state) {
    return state.blocks.find(el => el.block === 'about');
  },
};
