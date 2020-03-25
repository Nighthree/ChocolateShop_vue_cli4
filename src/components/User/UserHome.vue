<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Banner></Banner>

    <section class="container pt-5 bg-white position-relative">
      <div
        class="moreWrap mx-auto d-flex flex-column flex-md-row align-items-center justify-content-md-between"
        data-aos="fade-up"
      >
        <h3 class="h3 homeTitle font-weight-bold d-flex flex-column flex-md-row text-center">
          店長推薦
          <span class="d-flex align-items-center justify-content-center">Recommend</span>
        </h3>
      </div>
      <div
        class="wrapSwiper position-relative mx-auto mb-3"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div class="swiper-container productSwiper">
          <div class="swiper-wrapper">
            <swiper :options="swiperOptionProducts" ref="mySwiper">
              <swiper-slide class="p-2" v-for="item in products" :key="item.id">
                <router-link :to="{path: `/product/${item.id}`}" class="card cardList">
                  <div
                    class="bg-cover cardImgHeight"
                    :style="{backgroundImage: `url(${ item.imageUrl })`}"
                  >
                    <div class="glass d-flex justify-content-center">
                      <span>點擊查看更多</span>
                    </div>
                  </div>
                  <div class="card-body p-2 position-relative pb-4">
                    <p class="mb-2 badge badgeCategory">{{ item.category }}</p>
                    <h6 class="card-title font-weight-bold mb-1">{{ item.title }}</h6>
                    <div
                      class="h6 font-weight-bold text-danger"
                      v-if="!item.price"
                    >{{ item.origin_price | currency }} 元</div>
                    <div
                      class="h6 font-weight-bold text-danger"
                      v-if="item.price"
                    >{{ item.price | currency }} 元</div>
                    <a
                      href="#"
                      title="加入購物車"
                      class="btn btn-outline-danger addOneToCart"
                      @click.stop.prevent="addCart(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading === item.id"></i>
                      <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== item.id"></i>
                    </a>
                  </div>
                </router-link>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="swiper-pagination productsSwiperPagination d-none" slot="pagination"></div>
        <div class="productSwiperButton fas fa-chevron-circle-left" slot="button-prev"></div>
        <div class="productSwiperButton fas fa-chevron-circle-right" slot="button-next"></div>
      </div>

      <router-link
        to="/products"
        class="button btnMore mb-0 text-center"
        data-aos="fade-up"
        @click.prevent.native="getSearchText('All')"
      >
        更多精選巧克力
        <span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </router-link>
    </section>

    <section class="container pt-5 pb-4 bg-white position-relative">
      <div
        class="moreWrap mb-4 mx-auto d-flex flex-column flex-md-row align-items-center justify-content-md-between"
        data-aos="fade-up"
      >
        <h3
          class="h3 homeTitle font-weight-bold d-flex flex-column flex-md-row text-center mt-4 mt-md-0"
        >
          好吃的秘訣
          <span class="d-flex align-items-center justify-content-center">Tasty</span>
        </h3>
      </div>

      <div class="row">
        <div class="col-md-4 text-center" data-aos="fade-up">
          <img class="mb-3" src="../../assets/images/handmade4.png" alt />
          <h6 class="h5 text-dark">手工製作</h6>
          <p class="text-dark">
            官方認證手工產品
            <br />每一個步驟都用愛心和細心
            <br />不做機器大量生產
            <br />每一顆巧克力都是用手小心呵護
          </p>
        </div>

        <div class="col-md-4 text-center" data-aos="fade-up">
          <img class="mb-3" src="../../assets/images/cold-shipping.png" alt />
          <h6 class="h5 text-dark">冷藏運送</h6>
          <p class="text-dark">
            從製造巧克力的溫控工作室
            <br />比利時到台灣的低溫空運
            <br />進而到台灣倉儲的15度C溫控倉儲
            <br />全程幫您保鮮到家
          </p>
        </div>

        <div class="col-md-4 text-center" data-aos="fade-up">
          <img class="mb-3" src="../../assets/images/Premium-quality1.png" alt />
          <h6 class="h5 text-dark">優良品質</h6>
          <p class="text-dark">
            從可可樹到巧克力豆
            <br />到烘培 發酵 研磨的製程
            <br />親自監度製作
            <br />符合最嚴格的章程
          </p>
        </div>
      </div>

      <router-link to="/about" class="button btnAbout mb-0 text-center" data-aos="fade-up">
        我們的堅持
        <span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </router-link>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/User/Banner.vue";

export default {
  data() {
    return {
      swiperOptionProducts: {
        initialSlide: 0,
        direction: "horizontal",
        speed: 800,
        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        interval: 3500,
        pagination: {
          el: ".swiper-pagination.productsSwiperPagination",
          clickable: true,
          type: "bullets"
        },
        breakpoints: {
          576: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        },
        navigation: {
          nextEl: ".productSwiperButton.fa-chevron-circle-right",
          prevEl: ".productSwiperButton.fa-chevron-circle-left"
        }
      }
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    createProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
    },
    getSearchText(item) {
      this.$store.dispatch("getSearchText", item);
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    addCartLoading() {
      return this.$store.state.status.addCartLoading;
    }
  },
  components: {
    Banner
  },
  created() {
    this.getProducts();
  }
};
</script>
