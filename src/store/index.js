import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [],
    status: {
      isLoading: false,
      categories: [],
      searchTextItem: '',
      addCartLoading: ''
    },
    cart: {
      carts: []
    }
  },
  actions: {
    getProducts(context, page) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products/all`;
      context.commit('LOADING', true);
      axios.get(api).then(response => {
        context.commit('GET_PRODUCTS', response.data.products);
        context.commit('GET_CATEGORIES', response.data.products);
        context.commit('LOADING', false);
      });
    },
    getSearchText(context, item) {
      context.commit('GET_SEARCHTEXT', item);
    },
    getCart(context, payload) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      context.commit('LOADING', true);
      axios.get(api).then(response => {
        context.commit('GET_CART', response.data.data);
        context.commit('LOADING', false);
      });
    },
    addCart(context, { id, qty }) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      context.commit('GET_ADDCARTLOADING', id);
      context.commit('LOADING', true);
      const cart = {
        product_id: id,
        qty: qty
      };
      axios.post(api, { data: cart }).then(response => {
        context.dispatch('getCart');
        context.commit('GET_ADDCARTLOADING', '');
        context.commit('LOADING', false);
        alert('購物車新增成功');
      });
    },
    delCart(context, id) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(api).then(response => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
        alert('購物車商品刪除成功');
      });
    },
    pushLoadingStatu(context, payload) {
      context.commit('LOADING', payload);
    }
  },
  mutations: {
    LOADING(state, statu) {
      state.status.isLoading = statu;
    },
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    GET_CATEGORIES(state, payload) {
      const categoryItem = [];
      payload.forEach(item => {
        categoryItem.push(item.category);
      });
      state.status.categories = Array.from(new Set(categoryItem));
    },
    GET_CART(state, payload) {
      state.cart = payload;
    },
    GET_SEARCHTEXT(state, payload) {
      state.status.searchTextItem = payload;
    },
    GET_ADDCARTLOADING(state, payload) {
      state.status.addCartLoading = payload;
    }
  }
})
