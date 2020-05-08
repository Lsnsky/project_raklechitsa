<template>
  <section class="cover-about">
    <h2 class="cover-about__title">#РАКЛЕЧИТСЯ</h2>
    <div class="content">
      <div class="content__about">
        <h3 class="content__about_title">О проекте</h3>
        <p class="content__about_paragraph">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
      </div>
      <div class="content__columns">
        <div class="content__columns_descriotion">
          <p class="content__columns_brief">Рак Лечится</p>
          <p class="content__columns_paragraph">Фонд Хабенского</p>
        </div>
        <div class="content__columns_main-text">
          <p class="content__columns_text">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </p>
          <p class="content__columns_text">
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
  margin: 60px auto;
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
.content__about_title {
  width: 413px;
  height: 36px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: white;
  margin-top: 0;
  margin-bottom: 32px;
  margin-right: 73px;
}
.content__about_paragraph {
  width: 340px;
  height: 66px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}
.content__columns_descriotion {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.content__columns {
  display: flex;
  margin-top: 68px;
  margin-left: 0;
}
.content__columns_brief {
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
.content__columns_paragraph {
  width: 155px;
  height: 22px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
  color: #c9c9c9;
}
.content__columns_main-text {
  max-width: 655px;
  height: 242px;
  color: #dedede;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-left: 40px;
}
.content__columns_text {
  margin-top: 0;
}
</style>
