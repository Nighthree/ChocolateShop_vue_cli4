<template>
  <div class="banner">
    <swiper :options="swiperOption" class="bannerHeight">
      <swiper-slide>
        <router-link
          to="/products"
          class="bannerLink bg-cover"
          title="立刻選購"
          style="background-image: url(https://vanillaknight.com/media/pics/20200102/1577952582.jpg)"
        >
          <div class="bannerInfo">
            <h2 class="h5">精緻巧克力球系列</h2>
            <h3 class="h1">星球巧克力</h3>
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
            <h2 class="h5">濃醇生巧系列</h2>
            <h3 class="h1">戀戀生巧</h3>
          </div></router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>
