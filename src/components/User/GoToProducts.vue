<template>
  <div>
    <section class="position-relative" data-aos="fade-up">
      <img
        class="img-fluid"
        src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2018/11/about-full-img-2.jpg"
        alt
      />
      <a
        class="btn btnToPro"
        style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%)"
        data-aos="fade-up"
        @click.prevent="getSearchText('All')"
      >立即選購</a>
    </section>
  </div>
</template>

<script>
export default {
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
