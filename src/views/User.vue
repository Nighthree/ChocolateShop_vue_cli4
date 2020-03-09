<template>
  <div>
    <HomeHeader></HomeHeader>
    <Alert></Alert>
    <Cart :class="{ block : hidden }"></Cart>
    <router-view></router-view>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "@/components/User/UserHeader.vue";
import HomeFooter from "@/components/User/UserFooter.vue";
import Alert from "@/components/Alert";
import Cart from "@/components/User/Cart";

export default {
  data() {
    return {
      hidden: false
    };
  },
  methods: {
    getRouteName() {
      const vm = this;
      if (vm.$route.name === "Order" || vm.$route.name === "Checkout") {
        vm.hidden = true;
      } else {
        vm.hidden = false;
      }
    }
  },
  watch: {
    $route(newUrl, oldUrl) {
      const vm = this;
      if (newUrl.name === "Order" || newUrl.name === "Checkout") {
        vm.hidden = true;
      } else {
        vm.hidden = false;
      }
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    Alert,
    Cart
  },
  created() {
    const vm = this;
    vm.getRouteName();
  }
};
</script>

<style  scoped>
.block {
  display: none;
}
</style>
