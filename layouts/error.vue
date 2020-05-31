<template>
  <div class="error">
    <div class="container">
      <h1 class="error__title">404</h1>
      <span class="error__text"> Страница не найдена.</span>
      <nuxt-link to="/" class="error__text error__text_link"
        >Перейти на главную.</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Страница не найдена`,
    };
  },
};
</script>

<style scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 258px auto;
}
.error__title {
  font-weight: normal;
  font-size: 144px;
  line-height: 174px;
  text-align: center;
  margin: 0 0 10px;
}
.error__text {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
}
.error__text_link {
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid black;
  align-self: center;
}

@media screen and (max-width: 1280px) {
  .container {
    margin: 166px auto;
  }
  .error__text {
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    margin: 328px auto;
  }
}

@media screen and (max-width: 500px) {
  .container {
    margin: 225px auto;
  }
  .error__title {
    font-size: 72px;
    line-height: 87px;
  }
  .error__text {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
