<template>
  <section class="cover-about">
    <h2 class="cover-about__title">#РАКЛЕЧИТСЯ</h2>
    <div class="content">
      <div class="content__about">
        <h3 class="content__about-title">О проекте</h3>
        <p class="content__about-paragraph">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
      </div>
      <div class="content__columns">
        <div class="content__columns-descriotion">
          <p class="content__columns-brief">Рак Лечится</p>
          <p class="content__columns-paragraph">Фонд Хабенского</p>
        </div>
        <div class="content__columns-main-text">
          <p class="content__columns-text">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </p>
          <p class="content__columns-text">
            Рак лечится — проект Благотворительного Фонда Константина Хабенского
            и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
            людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.cover-about {
  max-width: 1440px;
  height: 689px;
  background-color: #613a93;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
}
.cover-about__title {
  max-width: 720px;
  color: #ffffff;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  margin: 90px auto 70px;
}
.content {
  display: flex;
  margin-left: 60px;
  margin-right: 60px;
}
.content__about {
  display: flex;
  flex-direction: column;
}
.content__about-title {
  width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: white;
  margin-top: 0;
  margin-bottom: 32px;
  margin-right: 73px;
}
.content__about-paragraph {
  width: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}
.content__columns-descriotion {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.content__columns {
  display: flex;
  margin-top: 68px;
}
.content__columns-brief {
  width: 112px;
  height: 22px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 10px;
}
.content__columns-paragraph {
  width: 155px;
  height: 22px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
  color: #c9c9c9;
}
.content__columns-main-text {
  max-width: 655px;
  height: 242px;
  color: #dedede;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-left: 40px;
}
.content__columns-text {
  margin-top: 0;
}
@media screen and (max-width: 1280px) {
  .cover-about {
    max-width: 100%;
    height: 626px;
  }
  .content {
    margin-left: 50px;
    margin-right: 50px;
  }
  .cover-about__title {
    font-size: 58px;
    line-height: 70px;
    margin: 80px auto 60px;
  }
  .content__about-title {
    width: 367px;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 30px;
    margin-right: 49px;
  }
  .content__about-paragraph {
    margin-top: 0;
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
  .content__columns-main-text {
    max-width: 570px;
  }
}
@media screen and (max-width: 1184px) {
  .cover-about {
    height: 571px;
  }
  .cover-about__title {
    font-size: 52px;
    line-height: 63px;
    margin-bottom: 46px;
  }
  .content__about-title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
    margin-right: 49px;
    width: 288px;
  }
  .content__about-paragraph {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
  .content__columns-main-text {
    max-width: 447px;
    font-size: 15px;
    line-height: 19px;
    margin-left: 30px;
  }
  .content__columns-brief {
    font-size: 15px;
    line-height: 19px;
    width: 93px;
  }
  .content__columns-paragraph {
    font-size: 15px;
    line-height: 19px;
    width: 129px;
  }
}
@media screen and (max-width: 960px) {
  .cover-about {
    width: 100%;
    height: 660px;
  }
  .cover-about__title {
    display: none;
  }
  .content__columns {
    flex-direction: column;
    margin: 0 auto 0;
  }
  .content {
    flex-direction: column;
  }
  .content__columns-brief {
    margin: 0 0 30px;
    margin-right: 30px;
  }
  .content__columns-paragraph {
    margin: 0 0 30px;
  }
  .content__about-title {
    width: 380px;

    margin: 0 auto 26px;
    text-align: center;
  }
  .content__about {
    margin: 80px auto 80px;
  }
  .content__columns-descriotion {
    flex-direction: row;
  }
  .content__columns-main-text {
    max-width: 380px;
    margin: 0 auto 0;
  }
  .content__about-paragraph {
    max-width: 380px;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 768px) {
  .cover-about {
    width: 768px;
  }
}
</style>
