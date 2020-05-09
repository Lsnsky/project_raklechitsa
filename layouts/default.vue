<template>
  <div>
    <main-header @shareClick="popupOpen()" />
    <main-popup :popDisplay="popupDisplay" @closeClick="popupClose()" />
    <nuxt @shareClick="popupOpen()" />
    <main-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    'main-popup': Popup,
  },
  methods: {
    popupClose() {
      this.popupDisplay = 'invisible';
    },
    popupOpen() {
      this.popupDisplay = 'visible';
    },
  },
  data() {
    return {
      popupDisplay: 'invisible',
    };
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>

// /* Основной код для разрешения 1024px */ // @media (min-width : 2560px) { //
/* стили для больших мониторов с разрешением 4K */ // } // @media (min-width :
1440px) { // /* стили для больших настольных компьютеров и ноутбуков */ // } //
@media (max-width : 768px) { // /* стили для планшета */ // } // @media
(max-width : 425px) { // /* стили для широкого смартфона */ // } // @media
(max-width : 375px) { // /* стили для среднего смартфона */ // } // @media
(max-width : 320px) { // /* стили для малого смартфона */ // }
