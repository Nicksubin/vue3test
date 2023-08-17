<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper" :pagination="{ dynamicBullets: true, }">
    <swiper-slide class="main_visual">
      <h4 class="main_text">국내외 의약품 정책 동향에 대한 깊이 있는 분석을 통해<br> 의약품 산업의 발전과 국민 건강 증진에 기여합니다.</h4>
    </swiper-slide>
    <swiper-slide class="main_visual2">
      <h4 class="main_text">약사 서비스의 가치를 확립하여 더욱 건강한 사회를 만들기 위해<br> 폭 넓은 연구를 수행합니다.</h4>
    </swiper-slide>
  </swiper>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(Swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style>

.swiper { width: 100%; height: 100%; }

.swiper-slide { }

.swiper-slide > h4 {
  @apply
  container
  relative
  mx-auto
  flex self-center
  text-white text-left
  top-[55%]
  leading-normal
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @apply overflow-hidden
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.swiper-pagination { }

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #000;
}

.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  bottom: 5%;
  align-content: center;
}

.swiper-pagination-bullet-active {
  background:#fff;
}

.swiper-pagination-bottom {
  bottom: 10%;
}


</style>