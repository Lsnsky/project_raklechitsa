<template>
  <article class="story">
    <header class="story__header">
      <img
        src="https://i.postimg.cc/dQNQM071/632d61-6f4755d85f6543ec91c8cd9c151c666b-mv2-d-5760-3840-s-4-2.jpg"
        alt
        class="story__photo story__photo_type_pc"
      />
      <div class="story__block-title">
        <h2 class="story__title">
          <span class="story__span-accent">Александр Тарханов:</span> &laquo;Я
          не могу победить свою пунктуальность в отличии от рака&raquo;
        </h2>
        <img
          src="https://i.postimg.cc/dQNQM071/632d61-6f4755d85f6543ec91c8cd9c151c666b-mv2-d-5760-3840-s-4-2.jpg"
          alt
          class="story__photo story__photo_type_mobile"
        />
        <div class="story__data">
          <a @click="toggleShare" class="link story__link">Поделитесь&#8599;</a>
          <p class="story__date">20 апреля 2018</p>
        </div>
      </div>
    </header>
    <section class="story__body">
      <p class="story__paragraph">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
      </p>
      <p class="story__paragraph">
        У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд.
      </p>
      <p class="story__paragraph story__paragraph_font-weight_bold">
        <span class="story__span-accent">
          «В футболе если команда опоздала на 15 минут, ей засчитывается
          поражение».
        </span>
      </p>
      <p class="story__paragraph">
        Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
        что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
        приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
        опоздаю!
      </p>
      <p class="story__paragraph">
        Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
        билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница
        — нет. Ну, я какое-то время подождал ее и ушел. Потом она спрашивала:
        «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15
        минут, ей засчитывается поражение». Экзамен мне все-таки поставили!
        Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится. В отличие от рака.
      </p>
      <p class="story__paragraph">
        «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится».
      </p>
    </section>
    <footer class="story__footer">
      <a href="#" class="link story__link story__link_local_footer"
        >Поделитесь этой статьей в своих социальных сетях &#8599;</a
      >
    </footer>
  </article>
</template>

<script>
export default {
  methods: {
    toggleShare() {
      this.$store.commit('share-popup/toggleSharePopup');
    },
  },
};
</script>

<style scoped>
.story {
  max-width: 1320px;
  padding: 100px 4% 160px;
  margin: 0 auto;
}

.story__header {
  display: grid;
  grid-template-columns: minmax(518px, 580px) 1fr;
  grid-column-gap: 60px;
  margin-bottom: 130px;
}

.story__photo {
  max-width: 100%;
  height: auto;
  background-color: #ededed;
  object-fit: cover;
  object-position: right;
}

.story__block-title {
  display: grid;
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

.story__title {
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  margin: 0;
}

.story__span-accent {
  font-weight: 700;
}

.story__data {
  display: flex;
  justify-content: space-between;
  align-self: end;
}

.story__link {
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
}

.link {
  opacity: 1;
}

.link:hover {
  opacity: 0.8;
}

.story__photo_type_mobile {
  display: none;
}

.story__date {
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}

.story__body {
  max-width: 100%;
  margin: 0 auto 70px;
  padding: 0 19.5%;
  box-sizing: border-box;
}

.story__paragraph:last-child {
  margin-bottom: 0;
}

.story__paragraph {
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
  margin: 0 0 30px;
}

.story__footer {
  max-width: 780px;
  margin: 0 auto;
}

.story__link_local_footer {
  display: flex;
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
  background-color: #fbfbfb;
  justify-content: center;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

@media screen and (max-width: 1400px) {
  .story__title {
    font-size: 34px;
    line-height: 44px;
  }

  .story__paragraph {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 28px;
  }

  .story__header {
    grid-template-columns: minmax(518px, 540px) 1fr;
  }

  /* .story__photo {
    max-height: 540px;
  } */
}

@media screen and (max-width: 1280px) {
  .story__header {
    grid-template-columns: minmax(407px, 518px) 1fr;
    margin-bottom: 120px;
  }

  .story__body {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1140px) {
  .story {
    padding: 100px 5% 120px;
  }

  .story__title {
    font-size: 30px;
    line-height: 38px;
  }

  .story__header {
    grid-template-columns: minmax(407px, 460px) 1fr;
    grid-column-gap: 40px;
    margin-bottom: 90px;
  }

  .story__block-title {
    padding: 20px 0;
  }

  .story__link {
    font-size: 16px;
  }

  .story__date {
    font-size: 16px;
  }

  .story__body {
    margin-bottom: 46px;
    padding: 0 15.4%;
  }

  .story__paragraph {
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .story__header {
    grid-template-columns: 407px 1fr;
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 940px) {
  .story {
    padding: 80px 8.33% 120px;
  }

  .story__header {
    display: flex;
    margin-bottom: 100px;
  }

  .story__title {
    text-align: center;
    letter-spacing: -0.01em;
  }

  .story__photo_type_mobile {
    display: block;
  }

  .story__photo_type_pc {
    display: none;
  }

  .story__photo {
    max-width: 460px;
    margin: 60px auto;
  }

  .story__body {
    margin-bottom: 46px;
    padding: 0;
  }

  .story__footer {
    text-align: center;
  }
}

@media screen and (max-width: 550px) {
  .story {
    padding: 80px 4.69% 120px;
  }

  .story__header {
    margin-bottom: 40px;
  }

  .story__photo {
    max-width: 100%;
    margin: 30px auto;
  }

  .story__title {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.02em;
  }

  .story__link {
    font-size: 13px;
    line-height: 16px;
  }

  .story__date {
    font-size: 13px;
    line-height: 16px;
  }

  .story__body {
    margin-bottom: 30px;
  }

  .story__paragraph {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
}
</style>
