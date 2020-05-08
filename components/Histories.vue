<template>
  <section class="cards-history">
    <h2 class="section-title cards-history__section-title">
      Истории неизлечимых привычек
    </h2>
    <div class="cards-history__container">
      <cardhistory
        :url="cards_histories[0].history_photo"
        :history_title="cards_histories[0].history_title"
        :history_text="cards_histories[0].history_text"
      />
      <cardhistory
        :url="cards_histories[1].history_photo"
        :history_title="cards_histories[1].history_title"
        :history_text="cards_histories[1].history_text"
      />
      <cardhistory
        :url="cards_histories[2].history_photo"
        :history_title="cards_histories[2].history_title"
        :history_text="cards_histories[2].history_text"
      />
      <cardhistory
        :url="cards_histories[3].history_photo"
        :history_title="cards_histories[3].history_title"
        :history_text="cards_histories[3].history_text"
      />
      <cardhistory
        :url="cards_histories[4].history_photo"
        :history_title="cards_histories[4].history_title"
        :history_text="cards_histories[4].history_text"
      />
      <cardhistory
        :url="cards_histories[5].history_photo"
        :history_title="cards_histories[5].history_title"
        :history_text="cards_histories[5].history_text"
      />
      <cardhistory
        :url="cards_histories[6].history_photo"
        :history_title="cards_histories[6].history_title"
        :history_text="cards_histories[6].history_text"
      />
      <cardhistory
        :url="cards_histories[7].history_photo"
        :history_title="cards_histories[7].history_title"
        :history_text="cards_histories[7].history_text"
      />
    </div>
    <btnhistory />
  </section>
</template>

<script>
import Card_history from '@/components/ui/Card_history';
import Button_history from '@/components/ui/Button_history';

export default {
  components: {
    cardhistory: Card_history,
    btnhistory: Button_history,
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
.cards-history__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 300px));
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  justify-content: center;
  grid-auto-flow: dense;
  margin: 0 auto;
}
.cards-history {
  padding-bottom: 30px;
  width: 1320px;
  margin: 0 auto;
}
.section-title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.cards-history__section-title {
  width: 413px;
  margin-bottom: 70px;
}
</style>
