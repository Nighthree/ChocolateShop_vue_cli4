import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
// import VeeValidate from 'vee-validate';
// import zhTwValidate from 'vee-validate/dist/locale/zh_TW';

import App from './App.vue'
import router from './router'
import store from './store'
import currencyFilter from './filter/currency';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);

Vue.component('Loading', Loading);

new Vue({
  created() {
    AOS.init({
      duration: 600,
      once: true
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
