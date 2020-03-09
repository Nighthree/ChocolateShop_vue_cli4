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
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import { email } from 'vee-validate/dist/rules';

import App from './App.vue';
import router from './router';
import './bus';
import store from './store';
import currencyFilter from './filter/currency';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);

Vue.filter('currency', currencyFilter);
Vue.component('Loading', Loading);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
localize('zh_TW', TW);

axios.defaults.withCredentials = true;

extend('email', email);

extend('min', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length']
});

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

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API_PATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login'
        });
      }
    });
  } else {
    next();
  }
});
