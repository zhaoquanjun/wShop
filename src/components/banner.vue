<template>
  <swiper :mySwiper = 'swiperOpation' class="swiper-container">
    <swiper-slide v-for="img in imgs" class="swiper-slide">
      <a :href="img.url"><img src="src" :src="img.img" alt=""></a>
    </swiper-slide>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default{
    data(){
      return {
        imgs: [
          {img: require('../assets/banner_02.jpg'), url: 'http://zhaoquanjun.github.io/wShop/index.html'},
          {img: require('../assets/banner_02.jpg'), url: 'http://zhaoquanjun.github.io/wShop/index.html'},
          {img: require('../assets/banner_02.jpg'), url: 'http://zhaoquanjun.github.io/wShop/index.html'}
        ],
        swiperOpation: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          onSlideChangeEnd: swiper => {
            this.page = swiper.realIndex + 1;
            this.index = swiper.realIndex;
          }
        },
        swiperSlides: [1, 2, 3]
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }


</script>
