<template>
  <div class="main">
    <swiper></swiper>
  </div>
  <div class="main_section1">
    <div>
      <h4 class="title">컨텐츠 타이틀 01</h4>
    </div>
    <div>
      <p class="subtitle">Company</p>
    </div>
  </div>
</template>


<script>
import Swiper from "@/views/main/Swiper.vue";
import { Navigation } from 'swiper/modules';

export default {
  name: "MainView",
  components: {
    Swiper,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};

</script>

<style>
</style>