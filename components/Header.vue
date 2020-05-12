<template>
  <header @ class="header">
    <h3 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h3>
    <button class="header__hider"></button>
    <div class="header__wrapper">
      <main-menu />
      <button class="header__share-story" @click="$emit('shareClick')">
        Рассказать историю
      </button>
      <!--Пока так, когда будет понятно что оно должно делать, поменяю-->
    </div>
  </header>
</template>

<script>
import Menu from '@/components/ui/Menu';
export default {
  components: {
    'main-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  max-width: 1320px;
  padding: 18px 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
}
.header__hider {
  display: none;
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
  margin: 9px 13px 0 0;
}

.header__share-story {
  border: none;
  background-color: #fff;
  outline: none;
  padding: 0 0 0;
  margin: -8px 0 0 40px;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: right;
  color: #121212;
  cursor: pointer;
  transition: all linear 0.1s;
}

.header__share-story:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1280px) {
  .header {
    padding: 18px 50px;
    margin: 0;
  }

  .header__title {
    line-height: 18px;
  }
  .header__wrapper {
    margin: 6px 11px 0 0;
  }
  .header__share-story {
    margin: -5px 0 0 42px;
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (max-width: 1024px) {
  .header__wrapper {
    margin: 6px 11px 0 0;
  }

  .header__share-story {
    margin: -5px 0 0 32px;
  }
}

@media screen and (max-width: 795px) {
  .header__wrapper {
    display: none;
  }

  .header__hider {
    margin: 4.5px 1px 0 0;
    padding: 0;
    height: 27px;
    width: 32px;
    display: block;
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='27' viewBox='0 0 32 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='25.5' x2='32' y2='25.5' stroke='black' stroke-width='3'/%3E%3Cline y1='13.5' x2='32' y2='13.5' stroke='black' stroke-width='3'/%3E%3Cline y1='1.5' x2='32' y2='1.5' stroke='black' stroke-width='3'/%3E%3C/svg%3E ");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    background-color: #fff;
    outline: none;
  }
}
</style>
