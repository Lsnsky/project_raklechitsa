<template>
  <nav class="menu">
    <nuxt-link
      v-if="$route.path === '/'"
      to="/"
      class="menu__navigation-link menu__navigation-link_type_active"
      >Главная</nuxt-link
    >
    <nuxt-link v-else to="/" class="menu__navigation-link">Главная</nuxt-link>
    <nuxt-link
      v-if="$route.path === '/stories'"
      to="/stories"
      class="menu__navigation-link menu__navigation-link_type_active"
      >Истории</nuxt-link
    >
    <nuxt-link v-else to="/stories" class="menu__navigation-link"
      >Истории</nuxt-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu__navigation-link {
  text-decoration: none;
  color: #000;
  margin: 0 0 0 40px;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}

.menu__navigation-link:hover {
  opacity: 0.8;
}

.menu__navigation-link:first-child {
  margin: 0;
}

.menu__navigation-link_type_active {
  border-bottom: solid #000 1px;
}
</style>
