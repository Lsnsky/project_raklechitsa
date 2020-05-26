<template>
  <section class="cards-story">
    <h2 class="cards-story__title" @click="setCurrentPage">
      Истории неизлечимых привычек
    </h2>
    <div class="cards-story__search">
      <input-search
        class="cards-story__search-input"
        :bordered="true"
        v-model="search"
        placeholder="Введите имя"
      />
      <button-search
        color="purple"
        :disabled="!this.search.length > 0"
        class="cards-story__search-button"
        @buttonClick="getSerch"
        >Поиск</button-search
      >
    </div>
    <div class="cards-story__container">
      <!-- <card-story
        v-for="card in storiesToRender"
        :key="card.id"
        :url="card.history_photo"
        :history_title="card.history_title"
        :history_text="card.history_text"
        @cardClick="goToDetail(card.id)"
      ></card-story> -->
      <nuxt-link
        class="card__link"
        v-for="card in currentStories"
        :key="card.id"
        :to="`/stories/${card.id}`"
        ><card-story
          :url="`https://strapi.kruzhok.io${card.ImageUrl[0].url}`"
          :history_title="card.author"
          :history_text="card.title"
        ></card-story>
      </nuxt-link>
    </div>
    <pagination
      :totalItems="storiesData.length"
      :itemsPerPage="itemsPerPage"
      @onPageChanged="setCurrentPage"
    />
  </section>
</template>

<script>
import CardStory from '@/components/ui/CardStory';
import Button from '@/components/ui/Button';
import mainInput from '@/components/ui/mainInput';
import Pagination from '@/components/Pagination';
export default {
  components: {
    'card-story': CardStory,
    'input-search': mainInput,
    'button-search': Button,
    pagination: Pagination,
  },
  methods: {
    getSerch() {
      this.currentStories.splice(0, this.currentStories.length);
      this.storiesData.forEach(el => {
        if (el.author.toLowerCase().includes(this.search)) {
          this.currentStories.push(el);
        }
      });
    },
    setCurrentPage() {
      this.currentStories.splice(0, this.itemsPerPage);
      for (
        let i = this.itemsPerPage * this.currentPage - this.itemsPerPage;
        i < this.itemsPerPage * this.currentPage;
        i++
      ) {
        if (this.storiesData[i]) {
          this.currentStories.push(this.storiesData[i]);
        }
      }
    },
  },
  beforeMount() {
    if (window.innerWidth <= 768) {
      this.itemsPerPage = 12;
    }
    if (window.innerWidth <= 320) {
      this.itemsPerPage = 9;
    }
    for (
      let i = this.itemsPerPage * this.currentPage - this.itemsPerPage;
      i < this.itemsPerPage * this.currentPage;
      i++
    ) {
      let j = i;
      if (i >= this.itemsPerPage) {
        let j = i - this.itemsPerPage * this.currentPage;
      }
      this.currentStories[j] = this.storiesData[i];
    }
  },
  data() {
    return {
      itemsPerPage: 16,
      currentStories: [],
      search: '',
    };
  },
  /*  methods: {
    /*     goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
  }, */
  computed: {
    /*     storiesToRender() {
      const { storiesData } = this.$store.state;
      return storiesData.stories.filter(
        (item, idx) =>
          idx >= this.startIndex &&
          idx <= this.startIndex + this.itemsPerPage - 1
      )}, */
    storiesData() {
      return this.$store.getters['storiesData/getStoriesAPI'];
    },
    currentPage() {
      return this.$store.getters['storiesData/getCurrentPage'];
    },
  },
  // в разработке

  // calcItemPerPage() {
  //   if (process.browser) {
  //     if (window.innerWidth > 768) {
  //       return (this.itemsPerPage = 16);
  //     }
  //     if (window.innerWidth <= 768) {
  //       return (this.itemsPerPage = 12);
  //     }
  //   }
  // },
};
</script>

<style scoped>
.card__link {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #000;
}
.cards-story {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1320px;
  margin: auto;
  padding: 0 60px;
}
.cards-story__container {
  display: grid;
  grid-template-columns: repeat(4, minmax(265px, 300px));
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
  justify-content: center;
  margin: 0 auto;
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
}
.cards-story__search-input {
  /* background: #e5e5e5; */
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
@media screen and (max-width: 1280px) {
  .cards-story {
    padding: 0 50px;
  }
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(4, minmax(208px, 265px));
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 60px;
    justify-content: center;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1024px) {
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(4, minmax(140px, 208px));
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 46px;
    justify-content: center;
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .cards-story {
    padding: 0 40px;
  }
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
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 216px));
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    justify-content: center;
    margin: 0 auto;
  }
}
@media screen and (max-width: 550px) {
  .cards-story {
    padding: 0 40px;
  }
  .cards-story__search-button {
    color: transparent;
    max-width: 46px;
    background-image: url('/images/Rectangle 1.png');
  }
  .cards-story__search-input {
    width: calc(100% - 52px);
    margin: 0;
  }

  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(2, minmax(120px, 290px));
    grid-template-rows: repeat(6, 1fr);
    grid-row-gap: 30px;
    justify-content: center;
    margin: 0 auto;
  }
}
@media screen and (max-width: 320px) {
  .cards-story {
    padding: 0 15px;
  }
  .cards-story__title {
    font-size: 18px;
    line-height: 21px;
    margin: 50px auto 0;
  }
  .cards-story__search {
    margin: 40px auto 30px;
  }
  .cards-story__container {
    display: grid;
    grid-template-columns: repeat(1, minmax(140px, 290px));
    grid-template-rows: repeat(9, 1fr);
    grid-row-gap: 30px;
    justify-content: center;
    margin: 0 auto;
  }
}
</style>
