<template>
  <header class="header">
    <h3 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h3>
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
  margin: 18px auto;
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
  margin: 8px 0 0;
}

.header__share-story {
  border: none;
  background-color: #fff;
  outline: none;
  padding: 0 0 0;
  margin: -10px 0 0 40px;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
}

.header__share-story:hover {
  opacity: 0.8;
}
</style>
