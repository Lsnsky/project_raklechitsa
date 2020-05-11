<template>
  <article class="story">
    <header class="story__header">
      <img
        src="https://i.postimg.cc/dQNQM071/632d61-6f4755d85f6543ec91c8cd9c151c666b-mv2-d-5760-3840-s-4-2.jpg"
        alt=""
        class="story__photo"
      />
      <div class="story__block-title">
        <h2 class="story__title">
          <span class="story__span-accent">Александр Тарханов:</span> &laquo;Я
          не могу победить свою пунктуальность в отличии от рака&raquo;
        </h2>
        <div class="story__data">
          <a href="" class="link story__header-link">Поделитесь&#10138;</a>
          <p class="story__date">20 апреля 2018</p>
        </div>
      </div>
    </header>
    <section class="story__body">
      <p class="story__text">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
      </p>
      <p class="story__text">
        У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд.
      </p>
      <p class="story__text story__text_font-weight_bold">
        <span class="story__span-accent">
          «В футболе если команда опоздала на 15 минут, ей засчитывается
          поражение».
        </span>
      </p>
      <p class="story__text">
        Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
        что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
        приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
        опоздаю!
      </p>
      <p class="story__text">
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
      <p class="story__text">
        «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится».
      </p>
    </section>
    <footer class="story__footer">
      <a href="#" class="link story__footer-link"
        >Поделитесь этой статьей в своих социальных сетях &#10138;</a
      >
    </footer>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.story {
  width: 1320px;
  margin: 0 auto 160px;
}

.story__header {
  display: grid;
  grid-template-columns: 580px 1fr;
  grid-column-gap: 60px;
  margin-bottom: 130px;
}

.story__photo {
  width: 100%;
  height: 580px;
  background-color: #ededed;
  object-fit: cover;
  object-position: right;
}

.story__block-title {
  display: grid;
  padding: 30px 0;
}

.story__title {
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  margin: 0;
}

.story__span-accent {
  font-weight: bold;
}

.story__data {
  display: flex;
  justify-content: space-between;
  align-self: end;
}

.link {
  font-size: 18px;
  line-height: 24px;
  color: black;
  text-decoration: none;
  opacity: 1;
}

.link:hover {
  opacity: 0.7;
}

.story__date {
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}

.story__body {
  width: 780px;
  font-size: 22px;
  line-height: 30px;
  margin: 0 auto 100px;
}

.story__footer {
  max-width: 780px;
  margin: 0 auto;
}

.story__footer-link {
  display: flex;
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
  background-color: #e5e5e5;
  justify-content: center;
}
</style>
