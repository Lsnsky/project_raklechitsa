export default ({ store }) => {
  store.app.router.beforeEach((to, from, next) => {
    store.commit('header-menu/closeMobileMenu');
    next();
  });
};
