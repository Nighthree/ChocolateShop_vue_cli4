<template>
  <div>
    <div class="wrapSwiper position-relative mx-auto" data-aos="fade-up" data-aos-once="true">
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
                  <h6 class="card-title font-weight-bold text-dark mb-1">{{ item.title }}</h6>
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

      <div class="d-flex justify-content-center py-4">
        <div class="swiper-pagination productsSwiperPagination" slot="pagination"></div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
    // filterProducts(){
    //   const vm = this;
    //   return vm.products.filter(item=>{

    //   });
    // }
  }
};
</script>
