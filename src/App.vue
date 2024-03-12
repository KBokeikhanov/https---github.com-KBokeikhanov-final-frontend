<template>
  <div id="app">
    <HeaderComponents />
    <router-view></router-view>
    <FooterComponents />
  </div>
</template>

<script>
import HeaderComponents from './components/HeaderComponents.vue';
import FooterComponents from './components/FooterComponents.vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
  name: 'App',
  components: {
    HeaderComponents,
    FooterComponents
  },
  mounted() {
    new Swiper('.swiper-container', {
    });
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
