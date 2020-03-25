<template>
  <div class="sticky-top nav-border bg-white" :class="{ 'logoBig' : logoSize }">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-white bg-white px-0">
        <router-link to="/" class="logo">
          最愛巧克力
          <span class="sr-only">(current)</span>
        </router-link>
        <button
          class="navbar-toggler border"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/news" class="nav-link headerBtn text-center">
                最新消息
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link headerBtn text-center">
                關於我們
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/products"
                class="nav-link headerBtn text-center"
                @click.prevent.native="getSearchText('All')"
              >
                商品列表
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/know" class="nav-link headerBtn text-center">
                吃巧克力的好處
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/coupon" class="nav-link headerBtn text-center">
                開幕慶活動
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <a
      href="#"
      @click.prevent="scrollTop"
      class="scrolltop d-flex justify-content-center align-items-center"
    >
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scroll: 0,
      logoSize: false,
      active: false
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    scrollBar() {
      const vm = this;
      vm.scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    getSearchText(item) {
      const vm = this;
      vm.$store.dispatch("getSearchText", item);
    }
  },
  computed: {
    searchTextItem() {
      return this.$store.state.status.searchTextItem;
    }
  },
  watch: {
    scroll() {
      const vm = this;
      const routeName = vm.$route.name;
      if (routeName !== "Home" && vm.scroll !== 0) {
        vm.logoSize = false;
      } else if (routeName === "Home" && vm.scroll === 0) {
        vm.logoSize = true;
      } else if (routeName === "Home" && vm.scroll !== 0) {
        vm.logoSize = false;
      }
    },
    $route(newUrl, oldUrl) {
      const vm = this;
      if (newUrl.name === "Home") {
        vm.logoSize = true;
      } else {
        vm.logoSize = false;
      }
      if (newUrl.name === "Products" || newUrl.name === "Product") {
        vm.active = true;
      } else {
        vm.active = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollBar);
  },
  created() {
    const vm = this;
    const routeName = vm.$route.name;
    if (routeName === "Home") {
      vm.logoSize = true;
    }
  }
};
</script>
