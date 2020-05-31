export const state = () => ({
  sharePopupOpened: false,
  socialNetworks: [
    {
      name: 'facebook',
      url: '',
    },
    {
      name: 'twitter',
      url: '',
    },
    {
      name: 'vkontakte',
      url: '',
    },
    {
      name: 'odnoklasniki',
      url: '',
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/raklechitsa/',
    },
    {
      name: 'youtube',
      url:
        'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
    },
  ],
});

export const mutations = {
  openSharePopup(state) {
    return (state.sharePopupOpened = true);
  },
  closeSharePopup(state) {
    return (state.sharePopupOpened = false);
  },
  setLink(state, { name, url }) {
    return (state.socialNetworks.find(item => {
      return item.name === name;
    }).url = url);
  },
};
export const actions = {
  async openSharePopup({ commit, getters }, { title, url }) {
    await getters.getSharePopupData.forEach(element => {
      if (element.name === 'facebook') {
        commit('setLink', {
          name: 'facebook',
          url: `https://www.facebook.com/sharer.php?src=sp&u=${url}&title=${title}`,
        });
      }
      if (element.name === 'twitter') {
        commit('setLink', {
          name: 'twitter',
          url: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
        });
      }
      if (element.name === 'vkontakte') {
        commit('setLink', {
          name: 'vkontakte',
          url: `https://vk.com/share.php?url=${url}&title=${title}`,
        });
      }
      if (element.name === 'odnoklasniki') {
        commit('setLink', {
          name: 'odnoklasniki',
          url: `https://connect.ok.ru/offer?url=${url}&amp;title=${title}`,
        });
      }
    });
    await commit('openSharePopup');
  },
};

export const getters = {
  getSharePopupState(state) {
    return state.sharePopupOpened;
  },
  getSharePopupData(state) {
    return state.socialNetworks;
  },
  getRoute(state) {
    return state.route;
  },
};
