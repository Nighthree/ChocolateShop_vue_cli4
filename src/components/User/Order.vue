<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div v-if="cart.total == 0" class="minHeight d-flex justify-content-center align-items-center">
      <router-link
        to="/products"
        class="btn btnChoco rounded p-5"
        title="回到商品頁面"
        style="font-size:22px"
      >
        購物車還空空的喔！
        <br />趕快去選購吧！
      </router-link>
    </div>

    <div class="minHeight" v-else>
      <div class="container pt-5">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12">
            <ul class="form-row ulStyle justify-content-md-around mb-0">
              <li class="col-md-4 col-12 mb-3">
                <span class="checkStep d-block text-center active">1.填寫訂購資料</span>
              </li>
              <li class="col-md-4 col-12 mb-3">
                <span class="checkStep d-block text-center">2.金流付款</span>
              </li>
              <li class="col-md-4 col-12 mb-3">
                <span class="checkStep d-block text-center">3.完成！</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 pt-5">
            <h2 class="font-weight-bold h4 text-center pb-3 mb-0">
              <img src="../../assets/images/chocolate_icon.png" style="height:30px" />訂購資訊
            </h2>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th class="text-center d-none d-sm-table-cell"></th>
                    <th>品項</th>
                    <th class="text-right">單價</th>
                    <th class="text-right">數量</th>
                    <th class="text-right">總計</th>
                    <th class="text-center">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartData.carts" :key="item.id">
                    <td class="text-center align-middle d-none d-sm-table-cell">
                      <a href="#" @click.prevent="createProduct(item.product.id)" title="前往商品介紹">
                        <img :src="item.product.imageUrl" alt style="height:50px;" />
                      </a>
                    </td>
                    <td class="align-middle">
                      <a
                        class="text-Choco"
                        href="#"
                        @click.prevent="createProduct(item.product.id)"
                        title="前往商品介紹"
                      >{{ item.product.title }}</a>
                      <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                    </td>
                    <td class="text-right align-middle">{{ item.product.price | currency }}</td>
                    <td class="text-right align-middle">
                      <select
                        v-model="item.qty"
                        @change="changeQty(item.id, item.product.id, item.qty)"
                      >
                        <option :value="num" v-for="num in 10" :key="num">{{ num }}</option>
                      </select>
                      {{ item.product.unit }}
                    </td>
                    <td
                      class="text-right align-middle"
                    >{{ item.qty * item.product.price | currency }}</td>
                    <td class="text-center align-middle">
                      <a href="#" class="btn btn-outline-danger" @click.prevent="delCart(item.id)">
                        <i class="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-right mb-4">
              <p class="h5" v-if="cart.total == cart.final_total">
                總計：
                <span class="text-danger">{{ cart.total | currency }}</span> 元
              </p>
              <p
                class="text-secondary"
                v-if="cart.total !== cart.final_total"
              >折扣前總計：{{ cart.total | currency }} 元</p>
              <p class="h5" v-if="cart.final_total !== cart.total">
                折扣後總計：
                <span class="text-danger">{{ cart.final_total | currency }}</span> 元
              </p>
            </div>
            <section>
              <h2 class="font-weight-bold h4 text-center pb-3 mb-0">
                <img src="../../assets/images/chocolate_icon.png" style="height:30px" />優惠碼
              </h2>
              <div class="form-row">
                <div class="col-sm-8 col-12 mb-3">
                  <ValidationProvider name="優惠碼" rules="digits:3" v-slot="{ errors }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入優惠碼"
                      v-model="couponCode"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-sm-4 col-12 mb-3">
                  <a class="btn checkCoupon d-block" @click.prevent="checkCouponCode">使用優惠碼</a>
                </div>
              </div>
              <router-link
                to="/coupon"
                class="d-block toProducts rounded mb-3 text-center"
              >沒有優惠碼嗎？點此參加活動取得優惠碼！</router-link>
              <router-link
                to="/products"
                class="toProducts mb-3 d-block text-center"
                title="前往商品頁面"
                @click.prevent.native="getSearchText('All')"
              >
                <i class="fas fa-arrow-left"></i> 繼續選購商品
              </router-link>
            </section>
          </div>

          <div class="col-lg-8 col-md-10 col-12 mb-5">
            <h2 class="font-weight-bold h4 text-center py-3 mb-0">
              <img src="../../assets/images/chocolate_icon.png" style="height:30px" />填寫訂購資料
            </h2>
            <ValidationObserver v-slot="{ invalid }">
              <form class="form-row justify-content-end" @submit.prevent="createCustomOrder">
                <div class="form-group col-12">
                  <ValidationProvider name="email" rules="email" v-slot="{ errors }">
                    <label for="email">
                      Email
                      <span class="text-danger">*必填</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="請輸入 Email"
                      v-model="form.user.email"
                      :class="{'is-invalid': errors[0] || isInvalidStyle }"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group col-12">
                  <ValidationProvider name="姓名" rules="min:2" v-slot="{ errors }">
                    <label for="name">
                      姓名
                      <span class="text-danger">*必填</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="請輸入姓名"
                      v-model="form.user.name"
                      :class="{'is-invalid': errors[0] || isInvalidStyle }"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group col-12">
                  <ValidationProvider name="電話" rules="min:9" v-slot="{ errors }">
                    <label for="telphone">
                      電話
                      <span class="text-danger">*必填</span>
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      id="telphone"
                      name="telphone"
                      placeholder="請輸入電話"
                      v-model="form.user.tel"
                      :class="{'is-invalid': errors[0] || isInvalidStyle }"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group col-12">
                  <ValidationProvider name="地址" rules="min:9" v-slot="{ errors }">
                    <label for="address">
                      地址
                      <span class="text-danger">*必填</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      name="address"
                      placeholder="請輸入地址"
                      v-model="form.user.address"
                      :class="{'is-invalid': errors[0] || isInvalidStyle }"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group col-12">
                  <label for="textarea">留言</label>
                  <textarea
                    class="form-control"
                    id="textarea"
                    name="message"
                    rows="3"
                    v-model="form.message"
                    placeholder="有什麼話想告訴我們？"
                  ></textarea>
                </div>
                <button type="submit" class="btn checkCoupon font-weight-bold col-12 col-md-6" :disabled="invalid">建立訂單</button>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponCode: "",
      isInvalidStyle: false,
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    delCart(id) {
      this.$store.dispatch("delCart", id);
    },
    checkCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/coupon`;
      vm.$store.dispatch("pushLoadingStatu", true);
      vm.$http.post(api, { data: { code: vm.couponCode } }).then(response => {
        if (response.data.success) {
          vm.$store.dispatch("pushLoadingStatu", false);
          vm.couponCode = "";
          vm.$store.dispatch("updateMessage", {
            message: "優惠碼套用成功",
            status: "success"
          });
          vm.getCart();
        } else {
          vm.$store.dispatch("updateMessage", {
            message: response.data.message,
            status: "danger"
          });
          vm.couponCode = "";
          vm.$store.dispatch("pushLoadingStatu", false);
        }
      });
    },
    changeQty(id, productId, qty) {
      const vm = this;
      vm.$store.dispatch("pushLoadingStatu", true);
      const delAPI = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${id}`;
      const addAPI = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      const changeCart = {
        product_id: productId,
        qty: qty
      };
      vm.$http
        .all([
          vm.$http.delete(delAPI),
          vm.$http.post(addAPI, { data: changeCart })
        ])
        .then(
          vm.$http.spread((delResp, addResp) => {
            vm.getCart();
            vm.$store.dispatch("pushLoadingStatu", false);
            vm.$store.dispatch("updateMessage", {
              message: "購物車變更成功",
              status: "success"
            });
          })
        );
    },
    reCheckCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/coupon`;
      vm.$http.post(api, { data: { code: "888" } }).then(response => {
        if (response.data.success) {
          vm.couponCode = vm.cart.carts.coupon;
          vm.getCart();
        } else {
          vm.getCart();
        }
      });
    },
    createCustomOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order`;
      const formInfo = vm.form.user;
      if (
        formInfo.name === "" ||
        formInfo.email === "" ||
        formInfo.tel === "" ||
        formInfo.address === ""
      ) {
        vm.isInvalidStyle = true;
        vm.$store.dispatch("updateMessage", {
          message: "訂購資料必填欄位為空",
          status: "danger"
        });
      } else {
        vm.isInvalidStyle = false;
        vm.$http.post(api, { data: vm.form }).then(response => {
          if (response.data.success) {
            vm.$router.push(`/checkout/${response.data.orderId}`);
          } else {
            vm.$store.dispatch("updateMessage", {
              message: "訂單建立失敗",
              status: "danger"
            });
          }
          vm.getCart();
        });
      }
    },
    createProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    getSearchText(item) {
      const vm = this;
      vm.$store.dispatch("getSearchText", item);
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    cartData() {
      const data = JSON.parse(JSON.stringify(this.cart));
      return data;
    }
  },
  created() {
    this.getCart();
  }
};
</script>
