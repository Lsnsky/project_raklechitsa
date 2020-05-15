export default ({ store }) => {
  // очень хитро приходится добираться до роутера
  store.app.router.beforeEach((to, from, next) => {
    store.commit('header-menu/closeMobileMenu');
    next();
  });
};
