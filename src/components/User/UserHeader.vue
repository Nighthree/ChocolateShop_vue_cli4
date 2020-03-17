<template>
  <div class="sticky-top nav-border bg-white">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-white bg-white px-0">
        <router-link to="/home" class="logo" :class="{ 'logoBig' : logoSize }">
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
          <ul class="navbar-nav ml-auto">
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
              <router-link to="/products" class="nav-link headerBtn text-center">
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
      logoSize: false
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
    }
  },
  watch: {
    scroll() {
      const vm = this;
      if (vm.logoSize && vm.scroll !== 0) {
        vm.logoSize = false;
      } else if (vm.scroll === 0) {
        vm.logoSize = true;
      }
      console.log("logoSize", vm.logoSize);
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
