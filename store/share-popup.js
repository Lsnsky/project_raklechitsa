export const state = () => ({
  sharePopupOpened: true,
});

export const mutations = {
  toggleSharePopup(state) {
    return (state.sharePopupOpened = !state.sharePopupOpened);
  },
};

export const getters = {
  getSharePopupState(state) {
    return state.sharePopupOpened;
  },
};
