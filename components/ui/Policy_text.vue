<template>
  <p class="politica">
    Нажимая на кнопку «отправить», вы даете согласие на
    <nuxt-link to="/policy" class="politica__link" target="_blank"
      >обработку персональных данных</nuxt-link
    >
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.politica {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  max-width: 378px;
  color: #666666;
  margin: 0;
}

.politica__link {
  color: inherit;
}

.politica__link:hover {
  opacity: 0.8;
}
</style>
