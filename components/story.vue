<template>
  <article class="story">
    <container>
      <header class="story__header">
        <div class="story__wrapper">
          <img
            alt
            class="story__photo"
            :src="`https://strapi.kruzhok.io${story.ImageUrl[0].url}`"
          />
        </div>
        <h2 class="story__title">
          <span class="story__span-accent">{{ story.author }}:</span>
          &laquo;{{ story.title }}&raquo;
        </h2>
        <div class="story__data">
          <button @click="toggleShare" class="story__share">
            Поделитесь &#8599;
          </button>
          <p class="story__date">{{ this.data }}</p>
        </div>
      </header>
      <section class="story__body" v-html="story.text"></section>
      <footer class="story__footer">
        <button
          @click="toggleShare"
          class="link story__share story__share_local_footer"
        >
          Поделитесь этой статьей в своих социальных сетях &#8599;
        </button>
      </footer>
    </container>
  </article>
</template>

<script>
import Container from '@/components/ui/Container';
import Button_history from '@/components/ui/Button_history';
import CardContainer from '@/components/CardContainer';
export default {
  components: {
    container: Container,
    btnhistory: Button_history,
    'card-container': CardContainer,
  },
  methods: {
    toggleShare() {
      this.$store.commit('share-popup/toggleSharePopup');
    },
  },
  computed: {
    story() {
      return this.$store.getters['storiesData/getCurrentStory'];
    },
  },
  beforeMount() {
    this.data = `${new Date(this.story.date).getDate()} ${
      this.arr[new Date(this.story.date).getMonth()]
    } ${new Date(this.story.date).getFullYear()}`;
  },
  mounted() {
    let container = document.querySelector('.story__body');
    container
      .querySelectorAll('p')
      .forEach(item => item.classList.add('story__paragraph'));
    container
      .querySelectorAll('blockquote')
      .forEach(item => item.classList.add('story__span-accent'));
  },
  data() {
    return {
      data: '',
      arr: [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'ноября',
        'декабря',
      ],
    };
  },
};
</script>

<style scoped>
.story {
  display: flex;
  width: 100%;
  padding: 100px 0 160px;
}

.story__header {
  display: grid;
  grid-template-columns: minmax(407px, 580px) 1fr;
  grid-column-gap: 60px;
  margin-bottom: 130px;
}

.story__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  grid-row: span 2;
  background-color: #ededed;
}

.story__wrapper:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.story__photo {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
}

.story__title {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  margin: 0;
  padding-top: 30px;
  border-top: 1px solid #efefef;
}

section >>> .story__span-accent {
  font-weight: 700;
  margin: 0 0 30px;
}

.story__data {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  justify-content: space-between;
  align-self: end;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
}

.story__share {
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;
  color: #121212;
  background-color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.story__share:hover {
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
  font-weight: 500;
  max-width: 100%;
  margin: 0 auto 70px;
  padding: 0 20.5%;
  box-sizing: border-box;
}

section >>> .story__paragraph:last-child {
  margin-bottom: 0;
}

section >>> .story__paragraph {
  font-size: 22px;
  line-height: 30px;
  font-weight: inherit;
  margin: 0 0 30px;
}

.story__footer {
  max-width: 780px;
  margin: 0 auto;
}

.story__share_local_footer {
  display: flex;
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
  background-color: #ffffff;
  justify-content: center;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

@media screen and (max-width: 1400px) {
  .story {
    padding: 100px 0 150px;
  }
  .story__title {
    font-size: 34px;
    line-height: 44px;
  }

  section >>> .story__paragraph {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 28px;
  }

  section >>> .story__span-accent {
    margin-bottom: 28px;
  }

  .story__header {
    grid-template-columns: minmax(518px, 540px) 1fr;
  }

  .story__body {
    padding: 0 19.5%;
  }
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
    padding: 100px 0 110px;
  }

  .story__title {
    font-size: 30px;
    line-height: 38px;
    padding-top: 20px;
  }

  .story__header {
    grid-template-columns: minmax(407px, 460px) 1fr;
    grid-column-gap: 40px;
    margin-bottom: 90px;
  }

  .story__data {
    padding-bottom: 10px;
  }

  .story__share {
    font-size: 16px;
  }

  .story__date {
    font-size: 16px;
  }

  .story__body {
    margin-bottom: 40px;
    padding: 0 15.4%;
  }

  section >>> .story__paragraph {
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 27px;
  }

  section >>> .story__span-accent {
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
    padding: 80px 0 110px;
  }

  .story__header {
    grid-template-columns: 1fr minmax(290px, 420px) 1fr;
    grid-row-gap: 60px;
    grid-column-gap: 0;
    margin-bottom: 100px;
  }

  .story__title {
    text-align: center;
    letter-spacing: -0.01em;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .story__wrapper {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: center;
    margin: 0 auto;
    max-width: 420px;
    box-sizing: border-box;
  }

  .story__data {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .story__body {
    margin-bottom: 72px;
    padding: 0;
  }

  .story__footer {
    text-align: center;
  }
}

@media screen and (max-width: 550px) {
  .story {
    padding: 49px 0 100px;
  }

  .story__header {
    margin-bottom: 40px;
    grid-row-gap: 30px;
  }

  .story__title {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.02em;
  }

  .story__data {
    padding-bottom: 20px;
  }

  .story__share {
    font-size: 13px;
    line-height: 16px;
  }

  .story__date {
    font-size: 13px;
    line-height: 16px;
  }

  .story__body {
    margin-bottom: 40px;
  }

  section >>> .story__paragraph {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  section >>> .story__span-accent {
    margin-bottom: 16px;
  }

  .story__share_local_footer {
    padding: 20px 0;
  }
}
</style>
