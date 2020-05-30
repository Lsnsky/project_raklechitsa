export const state = () => ({
  photos: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};
export const actions = {
  async fetchPhotos({ commit }) {
    const getPosts = data => {
      return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
        const {
          node: { display_url, accessibility_caption, shortcode },
        } = post;
        return {
          display_url,
          accessibility_caption,
          url: `https://www.instagram.com/p/${shortcode}`,
        };
      });
    };
    const data = await this.$axios.$get(
      `https://www.instagram.com/raklechitsa/?__a=1`
    );
    if (typeof data === !undefined) {
      const formatData = getPosts(data);
      await commit('setState', {
        name: 'photos',
        value: formatData,
      });
    }
  },
};

export const getters = {
  getPhotos(state) {
    return state.photos.slice(0, 8);
  },
};
