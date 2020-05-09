<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <h3 class="footer__title">
        Спасибо всем, кто помог состояться этому проекту
      </h3>
      <p class="footer__copyright">Рак Лечится 2020</p>
    </div>
    <main-menu class="footer__menu" />
    <div class="footer__wrapper">
      <p class="footer__we-in">
        Мы в
        <a href="https://www.instagram.com/raklechitsa/" class="footer__link"
          >Инстаграме</a
        >
        и
        <a
          href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
          class="footer__link"
          >Youtube</a
        >
      </p>
      <a href="" class="footer__share">Поделитесь ↗</a>
      <p class="footer__copyright">Сделано студентами Яндекс Практикум</p>
    </div>
  </footer>
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
.footer {
  max-width: 1320px;
  margin: 60px auto;
  display: flex;
  justify-content: flex-start;
  height: 236px;
}

.footer__title {
  max-width: 380px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
}

.footer__menu {
  margin: 0 0 0 73px;
}

.footer__copyright {
  margin: auto 0 0;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

.footer__wrapper {
  display: flex;
  flex-direction: column;
}

.footer__wrapper:last-child {
  margin-left: auto;
}

.footer__menu /deep/ .menu__navigation-link_type_active {
  border: none;
}

.footer__we-in {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 0 59px;
}

.footer__link {
  text-decoration: none;
  color: #000;
}

.footer__link:hover {
  opacity: 0.8;
}

.footer__share {
  text-decoration: none;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  margin: 44px 0 0 59px;
}

.footer__share:hover {
  opacity: 0.8;
}
</style>
