<template>
  <section class="photos">
    <panel class="panel__container">
      <div class="panel__text">РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ</div>
      <div class="panel__text_hashtag">#ЭТОНЕЛЕЧИТСЯ</div>
    </panel>
    <div class="photos__content">
      <div class="photos__info">
        <h2 class="photos__title">Инстаграм</h2>
        <p class="photos__text">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="photos__cards">
        <photo />
        <photo />
        <photo />
        <photo />
        <photo />
        <photo />
        <photo />
        <photo />
      </div>
    </div>
  </section>
</template>

<script>
import Panel from '@/components/ui/Panel';
import Photo from '@/components/ui/Photo';
export default {
  components: {
    panel: Panel,
    photo: Photo,
  },
};
</script>

<style scoped>
@media (min-width: 1281px) {
  .photos {
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1320px;
    margin: 100px auto;
  }
  .photos__info {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
  }
  .photos__title {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    /* identical to box height, or 112% */
    text-decoration-line: underline;
    color: #000000;
    margin: 0px;
  }
  .photos__text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* or 122% */
    color: #666666;
    max-width: 340px;
    height: 176px;
    margin-top: 32px;
    margin-bottom: 0px;
  }
  .photos__content {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin: 100px 0px 0px;
  }

  .photos__cards {
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: repeat(2, 195px);
    grid-template-columns: repeat(4, 195px);
    grid-gap: 30px;
  }
  .panel__container {
    /* border: 1px solid red; */
    width: 1320px;
    height: 129px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .panel__text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }

  .panel__text_hashtag {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }
}
@media (max-width: 1280px) {
  .photos {
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1180px;
    margin: 100px auto;
  }
  .photos__info {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
  }
  .photos__title {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    /* identical to box height, or 112% */
    text-decoration-line: underline;
    color: #000000;
    margin: 0px;
  }
  .photos__text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* or 122% */
    color: #666666;
    width: 305px;
    margin-top: 32px;
    margin-bottom: 0px;
    margin-right: 110px;
  }
  .photos__content {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin: 100px 0px 0px;
  }

  .photos__cards {
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: repeat(2, minmax(171px, 1fr));
    grid-template-columns: repeat(4, minmax(171px, 1fr));
    grid-gap: 27px;
  }
  .panel__container {
    /* border: 1px solid red; */
    width: 1320px;
    height: 129px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .panel__text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }

  .panel__text_hashtag {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }
}
@media (max-width: 1024px) {
  .photos {
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 924px;
    margin: 100px auto;
  }
  .photos__info {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
  }
  .photos__title {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height, or 112% */
    text-decoration-line: underline;
    color: #000000;
    margin: 0px;
  }
  .photos__text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    /* or 122% */
    color: #666666;
    width: 260px;
    margin-top: 32px;
    margin-bottom: 0px;
    margin-right: 60px;
  }
  .photos__content {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin: 100px 0px 0px;
  }

  .photos__cards {
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: repeat(2, minmax(136px, 1fr));
    grid-template-columns: repeat(4, minmax(136px, 1fr));
    gap: 20px;
  }
  .panel__container {
    /* border: 1px solid red; */
    width: 1320px;
    height: 129px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .panel__text {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }

  .panel__text_hashtag {
    /* border: 1px solid red; */
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 46px;
    /* identical to box height, or 153% */
    text-align: center;
    color: #ffffff;
  }
}
</style>
