<template>
  <section class="cards-story">
    <container class="card-story__container">
      <h2 class="cards-story__title">Истории неизлечимых привычек</h2>
      <form class="cards-story__search" @submit.prevent="getSerch">
        <input-search
          class="cards-story__search-input"
          :bordered="true"
          v-model="search"
          placeholder="Введите имя"
          @input="checkValidity"
        />
        <main-button
          color="none"
          :disabled="false"
          class="cards-story__clear-button"
          type="reset"
          @buttonClick="clearInput"
          >Очистить</main-button
        >
        <main-button
          color="purple"
          :disabled="!this.search.length > 0"
          class="cards-story__search-button"
          type="submit"
          >Поиск</main-button
        >
      </form>
      <div class="cards-story__not-found" v-if="currentStories.length === 0">
        <div class="cards-story__not-found-title">Ничего не найдено</div>
        <div class="cards-story__not-found-description">Попробуйте еще раз</div>
      </div>
      <card-container :stories="this.currentStories" />

      <pagination
        @onPageChanged="setCurrentPage"
        v-if="currentStories.length !== 0"
      />
    </container>
  </section>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
import Button from '@/components/ui/Button';
import mainInput from '@/components/ui/mainInput';
import Pagination from '@/components/Pagination';
import CardContainer from '@/components/CardContainer';
import Container from '@/components/ui/Container';
export default {
  components: {
    'card-story': CardStory,
    'input-search': mainInput,
    'main-button': Button,
    pagination: Pagination,
    'card-container': CardContainer,
    container: Container,
  },
  methods: {
    clearInput() {
      this.search = '';
      this.setCurrentPage();
    },
    checkValidity() {
      if (this.search.length === 0) {
        this.setCurrentPage();
      } else {
        this.getSerch();
      }
    },
    getSerch() {
      this.$store.dispatch('storiesData/getSerch', this.search);
    },
    setCurrentPage() {
      this.$store.dispatch('storiesData/setCurrentPage');
    },
  },
  async beforeMount() {
    if (window.innerWidth <= 1000) {
      await this.$store.commit('storiesData/setItemsPerPage', 12);
    }
    if (window.innerWidth <= 500) {
      await this.$store.commit('storiesData/setItemsPerPage', 9);
    }
    await this.$store.dispatch('storiesData/setCurrentPage');
  },
  data() {
    return {
      search: '',
      clear: 'Очистить',
    };
  },
  computed: {
    storiesData() {
      return this.$store.getters['storiesData/getStoriesAPI'];
    },
    currentPage() {
      return this.$store.getters['storiesData/getCurrentPage'];
    },
    currentStories() {
      return this.$store.getters['storiesData/getPageStories'];
    },
  },
};
</script>

<style scoped>
.cards-story__clear-button {
  position: absolute;
  top: 0;
  right: 228px;
  padding: 14px 20px;
  color: #666;
  background-color: rgba(255, 255, 255, 0);
}
.cards-story {
  display: flex;
}

.card-story__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cards-story__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 100px 0 auto 0;
  max-width: 413px;
}
.cards-story__search {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 60px auto 70px;
  width: 100%;
  position: relative;
}
.cards-story__search-input {
  width: calc(100% - 228px);
  padding: 0 0 0 10px;
  margin: 0 20px 0 0;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  overflow: hidden;
}
.cards-story__search-button {
  width: 208px;
  height: 46px;
}
.cards-story__not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 380px;
  align-content: center;
}
.cards-story__not-found-title {
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #000;
  margin: 0 auto;
}
.cards-story__not-found-description {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000;
  margin: 40px auto 0;
}
@media screen and (max-width: 1024px) {
  .cards-story__clear-button {
    font-size: 15px;
    line-height: 18px;
  }
}
@media screen and (max-width: 768px) {
  .cards-story__title {
    font-size: 24px;
    line-height: 28px;
    margin: 80px auto 0;
    text-align: center;
    max-width: 380px;
  }
  .cards-story__search {
    margin: 50px auto 60px;
  }
  .cards-story__clear-button {
    position: absolute;
    top: 12px;
    right: 240px;
    padding: 0;
    height: 20px;
    width: 20px;
    font-size: 0;
    background-image: url('/images/hider-open.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media screen and (max-width: 550px) {
  .cards-story__search-button {
    color: transparent;
    max-width: 46px;
    background-image: url('/images/Rectangle 1.png');
  }
  .cards-story__search-input {
    width: calc(100% - 52px);
    margin: 0;
  }
  .cards-story__not-found-title {
    font-size: 24px;
    line-height: 22px;
  }
  .cards-story__clear-button {
    top: 12px;
    right: 63px;
  }
}
@media screen and (max-width: 320px) {
  .cards-story__title {
    font-size: 18px;
    line-height: 21px;
    margin: 50px auto 0;
  }
  .cards-story__search {
    margin: 40px auto 30px;
  }
  .cards-story__not-found {
    margin: 60px auto 280px;
  }
  .cards-story__not-found-title {
    line-height: 29px;
  }
  .cards-story__not-found-description {
    font-size: 14px;
    margin: 15px auto 0;
  }
}
</style>
