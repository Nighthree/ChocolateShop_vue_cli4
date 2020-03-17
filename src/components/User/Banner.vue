<template>
  <div class="banner">
    <swiper :options="swiperOption" class="bannerHeight">
      <swiper-slide>
        <router-link
          to="/products"
          class="bannerLink bg-cover"
          title="立刻選購"
          style="background-image: url(https://shoplineimg.com/58fef51759d524172c0003a4/5b7d25a1abcc37000e6b8024/2200x.webp?source_format=jpg)"
        >
          <div class="bannerInfo">
            <h1 class="h5">Chocolate</h1>
            <p class="mb-0">在這個巧克力的世界 帶給你不一樣的感受</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link
          to="/products"
          class="bannerLink bg-cover"
          title="立刻選購"
          style="background-image: url(https://vanillaknight.com/media/pics/20200102/1577952582.jpg)"
        >
          <div class="bannerInfo">
            <h3 class="h5">星球巧克力</h3>
            <p class="mb-0">模擬星球特徵，星球巧克力都有不同的外貌、口味</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link
          to="/products"
          class="bannerLink bg-cover"
          title="立刻選購"
          style="background-image: url(https://vanillaknight.com/shop/pics/20180215/1518667878.jpg)"
        >
          <div class="bannerInfo">
            <h3 class="h5">戀戀生巧</h3>
            <p class="mb-0">嚴選進口巧克力豆，醇厚滋味深深打動味蕾</p>
          </div>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination bannerSwiperPagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        loop: true,
        autoplay: true,
        interval: 4000,
        pagination: {
          el: ".swiper-pagination.bannerSwiperPagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
