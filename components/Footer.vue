<template>
  <footer class="footer">
    <container class="footer__container">
      <div class="footer__wrapper">
        <h3 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h3>
        <main-menu class="footer__menu" />
        <div class="footer__vertical-wrapper">
          <p class="footer__we-in">
            Мы в
            <a
              href="https://www.instagram.com/raklechitsa/"
              class="footer__link"
              target="_blank"
              >Инстаграме</a
            >
            и
            <a
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              class="footer__link"
              target="_blank"
              >Youtube</a
            >
          </p>
          <a href="" class="footer__share">Поделитесь &#8599;</a>
        </div>
      </div>
      <div class="footer__wrapper">
        <p class="footer__copyright">Рак Лечится 2020</p>
        <p class="footer__copyright">
          Сделано студентами
          <a
            href="https://praktikum.yandex.ru/"
            target="_blank"
            class="footer__copyryght-link"
          >
            Яндекс Практикум</a
          >
        </p>
      </div>
    </container>
  </footer>
</template>

<script>
import Menu from '@/components/ui/Menu';
import Container from '@/components/ui/Container';
export default {
  components: {
    'main-menu': Menu,
    container: Container,
  },
};
</script>

<style scoped>
.footer {
  padding: 60px 60px;
  margin: 0;
  background: #fbfbfb;
}

.footer__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.footer__title {
  max-width: 380px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0 73px 110px 0;
}

.footer__vertical-wrapper {
  margin: 0 48px 0 auto;
  display: flex;
  flex-direction: column;
}

.footer__copyright {
  margin: 0;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

.footer__copyright:last-child {
  margin: 0 0 0 auto;
}

.footer__copyryght-link {
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #898989;
}

.footer__wrapper {
  display: flex;
  flex-direction: row;
}

.footer__menu /deep/ .menu__navigation-link_type_active {
  border: none;
}

.footer__we-in {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}

.footer__link {
  text-decoration: none;
  border-bottom: 1px solid #000;
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
  margin: 44px 0 0;
}

.footer__share:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding: 50px;
  }

  .footer__title {
    font-size: 28px;
    line-height: 32px;
    max-width: 305px;
    margin: 0 101px 104px 0;
  }

  .footer__copyright {
    font-size: 16px;
    line-height: 18px;
  }

  .footer__we-in {
    font-size: 16px;
    line-height: 24px;
  }

  .footer__share {
    font-size: 16px;
    line-height: 24px;
    margin: 42px 0 0;
  }

  .footer__vertical-wrapper {
    margin: 0 42px 0 auto;
  }
}

@media screen and (max-width: 1024px) {
  .footer__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
    margin: 0 30px 89px 0;
  }

  .footer__vertical-wrapper {
    margin: 0 0 0 auto;
  }

  .footer__share {
    margin: 29px 0 0 0px;
  }
}

@media screen and (max-width: 899px) {
  .menu /deep/ {
    display: flex;
    flex-direction: column;
  }

  .footer__menu /deep/ .menu__navigation-link {
    margin: 0;
  }

  .footer__menu /deep/ .menu__navigation-link:last-child {
    margin-top: 14px;
  }
}

@media screen and (max-width: 805px) {
  .footer__title {
    max-width: 268px;
  }
  .footer__vertical-wrapper {
    margin: 0 -2px 0 auto;
  }

  .footer__share {
    margin: 14px 0 0;
  }
}

@media screen and (max-width: 715px) {
  .footer {
    padding: 50px 15px;
  }

  .footer__wrapper {
    flex-direction: column;
  }

  .footer__title {
    margin: 0 0 50px;
    max-width: none;
    font-size: 18px;
    line-height: 21px;
  }

  .footer__vertical-wrapper {
    margin: 18px 0 50px;
  }

  .footer__copyright:last-child {
    margin: 10px 0 0;
  }

  .footer__copyright {
    font-size: 13px;
    line-height: 18px;
  }

  .footer__we-in {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__share {
    margin: 17px 0 0;
    font-size: 13px;
    line-height: 15px;
  }
  .footer__menu /deep/ .menu__navigation-link {
    font-size: 13px;
    line-height: 15px;
    margin: 0;
  }

  .footer__menu /deep/ .menu__navigation-link:last-child {
    margin-top: 18px;
  }
}
</style>
