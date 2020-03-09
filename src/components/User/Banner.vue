<template>
  <!-- <div id="carouselExampleCaptions" class="carousel slide choco" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" style="z-index:0">
        <router-link to="/products" class title="立刻選購">
          <img
            src
            class="d-block w-100 bg-cover bannerHeight"
            alt
            style="background-image:url(../../../../assets/images/星球-大.jpg)"
          />
          <div class="carousel-caption bg-op6 p-2 p-md-4">
            <h5>全館 8 折</h5>
            <p class="carouselPSize mb-2">輸入折扣碼 888 即享購物車 8 折優惠</p>
          </div>
        </router-link>
      </div>
      <div class="carousel-item" style="z-index:0">
        <router-link to="/coupon">
          <img
            src="../../assets/images/888.jpg"
            class="d-block w-100 bg-cover bannerHeight"
            alt
            style="background-image:url()"
          />
          <div class="carousel-caption bg-op6 p-2 px-md-4 py-md-4">
            <h5>開幕慶</h5>
            <p class="carouselPSize mb-2">參加活動取得購物車 8 折優惠碼</p>
          </div>
        </router-link>
      </div>
      <div class="carousel-item" style="z-index:0">
        <router-link to="/products">
          <img
            src
            class="d-block w-100 bg-cover bannerHeight"
            alt
            style="background-image:url(../assets/images/\346\230\237\347\220\203-\345\244\247.jpg)"
          />
          <div class="carousel-caption bg-op6 p-2 px-md-4 py-md-4">
            <h5>全館 6 折</h5>
            <p class="carouselPSize mb-2">輸入折扣碼 666 即享購物車 6 折優惠</p>
          </div>
        </router-link>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>-->
  <div>
    <swiper :options="swiperOption" class="bannerHeight">
      <swiper-slide><router-link to="/products" class="bannerLink bg-cover" title="立刻選購" style="background-image: url(https://raw.githubusercontent.com/Nighthree/ChocolateShop_vue_cli4/master/src/assets/images/888.jpg)"></router-link></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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
        loop: true,
        pagination: {
          el: ".swiper-pagination",
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
