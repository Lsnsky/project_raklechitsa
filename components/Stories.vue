<template>
  <section class="cards-story">
    <panel class="card-story__panel">
      <div class="card-story__panel_text">И В ОТЛИЧИЕ ОТ РАКА,</div>
      <div class="card-story__panel_hashtag">#ЭТОНЕЛЕЧИТСЯ</div>
    </panel>
    <h2 class="cards-story__title">
      Истории неизлечимых привычек
    </h2>
    <div class="cards-story__container">
      <card-story
        v-for="card in cards_histories"
        :key="card.id"
        :url="card.history_photo"
        :history_title="card.history_title"
        :history_text="card.history_text"
      ></card-story>
    </div>
    <btnhistory />
  </section>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
import Button_history from '@/components/ui/Button_history';
import Panel from '@/components/ui/Panel';
export default {
  components: {
    'card-story': CardStory,
    btnhistory: Button_history,
    panel: Panel,
  },
  data() {
    return {
      cards_histories: [
        {
          id: '1',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '2',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '3',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '4',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '5',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '6',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '7',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '8',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 1281px) {
  .cards-story {
    /* border: 1px solid red; */
    padding-bottom: 30px;
    max-width: 1320px;
    margin: 0 auto;
  }

  .card-story__panel {
    /* border: 1px solid red; */
    max-width: 1320px;
    height: 129px;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
  }
  .card-story__panel_text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
    margin-right: 10px;
  }

  .card-story__panel_hashtag {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }
}
.cards-story__title {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-top: 100px;
  max-width: 413px;
  margin-bottom: 70px;
}

.cards-story__container {
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 300px));
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  justify-content: center;
  grid-auto-flow: dense;
  margin: 0 auto;
}
@media (max-width: 1280px) {
  .cards-story__container {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: repeat(4, minmax(265px, 1fr));
    grid-template-rows: repeat(2, minmax(265px, 1fr));
    grid-gap: 40px;
    justify-content: center;
    grid-auto-flow: dense;
    margin: 0 auto;
  }
  .cards-story {
    /* border: 1px solid red; */
    padding-bottom: 30px;
    max-width: 1180px;
    margin: 0 auto;
  }
  .section-title {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
  }
  .cards-story__section-title {
    /* border: 1px solid red; */
    width: 413px;
    margin-bottom: 70px;
  }
  .card-story__panel {
    /* border: 1px solid red; */
    max-width: 1320px;
    height: 129px;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
  }
  .card-story__panel_text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
    margin-right: 10px;
  }

  .card-story__panel_hashtag {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }
}
@media (max-width: 1024px) {
  .cards-story__container {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: repeat(4, minmax(208px, 1fr));
    grid-template-rows: repeat(2, minmax(208px, 1fr));
    grid-gap: 30px;
    justify-content: center;
    grid-auto-flow: dense;
    margin: 0 auto;
  }
  .cards-story {
    /* border: 1px solid red; */
    padding-bottom: 30px;
    max-width: 924px;
    margin: 0 auto;
  }
  .section-title {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
  }
  .cards-story__section-title {
    /* border: 1px solid red; */
    width: 413px;
    margin-bottom: 70px;
  }
  .card-story__panel {
    /* border: 1px solid red; */
    max-width: 1320px;
    height: 129px;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
  }
  .card-story__panel_text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
    margin-right: 10px;
  }

  .card-story__panel_hashtag {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }
}
</style>
