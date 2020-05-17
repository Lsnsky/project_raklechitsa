<template>
  <div>
    <button class="button_search">
      Заполнить форму
    </button>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.button_search {
  width: 280px;
  height: 52px;
  background-color: #613a93;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
  cursor: pointer;
  transition: all linear 0.1s;
  outline: none;
}
@media screen and (max-width: 1280px) {
  .button_search {
    width: 230px;
    height: 46px;
  }
}
@media screen and (max-width: 512px) {
  .button_search {
    width: 290px;
    height: 40px;
  }
}
</style>
