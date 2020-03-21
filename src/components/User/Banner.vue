<template>
  <div class="banner container mt-4 bg-white">
    <div class="border border-Choco p-2">
      <swiper :options="swiperOption" class="bannerHeight">
        <swiper-slide>
          <a
            class="bannerLink bg-cover"
            title="立刻選購"
            style="background-image: url(https://raw.githubusercontent.com/Nighthree/ChocolateShop_vue_cli4/master/src/assets/images/banner_1.jpg)"
            @click.prevent="getSearchText('All')"
          >
            <div class="bannerInfo">
              <h1 class="h1">Chocolate</h1>
              <p class="mb-0">在這個巧克力的世界 帶給你不一樣的感受</p>
            </div>
            <div class="bannerMore font-weight-bold">了解更多</div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <router-link
            to="/product/-M06eBFgtJOcvX_-zVrT"
            class="bannerLink bg-cover"
            title="立刻選購"
            style="background-image: url(https://vanillaknight.com/media/pics/20200102/1577952582.jpg)"
          >
            <div class="bannerInfo">
              <h3 class="h1">星球巧克力</h3>
              <p class="mb-0">模擬星球特徵，星球巧克力都有不同的外貌、口味</p>
            </div>
            <div class="bannerMore font-weight-bold">了解更多</div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <a
            class="bannerLink bg-cover"
            title="立刻選購"
            style="background-image: url(https://vanillaknight.com/shop/pics/20180215/1518667878.jpg)"
            @click.prevent="getSearchText('濃醇生巧克力')"
          >
            <div class="bannerInfo">
              <h3 class="h1">戀戀生巧</h3>
              <p class="mb-0">嚴選進口巧克力豆，醇厚滋味深深打動味蕾</p>
            </div>
            <div class="bannerMore font-weight-bold">了解更多</div>
          </a>
        </swiper-slide>
        <div class="swiper-pagination bannerSwiperPagination" slot="pagination"></div>
        <div class="bannerButton fas fa-chevron-circle-left" slot="button-prev"></div>
        <div class="bannerButton fas fa-chevron-circle-right" slot="button-next"></div>
      </swiper>
    </div>
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
          nextEl: ".bannerButton.fas.fa-chevron-circle-right",
          prevEl: ".bannerButton.fas.fa-chevron-circle-left"
        }
      }
    };
  },
  methods: {
    getSearchText(item) {
      const vm = this;
      vm.$store.dispatch("getSearchText", item);
      if (vm.searchTextItem === item) {
        vm.$router.push("/products");
      }
    }
  },
  computed: {
    searchTextItem() {
      return this.$store.state.status.searchTextItem;
    }
  }
};
</script>
