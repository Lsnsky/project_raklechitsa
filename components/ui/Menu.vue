<template>
  <nav>
    <ul class="menu">
      <li class="menu__navigation-el">
        <nuxt-link to="/" class="menu__navigation-link">Главная</nuxt-link>
      </li>
      <li class="menu__navigation-el">
        <nuxt-link to="/stories" class="menu__navigation-link"
          >Истории</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu__navigation-el {
  text-decoration: none;
  color: #000;
  margin: 0 0 0 34px;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  transition: all linear 0.1s;
}

.menu__navigation-el:hover {
  opacity: 0.8;
}

.menu__navigation-el:first-child {
  margin: 0;
}

.menu__navigation-link {
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: inherit;
  color: inherit;
}

.nuxt-link-exact-active {
  border-bottom: solid #000 1px;
}

@media screen and (max-width: 1280px) {
  .menu__navigation-el {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .menu__navigation-el {
    margin: 0 0 0 25px;
  }
}
</style>
