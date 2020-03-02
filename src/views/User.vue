<template>
  <div>
    <HomeHeader></HomeHeader>
    <router-view></router-view>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "@/components/User/UserHeader.vue";
import HomeFooter from "@/components/User/UserFooter.vue";

export default {
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>
