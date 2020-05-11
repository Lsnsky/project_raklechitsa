<template>
  <div class="cards-history__container">
    <card-story
      v-for="card in cards_histories"
      :key="card.id"
      :url="card.history_photo"
      :history_title="card.history_title"
      :history_text="card.history_text"
    ></card-story>
  </div>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
export default {
  components: {
    'card-story': CardStory,
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
        {
          id: '9',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '10',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '11',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '12',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '13',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '14',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '15',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '16',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '17',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '18',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '19',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '20',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '21',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '22',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '23',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '24',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '25',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '26',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '27',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '28',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '29',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '30',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '31',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '32',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '33',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '34',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '35',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '36',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '37',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '38',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '39',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '40',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '41',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '42',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '43',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '44',
          history_photo: '/images/Rectangle 23.png',
          history_title: 'Владимир Тен',
          history_text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '45',
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
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(4, minmax(265px, 300px));
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 40px;
  justify-content: center;
  grid-auto-flow: dense;
  margin: 0 auto;
}
.cards-history {
  /* border: 1px solid red; */
  padding-bottom: 30px;
  width: 1320px;
  margin: 0 auto;
}
.section-title {
  /* border: 1px solid red; */
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.cards-history__section-title {
  /* border: 1px solid red; */
  width: 413px;
  margin-bottom: 70px;
}
</style>
