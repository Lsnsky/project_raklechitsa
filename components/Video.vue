<template>
  <section id="video" class="video">
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
        <button-switch position="left" :type="lActive" @buttonClick="back" />
        <button-switch
          position="right"
          :type="rActive"
          @buttonClick="further"
        />
      </div>
    </div>
    <div class="video__wrapper">
      <button-switch
        class="video__small-button video__small-button_position_left"
        position="left"
        :type="lActive"
        @buttonClick="back"
      />
      <button-switch
        class="video__small-button video__small-button_position_right"
        position="right"
        :type="rActive"
        @buttonClick="further"
      />
      <div class="video__frame">
        <video-frame :url="links[id].url" />
      </div>
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
  methods: {
    back() {
      if (this.id !== 0) {
        this.id -= 1;
        this.lActive = this.id === 0 ? 'inactive' : 'active';
        this.rActive =
          this.id === this.links.length - 1 ? 'inactive' : 'active';
      }
    },
    further() {
      if (this.id < this.links.length - 1) {
        this.id += 1;
        this.rActive =
          this.id === this.links.length - 1 ? 'inactive' : 'active';
        this.lActive = this.id === 0 ? 'inactive' : 'active';
      }
    },
  },
  components: {
    'button-switch': Button_switch,
    'video-frame': Video_frame,
  },
  data() {
    return {
      lActive: 'inactive',
      rActive: 'active',
      id: 0,
      links: [
        {
          id: 1,
          url: 'https://www.youtube.com/embed/coOppM34GtI',
        },
        {
          id: 2,
          url: 'https://www.youtube.com/embed/FFrioIZ65q0',
        },
        {
          id: 3,
          url: 'https://www.youtube.com/embed/ZKWilQnPovg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.video {
  max-width: 1320px;
  margin: 0 auto 74px;
  padding: 100px 60px 0;
  display: flex;
}

.video__small-button {
  display: none;
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

.video__frame {
  position: relative;
  border: none;
  width: 100%;
  padding-top: calc((100% + 33px) / 2);
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

.video__wrapper:last-child {
  margin-left: auto;
  width: calc(100% / 3 * 2 - 13px);
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

@media screen and (max-width: 1280px) {
  .video {
    padding: 90px 50px 0;
    margin: 0 auto 64px;
  }

  .video__title {
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
    margin: 10px 0 30px;
  }

  .video__subtitle {
    font-size: 16px;
    line-height: 20px;
    max-width: 305px;
  }

  .video__more {
    margin: 11px 0 0;
  }

  .video__wrapper:last-child {
    width: calc(100% / 3 * 2 - 14px);
  }

  .video__frame {
    padding-top: calc((100% + 27px) / 2);
  }
}

@media screen and (max-width: 1024px) {
  .video {
    padding: 80px 50px 0;
    margin: 0 auto 54px;
  }
  .video__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
    margin: 10px 0 20px;
  }
  .video__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }

  .video__wrapper:last-child {
    width: calc(100% / 3 * 2 - 10px);
  }

  .video__frame {
    padding-top: calc((100% + 23px) / 2);
  }
}

@media screen and (max-width: 899px) {
  .video {
    flex-direction: column;
    align-items: center;
    padding: 72px 15px 0;
    margin: 0 auto 44px;
  }

  .video__title {
    text-align: center;
    max-width: 380px;
    margin: 10px 0 26px;
  }

  .video__subtitle {
    max-width: 385px;
    margin: 0 0 60px;
  }

  .video__buttons {
    display: none;
  }

  .video__small-button {
    display: block;
    position: absolute;
    background-color: #fbfbfb;
  }

  .video__small-button_position_left {
    left: -54px;
    top: calc(100% / 3 + 18px);
  }

  .video__small-button_position_right {
    right: -54px;
    top: calc(100% / 3 + 18px);
  }

  .video__wrapper:last-child {
    position: relative;
    width: calc(100% - 158px);
    margin: 0;
  }
  .video__more {
    margin: 18px 0 0;
  }
  .video__frame {
    padding-top: calc((100% + 19px) / 2);
  }
}

@media screen and (max-width: 525px) {
  .video {
    padding: 50px 15px 0;
    margin: 0 auto 50px;
  }

  .video__title {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    max-width: 290px;
    margin: 0 0 16px;
  }

  .video__subtitle {
    max-width: 290px;
    margin: 0 0 40px;
  }

  .video__small-button {
    z-index: 2;
    background-color: rgba(255, 255, 255, 0);
  }

  .video__small-button_position_left {
    left: -10px;
    top: calc(100% / 3 + 5px);
  }

  .video__small-button_position_right {
    right: -10px;
    top: calc(100% / 3 + 5px);
  }

  .video__wrapper:last-child {
    width: 100%;
  }
  .video__more {
    display: none;
  }
  .video__frame {
    padding-top: calc((100% + 10px) / 2);
  }
}
</style>
