export const state = () => ({
  sharePopupOpened: false,
});

export const mutations = {
  toggleSharePopup(state) {
    return (state.sharePopupOpened = !state.sharePopupOpened);
  },
  closeSharePopup(state) {
    return (state.sharePopupOpened = false);
  },
};

export const getters = {
  getSharePopupState(state) {
    return state.sharePopupOpened;
  },
};
