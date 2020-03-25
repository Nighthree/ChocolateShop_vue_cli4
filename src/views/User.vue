<template>
  <div>
    <HomeHeader></HomeHeader>
    <Alert></Alert>
    <Cart :class="{ block : cartHidden }"></Cart>
    <router-view></router-view>
    <GoToProducts :class="{ block : goToProHidden }"></GoToProducts>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "@/components/User/UserHeader.vue";
import HomeFooter from "@/components/User/UserFooter.vue";
import Alert from "@/components/Alert.vue";
import Cart from "@/components/User/Cart.vue";
import GoToProducts from "@/components/User/GoToProducts.vue";

export default {
  data() {
    return {
      cartHidden: false,
      goToProHidden: false
    };
  },
  methods: {
    getRouteName() {
      const vm = this;
      if (vm.$route.name === "Order" || vm.$route.name === "Checkout") {
        vm.cartHidden = true;
        vm.goToProHidden = true;
      } else if (
        vm.$route.name === "Products" ||
        vm.$route.name === "Product"
      ) {
        vm.goToProHidden = true;
      } else {
        vm.cartHidden = false;
        vm.goToProHidden = false;
      }
    }
  },
  watch: {
    $route(newUrl, oldUrl) {
      const vm = this;
      if (newUrl.name === "Order" || newUrl.name === "Checkout") {
        vm.cartHidden = true;
        vm.goToProHidden = true;
      } else if (newUrl.name === "Products" || newUrl.name === "Product") {
        vm.goToProHidden = true;
        vm.cartHidden = false;
      } else {
        vm.cartHidden = false;
        vm.goToProHidden = false;
      }
    }
  },
  components: {
    HomeHeader,
    HomeFooter,
    Alert,
    Cart,
    GoToProducts
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
