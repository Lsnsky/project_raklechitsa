<template>
  <div :class="`popup popup_display_${popDisplay}`">
    <form class="popoup__container" @submit.prevent="nextScreen()">
      <h2 class="popup__title">Шаг {{ id + 1 }} из 12</h2>
      <p class="popup__question">
        <span class="popup__mainquestion">{{ questions[id].mainQest }} </span
        >{{ questions[id].qest }}
      </p>
      <textarea
        class="popup__input"
        placeholder="Напишите тут"
        v-model="answers[id]"
        required
      >
      </textarea>
      <button type="button" class="popup__back" @click="id--">Назад</button>
      <button v-if="this.id < 11" type="submit" class="popup__further">
        Далее
      </button>
      <button
        v-if="this.id === 11"
        type="submit"
        class="popup__further"
        @click="$emit('closeClick')"
      >
        Отправить
      </button>
      <p v-if="this.id === 11" class="popup__politica">
        Нажимая на кнопку «отправить», вы даете согласие на
        <nuxt-link to="/politics" class="popup__link" target="_blank"
          >обработку персональных данных</nuxt-link
        >
      </p>
      <button
        type="button"
        class="popup__close"
        @click="$emit('closeClick')"
      ></button>
    </form>
    <div class="popup__overlay"></div>
  </div>
</template>

<script>
export default {
  props: ['popDisplay'],
  methods: {
    submit() {},
    nextScreen() {
      if (this.id === 11) {
        console.log(this.answers);
        //Впоследствии тут произойдет отправка данных на сервер
        this.id = 0;
      } else {
        this.id++;
      }
    },
  },
  data() {
    return {
      id: 0,
      answers: ['', '', '', '', '', '', '', '', '', '', '', ''],
      questions: [
        {
          id: '1',
          mainQest: 'Как вас зовут?',
          qest: '',
          name: 'first',
        },
        {
          id: '2',
          mainQest: 'Было ли у вас онкологическое заболевание?',
          qest:
            'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится',
        },
        {
          id: '3',
          mainQest: 'Какие занятия приносят Вам наибольшее удовольствие?',
          qest:
            'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
        },
        {
          id: '4',
          mainQest:
            'На что, кроме семьи, быта и работы, Вы тратите свое время?',
          qest: '',
        },
        {
          id: '5',
          mainQest: 'Какие сильные увлечения у Вас есть?',
          qest:
            'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
        },
        {
          id: '6',
          mainQest:
            'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
          qest: '',
        },
        {
          id: '7',
          mainQest:
            'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
          qest: 'Кроме необходимых, таких, как чистка зубов.',
        },
        {
          id: '8',
          mainQest:
            'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
          qest: '',
        },
        {
          id: '9',
          mainQest: 'Что Вас успокаивает/умиротворяет лучше всего?',
          qest: '',
        },
        {
          id: '10',
          mainQest:
            'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
          qest: '',
        },
        {
          id: '11',
          mainQest: 'Как вы обычно проводите выходные?',
          qest: '',
        },
        {
          id: '12',
          mainQest: 'Почта или телефон для связи. ',
          qest:
            'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: all linear 0.1s;
}

.popup__politica {
  display: block;
  position: absolute;
  bottom: 49px;
  left: 374px;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  max-width: 378px;
  color: #666666;
  margin: 0;
}

.popup__link {
  color: inherit;
}

.popup_display_visible {
  visibility: visible;
  opacity: 1;
}

.popup__further {
  border: none;
  background-color: #714dbd;
  outline: none;
  position: absolute;
  bottom: 40px;
  left: 118px;
  padding: 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: 226px;
  height: 52px;
  color: #fff;
}

.popup__back {
  border: none;
  background-color: #fff;
  outline: none;
  position: absolute;
  bottom: 56px;
  left: 40px;
  padding: 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: 48px;
  height: 20px;
}

.popup__input {
  display: block;
  width: 91%;
  margin: 0 40px;
  min-height: 24px;
  height: 24px;
  border: none;
  outline: none;
  padding: 0 0 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  position: absolute;
  top: 274px;
  left: 0;
  border-bottom: 1px solid #eee;
  max-height: 200px;
}

.popup__mainquestion {
  font-weight: bold;
  color: #000;
}

.popup__question {
  margin: 40px 0 0 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  width: 91%;
}

.popup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: #000;
  width: 100%;
  height: 100%;
}

.popoup__container {
  position: relative;
  display: block;
  width: 920px;
  height: 600px;
  background: #fff;
  z-index: 1;
}

.popup__close {
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7.92879' y1='7.92912' x2='22.0709' y2='22.0713' stroke='black' stroke-width='2'/%3E%3Cline x1='7.92912' y1='22.0712' x2='22.0713' y2='7.92908' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: none;
  outline: none;
  position: absolute;
  top: 36px;
  right: 36px;
}

.popup__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 40px 0 0 40px;
}
</style>
