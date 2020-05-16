<template>
  <section class="policy">
    <h1 class="policy__main-title">
      Политика проекта в отношении обработки персональных данных.
    </h1>
    <ol class="policy__big-list">
      <li class="policy__big-list-item" v-for="list in bigLists" :key="list.id">
        <h2 class="policy__title">{{ list.title }}</h2>
        <p class="policy__text">{{ list.text }}</p>
        <ol class="policy__small-list">
          <li
            class="policy__small-list-item"
            v-for="Slist in list.lists"
            :key="Slist.id"
          >
            {{ Slist.text }}
          </li>
        </ol>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  computed: {
    bigLists() {
      return this.$store.getters['policy/getPolicy'];
    },
  },
};
</script>

<style scoped>
.policy {
  max-width: 780px;
  margin: 0 auto 230px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.policy__main-title {
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  text-align: center;
  margin: 100px 0 9px;
  border-top: solid 1px #efefef;
  border-bottom: solid 1px #efefef;
  padding: 30px 0;
  width: 100%;
}

.policy__big-list {
  margin: 0;
  padding: 0 0 0 22px;
}

.policy__big-list-item {
  margin: 90px 0 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  padding: 0;
}

.policy__title {
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  margin: 0 0 40px;
}

.policy__text {
  margin: 0 0 0 -23px;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  padding: 0;
}

.policy__small-list {
  margin: 0;
  padding: 0 0 0 3px;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
}

.policy__small-list-item {
  margin: 30px 0 0;
  padding: 0 0 0 16px;
  font-size: 22px;
  line-height: 30px;
}

@media screen and (max-width: 1314px) {
  .policy {
    max-width: 700px;
    margin: 0 auto 230px;
  }

  .policy__main-title {
    font-size: 34px;
    line-height: 44px;
    margin: 88px 0 0;
  }

  .policy__big-list-item {
    margin: 88px 0 0;
    font-size: 20px;
    line-height: 28px;
  }

  .policy__title {
    font-size: 20px;
    line-height: 28px;
  }

  .policy__text {
    font-size: 20px;
    line-height: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .policy {
    max-width: 640px;
    margin: 0 auto 150px;
  }

  .policy__main-title {
    font-size: 30px;
    line-height: 38px;
    margin: 78px 0 0;
  }

  .policy__big-list-item {
    margin: 80px 0 0;
    font-size: 18px;
    line-height: 27px;
  }

  .policy__title {
    font-size: 18px;
    line-height: 27px;
  }

  .policy__text {
    font-size: 18px;
    line-height: 27px;
  }

  .policy__small-list-item {
    font-size: 18px;
    line-height: 27px;
  }
}

@media screen and (max-width: 768px) {
  .policy__main-title {
    font-size: 30px;
    line-height: 38px;
    margin: 78px 0 40px;
  }

  .policy__big-list-item {
    margin: 40px 0 0;
    font-size: 18px;
    line-height: 27px;
  }
}

@media screen and (max-width: 690px) {
  .policy {
    max-width: 640px;
    margin: 0 15px 50px;
  }
}

@media screen and (max-width: 450px) {
  .policy__main-title {
    padding: 20px 0;
    font-size: 18px;
    line-height: 21px;
    margin: 50px 0 0;
  }

  .policy__big-list-item {
    margin: 40px 0 0;
    font-size: 13px;
    line-height: 16px;
  }

  .policy__title {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 18px;
  }

  .policy__text {
    font-size: 13px;
    line-height: 16px;
    margin: 0 0 0 -15px;
  }

  .policy__small-list {
    font-size: 13px;
    line-height: 16px;
  }

  .policy__small-list-item {
    margin: 20px 0 0;
    padding: 0 0 0 9px;
    font-size: 13px;
    line-height: 16px;
  }

  .policy__big-list {
    padding: 0 0 0 15px;
  }
}
</style>
