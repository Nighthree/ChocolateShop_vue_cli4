<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container minHeight py-4 pt-md-5 mb-5">
      <div class="row" data-aos="fade-up">
        <div class="col-md-6 col-12 mb-3">
          <img class="img-fluid" :src="product.imageUrl" style="border-radius:10px" />
        </div>
        <div class="col-md-6 col-12 product">
          <div class="d-flex flex-column h-100">
            <h1 class="h4 font-weight-bold my-3">{{ product.title }}</h1>
            <h6 class="text-secondary proInfo mb-3">產品介紹</h6>
            <p class="pl-4 mb-3">{{ product.description }}</p>
            <p class="text-secondary text-right mb-3">－ {{ product.content }}</p>
            <div :class="{ 'open' : knowBuy }">
              <h6
                class="text-secondary proInfo mb-3 d-flex justify-content-between"
                @click="knowBuy = !knowBuy"
              >
                <span>購物須知</span>
                <i class="fas fa-chevron-down arrow mr-4"></i>
              </h6>
              <div class="buyKnow text-secondary">
                <p class="pl-4 mb-3">線上訂購須於三天前下訂，依照訂購流程可選擇到貨日期，會依照您指定的到貨日期及時間配送唷！</p>
                <p class="pl-4 mb-3">賞味期限：冷藏5天內食用完畢(不可冷凍)</p>
              </div>
            </div>
            <p v-if="product.origin_price == product.price">原價 {{product.origin_price}} 元</p>
            <p class="h5 text-right mb-3" v-if="product.price !== product.origin_price">
              優惠價
              <span class="text-danger font-weight-bold">{{ product.price }}</span> 元
            </p>
            <div class="d-flex justify-content-end inputDiv">
              <label for="productNum" class="proInputText mb-0 text-secondary">數量：</label>
              <select name id="productNum" v-model="num" class="px-3 py-1 mb-0 productInput">
                <option class :value="num" v-for="num in 10" :key="num">{{ num }}</option>
              </select>
              <a
                href="#"
                class="btn btn-outline-danger align-self-center"
                @click.prevent="addCart(product.id, num)"
              >
                <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading == product.id"></i>
                <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== product.id"></i>
                加入購物車
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container pb-5">
      <div class="d-flex border-bottom mb-3">
        <h6 class="text-Choco similarPro mb-0">同系列商品</h6>
      </div>
      <!-- 處理商品量不足時 swpier 複製商品的情況，因為沒必要複製 -->
      <div
        class="row"
        :class="[{ judgeRow : filterProduct.length < 4 },{ closeRow : filterProduct.length >= 4 }]"
      >
        <div
          class="col-md-4 col-sm-6 col-12 mb-3"
          data-aos="fade-up"
          data-aos-once="true"
          v-for="item in filterProduct"
          :key="item.id"
        >
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
              <p class="mb-2 badge badge-secondary">{{ item.category }}</p>
              <h6 class="card-title font-weight-bold text-dark mb-1 text-center">{{ item.title }}</h6>
              <div
                class="h6 font-weight-bold text-danger text-center"
                v-if="!item.price"
              >{{ item.origin_price | currency }} 元</div>
              <div
                class="h6 font-weight-bold text-danger text-center"
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
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        :class="{ judgeSwiper : filterProduct.length < 4 }"
      >
        <div class="swiper-container productSwiper">
          <div class="swiper-wrapper">
            <swiper :options="swiperOption1" ref="mySwiper" v-if="products.length > 0">
              <swiper-slide class="p-2" v-for="item in filterProduct" :key="item.id">
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
                    <p class="mb-2 badge badge-secondary">{{ item.category }}</p>
                    <h6
                      class="card-title font-weight-bold text-dark mb-1 text-center"
                    >{{ item.title }}</h6>
                    <div
                      class="h6 font-weight-bold text-danger text-center"
                      v-if="!item.price"
                    >{{ item.origin_price | currency }} 元</div>
                    <div
                      class="h6 font-weight-bold text-danger text-center"
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
        <div class="d-flex justify-content-center pt-3 productSwiper d-block d-lg-none">
          <div class="swiper-pagination mx-1" slot="pagination"></div>
        </div>
      </div>

      <div class="d-flex justify-content-end pt-5">
        <router-link to="/products" class="toProducts font-weight-bold">
          <i class="fas fa-arrow-left"></i> 回到商品列表
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: "",
      product: {},
      num: "1",
      knowBuy: false,
      swiperOption1: {
        initialSlide: 0,
        direction: "horizontal",
        speed: 800,
        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        interval: 3500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
        breakpoints: {
          544: {
            slidesPerView: 1
          },
          767: {
            slidesPerView: 2,
            centeredSlides: false
          },
          991: {
            slidesPerView: 3,
            centeredSlides: false
          }
        }
      }
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    getProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/product/${id}`;
      vm.$http.get(api).then(response => {
        vm.product = response.data.product;
      });
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    addCartLoading() {
      return this.$store.state.status.addCartLoading;
    },
    products() {
      return this.$store.state.products;
    },
    filterProduct() {
      const vm = this;
      const filterPro = vm.products.filter(item => {
        return item.category === vm.product.category;
      });
      const filterProTitle = [];
      filterPro.forEach(function(item) {
        filterProTitle.push(item.title);
      });
      const key = filterProTitle.indexOf(vm.product.title);
      filterPro.splice(key, 1);
      return filterPro;
    }
  },
  watch: {
    $route(newUrl, oldUrl) {
      const vm = this;
      if (newUrl.params.productId !== oldUrl.params.productId) {
        vm.getProduct(newUrl.params.productId);
      }
    }
  },
  created() {
    const vm = this;
    vm.productId = vm.$route.params.productId;
    vm.getProduct(vm.productId);
    vm.getProducts();
  }
};
</script>
