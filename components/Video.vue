<template>
  <section class="video">
    <div class="video__wrapper">
      <h2 class="video__title">
        Истории людей, победивших рак, но не свои привычки
      </h2>
      <p class="video__subtitle">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </p>
      <div class="video__buttons">
        <button-switch :position="'left'" :type="'unactive'" />
        <button-switch :position="'right'" :type="'active'" />
      </div>
    </div>
    <div class="video__wrapper">
      <video-frame class="video__frame" />
      <p class="video__more">
        Все видео вы можете найте на нашем
        <a
          href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
          class="video__link"
          >YouTube канале.</a
        >
      </p>
    </div>
  </section>
</template>

<script>
import Button_switch from '@/components/ui/Button_switch';
import Video_frame from '@/components/ui/Video_frame';
export default {
  components: {
    'button-switch': Button_switch,
    'video-frame': Video_frame,
  },
};
</script>

<style scoped>
.video {
  max-width: 1320px;
  margin: 0 auto 74px;
  display: flex;
  justify-content: space-between;
}

.video__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  margin: 10px 0 32px;
}

.video__subtitle {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  max-width: 345px;
  margin: 0;
}

.video__iframe {
  border: none;
  width: 867px;
  height: 450px;
}

.video__more {
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  margin: 10px 0 0;
}

.video__wrapper {
  display: flex;
  flex-direction: column;
}

.video__link {
  color: inherit;
}

.video__buttons {
  margin: auto 0 26px;
  background: #fbfbfb;
  max-width: 80px;
  display: flex;
}
</style>
