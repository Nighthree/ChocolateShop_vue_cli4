<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="minHeight">
      <div class="container py-4 pt-md-5 mb-5">
        <div class="row">
          <div class="col-md-3">
            <ul class="ulStyle">
              <li class="text-center productList" :class="{ 'active': searchText === 'All'}">
                <a
                  href="#"
                  class="d-block text-decoration-none py-2 rounded"
                  @click.prevent="getSearchText(item = 'All')"
                >全部商品</a>
              </li>
              <li
                class="text-center productList"
                v-for="item in categories"
                :key="item"
                :class="{ 'active': searchText === item }"
              >
                <a
                  href="#"
                  class="d-block text-decoration-none py-2 rounded"
                  @click.prevent="getSearchText(item)"
                >{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 mb-4"
                data-aos="fade-up"
                data-aos-once="true"
                v-for="item in filterData"
                :key="item.id"
              >
                <a class="card cardList" @click.stop.prevent="createProduct(item.id)">
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
                    <h6
                      class="card-title font-weight-bold mb-1"
                    >{{ item.title }}</h6>
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
                      class="btn btn-outline-danger addOneToCart p-2"
                      @click.stop.prevent="addCart(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading === item.id"></i>
                      <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== item.id"></i>
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "All"
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    getSearchText(item) {
      this.searchText = item;
      this.$store.dispatch("getSearchText");
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
    },
    createProduct(id) {
      this.$router.push(`/product/${id}`);
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    categories() {
      return this.$store.state.status.categories;
    },
    products() {
      return this.$store.state.products;
    },
    filterData() {
      const vm = this;
      const filterCategory = vm.searchText;
      if (filterCategory === "All") {
        return vm.products;
      } else {
        const categoryData = vm.products.filter(function(item) {
          return item.category === filterCategory;
        });
        return categoryData;
      }
    },
    addCartLoading() {
      return this.$store.state.status.addCartLoading;
    }
  },
  created() {
    // this.$store.dispatch("getSearchText", "All");
    this.getProducts();
  }
};
</script>
