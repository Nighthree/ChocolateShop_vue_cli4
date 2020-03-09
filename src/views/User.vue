<template>
  <div>
    <HomeHeader></HomeHeader>
    <Alert></Alert>
    <router-view></router-view>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "@/components/User/UserHeader.vue";
import HomeFooter from "@/components/User/UserFooter.vue";
import Alert from '../components/Alert';

export default {
  components: {
    HomeHeader,
    HomeFooter,
    Alert
  }
};
</script>
