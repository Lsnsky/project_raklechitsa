export default ({ store }) => {
  store.app.router.beforeEach((to, from, next) => {
    store.commit('header-menu/closeMobileMenu');
    store.commit('share-popup/setRouter', to.fullPath);
    next();
  });
};
