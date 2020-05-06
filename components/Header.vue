<template>
  <header class="header">
    <h3 class="header__title">Проект Благотворительного Фонда Константина Хабенского</h3>
    <div class="header__wrapper">
      <nav class="header__navigation">
        <nuxt-link v-if= "$route.path === '/'" to="/" class="header__navigation-link header__navigation-link_type_active">Главная</nuxt-link>
        <nuxt-link v-else to="/" class="header__navigation-link">Главная</nuxt-link>
        <nuxt-link v-if= "$route.path === '/stories'" to="/stories" class="header__navigation-link header__navigation-link_type_active">Истории</nuxt-link>
        <nuxt-link v-else to="/stories" class="header__navigation-link">Истории</nuxt-link>
      </nav>
      <nuxt-link to="/" class="header__navigation-link">Рассказать историю</nuxt-link> <!--Пока так, когда будет понятно что оно должно делать, поменяю-->
    </div>

  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.header {
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

}

.header__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  max-width: 340px;
}

.header__wrapper {
  display: flex;
}

.header__navigation-link {
  text-decoration: none;
  color: #000;
  margin: 0 0 0 40px;
}

.header__navigation-link:first-child {
  margin: 0;
}

.header__navigation-link_type_active {
  text-decoration: underline;
}

</style>
