<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu__navigation-link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="menu__navigation-link">Истории</nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu__navigation-link {
  text-decoration: none;
  color: #000;
  margin: 0 0 0 34px;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  transition: all linear 0.1s;
}

.menu__navigation-link:hover {
  opacity: 0.8;
}

.menu__navigation-link:first-child {
  margin: 0;
}

.nuxt-link-exact-active {
  border-bottom: solid #000 1px;
}

@media screen and (max-width: 1280px) {
  .menu__navigation-link {
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (max-width: 1024px) {
  .menu__navigation-link {
    margin: 0 0 0 24.6px;
  }
}
</style>
