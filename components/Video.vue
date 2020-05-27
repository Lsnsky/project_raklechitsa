<template>
  <section id="video" class="video">
    <container class="video__container">
      <div class="video__wrapper">
        <h2 class="video__title">
          {{ videoData.title }}
        </h2>

        <div class="video__subtitle-wrapper" v-html="videoData.text"></div>
        <div class="video__buttons">
          <button-switch
            position="left"
            :disabled="getLeftStatus"
            @buttonClick="back"
          />
          <button-switch
            position="right"
            @buttonClick="further"
            :disabled="getRightStatus"
          />
        </div>
      </div>
      <div class="video__wrapper">
        <button-switch
          class="video__small-button video__small-button_position_left"
          position="left"
          @buttonClick="back"
          :disabled="getLeftStatus"
        />
        <button-switch
          class="video__small-button video__small-button_position_right"
          position="right"
          @buttonClick="further"
          :disabled="getRightStatus"
        />
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper video__frame">
            <div
              class="swiper-slide"
              v-for="video in getVideos"
              :key="video.id"
            >
              <video-frame :url="video.url" />
              <div class="video__overlay" @click="videoStart($event)"></div>
            </div>
          </div>
        </div>
        <p class="video__more">
          <a
            href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
            class="video__link"
            >{{ videoData.note }}</a
          >
        </p>
      </div>
    </container>
  </section>
</template>

<script>
import Button_switch from '@/components/ui/Button_switch';
import Video_frame from '@/components/ui/Video_frame';
import Container from '@/components/ui/Container';
export default {
  methods: {
    videoStart(evt) {
      evt.target.classList.remove('video__overlay');
    },
    back() {
      this.$store.dispatch('video/priviousVideo');
      let mySwiper = document.querySelector('.swiper-container').swiper;
      this.mySwiper.slidePrev(400, true);
    },
    further() {
      this.$store.dispatch('video/nextVideo');
      let mySwiper = document.querySelector('.swiper-container').swiper;
      this.mySwiper.slideNext(400, true);
    },
  },
  data() {
    return {
      amySwiper: {},
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        effect: 'coverflow',
        centeredSlides: true,
        simulateTouch: false,
        shortSwipes: false,
        longSwipes: false,
      },
    };
  },
  computed: {
    getLeftStatus() {
      return this.$store.getters['video/getLeftStatus'];
    },
    getRightStatus() {
      return this.$store.getters['video/getRightStatus'];
    },
    videoData() {
      return this.$store.getters['blocks/getVideoBlock'];
    },
    getVideos() {
      return this.$store.getters['video/getVideos'];
    },
    getOverlays() {
      return this.$store.getters['video/getOverlays'];
    },
  },
  mounted() {
    document
      .querySelector('.video__subtitle-wrapper')
      .querySelector('p')
      .classList.add('video__subtitle');
    document.querySelectorAll('.video__overlay').forEach((el, i) => {
      el.style.backgroundImage = `url('/images/Subtract.svg'), url('${this.getOverlays[i]}')`;
    });
  },
  components: {
    'button-switch': Button_switch,
    'video-frame': Video_frame,
    container: Container,
  },
};
</script>

<style scoped>
.some {
  height: 100%;
}
.video {
  margin: 100px 0 74px;
  display: flex;
  padding: 0;
}

.video__container {
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

.video__overlay {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-position: center, center;
  background-size: auto, cover;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all linear 0.6s 0.2s;
}

.video__overlay:hover {
  opacity: 0;
}

.video__subtitle-wrapper >>> .video__subtitle {
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
    margin: 90px 0 64px;
  }

  .video__title {
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
    margin: 10px 0 30px;
  }

  .video__subtitle-wrapper >>> .video__subtitle {
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
    min-height: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .video {
    margin: 80px 0 54px;
  }
  .video__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
    margin: 10px 0 20px;
  }
  .video__subtitle-wrapper >>> .video__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }

  .video__wrapper:last-child {
    width: calc(100% / 3 * 2 - 10px);
  }

  .video__frame {
    min-height: 314px;
  }
}

@media screen and (max-width: 899px) {
  .video {
    margin: 72px 0 44px;
  }

  .video__container {
    flex-direction: column;
    align-items: center;
  }

  .video__title {
    text-align: center;
    max-width: 380px;
    margin: 10px 0 26px;
  }

  .video__subtitle-wrapper >>> .video__subtitle {
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
    min-height: 300px;
  }
}

@media screen and (max-width: 525px) {
  .video {
    margin: 50px 0;
  }

  .video__title {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    max-width: 290px;
    margin: 0 0 16px;
  }

  .video__subtitle-wrapper >>> .video__subtitle {
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
    min-height: 150px;
  }
}
</style>
