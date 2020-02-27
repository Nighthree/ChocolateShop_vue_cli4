<template>
  <div>
    <HomeHeader></HomeHeader>
    <Banner class="mb-3 mb-md-5"></Banner>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "@/components/User/HomeHeader.vue";
import Banner from "@/components/User/Banner.vue";
import HomeFooter from "@/components/User/HomeFooter.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    Banner,
    HomeFooter
  }
};
</script>
